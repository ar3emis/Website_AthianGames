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
    highp vec3 _106 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _114 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _118 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _130 = Parameters.frame.x * Parameters.values[0].x;
    highp vec2 _158 = clamp(in_var_TEXCOORD0 + vec2(((exp(-pow((fract(in_var_TEXCOORD0.y - (_130 * Parameters.values[2].x)) - 0.5) * 30.0, 2.0)) + ((sin((in_var_TEXCOORD0.y * 200.0) + (_130 * 25.0)) * 0.25) + (sin(_130 * 7.0) * 0.3499999940395355224609375))) * Parameters.values[1].x) * 0.0007812500116415321826934814453125, 0.0), vec2(0.0), vec2(1.0));
    highp vec2 _164 = clamp(clamp(_158, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp vec3 _261 = ((((((textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_164, vec2(0.0), vec2(1.0)), 0.0).xyz + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(_158 - (vec2(Parameters.values[3].x * 0.125, 0.0) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(_158 - (vec2(Parameters.values[3].x * 0.25, 0.0) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(_158 - (vec2(Parameters.values[3].x * 0.375, 0.0) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(_158 - (vec2(Parameters.values[3].x * 0.5, 0.0) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(_158 - (vec2(Parameters.values[3].x * 0.625, 0.0) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(_158 - (vec2(Parameters.values[3].x * 0.75, 0.0) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(_158 - (vec2(Parameters.values[3].x * 0.875, 0.0) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    highp vec3 _274 = (_261 + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(_158 - (vec2(Parameters.values[3].x, 0.0) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) * vec3(0.111111111938953399658203125);
    highp vec3 _330 = clamp((vec3(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, _164, 0.0).xyz, vec3(0.2989999949932098388671875, 0.58700001239776611328125, 0.114000000059604644775390625))) + ((_274 - vec3(dot(_274, vec3(0.2989999949932098388671875, 0.58700001239776611328125, 0.114000000059604644775390625)))) * 0.699999988079071044921875)) + vec3((fract(sin(dot(floor(_158 * vec2(1280.0, 720.0)) + vec2(floor(_130 * 24.0)), vec2(12.98980045318603515625, 78.233001708984375))) * 43758.546875) - 0.5) * (Parameters.values[4].x + (exp(-pow((fract(_158.y - (_130 * 0.180000007152557373046875)) - 0.5) * 25.0, 2.0)) * 0.300000011920928955078125))), vec3(0.0), vec3(1.0)) * (1.0 - ((0.5 + (0.5 * sin((((in_var_TEXCOORD0.y * 720.0) / (isnan(1.0) ? Parameters.values[6].x : (isnan(Parameters.values[6].x) ? 1.0 : max(Parameters.values[6].x, 1.0)))) + (_130 * Parameters.values[7].x)) * 6.28318500518798828125))) * Parameters.values[5].x));
    highp vec3 _348 = mix(mix(_330, _106 * _330, vec3(Parameters.values[14].x)), mix((_106 * 2.0) * _330, vec3(1.0) - (((vec3(1.0) - _106) * 2.0) * (vec3(1.0) - _330)), step(vec3(0.5), _106)), vec3(Parameters.values[15].x));
    highp float _366 = _114 * 0.001000000047497451305389404296875;
    bvec3 _416 = isnan(_348);
    bvec3 _417 = isnan(vec3(0.0));
    highp vec3 _418 = max(_348, vec3(0.0));
    highp vec3 _419 = vec3(_416.x ? vec3(0.0).x : _418.x, _416.y ? vec3(0.0).y : _418.y, _416.z ? vec3(0.0).z : _418.z);
    highp vec3 _387 = mix(mix(_106, vec3(_417.x ? _348.x : _419.x, _417.y ? _348.y : _419.y, _417.z ? _348.z : _419.z), vec3((clamp(Parameters.values[8].x * Parameters.values[13].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[10].x, in_var_TEXCOORD0.x), clamp(Parameters.values[9].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_118.z * 255.0) - Parameters.values[11].x))) * step(dot(roundEven(_118.xy * 255.0), vec2(1.0, 256.0)), _114 + (isnan(_366) ? 1.0 : (isnan(1.0) ? _366 : max(1.0, _366)))), clamp(Parameters.values[12].x, 0.0, 1.0)))), _106, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _421 = isnan(_387);
    bvec3 _422 = isnan(vec3(0.0));
    highp vec3 _423 = max(_387, vec3(0.0));
    highp vec3 _424 = vec3(_421.x ? vec3(0.0).x : _423.x, _421.y ? vec3(0.0).y : _423.y, _421.z ? vec3(0.0).z : _423.z);
    highp vec3 _394 = mix(_387 * 12.9200000762939453125, (pow(vec3(_422.x ? _387.x : _424.x, _422.y ? _387.y : _424.y, _422.z ? _387.z : _424.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _387));
    out_var_SV_Target = vec4(_394, 1.0);
}
