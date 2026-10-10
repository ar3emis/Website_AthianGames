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
    highp vec3 _114 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _122 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _126 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec4 _149 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0);
    highp vec2 _163 = in_var_TEXCOORD0 * vec2(1280.0, 720.0);
    highp vec2 _166 = _163 / vec2(isnan(2.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 2.0 : max(Parameters.values[1].x, 2.0)));
    highp float _180 = length(fract(_166) - vec2(0.5));
    highp float _185 = fwidth(_180);
    highp float _186 = isnan(0.0199999995529651641845703125) ? _185 : (isnan(_185) ? 0.0199999995529651641845703125 : max(_185, 0.0199999995529651641845703125));
    highp float _188 = sqrt(clamp(1.0 - dot(_149.xyz, vec3(0.100000001490116119384765625, 0.550000011920928955078125, 0.3499999940395355224609375)), 0.0, 1.0)) * 0.62000000476837158203125;
    highp float _193 = clamp((_149.x * 0.85000002384185791015625) + ((0.60000002384185791015625 - dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125) * vec2(Parameters.values[2].x, Parameters.values[2].x * 0.4000000059604644775390625)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.300000011920928955078125, 0.589999973773956298828125, 0.10999999940395355224609375))) * 0.4000000059604644775390625), 0.0, 1.0) * 0.4900000095367431640625;
    highp vec2 _210 = _163 / vec2(isnan(0.100000001490116119384765625) ? Parameters.values[4].x : (isnan(Parameters.values[4].x) ? 0.100000001490116119384765625 : max(Parameters.values[4].x, 0.100000001490116119384765625)));
    highp float _213 = _210.y;
    highp vec3 _234 = clamp(((vec3(0.9700000286102294921875, 0.949999988079071044921875, 0.87999999523162841796875) * mix(vec3(1.0), Parameters.values[13].xyz, vec3(1.0 - smoothstep(_188 - _186, _188 + _186, _180)))) * mix(vec3(1.0), Parameters.values[14].xyz, vec3(1.0 - smoothstep(_193 - _186, _193 + _186, abs(fract((_166 * mat2(vec2(0.7070000171661376953125, -0.7070000171661376953125), vec2(0.7070000171661376953125))).x) - 0.5))))) * (1.0 + (Parameters.values[3].x * (((sin((_210.x * 1.7000000476837158203125) + sin(_213 * 0.20999999344348907470703125)) * sin(_213 * 1.89999997615814208984375)) * 0.3499999940395355224609375) + ((fract(sin(dot(floor(_210 * vec2(0.3333333432674407958984375)), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875) - 0.5) * 0.5)))), vec3(0.0), vec3(1.0));
    highp vec3 _252 = mix(mix(_234, _114 * _234, vec3(Parameters.values[11].x)), mix((_114 * 2.0) * _234, vec3(1.0) - (((vec3(1.0) - _114) * 2.0) * (vec3(1.0) - _234)), step(vec3(0.5), _114)), vec3(Parameters.values[12].x));
    highp float _270 = _122 * 0.001000000047497451305389404296875;
    bvec3 _330 = isnan(_252);
    bvec3 _331 = isnan(vec3(0.0));
    highp vec3 _332 = max(_252, vec3(0.0));
    highp vec3 _333 = vec3(_330.x ? vec3(0.0).x : _332.x, _330.y ? vec3(0.0).y : _332.y, _330.z ? vec3(0.0).z : _332.z);
    highp vec3 _291 = mix(mix(_114, vec3(_331.x ? _252.x : _333.x, _331.y ? _252.y : _333.y, _331.z ? _252.z : _333.z), vec3((clamp(Parameters.values[5].x * Parameters.values[10].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[7].x, in_var_TEXCOORD0.x), clamp(Parameters.values[6].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_126.z * 255.0) - Parameters.values[8].x))) * step(dot(roundEven(_126.xy * 255.0), vec2(1.0, 256.0)), _122 + (isnan(_270) ? 1.0 : (isnan(1.0) ? _270 : max(1.0, _270)))), clamp(Parameters.values[9].x, 0.0, 1.0)))), _114, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _335 = isnan(_291);
    bvec3 _336 = isnan(vec3(0.0));
    highp vec3 _337 = max(_291, vec3(0.0));
    highp vec3 _338 = vec3(_335.x ? vec3(0.0).x : _337.x, _335.y ? vec3(0.0).y : _337.y, _335.z ? vec3(0.0).z : _337.z);
    highp vec3 _298 = mix(_291 * 12.9200000762939453125, (pow(vec3(_336.x ? _291.x : _338.x, _336.y ? _291.y : _338.y, _336.z ? _291.z : _338.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _291));
    out_var_SV_Target = vec4(_298, 1.0);
}
