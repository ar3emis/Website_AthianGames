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
    highp vec3 _87 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _95 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _99 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec3 _141 = Parameters.cameraPosition.xyz + (((Parameters.cameraForward.xyz + ((Parameters.cameraRight.xyz * ((in_var_TEXCOORD0.x * 2.0) - 1.0)) * Parameters.cameraPosition.w)) + (((Parameters.cameraUp.xyz * (1.0 - (in_var_TEXCOORD0.y * 2.0))) * Parameters.cameraPosition.w) * vec3(0.5625))) * _95);
    highp vec3 _158 = (_141 - Parameters.values[10].xyz) / vec3(isnan(2.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 2.0 : max(Parameters.values[1].x, 2.0)));
    highp vec3 _163 = fwidth(_158);
    bvec3 _274 = isnan(_163);
    bvec3 _275 = isnan(vec3(0.00200000009499490261077880859375));
    highp vec3 _276 = max(_163, vec3(0.00200000009499490261077880859375));
    highp vec3 _277 = vec3(_274.x ? vec3(0.00200000009499490261077880859375).x : _276.x, _274.y ? vec3(0.00200000009499490261077880859375).y : _276.y, _274.z ? vec3(0.00200000009499490261077880859375).z : _276.z);
    highp vec3 _164 = vec3(_275.x ? _163.x : _277.x, _275.y ? _163.y : _277.y, _275.z ? _163.z : _277.z);
    highp vec3 _171 = abs(normalize((textureLod(SPIRV_Cross_CombinednormalTexturepointSampler, in_var_TEXCOORD0, 0.0).xyz * 2.0) + vec3(-0.99989998340606689453125)));
    highp vec3 _192 = (_87 * 0.1599999964237213134765625) + (mix(vec3(0.89999997615814208984375, 0.2199999988079071044921875, 0.0599999986588954925537109375), Parameters.values[11].xyz, vec3(_171.z)) * (0.100000001490116119384765625 + (((dot(vec3(1.0) - smoothstep(_164 * 0.60000002384185791015625, _164 * 1.39999997615814208984375, abs(fract(_158 + vec3(0.5)) - vec3(0.5))), _171.yzx + _171.zxy) * 0.5) * (0.60000002384185791015625 + (0.4000000059604644775390625 * sin((_141.z * 0.014999999664723873138427734375) - ((Parameters.frame.x * Parameters.values[0].x) * 2.0))))) * 1.60000002384185791015625)));
    highp vec3 _210 = mix(mix(_192, _87 * _192, vec3(Parameters.values[8].x)), mix((_87 * 2.0) * _192, vec3(1.0) - (((vec3(1.0) - _87) * 2.0) * (vec3(1.0) - _192)), step(vec3(0.5), _87)), vec3(Parameters.values[9].x));
    highp float _227 = _95 * 0.001000000047497451305389404296875;
    bvec3 _284 = isnan(_210);
    bvec3 _285 = isnan(vec3(0.0));
    highp vec3 _286 = max(_210, vec3(0.0));
    highp vec3 _287 = vec3(_284.x ? vec3(0.0).x : _286.x, _284.y ? vec3(0.0).y : _286.y, _284.z ? vec3(0.0).z : _286.z);
    highp vec3 _248 = mix(mix(_87, vec3(_285.x ? _210.x : _287.x, _285.y ? _210.y : _287.y, _285.z ? _210.z : _287.z), vec3((clamp(Parameters.values[2].x * Parameters.values[7].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[4].x, in_var_TEXCOORD0.x), clamp(Parameters.values[3].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_99.z * 255.0) - Parameters.values[5].x))) * step(dot(roundEven(_99.xy * 255.0), vec2(1.0, 256.0)), _95 + (isnan(_227) ? 1.0 : (isnan(1.0) ? _227 : max(1.0, _227)))), clamp(Parameters.values[6].x, 0.0, 1.0)))), _87, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _289 = isnan(_248);
    bvec3 _290 = isnan(vec3(0.0));
    highp vec3 _291 = max(_248, vec3(0.0));
    highp vec3 _292 = vec3(_289.x ? vec3(0.0).x : _291.x, _289.y ? vec3(0.0).y : _291.y, _289.z ? vec3(0.0).z : _291.z);
    highp vec3 _255 = mix(_248 * 12.9200000762939453125, (pow(vec3(_290.x ? _248.x : _292.x, _290.y ? _248.y : _292.y, _290.z ? _248.z : _292.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _248));
    out_var_SV_Target = vec4(_255, 1.0);
}
