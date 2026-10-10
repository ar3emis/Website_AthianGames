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
    highp vec3 _104 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _112 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _116 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _138 = clamp(Parameters.values[1].x, 0.0, 1.0);
    highp vec2 _141 = (in_var_TEXCOORD0 * vec2(1.77777779102325439453125, 1.0)) * (isnan(1.0) ? Parameters.values[3].x : (isnan(Parameters.values[3].x) ? 1.0 : max(Parameters.values[3].x, 1.0)));
    highp float _143 = (-(Parameters.frame.x * Parameters.values[0].x)) * Parameters.values[2].x;
    highp vec2 _146 = _141 + vec2(0.0, _143 * 5.0);
    highp vec2 _147 = floor(_146);
    highp vec2 _148 = fract(_146);
    highp vec2 _152 = (_148 * _148) * (vec2(3.0) - (_148 * 2.0));
    highp float _162 = _152.x;
    highp vec2 _179 = (_146 * 2.0299999713897705078125) + vec2(19.0);
    highp vec2 _180 = floor(_179);
    highp vec2 _181 = fract(_179);
    highp vec2 _185 = (_181 * _181) * (vec2(3.0) - (_181 * 2.0));
    highp float _195 = _185.x;
    highp vec2 _213 = (_146 * 4.110000133514404296875) + vec2(41.0);
    highp vec2 _214 = floor(_213);
    highp vec2 _215 = fract(_213);
    highp vec2 _219 = (_215 * _215) * (vec2(3.0) - (_215 * 2.0));
    highp float _229 = _219.x;
    highp float _247 = 1.0 - in_var_TEXCOORD0.x;
    highp float _248 = isnan(_247) ? in_var_TEXCOORD0.x : (isnan(in_var_TEXCOORD0.x) ? _247 : min(in_var_TEXCOORD0.x, _247));
    highp float _250 = 1.0 - in_var_TEXCOORD0.y;
    highp float _251 = isnan(_250) ? in_var_TEXCOORD0.y : (isnan(in_var_TEXCOORD0.y) ? _250 : min(in_var_TEXCOORD0.y, _250));
    highp float _252 = isnan(_251) ? _248 : (isnan(_248) ? _251 : min(_248, _251));
    highp float _253 = 0.064999997615814208984375 * (((mix(mix(fract(sin(dot(_147, vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_147 + vec2(1.0, 0.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _162), mix(fract(sin(dot(_147 + vec2(0.0, 1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_147 + vec2(1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _162), _152.y) * 0.569999992847442626953125) + (mix(mix(fract(sin(dot(_180, vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_180 + vec2(1.0, 0.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _195), mix(fract(sin(dot(_180 + vec2(0.0, 1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_180 + vec2(1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _195), _185.y) * 0.2800000011920928955078125)) + (mix(mix(fract(sin(dot(_214, vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_214 + vec2(1.0, 0.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _229), mix(fract(sin(dot(_214 + vec2(0.0, 1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_214 + vec2(1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _229), _219.y) * 0.1500000059604644775390625));
    highp float _255 = _138 * (0.07500000298023223876953125 + _253);
    highp float _256 = fwidth(_252);
    highp float _257 = isnan(0.00200000009499490261077880859375) ? _256 : (isnan(_256) ? 0.00200000009499490261077880859375 : max(_256, 0.00200000009499490261077880859375));
    highp float _261 = 1.0 - smoothstep(_255, (_255 + 0.0350000001490116119384765625) + _257, _252);
    highp vec2 _271 = (_141 * 2.7000000476837158203125) + vec2(0.0, _143 * 12.0);
    highp vec2 _272 = floor(_271);
    highp vec2 _273 = fract(_271);
    highp vec2 _277 = (_273 * _273) * (vec2(3.0) - (_273 * 2.0));
    highp float _287 = _277.x;
    highp vec3 _316 = mix(_104, (_104 * mix(1.0, 0.36000001430511474609375, _261 * _138)) + (((Parameters.values[12].xyz * ((_261 * 0.2199999988079071044921875) + (exp(-pow((_252 - _255) / (0.006000000052154064178466796875 + _257), 2.0)) * 0.4000000059604644775390625))) * _138) * (0.75 + (0.25 * mix(mix(fract(sin(dot(_272, vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_272 + vec2(1.0, 0.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _287), mix(fract(sin(dot(_272 + vec2(0.0, 1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_272 + vec2(1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _287), _277.y)))), vec3(smoothstep(0.0, 0.0599999986588954925537109375, _138)));
    highp vec3 _334 = mix(mix(_316, _104 * _316, vec3(Parameters.values[10].x)), mix((_104 * 2.0) * _316, vec3(1.0) - (((vec3(1.0) - _104) * 2.0) * (vec3(1.0) - _316)), step(vec3(0.5), _104)), vec3(Parameters.values[11].x));
    highp float _351 = _112 * 0.001000000047497451305389404296875;
    bvec3 _421 = isnan(_334);
    bvec3 _422 = isnan(vec3(0.0));
    highp vec3 _423 = max(_334, vec3(0.0));
    highp vec3 _424 = vec3(_421.x ? vec3(0.0).x : _423.x, _421.y ? vec3(0.0).y : _423.y, _421.z ? vec3(0.0).z : _423.z);
    highp vec3 _372 = mix(mix(_104, vec3(_422.x ? _334.x : _424.x, _422.y ? _334.y : _424.y, _422.z ? _334.z : _424.z), vec3((clamp(Parameters.values[4].x * Parameters.values[9].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[6].x, in_var_TEXCOORD0.x), clamp(Parameters.values[5].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_116.z * 255.0) - Parameters.values[7].x))) * step(dot(roundEven(_116.xy * 255.0), vec2(1.0, 256.0)), _112 + (isnan(_351) ? 1.0 : (isnan(1.0) ? _351 : max(1.0, _351)))), clamp(Parameters.values[8].x, 0.0, 1.0)))), _104, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _426 = isnan(_372);
    bvec3 _427 = isnan(vec3(0.0));
    highp vec3 _428 = max(_372, vec3(0.0));
    highp vec3 _429 = vec3(_426.x ? vec3(0.0).x : _428.x, _426.y ? vec3(0.0).y : _428.y, _426.z ? vec3(0.0).z : _428.z);
    highp vec3 _379 = mix(_372 * 12.9200000762939453125, (pow(vec3(_427.x ? _372.x : _429.x, _427.y ? _372.y : _429.y, _427.z ? _372.z : _429.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _372));
    out_var_SV_Target = vec4(_379, 1.0);
}
