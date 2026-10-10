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
    highp vec3 _98 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _106 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _110 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec3 _120 = clamp(_98, vec3(0.0), vec3(1.0));
    highp float _123 = _120.y;
    highp float _127 = _120.z;
    highp vec3 _133 = vec3((_120.x * 1.15999996662139892578125) - (_123 * 0.100000001490116119384765625), (_123 * 1.08000004291534423828125) - (_127 * 0.070000000298023223876953125), (_127 * 0.939999997615814208984375) + (_123 * 0.0599999986588954925537109375));
    highp vec3 _140 = mix(_120, clamp((_133 * _133) * (vec3(3.0) - (_133 * 2.0)), vec3(0.0), vec3(1.0)), vec3(Parameters.values[1].x));
    highp vec3 _160 = (((mix(vec3(dot(_140, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))), _140, vec3(Parameters.values[2].x)) - vec3(0.5)) * Parameters.values[3].x) + vec3(0.5)) + vec3(Parameters.values[4].x);
    bvec3 _277 = isnan(_160);
    bvec3 _278 = isnan(vec3(0.0));
    highp vec3 _279 = max(_160, vec3(0.0));
    highp vec3 _280 = vec3(_277.x ? vec3(0.0).x : _279.x, _277.y ? vec3(0.0).y : _279.y, _277.z ? vec3(0.0).z : _279.z);
    highp vec3 _166 = pow(vec3(_278.x ? _160.x : _280.x, _278.y ? _160.y : _280.y, _278.z ? _160.z : _280.z), vec3(1.0 / (isnan(0.100000001490116119384765625) ? Parameters.values[5].x : (isnan(Parameters.values[5].x) ? 0.100000001490116119384765625 : max(Parameters.values[5].x, 0.100000001490116119384765625))))) * Parameters.values[17].xyz;
    highp vec3 _200 = _166 + vec3(((fract(sin(dot(floor((in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(isnan(0.25) ? Parameters.values[7].x : (isnan(Parameters.values[7].x) ? 0.25 : max(Parameters.values[7].x, 0.25)))) + vec2(floor((Parameters.frame.x * Parameters.values[0].x) * 24.0) * Parameters.values[8].x), vec2(12.98980045318603515625, 78.233001708984375))) * 43758.546875) - 0.5) * Parameters.values[6].x) * (0.4000000059604644775390625 + (0.60000002384185791015625 * (1.0 - dot(_166, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))))));
    bvec3 _292 = isnan(_200);
    bvec3 _293 = isnan(vec3(0.0));
    highp vec3 _294 = max(_200, vec3(0.0));
    highp vec3 _295 = vec3(_292.x ? vec3(0.0).x : _294.x, _292.y ? vec3(0.0).y : _294.y, _292.z ? vec3(0.0).z : _294.z);
    highp vec3 _201 = vec3(_293.x ? _200.x : _295.x, _293.y ? _200.y : _295.y, _293.z ? _200.z : _295.z);
    highp vec3 _219 = mix(mix(_201, _98 * _201, vec3(Parameters.values[15].x)), mix((_98 * 2.0) * _201, vec3(1.0) - (((vec3(1.0) - _98) * 2.0) * (vec3(1.0) - _201)), step(vec3(0.5), _98)), vec3(Parameters.values[16].x));
    highp float _237 = _106 * 0.001000000047497451305389404296875;
    bvec3 _302 = isnan(_219);
    bvec3 _303 = isnan(vec3(0.0));
    highp vec3 _304 = max(_219, vec3(0.0));
    highp vec3 _305 = vec3(_302.x ? vec3(0.0).x : _304.x, _302.y ? vec3(0.0).y : _304.y, _302.z ? vec3(0.0).z : _304.z);
    highp vec3 _258 = mix(mix(_98, vec3(_303.x ? _219.x : _305.x, _303.y ? _219.y : _305.y, _303.z ? _219.z : _305.z), vec3((clamp(Parameters.values[9].x * Parameters.values[14].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[11].x, in_var_TEXCOORD0.x), clamp(Parameters.values[10].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_110.z * 255.0) - Parameters.values[12].x))) * step(dot(roundEven(_110.xy * 255.0), vec2(1.0, 256.0)), _106 + (isnan(_237) ? 1.0 : (isnan(1.0) ? _237 : max(1.0, _237)))), clamp(Parameters.values[13].x, 0.0, 1.0)))), _98, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _307 = isnan(_258);
    bvec3 _308 = isnan(vec3(0.0));
    highp vec3 _309 = max(_258, vec3(0.0));
    highp vec3 _310 = vec3(_307.x ? vec3(0.0).x : _309.x, _307.y ? vec3(0.0).y : _309.y, _307.z ? vec3(0.0).z : _309.z);
    highp vec3 _265 = mix(_258 * 12.9200000762939453125, (pow(vec3(_308.x ? _258.x : _310.x, _308.y ? _258.y : _310.y, _308.z ? _258.z : _310.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _258));
    out_var_SV_Target = vec4(_265, 1.0);
}
