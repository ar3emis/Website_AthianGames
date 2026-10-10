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
    highp vec3 _80 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _88 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _92 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _105 = isnan(3.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 3.0 : max(Parameters.values[1].x, 3.0));
    highp vec2 _107 = (in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(_105);
    highp vec2 _109 = fract(_107);
    highp float _113 = step(_109.x + _109.y, 1.0);
    highp vec3 _131 = clamp(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(((floor(_107) + mix(vec2(0.666999995708465576171875), vec2(0.333000004291534423828125), vec2(_113))) * _105) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz * (1.0 + ((_113 - 0.5) * Parameters.values[2].x)), vec3(0.0), vec3(1.0));
    highp vec3 _149 = mix(mix(_131, _80 * _131, vec3(Parameters.values[9].x)), mix((_80 * 2.0) * _131, vec3(1.0) - (((vec3(1.0) - _80) * 2.0) * (vec3(1.0) - _131)), step(vec3(0.5), _80)), vec3(Parameters.values[10].x));
    highp float _167 = _88 * 0.001000000047497451305389404296875;
    bvec3 _217 = isnan(_149);
    bvec3 _218 = isnan(vec3(0.0));
    highp vec3 _219 = max(_149, vec3(0.0));
    highp vec3 _220 = vec3(_217.x ? vec3(0.0).x : _219.x, _217.y ? vec3(0.0).y : _219.y, _217.z ? vec3(0.0).z : _219.z);
    highp vec3 _188 = mix(mix(_80, vec3(_218.x ? _149.x : _220.x, _218.y ? _149.y : _220.y, _218.z ? _149.z : _220.z), vec3((clamp(Parameters.values[3].x * Parameters.values[8].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[5].x, in_var_TEXCOORD0.x), clamp(Parameters.values[4].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_92.z * 255.0) - Parameters.values[6].x))) * step(dot(roundEven(_92.xy * 255.0), vec2(1.0, 256.0)), _88 + (isnan(_167) ? 1.0 : (isnan(1.0) ? _167 : max(1.0, _167)))), clamp(Parameters.values[7].x, 0.0, 1.0)))), _80, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _222 = isnan(_188);
    bvec3 _223 = isnan(vec3(0.0));
    highp vec3 _224 = max(_188, vec3(0.0));
    highp vec3 _225 = vec3(_222.x ? vec3(0.0).x : _224.x, _222.y ? vec3(0.0).y : _224.y, _222.z ? vec3(0.0).z : _224.z);
    highp vec3 _195 = mix(_188 * 12.9200000762939453125, (pow(vec3(_223.x ? _188.x : _225.x, _223.y ? _188.y : _225.y, _223.z ? _188.z : _225.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _188));
    out_var_SV_Target = vec4(_195, 1.0);
}
