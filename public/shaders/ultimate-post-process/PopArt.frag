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
    highp vec3 _115 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _123 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _127 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _139 = dot(_115, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp float _140 = isnan(0.001000000047497451305389404296875) ? _139 : (isnan(_139) ? 0.001000000047497451305389404296875 : max(_139, 0.001000000047497451305389404296875));
    highp float _143 = (isnan(2.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 2.0 : max(Parameters.values[1].x, 2.0))) - 1.0;
    highp float _144 = clamp(_140, 0.0, 1.0) * _143;
    highp float _146 = isnan(0.001000000047497451305389404296875) ? Parameters.values[2].x : (isnan(Parameters.values[2].x) ? 0.001000000047497451305389404296875 : max(Parameters.values[2].x, 0.001000000047497451305389404296875));
    highp float _152 = (floor(_144) + smoothstep(0.5 - _146, 0.5 + _146, fract(_144))) / _143;
    highp float _170 = clamp(dot(clamp((_115 * (isnan(0.0599999986588954925537109375) ? _152 : (isnan(_152) ? 0.0599999986588954925537109375 : max(_152, 0.0599999986588954925537109375)))) / vec3(_140), vec3(0.0), vec3(1.0)), vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)), 0.0, 1.0);
    highp float _171 = clamp(Parameters.values[3].x, 0.0500000007450580596923828125, 0.949999988079071044921875);
    highp vec3 _184;
    if (_170 < _171)
    {
        _184 = mix(Parameters.values[18].xyz, Parameters.values[19].xyz, vec3(_170 / _171));
    }
    else
    {
        _184 = mix(Parameters.values[19].xyz, Parameters.values[20].xyz, vec3((_170 - _171) / (1.0 - _171)));
    }
    highp float _201 = length(fract(((in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(isnan(2.0) ? Parameters.values[4].x : (isnan(Parameters.values[4].x) ? 2.0 : max(Parameters.values[4].x, 2.0)))) * mat2(vec2(0.865999996662139892578125, -0.5), vec2(0.5, 0.865999996662139892578125))) - vec2(0.5));
    highp float _204 = 0.4799999892711639404296875 * sqrt(1.0 - clamp(dot(_184, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)), 0.0, 1.0));
    highp float _205 = fwidth(_201);
    highp float _206 = isnan(0.014999999664723873138427734375) ? _205 : (isnan(_205) ? 0.014999999664723873138427734375 : max(_205, 0.014999999664723873138427734375));
    highp vec2 _222 = vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125) * (isnan(0.25) ? Parameters.values[6].x : (isnan(Parameters.values[6].x) ? 0.25 : max(Parameters.values[6].x, 0.25)));
    highp float _231 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec2 _237 = clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, 0.0) * _222), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _252 = isnan(1.0) ? _231 : (isnan(_231) ? 1.0 : max(_231, 1.0));
    highp float _255 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _237, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _231) / _252) * Parameters.values[7].x) * 12.0;
    highp float _256 = isnan(_255) ? 0.0 : (isnan(0.0) ? _255 : max(0.0, _255));
    highp float _261 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_237, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _139) * Parameters.values[8].x) * 3.0;
    highp float _262 = isnan(_261) ? _256 : (isnan(_256) ? _261 : max(_256, _261));
    highp vec2 _268 = clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 0.0) * _222), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _285 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _268, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _231) / _252) * Parameters.values[7].x) * 12.0;
    highp float _286 = isnan(_285) ? _262 : (isnan(_262) ? _285 : max(_262, _285));
    highp float _291 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_268, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _139) * Parameters.values[8].x) * 3.0;
    highp float _292 = isnan(_291) ? _286 : (isnan(_286) ? _291 : max(_286, _291));
    highp vec2 _298 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 1.0) * _222), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _315 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _298, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _231) / _252) * Parameters.values[7].x) * 12.0;
    highp float _316 = isnan(_315) ? _292 : (isnan(_292) ? _315 : max(_292, _315));
    highp float _321 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_298, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _139) * Parameters.values[8].x) * 3.0;
    highp float _322 = isnan(_321) ? _316 : (isnan(_316) ? _321 : max(_316, _321));
    highp vec2 _328 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -1.0) * _222), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _345 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _328, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _231) / _252) * Parameters.values[7].x) * 12.0;
    highp float _346 = isnan(_345) ? _322 : (isnan(_322) ? _345 : max(_322, _345));
    highp float _351 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_328, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _139) * Parameters.values[8].x) * 3.0;
    highp vec3 _362 = mix(mix(_184, Parameters.values[21].xyz, vec3(clamp((1.0 - smoothstep(_204 - _206, _204 + _206, _201)) * Parameters.values[5].x, 0.0, 1.0))), Parameters.values[22].xyz, vec3(clamp(smoothstep(0.07999999821186065673828125, 0.449999988079071044921875, isnan(_351) ? _346 : (isnan(_346) ? _351 : max(_346, _351))) * Parameters.values[9].x, 0.0, 1.0)));
    highp vec3 _380 = mix(mix(_362, _115 * _362, vec3(Parameters.values[16].x)), mix((_115 * 2.0) * _362, vec3(1.0) - (((vec3(1.0) - _115) * 2.0) * (vec3(1.0) - _362)), step(vec3(0.5), _115)), vec3(Parameters.values[17].x));
    highp float _398 = _123 * 0.001000000047497451305389404296875;
    bvec3 _523 = isnan(_380);
    bvec3 _524 = isnan(vec3(0.0));
    highp vec3 _525 = max(_380, vec3(0.0));
    highp vec3 _526 = vec3(_523.x ? vec3(0.0).x : _525.x, _523.y ? vec3(0.0).y : _525.y, _523.z ? vec3(0.0).z : _525.z);
    highp vec3 _419 = mix(mix(_115, vec3(_524.x ? _380.x : _526.x, _524.y ? _380.y : _526.y, _524.z ? _380.z : _526.z), vec3((clamp(Parameters.values[10].x * Parameters.values[15].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[12].x, in_var_TEXCOORD0.x), clamp(Parameters.values[11].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_127.z * 255.0) - Parameters.values[13].x))) * step(dot(roundEven(_127.xy * 255.0), vec2(1.0, 256.0)), _123 + (isnan(_398) ? 1.0 : (isnan(1.0) ? _398 : max(1.0, _398)))), clamp(Parameters.values[14].x, 0.0, 1.0)))), _115, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _528 = isnan(_419);
    bvec3 _529 = isnan(vec3(0.0));
    highp vec3 _530 = max(_419, vec3(0.0));
    highp vec3 _531 = vec3(_528.x ? vec3(0.0).x : _530.x, _528.y ? vec3(0.0).y : _530.y, _528.z ? vec3(0.0).z : _530.z);
    out_var_SV_Target = vec4(mix(_419 * 12.9200000762939453125, (pow(vec3(_529.x ? _419.x : _531.x, _529.y ? _419.y : _531.y, _529.z ? _419.z : _531.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _419)), 1.0);
}
