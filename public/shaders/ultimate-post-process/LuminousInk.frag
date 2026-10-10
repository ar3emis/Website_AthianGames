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
    highp vec3 _90 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _98 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _102 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _125 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp float _126 = dot(_90, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp vec2 _132 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0007812500116415321826934814453125, 0.0) * Parameters.values[1].x), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _147 = isnan(1.0) ? _125 : (isnan(_125) ? 1.0 : max(_125, 1.0));
    highp float _154 = clamp((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _132, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _125) / _147) * 12.0, 0.0, 1.0) + abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_132, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _126);
    highp float _155 = isnan(_154) ? 0.0 : (isnan(0.0) ? _154 : max(0.0, _154));
    highp vec2 _161 = clamp(clamp(in_var_TEXCOORD0 + (vec2(-0.0007812500116415321826934814453125, 0.0) * Parameters.values[1].x), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _182 = clamp((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _161, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _125) / _147) * 12.0, 0.0, 1.0) + abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_161, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _126);
    highp float _183 = isnan(_182) ? _155 : (isnan(_155) ? _182 : max(_155, _182));
    highp vec2 _189 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 0.001388888922519981861114501953125) * Parameters.values[1].x), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _210 = clamp((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _189, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _125) / _147) * 12.0, 0.0, 1.0) + abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_189, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _126);
    highp float _211 = isnan(_210) ? _183 : (isnan(_183) ? _210 : max(_183, _210));
    highp vec2 _217 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -0.001388888922519981861114501953125) * Parameters.values[1].x), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _238 = clamp((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _217, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _125) / _147) * 12.0, 0.0, 1.0) + abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_217, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _126);
    highp float _242 = Parameters.values[1].x * 3.0;
    highp vec2 _248 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0007812500116415321826934814453125, 0.0) * _242), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _269 = clamp((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _248, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _125) / _147) * 12.0, 0.0, 1.0) + abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_248, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _126);
    highp float _270 = isnan(_269) ? 0.0 : (isnan(0.0) ? _269 : max(0.0, _269));
    highp vec2 _276 = clamp(clamp(in_var_TEXCOORD0 + (vec2(-0.0007812500116415321826934814453125, 0.0) * _242), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _297 = clamp((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _276, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _125) / _147) * 12.0, 0.0, 1.0) + abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_276, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _126);
    highp float _298 = isnan(_297) ? _270 : (isnan(_270) ? _297 : max(_270, _297));
    highp vec2 _304 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 0.001388888922519981861114501953125) * _242), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _325 = clamp((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _304, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _125) / _147) * 12.0, 0.0, 1.0) + abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_304, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _126);
    highp float _326 = isnan(_325) ? _298 : (isnan(_298) ? _325 : max(_298, _325));
    highp vec2 _332 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -0.001388888922519981861114501953125) * _242), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _353 = clamp((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _332, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _125) / _147) * 12.0, 0.0, 1.0) + abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_332, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _126);
    highp float _359 = Parameters.values[1].x * 6.0;
    highp vec2 _365 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0007812500116415321826934814453125, 0.0) * _359), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _386 = clamp((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _365, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _125) / _147) * 12.0, 0.0, 1.0) + abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_365, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _126);
    highp float _387 = isnan(_386) ? 0.0 : (isnan(0.0) ? _386 : max(0.0, _386));
    highp vec2 _393 = clamp(clamp(in_var_TEXCOORD0 + (vec2(-0.0007812500116415321826934814453125, 0.0) * _359), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _414 = clamp((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _393, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _125) / _147) * 12.0, 0.0, 1.0) + abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_393, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _126);
    highp float _415 = isnan(_414) ? _387 : (isnan(_387) ? _414 : max(_387, _414));
    highp vec2 _421 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 0.001388888922519981861114501953125) * _359), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _442 = clamp((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _421, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _125) / _147) * 12.0, 0.0, 1.0) + abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_421, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _126);
    highp float _443 = isnan(_442) ? _415 : (isnan(_415) ? _442 : max(_415, _442));
    highp vec2 _449 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -0.001388888922519981861114501953125) * _359), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _470 = clamp((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _449, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _125) / _147) * 12.0, 0.0, 1.0) + abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_449, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _126);
    highp vec3 _477 = ((((Parameters.values[11].xyz * (isnan(_238) ? _211 : (isnan(_211) ? _238 : max(_211, _238)))) * 1.7999999523162841796875) + ((Parameters.values[11].xyz * (isnan(_353) ? _326 : (isnan(_326) ? _353 : max(_326, _353)))) * (Parameters.values[2].x * 0.319999992847442626953125))) + ((Parameters.values[11].xyz * (isnan(_470) ? _443 : (isnan(_443) ? _470 : max(_443, _470)))) * (Parameters.values[2].x * 0.119999997317790985107421875))) + (_90 * 0.014999999664723873138427734375);
    highp vec3 _495 = mix(mix(_477, _90 * _477, vec3(Parameters.values[9].x)), mix((_90 * 2.0) * _477, vec3(1.0) - (((vec3(1.0) - _90) * 2.0) * (vec3(1.0) - _477)), step(vec3(0.5), _90)), vec3(Parameters.values[10].x));
    highp float _513 = _98 * 0.001000000047497451305389404296875;
    bvec3 _623 = isnan(_495);
    bvec3 _624 = isnan(vec3(0.0));
    highp vec3 _625 = max(_495, vec3(0.0));
    highp vec3 _626 = vec3(_623.x ? vec3(0.0).x : _625.x, _623.y ? vec3(0.0).y : _625.y, _623.z ? vec3(0.0).z : _625.z);
    highp vec3 _534 = mix(mix(_90, vec3(_624.x ? _495.x : _626.x, _624.y ? _495.y : _626.y, _624.z ? _495.z : _626.z), vec3((clamp(Parameters.values[3].x * Parameters.values[8].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[5].x, in_var_TEXCOORD0.x), clamp(Parameters.values[4].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_102.z * 255.0) - Parameters.values[6].x))) * step(dot(roundEven(_102.xy * 255.0), vec2(1.0, 256.0)), _98 + (isnan(_513) ? 1.0 : (isnan(1.0) ? _513 : max(1.0, _513)))), clamp(Parameters.values[7].x, 0.0, 1.0)))), _90, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _628 = isnan(_534);
    bvec3 _629 = isnan(vec3(0.0));
    highp vec3 _630 = max(_534, vec3(0.0));
    highp vec3 _631 = vec3(_628.x ? vec3(0.0).x : _630.x, _628.y ? vec3(0.0).y : _630.y, _628.z ? vec3(0.0).z : _630.z);
    highp vec3 _541 = mix(_534 * 12.9200000762939453125, (pow(vec3(_629.x ? _534.x : _631.x, _629.y ? _534.y : _631.y, _629.z ? _534.z : _631.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _534));
    out_var_SV_Target = vec4(_541, 1.0);
}
