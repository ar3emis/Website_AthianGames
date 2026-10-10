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
    highp vec3 _97 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _105 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _109 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec3 _136 = (((mix(vec3(dot(_97, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))), _97, vec3(Parameters.values[1].x)) - vec3(0.5)) * Parameters.values[2].x) + vec3(0.5)) + vec3(Parameters.values[3].x);
    bvec3 _284 = isnan(_136);
    bvec3 _285 = isnan(vec3(0.0));
    highp vec3 _286 = max(_136, vec3(0.0));
    highp vec3 _287 = vec3(_284.x ? vec3(0.0).x : _286.x, _284.y ? vec3(0.0).y : _286.y, _284.z ? vec3(0.0).z : _286.z);
    highp vec3 _142 = pow(vec3(_285.x ? _136.x : _287.x, _285.y ? _136.y : _287.y, _285.z ? _136.z : _287.z), vec3(1.0 / (isnan(0.100000001490116119384765625) ? Parameters.values[4].x : (isnan(Parameters.values[4].x) ? 0.100000001490116119384765625 : max(Parameters.values[4].x, 0.100000001490116119384765625))))) * Parameters.values[19].xyz;
    highp float _145 = dot(_142, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp vec3 _157 = mix(_142, mix((_142 * 2.0) * _145, vec3(1.0) - (((vec3(1.0) - _142) * 2.0) * (1.0 - _145)), vec3(step(0.5, _145))), vec3(Parameters.values[5].x));
    highp vec3 _191 = _157 + vec3(((fract(sin(dot(floor((in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(isnan(0.25) ? Parameters.values[7].x : (isnan(Parameters.values[7].x) ? 0.25 : max(Parameters.values[7].x, 0.25)))) + vec2(floor((Parameters.frame.x * Parameters.values[0].x) * 24.0) * Parameters.values[8].x), vec2(12.98980045318603515625, 78.233001708984375))) * 43758.546875) - 0.5) * Parameters.values[6].x) * (0.4000000059604644775390625 + (0.60000002384185791015625 * (1.0 - dot(_157, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))))));
    bvec3 _299 = isnan(_191);
    bvec3 _300 = isnan(vec3(0.0));
    highp vec3 _301 = max(_191, vec3(0.0));
    highp vec3 _302 = vec3(_299.x ? vec3(0.0).x : _301.x, _299.y ? vec3(0.0).y : _301.y, _299.z ? vec3(0.0).z : _301.z);
    highp vec2 _198 = (in_var_TEXCOORD0 - vec2(0.5)) * 2.0;
    _198.x = _198.x * mix(1.0, 1.77777779102325439453125, Parameters.values[10].x);
    highp vec3 _208 = vec3(_300.x ? _191.x : _302.x, _300.y ? _191.y : _302.y, _300.z ? _191.z : _302.z) * (1.0 - (clamp(Parameters.values[9].x, 0.0, 1.0) * smoothstep(0.300000011920928955078125, 1.7000000476837158203125, dot(_198, _198))));
    highp vec3 _226 = mix(mix(_208, _97 * _208, vec3(Parameters.values[17].x)), mix((_97 * 2.0) * _208, vec3(1.0) - (((vec3(1.0) - _97) * 2.0) * (vec3(1.0) - _208)), step(vec3(0.5), _97)), vec3(Parameters.values[18].x));
    highp float _244 = _105 * 0.001000000047497451305389404296875;
    bvec3 _309 = isnan(_226);
    bvec3 _310 = isnan(vec3(0.0));
    highp vec3 _311 = max(_226, vec3(0.0));
    highp vec3 _312 = vec3(_309.x ? vec3(0.0).x : _311.x, _309.y ? vec3(0.0).y : _311.y, _309.z ? vec3(0.0).z : _311.z);
    highp vec3 _265 = mix(mix(_97, vec3(_310.x ? _226.x : _312.x, _310.y ? _226.y : _312.y, _310.z ? _226.z : _312.z), vec3((clamp(Parameters.values[11].x * Parameters.values[16].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[13].x, in_var_TEXCOORD0.x), clamp(Parameters.values[12].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_109.z * 255.0) - Parameters.values[14].x))) * step(dot(roundEven(_109.xy * 255.0), vec2(1.0, 256.0)), _105 + (isnan(_244) ? 1.0 : (isnan(1.0) ? _244 : max(1.0, _244)))), clamp(Parameters.values[15].x, 0.0, 1.0)))), _97, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _314 = isnan(_265);
    bvec3 _315 = isnan(vec3(0.0));
    highp vec3 _316 = max(_265, vec3(0.0));
    highp vec3 _317 = vec3(_314.x ? vec3(0.0).x : _316.x, _314.y ? vec3(0.0).y : _316.y, _314.z ? vec3(0.0).z : _316.z);
    highp vec3 _272 = mix(_265 * 12.9200000762939453125, (pow(vec3(_315.x ? _265.x : _317.x, _315.y ? _265.y : _317.y, _315.z ? _265.z : _317.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _265));
    out_var_SV_Target = vec4(_272, 1.0);
}
