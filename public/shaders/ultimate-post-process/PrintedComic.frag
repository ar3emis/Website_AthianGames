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
    highp vec3 _121 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _129 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _133 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _145 = dot(_121, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp float _146 = isnan(0.001000000047497451305389404296875) ? _145 : (isnan(_145) ? 0.001000000047497451305389404296875 : max(_145, 0.001000000047497451305389404296875));
    highp float _149 = (isnan(2.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 2.0 : max(Parameters.values[1].x, 2.0))) - 1.0;
    highp float _150 = clamp(_146, 0.0, 1.0) * _149;
    highp float _152 = isnan(0.001000000047497451305389404296875) ? Parameters.values[2].x : (isnan(Parameters.values[2].x) ? 0.001000000047497451305389404296875 : max(Parameters.values[2].x, 0.001000000047497451305389404296875));
    highp float _158 = (floor(_150) + smoothstep(0.5 - _152, 0.5 + _152, fract(_150))) / _149;
    highp vec3 _163 = clamp((_121 * (isnan(0.0599999986588954925537109375) ? _158 : (isnan(_158) ? 0.0599999986588954925537109375 : max(_158, 0.0599999986588954925537109375)))) / vec3(_146), vec3(0.0), vec3(1.0));
    highp vec2 _171 = in_var_TEXCOORD0 * vec2(1280.0, 720.0);
    highp float _180 = length(fract((_171 / vec2(isnan(2.0) ? Parameters.values[3].x : (isnan(Parameters.values[3].x) ? 2.0 : max(Parameters.values[3].x, 2.0)))) * mat2(vec2(0.865999996662139892578125, -0.5), vec2(0.5, 0.865999996662139892578125))) - vec2(0.5));
    highp float _183 = 0.4799999892711639404296875 * sqrt(1.0 - clamp(dot(_163, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)), 0.0, 1.0));
    highp float _184 = fwidth(_180);
    highp float _185 = isnan(0.014999999664723873138427734375) ? _184 : (isnan(_184) ? 0.014999999664723873138427734375 : max(_184, 0.014999999664723873138427734375));
    highp vec2 _201 = vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125) * (isnan(0.25) ? Parameters.values[5].x : (isnan(Parameters.values[5].x) ? 0.25 : max(Parameters.values[5].x, 0.25)));
    highp float _210 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec2 _216 = clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, 0.0) * _201), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _231 = isnan(1.0) ? _210 : (isnan(_210) ? 1.0 : max(_210, 1.0));
    highp float _234 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _216, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _210) / _231) * Parameters.values[6].x) * 12.0;
    highp float _235 = isnan(_234) ? 0.0 : (isnan(0.0) ? _234 : max(0.0, _234));
    highp float _240 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_216, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _145) * Parameters.values[7].x) * 3.0;
    highp float _241 = isnan(_240) ? _235 : (isnan(_235) ? _240 : max(_235, _240));
    highp vec2 _247 = clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 0.0) * _201), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _264 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _247, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _210) / _231) * Parameters.values[6].x) * 12.0;
    highp float _265 = isnan(_264) ? _241 : (isnan(_241) ? _264 : max(_241, _264));
    highp float _270 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_247, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _145) * Parameters.values[7].x) * 3.0;
    highp float _271 = isnan(_270) ? _265 : (isnan(_265) ? _270 : max(_265, _270));
    highp vec2 _277 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 1.0) * _201), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _294 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _277, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _210) / _231) * Parameters.values[6].x) * 12.0;
    highp float _295 = isnan(_294) ? _271 : (isnan(_271) ? _294 : max(_271, _294));
    highp float _300 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_277, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _145) * Parameters.values[7].x) * 3.0;
    highp float _301 = isnan(_300) ? _295 : (isnan(_295) ? _300 : max(_295, _300));
    highp vec2 _307 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -1.0) * _201), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _324 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _307, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _210) / _231) * Parameters.values[6].x) * 12.0;
    highp float _325 = isnan(_324) ? _301 : (isnan(_301) ? _324 : max(_301, _324));
    highp float _330 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_307, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _145) * Parameters.values[7].x) * 3.0;
    highp vec2 _348 = _171 / vec2(isnan(0.100000001490116119384765625) ? Parameters.values[10].x : (isnan(Parameters.values[10].x) ? 0.100000001490116119384765625 : max(Parameters.values[10].x, 0.100000001490116119384765625)));
    highp float _351 = _348.y;
    highp vec3 _372 = clamp(mix(mix(_163, Parameters.values[19].xyz, vec3(clamp((1.0 - smoothstep(_183 - _185, _183 + _185, _180)) * Parameters.values[4].x, 0.0, 1.0))), Parameters.values[20].xyz, vec3(clamp(smoothstep(0.07999999821186065673828125, 0.449999988079071044921875, isnan(_330) ? _325 : (isnan(_325) ? _330 : max(_325, _330))) * Parameters.values[8].x, 0.0, 1.0))) * (1.0 + (Parameters.values[9].x * (((sin((_348.x * 1.7000000476837158203125) + sin(_351 * 0.20999999344348907470703125)) * sin(_351 * 1.89999997615814208984375)) * 0.3499999940395355224609375) + ((fract(sin(dot(floor(_348 * vec2(0.3333333432674407958984375)), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875) - 0.5) * 0.5)))), vec3(0.0), vec3(1.0));
    highp vec3 _390 = mix(mix(_372, _121 * _372, vec3(Parameters.values[17].x)), mix((_121 * 2.0) * _372, vec3(1.0) - (((vec3(1.0) - _121) * 2.0) * (vec3(1.0) - _372)), step(vec3(0.5), _121)), vec3(Parameters.values[18].x));
    highp float _408 = _129 * 0.001000000047497451305389404296875;
    bvec3 _538 = isnan(_390);
    bvec3 _539 = isnan(vec3(0.0));
    highp vec3 _540 = max(_390, vec3(0.0));
    highp vec3 _541 = vec3(_538.x ? vec3(0.0).x : _540.x, _538.y ? vec3(0.0).y : _540.y, _538.z ? vec3(0.0).z : _540.z);
    highp vec3 _429 = mix(mix(_121, vec3(_539.x ? _390.x : _541.x, _539.y ? _390.y : _541.y, _539.z ? _390.z : _541.z), vec3((clamp(Parameters.values[11].x * Parameters.values[16].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[13].x, in_var_TEXCOORD0.x), clamp(Parameters.values[12].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_133.z * 255.0) - Parameters.values[14].x))) * step(dot(roundEven(_133.xy * 255.0), vec2(1.0, 256.0)), _129 + (isnan(_408) ? 1.0 : (isnan(1.0) ? _408 : max(1.0, _408)))), clamp(Parameters.values[15].x, 0.0, 1.0)))), _121, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _543 = isnan(_429);
    bvec3 _544 = isnan(vec3(0.0));
    highp vec3 _545 = max(_429, vec3(0.0));
    highp vec3 _546 = vec3(_543.x ? vec3(0.0).x : _545.x, _543.y ? vec3(0.0).y : _545.y, _543.z ? vec3(0.0).z : _545.z);
    highp vec3 _436 = mix(_429 * 12.9200000762939453125, (pow(vec3(_544.x ? _429.x : _546.x, _544.y ? _429.y : _546.y, _544.z ? _429.z : _546.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _429));
    out_var_SV_Target = vec4(_436, 1.0);
}
