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
    highp vec3 _101 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _109 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _113 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec2 _128 = vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125) * (isnan(0.25) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 0.25 : max(Parameters.values[1].x, 0.25)));
    highp float _137 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp float _138 = dot(_101, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp vec2 _144 = clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, 0.0) * _128), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _159 = isnan(1.0) ? _137 : (isnan(_137) ? 1.0 : max(_137, 1.0));
    highp float _162 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _144, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _137) / _159) * Parameters.values[2].x) * 12.0;
    highp float _163 = isnan(_162) ? 0.0 : (isnan(0.0) ? _162 : max(0.0, _162));
    highp float _168 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_144, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _138) * Parameters.values[3].x) * 3.0;
    highp float _169 = isnan(_168) ? _163 : (isnan(_163) ? _168 : max(_163, _168));
    highp vec2 _175 = clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 0.0) * _128), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _192 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _175, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _137) / _159) * Parameters.values[2].x) * 12.0;
    highp float _193 = isnan(_192) ? _169 : (isnan(_169) ? _192 : max(_169, _192));
    highp float _198 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_175, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _138) * Parameters.values[3].x) * 3.0;
    highp float _199 = isnan(_198) ? _193 : (isnan(_193) ? _198 : max(_193, _198));
    highp vec2 _205 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 1.0) * _128), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _222 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _205, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _137) / _159) * Parameters.values[2].x) * 12.0;
    highp float _223 = isnan(_222) ? _199 : (isnan(_199) ? _222 : max(_199, _222));
    highp float _228 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_205, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _138) * Parameters.values[3].x) * 3.0;
    highp float _229 = isnan(_228) ? _223 : (isnan(_223) ? _228 : max(_223, _228));
    highp vec2 _235 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -1.0) * _128), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _252 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _235, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _137) / _159) * Parameters.values[2].x) * 12.0;
    highp float _253 = isnan(_252) ? _229 : (isnan(_229) ? _252 : max(_229, _252));
    highp float _258 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_235, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _138) * Parameters.values[3].x) * 3.0;
    highp vec2 _269 = (in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(isnan(4.0) ? Parameters.values[4].x : (isnan(Parameters.values[4].x) ? 4.0 : max(Parameters.values[4].x, 4.0)));
    highp vec2 _273 = abs(fract(_269 + vec2(0.5)) - vec2(0.5));
    highp vec2 _274 = fwidth(_269);
    highp float _275 = _274.x;
    highp float _278 = smoothstep(_275, _275 * 2.0, _273.x);
    highp float _279 = _274.y;
    highp float _282 = smoothstep(_279, _279 * 2.0, _273.y);
    highp vec3 _290 = mix(vec3(0.017999999225139617919921875, 0.064999997615814208984375, 0.1599999964237213134765625), Parameters.values[13].xyz, vec3(clamp((smoothstep(0.07999999821186065673828125, 0.449999988079071044921875, isnan(_258) ? _253 : (isnan(_253) ? _258 : max(_253, _258))) * 0.949999988079071044921875) + ((1.0 - (isnan(_282) ? _278 : (isnan(_278) ? _282 : min(_278, _282)))) * 0.1500000059604644775390625), 0.0, 1.0)));
    highp vec3 _308 = mix(mix(_290, _101 * _290, vec3(Parameters.values[11].x)), mix((_101 * 2.0) * _290, vec3(1.0) - (((vec3(1.0) - _101) * 2.0) * (vec3(1.0) - _290)), step(vec3(0.5), _101)), vec3(Parameters.values[12].x));
    highp float _326 = _109 * 0.001000000047497451305389404296875;
    bvec3 _431 = isnan(_308);
    bvec3 _432 = isnan(vec3(0.0));
    highp vec3 _433 = max(_308, vec3(0.0));
    highp vec3 _434 = vec3(_431.x ? vec3(0.0).x : _433.x, _431.y ? vec3(0.0).y : _433.y, _431.z ? vec3(0.0).z : _433.z);
    highp vec3 _347 = mix(mix(_101, vec3(_432.x ? _308.x : _434.x, _432.y ? _308.y : _434.y, _432.z ? _308.z : _434.z), vec3((clamp(Parameters.values[5].x * Parameters.values[10].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[7].x, in_var_TEXCOORD0.x), clamp(Parameters.values[6].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_113.z * 255.0) - Parameters.values[8].x))) * step(dot(roundEven(_113.xy * 255.0), vec2(1.0, 256.0)), _109 + (isnan(_326) ? 1.0 : (isnan(1.0) ? _326 : max(1.0, _326)))), clamp(Parameters.values[9].x, 0.0, 1.0)))), _101, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _436 = isnan(_347);
    bvec3 _437 = isnan(vec3(0.0));
    highp vec3 _438 = max(_347, vec3(0.0));
    highp vec3 _439 = vec3(_436.x ? vec3(0.0).x : _438.x, _436.y ? vec3(0.0).y : _438.y, _436.z ? vec3(0.0).z : _438.z);
    out_var_SV_Target = vec4(mix(_347 * 12.9200000762939453125, (pow(vec3(_437.x ? _347.x : _439.x, _437.y ? _347.y : _439.y, _437.z ? _347.z : _439.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _347)), 1.0);
}
