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
    highp vec3 _103 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _111 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _115 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec3 _142 = (((mix(vec3(dot(_103, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))), _103, vec3(Parameters.values[1].x)) - vec3(0.5)) * Parameters.values[2].x) + vec3(0.5)) + vec3(Parameters.values[3].x);
    bvec3 _292 = isnan(_142);
    bvec3 _293 = isnan(vec3(0.0));
    highp vec3 _294 = max(_142, vec3(0.0));
    highp vec3 _295 = vec3(_292.x ? vec3(0.0).x : _294.x, _292.y ? vec3(0.0).y : _294.y, _292.z ? vec3(0.0).z : _294.z);
    highp vec3 _148 = pow(vec3(_293.x ? _142.x : _295.x, _293.y ? _142.y : _295.y, _293.z ? _142.z : _295.z), vec3(1.0 / (isnan(0.100000001490116119384765625) ? Parameters.values[4].x : (isnan(Parameters.values[4].x) ? 0.100000001490116119384765625 : max(Parameters.values[4].x, 0.100000001490116119384765625))))) * Parameters.values[19].xyz;
    highp vec2 _171 = (in_var_TEXCOORD0 - vec2(0.5)) * 2.0;
    _171.x = _171.x * mix(1.0, 1.77777779102325439453125, Parameters.values[7].x);
    highp vec3 _181 = mix(_148, _148 * (vec3(0.550000011920928955078125) + mix(Parameters.values[20].xyz, Parameters.values[21].xyz, vec3(smoothstep(0.20000000298023223876953125, 0.85000002384185791015625, clamp(dot(_148, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)), 0.0, 1.0))))), vec3(Parameters.values[5].x)) * (1.0 - (clamp(Parameters.values[6].x, 0.0, 1.0) * smoothstep(0.300000011920928955078125, 1.7000000476837158203125, dot(_171, _171))));
    highp vec3 _215 = _181 + vec3(((fract(sin(dot(floor((in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(isnan(0.25) ? Parameters.values[9].x : (isnan(Parameters.values[9].x) ? 0.25 : max(Parameters.values[9].x, 0.25)))) + vec2(floor((Parameters.frame.x * Parameters.values[0].x) * 24.0) * Parameters.values[10].x), vec2(12.98980045318603515625, 78.233001708984375))) * 43758.546875) - 0.5) * Parameters.values[8].x) * (0.4000000059604644775390625 + (0.60000002384185791015625 * (1.0 - dot(_181, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))))));
    bvec3 _307 = isnan(_215);
    bvec3 _308 = isnan(vec3(0.0));
    highp vec3 _309 = max(_215, vec3(0.0));
    highp vec3 _310 = vec3(_307.x ? vec3(0.0).x : _309.x, _307.y ? vec3(0.0).y : _309.y, _307.z ? vec3(0.0).z : _309.z);
    highp vec3 _216 = vec3(_308.x ? _215.x : _310.x, _308.y ? _215.y : _310.y, _308.z ? _215.z : _310.z);
    highp vec3 _234 = mix(mix(_216, _103 * _216, vec3(Parameters.values[17].x)), mix((_103 * 2.0) * _216, vec3(1.0) - (((vec3(1.0) - _103) * 2.0) * (vec3(1.0) - _216)), step(vec3(0.5), _103)), vec3(Parameters.values[18].x));
    highp float _252 = _111 * 0.001000000047497451305389404296875;
    bvec3 _317 = isnan(_234);
    bvec3 _318 = isnan(vec3(0.0));
    highp vec3 _319 = max(_234, vec3(0.0));
    highp vec3 _320 = vec3(_317.x ? vec3(0.0).x : _319.x, _317.y ? vec3(0.0).y : _319.y, _317.z ? vec3(0.0).z : _319.z);
    highp vec3 _273 = mix(mix(_103, vec3(_318.x ? _234.x : _320.x, _318.y ? _234.y : _320.y, _318.z ? _234.z : _320.z), vec3((clamp(Parameters.values[11].x * Parameters.values[16].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[13].x, in_var_TEXCOORD0.x), clamp(Parameters.values[12].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_115.z * 255.0) - Parameters.values[14].x))) * step(dot(roundEven(_115.xy * 255.0), vec2(1.0, 256.0)), _111 + (isnan(_252) ? 1.0 : (isnan(1.0) ? _252 : max(1.0, _252)))), clamp(Parameters.values[15].x, 0.0, 1.0)))), _103, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _322 = isnan(_273);
    bvec3 _323 = isnan(vec3(0.0));
    highp vec3 _324 = max(_273, vec3(0.0));
    highp vec3 _325 = vec3(_322.x ? vec3(0.0).x : _324.x, _322.y ? vec3(0.0).y : _324.y, _322.z ? vec3(0.0).z : _324.z);
    highp vec3 _280 = mix(_273 * 12.9200000762939453125, (pow(vec3(_323.x ? _273.x : _325.x, _323.y ? _273.y : _325.y, _323.z ? _273.z : _325.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _273));
    out_var_SV_Target = vec4(_280, 1.0);
}
