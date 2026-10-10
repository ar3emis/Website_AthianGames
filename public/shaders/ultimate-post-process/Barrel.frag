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
    highp vec3 _78 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _86 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _90 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _106 = in_var_TEXCOORD0.x * (isnan(2.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 2.0 : max(Parameters.values[1].x, 2.0)));
    highp float _107 = floor(_106);
    highp float _109 = fract(_106) - 0.5;
    highp float _114 = _109 * Parameters.values[2].x;
    highp vec2 _120 = clamp(in_var_TEXCOORD0 + (vec2(((((_107 - 2.0 * trunc(_107 / 2.0)) * 2.0) - 1.0) * Parameters.values[2].x) + _114, _114 * 0.25) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0));
    highp vec3 _127 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(_120, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    highp vec2 _129 = vec2(Parameters.values[3].x * 0.0007812500116415321826934814453125, 0.0);
    _127.x = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(_120 + _129, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).x;
    _127.z = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(_120 - _129, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).z;
    highp vec3 _154 = _127 * (0.86000001430511474609375 + (0.14000000059604644775390625 * smoothstep(0.4900000095367431640625, 0.3499999940395355224609375, abs(_109))));
    highp vec3 _172 = mix(mix(_154, _78 * _154, vec3(Parameters.values[10].x)), mix((_78 * 2.0) * _154, vec3(1.0) - (((vec3(1.0) - _78) * 2.0) * (vec3(1.0) - _154)), step(vec3(0.5), _78)), vec3(Parameters.values[11].x));
    highp float _189 = _86 * 0.001000000047497451305389404296875;
    bvec3 _239 = isnan(_172);
    bvec3 _240 = isnan(vec3(0.0));
    highp vec3 _241 = max(_172, vec3(0.0));
    highp vec3 _242 = vec3(_239.x ? vec3(0.0).x : _241.x, _239.y ? vec3(0.0).y : _241.y, _239.z ? vec3(0.0).z : _241.z);
    highp vec3 _210 = mix(mix(_78, vec3(_240.x ? _172.x : _242.x, _240.y ? _172.y : _242.y, _240.z ? _172.z : _242.z), vec3((clamp(Parameters.values[4].x * Parameters.values[9].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[6].x, in_var_TEXCOORD0.x), clamp(Parameters.values[5].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_90.z * 255.0) - Parameters.values[7].x))) * step(dot(roundEven(_90.xy * 255.0), vec2(1.0, 256.0)), _86 + (isnan(_189) ? 1.0 : (isnan(1.0) ? _189 : max(1.0, _189)))), clamp(Parameters.values[8].x, 0.0, 1.0)))), _78, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _244 = isnan(_210);
    bvec3 _245 = isnan(vec3(0.0));
    highp vec3 _246 = max(_210, vec3(0.0));
    highp vec3 _247 = vec3(_244.x ? vec3(0.0).x : _246.x, _244.y ? vec3(0.0).y : _246.y, _244.z ? vec3(0.0).z : _246.z);
    highp vec3 _217 = mix(_210 * 12.9200000762939453125, (pow(vec3(_245.x ? _210.x : _247.x, _245.y ? _210.y : _247.y, _245.z ? _210.z : _247.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _210));
    out_var_SV_Target = vec4(_217, 1.0);
}
