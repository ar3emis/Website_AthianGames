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
    highp vec3 _80 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _88 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _92 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec2 _108 = ((in_var_TEXCOORD0 - vec2(0.5)) * vec2(1.77777779102325439453125, 1.0)) / vec2(isnan(0.100000001490116119384765625) ? Parameters.values[2].x : (isnan(Parameters.values[2].x) ? 0.100000001490116119384765625 : max(Parameters.values[2].x, 0.100000001490116119384765625)));
    highp float _109 = length(_108);
    highp float _111 = clamp(Parameters.values[1].x, 30.0, 170.0);
    highp vec3 _135 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(vec2(0.5) + (((_108 / vec2(isnan(0.001000000047497451305389404296875) ? _109 : (isnan(_109) ? 0.001000000047497451305389404296875 : max(_109, 0.001000000047497451305389404296875)))) * ((tan(((isnan(1.0) ? _109 : (isnan(_109) ? 1.0 : min(_109, 1.0))) * _111) * 0.008726646192371845245361328125) / tan(_111 * 0.008726646192371845245361328125)) * 0.4799999892711639404296875)) * vec2(0.5625, 1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz * (1.0 - smoothstep(0.9900000095367431640625, 1.0, _109));
    highp vec3 _153 = mix(mix(_135, _80 * _135, vec3(Parameters.values[9].x)), mix((_80 * 2.0) * _135, vec3(1.0) - (((vec3(1.0) - _80) * 2.0) * (vec3(1.0) - _135)), step(vec3(0.5), _80)), vec3(Parameters.values[10].x));
    highp float _171 = _88 * 0.001000000047497451305389404296875;
    bvec3 _231 = isnan(_153);
    bvec3 _232 = isnan(vec3(0.0));
    highp vec3 _233 = max(_153, vec3(0.0));
    highp vec3 _234 = vec3(_231.x ? vec3(0.0).x : _233.x, _231.y ? vec3(0.0).y : _233.y, _231.z ? vec3(0.0).z : _233.z);
    highp vec3 _192 = mix(mix(_80, vec3(_232.x ? _153.x : _234.x, _232.y ? _153.y : _234.y, _232.z ? _153.z : _234.z), vec3((clamp(Parameters.values[3].x * Parameters.values[8].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[5].x, in_var_TEXCOORD0.x), clamp(Parameters.values[4].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_92.z * 255.0) - Parameters.values[6].x))) * step(dot(roundEven(_92.xy * 255.0), vec2(1.0, 256.0)), _88 + (isnan(_171) ? 1.0 : (isnan(1.0) ? _171 : max(1.0, _171)))), clamp(Parameters.values[7].x, 0.0, 1.0)))), _80, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _236 = isnan(_192);
    bvec3 _237 = isnan(vec3(0.0));
    highp vec3 _238 = max(_192, vec3(0.0));
    highp vec3 _239 = vec3(_236.x ? vec3(0.0).x : _238.x, _236.y ? vec3(0.0).y : _238.y, _236.z ? vec3(0.0).z : _238.z);
    out_var_SV_Target = vec4(mix(_192 * 12.9200000762939453125, (pow(vec3(_237.x ? _192.x : _239.x, _237.y ? _192.y : _239.y, _237.z ? _192.z : _239.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _192)), 1.0);
}
