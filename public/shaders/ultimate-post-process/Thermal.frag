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
    highp vec3 _93 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _101 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _105 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _123 = clamp(mix(dot(_93, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)), 1.0 - clamp(_101 / (isnan(1.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 1.0 : max(Parameters.values[1].x, 1.0))), 0.0, 1.0), Parameters.values[2].x), 0.0, 1.0);
    highp vec3 _166 = mix(mix(mix(mix(vec3(0.00999999977648258209228515625, 0.0, 0.07999999821186065673828125), vec3(0.180000007152557373046875, 0.0500000007450580596923828125, 0.89999997615814208984375), vec3(clamp(_123 * 4.0, 0.0, 1.0))), vec3(0.949999988079071044921875, 0.02999999932944774627685546875, 0.070000000298023223876953125), vec3(clamp((_123 - 0.25) * 4.0, 0.0, 1.0))), vec3(1.0, 0.89999997615814208984375, 0.0199999995529651641845703125), vec3(clamp((_123 - 0.5) * 4.0, 0.0, 1.0))), vec3(1.0, 1.0, 0.949999988079071044921875), vec3(clamp((_123 - 0.75) * 4.0, 0.0, 1.0))) * (1.0 - ((0.5 + (0.5 * sin((((in_var_TEXCOORD0.y * 720.0) / (isnan(1.0) ? Parameters.values[4].x : (isnan(Parameters.values[4].x) ? 1.0 : max(Parameters.values[4].x, 1.0)))) + ((Parameters.frame.x * Parameters.values[0].x) * Parameters.values[5].x)) * 6.28318500518798828125))) * Parameters.values[3].x));
    highp vec3 _184 = mix(mix(_166, _93 * _166, vec3(Parameters.values[12].x)), mix((_93 * 2.0) * _166, vec3(1.0) - (((vec3(1.0) - _93) * 2.0) * (vec3(1.0) - _166)), step(vec3(0.5), _93)), vec3(Parameters.values[13].x));
    highp float _202 = _101 * 0.001000000047497451305389404296875;
    bvec3 _257 = isnan(_184);
    bvec3 _258 = isnan(vec3(0.0));
    highp vec3 _259 = max(_184, vec3(0.0));
    highp vec3 _260 = vec3(_257.x ? vec3(0.0).x : _259.x, _257.y ? vec3(0.0).y : _259.y, _257.z ? vec3(0.0).z : _259.z);
    highp vec3 _223 = mix(mix(_93, vec3(_258.x ? _184.x : _260.x, _258.y ? _184.y : _260.y, _258.z ? _184.z : _260.z), vec3((clamp(Parameters.values[6].x * Parameters.values[11].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[8].x, in_var_TEXCOORD0.x), clamp(Parameters.values[7].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_105.z * 255.0) - Parameters.values[9].x))) * step(dot(roundEven(_105.xy * 255.0), vec2(1.0, 256.0)), _101 + (isnan(_202) ? 1.0 : (isnan(1.0) ? _202 : max(1.0, _202)))), clamp(Parameters.values[10].x, 0.0, 1.0)))), _93, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _262 = isnan(_223);
    bvec3 _263 = isnan(vec3(0.0));
    highp vec3 _264 = max(_223, vec3(0.0));
    highp vec3 _265 = vec3(_262.x ? vec3(0.0).x : _264.x, _262.y ? vec3(0.0).y : _264.y, _262.z ? vec3(0.0).z : _264.z);
    highp vec3 _230 = mix(_223 * 12.9200000762939453125, (pow(vec3(_263.x ? _223.x : _265.x, _263.y ? _223.y : _265.y, _263.z ? _223.z : _265.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _223));
    out_var_SV_Target = vec4(_230, 1.0);
}
