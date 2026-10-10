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
    highp vec3 _98 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _106 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _110 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _129 = isnan(12.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 12.0 : max(Parameters.values[1].x, 12.0));
    highp vec2 _133 = (in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(_129, _129 * 1.7000000476837158203125);
    _133.y = _133.y - (((Parameters.frame.x * Parameters.values[0].x) * Parameters.values[3].x) * (0.60000002384185791015625 + fract(sin(floor(_133.x) * 127.09999847412109375) * 43758.546875)));
    highp vec2 _148 = fract(_133) - vec2(0.5);
    highp float _156 = _148.x + ((fract(sin(dot(floor(_133), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875) - 0.5) * 0.449999988079071044921875);
    highp vec2 _157 = _148;
    _157.x = _156;
    highp vec2 _158 = _157 * vec2(4.545454502105712890625, 5.8823528289794921875);
    highp float _159 = length(_158);
    highp float _161 = 1.0 - smoothstep(0.64999997615814208984375, 1.0, _159);
    highp float _165 = _148.y;
    highp vec3 _205 = (textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + ((((_158 * _161) * Parameters.values[2].x) + vec2((sin(_165 * 30.0) * (((1.0 - smoothstep(0.014999999664723873138427734375, 0.04500000178813934326171875, abs(_156))) * smoothstep(-0.449999988079071044921875, -0.07999999821186065673828125, _165)) * (1.0 - step(0.0, _165)))) * 2.0, 0.0)) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz * (1.0 - (_161 * 0.119999997317790985107421875))) + vec3((exp(-pow((_159 - 0.7200000286102294921875) * 17.0, 2.0)) * clamp((-_158.x) - _158.y, 0.0, 1.0)) * 0.300000011920928955078125);
    highp vec3 _223 = mix(mix(_205, _98 * _205, vec3(Parameters.values[10].x)), mix((_98 * 2.0) * _205, vec3(1.0) - (((vec3(1.0) - _98) * 2.0) * (vec3(1.0) - _205)), step(vec3(0.5), _98)), vec3(Parameters.values[11].x));
    highp float _241 = _106 * 0.001000000047497451305389404296875;
    bvec3 _291 = isnan(_223);
    bvec3 _292 = isnan(vec3(0.0));
    highp vec3 _293 = max(_223, vec3(0.0));
    highp vec3 _294 = vec3(_291.x ? vec3(0.0).x : _293.x, _291.y ? vec3(0.0).y : _293.y, _291.z ? vec3(0.0).z : _293.z);
    highp vec3 _262 = mix(mix(_98, vec3(_292.x ? _223.x : _294.x, _292.y ? _223.y : _294.y, _292.z ? _223.z : _294.z), vec3((clamp(Parameters.values[4].x * Parameters.values[9].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[6].x, in_var_TEXCOORD0.x), clamp(Parameters.values[5].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_110.z * 255.0) - Parameters.values[7].x))) * step(dot(roundEven(_110.xy * 255.0), vec2(1.0, 256.0)), _106 + (isnan(_241) ? 1.0 : (isnan(1.0) ? _241 : max(1.0, _241)))), clamp(Parameters.values[8].x, 0.0, 1.0)))), _98, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _296 = isnan(_262);
    bvec3 _297 = isnan(vec3(0.0));
    highp vec3 _298 = max(_262, vec3(0.0));
    highp vec3 _299 = vec3(_296.x ? vec3(0.0).x : _298.x, _296.y ? vec3(0.0).y : _298.y, _296.z ? vec3(0.0).z : _298.z);
    out_var_SV_Target = vec4(mix(_262 * 12.9200000762939453125, (pow(vec3(_297.x ? _262.x : _299.x, _297.y ? _262.y : _299.y, _297.z ? _262.z : _299.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _262)), 1.0);
}
