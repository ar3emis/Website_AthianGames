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
    highp vec3 _102 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _110 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _114 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec3 _166 = abs((Parameters.cameraPosition.xyz + (((Parameters.cameraForward.xyz + ((Parameters.cameraRight.xyz * ((in_var_TEXCOORD0.x * 2.0) - 1.0)) * Parameters.cameraPosition.w)) + (((Parameters.cameraUp.xyz * (1.0 - (in_var_TEXCOORD0.y * 2.0))) * Parameters.cameraPosition.w) * vec3(0.5625))) * _110)) - Parameters.values[17].xyz);
    highp float _167 = _166.x;
    highp float _168 = _166.y;
    highp float _169 = _166.z;
    highp float _170 = isnan(_169) ? _168 : (isnan(_168) ? _169 : max(_168, _169));
    highp float _171 = isnan(_170) ? _167 : (isnan(_167) ? _170 : max(_167, _170));
    highp float _174 = fract((Parameters.frame.x * Parameters.values[0].x) * Parameters.values[3].x) * Parameters.values[1].x;
    highp float _181 = _174 - _171;
    highp vec2 _196 = vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125) * (isnan(0.25) ? Parameters.values[4].x : (isnan(Parameters.values[4].x) ? 0.25 : max(Parameters.values[4].x, 0.25)));
    highp float _205 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp float _206 = dot(_102, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp vec2 _212 = clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, 0.0) * _196), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _227 = isnan(1.0) ? _205 : (isnan(_205) ? 1.0 : max(_205, 1.0));
    highp float _230 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _212, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _205) / _227) * Parameters.values[5].x) * 12.0;
    highp float _231 = isnan(_230) ? 0.0 : (isnan(0.0) ? _230 : max(0.0, _230));
    highp float _236 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_212, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _206) * Parameters.values[6].x) * 3.0;
    highp float _237 = isnan(_236) ? _231 : (isnan(_231) ? _236 : max(_231, _236));
    highp vec2 _243 = clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 0.0) * _196), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _260 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _243, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _205) / _227) * Parameters.values[5].x) * 12.0;
    highp float _261 = isnan(_260) ? _237 : (isnan(_237) ? _260 : max(_237, _260));
    highp float _266 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_243, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _206) * Parameters.values[6].x) * 3.0;
    highp float _267 = isnan(_266) ? _261 : (isnan(_261) ? _266 : max(_261, _266));
    highp vec2 _273 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 1.0) * _196), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _290 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _273, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _205) / _227) * Parameters.values[5].x) * 12.0;
    highp float _291 = isnan(_290) ? _267 : (isnan(_267) ? _290 : max(_267, _290));
    highp float _296 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_273, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _206) * Parameters.values[6].x) * 3.0;
    highp float _297 = isnan(_296) ? _291 : (isnan(_291) ? _296 : max(_291, _296));
    highp vec2 _303 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -1.0) * _196), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _320 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _303, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _205) / _227) * Parameters.values[5].x) * 12.0;
    highp float _321 = isnan(_320) ? _297 : (isnan(_297) ? _320 : max(_297, _320));
    highp float _326 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_303, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _206) * Parameters.values[6].x) * 3.0;
    highp vec3 _343 = (_102 * Parameters.values[7].x) + (((Parameters.values[18].xyz * clamp(exp2(pow((_171 - _174) / (isnan(1.0) ? Parameters.values[2].x : (isnan(Parameters.values[2].x) ? 1.0 : max(Parameters.values[2].x, 1.0))), 2.0) * (-3.0)) + ((0.14000000059604644775390625 * exp2((isnan(0.0) ? _181 : (isnan(_181) ? 0.0 : max(_181, 0.0))) * (-0.006666666828095912933349609375))) * step(_171, _174)), 0.0, 1.0)) * (0.300000011920928955078125 + (smoothstep(0.07999999821186065673828125, 0.449999988079071044921875, isnan(_326) ? _321 : (isnan(_321) ? _326 : max(_321, _326))) * 2.5))) * Parameters.values[8].x);
    highp vec3 _361 = mix(mix(_343, _102 * _343, vec3(Parameters.values[15].x)), mix((_102 * 2.0) * _343, vec3(1.0) - (((vec3(1.0) - _102) * 2.0) * (vec3(1.0) - _343)), step(vec3(0.5), _102)), vec3(Parameters.values[16].x));
    highp float _378 = _110 * 0.001000000047497451305389404296875;
    bvec3 _493 = isnan(_361);
    bvec3 _494 = isnan(vec3(0.0));
    highp vec3 _495 = max(_361, vec3(0.0));
    highp vec3 _496 = vec3(_493.x ? vec3(0.0).x : _495.x, _493.y ? vec3(0.0).y : _495.y, _493.z ? vec3(0.0).z : _495.z);
    highp vec3 _399 = mix(mix(_102, vec3(_494.x ? _361.x : _496.x, _494.y ? _361.y : _496.y, _494.z ? _361.z : _496.z), vec3((clamp(Parameters.values[9].x * Parameters.values[14].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[11].x, in_var_TEXCOORD0.x), clamp(Parameters.values[10].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_114.z * 255.0) - Parameters.values[12].x))) * step(dot(roundEven(_114.xy * 255.0), vec2(1.0, 256.0)), _110 + (isnan(_378) ? 1.0 : (isnan(1.0) ? _378 : max(1.0, _378)))), clamp(Parameters.values[13].x, 0.0, 1.0)))), _102, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _498 = isnan(_399);
    bvec3 _499 = isnan(vec3(0.0));
    highp vec3 _500 = max(_399, vec3(0.0));
    highp vec3 _501 = vec3(_498.x ? vec3(0.0).x : _500.x, _498.y ? vec3(0.0).y : _500.y, _498.z ? vec3(0.0).z : _500.z);
    highp vec3 _406 = mix(_399 * 12.9200000762939453125, (pow(vec3(_499.x ? _399.x : _501.x, _499.y ? _399.y : _501.y, _499.z ? _399.z : _501.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _399));
    out_var_SV_Target = vec4(_406, 1.0);
}
