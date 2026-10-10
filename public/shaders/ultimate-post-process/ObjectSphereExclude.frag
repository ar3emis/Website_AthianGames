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
    highp vec3 _100 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _108 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _112 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _116 = dot(roundEven(_112.xy * 255.0), vec2(1.0, 256.0));
    highp float _119 = roundEven(_112.z * 255.0);
    highp vec3 _182 = vec3(Parameters.values[4].x, Parameters.values[5].x, Parameters.values[6].x);
    highp vec3 _183 = (Parameters.cameraPosition.xyz + (((Parameters.cameraForward.xyz + ((Parameters.cameraRight.xyz * ((in_var_TEXCOORD0.x * 2.0) - 1.0)) * Parameters.cameraPosition.w)) + (((Parameters.cameraUp.xyz * (1.0 - (in_var_TEXCOORD0.y * 2.0))) * Parameters.cameraPosition.w) * vec3(0.5625))) * _108)) - vec3(Parameters.values[1].x, Parameters.values[2].x, Parameters.values[3].x);
    highp float _184 = Parameters.values[16].x * 0.01745329238474369049072265625;
    highp float _185 = cos(_184);
    highp float _186 = sin(_184);
    highp vec2 _192 = _183.xy * mat2(vec2(_185, _186), vec2(-_186, _185));
    highp vec3 _193 = vec3(_192.x, _192.y, _183.z);
    bvec3 _364 = isnan(_182);
    bvec3 _365 = isnan(vec3(1.0));
    highp vec3 _366 = max(_182, vec3(1.0));
    highp vec3 _367 = vec3(_364.x ? vec3(1.0).x : _366.x, _364.y ? vec3(1.0).y : _366.y, _364.z ? vec3(1.0).z : _366.z);
    highp vec3 _196 = abs(_193) - vec3(_365.x ? _182.x : _367.x, _365.y ? _182.y : _367.y, _365.z ? _182.z : _367.z);
    bvec3 _369 = isnan(_196);
    bvec3 _370 = isnan(vec3(0.0));
    highp vec3 _371 = max(_196, vec3(0.0));
    highp vec3 _372 = vec3(_369.x ? vec3(0.0).x : _371.x, _369.y ? vec3(0.0).y : _371.y, _369.z ? vec3(0.0).z : _371.z);
    highp float _202 = isnan(_196.z) ? _196.y : (isnan(_196.y) ? _196.z : max(_196.y, _196.z));
    highp float _203 = isnan(_202) ? _196.x : (isnan(_196.x) ? _202 : max(_196.x, _202));
    highp float _213;
    if (Parameters.values[9].x < 0.5)
    {
        _213 = length(_193) - (isnan(1.0) ? Parameters.values[7].x : (isnan(Parameters.values[7].x) ? 1.0 : max(Parameters.values[7].x, 1.0)));
    }
    else
    {
        _213 = length(vec3(_370.x ? _196.x : _372.x, _370.y ? _196.y : _372.y, _370.z ? _196.z : _372.z)) + (isnan(0.0) ? _203 : (isnan(_203) ? 0.0 : min(_203, 0.0)));
    }
    highp float _214 = isnan(0.0) ? Parameters.values[8].x : (isnan(Parameters.values[8].x) ? 0.0 : max(Parameters.values[8].x, 0.0));
    highp float _215 = fwidth(_213);
    highp float _216 = isnan(0.100000001490116119384765625) ? _215 : (isnan(_215) ? 0.100000001490116119384765625 : max(_215, 0.100000001490116119384765625));
    highp float _217 = isnan(_216) ? _214 : (isnan(_214) ? _216 : max(_214, _216));
    highp float _218 = _108 * 9.9999997473787516355514526367188e-05;
    highp float _221 = step(_116, _108 + (isnan(_218) ? 0.5 : (isnan(0.5) ? _218 : max(0.5, _218))));
    highp float _235;
    if (Parameters.values[9].x > 1.5)
    {
        _235 = (1.0 - step(0.5, abs(_119 - Parameters.values[11].x))) * _221;
    }
    else
    {
        _235 = 1.0 - smoothstep(_217 * (-0.5), _217 * 0.5, _213);
    }
    highp float _241;
    if (Parameters.values[10].x > 0.5)
    {
        _241 = 1.0 - _235;
    }
    else
    {
        _241 = _235;
    }
    highp vec3 _279 = (((mix(vec3(dot(_100, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))), _100, vec3(Parameters.values[17].x)) - vec3(0.5)) * Parameters.values[18].x) + vec3(0.5)) + vec3(Parameters.values[19].x);
    bvec3 _414 = isnan(_279);
    bvec3 _415 = isnan(vec3(0.0));
    highp vec3 _416 = max(_279, vec3(0.0));
    highp vec3 _417 = vec3(_414.x ? vec3(0.0).x : _416.x, _414.y ? vec3(0.0).y : _416.y, _414.z ? vec3(0.0).z : _416.z);
    highp vec3 _287 = vec3(clamp(clamp((_241 * mix(1.0, (1.0 - step(0.5, abs(_119 - Parameters.values[13].x))) * _221, clamp(Parameters.values[12].x, 0.0, 1.0))) * (1.0 - (((1.0 - step(0.5, abs(_119 - Parameters.values[15].x))) * _221) * clamp(Parameters.values[14].x, 0.0, 1.0))), 0.0, 1.0), 0.0, 1.0));
    highp vec3 _288 = mix(_100, pow(vec3(_415.x ? _279.x : _417.x, _415.y ? _279.y : _417.y, _415.z ? _279.z : _417.z), vec3(1.0 / (isnan(0.100000001490116119384765625) ? Parameters.values[20].x : (isnan(Parameters.values[20].x) ? 0.100000001490116119384765625 : max(Parameters.values[20].x, 0.100000001490116119384765625))))) * Parameters.values[29].xyz, _287);
    highp vec3 _307 = mix(_288, mix(mix(_288, _100 * _288, vec3(Parameters.values[27].x)), mix((_100 * 2.0) * _288, vec3(1.0) - (((vec3(1.0) - _100) * 2.0) * (vec3(1.0) - _288)), step(vec3(0.5), _100)), vec3(Parameters.values[28].x)), _287);
    highp float _324 = _108 * 0.001000000047497451305389404296875;
    bvec3 _429 = isnan(_307);
    bvec3 _430 = isnan(vec3(0.0));
    highp vec3 _431 = max(_307, vec3(0.0));
    highp vec3 _432 = vec3(_429.x ? vec3(0.0).x : _431.x, _429.y ? vec3(0.0).y : _431.y, _429.z ? vec3(0.0).z : _431.z);
    highp vec3 _345 = mix(mix(_100, vec3(_430.x ? _307.x : _432.x, _430.y ? _307.y : _432.y, _430.z ? _307.z : _432.z), vec3((clamp(Parameters.values[21].x * Parameters.values[26].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[23].x, in_var_TEXCOORD0.x), clamp(Parameters.values[22].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(_119 - Parameters.values[24].x))) * step(_116, _108 + (isnan(_324) ? 1.0 : (isnan(1.0) ? _324 : max(1.0, _324)))), clamp(Parameters.values[25].x, 0.0, 1.0)))), _100, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _434 = isnan(_345);
    bvec3 _435 = isnan(vec3(0.0));
    highp vec3 _436 = max(_345, vec3(0.0));
    highp vec3 _437 = vec3(_434.x ? vec3(0.0).x : _436.x, _434.y ? vec3(0.0).y : _436.y, _434.z ? vec3(0.0).z : _436.z);
    out_var_SV_Target = vec4(mix(_345 * 12.9200000762939453125, (pow(vec3(_435.x ? _345.x : _437.x, _435.y ? _345.y : _437.y, _435.z ? _345.z : _437.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _345)), 1.0);
}
