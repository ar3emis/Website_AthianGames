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
    highp vec3 _88 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _96 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _100 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec2 _112 = in_var_TEXCOORD0 - vec2(0.5);
    highp float _114 = smoothstep(Parameters.values[2].x, 0.64999997615814208984375, length(_112));
    highp vec2 _115 = _112 * Parameters.values[1].x;
    highp vec2 _193 = _112 * 2.0;
    highp vec2 _197 = (mix(vec2(1.0, 0.0), _193, vec2(Parameters.values[4].x)) * Parameters.values[3].x) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125);
    highp vec4 _220 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0);
    highp vec3 _228 = (((((((_88 + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 - ((_115 * 1.0) * _114), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 - ((_115 * 2.0) * _114), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 - ((_115 * 3.0) * _114), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 - ((_115 * 4.0) * _114), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 - ((_115 * 5.0) * _114), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 - ((_115 * 6.0) * _114), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) * vec3(0.14285714924335479736328125)) + vec3(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + _197, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).x - _220.x, 0.0, textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 - _197, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).z - _220.z);
    bvec3 _319 = isnan(_228);
    bvec3 _320 = isnan(vec3(0.0));
    highp vec3 _321 = max(_228, vec3(0.0));
    highp vec3 _322 = vec3(_319.x ? vec3(0.0).x : _321.x, _319.y ? vec3(0.0).y : _321.y, _319.z ? vec3(0.0).z : _321.z);
    highp vec2 _237 = _193;
    _237.x = _193.x * mix(1.0, 1.77777779102325439453125, Parameters.values[6].x);
    highp vec3 _243 = vec3(_320.x ? _228.x : _322.x, _320.y ? _228.y : _322.y, _320.z ? _228.z : _322.z) * (1.0 - (clamp(Parameters.values[5].x, 0.0, 1.0) * smoothstep(0.300000011920928955078125, 1.7000000476837158203125, dot(_237, _237))));
    highp vec3 _261 = mix(mix(_243, _88 * _243, vec3(Parameters.values[13].x)), mix((_88 * 2.0) * _243, vec3(1.0) - (((vec3(1.0) - _88) * 2.0) * (vec3(1.0) - _243)), step(vec3(0.5), _88)), vec3(Parameters.values[14].x));
    highp float _279 = _96 * 0.001000000047497451305389404296875;
    bvec3 _329 = isnan(_261);
    bvec3 _330 = isnan(vec3(0.0));
    highp vec3 _331 = max(_261, vec3(0.0));
    highp vec3 _332 = vec3(_329.x ? vec3(0.0).x : _331.x, _329.y ? vec3(0.0).y : _331.y, _329.z ? vec3(0.0).z : _331.z);
    highp vec3 _300 = mix(mix(_88, vec3(_330.x ? _261.x : _332.x, _330.y ? _261.y : _332.y, _330.z ? _261.z : _332.z), vec3((clamp(Parameters.values[7].x * Parameters.values[12].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[9].x, in_var_TEXCOORD0.x), clamp(Parameters.values[8].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_100.z * 255.0) - Parameters.values[10].x))) * step(dot(roundEven(_100.xy * 255.0), vec2(1.0, 256.0)), _96 + (isnan(_279) ? 1.0 : (isnan(1.0) ? _279 : max(1.0, _279)))), clamp(Parameters.values[11].x, 0.0, 1.0)))), _88, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _334 = isnan(_300);
    bvec3 _335 = isnan(vec3(0.0));
    highp vec3 _336 = max(_300, vec3(0.0));
    highp vec3 _337 = vec3(_334.x ? vec3(0.0).x : _336.x, _334.y ? vec3(0.0).y : _336.y, _334.z ? vec3(0.0).z : _336.z);
    out_var_SV_Target = vec4(mix(_300 * 12.9200000762939453125, (pow(vec3(_335.x ? _300.x : _337.x, _335.y ? _300.y : _337.y, _335.z ? _300.z : _337.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _300)), 1.0);
}
