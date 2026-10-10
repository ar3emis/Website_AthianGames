#version 300 es
precision mediump float;
precision highp int;

layout(std140) uniform type_Parameters
{
    highp vec4 values[64];
    highp vec4 frame;
    highp vec4 cameraPosition;
    highp vec4 cameraForward;
    highp vec4 cameraRight;
    highp vec4 cameraUp;
} Parameters;

uniform highp sampler2D SPIRV_Cross_CombinedsceneTexturelinearSampler;
uniform highp sampler2D SPIRV_Cross_CombineddepthTexturepointSampler;
uniform highp sampler2D SPIRV_Cross_CombinedcustomTexturepointSampler;

in highp vec2 in_var_TEXCOORD0;
layout(location = 0) out highp vec4 out_var_SV_Target;

void main()
{
    highp vec3 _94 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _102 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _106 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec2 _118 = vec2(1280.0, 720.0) / vec2(isnan(1.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 1.0 : max(Parameters.values[1].x, 1.0)));
    highp vec2 _122 = (floor(in_var_TEXCOORD0 * _118) + vec2(0.5)) / _118;
    highp vec2 _127 = clamp(clamp(clamp(_122, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp vec3 _130 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, _127, 0.0).xyz;
    highp float _135 = dot(_130, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp float _136 = isnan(0.001000000047497451305389404296875) ? _135 : (isnan(_135) ? 0.001000000047497451305389404296875 : max(_135, 0.001000000047497451305389404296875));
    highp float _139 = (isnan(2.0) ? Parameters.values[2].x : (isnan(Parameters.values[2].x) ? 2.0 : max(Parameters.values[2].x, 2.0))) - 1.0;
    highp float _140 = clamp(_136, 0.0, 1.0) * _139;
    highp float _142 = isnan(0.001000000047497451305389404296875) ? Parameters.values[3].x : (isnan(Parameters.values[3].x) ? 0.001000000047497451305389404296875 : max(Parameters.values[3].x, 0.001000000047497451305389404296875));
    highp float _148 = (floor(_140) + smoothstep(0.5 - _142, 0.5 + _142, fract(_140))) / _139;
    highp vec2 _187 = (mix(vec2(1.0, 0.0), (_122 - vec2(0.5)) * 2.0, vec2(Parameters.values[8].x)) * Parameters.values[7].x) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125);
    highp vec4 _207 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, _127, 0.0);
    highp vec3 _215 = (clamp((_130 * (isnan(0.0599999986588954925537109375) ? _148 : (isnan(_148) ? 0.0599999986588954925537109375 : max(_148, 0.0599999986588954925537109375)))) / vec3(_136), vec3(0.0), vec3(1.0)) * (1.0 - ((0.5 + (0.5 * sin((((in_var_TEXCOORD0.y * 720.0) / (isnan(1.0) ? Parameters.values[5].x : (isnan(Parameters.values[5].x) ? 1.0 : max(Parameters.values[5].x, 1.0)))) + ((Parameters.frame.x * Parameters.values[0].x) * Parameters.values[6].x)) * 6.28318500518798828125))) * Parameters.values[4].x))) + vec3(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(_122 + _187, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).x - _207.x, 0.0, textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(_122 - _187, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).z - _207.z);
    bvec3 _338 = isnan(_215);
    bvec3 _339 = isnan(vec3(0.0));
    highp vec3 _340 = max(_215, vec3(0.0));
    highp vec3 _341 = vec3(_338.x ? vec3(0.0).x : _340.x, _338.y ? vec3(0.0).y : _340.y, _338.z ? vec3(0.0).z : _340.z);
    highp vec2 _222 = (in_var_TEXCOORD0 - vec2(0.5)) * 2.0;
    _222.x = _222.x * mix(1.0, 1.77777779102325439453125, Parameters.values[10].x);
    highp vec3 _232 = vec3(_339.x ? _215.x : _341.x, _339.y ? _215.y : _341.y, _339.z ? _215.z : _341.z) * (1.0 - (clamp(Parameters.values[9].x, 0.0, 1.0) * smoothstep(0.300000011920928955078125, 1.7000000476837158203125, dot(_222, _222))));
    highp vec3 _250 = mix(mix(_232, _94 * _232, vec3(Parameters.values[17].x)), mix((_94 * 2.0) * _232, vec3(1.0) - (((vec3(1.0) - _94) * 2.0) * (vec3(1.0) - _232)), step(vec3(0.5), _94)), vec3(Parameters.values[18].x));
    highp float _268 = _102 * 0.001000000047497451305389404296875;
    bvec3 _348 = isnan(_250);
    bvec3 _349 = isnan(vec3(0.0));
    highp vec3 _350 = max(_250, vec3(0.0));
    highp vec3 _351 = vec3(_348.x ? vec3(0.0).x : _350.x, _348.y ? vec3(0.0).y : _350.y, _348.z ? vec3(0.0).z : _350.z);
    highp vec3 _289 = mix(mix(_94, vec3(_349.x ? _250.x : _351.x, _349.y ? _250.y : _351.y, _349.z ? _250.z : _351.z), vec3((clamp(Parameters.values[11].x * Parameters.values[16].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[13].x, in_var_TEXCOORD0.x), clamp(Parameters.values[12].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_106.z * 255.0) - Parameters.values[14].x))) * step(dot(roundEven(_106.xy * 255.0), vec2(1.0, 256.0)), _102 + (isnan(_268) ? 1.0 : (isnan(1.0) ? _268 : max(1.0, _268)))), clamp(Parameters.values[15].x, 0.0, 1.0)))), _94, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _353 = isnan(_289);
    bvec3 _354 = isnan(vec3(0.0));
    highp vec3 _355 = max(_289, vec3(0.0));
    highp vec3 _356 = vec3(_353.x ? vec3(0.0).x : _355.x, _353.y ? vec3(0.0).y : _355.y, _353.z ? vec3(0.0).z : _355.z);
    highp vec3 _296 = mix(_289 * 12.9200000762939453125, (pow(vec3(_354.x ? _289.x : _356.x, _354.y ? _289.y : _356.y, _354.z ? _289.z : _356.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _289));
    out_var_SV_Target = vec4(_296, 1.0);
}
