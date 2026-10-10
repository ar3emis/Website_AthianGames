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
    highp vec3 _93 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _101 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _105 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _125 = clamp(dot(_93, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)), 0.0, 1.0);
    highp float _126 = clamp(Parameters.values[1].x, 0.0500000007450580596923828125, 0.949999988079071044921875);
    highp vec3 _139;
    if (_125 < _126)
    {
        _139 = mix(Parameters.values[12].xyz, Parameters.values[13].xyz, vec3(_125 / _126));
    }
    else
    {
        _139 = mix(Parameters.values[13].xyz, Parameters.values[14].xyz, vec3((_125 - _126) / (1.0 - _126)));
    }
    highp vec2 _147 = (in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(isnan(0.100000001490116119384765625) ? Parameters.values[3].x : (isnan(Parameters.values[3].x) ? 0.100000001490116119384765625 : max(Parameters.values[3].x, 0.100000001490116119384765625)));
    highp float _150 = _147.y;
    highp vec3 _171 = clamp(_139 * (1.0 + (Parameters.values[2].x * (((sin((_147.x * 1.7000000476837158203125) + sin(_150 * 0.20999999344348907470703125)) * sin(_150 * 1.89999997615814208984375)) * 0.3499999940395355224609375) + ((fract(sin(dot(floor(_147 * vec2(0.3333333432674407958984375)), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875) - 0.5) * 0.5)))), vec3(0.0), vec3(1.0));
    highp vec3 _189 = mix(mix(_171, _93 * _171, vec3(Parameters.values[10].x)), mix((_93 * 2.0) * _171, vec3(1.0) - (((vec3(1.0) - _93) * 2.0) * (vec3(1.0) - _171)), step(vec3(0.5), _93)), vec3(Parameters.values[11].x));
    highp float _207 = _101 * 0.001000000047497451305389404296875;
    bvec3 _257 = isnan(_189);
    bvec3 _258 = isnan(vec3(0.0));
    highp vec3 _259 = max(_189, vec3(0.0));
    highp vec3 _260 = vec3(_257.x ? vec3(0.0).x : _259.x, _257.y ? vec3(0.0).y : _259.y, _257.z ? vec3(0.0).z : _259.z);
    highp vec3 _228 = mix(mix(_93, vec3(_258.x ? _189.x : _260.x, _258.y ? _189.y : _260.y, _258.z ? _189.z : _260.z), vec3((clamp(Parameters.values[4].x * Parameters.values[9].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[6].x, in_var_TEXCOORD0.x), clamp(Parameters.values[5].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_105.z * 255.0) - Parameters.values[7].x))) * step(dot(roundEven(_105.xy * 255.0), vec2(1.0, 256.0)), _101 + (isnan(_207) ? 1.0 : (isnan(1.0) ? _207 : max(1.0, _207)))), clamp(Parameters.values[8].x, 0.0, 1.0)))), _93, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _262 = isnan(_228);
    bvec3 _263 = isnan(vec3(0.0));
    highp vec3 _264 = max(_228, vec3(0.0));
    highp vec3 _265 = vec3(_262.x ? vec3(0.0).x : _264.x, _262.y ? vec3(0.0).y : _264.y, _262.z ? vec3(0.0).z : _264.z);
    highp vec3 _235 = mix(_228 * 12.9200000762939453125, (pow(vec3(_263.x ? _228.x : _265.x, _263.y ? _228.y : _265.y, _263.z ? _228.z : _265.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _228));
    out_var_SV_Target = vec4(_235, 1.0);
}
