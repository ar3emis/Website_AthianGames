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
    highp vec3 _93 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _101 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _105 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec2 _130 = (in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(isnan(4.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 4.0 : max(Parameters.values[1].x, 4.0)));
    highp vec2 _134 = (fract(_130 * vec2(1.0, 0.57735025882720947265625)) * vec2(1.0, 1.73205077648162841796875)) - vec2(0.5, 0.866025388240814208984375);
    highp vec2 _139 = (fract((_130 - vec2(0.5, 0.866025388240814208984375)) * vec2(1.0, 0.57735025882720947265625)) * vec2(1.0, 1.73205077648162841796875)) - vec2(0.5, 0.866025388240814208984375);
    bvec2 _143 = bvec2(dot(_134, _134) < dot(_139, _139));
    highp vec2 _144 = vec2(_143.x ? _134.x : _139.x, _143.y ? _134.y : _139.y);
    highp float _146 = abs(_144.x);
    highp float _148 = dot(abs(_144), vec2(0.5, 0.866025388240814208984375));
    highp float _161 = exp(-pow((length((in_var_TEXCOORD0 - vec2(0.5)) * vec2(1.77777779102325439453125, 1.0)) - (fract((Parameters.frame.x * Parameters.values[0].x) * Parameters.values[3].x) * 0.89999997615814208984375)) * 32.0, 2.0));
    highp vec3 _173 = (_93 * (1.0 - (Parameters.values[2].x * 0.25))) + ((Parameters.values[12].xyz * (((smoothstep(0.449999988079071044921875, 0.4900000095367431640625, isnan(_148) ? _146 : (isnan(_146) ? _148 : max(_146, _148))) * (0.20000000298023223876953125 + (0.800000011920928955078125 * _161))) * 0.800000011920928955078125) + (_161 * 0.4000000059604644775390625))) * Parameters.values[2].x);
    highp vec3 _191 = mix(mix(_173, _93 * _173, vec3(Parameters.values[10].x)), mix((_93 * 2.0) * _173, vec3(1.0) - (((vec3(1.0) - _93) * 2.0) * (vec3(1.0) - _173)), step(vec3(0.5), _93)), vec3(Parameters.values[11].x));
    highp float _209 = _101 * 0.001000000047497451305389404296875;
    bvec3 _264 = isnan(_191);
    bvec3 _265 = isnan(vec3(0.0));
    highp vec3 _266 = max(_191, vec3(0.0));
    highp vec3 _267 = vec3(_264.x ? vec3(0.0).x : _266.x, _264.y ? vec3(0.0).y : _266.y, _264.z ? vec3(0.0).z : _266.z);
    highp vec3 _230 = mix(mix(_93, vec3(_265.x ? _191.x : _267.x, _265.y ? _191.y : _267.y, _265.z ? _191.z : _267.z), vec3((clamp(Parameters.values[4].x * Parameters.values[9].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[6].x, in_var_TEXCOORD0.x), clamp(Parameters.values[5].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_105.z * 255.0) - Parameters.values[7].x))) * step(dot(roundEven(_105.xy * 255.0), vec2(1.0, 256.0)), _101 + (isnan(_209) ? 1.0 : (isnan(1.0) ? _209 : max(1.0, _209)))), clamp(Parameters.values[8].x, 0.0, 1.0)))), _93, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _269 = isnan(_230);
    bvec3 _270 = isnan(vec3(0.0));
    highp vec3 _271 = max(_230, vec3(0.0));
    highp vec3 _272 = vec3(_269.x ? vec3(0.0).x : _271.x, _269.y ? vec3(0.0).y : _271.y, _269.z ? vec3(0.0).z : _271.z);
    highp vec3 _237 = mix(_230 * 12.9200000762939453125, (pow(vec3(_270.x ? _230.x : _272.x, _270.y ? _230.y : _272.y, _270.z ? _230.z : _272.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _230));
    out_var_SV_Target = vec4(_237, 1.0);
}
