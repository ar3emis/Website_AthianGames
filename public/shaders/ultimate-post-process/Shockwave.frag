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
    highp vec3 _86 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _94 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _98 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec2 _120 = (in_var_TEXCOORD0 - vec2(0.5)) * vec2(1.77777779102325439453125, 1.0);
    highp float _121 = length(_120);
    highp float _122 = (Parameters.frame.x * Parameters.values[0].x) * Parameters.values[3].x;
    highp float _125 = fract(_122 * 0.4000000059604644775390625) * 0.89999997615814208984375;
    highp vec2 _150 = clamp(in_var_TEXCOORD0 + ((((_120 / vec2(isnan(0.001000000047497451305389404296875) ? _121 : (isnan(_121) ? 0.001000000047497451305389404296875 : max(_121, 0.001000000047497451305389404296875)))) * (sin((_121 * Parameters.values[2].x) - (_122 * 5.0)) * mix(exp(_121 * (-1.5)), exp(-pow((_121 - _125) * 15.0, 2.0)) * clamp((0.89999997615814208984375 - _125) * 8.0, 0.0, 1.0), Parameters.values[4].x))) * Parameters.values[1].x) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0));
    highp vec2 _155 = clamp(clamp(clamp(_150, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp vec2 _168 = (mix(vec2(1.0, 0.0), (_150 - vec2(0.5)) * 2.0, vec2(Parameters.values[6].x)) * Parameters.values[5].x) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125);
    highp vec4 _188 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, _155, 0.0);
    highp vec3 _196 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, _155, 0.0).xyz + vec3(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(_150 + _168, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).x - _188.x, 0.0, textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(_150 - _168, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).z - _188.z);
    bvec3 _278 = isnan(_196);
    bvec3 _279 = isnan(vec3(0.0));
    highp vec3 _280 = max(_196, vec3(0.0));
    highp vec3 _281 = vec3(_278.x ? vec3(0.0).x : _280.x, _278.y ? vec3(0.0).y : _280.y, _278.z ? vec3(0.0).z : _280.z);
    highp vec3 _197 = vec3(_279.x ? _196.x : _281.x, _279.y ? _196.y : _281.y, _279.z ? _196.z : _281.z);
    highp vec3 _215 = mix(mix(_197, _86 * _197, vec3(Parameters.values[13].x)), mix((_86 * 2.0) * _197, vec3(1.0) - (((vec3(1.0) - _86) * 2.0) * (vec3(1.0) - _197)), step(vec3(0.5), _86)), vec3(Parameters.values[14].x));
    highp float _233 = _94 * 0.001000000047497451305389404296875;
    bvec3 _288 = isnan(_215);
    bvec3 _289 = isnan(vec3(0.0));
    highp vec3 _290 = max(_215, vec3(0.0));
    highp vec3 _291 = vec3(_288.x ? vec3(0.0).x : _290.x, _288.y ? vec3(0.0).y : _290.y, _288.z ? vec3(0.0).z : _290.z);
    highp vec3 _254 = mix(mix(_86, vec3(_289.x ? _215.x : _291.x, _289.y ? _215.y : _291.y, _289.z ? _215.z : _291.z), vec3((clamp(Parameters.values[7].x * Parameters.values[12].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[9].x, in_var_TEXCOORD0.x), clamp(Parameters.values[8].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_98.z * 255.0) - Parameters.values[10].x))) * step(dot(roundEven(_98.xy * 255.0), vec2(1.0, 256.0)), _94 + (isnan(_233) ? 1.0 : (isnan(1.0) ? _233 : max(1.0, _233)))), clamp(Parameters.values[11].x, 0.0, 1.0)))), _86, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _293 = isnan(_254);
    bvec3 _294 = isnan(vec3(0.0));
    highp vec3 _295 = max(_254, vec3(0.0));
    highp vec3 _296 = vec3(_293.x ? vec3(0.0).x : _295.x, _293.y ? vec3(0.0).y : _295.y, _293.z ? vec3(0.0).z : _295.z);
    highp vec3 _261 = mix(_254 * 12.9200000762939453125, (pow(vec3(_294.x ? _254.x : _296.x, _294.y ? _254.y : _296.y, _294.z ? _254.z : _296.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _254));
    out_var_SV_Target = vec4(_261, 1.0);
}
