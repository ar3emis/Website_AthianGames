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
    highp vec3 _91 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _99 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _103 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec3 _116 = mix(_91, vec3(1.0) - clamp(_91, vec3(0.0), vec3(1.0)), vec3(Parameters.values[1].x));
    highp vec3 _136 = (((mix(vec3(dot(_116, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))), _116, vec3(Parameters.values[2].x)) - vec3(0.5)) * Parameters.values[3].x) + vec3(0.5)) + vec3(Parameters.values[4].x);
    bvec3 _253 = isnan(_136);
    bvec3 _254 = isnan(vec3(0.0));
    highp vec3 _255 = max(_136, vec3(0.0));
    highp vec3 _256 = vec3(_253.x ? vec3(0.0).x : _255.x, _253.y ? vec3(0.0).y : _255.y, _253.z ? vec3(0.0).z : _255.z);
    highp vec3 _142 = pow(vec3(_254.x ? _136.x : _256.x, _254.y ? _136.y : _256.y, _254.z ? _136.z : _256.z), vec3(1.0 / (isnan(0.100000001490116119384765625) ? Parameters.values[5].x : (isnan(Parameters.values[5].x) ? 0.100000001490116119384765625 : max(Parameters.values[5].x, 0.100000001490116119384765625))))) * Parameters.values[17].xyz;
    highp vec3 _176 = _142 + vec3(((fract(sin(dot(floor((in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(isnan(0.25) ? Parameters.values[7].x : (isnan(Parameters.values[7].x) ? 0.25 : max(Parameters.values[7].x, 0.25)))) + vec2(floor((Parameters.frame.x * Parameters.values[0].x) * 24.0) * Parameters.values[8].x), vec2(12.98980045318603515625, 78.233001708984375))) * 43758.546875) - 0.5) * Parameters.values[6].x) * (0.4000000059604644775390625 + (0.60000002384185791015625 * (1.0 - dot(_142, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))))));
    bvec3 _268 = isnan(_176);
    bvec3 _269 = isnan(vec3(0.0));
    highp vec3 _270 = max(_176, vec3(0.0));
    highp vec3 _271 = vec3(_268.x ? vec3(0.0).x : _270.x, _268.y ? vec3(0.0).y : _270.y, _268.z ? vec3(0.0).z : _270.z);
    highp vec3 _177 = vec3(_269.x ? _176.x : _271.x, _269.y ? _176.y : _271.y, _269.z ? _176.z : _271.z);
    highp vec3 _195 = mix(mix(_177, _91 * _177, vec3(Parameters.values[15].x)), mix((_91 * 2.0) * _177, vec3(1.0) - (((vec3(1.0) - _91) * 2.0) * (vec3(1.0) - _177)), step(vec3(0.5), _91)), vec3(Parameters.values[16].x));
    highp float _213 = _99 * 0.001000000047497451305389404296875;
    bvec3 _278 = isnan(_195);
    bvec3 _279 = isnan(vec3(0.0));
    highp vec3 _280 = max(_195, vec3(0.0));
    highp vec3 _281 = vec3(_278.x ? vec3(0.0).x : _280.x, _278.y ? vec3(0.0).y : _280.y, _278.z ? vec3(0.0).z : _280.z);
    highp vec3 _234 = mix(mix(_91, vec3(_279.x ? _195.x : _281.x, _279.y ? _195.y : _281.y, _279.z ? _195.z : _281.z), vec3((clamp(Parameters.values[9].x * Parameters.values[14].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[11].x, in_var_TEXCOORD0.x), clamp(Parameters.values[10].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_103.z * 255.0) - Parameters.values[12].x))) * step(dot(roundEven(_103.xy * 255.0), vec2(1.0, 256.0)), _99 + (isnan(_213) ? 1.0 : (isnan(1.0) ? _213 : max(1.0, _213)))), clamp(Parameters.values[13].x, 0.0, 1.0)))), _91, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _283 = isnan(_234);
    bvec3 _284 = isnan(vec3(0.0));
    highp vec3 _285 = max(_234, vec3(0.0));
    highp vec3 _286 = vec3(_283.x ? vec3(0.0).x : _285.x, _283.y ? vec3(0.0).y : _285.y, _283.z ? vec3(0.0).z : _285.z);
    out_var_SV_Target = vec4(mix(_234 * 12.9200000762939453125, (pow(vec3(_284.x ? _234.x : _286.x, _284.y ? _234.y : _286.y, _284.z ? _234.z : _286.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _234)), 1.0);
}
