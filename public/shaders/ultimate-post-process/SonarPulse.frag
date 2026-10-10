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
    highp vec3 _102 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _110 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _114 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _166 = length((Parameters.cameraPosition.xyz + (((Parameters.cameraForward.xyz + ((Parameters.cameraRight.xyz * ((in_var_TEXCOORD0.x * 2.0) - 1.0)) * Parameters.cameraPosition.w)) + (((Parameters.cameraUp.xyz * (1.0 - (in_var_TEXCOORD0.y * 2.0))) * Parameters.cameraPosition.w) * vec3(0.5625))) * _110)) - Parameters.values[17].xyz);
    highp float _170 = fract((Parameters.frame.x * Parameters.values[0].x) * Parameters.values[3].x) * (isnan(1.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 1.0 : max(Parameters.values[1].x, 1.0)));
    highp float _177 = _170 - _166;
    highp vec2 _192 = vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125) * (isnan(0.25) ? Parameters.values[4].x : (isnan(Parameters.values[4].x) ? 0.25 : max(Parameters.values[4].x, 0.25)));
    highp float _201 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp float _202 = dot(_102, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp vec2 _208 = clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, 0.0) * _192), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _223 = isnan(1.0) ? _201 : (isnan(_201) ? 1.0 : max(_201, 1.0));
    highp float _226 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _208, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _201) / _223) * Parameters.values[5].x) * 12.0;
    highp float _227 = isnan(_226) ? 0.0 : (isnan(0.0) ? _226 : max(0.0, _226));
    highp float _232 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_208, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _202) * Parameters.values[6].x) * 3.0;
    highp float _233 = isnan(_232) ? _227 : (isnan(_227) ? _232 : max(_227, _232));
    highp vec2 _239 = clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 0.0) * _192), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _256 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _239, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _201) / _223) * Parameters.values[5].x) * 12.0;
    highp float _257 = isnan(_256) ? _233 : (isnan(_233) ? _256 : max(_233, _256));
    highp float _262 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_239, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _202) * Parameters.values[6].x) * 3.0;
    highp float _263 = isnan(_262) ? _257 : (isnan(_257) ? _262 : max(_257, _262));
    highp vec2 _269 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 1.0) * _192), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _286 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _269, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _201) / _223) * Parameters.values[5].x) * 12.0;
    highp float _287 = isnan(_286) ? _263 : (isnan(_263) ? _286 : max(_263, _286));
    highp float _292 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_269, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _202) * Parameters.values[6].x) * 3.0;
    highp float _293 = isnan(_292) ? _287 : (isnan(_287) ? _292 : max(_287, _292));
    highp vec2 _299 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -1.0) * _192), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _316 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _299, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _201) / _223) * Parameters.values[5].x) * 12.0;
    highp float _317 = isnan(_316) ? _293 : (isnan(_293) ? _316 : max(_293, _316));
    highp float _322 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_299, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _202) * Parameters.values[6].x) * 3.0;
    highp vec3 _339 = (_102 * Parameters.values[7].x) + (((Parameters.values[18].xyz * clamp(exp2(pow((_166 - _170) / (isnan(1.0) ? Parameters.values[2].x : (isnan(Parameters.values[2].x) ? 1.0 : max(Parameters.values[2].x, 1.0))), 2.0) * (-3.0)) + ((0.180000007152557373046875 * exp2((isnan(0.0) ? _177 : (isnan(_177) ? 0.0 : max(_177, 0.0))) * (-0.0062500000931322574615478515625))) * step(_166, _170)), 0.0, 1.0)) * (0.300000011920928955078125 + (smoothstep(0.07999999821186065673828125, 0.449999988079071044921875, isnan(_322) ? _317 : (isnan(_317) ? _322 : max(_317, _322))) * 2.5))) * Parameters.values[8].x);
    highp vec3 _357 = mix(mix(_339, _102 * _339, vec3(Parameters.values[15].x)), mix((_102 * 2.0) * _339, vec3(1.0) - (((vec3(1.0) - _102) * 2.0) * (vec3(1.0) - _339)), step(vec3(0.5), _102)), vec3(Parameters.values[16].x));
    highp float _374 = _110 * 0.001000000047497451305389404296875;
    bvec3 _484 = isnan(_357);
    bvec3 _485 = isnan(vec3(0.0));
    highp vec3 _486 = max(_357, vec3(0.0));
    highp vec3 _487 = vec3(_484.x ? vec3(0.0).x : _486.x, _484.y ? vec3(0.0).y : _486.y, _484.z ? vec3(0.0).z : _486.z);
    highp vec3 _395 = mix(mix(_102, vec3(_485.x ? _357.x : _487.x, _485.y ? _357.y : _487.y, _485.z ? _357.z : _487.z), vec3((clamp(Parameters.values[9].x * Parameters.values[14].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[11].x, in_var_TEXCOORD0.x), clamp(Parameters.values[10].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_114.z * 255.0) - Parameters.values[12].x))) * step(dot(roundEven(_114.xy * 255.0), vec2(1.0, 256.0)), _110 + (isnan(_374) ? 1.0 : (isnan(1.0) ? _374 : max(1.0, _374)))), clamp(Parameters.values[13].x, 0.0, 1.0)))), _102, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _489 = isnan(_395);
    bvec3 _490 = isnan(vec3(0.0));
    highp vec3 _491 = max(_395, vec3(0.0));
    highp vec3 _492 = vec3(_489.x ? vec3(0.0).x : _491.x, _489.y ? vec3(0.0).y : _491.y, _489.z ? vec3(0.0).z : _491.z);
    highp vec3 _402 = mix(_395 * 12.9200000762939453125, (pow(vec3(_490.x ? _395.x : _492.x, _490.y ? _395.y : _492.y, _490.z ? _395.z : _492.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _395));
    out_var_SV_Target = vec4(_402, 1.0);
}
