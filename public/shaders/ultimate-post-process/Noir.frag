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
    highp vec3 _99 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _107 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _111 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _130 = dot(_99, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp vec3 _138 = (((mix(vec3(_130), _99, vec3(Parameters.values[1].x)) - vec3(0.5)) * Parameters.values[2].x) + vec3(0.5)) + vec3(Parameters.values[3].x);
    bvec3 _391 = isnan(_138);
    bvec3 _392 = isnan(vec3(0.0));
    highp vec3 _393 = max(_138, vec3(0.0));
    highp vec3 _394 = vec3(_391.x ? vec3(0.0).x : _393.x, _391.y ? vec3(0.0).y : _393.y, _391.z ? vec3(0.0).z : _393.z);
    highp vec3 _144 = pow(vec3(_392.x ? _138.x : _394.x, _392.y ? _138.y : _394.y, _392.z ? _138.z : _394.z), vec3(1.0 / (isnan(0.100000001490116119384765625) ? Parameters.values[4].x : (isnan(Parameters.values[4].x) ? 0.100000001490116119384765625 : max(Parameters.values[4].x, 0.100000001490116119384765625))))) * Parameters.values[19].xyz;
    highp float _149 = dot(_144, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp float _150 = isnan(0.001000000047497451305389404296875) ? _149 : (isnan(_149) ? 0.001000000047497451305389404296875 : max(_149, 0.001000000047497451305389404296875));
    highp float _153 = (isnan(2.0) ? Parameters.values[5].x : (isnan(Parameters.values[5].x) ? 2.0 : max(Parameters.values[5].x, 2.0))) - 1.0;
    highp float _154 = clamp(_150, 0.0, 1.0) * _153;
    highp float _156 = isnan(0.001000000047497451305389404296875) ? Parameters.values[6].x : (isnan(Parameters.values[6].x) ? 0.001000000047497451305389404296875 : max(Parameters.values[6].x, 0.001000000047497451305389404296875));
    highp float _162 = (floor(_154) + smoothstep(0.5 - _156, 0.5 + _156, fract(_154))) / _153;
    highp vec2 _175 = vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125) * (isnan(0.25) ? Parameters.values[7].x : (isnan(Parameters.values[7].x) ? 0.25 : max(Parameters.values[7].x, 0.25)));
    highp float _184 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec2 _190 = clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, 0.0) * _175), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _205 = isnan(1.0) ? _184 : (isnan(_184) ? 1.0 : max(_184, 1.0));
    highp float _208 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _190, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _184) / _205) * Parameters.values[8].x) * 12.0;
    highp float _209 = isnan(_208) ? 0.0 : (isnan(0.0) ? _208 : max(0.0, _208));
    highp float _214 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_190, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _130) * Parameters.values[9].x) * 3.0;
    highp float _215 = isnan(_214) ? _209 : (isnan(_209) ? _214 : max(_209, _214));
    highp vec2 _221 = clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 0.0) * _175), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _238 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _221, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _184) / _205) * Parameters.values[8].x) * 12.0;
    highp float _239 = isnan(_238) ? _215 : (isnan(_215) ? _238 : max(_215, _238));
    highp float _244 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_221, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _130) * Parameters.values[9].x) * 3.0;
    highp float _245 = isnan(_244) ? _239 : (isnan(_239) ? _244 : max(_239, _244));
    highp vec2 _251 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 1.0) * _175), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _268 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _251, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _184) / _205) * Parameters.values[8].x) * 12.0;
    highp float _269 = isnan(_268) ? _245 : (isnan(_245) ? _268 : max(_245, _268));
    highp float _274 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_251, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _130) * Parameters.values[9].x) * 3.0;
    highp float _275 = isnan(_274) ? _269 : (isnan(_269) ? _274 : max(_269, _274));
    highp vec2 _281 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -1.0) * _175), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _298 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _281, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _184) / _205) * Parameters.values[8].x) * 12.0;
    highp float _299 = isnan(_298) ? _275 : (isnan(_275) ? _298 : max(_275, _298));
    highp float _304 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_281, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _130) * Parameters.values[9].x) * 3.0;
    highp vec3 _315 = mix(clamp((_144 * (isnan(0.0599999986588954925537109375) ? _162 : (isnan(_162) ? 0.0599999986588954925537109375 : max(_162, 0.0599999986588954925537109375)))) / vec3(_150), vec3(0.0), vec3(1.0)), Parameters.values[20].xyz, vec3(clamp(smoothstep(0.07999999821186065673828125, 0.449999988079071044921875, isnan(_304) ? _299 : (isnan(_299) ? _304 : max(_299, _304))) * Parameters.values[10].x, 0.0, 1.0)));
    highp vec3 _333 = mix(mix(_315, _99 * _315, vec3(Parameters.values[17].x)), mix((_99 * 2.0) * _315, vec3(1.0) - (((vec3(1.0) - _99) * 2.0) * (vec3(1.0) - _315)), step(vec3(0.5), _99)), vec3(Parameters.values[18].x));
    highp float _351 = _107 * 0.001000000047497451305389404296875;
    bvec3 _476 = isnan(_333);
    bvec3 _477 = isnan(vec3(0.0));
    highp vec3 _478 = max(_333, vec3(0.0));
    highp vec3 _479 = vec3(_476.x ? vec3(0.0).x : _478.x, _476.y ? vec3(0.0).y : _478.y, _476.z ? vec3(0.0).z : _478.z);
    highp vec3 _372 = mix(mix(_99, vec3(_477.x ? _333.x : _479.x, _477.y ? _333.y : _479.y, _477.z ? _333.z : _479.z), vec3((clamp(Parameters.values[11].x * Parameters.values[16].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[13].x, in_var_TEXCOORD0.x), clamp(Parameters.values[12].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_111.z * 255.0) - Parameters.values[14].x))) * step(dot(roundEven(_111.xy * 255.0), vec2(1.0, 256.0)), _107 + (isnan(_351) ? 1.0 : (isnan(1.0) ? _351 : max(1.0, _351)))), clamp(Parameters.values[15].x, 0.0, 1.0)))), _99, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _481 = isnan(_372);
    bvec3 _482 = isnan(vec3(0.0));
    highp vec3 _483 = max(_372, vec3(0.0));
    highp vec3 _484 = vec3(_481.x ? vec3(0.0).x : _483.x, _481.y ? vec3(0.0).y : _483.y, _481.z ? vec3(0.0).z : _483.z);
    out_var_SV_Target = vec4(mix(_372 * 12.9200000762939453125, (pow(vec3(_482.x ? _372.x : _484.x, _482.y ? _372.y : _484.y, _482.z ? _372.z : _484.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _372)), 1.0);
}
