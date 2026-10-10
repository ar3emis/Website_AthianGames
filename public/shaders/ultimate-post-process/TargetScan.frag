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
    highp vec3 _108 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _116 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _120 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec3 _156 = Parameters.cameraPosition.xyz + (((Parameters.cameraForward.xyz + ((Parameters.cameraRight.xyz * ((in_var_TEXCOORD0.x * 2.0) - 1.0)) * Parameters.cameraPosition.w)) + (((Parameters.cameraUp.xyz * (1.0 - (in_var_TEXCOORD0.y * 2.0))) * Parameters.cameraPosition.w) * vec3(0.5625))) * _116);
    highp float _164 = Parameters.frame.x * Parameters.values[0].x;
    highp float _172 = length(_156 - Parameters.values[15].xyz);
    highp float _176 = fract(_164 * Parameters.values[3].x) * (isnan(1.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 1.0 : max(Parameters.values[1].x, 1.0)));
    highp float _183 = _176 - _172;
    highp vec2 _198 = vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125) * (isnan(0.25) ? Parameters.values[4].x : (isnan(Parameters.values[4].x) ? 0.25 : max(Parameters.values[4].x, 0.25)));
    highp float _207 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp float _208 = dot(_108, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp vec2 _214 = clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, 0.0) * _198), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _229 = isnan(1.0) ? _207 : (isnan(_207) ? 1.0 : max(_207, 1.0));
    highp float _232 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _214, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _207) / _229) * Parameters.values[5].x) * 12.0;
    highp float _233 = isnan(_232) ? 0.0 : (isnan(0.0) ? _232 : max(0.0, _232));
    highp float _238 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_214, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _208) * Parameters.values[6].x) * 3.0;
    highp float _239 = isnan(_238) ? _233 : (isnan(_233) ? _238 : max(_233, _238));
    highp vec2 _245 = clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 0.0) * _198), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _262 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _245, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _207) / _229) * Parameters.values[5].x) * 12.0;
    highp float _263 = isnan(_262) ? _239 : (isnan(_239) ? _262 : max(_239, _262));
    highp float _268 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_245, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _208) * Parameters.values[6].x) * 3.0;
    highp float _269 = isnan(_268) ? _263 : (isnan(_263) ? _268 : max(_263, _268));
    highp vec2 _275 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 1.0) * _198), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _292 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _275, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _207) / _229) * Parameters.values[5].x) * 12.0;
    highp float _293 = isnan(_292) ? _269 : (isnan(_269) ? _292 : max(_269, _292));
    highp float _298 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_275, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _208) * Parameters.values[6].x) * 3.0;
    highp float _299 = isnan(_298) ? _293 : (isnan(_293) ? _298 : max(_293, _298));
    highp vec2 _305 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -1.0) * _198), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _322 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _305, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _207) / _229) * Parameters.values[5].x) * 12.0;
    highp float _323 = isnan(_322) ? _299 : (isnan(_299) ? _322 : max(_299, _322));
    highp float _328 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_305, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _208) * Parameters.values[6].x) * 3.0;
    highp vec3 _337 = _156 - Parameters.values[16].xyz;
    highp float _340 = _337.z;
    highp float _350 = fwidth(_340) * 0.64999997615814208984375;
    highp float _351 = isnan(0.4000000059604644775390625) ? _350 : (isnan(_350) ? 0.4000000059604644775390625 : max(_350, 0.4000000059604644775390625));
    highp float _352 = 3.0 - _351;
    highp vec3 _365 = (_108 * 0.87999999523162841796875) + (Parameters.values[17].xyz * (((clamp(smoothstep(0.07999999821186065673828125, 0.449999988079071044921875, isnan(_328) ? _323 : (isnan(_323) ? _328 : max(_323, _328))) * 0.60000002384185791015625, 0.0, 1.0) * 0.64999997615814208984375) + ((1.0 - smoothstep(isnan(_352) ? 0.0 : (isnan(0.0) ? _352 : max(0.0, _352)), 3.0 + _351, abs(fract(((_340 - (_164 * 75.0)) * 0.0045454544015228748321533203125) + 0.5) - 0.5) * 220.0)) * 0.2800000011920928955078125)) + (clamp(exp2(pow((_172 - _176) / (isnan(1.0) ? Parameters.values[2].x : (isnan(Parameters.values[2].x) ? 1.0 : max(Parameters.values[2].x, 1.0))), 2.0) * (-3.0)) + ((0.180000007152557373046875 * exp2((isnan(0.0) ? _183 : (isnan(_183) ? 0.0 : max(_183, 0.0))) * (-0.0062500000931322574615478515625))) * step(_172, _176)), 0.0, 1.0) * 0.039999999105930328369140625)));
    highp vec3 _383 = mix(mix(_365, _108 * _365, vec3(Parameters.values[13].x)), mix((_108 * 2.0) * _365, vec3(1.0) - (((vec3(1.0) - _108) * 2.0) * (vec3(1.0) - _365)), step(vec3(0.5), _108)), vec3(Parameters.values[14].x));
    highp float _400 = _116 * 0.001000000047497451305389404296875;
    bvec3 _520 = isnan(_383);
    bvec3 _521 = isnan(vec3(0.0));
    highp vec3 _522 = max(_383, vec3(0.0));
    highp vec3 _523 = vec3(_520.x ? vec3(0.0).x : _522.x, _520.y ? vec3(0.0).y : _522.y, _520.z ? vec3(0.0).z : _522.z);
    highp vec3 _421 = mix(mix(_108, vec3(_521.x ? _383.x : _523.x, _521.y ? _383.y : _523.y, _521.z ? _383.z : _523.z), vec3((clamp(Parameters.values[7].x * Parameters.values[12].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[9].x, in_var_TEXCOORD0.x), clamp(Parameters.values[8].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_120.z * 255.0) - Parameters.values[10].x))) * step(dot(roundEven(_120.xy * 255.0), vec2(1.0, 256.0)), _116 + (isnan(_400) ? 1.0 : (isnan(1.0) ? _400 : max(1.0, _400)))), clamp(Parameters.values[11].x, 0.0, 1.0)))), _108, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _525 = isnan(_421);
    bvec3 _526 = isnan(vec3(0.0));
    highp vec3 _527 = max(_421, vec3(0.0));
    highp vec3 _528 = vec3(_525.x ? vec3(0.0).x : _527.x, _525.y ? vec3(0.0).y : _527.y, _525.z ? vec3(0.0).z : _527.z);
    highp vec3 _428 = mix(_421 * 12.9200000762939453125, (pow(vec3(_526.x ? _421.x : _528.x, _526.y ? _421.y : _528.y, _526.z ? _421.z : _528.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _421));
    out_var_SV_Target = vec4(_428, 1.0);
}
