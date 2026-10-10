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
    highp vec3 _91 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _99 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _103 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec3 _130 = (((mix(vec3(dot(_91, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))), _91, vec3(Parameters.values[1].x)) - vec3(0.5)) * Parameters.values[2].x) + vec3(0.5)) + vec3(Parameters.values[3].x);
    bvec3 _262 = isnan(_130);
    bvec3 _263 = isnan(vec3(0.0));
    highp vec3 _264 = max(_130, vec3(0.0));
    highp vec3 _265 = vec3(_262.x ? vec3(0.0).x : _264.x, _262.y ? vec3(0.0).y : _264.y, _262.z ? vec3(0.0).z : _264.z);
    highp vec3 _136 = pow(vec3(_263.x ? _130.x : _265.x, _263.y ? _130.y : _265.y, _263.z ? _130.z : _265.z), vec3(1.0 / (isnan(0.100000001490116119384765625) ? Parameters.values[4].x : (isnan(Parameters.values[4].x) ? 0.100000001490116119384765625 : max(Parameters.values[4].x, 0.100000001490116119384765625))))) * Parameters.values[17].xyz;
    highp float _139 = dot(_136, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp vec3 _151 = mix(_136, mix((_136 * 2.0) * _139, vec3(1.0) - (((vec3(1.0) - _136) * 2.0) * (1.0 - _139)), vec3(step(0.5, _139))), vec3(Parameters.values[5].x));
    highp vec3 _185 = _151 + vec3(((fract(sin(dot(floor((in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(isnan(0.25) ? Parameters.values[7].x : (isnan(Parameters.values[7].x) ? 0.25 : max(Parameters.values[7].x, 0.25)))) + vec2(floor((Parameters.frame.x * Parameters.values[0].x) * 24.0) * Parameters.values[8].x), vec2(12.98980045318603515625, 78.233001708984375))) * 43758.546875) - 0.5) * Parameters.values[6].x) * (0.4000000059604644775390625 + (0.60000002384185791015625 * (1.0 - dot(_151, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))))));
    bvec3 _277 = isnan(_185);
    bvec3 _278 = isnan(vec3(0.0));
    highp vec3 _279 = max(_185, vec3(0.0));
    highp vec3 _280 = vec3(_277.x ? vec3(0.0).x : _279.x, _277.y ? vec3(0.0).y : _279.y, _277.z ? vec3(0.0).z : _279.z);
    highp vec3 _186 = vec3(_278.x ? _185.x : _280.x, _278.y ? _185.y : _280.y, _278.z ? _185.z : _280.z);
    highp vec3 _204 = mix(mix(_186, _91 * _186, vec3(Parameters.values[15].x)), mix((_91 * 2.0) * _186, vec3(1.0) - (((vec3(1.0) - _91) * 2.0) * (vec3(1.0) - _186)), step(vec3(0.5), _91)), vec3(Parameters.values[16].x));
    highp float _222 = _99 * 0.001000000047497451305389404296875;
    bvec3 _287 = isnan(_204);
    bvec3 _288 = isnan(vec3(0.0));
    highp vec3 _289 = max(_204, vec3(0.0));
    highp vec3 _290 = vec3(_287.x ? vec3(0.0).x : _289.x, _287.y ? vec3(0.0).y : _289.y, _287.z ? vec3(0.0).z : _289.z);
    highp vec3 _243 = mix(mix(_91, vec3(_288.x ? _204.x : _290.x, _288.y ? _204.y : _290.y, _288.z ? _204.z : _290.z), vec3((clamp(Parameters.values[9].x * Parameters.values[14].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[11].x, in_var_TEXCOORD0.x), clamp(Parameters.values[10].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_103.z * 255.0) - Parameters.values[12].x))) * step(dot(roundEven(_103.xy * 255.0), vec2(1.0, 256.0)), _99 + (isnan(_222) ? 1.0 : (isnan(1.0) ? _222 : max(1.0, _222)))), clamp(Parameters.values[13].x, 0.0, 1.0)))), _91, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _292 = isnan(_243);
    bvec3 _293 = isnan(vec3(0.0));
    highp vec3 _294 = max(_243, vec3(0.0));
    highp vec3 _295 = vec3(_292.x ? vec3(0.0).x : _294.x, _292.y ? vec3(0.0).y : _294.y, _292.z ? vec3(0.0).z : _294.z);
    out_var_SV_Target = vec4(mix(_243 * 12.9200000762939453125, (pow(vec3(_293.x ? _243.x : _295.x, _293.y ? _243.y : _295.y, _293.z ? _243.z : _295.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _243)), 1.0);
}
