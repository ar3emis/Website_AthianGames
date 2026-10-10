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
    highp vec2 _119 = vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125) * Parameters.values[1].x;
    highp vec3 _223 = ((((((((textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0) * _119), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz * 1.0) + (textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -1.0) * _119), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz * 2.0)) + (textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, -1.0) * _119), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz * 1.0)) + (textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 0.0) * _119), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz * 2.0)) + (textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz * 4.0)) + (textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, 0.0) * _119), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz * 2.0)) + (textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 1.0) * _119), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz * 1.0)) + (textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 1.0) * _119), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz * 2.0)) + (textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + _119, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz * 1.0);
    highp float _232 = dot(_223 * vec3(0.0625), vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    highp float _238 = (sqrt(clamp(_232, 0.0, 1.0)) * Parameters.values[2].x) + (in_var_TEXCOORD0.y * 3.0);
    highp float _243 = fwidth(_238) * 0.5;
    highp float _244 = isnan(0.01200000010430812835693359375) ? _243 : (isnan(_243) ? 0.01200000010430812835693359375 : max(_243, 0.01200000010430812835693359375));
    highp vec3 _253 = mix(vec3(0.959999978542327880859375, 0.944999992847442626953125, 0.89999997615814208984375), Parameters.values[12].xyz, vec3((1.0 - smoothstep(Parameters.values[3].x - _244, Parameters.values[3].x + _244, abs(fract(_238) - 0.5))) * (1.0 - smoothstep(0.800000011920928955078125, 1.0, _232))));
    highp vec3 _271 = mix(mix(_253, _97 * _253, vec3(Parameters.values[10].x)), mix((_97 * 2.0) * _253, vec3(1.0) - (((vec3(1.0) - _97) * 2.0) * (vec3(1.0) - _253)), step(vec3(0.5), _97)), vec3(Parameters.values[11].x));
    highp float _289 = _105 * 0.001000000047497451305389404296875;
    bvec3 _339 = isnan(_271);
    bvec3 _340 = isnan(vec3(0.0));
    highp vec3 _341 = max(_271, vec3(0.0));
    highp vec3 _342 = vec3(_339.x ? vec3(0.0).x : _341.x, _339.y ? vec3(0.0).y : _341.y, _339.z ? vec3(0.0).z : _341.z);
    highp vec3 _310 = mix(mix(_97, vec3(_340.x ? _271.x : _342.x, _340.y ? _271.y : _342.y, _340.z ? _271.z : _342.z), vec3((clamp(Parameters.values[4].x * Parameters.values[9].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[6].x, in_var_TEXCOORD0.x), clamp(Parameters.values[5].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_109.z * 255.0) - Parameters.values[7].x))) * step(dot(roundEven(_109.xy * 255.0), vec2(1.0, 256.0)), _105 + (isnan(_289) ? 1.0 : (isnan(1.0) ? _289 : max(1.0, _289)))), clamp(Parameters.values[8].x, 0.0, 1.0)))), _97, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _344 = isnan(_310);
    bvec3 _345 = isnan(vec3(0.0));
    highp vec3 _346 = max(_310, vec3(0.0));
    highp vec3 _347 = vec3(_344.x ? vec3(0.0).x : _346.x, _344.y ? vec3(0.0).y : _346.y, _344.z ? vec3(0.0).z : _346.z);
    highp vec3 _317 = mix(_310 * 12.9200000762939453125, (pow(vec3(_345.x ? _310.x : _347.x, _345.y ? _310.y : _347.y, _345.z ? _310.z : _347.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _310));
    out_var_SV_Target = vec4(_317, 1.0);
}
