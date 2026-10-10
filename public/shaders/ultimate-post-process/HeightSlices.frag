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
    highp vec3 _104 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _112 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _116 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _166 = isnan(1.0) ? Parameters.values[4].x : (isnan(Parameters.values[4].x) ? 1.0 : max(Parameters.values[4].x, 1.0));
    highp float _172 = ((Parameters.cameraPosition.xyz + (((Parameters.cameraForward.xyz + ((Parameters.cameraRight.xyz * ((in_var_TEXCOORD0.x * 2.0) - 1.0)) * Parameters.cameraPosition.w)) + (((Parameters.cameraUp.xyz * (1.0 - (in_var_TEXCOORD0.y * 2.0))) * Parameters.cameraPosition.w) * vec3(0.5625))) * _112)).z - Parameters.values[18].z) - (((Parameters.frame.x * Parameters.values[0].x) * Parameters.values[3].x) * 60.0);
    highp float _180 = fwidth(_172) * 0.64999997615814208984375;
    highp float _181 = isnan(0.20000000298023223876953125) ? _180 : (isnan(_180) ? 0.20000000298023223876953125 : max(_180, 0.20000000298023223876953125));
    highp float _182 = isnan(0.3499999940395355224609375) ? Parameters.values[2].x : (isnan(Parameters.values[2].x) ? 0.3499999940395355224609375 : max(Parameters.values[2].x, 0.3499999940395355224609375));
    highp float _183 = _182 - _181;
    highp float _189 = _182 / (isnan(0.001000000047497451305389404296875) ? _181 : (isnan(_181) ? 0.001000000047497451305389404296875 : max(_181, 0.001000000047497451305389404296875)));
    highp vec2 _199 = vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125) * (isnan(0.25) ? Parameters.values[5].x : (isnan(Parameters.values[5].x) ? 0.25 : max(Parameters.values[5].x, 0.25)));
    highp float _208 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp float _209 = dot(_104, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp vec2 _215 = clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, 0.0) * _199), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _230 = isnan(1.0) ? _208 : (isnan(_208) ? 1.0 : max(_208, 1.0));
    highp float _233 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _215, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _208) / _230) * Parameters.values[6].x) * 12.0;
    highp float _234 = isnan(_233) ? 0.0 : (isnan(0.0) ? _233 : max(0.0, _233));
    highp float _239 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_215, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _209) * Parameters.values[7].x) * 3.0;
    highp float _240 = isnan(_239) ? _234 : (isnan(_234) ? _239 : max(_234, _239));
    highp vec2 _246 = clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 0.0) * _199), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _263 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _246, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _208) / _230) * Parameters.values[6].x) * 12.0;
    highp float _264 = isnan(_263) ? _240 : (isnan(_240) ? _263 : max(_240, _263));
    highp float _269 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_246, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _209) * Parameters.values[7].x) * 3.0;
    highp float _270 = isnan(_269) ? _264 : (isnan(_264) ? _269 : max(_264, _269));
    highp vec2 _276 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 1.0) * _199), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _293 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _276, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _208) / _230) * Parameters.values[6].x) * 12.0;
    highp float _294 = isnan(_293) ? _270 : (isnan(_270) ? _293 : max(_270, _293));
    highp float _299 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_276, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _209) * Parameters.values[7].x) * 3.0;
    highp float _300 = isnan(_299) ? _294 : (isnan(_294) ? _299 : max(_294, _299));
    highp vec2 _306 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -1.0) * _199), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _323 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _306, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _208) / _230) * Parameters.values[6].x) * 12.0;
    highp float _324 = isnan(_323) ? _300 : (isnan(_300) ? _323 : max(_300, _323));
    highp float _329 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_306, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _209) * Parameters.values[7].x) * 3.0;
    highp vec3 _346 = (_104 * Parameters.values[8].x) + (((Parameters.values[19].xyz * clamp((1.0 - smoothstep(isnan(_183) ? 0.0 : (isnan(0.0) ? _183 : max(0.0, _183)), _182 + _181, abs(fract((_172 / _166) + 0.5) - 0.5) * _166)) * (isnan(_189) ? 1.0 : (isnan(1.0) ? _189 : min(1.0, _189))), 0.0, 1.0)) * (0.300000011920928955078125 + (smoothstep(0.07999999821186065673828125, 0.449999988079071044921875, isnan(_329) ? _324 : (isnan(_324) ? _329 : max(_324, _329))) * 2.5))) * Parameters.values[9].x);
    highp vec3 _364 = mix(mix(_346, _104 * _346, vec3(Parameters.values[16].x)), mix((_104 * 2.0) * _346, vec3(1.0) - (((vec3(1.0) - _104) * 2.0) * (vec3(1.0) - _346)), step(vec3(0.5), _104)), vec3(Parameters.values[17].x));
    highp float _381 = _112 * 0.001000000047497451305389404296875;
    bvec3 _506 = isnan(_364);
    bvec3 _507 = isnan(vec3(0.0));
    highp vec3 _508 = max(_364, vec3(0.0));
    highp vec3 _509 = vec3(_506.x ? vec3(0.0).x : _508.x, _506.y ? vec3(0.0).y : _508.y, _506.z ? vec3(0.0).z : _508.z);
    highp vec3 _402 = mix(mix(_104, vec3(_507.x ? _364.x : _509.x, _507.y ? _364.y : _509.y, _507.z ? _364.z : _509.z), vec3((clamp(Parameters.values[10].x * Parameters.values[15].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[12].x, in_var_TEXCOORD0.x), clamp(Parameters.values[11].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_116.z * 255.0) - Parameters.values[13].x))) * step(dot(roundEven(_116.xy * 255.0), vec2(1.0, 256.0)), _112 + (isnan(_381) ? 1.0 : (isnan(1.0) ? _381 : max(1.0, _381)))), clamp(Parameters.values[14].x, 0.0, 1.0)))), _104, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _511 = isnan(_402);
    bvec3 _512 = isnan(vec3(0.0));
    highp vec3 _513 = max(_402, vec3(0.0));
    highp vec3 _514 = vec3(_511.x ? vec3(0.0).x : _513.x, _511.y ? vec3(0.0).y : _513.y, _511.z ? vec3(0.0).z : _513.z);
    highp vec3 _409 = mix(_402 * 12.9200000762939453125, (pow(vec3(_512.x ? _402.x : _514.x, _512.y ? _402.y : _514.y, _512.z ? _402.z : _514.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _402));
    out_var_SV_Target = vec4(_409, 1.0);
}
