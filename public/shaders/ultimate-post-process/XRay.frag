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
uniform highp sampler2D SPIRV_Cross_CombinednormalTexturepointSampler;

in highp vec2 in_var_TEXCOORD0;
layout(location = 0) out highp vec4 out_var_SV_Target;

void main()
{
    highp vec3 _81 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _89 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _93 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _122 = (_89 / (isnan(1.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 1.0 : max(Parameters.values[1].x, 1.0)))) - ((Parameters.frame.x * Parameters.values[0].x) * Parameters.values[3].x);
    highp float _127 = fwidth(_122) * 0.5;
    highp vec3 _145 = (vec3(0.00999999977648258209228515625, 0.0350000001490116119384765625, 0.0900000035762786865234375) + (vec3(0.1500000059604644775390625, 0.680000007152557373046875, 0.949999988079071044921875) * (((1.0 - smoothstep(Parameters.values[2].x, (Parameters.values[2].x + (isnan(0.119999997317790985107421875) ? _127 : (isnan(_127) ? 0.119999997317790985107421875 : min(_127, 0.119999997317790985107421875)))) + 0.004999999888241291046142578125, abs(fract(_122) - 0.5))) * 0.75) + (pow(clamp(1.0 - abs(((textureLod(SPIRV_Cross_CombinednormalTexturepointSampler, in_var_TEXCOORD0, 0.0).xyz * 2.0) - vec3(1.0)).z), 0.0, 1.0), 2.0) * 0.1500000059604644775390625)))) * (1.0 - step(4000.0, _89));
    highp vec3 _163 = mix(mix(_145, _81 * _145, vec3(Parameters.values[10].x)), mix((_81 * 2.0) * _145, vec3(1.0) - (((vec3(1.0) - _81) * 2.0) * (vec3(1.0) - _145)), step(vec3(0.5), _81)), vec3(Parameters.values[11].x));
    highp float _181 = _89 * 0.001000000047497451305389404296875;
    bvec3 _238 = isnan(_163);
    bvec3 _239 = isnan(vec3(0.0));
    highp vec3 _240 = max(_163, vec3(0.0));
    highp vec3 _241 = vec3(_238.x ? vec3(0.0).x : _240.x, _238.y ? vec3(0.0).y : _240.y, _238.z ? vec3(0.0).z : _240.z);
    highp vec3 _202 = mix(mix(_81, vec3(_239.x ? _163.x : _241.x, _239.y ? _163.y : _241.y, _239.z ? _163.z : _241.z), vec3((clamp(Parameters.values[4].x * Parameters.values[9].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[6].x, in_var_TEXCOORD0.x), clamp(Parameters.values[5].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_93.z * 255.0) - Parameters.values[7].x))) * step(dot(roundEven(_93.xy * 255.0), vec2(1.0, 256.0)), _89 + (isnan(_181) ? 1.0 : (isnan(1.0) ? _181 : max(1.0, _181)))), clamp(Parameters.values[8].x, 0.0, 1.0)))), _81, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _243 = isnan(_202);
    bvec3 _244 = isnan(vec3(0.0));
    highp vec3 _245 = max(_202, vec3(0.0));
    highp vec3 _246 = vec3(_243.x ? vec3(0.0).x : _245.x, _243.y ? vec3(0.0).y : _245.y, _243.z ? vec3(0.0).z : _245.z);
    out_var_SV_Target = vec4(mix(_202 * 12.9200000762939453125, (pow(vec3(_244.x ? _202.x : _246.x, _244.y ? _202.y : _246.y, _244.z ? _202.z : _246.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _202)), 1.0);
}
