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
    highp vec3 _87 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _95 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _99 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec2 _111 = vec2(1280.0, 720.0) / vec2(isnan(1.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 1.0 : max(Parameters.values[1].x, 1.0)));
    highp vec3 _123 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp((floor(in_var_TEXCOORD0 * _111) + vec2(0.5)) / _111, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    highp vec3 _143 = (((mix(vec3(dot(_123, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))), _123, vec3(Parameters.values[2].x)) - vec3(0.5)) * Parameters.values[3].x) + vec3(0.5)) + vec3(Parameters.values[4].x);
    bvec3 _257 = isnan(_143);
    bvec3 _258 = isnan(vec3(0.0));
    highp vec3 _259 = max(_143, vec3(0.0));
    highp vec3 _260 = vec3(_257.x ? vec3(0.0).x : _259.x, _257.y ? vec3(0.0).y : _259.y, _257.z ? vec3(0.0).z : _259.z);
    highp float _158 = isnan(2.0) ? Parameters.values[6].x : (isnan(Parameters.values[6].x) ? 2.0 : max(Parameters.values[6].x, 2.0));
    highp vec2 _161 = fract((in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(_158));
    highp float _162 = _161.x;
    highp float _163 = 1.0 - _162;
    highp float _164 = isnan(_163) ? _162 : (isnan(_162) ? _163 : min(_162, _163));
    highp float _165 = _161.y;
    highp float _166 = 1.0 - _165;
    highp float _167 = isnan(_166) ? _165 : (isnan(_165) ? _166 : min(_165, _166));
    highp float _168 = isnan(_167) ? _164 : (isnan(_164) ? _167 : min(_164, _167));
    highp float _169 = Parameters.values[7].x / _158;
    highp float _170 = fwidth(_168);
    highp float _171 = isnan(0.00200000009499490261077880859375) ? _170 : (isnan(_170) ? 0.00200000009499490261077880859375 : max(_170, 0.00200000009499490261077880859375));
    highp vec3 _176 = mix(Parameters.values[17].xyz, pow(vec3(_258.x ? _143.x : _260.x, _258.y ? _143.y : _260.y, _258.z ? _143.z : _260.z), vec3(1.0 / (isnan(0.100000001490116119384765625) ? Parameters.values[5].x : (isnan(Parameters.values[5].x) ? 0.100000001490116119384765625 : max(Parameters.values[5].x, 0.100000001490116119384765625))))) * Parameters.values[16].xyz, vec3(smoothstep(_169 - _171, _169 + _171, _168)));
    highp vec3 _194 = mix(mix(_176, _87 * _176, vec3(Parameters.values[14].x)), mix((_87 * 2.0) * _176, vec3(1.0) - (((vec3(1.0) - _87) * 2.0) * (vec3(1.0) - _176)), step(vec3(0.5), _87)), vec3(Parameters.values[15].x));
    highp float _212 = _95 * 0.001000000047497451305389404296875;
    bvec3 _297 = isnan(_194);
    bvec3 _298 = isnan(vec3(0.0));
    highp vec3 _299 = max(_194, vec3(0.0));
    highp vec3 _300 = vec3(_297.x ? vec3(0.0).x : _299.x, _297.y ? vec3(0.0).y : _299.y, _297.z ? vec3(0.0).z : _299.z);
    highp vec3 _233 = mix(mix(_87, vec3(_298.x ? _194.x : _300.x, _298.y ? _194.y : _300.y, _298.z ? _194.z : _300.z), vec3((clamp(Parameters.values[8].x * Parameters.values[13].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[10].x, in_var_TEXCOORD0.x), clamp(Parameters.values[9].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_99.z * 255.0) - Parameters.values[11].x))) * step(dot(roundEven(_99.xy * 255.0), vec2(1.0, 256.0)), _95 + (isnan(_212) ? 1.0 : (isnan(1.0) ? _212 : max(1.0, _212)))), clamp(Parameters.values[12].x, 0.0, 1.0)))), _87, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _302 = isnan(_233);
    bvec3 _303 = isnan(vec3(0.0));
    highp vec3 _304 = max(_233, vec3(0.0));
    highp vec3 _305 = vec3(_302.x ? vec3(0.0).x : _304.x, _302.y ? vec3(0.0).y : _304.y, _302.z ? vec3(0.0).z : _304.z);
    highp vec3 _240 = mix(_233 * 12.9200000762939453125, (pow(vec3(_303.x ? _233.x : _305.x, _303.y ? _233.y : _305.y, _303.z ? _233.z : _305.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _233));
    out_var_SV_Target = vec4(_240, 1.0);
}
