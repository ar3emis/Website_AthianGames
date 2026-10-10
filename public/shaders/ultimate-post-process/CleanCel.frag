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
    highp float _117 = dot(_93, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp float _118 = isnan(0.001000000047497451305389404296875) ? _117 : (isnan(_117) ? 0.001000000047497451305389404296875 : max(_117, 0.001000000047497451305389404296875));
    highp float _121 = (isnan(2.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 2.0 : max(Parameters.values[1].x, 2.0))) - 1.0;
    highp float _122 = clamp(_118, 0.0, 1.0) * _121;
    highp float _124 = isnan(0.001000000047497451305389404296875) ? Parameters.values[2].x : (isnan(Parameters.values[2].x) ? 0.001000000047497451305389404296875 : max(Parameters.values[2].x, 0.001000000047497451305389404296875));
    highp float _130 = (floor(_122) + smoothstep(0.5 - _124, 0.5 + _124, fract(_122))) / _121;
    highp vec2 _143 = vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125) * (isnan(0.25) ? Parameters.values[3].x : (isnan(Parameters.values[3].x) ? 0.25 : max(Parameters.values[3].x, 0.25)));
    highp float _152 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec2 _158 = clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, 0.0) * _143), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _173 = isnan(1.0) ? _152 : (isnan(_152) ? 1.0 : max(_152, 1.0));
    highp float _176 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _158, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _152) / _173) * Parameters.values[4].x) * 12.0;
    highp float _177 = isnan(_176) ? 0.0 : (isnan(0.0) ? _176 : max(0.0, _176));
    highp float _182 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_158, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _117) * Parameters.values[5].x) * 3.0;
    highp float _183 = isnan(_182) ? _177 : (isnan(_177) ? _182 : max(_177, _182));
    highp vec2 _189 = clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 0.0) * _143), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _206 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _189, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _152) / _173) * Parameters.values[4].x) * 12.0;
    highp float _207 = isnan(_206) ? _183 : (isnan(_183) ? _206 : max(_183, _206));
    highp float _212 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_189, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _117) * Parameters.values[5].x) * 3.0;
    highp float _213 = isnan(_212) ? _207 : (isnan(_207) ? _212 : max(_207, _212));
    highp vec2 _219 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 1.0) * _143), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _236 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _219, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _152) / _173) * Parameters.values[4].x) * 12.0;
    highp float _237 = isnan(_236) ? _213 : (isnan(_213) ? _236 : max(_213, _236));
    highp float _242 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_219, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _117) * Parameters.values[5].x) * 3.0;
    highp float _243 = isnan(_242) ? _237 : (isnan(_237) ? _242 : max(_237, _242));
    highp vec2 _249 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -1.0) * _143), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _266 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _249, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _152) / _173) * Parameters.values[4].x) * 12.0;
    highp float _267 = isnan(_266) ? _243 : (isnan(_243) ? _266 : max(_243, _266));
    highp float _272 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_249, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _117) * Parameters.values[5].x) * 3.0;
    highp vec3 _283 = mix(clamp((_93 * (isnan(0.0599999986588954925537109375) ? _130 : (isnan(_130) ? 0.0599999986588954925537109375 : max(_130, 0.0599999986588954925537109375)))) / vec3(_118), vec3(0.0), vec3(1.0)), Parameters.values[15].xyz, vec3(clamp(smoothstep(0.07999999821186065673828125, 0.449999988079071044921875, isnan(_272) ? _267 : (isnan(_267) ? _272 : max(_267, _272))) * Parameters.values[6].x, 0.0, 1.0)));
    highp vec3 _301 = mix(mix(_283, _93 * _283, vec3(Parameters.values[13].x)), mix((_93 * 2.0) * _283, vec3(1.0) - (((vec3(1.0) - _93) * 2.0) * (vec3(1.0) - _283)), step(vec3(0.5), _93)), vec3(Parameters.values[14].x));
    highp float _319 = _101 * 0.001000000047497451305389404296875;
    bvec3 _434 = isnan(_301);
    bvec3 _435 = isnan(vec3(0.0));
    highp vec3 _436 = max(_301, vec3(0.0));
    highp vec3 _437 = vec3(_434.x ? vec3(0.0).x : _436.x, _434.y ? vec3(0.0).y : _436.y, _434.z ? vec3(0.0).z : _436.z);
    highp vec3 _340 = mix(mix(_93, vec3(_435.x ? _301.x : _437.x, _435.y ? _301.y : _437.y, _435.z ? _301.z : _437.z), vec3((clamp(Parameters.values[7].x * Parameters.values[12].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[9].x, in_var_TEXCOORD0.x), clamp(Parameters.values[8].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_105.z * 255.0) - Parameters.values[10].x))) * step(dot(roundEven(_105.xy * 255.0), vec2(1.0, 256.0)), _101 + (isnan(_319) ? 1.0 : (isnan(1.0) ? _319 : max(1.0, _319)))), clamp(Parameters.values[11].x, 0.0, 1.0)))), _93, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _439 = isnan(_340);
    bvec3 _440 = isnan(vec3(0.0));
    highp vec3 _441 = max(_340, vec3(0.0));
    highp vec3 _442 = vec3(_439.x ? vec3(0.0).x : _441.x, _439.y ? vec3(0.0).y : _441.y, _439.z ? vec3(0.0).z : _441.z);
    out_var_SV_Target = vec4(mix(_340 * 12.9200000762939453125, (pow(vec3(_440.x ? _340.x : _442.x, _440.y ? _340.y : _442.y, _440.z ? _340.z : _442.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _340)), 1.0);
}
