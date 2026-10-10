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
    highp vec3 _99 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _107 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _111 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _131 = clamp(dot(_99, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)), 0.0, 1.0);
    highp float _132 = clamp(Parameters.values[1].x, 0.0500000007450580596923828125, 0.949999988079071044921875);
    highp vec3 _145;
    if (_131 < _132)
    {
        _145 = mix(Parameters.values[15].xyz, Parameters.values[16].xyz, vec3(_131 / _132));
    }
    else
    {
        _145 = mix(Parameters.values[16].xyz, Parameters.values[17].xyz, vec3((_131 - _132) / (1.0 - _132)));
    }
    highp vec3 _179 = _145 + vec3(((fract(sin(dot(floor((in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(isnan(0.25) ? Parameters.values[3].x : (isnan(Parameters.values[3].x) ? 0.25 : max(Parameters.values[3].x, 0.25)))) + vec2(floor((Parameters.frame.x * Parameters.values[0].x) * 24.0) * Parameters.values[4].x), vec2(12.98980045318603515625, 78.233001708984375))) * 43758.546875) - 0.5) * Parameters.values[2].x) * (0.4000000059604644775390625 + (0.60000002384185791015625 * (1.0 - dot(_145, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))))));
    bvec3 _277 = isnan(_179);
    bvec3 _278 = isnan(vec3(0.0));
    highp vec3 _279 = max(_179, vec3(0.0));
    highp vec3 _280 = vec3(_277.x ? vec3(0.0).x : _279.x, _277.y ? vec3(0.0).y : _279.y, _277.z ? vec3(0.0).z : _279.z);
    highp vec2 _186 = (in_var_TEXCOORD0 - vec2(0.5)) * vec2(1.77777779102325439453125, 1.0);
    highp float _188 = length(_186 - vec2(0.2199999988079071044921875, 0.0));
    highp float _190 = length(_186 + vec2(0.2199999988079071044921875, 0.0));
    highp vec3 _196 = (vec3(_278.x ? _179.x : _280.x, _278.y ? _179.y : _280.y, _278.z ? _179.z : _280.z) * (1.0 - smoothstep(Parameters.values[5].x - 0.0350000001490116119384765625, Parameters.values[5].x, isnan(_190) ? _188 : (isnan(_188) ? _190 : min(_188, _190))))) * Parameters.values[6].x;
    highp vec3 _214 = mix(mix(_196, _99 * _196, vec3(Parameters.values[13].x)), mix((_99 * 2.0) * _196, vec3(1.0) - (((vec3(1.0) - _99) * 2.0) * (vec3(1.0) - _196)), step(vec3(0.5), _99)), vec3(Parameters.values[14].x));
    highp float _232 = _107 * 0.001000000047497451305389404296875;
    bvec3 _292 = isnan(_214);
    bvec3 _293 = isnan(vec3(0.0));
    highp vec3 _294 = max(_214, vec3(0.0));
    highp vec3 _295 = vec3(_292.x ? vec3(0.0).x : _294.x, _292.y ? vec3(0.0).y : _294.y, _292.z ? vec3(0.0).z : _294.z);
    highp vec3 _253 = mix(mix(_99, vec3(_293.x ? _214.x : _295.x, _293.y ? _214.y : _295.y, _293.z ? _214.z : _295.z), vec3((clamp(Parameters.values[7].x * Parameters.values[12].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[9].x, in_var_TEXCOORD0.x), clamp(Parameters.values[8].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_111.z * 255.0) - Parameters.values[10].x))) * step(dot(roundEven(_111.xy * 255.0), vec2(1.0, 256.0)), _107 + (isnan(_232) ? 1.0 : (isnan(1.0) ? _232 : max(1.0, _232)))), clamp(Parameters.values[11].x, 0.0, 1.0)))), _99, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _297 = isnan(_253);
    bvec3 _298 = isnan(vec3(0.0));
    highp vec3 _299 = max(_253, vec3(0.0));
    highp vec3 _300 = vec3(_297.x ? vec3(0.0).x : _299.x, _297.y ? vec3(0.0).y : _299.y, _297.z ? vec3(0.0).z : _299.z);
    out_var_SV_Target = vec4(mix(_253 * 12.9200000762939453125, (pow(vec3(_298.x ? _253.x : _300.x, _298.y ? _253.y : _300.y, _298.z ? _253.z : _300.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _253)), 1.0);
}
