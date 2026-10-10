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
    highp vec2 _116 = (in_var_TEXCOORD0 - vec2(0.5)) * vec2(1.77777779102325439453125, 1.0);
    highp float _118 = isnan(2.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 2.0 : max(Parameters.values[1].x, 2.0));
    highp float _119 = 6.28318500518798828125 / _118;
    highp float _130 = abs((fract((atan(_116.y, _116.x) + ((Parameters.frame.x * Parameters.values[0].x) * Parameters.values[2].x)) / _119) * _119) - (3.141592502593994140625 / _118));
    highp vec3 _145 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(clamp(vec2(0.5) + (vec2(cos(_130) * 0.5625, sin(_130)) * length(_116)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    highp vec3 _165 = (((mix(vec3(dot(_145, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))), _145, vec3(Parameters.values[3].x)) - vec3(0.5)) * Parameters.values[4].x) + vec3(0.5)) + vec3(Parameters.values[5].x);
    bvec3 _252 = isnan(_165);
    bvec3 _253 = isnan(vec3(0.0));
    highp vec3 _254 = max(_165, vec3(0.0));
    highp vec3 _255 = vec3(_252.x ? vec3(0.0).x : _254.x, _252.y ? vec3(0.0).y : _254.y, _252.z ? vec3(0.0).z : _254.z);
    highp vec3 _171 = pow(vec3(_253.x ? _165.x : _255.x, _253.y ? _165.y : _255.y, _253.z ? _165.z : _255.z), vec3(1.0 / (isnan(0.100000001490116119384765625) ? Parameters.values[6].x : (isnan(Parameters.values[6].x) ? 0.100000001490116119384765625 : max(Parameters.values[6].x, 0.100000001490116119384765625))))) * Parameters.values[15].xyz;
    highp vec3 _189 = mix(mix(_171, _86 * _171, vec3(Parameters.values[13].x)), mix((_86 * 2.0) * _171, vec3(1.0) - (((vec3(1.0) - _86) * 2.0) * (vec3(1.0) - _171)), step(vec3(0.5), _86)), vec3(Parameters.values[14].x));
    highp float _207 = _94 * 0.001000000047497451305389404296875;
    bvec3 _267 = isnan(_189);
    bvec3 _268 = isnan(vec3(0.0));
    highp vec3 _269 = max(_189, vec3(0.0));
    highp vec3 _270 = vec3(_267.x ? vec3(0.0).x : _269.x, _267.y ? vec3(0.0).y : _269.y, _267.z ? vec3(0.0).z : _269.z);
    highp vec3 _228 = mix(mix(_86, vec3(_268.x ? _189.x : _270.x, _268.y ? _189.y : _270.y, _268.z ? _189.z : _270.z), vec3((clamp(Parameters.values[7].x * Parameters.values[12].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[9].x, in_var_TEXCOORD0.x), clamp(Parameters.values[8].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_98.z * 255.0) - Parameters.values[10].x))) * step(dot(roundEven(_98.xy * 255.0), vec2(1.0, 256.0)), _94 + (isnan(_207) ? 1.0 : (isnan(1.0) ? _207 : max(1.0, _207)))), clamp(Parameters.values[11].x, 0.0, 1.0)))), _86, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _272 = isnan(_228);
    bvec3 _273 = isnan(vec3(0.0));
    highp vec3 _274 = max(_228, vec3(0.0));
    highp vec3 _275 = vec3(_272.x ? vec3(0.0).x : _274.x, _272.y ? vec3(0.0).y : _274.y, _272.z ? vec3(0.0).z : _274.z);
    highp vec3 _235 = mix(_228 * 12.9200000762939453125, (pow(vec3(_273.x ? _228.x : _275.x, _273.y ? _228.y : _275.y, _273.z ? _228.z : _275.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _228));
    out_var_SV_Target = vec4(_235, 1.0);
}
