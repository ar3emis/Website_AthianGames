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
    highp vec3 _144 = (Parameters.cameraPosition.xyz + (((Parameters.cameraForward.xyz + ((Parameters.cameraRight.xyz * ((in_var_TEXCOORD0.x * 2.0) - 1.0)) * Parameters.cameraPosition.w)) + (((Parameters.cameraUp.xyz * (1.0 - (in_var_TEXCOORD0.y * 2.0))) * Parameters.cameraPosition.w) * vec3(0.5625))) * _86)) - Parameters.values[12].xyz;
    highp vec3 _151 = abs(fract((_144 / vec3(isnan(2.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 2.0 : max(Parameters.values[1].x, 2.0)))) + vec3(0.5)) - vec3(0.5));
    highp float _152 = _151.x;
    highp float _153 = _151.y;
    highp float _154 = isnan(_153) ? _152 : (isnan(_152) ? _153 : max(_152, _153));
    highp float _155 = _151.z;
    highp float _156 = isnan(_155) ? _152 : (isnan(_152) ? _155 : max(_152, _155));
    highp float _157 = isnan(_155) ? _153 : (isnan(_153) ? _155 : max(_153, _155));
    highp float _158 = isnan(_157) ? _156 : (isnan(_156) ? _157 : min(_156, _157));
    highp float _164 = fract((Parameters.frame.x * Parameters.values[0].x) * Parameters.values[2].x) * Parameters.values[3].x;
    highp float _165 = length(_144);
    highp float _166 = _164 - _165;
    highp vec3 _177 = (_78 * 0.0599999986588954925537109375) + ((Parameters.values[13].xyz * (1.0 - smoothstep(0.100000001490116119384765625, 0.17000000178813934326171875, isnan(_158) ? _154 : (isnan(_154) ? _158 : min(_154, _158))))) * (0.20000000298023223876953125 + ((exp2((isnan(0.0) ? _166 : (isnan(_166) ? 0.0 : max(_166, 0.0))) * (-0.004999999888241291046142578125)) * step(_165, _164)) * 2.0)));
    highp vec3 _195 = mix(mix(_177, _78 * _177, vec3(Parameters.values[10].x)), mix((_78 * 2.0) * _177, vec3(1.0) - (((vec3(1.0) - _78) * 2.0) * (vec3(1.0) - _177)), step(vec3(0.5), _78)), vec3(Parameters.values[11].x));
    highp float _212 = _86 * 0.001000000047497451305389404296875;
    bvec3 _292 = isnan(_195);
    bvec3 _293 = isnan(vec3(0.0));
    highp vec3 _294 = max(_195, vec3(0.0));
    highp vec3 _295 = vec3(_292.x ? vec3(0.0).x : _294.x, _292.y ? vec3(0.0).y : _294.y, _292.z ? vec3(0.0).z : _294.z);
    highp vec3 _233 = mix(mix(_78, vec3(_293.x ? _195.x : _295.x, _293.y ? _195.y : _295.y, _293.z ? _195.z : _295.z), vec3((clamp(Parameters.values[4].x * Parameters.values[9].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[6].x, in_var_TEXCOORD0.x), clamp(Parameters.values[5].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_90.z * 255.0) - Parameters.values[7].x))) * step(dot(roundEven(_90.xy * 255.0), vec2(1.0, 256.0)), _86 + (isnan(_212) ? 1.0 : (isnan(1.0) ? _212 : max(1.0, _212)))), clamp(Parameters.values[8].x, 0.0, 1.0)))), _78, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _297 = isnan(_233);
    bvec3 _298 = isnan(vec3(0.0));
    highp vec3 _299 = max(_233, vec3(0.0));
    highp vec3 _300 = vec3(_297.x ? vec3(0.0).x : _299.x, _297.y ? vec3(0.0).y : _299.y, _297.z ? vec3(0.0).z : _299.z);
    highp vec3 _240 = mix(_233 * 12.9200000762939453125, (pow(vec3(_298.x ? _233.x : _300.x, _298.y ? _233.y : _300.y, _298.z ? _233.z : _300.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _233));
    out_var_SV_Target = vec4(_240, 1.0);
}
