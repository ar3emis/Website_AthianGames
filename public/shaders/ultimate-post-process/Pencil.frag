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
    highp vec3 _109 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _117 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _121 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec2 _134 = vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125) * (isnan(0.20000000298023223876953125) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 0.20000000298023223876953125 : max(Parameters.values[1].x, 0.20000000298023223876953125)));
    highp float _238 = (((((((dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0) * _134), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) + dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -1.0) * _134), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))) + dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, -1.0) * _134), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))) + dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 0.0) * _134), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))) + dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))) + dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, 0.0) * _134), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))) + dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 1.0) * _134), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))) + dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 1.0) * _134), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))) + dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + _134, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp float _239 = _238 * 0.111111111938953399658203125;
    highp float _240 = dot(_109, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp vec2 _260 = (in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(isnan(0.100000001490116119384765625) ? Parameters.values[4].x : (isnan(Parameters.values[4].x) ? 0.100000001490116119384765625 : max(Parameters.values[4].x, 0.100000001490116119384765625)));
    highp float _263 = _260.y;
    highp vec3 _284 = clamp((vec3(0.9700000286102294921875, 0.964999973773956298828125, 0.939999997615814208984375) * (pow(clamp(_240 / (isnan(0.001000000047497451305389404296875) ? _239 : (isnan(_239) ? 0.001000000047497451305389404296875 : max(_239, 0.001000000047497451305389404296875))), 0.0, 1.0), 3.0 + (Parameters.values[2].x * 8.0)) * (1.0 - ((Parameters.values[2].x * 0.23000000417232513427734375) * (1.0 - _240))))) * (1.0 + (Parameters.values[3].x * (((sin((_260.x * 1.7000000476837158203125) + sin(_263 * 0.20999999344348907470703125)) * sin(_263 * 1.89999997615814208984375)) * 0.3499999940395355224609375) + ((fract(sin(dot(floor(_260 * vec2(0.3333333432674407958984375)), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875) - 0.5) * 0.5)))), vec3(0.0), vec3(1.0));
    highp vec3 _302 = mix(mix(_284, _109 * _284, vec3(Parameters.values[11].x)), mix((_109 * 2.0) * _284, vec3(1.0) - (((vec3(1.0) - _109) * 2.0) * (vec3(1.0) - _284)), step(vec3(0.5), _109)), vec3(Parameters.values[12].x));
    highp float _320 = _117 * 0.001000000047497451305389404296875;
    bvec3 _380 = isnan(_302);
    bvec3 _381 = isnan(vec3(0.0));
    highp vec3 _382 = max(_302, vec3(0.0));
    highp vec3 _383 = vec3(_380.x ? vec3(0.0).x : _382.x, _380.y ? vec3(0.0).y : _382.y, _380.z ? vec3(0.0).z : _382.z);
    highp vec3 _341 = mix(mix(_109, vec3(_381.x ? _302.x : _383.x, _381.y ? _302.y : _383.y, _381.z ? _302.z : _383.z), vec3((clamp(Parameters.values[5].x * Parameters.values[10].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[7].x, in_var_TEXCOORD0.x), clamp(Parameters.values[6].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_121.z * 255.0) - Parameters.values[8].x))) * step(dot(roundEven(_121.xy * 255.0), vec2(1.0, 256.0)), _117 + (isnan(_320) ? 1.0 : (isnan(1.0) ? _320 : max(1.0, _320)))), clamp(Parameters.values[9].x, 0.0, 1.0)))), _109, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _385 = isnan(_341);
    bvec3 _386 = isnan(vec3(0.0));
    highp vec3 _387 = max(_341, vec3(0.0));
    highp vec3 _388 = vec3(_385.x ? vec3(0.0).x : _387.x, _385.y ? vec3(0.0).y : _387.y, _385.z ? vec3(0.0).z : _387.z);
    highp vec3 _348 = mix(_341 * 12.9200000762939453125, (pow(vec3(_386.x ? _341.x : _388.x, _386.y ? _341.y : _388.y, _386.z ? _341.z : _388.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _341));
    out_var_SV_Target = vec4(_348, 1.0);
}
