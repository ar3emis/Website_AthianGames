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
    highp vec3 _135 = (((mix(vec3(dot(_96, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))), _96, vec3(Parameters.values[1].x)) - vec3(0.5)) * Parameters.values[2].x) + vec3(0.5)) + vec3(Parameters.values[3].x);
    bvec3 _268 = isnan(_135);
    bvec3 _269 = isnan(vec3(0.0));
    highp vec3 _270 = max(_135, vec3(0.0));
    highp vec3 _271 = vec3(_268.x ? vec3(0.0).x : _270.x, _268.y ? vec3(0.0).y : _270.y, _268.z ? vec3(0.0).z : _270.z);
    highp vec3 _141 = pow(vec3(_269.x ? _135.x : _271.x, _269.y ? _135.y : _271.y, _269.z ? _135.z : _271.z), vec3(1.0 / (isnan(0.100000001490116119384765625) ? Parameters.values[4].x : (isnan(Parameters.values[4].x) ? 0.100000001490116119384765625 : max(Parameters.values[4].x, 0.100000001490116119384765625))))) * Parameters.values[18].xyz;
    highp vec3 _175 = _141 + vec3(((fract(sin(dot(floor((in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(isnan(0.25) ? Parameters.values[6].x : (isnan(Parameters.values[6].x) ? 0.25 : max(Parameters.values[6].x, 0.25)))) + vec2(floor((Parameters.frame.x * Parameters.values[0].x) * 24.0) * Parameters.values[7].x), vec2(12.98980045318603515625, 78.233001708984375))) * 43758.546875) - 0.5) * Parameters.values[5].x) * (0.4000000059604644775390625 + (0.60000002384185791015625 * (1.0 - dot(_141, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))))));
    bvec3 _283 = isnan(_175);
    bvec3 _284 = isnan(vec3(0.0));
    highp vec3 _285 = max(_175, vec3(0.0));
    highp vec3 _286 = vec3(_283.x ? vec3(0.0).x : _285.x, _283.y ? vec3(0.0).y : _285.y, _283.z ? vec3(0.0).z : _285.z);
    highp vec2 _182 = (in_var_TEXCOORD0 - vec2(0.5)) * 2.0;
    _182.x = _182.x * mix(1.0, 1.77777779102325439453125, Parameters.values[9].x);
    highp vec3 _192 = vec3(_284.x ? _175.x : _286.x, _284.y ? _175.y : _286.y, _284.z ? _175.z : _286.z) * (1.0 - (clamp(Parameters.values[8].x, 0.0, 1.0) * smoothstep(0.300000011920928955078125, 1.7000000476837158203125, dot(_182, _182))));
    highp vec3 _210 = mix(mix(_192, _96 * _192, vec3(Parameters.values[16].x)), mix((_96 * 2.0) * _192, vec3(1.0) - (((vec3(1.0) - _96) * 2.0) * (vec3(1.0) - _192)), step(vec3(0.5), _96)), vec3(Parameters.values[17].x));
    highp float _228 = _104 * 0.001000000047497451305389404296875;
    bvec3 _293 = isnan(_210);
    bvec3 _294 = isnan(vec3(0.0));
    highp vec3 _295 = max(_210, vec3(0.0));
    highp vec3 _296 = vec3(_293.x ? vec3(0.0).x : _295.x, _293.y ? vec3(0.0).y : _295.y, _293.z ? vec3(0.0).z : _295.z);
    highp vec3 _249 = mix(mix(_96, vec3(_294.x ? _210.x : _296.x, _294.y ? _210.y : _296.y, _294.z ? _210.z : _296.z), vec3((clamp(Parameters.values[10].x * Parameters.values[15].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[12].x, in_var_TEXCOORD0.x), clamp(Parameters.values[11].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_108.z * 255.0) - Parameters.values[13].x))) * step(dot(roundEven(_108.xy * 255.0), vec2(1.0, 256.0)), _104 + (isnan(_228) ? 1.0 : (isnan(1.0) ? _228 : max(1.0, _228)))), clamp(Parameters.values[14].x, 0.0, 1.0)))), _96, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _298 = isnan(_249);
    bvec3 _299 = isnan(vec3(0.0));
    highp vec3 _300 = max(_249, vec3(0.0));
    highp vec3 _301 = vec3(_298.x ? vec3(0.0).x : _300.x, _298.y ? vec3(0.0).y : _300.y, _298.z ? vec3(0.0).z : _300.z);
    out_var_SV_Target = vec4(mix(_249 * 12.9200000762939453125, (pow(vec3(_299.x ? _249.x : _301.x, _299.y ? _249.y : _301.y, _299.z ? _249.z : _301.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _249)), 1.0);
}
