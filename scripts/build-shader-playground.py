"""Export the pack's HLSL recipes to WebGL2. Build-time only; no compiler ships to visitors.

Usage: python scripts/build-shader-playground.py --source <pack authoring scripts>
  --parameters <shader-parameters.json> --dxc <dxc.exe> --spirv-cross <spirv-cross.exe>
Requires the author's pp50_library and related authoring modules, DXC and SPIRV-Cross.
"""
import argparse, json, re, subprocess, sys, tempfile, types
from pathlib import Path

args=argparse.ArgumentParser()
for key in ['source','parameters','dxc','spirv-cross']: args.add_argument('--'+key,required=True)
a=args.parse_args()
sys.path.insert(0,a.source)
import pp50_library as lib
sys.modules['unreal']=types.ModuleType('unreal')
builder=types.ModuleType('build_pp50'); builder.FUNCTIONS=lib.FUNCTIONS
sys.modules['build_pp50']=builder
import pp_advanced_library as advanced
advanced.register()
functions=lib.FUNCTIONS
obj=functions['ObjectMask']
obj['code']='return PP_LocalMask('+','.join('float3('+n+'X,'+n+'Y,'+n+'Z)' if n in ['Center','Extents'] else n for n,k,d in functions['LocalMask']['inputs'])+');'
specs={s['name']:s for s in lib.LOOKS+advanced.LOCAL+advanced.RECIPES}
records=json.loads(Path(a.parameters).read_text())
root=Path(__file__).resolve().parents[1]
out=root/'public/shaders/ultimate-post-process';out.mkdir(parents=True,exist_ok=True)

def typ(k):return 'float' if k==1 else 'float'+str(k)
def label(n):return re.sub(r'(?<=[a-z0-9])(?=[A-Z])',' ',n.replace('_',' ')).replace('ID','ID')

def bounds(name,v,preset):
    n=name.split('_')[-1]
    if n in ['Split','UseStencil','IncludeStencil','ExcludeStencil','Mode','Animate','Radial','Pulse','Perforations']:return 0,1,1
    if n=='Shape':return 0,2,1
    if n in ['StencilID','IncludeID','ExcludeID']:return 0,255,1
    if n in ['CenterX','CenterY'] and preset.startswith('Screen'):return 0,1,.01
    if n in ['CenterX','CenterY','CenterZ']:return -2000,2000,5
    if n in ['ExtentsX','ExtentsY','ExtentsZ']:return 1,1000,5
    if n in ['Angle','Yaw']:return -180,180,1
    if n in ['Strength','PostProcessBlend','PostProcessMultiplyBlend','PostProcessOverlayBlend','SplitPosition','Amount','Softness','Density','Threshold','Midpoint','Inset','Corner','Scan','Persistence','Jitter','Chroma']:return 0,max(1,v),.01
    if n in ['Steps','Segments','Panels']:return 2,max(16,v*2),1
    if n=='FieldOfView':return 40,175,1
    if n in ['Pixels','Size','Pitch','BlockSize','Cell','Spacing']:return .25,max(24,v*3),.25
    if n in ['Range','Distance','Start']:return 0,max(3000,v*3),10
    if n=='Lift':return -.5,.5,.01
    if n=='Gamma':return .1,3,.01
    if n in ['RotationSpeed','Speed']:return -max(2,abs(v)*3),max(2,abs(v)*3),.01
    if n=='AnimationSpeed':return 0,3,.01
    if n in ['Radius','Feather','HalfWidth','HalfHeight','Width'] and abs(v)<1:return .001,max(1,v*3),.005
    return (min(0,v*3),max(2,v*3),.01 if abs(v)<5 else .1 if abs(v)<50 else 1)

