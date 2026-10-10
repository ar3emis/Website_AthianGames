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
    highp vec3 _86 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _94 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _98 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec3 _155 = ((Parameters.cameraPosition.xyz + (((Parameters.cameraForward.xyz + ((Parameters.cameraRight.xyz * ((in_var_TEXCOORD0.x * 2.0) - 1.0)) * Parameters.cameraPosition.w)) + (((Parameters.cameraUp.xyz * (1.0 - (in_var_TEXCOORD0.y * 2.0))) * Parameters.cameraPosition.w) * vec3(0.5625))) * _94)) - Parameters.values[12].xyz) / vec3(isnan(2.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 2.0 : max(Parameters.values[1].x, 2.0)));
    highp vec3 _156 = floor(_155);
    highp float _163 = fract((Parameters.frame.x * Parameters.values[0].x) * Parameters.values[3].x) * Parameters.values[2].x;
    highp vec3 _173 = abs(fract(_155) - vec3(0.5));
    highp float _174 = _173.x;
    highp float _175 = _173.y;
    highp float _176 = _173.z;
    highp float _177 = isnan(_176) ? _175 : (isnan(_175) ? _176 : max(_175, _176));
    highp vec3 _186 = mix(_86, (_86 * 0.070000000298023223876953125) + (Parameters.values[13].xyz * (0.119999997317790985107421875 + (smoothstep(0.430000007152557373046875, 0.4799999892711639404296875, isnan(_177) ? _174 : (isnan(_174) ? _177 : max(_174, _177))) * 1.39999997615814208984375))), vec3(smoothstep(_163 - 80.0, _163 + 20.0, (length(_156) * Parameters.values[1].x) + (fract(sin(dot(_156, vec3(12.98980045318603515625, 78.233001708984375, 45.16400146484375))) * 43758.546875) * 60.0))));
    highp vec3 _204 = mix(mix(_186, _86 * _186, vec3(Parameters.values[10].x)), mix((_86 * 2.0) * _186, vec3(1.0) - (((vec3(1.0) - _86) * 2.0) * (vec3(1.0) - _186)), step(vec3(0.5), _86)), vec3(Parameters.values[11].x));
    highp float _221 = _94 * 0.001000000047497451305389404296875;
    bvec3 _281 = isnan(_204);
    bvec3 _282 = isnan(vec3(0.0));
    highp vec3 _283 = max(_204, vec3(0.0));
    highp vec3 _284 = vec3(_281.x ? vec3(0.0).x : _283.x, _281.y ? vec3(0.0).y : _283.y, _281.z ? vec3(0.0).z : _283.z);
    highp vec3 _242 = mix(mix(_86, vec3(_282.x ? _204.x : _284.x, _282.y ? _204.y : _284.y, _282.z ? _204.z : _284.z), vec3((clamp(Parameters.values[4].x * Parameters.values[9].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[6].x, in_var_TEXCOORD0.x), clamp(Parameters.values[5].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_98.z * 255.0) - Parameters.values[7].x))) * step(dot(roundEven(_98.xy * 255.0), vec2(1.0, 256.0)), _94 + (isnan(_221) ? 1.0 : (isnan(1.0) ? _221 : max(1.0, _221)))), clamp(Parameters.values[8].x, 0.0, 1.0)))), _86, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _286 = isnan(_242);
    bvec3 _287 = isnan(vec3(0.0));
    highp vec3 _288 = max(_242, vec3(0.0));
    highp vec3 _289 = vec3(_286.x ? vec3(0.0).x : _288.x, _286.y ? vec3(0.0).y : _288.y, _286.z ? vec3(0.0).z : _288.z);
    highp vec3 _249 = mix(_242 * 12.9200000762939453125, (pow(vec3(_287.x ? _242.x : _289.x, _287.y ? _242.y : _289.y, _287.z ? _242.z : _289.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _242));
    out_var_SV_Target = vec4(_249, 1.0);
}
