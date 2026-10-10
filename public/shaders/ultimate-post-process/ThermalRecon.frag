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
    highp vec3 _118 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _126 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _130 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _142 = dot(_118, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp float _148 = clamp(mix(_142, 1.0 - clamp(_126 / (isnan(1.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 1.0 : max(Parameters.values[1].x, 1.0))), 0.0, 1.0), Parameters.values[2].x), 0.0, 1.0);
    highp vec2 _175 = vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125) * (isnan(0.25) ? Parameters.values[3].x : (isnan(Parameters.values[3].x) ? 0.25 : max(Parameters.values[3].x, 0.25)));
    highp float _184 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec2 _190 = clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, 0.0) * _175), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _205 = isnan(1.0) ? _184 : (isnan(_184) ? 1.0 : max(_184, 1.0));
    highp float _208 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _190, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _184) / _205) * Parameters.values[4].x) * 12.0;
    highp float _209 = isnan(_208) ? 0.0 : (isnan(0.0) ? _208 : max(0.0, _208));
    highp float _214 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_190, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _142) * Parameters.values[5].x) * 3.0;
    highp float _215 = isnan(_214) ? _209 : (isnan(_209) ? _214 : max(_209, _214));
    highp vec2 _221 = clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 0.0) * _175), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _238 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _221, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _184) / _205) * Parameters.values[4].x) * 12.0;
    highp float _239 = isnan(_238) ? _215 : (isnan(_215) ? _238 : max(_215, _238));
    highp float _244 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_221, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _142) * Parameters.values[5].x) * 3.0;
    highp float _245 = isnan(_244) ? _239 : (isnan(_239) ? _244 : max(_239, _244));
    highp vec2 _251 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 1.0) * _175), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _268 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _251, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _184) / _205) * Parameters.values[4].x) * 12.0;
    highp float _269 = isnan(_268) ? _245 : (isnan(_245) ? _268 : max(_245, _268));
    highp float _274 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_251, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _142) * Parameters.values[5].x) * 3.0;
    highp float _275 = isnan(_274) ? _269 : (isnan(_269) ? _274 : max(_269, _274));
    highp vec2 _281 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -1.0) * _175), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _298 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _281, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _184) / _205) * Parameters.values[4].x) * 12.0;
    highp float _299 = isnan(_298) ? _275 : (isnan(_275) ? _298 : max(_275, _298));
    highp float _304 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_281, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _142) * Parameters.values[5].x) * 3.0;
    highp vec2 _345 = (in_var_TEXCOORD0 - vec2(0.5)) * 2.0;
    _345.x = _345.x * mix(1.0, 1.77777779102325439453125, Parameters.values[11].x);
    highp vec3 _355 = (mix(mix(mix(mix(mix(vec3(0.00999999977648258209228515625, 0.0, 0.07999999821186065673828125), vec3(0.180000007152557373046875, 0.0500000007450580596923828125, 0.89999997615814208984375), vec3(clamp(_148 * 4.0, 0.0, 1.0))), vec3(0.949999988079071044921875, 0.02999999932944774627685546875, 0.070000000298023223876953125), vec3(clamp((_148 - 0.25) * 4.0, 0.0, 1.0))), vec3(1.0, 0.89999997615814208984375, 0.0199999995529651641845703125), vec3(clamp((_148 - 0.5) * 4.0, 0.0, 1.0))), vec3(1.0, 1.0, 0.949999988079071044921875), vec3(clamp((_148 - 0.75) * 4.0, 0.0, 1.0))), Parameters.values[20].xyz, vec3(clamp(smoothstep(0.07999999821186065673828125, 0.449999988079071044921875, isnan(_304) ? _299 : (isnan(_299) ? _304 : max(_299, _304))) * Parameters.values[6].x, 0.0, 1.0))) * (1.0 - ((0.5 + (0.5 * sin((((in_var_TEXCOORD0.y * 720.0) / (isnan(1.0) ? Parameters.values[8].x : (isnan(Parameters.values[8].x) ? 1.0 : max(Parameters.values[8].x, 1.0)))) + ((Parameters.frame.x * Parameters.values[0].x) * Parameters.values[9].x)) * 6.28318500518798828125))) * Parameters.values[7].x))) * (1.0 - (clamp(Parameters.values[10].x, 0.0, 1.0) * smoothstep(0.300000011920928955078125, 1.7000000476837158203125, dot(_345, _345))));
    highp vec3 _373 = mix(mix(_355, _118 * _355, vec3(Parameters.values[18].x)), mix((_118 * 2.0) * _355, vec3(1.0) - (((vec3(1.0) - _118) * 2.0) * (vec3(1.0) - _355)), step(vec3(0.5), _118)), vec3(Parameters.values[19].x));
    highp float _391 = _126 * 0.001000000047497451305389404296875;
    bvec3 _496 = isnan(_373);
    bvec3 _497 = isnan(vec3(0.0));
    highp vec3 _498 = max(_373, vec3(0.0));
    highp vec3 _499 = vec3(_496.x ? vec3(0.0).x : _498.x, _496.y ? vec3(0.0).y : _498.y, _496.z ? vec3(0.0).z : _498.z);
    highp vec3 _412 = mix(mix(_118, vec3(_497.x ? _373.x : _499.x, _497.y ? _373.y : _499.y, _497.z ? _373.z : _499.z), vec3((clamp(Parameters.values[12].x * Parameters.values[17].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[14].x, in_var_TEXCOORD0.x), clamp(Parameters.values[13].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_130.z * 255.0) - Parameters.values[15].x))) * step(dot(roundEven(_130.xy * 255.0), vec2(1.0, 256.0)), _126 + (isnan(_391) ? 1.0 : (isnan(1.0) ? _391 : max(1.0, _391)))), clamp(Parameters.values[16].x, 0.0, 1.0)))), _118, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _501 = isnan(_412);
    bvec3 _502 = isnan(vec3(0.0));
    highp vec3 _503 = max(_412, vec3(0.0));
    highp vec3 _504 = vec3(_501.x ? vec3(0.0).x : _503.x, _501.y ? vec3(0.0).y : _503.y, _501.z ? vec3(0.0).z : _503.z);
    highp vec3 _419 = mix(_412 * 12.9200000762939453125, (pow(vec3(_502.x ? _412.x : _504.x, _502.y ? _412.y : _504.y, _502.z ? _412.z : _504.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _412));
    out_var_SV_Target = vec4(_419, 1.0);
}
