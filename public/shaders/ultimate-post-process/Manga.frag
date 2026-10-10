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
    highp vec3 _111 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _119 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _123 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _142 = dot(_111, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp vec3 _150 = (((mix(vec3(_142), _111, vec3(Parameters.values[1].x)) - vec3(0.5)) * Parameters.values[2].x) + vec3(0.5)) + vec3(Parameters.values[3].x);
    bvec3 _410 = isnan(_150);
    bvec3 _411 = isnan(vec3(0.0));
    highp vec3 _412 = max(_150, vec3(0.0));
    highp vec3 _413 = vec3(_410.x ? vec3(0.0).x : _412.x, _410.y ? vec3(0.0).y : _412.y, _410.z ? vec3(0.0).z : _412.z);
    highp vec3 _156 = pow(vec3(_411.x ? _150.x : _413.x, _411.y ? _150.y : _413.y, _411.z ? _150.z : _413.z), vec3(1.0 / (isnan(0.100000001490116119384765625) ? Parameters.values[4].x : (isnan(Parameters.values[4].x) ? 0.100000001490116119384765625 : max(Parameters.values[4].x, 0.100000001490116119384765625))))) * Parameters.values[19].xyz;
    highp float _173 = length(fract(((in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(isnan(2.0) ? Parameters.values[5].x : (isnan(Parameters.values[5].x) ? 2.0 : max(Parameters.values[5].x, 2.0)))) * mat2(vec2(0.865999996662139892578125, -0.5), vec2(0.5, 0.865999996662139892578125))) - vec2(0.5));
    highp float _176 = 0.4799999892711639404296875 * sqrt(1.0 - clamp(dot(_156, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)), 0.0, 1.0));
    highp float _177 = fwidth(_173);
    highp float _178 = isnan(0.014999999664723873138427734375) ? _177 : (isnan(_177) ? 0.014999999664723873138427734375 : max(_177, 0.014999999664723873138427734375));
    highp vec2 _194 = vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125) * (isnan(0.25) ? Parameters.values[7].x : (isnan(Parameters.values[7].x) ? 0.25 : max(Parameters.values[7].x, 0.25)));
    highp float _203 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec2 _209 = clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, 0.0) * _194), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _224 = isnan(1.0) ? _203 : (isnan(_203) ? 1.0 : max(_203, 1.0));
    highp float _227 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _209, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _203) / _224) * Parameters.values[8].x) * 12.0;
    highp float _228 = isnan(_227) ? 0.0 : (isnan(0.0) ? _227 : max(0.0, _227));
    highp float _233 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_209, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _142) * Parameters.values[9].x) * 3.0;
    highp float _234 = isnan(_233) ? _228 : (isnan(_228) ? _233 : max(_228, _233));
    highp vec2 _240 = clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 0.0) * _194), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _257 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _240, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _203) / _224) * Parameters.values[8].x) * 12.0;
    highp float _258 = isnan(_257) ? _234 : (isnan(_234) ? _257 : max(_234, _257));
    highp float _263 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_240, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _142) * Parameters.values[9].x) * 3.0;
    highp float _264 = isnan(_263) ? _258 : (isnan(_258) ? _263 : max(_258, _263));
    highp vec2 _270 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 1.0) * _194), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _287 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _270, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _203) / _224) * Parameters.values[8].x) * 12.0;
    highp float _288 = isnan(_287) ? _264 : (isnan(_264) ? _287 : max(_264, _287));
    highp float _293 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_270, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _142) * Parameters.values[9].x) * 3.0;
    highp float _294 = isnan(_293) ? _288 : (isnan(_288) ? _293 : max(_288, _293));
    highp vec2 _300 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -1.0) * _194), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _317 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _300, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _203) / _224) * Parameters.values[8].x) * 12.0;
    highp float _318 = isnan(_317) ? _294 : (isnan(_294) ? _317 : max(_294, _317));
    highp float _323 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_300, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _142) * Parameters.values[9].x) * 3.0;
    highp vec3 _334 = mix(mix(_156, Parameters.values[20].xyz, vec3(clamp((1.0 - smoothstep(_176 - _178, _176 + _178, _173)) * Parameters.values[6].x, 0.0, 1.0))), Parameters.values[21].xyz, vec3(clamp(smoothstep(0.07999999821186065673828125, 0.449999988079071044921875, isnan(_323) ? _318 : (isnan(_318) ? _323 : max(_318, _323))) * Parameters.values[10].x, 0.0, 1.0)));
    highp vec3 _352 = mix(mix(_334, _111 * _334, vec3(Parameters.values[17].x)), mix((_111 * 2.0) * _334, vec3(1.0) - (((vec3(1.0) - _111) * 2.0) * (vec3(1.0) - _334)), step(vec3(0.5), _111)), vec3(Parameters.values[18].x));
    highp float _370 = _119 * 0.001000000047497451305389404296875;
    bvec3 _485 = isnan(_352);
    bvec3 _486 = isnan(vec3(0.0));
    highp vec3 _487 = max(_352, vec3(0.0));
    highp vec3 _488 = vec3(_485.x ? vec3(0.0).x : _487.x, _485.y ? vec3(0.0).y : _487.y, _485.z ? vec3(0.0).z : _487.z);
    highp vec3 _391 = mix(mix(_111, vec3(_486.x ? _352.x : _488.x, _486.y ? _352.y : _488.y, _486.z ? _352.z : _488.z), vec3((clamp(Parameters.values[11].x * Parameters.values[16].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[13].x, in_var_TEXCOORD0.x), clamp(Parameters.values[12].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_123.z * 255.0) - Parameters.values[14].x))) * step(dot(roundEven(_123.xy * 255.0), vec2(1.0, 256.0)), _119 + (isnan(_370) ? 1.0 : (isnan(1.0) ? _370 : max(1.0, _370)))), clamp(Parameters.values[15].x, 0.0, 1.0)))), _111, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _490 = isnan(_391);
    bvec3 _491 = isnan(vec3(0.0));
    highp vec3 _492 = max(_391, vec3(0.0));
    highp vec3 _493 = vec3(_490.x ? vec3(0.0).x : _492.x, _490.y ? vec3(0.0).y : _492.y, _490.z ? vec3(0.0).z : _492.z);
    out_var_SV_Target = vec4(mix(_391 * 12.9200000762939453125, (pow(vec3(_491.x ? _391.x : _493.x, _491.y ? _391.y : _493.y, _491.z ? _391.z : _493.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _391)), 1.0);
}
