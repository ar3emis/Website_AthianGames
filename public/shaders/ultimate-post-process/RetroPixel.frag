#version 300 es
precision mediump float;
precision highp int;

const float _88[16] = float[](0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);

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
    highp vec3 _97 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _105 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _109 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec2 _121 = vec2(1280.0, 720.0) / vec2(isnan(1.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 1.0 : max(Parameters.values[1].x, 1.0)));
    ivec2 _146 = ivec2(floor((in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(isnan(1.0) ? Parameters.values[2].x : (isnan(Parameters.values[2].x) ? 1.0 : max(Parameters.values[2].x, 1.0))))) - ivec2(4) * (ivec2(floor((in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(isnan(1.0) ? Parameters.values[2].x : (isnan(Parameters.values[2].x) ? 1.0 : max(Parameters.values[2].x, 1.0))))) / ivec2(4));
    highp float _157 = (isnan(2.0) ? Parameters.values[3].x : (isnan(Parameters.values[3].x) ? 2.0 : max(Parameters.values[3].x, 2.0))) - 1.0;
    highp vec3 _167 = clamp(floor(((clamp(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp((floor(in_var_TEXCOORD0 * _121) + vec2(0.5)) / _121, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.0), vec3(1.0)) * _157) + vec3(0.5)) + vec3((((_88[(_146.y * 4) + _146.x] + 0.5) * 0.0625) - 0.5) * Parameters.values[4].x)) / vec3(_157), vec3(0.0), vec3(1.0));
    highp vec3 _185 = mix(mix(_167, _97 * _167, vec3(Parameters.values[11].x)), mix((_97 * 2.0) * _167, vec3(1.0) - (((vec3(1.0) - _97) * 2.0) * (vec3(1.0) - _167)), step(vec3(0.5), _97)), vec3(Parameters.values[12].x));
    highp float _203 = _105 * 0.001000000047497451305389404296875;
    bvec3 _263 = isnan(_185);
    bvec3 _264 = isnan(vec3(0.0));
    highp vec3 _265 = max(_185, vec3(0.0));
    highp vec3 _266 = vec3(_263.x ? vec3(0.0).x : _265.x, _263.y ? vec3(0.0).y : _265.y, _263.z ? vec3(0.0).z : _265.z);
    highp vec3 _224 = mix(mix(_97, vec3(_264.x ? _185.x : _266.x, _264.y ? _185.y : _266.y, _264.z ? _185.z : _266.z), vec3((clamp(Parameters.values[5].x * Parameters.values[10].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[7].x, in_var_TEXCOORD0.x), clamp(Parameters.values[6].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_109.z * 255.0) - Parameters.values[8].x))) * step(dot(roundEven(_109.xy * 255.0), vec2(1.0, 256.0)), _105 + (isnan(_203) ? 1.0 : (isnan(1.0) ? _203 : max(1.0, _203)))), clamp(Parameters.values[9].x, 0.0, 1.0)))), _97, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _268 = isnan(_224);
    bvec3 _269 = isnan(vec3(0.0));
    highp vec3 _270 = max(_224, vec3(0.0));
    highp vec3 _271 = vec3(_268.x ? vec3(0.0).x : _270.x, _268.y ? vec3(0.0).y : _270.y, _268.z ? vec3(0.0).z : _270.z);
    out_var_SV_Target = vec4(mix(_224 * 12.9200000762939453125, (pow(vec3(_269.x ? _224.x : _271.x, _269.y ? _224.y : _271.y, _269.z ? _224.z : _271.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _224)), 1.0);
}
