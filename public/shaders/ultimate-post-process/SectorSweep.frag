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
    highp vec3 _101 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _109 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _113 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec3 _162 = (Parameters.cameraPosition.xyz + (((Parameters.cameraForward.xyz + ((Parameters.cameraRight.xyz * ((in_var_TEXCOORD0.x * 2.0) - 1.0)) * Parameters.cameraPosition.w)) + (((Parameters.cameraUp.xyz * (1.0 - (in_var_TEXCOORD0.y * 2.0))) * Parameters.cameraPosition.w) * vec3(0.5625))) * _109)) - Parameters.values[17].xyz;
    highp vec2 _186 = vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125) * (isnan(0.25) ? Parameters.values[4].x : (isnan(Parameters.values[4].x) ? 0.25 : max(Parameters.values[4].x, 0.25)));
    highp float _195 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp float _196 = dot(_101, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp vec2 _202 = clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, 0.0) * _186), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _217 = isnan(1.0) ? _195 : (isnan(_195) ? 1.0 : max(_195, 1.0));
    highp float _220 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _202, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _195) / _217) * Parameters.values[5].x) * 12.0;
    highp float _221 = isnan(_220) ? 0.0 : (isnan(0.0) ? _220 : max(0.0, _220));
    highp float _226 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_202, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _196) * Parameters.values[6].x) * 3.0;
    highp float _227 = isnan(_226) ? _221 : (isnan(_221) ? _226 : max(_221, _226));
    highp vec2 _233 = clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 0.0) * _186), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _250 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _233, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _195) / _217) * Parameters.values[5].x) * 12.0;
    highp float _251 = isnan(_250) ? _227 : (isnan(_227) ? _250 : max(_227, _250));
    highp float _256 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_233, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _196) * Parameters.values[6].x) * 3.0;
    highp float _257 = isnan(_256) ? _251 : (isnan(_251) ? _256 : max(_251, _256));
    highp vec2 _263 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 1.0) * _186), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _280 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _263, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _195) / _217) * Parameters.values[5].x) * 12.0;
    highp float _281 = isnan(_280) ? _257 : (isnan(_257) ? _280 : max(_257, _280));
    highp float _286 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_263, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _196) * Parameters.values[6].x) * 3.0;
    highp float _287 = isnan(_286) ? _281 : (isnan(_281) ? _286 : max(_281, _286));
    highp vec2 _293 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -1.0) * _186), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _310 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _293, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _195) / _217) * Parameters.values[5].x) * 12.0;
    highp float _311 = isnan(_310) ? _287 : (isnan(_287) ? _310 : max(_287, _310));
    highp float _316 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_293, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _196) * Parameters.values[6].x) * 3.0;
    highp vec3 _333 = (_101 * Parameters.values[7].x) + (((Parameters.values[18].xyz * clamp(exp2(fract(((Parameters.frame.x * Parameters.values[0].x) * Parameters.values[3].x) - (atan(_162.y, _162.x) * 0.15915493667125701904296875)) * (-22.0)) * clamp(1.0 - (length(_162.xy) / (isnan(1.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 1.0 : max(Parameters.values[1].x, 1.0)))), 0.0, 1.0), 0.0, 1.0)) * (0.300000011920928955078125 + (smoothstep(0.07999999821186065673828125, 0.449999988079071044921875, isnan(_316) ? _311 : (isnan(_311) ? _316 : max(_311, _316))) * 2.5))) * Parameters.values[8].x);
    highp vec3 _351 = mix(mix(_333, _101 * _333, vec3(Parameters.values[15].x)), mix((_101 * 2.0) * _333, vec3(1.0) - (((vec3(1.0) - _101) * 2.0) * (vec3(1.0) - _333)), step(vec3(0.5), _101)), vec3(Parameters.values[16].x));
    highp float _368 = _109 * 0.001000000047497451305389404296875;
    bvec3 _468 = isnan(_351);
    bvec3 _469 = isnan(vec3(0.0));
    highp vec3 _470 = max(_351, vec3(0.0));
    highp vec3 _471 = vec3(_468.x ? vec3(0.0).x : _470.x, _468.y ? vec3(0.0).y : _470.y, _468.z ? vec3(0.0).z : _470.z);
    highp vec3 _389 = mix(mix(_101, vec3(_469.x ? _351.x : _471.x, _469.y ? _351.y : _471.y, _469.z ? _351.z : _471.z), vec3((clamp(Parameters.values[9].x * Parameters.values[14].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[11].x, in_var_TEXCOORD0.x), clamp(Parameters.values[10].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_113.z * 255.0) - Parameters.values[12].x))) * step(dot(roundEven(_113.xy * 255.0), vec2(1.0, 256.0)), _109 + (isnan(_368) ? 1.0 : (isnan(1.0) ? _368 : max(1.0, _368)))), clamp(Parameters.values[13].x, 0.0, 1.0)))), _101, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _473 = isnan(_389);
    bvec3 _474 = isnan(vec3(0.0));
    highp vec3 _475 = max(_389, vec3(0.0));
    highp vec3 _476 = vec3(_473.x ? vec3(0.0).x : _475.x, _473.y ? vec3(0.0).y : _475.y, _473.z ? vec3(0.0).z : _475.z);
    highp vec3 _396 = mix(_389 * 12.9200000762939453125, (pow(vec3(_474.x ? _389.x : _476.x, _474.y ? _389.y : _476.y, _474.z ? _389.z : _476.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _389));
    out_var_SV_Target = vec4(_396, 1.0);
}
