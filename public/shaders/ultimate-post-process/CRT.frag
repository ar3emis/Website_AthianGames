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
    highp vec3 _95 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _103 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _107 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec2 _119 = in_var_TEXCOORD0 - vec2(0.5);
    highp vec2 _120 = _119 * 2.0;
    highp vec2 _150 = in_var_TEXCOORD0 * vec2(1280.0, 720.0);
    int _156 = int(floor(_150.x / (isnan(1.0) ? Parameters.values[3].x : (isnan(Parameters.values[3].x) ? 1.0 : max(Parameters.values[3].x, 1.0))))) - 3 * (int(floor(_150.x / (isnan(1.0) ? Parameters.values[3].x : (isnan(Parameters.values[3].x) ? 1.0 : max(Parameters.values[3].x, 1.0))))) / 3);
    highp vec2 _197 = abs(_119) - vec2(0.5 - Parameters.values[6].x);
    highp vec2 _199 = _197 + vec2(Parameters.values[7].x);
    bvec2 _318 = isnan(_199);
    bvec2 _319 = isnan(vec2(0.0));
    highp vec2 _320 = max(_199, vec2(0.0));
    highp vec2 _321 = vec2(_318.x ? vec2(0.0).x : _320.x, _318.y ? vec2(0.0).y : _320.y);
    highp float _203 = _197.x + Parameters.values[7].x;
    highp float _205 = _197.y + Parameters.values[7].x;
    highp float _206 = isnan(_205) ? _203 : (isnan(_203) ? _205 : max(_203, _205));
    highp float _210 = smoothstep(-0.00200000009499490261077880859375, 0.00200000009499490261077880859375, (length(vec2(_319.x ? _199.x : _321.x, _319.y ? _199.y : _321.y)) + (isnan(0.0) ? _206 : (isnan(_206) ? 0.0 : min(_206, 0.0)))) - Parameters.values[7].x);
    highp vec3 _228 = (((textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(clamp(vec2(0.5) + (((_120 * 0.5) * (1.0 + (Parameters.values[1].x * dot(_120, _120)))) / vec2(isnan(0.100000001490116119384765625) ? Parameters.values[2].x : (isnan(Parameters.values[2].x) ? 0.100000001490116119384765625 : max(Parameters.values[2].x, 0.100000001490116119384765625)))), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz * mix(vec3(1.0), vec3((_156 == 0) ? 1.0 : 0.3499999940395355224609375, (_156 == 1) ? 1.0 : 0.3499999940395355224609375, (_156 == 2) ? 1.0 : 0.3499999940395355224609375) * 1.60000002384185791015625, vec3(Parameters.values[4].x))) * (1.0 - (Parameters.values[5].x * (0.5 + (0.5 * cos(_150.y * 3.14159297943115234375)))))) * (1.0 - (0.070000000298023223876953125 * exp(-pow((fract(in_var_TEXCOORD0.y - ((Parameters.frame.x * Parameters.values[0].x) * 0.1500000059604644775390625)) - 0.5) * 25.0, 2.0))))) * (1.0 - _210);
    highp vec3 _233 = _228 + vec3(((((1.0 - smoothstep(0.010999999940395355224609375, 0.01400000043213367462158203125, abs(abs(in_var_TEXCOORD0.x - 0.5) - (0.5 - (Parameters.values[6].x * 0.5))))) * (1.0 - smoothstep(0.2199999988079071044921875, 0.2899999916553497314453125, abs(fract(in_var_TEXCOORD0.y * 14.0) - 0.5)))) * Parameters.values[8].x) * 0.60000002384185791015625) * _210);
    highp vec3 _251 = mix(mix(_233, _95 * _233, vec3(Parameters.values[15].x)), mix((_95 * 2.0) * _233, vec3(1.0) - (((vec3(1.0) - _95) * 2.0) * (vec3(1.0) - _233)), step(vec3(0.5), _95)), vec3(Parameters.values[16].x));
    highp float _268 = _103 * 0.001000000047497451305389404296875;
    bvec3 _338 = isnan(_251);
    bvec3 _339 = isnan(vec3(0.0));
    highp vec3 _340 = max(_251, vec3(0.0));
    highp vec3 _341 = vec3(_338.x ? vec3(0.0).x : _340.x, _338.y ? vec3(0.0).y : _340.y, _338.z ? vec3(0.0).z : _340.z);
    highp vec3 _289 = mix(mix(_95, vec3(_339.x ? _251.x : _341.x, _339.y ? _251.y : _341.y, _339.z ? _251.z : _341.z), vec3((clamp(Parameters.values[9].x * Parameters.values[14].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[11].x, in_var_TEXCOORD0.x), clamp(Parameters.values[10].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_107.z * 255.0) - Parameters.values[12].x))) * step(dot(roundEven(_107.xy * 255.0), vec2(1.0, 256.0)), _103 + (isnan(_268) ? 1.0 : (isnan(1.0) ? _268 : max(1.0, _268)))), clamp(Parameters.values[13].x, 0.0, 1.0)))), _95, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _343 = isnan(_289);
    bvec3 _344 = isnan(vec3(0.0));
    highp vec3 _345 = max(_289, vec3(0.0));
    highp vec3 _346 = vec3(_343.x ? vec3(0.0).x : _345.x, _343.y ? vec3(0.0).y : _345.y, _343.z ? vec3(0.0).z : _345.z);
    out_var_SV_Target = vec4(mix(_289 * 12.9200000762939453125, (pow(vec3(_344.x ? _289.x : _346.x, _344.y ? _289.y : _346.y, _344.z ? _289.z : _346.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _289)), 1.0);
}
