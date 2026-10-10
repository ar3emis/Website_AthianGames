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
    highp vec3 _112 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _120 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _124 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec2 _139 = vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125) * (isnan(0.25) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 0.25 : max(Parameters.values[1].x, 0.25)));
    highp float _148 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp float _149 = dot(_112, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp vec2 _155 = clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, 0.0) * _139), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _170 = isnan(1.0) ? _148 : (isnan(_148) ? 1.0 : max(_148, 1.0));
    highp float _173 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _155, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _148) / _170) * Parameters.values[2].x) * 12.0;
    highp float _174 = isnan(_173) ? 0.0 : (isnan(0.0) ? _173 : max(0.0, _173));
    highp float _179 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_155, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _149) * Parameters.values[3].x) * 3.0;
    highp float _180 = isnan(_179) ? _174 : (isnan(_174) ? _179 : max(_174, _179));
    highp vec2 _186 = clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 0.0) * _139), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _203 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _186, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _148) / _170) * Parameters.values[2].x) * 12.0;
    highp float _204 = isnan(_203) ? _180 : (isnan(_180) ? _203 : max(_180, _203));
    highp float _209 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_186, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _149) * Parameters.values[3].x) * 3.0;
    highp float _210 = isnan(_209) ? _204 : (isnan(_204) ? _209 : max(_204, _209));
    highp vec2 _216 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 1.0) * _139), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _233 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _216, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _148) / _170) * Parameters.values[2].x) * 12.0;
    highp float _234 = isnan(_233) ? _210 : (isnan(_210) ? _233 : max(_210, _233));
    highp float _239 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_216, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _149) * Parameters.values[3].x) * 3.0;
    highp float _240 = isnan(_239) ? _234 : (isnan(_234) ? _239 : max(_234, _239));
    highp vec2 _246 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -1.0) * _139), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _263 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _246, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _148) / _170) * Parameters.values[2].x) * 12.0;
    highp float _264 = isnan(_263) ? _240 : (isnan(_240) ? _263 : max(_240, _263));
    highp float _269 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_246, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _149) * Parameters.values[3].x) * 3.0;
    highp vec2 _284 = (in_var_TEXCOORD0 - vec2(0.5)) * vec2(1.77777779102325439453125, 1.0);
    highp float _285 = length(_284);
    highp float _286 = _284.y;
    highp float _287 = _284.x;
    highp float _293 = fract(((Parameters.frame.x * Parameters.values[0].x) * Parameters.values[4].x) - ((atan(_286, _287) * 0.159154951572418212890625) + 0.5));
    highp float _298 = exp(((-_293) * (isnan(1.0) ? Parameters.values[6].x : (isnan(Parameters.values[6].x) ? 1.0 : max(Parameters.values[6].x, 1.0)))) * 3.0);
    highp float _307 = abs(_287);
    highp float _308 = abs(_286);
    highp vec3 _334 = (vec3(0.02500000037252902984619140625, 1.0, 0.2199999988079071044921875) * (((((smoothstep(0.07999999821186065673828125, 0.449999988079071044921875, isnan(_269) ? _264 : (isnan(_264) ? _269 : max(_264, _269))) * (0.2199999988079071044921875 + (_298 * 1.35000002384185791015625))) + (pow(clamp(_149, 0.0, 1.0), 0.75) * (0.119999997317790985107421875 + (_298 * 0.3400000035762786865234375)))) + (((1.0 - smoothstep(0.006000000052154064178466796875, 0.0089999996125698089599609375, abs(fract((_285 * 10.0) + 0.5) - 0.5) * 0.100000001490116119384765625)) * 0.064999997615814208984375) + ((1.0 - smoothstep(0.001000000047497451305389404296875, 0.0030000000260770320892333984375, isnan(_308) ? _307 : (isnan(_307) ? _308 : min(_307, _308)))) * 0.0900000035762786865234375))) + (exp(_293 * (-240.0)) * 0.12999999523162841796875)) + 0.008000000379979610443115234375)) * (1.0 - smoothstep(Parameters.values[5].x - 0.00200000009499490261077880859375, Parameters.values[5].x, _285));
    highp vec3 _352 = mix(mix(_334, _112 * _334, vec3(Parameters.values[13].x)), mix((_112 * 2.0) * _334, vec3(1.0) - (((vec3(1.0) - _112) * 2.0) * (vec3(1.0) - _334)), step(vec3(0.5), _112)), vec3(Parameters.values[14].x));
    highp float _370 = _120 * 0.001000000047497451305389404296875;
    bvec3 _475 = isnan(_352);
    bvec3 _476 = isnan(vec3(0.0));
    highp vec3 _477 = max(_352, vec3(0.0));
    highp vec3 _478 = vec3(_475.x ? vec3(0.0).x : _477.x, _475.y ? vec3(0.0).y : _477.y, _475.z ? vec3(0.0).z : _477.z);
    highp vec3 _391 = mix(mix(_112, vec3(_476.x ? _352.x : _478.x, _476.y ? _352.y : _478.y, _476.z ? _352.z : _478.z), vec3((clamp(Parameters.values[7].x * Parameters.values[12].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[9].x, in_var_TEXCOORD0.x), clamp(Parameters.values[8].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_124.z * 255.0) - Parameters.values[10].x))) * step(dot(roundEven(_124.xy * 255.0), vec2(1.0, 256.0)), _120 + (isnan(_370) ? 1.0 : (isnan(1.0) ? _370 : max(1.0, _370)))), clamp(Parameters.values[11].x, 0.0, 1.0)))), _112, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _480 = isnan(_391);
    bvec3 _481 = isnan(vec3(0.0));
    highp vec3 _482 = max(_391, vec3(0.0));
    highp vec3 _483 = vec3(_480.x ? vec3(0.0).x : _482.x, _480.y ? vec3(0.0).y : _482.y, _480.z ? vec3(0.0).z : _482.z);
    highp vec3 _398 = mix(_391 * 12.9200000762939453125, (pow(vec3(_481.x ? _391.x : _483.x, _481.y ? _391.y : _483.y, _481.z ? _391.z : _483.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _391));
    out_var_SV_Target = vec4(_398, 1.0);
}
