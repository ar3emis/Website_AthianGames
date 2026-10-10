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
    highp vec3 _104 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _112 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _116 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec2 _131 = vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125) * (isnan(0.25) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 0.25 : max(Parameters.values[1].x, 0.25)));
    highp float _140 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp float _141 = dot(_104, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp vec2 _147 = clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, 0.0) * _131), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _162 = isnan(1.0) ? _140 : (isnan(_140) ? 1.0 : max(_140, 1.0));
    highp float _165 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _147, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _140) / _162) * Parameters.values[2].x) * 12.0;
    highp float _166 = isnan(_165) ? 0.0 : (isnan(0.0) ? _165 : max(0.0, _165));
    highp float _171 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_147, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _141) * Parameters.values[3].x) * 3.0;
    highp float _172 = isnan(_171) ? _166 : (isnan(_166) ? _171 : max(_166, _171));
    highp vec2 _178 = clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 0.0) * _131), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _195 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _178, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _140) / _162) * Parameters.values[2].x) * 12.0;
    highp float _196 = isnan(_195) ? _172 : (isnan(_172) ? _195 : max(_172, _195));
    highp float _201 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_178, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _141) * Parameters.values[3].x) * 3.0;
    highp float _202 = isnan(_201) ? _196 : (isnan(_196) ? _201 : max(_196, _201));
    highp vec2 _208 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 1.0) * _131), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _225 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _208, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _140) / _162) * Parameters.values[2].x) * 12.0;
    highp float _226 = isnan(_225) ? _202 : (isnan(_202) ? _225 : max(_202, _225));
    highp float _231 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_208, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _141) * Parameters.values[3].x) * 3.0;
    highp float _232 = isnan(_231) ? _226 : (isnan(_226) ? _231 : max(_226, _231));
    highp vec2 _238 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -1.0) * _131), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _255 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _238, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _140) / _162) * Parameters.values[2].x) * 12.0;
    highp float _256 = isnan(_255) ? _232 : (isnan(_232) ? _255 : max(_232, _255));
    highp float _261 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_238, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _141) * Parameters.values[3].x) * 3.0;
    highp float _268 = Parameters.frame.x * Parameters.values[0].x;
    highp vec2 _279 = (in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(isnan(2.0) ? Parameters.values[4].x : (isnan(Parameters.values[4].x) ? 2.0 : max(Parameters.values[4].x, 2.0)));
    highp vec3 _313 = Parameters.values[14].xyz * ((((((pow(clamp(_141, 0.0, 1.0), 0.60000002384185791015625) * 1.39999997615814208984375) + 0.0199999995529651641845703125) * (1.0 - smoothstep(0.20000000298023223876953125, 0.4000000059604644775390625, length(abs(fract(_279) - vec2(0.5)))))) * (0.64999997615814208984375 + (0.3499999940395355224609375 * sin((floor(_279.y) * 0.800000011920928955078125) - (_268 * 3.0))))) + (smoothstep(0.07999999821186065673828125, 0.449999988079071044921875, isnan(_261) ? _256 : (isnan(_256) ? _261 : max(_256, _261))) * 0.07999999821186065673828125)) + (exp(-pow((fract(in_var_TEXCOORD0.y - (_268 * Parameters.values[5].x)) - 0.5) * 35.0, 2.0)) * 0.07999999821186065673828125));
    highp vec3 _331 = mix(mix(_313, _104 * _313, vec3(Parameters.values[12].x)), mix((_104 * 2.0) * _313, vec3(1.0) - (((vec3(1.0) - _104) * 2.0) * (vec3(1.0) - _313)), step(vec3(0.5), _104)), vec3(Parameters.values[13].x));
    highp float _349 = _112 * 0.001000000047497451305389404296875;
    bvec3 _449 = isnan(_331);
    bvec3 _450 = isnan(vec3(0.0));
    highp vec3 _451 = max(_331, vec3(0.0));
    highp vec3 _452 = vec3(_449.x ? vec3(0.0).x : _451.x, _449.y ? vec3(0.0).y : _451.y, _449.z ? vec3(0.0).z : _451.z);
    highp vec3 _370 = mix(mix(_104, vec3(_450.x ? _331.x : _452.x, _450.y ? _331.y : _452.y, _450.z ? _331.z : _452.z), vec3((clamp(Parameters.values[6].x * Parameters.values[11].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[8].x, in_var_TEXCOORD0.x), clamp(Parameters.values[7].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_116.z * 255.0) - Parameters.values[9].x))) * step(dot(roundEven(_116.xy * 255.0), vec2(1.0, 256.0)), _112 + (isnan(_349) ? 1.0 : (isnan(1.0) ? _349 : max(1.0, _349)))), clamp(Parameters.values[10].x, 0.0, 1.0)))), _104, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _454 = isnan(_370);
    bvec3 _455 = isnan(vec3(0.0));
    highp vec3 _456 = max(_370, vec3(0.0));
    highp vec3 _457 = vec3(_454.x ? vec3(0.0).x : _456.x, _454.y ? vec3(0.0).y : _456.y, _454.z ? vec3(0.0).z : _456.z);
    out_var_SV_Target = vec4(mix(_370 * 12.9200000762939453125, (pow(vec3(_455.x ? _370.x : _457.x, _455.y ? _370.y : _457.y, _455.z ? _370.z : _457.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _370)), 1.0);
}
