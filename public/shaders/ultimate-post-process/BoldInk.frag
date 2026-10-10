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
    highp vec3 _116 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _124 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _128 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec2 _181 = clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0));
    highp vec3 _230 = ((((((((textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + vec2(-0.001562500023283064365386962890625, -0.00277777784503996372222900390625), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + vec2(0.0, -0.00277777784503996372222900390625), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + vec2(0.001562500023283064365386962890625, -0.00277777784503996372222900390625), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + vec2(-0.001562500023283064365386962890625, 0.0), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(_181, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + vec2(0.001562500023283064365386962890625, 0.0), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + vec2(-0.001562500023283064365386962890625, 0.00277777784503996372222900390625), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + vec2(0.0, 0.00277777784503996372222900390625), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + vec2(0.001562500023283064365386962890625, 0.00277777784503996372222900390625), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) * vec3(0.111111111938953399658203125);
    highp float _231 = dot(_230, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp float _237 = isnan(2.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 2.0 : max(Parameters.values[1].x, 2.0));
    highp float _251 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _181, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec2 _280 = (in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(isnan(0.100000001490116119384765625) ? Parameters.values[5].x : (isnan(Parameters.values[5].x) ? 0.100000001490116119384765625 : max(Parameters.values[5].x, 0.100000001490116119384765625)));
    highp float _283 = _280.y;
    highp vec3 _304 = clamp((mix(vec3(0.949999988079071044921875, 0.939999997615814208984375, 0.89999997615814208984375), (floor(clamp((_230 / vec3(isnan(0.0199999995529651641845703125) ? _231 : (isnan(_231) ? 0.0199999995529651641845703125 : max(_231, 0.0199999995529651641845703125)))) * 0.550000011920928955078125, vec3(0.0), vec3(1.0)) * _237) + vec3(0.5)) / vec3(_237), vec3(0.800000011920928955078125)) * (1.0 - (clamp(((_251 - dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, clamp(clamp(in_var_TEXCOORD0 - (vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125) * vec2(Parameters.values[2].x)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xy * 255.0), vec2(1.0, 256.0))) / (isnan(1.0) ? _251 : (isnan(_251) ? 1.0 : max(_251, 1.0)))) * 20.0, 0.0, 1.0) * Parameters.values[3].x))) * (1.0 + (Parameters.values[4].x * (((sin((_280.x * 1.7000000476837158203125) + sin(_283 * 0.20999999344348907470703125)) * sin(_283 * 1.89999997615814208984375)) * 0.3499999940395355224609375) + ((fract(sin(dot(floor(_280 * vec2(0.3333333432674407958984375)), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875) - 0.5) * 0.5)))), vec3(0.0), vec3(1.0));
    highp vec3 _322 = mix(mix(_304, _116 * _304, vec3(Parameters.values[12].x)), mix((_116 * 2.0) * _304, vec3(1.0) - (((vec3(1.0) - _116) * 2.0) * (vec3(1.0) - _304)), step(vec3(0.5), _116)), vec3(Parameters.values[13].x));
    highp float _340 = _124 * 0.001000000047497451305389404296875;
    bvec3 _405 = isnan(_322);
    bvec3 _406 = isnan(vec3(0.0));
    highp vec3 _407 = max(_322, vec3(0.0));
    highp vec3 _408 = vec3(_405.x ? vec3(0.0).x : _407.x, _405.y ? vec3(0.0).y : _407.y, _405.z ? vec3(0.0).z : _407.z);
    highp vec3 _361 = mix(mix(_116, vec3(_406.x ? _322.x : _408.x, _406.y ? _322.y : _408.y, _406.z ? _322.z : _408.z), vec3((clamp(Parameters.values[6].x * Parameters.values[11].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[8].x, in_var_TEXCOORD0.x), clamp(Parameters.values[7].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_128.z * 255.0) - Parameters.values[9].x))) * step(dot(roundEven(_128.xy * 255.0), vec2(1.0, 256.0)), _124 + (isnan(_340) ? 1.0 : (isnan(1.0) ? _340 : max(1.0, _340)))), clamp(Parameters.values[10].x, 0.0, 1.0)))), _116, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _410 = isnan(_361);
    bvec3 _411 = isnan(vec3(0.0));
    highp vec3 _412 = max(_361, vec3(0.0));
    highp vec3 _413 = vec3(_410.x ? vec3(0.0).x : _412.x, _410.y ? vec3(0.0).y : _412.y, _410.z ? vec3(0.0).z : _412.z);
    highp vec3 _368 = mix(_361 * 12.9200000762939453125, (pow(vec3(_411.x ? _361.x : _413.x, _411.y ? _361.y : _413.y, _411.z ? _361.z : _413.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _361));
    out_var_SV_Target = vec4(_368, 1.0);
}
