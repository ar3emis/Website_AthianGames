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
    highp vec3 _103 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _111 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _115 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _184 = abs(fract(((dot((Parameters.cameraPosition.xyz + (((Parameters.cameraForward.xyz + ((Parameters.cameraRight.xyz * ((in_var_TEXCOORD0.x * 2.0) - 1.0)) * Parameters.cameraPosition.w)) + (((Parameters.cameraUp.xyz * (1.0 - (in_var_TEXCOORD0.y * 2.0))) * Parameters.cameraPosition.w) * vec3(0.5625))) * _111)) - Parameters.values[17].xyz, normalize(Parameters.values[18].xyz + vec3(9.9999997473787516355514526367188e-06))) - (((fract((Parameters.frame.x * Parameters.values[0].x) * Parameters.values[3].x) * 2.0) - 1.0) * Parameters.values[1].x)) / (isnan(1.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 1.0 : max(Parameters.values[1].x, 1.0)))) + 0.5) - 0.5);
    highp vec2 _198 = vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125) * (isnan(0.25) ? Parameters.values[4].x : (isnan(Parameters.values[4].x) ? 0.25 : max(Parameters.values[4].x, 0.25)));
    highp float _207 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp float _208 = dot(_103, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp vec2 _214 = clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, 0.0) * _198), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _229 = isnan(1.0) ? _207 : (isnan(_207) ? 1.0 : max(_207, 1.0));
    highp float _232 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _214, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _207) / _229) * Parameters.values[5].x) * 12.0;
    highp float _233 = isnan(_232) ? 0.0 : (isnan(0.0) ? _232 : max(0.0, _232));
    highp float _238 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_214, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _208) * Parameters.values[6].x) * 3.0;
    highp float _239 = isnan(_238) ? _233 : (isnan(_233) ? _238 : max(_233, _238));
    highp vec2 _245 = clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 0.0) * _198), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _262 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _245, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _207) / _229) * Parameters.values[5].x) * 12.0;
    highp float _263 = isnan(_262) ? _239 : (isnan(_239) ? _262 : max(_239, _262));
    highp float _268 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_245, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _208) * Parameters.values[6].x) * 3.0;
    highp float _269 = isnan(_268) ? _263 : (isnan(_263) ? _268 : max(_263, _268));
    highp vec2 _275 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 1.0) * _198), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _292 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _275, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _207) / _229) * Parameters.values[5].x) * 12.0;
    highp float _293 = isnan(_292) ? _269 : (isnan(_269) ? _292 : max(_269, _292));
    highp float _298 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_275, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _208) * Parameters.values[6].x) * 3.0;
    highp float _299 = isnan(_298) ? _293 : (isnan(_293) ? _298 : max(_293, _298));
    highp vec2 _305 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -1.0) * _198), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _322 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _305, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _207) / _229) * Parameters.values[5].x) * 12.0;
    highp float _323 = isnan(_322) ? _299 : (isnan(_299) ? _322 : max(_299, _322));
    highp float _328 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_305, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _208) * Parameters.values[6].x) * 3.0;
    highp vec3 _345 = (_103 * Parameters.values[7].x) + (((Parameters.values[19].xyz * clamp(exp2(pow((_184 * Parameters.values[1].x) / (isnan(1.0) ? Parameters.values[2].x : (isnan(Parameters.values[2].x) ? 1.0 : max(Parameters.values[2].x, 1.0))), 2.0) * (-3.0)), 0.0, 1.0)) * (0.300000011920928955078125 + (smoothstep(0.07999999821186065673828125, 0.449999988079071044921875, isnan(_328) ? _323 : (isnan(_323) ? _328 : max(_323, _328))) * 2.5))) * Parameters.values[8].x);
    highp vec3 _363 = mix(mix(_345, _103 * _345, vec3(Parameters.values[15].x)), mix((_103 * 2.0) * _345, vec3(1.0) - (((vec3(1.0) - _103) * 2.0) * (vec3(1.0) - _345)), step(vec3(0.5), _103)), vec3(Parameters.values[16].x));
    highp float _380 = _111 * 0.001000000047497451305389404296875;
    bvec3 _485 = isnan(_363);
    bvec3 _486 = isnan(vec3(0.0));
    highp vec3 _487 = max(_363, vec3(0.0));
    highp vec3 _488 = vec3(_485.x ? vec3(0.0).x : _487.x, _485.y ? vec3(0.0).y : _487.y, _485.z ? vec3(0.0).z : _487.z);
    highp vec3 _401 = mix(mix(_103, vec3(_486.x ? _363.x : _488.x, _486.y ? _363.y : _488.y, _486.z ? _363.z : _488.z), vec3((clamp(Parameters.values[9].x * Parameters.values[14].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[11].x, in_var_TEXCOORD0.x), clamp(Parameters.values[10].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_115.z * 255.0) - Parameters.values[12].x))) * step(dot(roundEven(_115.xy * 255.0), vec2(1.0, 256.0)), _111 + (isnan(_380) ? 1.0 : (isnan(1.0) ? _380 : max(1.0, _380)))), clamp(Parameters.values[13].x, 0.0, 1.0)))), _103, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _490 = isnan(_401);
    bvec3 _491 = isnan(vec3(0.0));
    highp vec3 _492 = max(_401, vec3(0.0));
    highp vec3 _493 = vec3(_490.x ? vec3(0.0).x : _492.x, _490.y ? vec3(0.0).y : _492.y, _490.z ? vec3(0.0).z : _492.z);
    highp vec3 _408 = mix(_401 * 12.9200000762939453125, (pow(vec3(_491.x ? _401.x : _493.x, _491.y ? _401.y : _493.y, _491.z ? _401.z : _493.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _401));
    out_var_SV_Target = vec4(_408, 1.0);
}
