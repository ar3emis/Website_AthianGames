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
    highp vec3 _96 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _104 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _108 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _124 = isnan(2.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 2.0 : max(Parameters.values[1].x, 2.0));
    highp vec2 _126 = (in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(_124);
    highp vec2 _127 = floor(_126);
    highp vec2 _136 = vec2(0.2800000011920928955078125) + (fract(sin(vec2(dot(_127, vec2(127.09999847412109375, 311.70001220703125)), dot(_127, vec2(269.5, 183.3000030517578125)))) * 43758.546875) * 0.439999997615814208984375);
    highp float _153 = Parameters.values[2].x * sqrt(1.0 - pow(clamp(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(((_127 + _136) * _124) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)), 0.0, 1.0), 0.5));
    highp float _155 = length(fract(_126) - _136);
    highp float _156 = fwidth(_155);
    highp float _157 = isnan(0.02500000037252902984619140625) ? _156 : (isnan(_156) ? 0.02500000037252902984619140625 : max(_156, 0.02500000037252902984619140625));
    highp vec3 _163 = mix(vec3(0.9700000286102294921875, 0.964999973773956298828125, 0.939999997615814208984375), Parameters.values[11].xyz, vec3(1.0 - smoothstep(_153 - _157, _153 + _157, _155)));
    highp vec3 _181 = mix(mix(_163, _96 * _163, vec3(Parameters.values[9].x)), mix((_96 * 2.0) * _163, vec3(1.0) - (((vec3(1.0) - _96) * 2.0) * (vec3(1.0) - _163)), step(vec3(0.5), _96)), vec3(Parameters.values[10].x));
    highp float _199 = _104 * 0.001000000047497451305389404296875;
    bvec3 _254 = isnan(_181);
    bvec3 _255 = isnan(vec3(0.0));
    highp vec3 _256 = max(_181, vec3(0.0));
    highp vec3 _257 = vec3(_254.x ? vec3(0.0).x : _256.x, _254.y ? vec3(0.0).y : _256.y, _254.z ? vec3(0.0).z : _256.z);
    highp vec3 _220 = mix(mix(_96, vec3(_255.x ? _181.x : _257.x, _255.y ? _181.y : _257.y, _255.z ? _181.z : _257.z), vec3((clamp(Parameters.values[3].x * Parameters.values[8].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[5].x, in_var_TEXCOORD0.x), clamp(Parameters.values[4].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_108.z * 255.0) - Parameters.values[6].x))) * step(dot(roundEven(_108.xy * 255.0), vec2(1.0, 256.0)), _104 + (isnan(_199) ? 1.0 : (isnan(1.0) ? _199 : max(1.0, _199)))), clamp(Parameters.values[7].x, 0.0, 1.0)))), _96, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _259 = isnan(_220);
    bvec3 _260 = isnan(vec3(0.0));
    highp vec3 _261 = max(_220, vec3(0.0));
    highp vec3 _262 = vec3(_259.x ? vec3(0.0).x : _261.x, _259.y ? vec3(0.0).y : _261.y, _259.z ? vec3(0.0).z : _261.z);
    out_var_SV_Target = vec4(mix(_220 * 12.9200000762939453125, (pow(vec3(_260.x ? _220.x : _262.x, _260.y ? _220.y : _262.y, _260.z ? _220.z : _262.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _220)), 1.0);
}
