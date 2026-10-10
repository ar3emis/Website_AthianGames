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
uniform highp sampler2D SPIRV_Cross_CombinednormalTexturepointSampler;

in highp vec2 in_var_TEXCOORD0;
layout(location = 0) out highp vec4 out_var_SV_Target;

void main()
{
    highp vec3 _85 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _93 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _97 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec3 _120 = normalize((textureLod(SPIRV_Cross_CombinednormalTexturepointSampler, in_var_TEXCOORD0, 0.0).xyz * 2.0) + vec3(-1.0, -1.0, -0.99989998340606689453125));
    highp float _121 = length(Parameters.values[10].xyz);
    highp vec3 _140 = mix((Parameters.values[11].xyz * ((clamp(dot(_120, Parameters.values[10].xyz / vec3(isnan(9.9999997473787516355514526367188e-05) ? _121 : (isnan(_121) ? 9.9999997473787516355514526367188e-05 : max(_121, 9.9999997473787516355514526367188e-05)))), 0.0, 1.0) * 0.800000011920928955078125) + 0.20000000298023223876953125)) + (vec3(0.89999997615814208984375, 0.75, 0.60000002384185791015625) * (pow(clamp(1.0 - abs(_120.z), 0.0, 1.0), 3.0) * Parameters.values[1].x)), vec3(0.87999999523162841796875, 0.89999997615814208984375, 0.86000001430511474609375), vec3(step(15000.0, _93)));
    highp vec3 _158 = mix(mix(_140, _85 * _140, vec3(Parameters.values[8].x)), mix((_85 * 2.0) * _140, vec3(1.0) - (((vec3(1.0) - _85) * 2.0) * (vec3(1.0) - _140)), step(vec3(0.5), _85)), vec3(Parameters.values[9].x));
    highp float _176 = _93 * 0.001000000047497451305389404296875;
    bvec3 _228 = isnan(_158);
    bvec3 _229 = isnan(vec3(0.0));
    highp vec3 _230 = max(_158, vec3(0.0));
    highp vec3 _231 = vec3(_228.x ? vec3(0.0).x : _230.x, _228.y ? vec3(0.0).y : _230.y, _228.z ? vec3(0.0).z : _230.z);
    highp vec3 _197 = mix(mix(_85, vec3(_229.x ? _158.x : _231.x, _229.y ? _158.y : _231.y, _229.z ? _158.z : _231.z), vec3((clamp(Parameters.values[2].x * Parameters.values[7].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[4].x, in_var_TEXCOORD0.x), clamp(Parameters.values[3].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_97.z * 255.0) - Parameters.values[5].x))) * step(dot(roundEven(_97.xy * 255.0), vec2(1.0, 256.0)), _93 + (isnan(_176) ? 1.0 : (isnan(1.0) ? _176 : max(1.0, _176)))), clamp(Parameters.values[6].x, 0.0, 1.0)))), _85, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _233 = isnan(_197);
    bvec3 _234 = isnan(vec3(0.0));
    highp vec3 _235 = max(_197, vec3(0.0));
    highp vec3 _236 = vec3(_233.x ? vec3(0.0).x : _235.x, _233.y ? vec3(0.0).y : _235.y, _233.z ? vec3(0.0).z : _235.z);
    out_var_SV_Target = vec4(mix(_197 * 12.9200000762939453125, (pow(vec3(_234.x ? _197.x : _236.x, _234.y ? _197.y : _236.y, _234.z ? _197.z : _236.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _197)), 1.0);
}
