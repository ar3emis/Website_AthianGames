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
    highp vec3 _94 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _102 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _106 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _135 = Parameters.values[7].x * 0.01745329238474369049072265625;
    highp float _136 = cos(_135);
    highp float _137 = sin(_135);
    highp vec2 _142 = ((in_var_TEXCOORD0 - vec2(Parameters.values[1].x, Parameters.values[2].x)) * vec2(1.77777779102325439453125, 1.0)) * mat2(vec2(_136, _137), vec2(-_137, _136));
    highp vec2 _144 = vec2(Parameters.values[4].x, Parameters.values[5].x);
    bvec2 _283 = isnan(_144);
    bvec2 _284 = isnan(vec2(0.001000000047497451305389404296875));
    highp vec2 _285 = max(_144, vec2(0.001000000047497451305389404296875));
    highp vec2 _286 = vec2(_283.x ? vec2(0.001000000047497451305389404296875).x : _285.x, _283.y ? vec2(0.001000000047497451305389404296875).y : _285.y);
    highp vec2 _146 = abs(_142) - vec2(_284.x ? _144.x : _286.x, _284.y ? _144.y : _286.y);
    highp float _167;
    if (Parameters.values[8].x < 0.5)
    {
        _167 = length(_142) - (isnan(0.001000000047497451305389404296875) ? Parameters.values[3].x : (isnan(Parameters.values[3].x) ? 0.001000000047497451305389404296875 : max(Parameters.values[3].x, 0.001000000047497451305389404296875)));
    }
    else
    {
        highp float _166;
        if (Parameters.values[8].x < 1.5)
        {
            bvec2 _293 = isnan(_146);
            bvec2 _294 = isnan(vec2(0.0));
            highp vec2 _295 = max(_146, vec2(0.0));
            highp vec2 _296 = vec2(_293.x ? vec2(0.0).x : _295.x, _293.y ? vec2(0.0).y : _295.y);
            highp float _160 = _146.x;
            highp float _161 = _146.y;
            highp float _162 = isnan(_161) ? _160 : (isnan(_160) ? _161 : max(_160, _161));
            _166 = length(vec2(_294.x ? _146.x : _296.x, _294.y ? _146.y : _296.y)) + (isnan(0.0) ? _162 : (isnan(_162) ? 0.0 : min(_162, 0.0)));
        }
        else
        {
            _166 = _142.x;
        }
        _167 = _166;
    }
    highp float _168 = isnan(0.0) ? Parameters.values[6].x : (isnan(Parameters.values[6].x) ? 0.0 : max(Parameters.values[6].x, 0.0));
    highp float _169 = fwidth(_167);
    highp float _170 = isnan(_169) ? _168 : (isnan(_168) ? _169 : max(_168, _169));
    highp float _173 = smoothstep(_170 * (-0.5), _170 * 0.5, _167);
    highp float _189 = clamp(dot(_94, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)), 0.0, 1.0);
    highp float _190 = clamp(Parameters.values[10].x, 0.0500000007450580596923828125, 0.949999988079071044921875);
    highp vec3 _203;
    if (_189 < _190)
    {
        _203 = mix(Parameters.values[19].xyz, Parameters.values[20].xyz, vec3(_189 / _190));
    }
    else
    {
        _203 = mix(Parameters.values[20].xyz, Parameters.values[21].xyz, vec3((_189 - _190) / (1.0 - _190)));
    }
    highp vec3 _205 = vec3(clamp((Parameters.values[9].x > 0.5) ? _173 : (1.0 - _173), 0.0, 1.0));
    highp vec3 _206 = mix(_94, _203, _205);
    highp vec3 _225 = mix(_206, mix(mix(_206, _94 * _206, vec3(Parameters.values[17].x)), mix((_94 * 2.0) * _206, vec3(1.0) - (((vec3(1.0) - _94) * 2.0) * (vec3(1.0) - _206)), step(vec3(0.5), _94)), vec3(Parameters.values[18].x)), _205);
    highp float _243 = _102 * 0.001000000047497451305389404296875;
    bvec3 _323 = isnan(_225);
    bvec3 _324 = isnan(vec3(0.0));
    highp vec3 _325 = max(_225, vec3(0.0));
    highp vec3 _326 = vec3(_323.x ? vec3(0.0).x : _325.x, _323.y ? vec3(0.0).y : _325.y, _323.z ? vec3(0.0).z : _325.z);
    highp vec3 _264 = mix(mix(_94, vec3(_324.x ? _225.x : _326.x, _324.y ? _225.y : _326.y, _324.z ? _225.z : _326.z), vec3((clamp(Parameters.values[11].x * Parameters.values[16].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[13].x, in_var_TEXCOORD0.x), clamp(Parameters.values[12].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_106.z * 255.0) - Parameters.values[14].x))) * step(dot(roundEven(_106.xy * 255.0), vec2(1.0, 256.0)), _102 + (isnan(_243) ? 1.0 : (isnan(1.0) ? _243 : max(1.0, _243)))), clamp(Parameters.values[15].x, 0.0, 1.0)))), _94, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _328 = isnan(_264);
    bvec3 _329 = isnan(vec3(0.0));
    highp vec3 _330 = max(_264, vec3(0.0));
    highp vec3 _331 = vec3(_328.x ? vec3(0.0).x : _330.x, _328.y ? vec3(0.0).y : _330.y, _328.z ? vec3(0.0).z : _330.z);
    highp vec3 _271 = mix(_264 * 12.9200000762939453125, (pow(vec3(_329.x ? _264.x : _331.x, _329.y ? _264.y : _331.y, _329.z ? _264.z : _331.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _264));
    out_var_SV_Target = vec4(_271, 1.0);
}