header='''
#define NEEDS_SCENE_TEXTURES 1
#define SHADING_PATH_MOBILE 0
cbuffer Parameters : register(b0) { float4 values[64]; float4 frame; float4 cameraPosition; float4 cameraForward; float4 cameraRight; float4 cameraUp; };
Texture2D<float4> sceneTexture : register(t0);
Texture2D<float4> depthTexture : register(t1);
Texture2D<float4> normalTexture : register(t2);
Texture2D<float4> customTexture : register(t3);
SamplerState linearSampler : register(s0);
SamplerState pointSampler : register(s1);
struct ViewData { float4 ViewSizeAndInvSize; };
static const ViewData View = { float4(1280,720,1.0/1280,1.0/720) };
float decodeDepth(float4 packed) { return dot(round(packed.rg*255),float2(1,256)); }
float4 SceneTextureLookup(float2 uv, int id, bool ignored) {
 if(id==1) return decodeDepth(depthTexture.SampleLevel(pointSampler,saturate(uv),0)).xxxx;
 return sceneTexture.SampleLevel(linearSampler,saturate(uv),0);
}
float2 ViewportUVToSceneTextureUV(float2 uv, int ignored) { return uv; }
float2 ClampSceneTextureUV(float2 uv, int ignored) { return saturate(uv); }
float3 toSRGB(float3 c) { return lerp(12.92*c,1.055*pow(max(c,0),1.0/2.4)-.055,step(.0031308,c)); }
'''
definitions=[]
for name,f in functions.items():
    code=f['code']
    # The shipping SM5 repair: a fourth CMYK channel must not index a float3.
    code=code.replace('float cover=k==3?black:cmy[k];','float4 cmyk=float4(cmy,black); float cover=cmyk[k];')
    definitions.append(typ(f['output'])+' PP_'+name+'('+','.join(typ(k)+' '+n for n,k,d in f['inputs'])+') {\n'+code+'\n}')
