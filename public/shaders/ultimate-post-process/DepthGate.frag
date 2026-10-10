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
    highp vec3 _97 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _105 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _109 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec2 _144 = vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125) * (isnan(0.25) ? Parameters.values[4].x : (isnan(Parameters.values[4].x) ? 0.25 : max(Parameters.values[4].x, 0.25)));
    highp float _153 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp float _154 = dot(_97, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp vec2 _160 = clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, 0.0) * _144), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _175 = isnan(1.0) ? _153 : (isnan(_153) ? 1.0 : max(_153, 1.0));
    highp float _178 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _160, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _153) / _175) * Parameters.values[5].x) * 12.0;
    highp float _179 = isnan(_178) ? 0.0 : (isnan(0.0) ? _178 : max(0.0, _178));
    highp float _184 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_160, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _154) * Parameters.values[6].x) * 3.0;
    highp float _185 = isnan(_184) ? _179 : (isnan(_179) ? _184 : max(_179, _184));
    highp vec2 _191 = clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 0.0) * _144), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _208 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _191, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _153) / _175) * Parameters.values[5].x) * 12.0;
    highp float _209 = isnan(_208) ? _185 : (isnan(_185) ? _208 : max(_185, _208));
    highp float _214 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_191, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _154) * Parameters.values[6].x) * 3.0;
    highp float _215 = isnan(_214) ? _209 : (isnan(_209) ? _214 : max(_209, _214));
    highp vec2 _221 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 1.0) * _144), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _238 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _221, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _153) / _175) * Parameters.values[5].x) * 12.0;
    highp float _239 = isnan(_238) ? _215 : (isnan(_215) ? _238 : max(_215, _238));
    highp float _244 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_221, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _154) * Parameters.values[6].x) * 3.0;
    highp float _245 = isnan(_244) ? _239 : (isnan(_239) ? _244 : max(_239, _244));
    highp vec2 _251 = clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -1.0) * _144), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp float _268 = ((abs(dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, _251, 0.0).xy * 255.0), vec2(1.0, 256.0)) - _153) / _175) * Parameters.values[5].x) * 12.0;
    highp float _269 = isnan(_268) ? _245 : (isnan(_245) ? _268 : max(_245, _268));
    highp float _274 = (abs(dot(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(_251, vec2(0.0), vec2(1.0)), 0.0).xyz, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)) - _154) * Parameters.values[6].x) * 3.0;
    highp vec3 _291 = (_97 * Parameters.values[7].x) + (((Parameters.values[17].xyz * clamp(exp2(pow((_105 - (fract((Parameters.frame.x * Parameters.values[0].x) * Parameters.values[3].x) * Parameters.values[1].x)) / (isnan(1.0) ? Parameters.values[2].x : (isnan(Parameters.values[2].x) ? 1.0 : max(Parameters.values[2].x, 1.0))), 2.0) * (-3.0)), 0.0, 1.0)) * (0.300000011920928955078125 + (smoothstep(0.07999999821186065673828125, 0.449999988079071044921875, isnan(_274) ? _269 : (isnan(_269) ? _274 : max(_269, _274))) * 2.5))) * Parameters.values[8].x);
    highp vec3 _309 = mix(mix(_291, _97 * _291, vec3(Parameters.values[15].x)), mix((_97 * 2.0) * _291, vec3(1.0) - (((vec3(1.0) - _97) * 2.0) * (vec3(1.0) - _291)), step(vec3(0.5), _97)), vec3(Parameters.values[16].x));
    highp float _327 = _105 * 0.001000000047497451305389404296875;
    bvec3 _427 = isnan(_309);
    bvec3 _428 = isnan(vec3(0.0));
    highp vec3 _429 = max(_309, vec3(0.0));
    highp vec3 _430 = vec3(_427.x ? vec3(0.0).x : _429.x, _427.y ? vec3(0.0).y : _429.y, _427.z ? vec3(0.0).z : _429.z);
    highp vec3 _348 = mix(mix(_97, vec3(_428.x ? _309.x : _430.x, _428.y ? _309.y : _430.y, _428.z ? _309.z : _430.z), vec3((clamp(Parameters.values[9].x * Parameters.values[14].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[11].x, in_var_TEXCOORD0.x), clamp(Parameters.values[10].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_109.z * 255.0) - Parameters.values[12].x))) * step(dot(roundEven(_109.xy * 255.0), vec2(1.0, 256.0)), _105 + (isnan(_327) ? 1.0 : (isnan(1.0) ? _327 : max(1.0, _327)))), clamp(Parameters.values[13].x, 0.0, 1.0)))), _97, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _432 = isnan(_348);
    bvec3 _433 = isnan(vec3(0.0));
    highp vec3 _434 = max(_348, vec3(0.0));
    highp vec3 _435 = vec3(_432.x ? vec3(0.0).x : _434.x, _432.y ? vec3(0.0).y : _434.y, _432.z ? vec3(0.0).z : _434.z);
    out_var_SV_Target = vec4(mix(_348 * 12.9200000762939453125, (pow(vec3(_433.x ? _348.x : _435.x, _433.y ? _348.y : _435.y, _433.z ? _348.z : _435.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _348)), 1.0);
}