base=header+'\n'.join(definitions)
allmeta={}
failures=[]
with tempfile.TemporaryDirectory(prefix='aos-web-') as tmp:
 for record in records:
    spec=specs[record['id']]
    params=[];lookup={}
    for kind in ['scalars','vectors']:
     for n,v in record[kind].items():
        i=len(params);lookup[n]='values['+str(i)+']'+('.x' if kind=='scalars' else '.xyz')
        group=n.split('_')[0] if '_' in n else 'Global'
        item=dict(name=n,label=label(n.split('_',1)[-1]),group=group,default=v)
        if kind=='scalars':item.update(zip(['min','max','step'],bounds(n,v,record['id'])))
        else:item['kind']='vector' if any(s in n for s in ['Origin','Center','Extents','Direction']) else 'color'
        params.append(item)
    assert len(params)<=64
    current='Scene';context={'Scene':'Scene','UV':'uv'};edge=None;body=[]
    def module(name,overrides,prefix):
        global edge
        arguments=[]
        for n,k,d in functions[name]['inputs']:
            if n=='Color':value=current
            elif n=='UV':value=context['UV'] if functions[name]['group'] in ['Scene','UV'] else 'uv'
            elif n in context:value=context[n]
            elif n=='Time':value='frame.x*'+lookup['AnimationSpeed']
            elif n in ['Depth','Normal','WorldPosition','Stencil','CustomDepth']:value=n
            elif n=='Edge':
                if edge is None:edge=module('EdgeMask',dict(Width=overrides.get('Width',1.2)),'Outline')
                value=edge
            else:
                key=prefix+'_'+n
                assert key in lookup, (record['id'],key,'Parameter missing from shipping material')
                value=lookup[key]
            arguments.append(value)
        namevar='stage'+str(len(body))
        body.append(typ(functions[name]['output'])+' '+namevar+' = PP_'+name+'('+','.join(arguments)+');')
        return namevar
    if spec.get('signal'):context['Signal']=module(*spec['signal'],'Scan')
    if spec.get('mask'):context['Mask']=module(*spec['mask'],'Local')
    if spec.get('uv'):
        context['UV']=module(*spec['uv'],'Distortion')
        current=module('SceneSample',{},'Sample')
    for name,values in spec['stages']:
        result=module(name,values,name)
        if 'MixAmount' in values:result='lerp('+current+','+result+','+lookup[name+'_MixAmount']+')'
        current=result
    code=base+'''
float4 main(float4 position : SV_Position, float2 uv : TEXCOORD0) : SV_Target {
 float3 Scene=sceneTexture.SampleLevel(linearSampler,uv,0).rgb;
 float4 packed=depthTexture.SampleLevel(pointSampler,uv,0);
 float Depth=decodeDepth(packed);
 float4 custom=customTexture.SampleLevel(pointSampler,uv,0);
 float CustomDepth=decodeDepth(custom);
 float Stencil=round(custom.b*255);
 float3 Normal=normalTexture.SampleLevel(pointSampler,uv,0).xyz*2-1;
 float3 WorldPosition=cameraPosition.xyz+Depth*(cameraForward.xyz+(uv.x*2-1)*cameraRight.xyz*cameraPosition.w+(1-uv.y*2)*cameraUp.xyz*cameraPosition.w/(1280.0/720));
'''+ '\n'.join(body)+'''
 float3 Color=RECIPE;
 float3 unblended=Color;
 float3 overlay=lerp(2*Scene*Color,1-2*(1-Scene)*(1-Color),step(.5,Scene));
 Color=lerp(Color,Scene*Color,MULTIPLY);
 Color=lerp(Color,overlay,OVERLAY);
 Color=lerp(unblended,Color,saturate(LOCALMASK));
 Color=PP_Composite(Scene,Color,uv,STRENGTH, SPLIT, SPLITPOSITION, Stencil,STENCILID,USESTENCIL,Depth,CustomDepth);
 return float4(toSRGB(lerp(Color,Scene,step(uv.x,frame.y))),1);
}
'''
    for key,value in dict(RECIPE=current,LOCALMASK=context.get('Mask','1'),MULTIPLY=lookup['PostProcessMultiplyBlend'],OVERLAY=lookup['PostProcessOverlayBlend'],STRENGTH=lookup['Strength']+'*'+lookup['PostProcessBlend'],SPLIT=lookup['Split'],SPLITPOSITION=lookup['SplitPosition'],STENCILID=lookup['StencilID'],USESTENCIL=lookup['UseStencil']).items():
        code=re.sub(r'\b'+key+r'\b',lambda m:value,code)
    hlsl=Path(tmp)/'shader.hlsl';spv=Path(tmp)/'shader.spv';hlsl.write_text(code)
    run=subprocess.run([a.dxc,'-spirv','-T','ps_6_0','-E','main','-O3','-Fo',str(spv),str(hlsl)],capture_output=True,text=True)
    if run.returncode:failures.append((record['id'],run.stderr));continue
    output=out/(record['id']+'.frag')
    run=subprocess.run([a.spirv_cross,str(spv),'--es','--version','300','--no-420pack-extension','--output',str(output)],capture_output=True,text=True)
    if run.returncode:failures.append((record['id'],run.stderr));continue
    output.write_text(output.read_text().rstrip()+'\n')
    allmeta[record['id']]=dict(parameters=params,animated=any(n=='Time' for module_name in spec.get('modules',[]) if module_name in functions for n,k,d in functions[module_name]['inputs']))
    # Optimized GLSL reveals whether time is actually used; pause only matters for these shaders.
    allmeta[record['id']]['animated']='frame.x' in output.read_text()
    print('OK',record['id'],len(params))
(root/'lib/products/ultimatePostProcessParameters.json').write_text(json.dumps(allmeta,indent=2)+'\n')
if failures:
 print('\n'.join(name+': '+err[:4000] for name,err in failures));sys.exit(1)
# Ship shader code in the renderer bundle so preset changes also work offline.
(root/'lib/products/ultimatePostProcessShaders.json').write_text(json.dumps({name:(out/(name+'.frag')).read_text() for name in allmeta},indent=2)+'\n')
print('Compiled',len(allmeta),'recipes')
