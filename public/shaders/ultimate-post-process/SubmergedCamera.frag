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
    highp float _132 = (Parameters.frame.x * Parameters.values[0].x) * Parameters.values[3].x;
    highp float _134 = in_var_TEXCOORD0.y * Parameters.values[2].x;
    highp vec2 _153 = clamp(in_var_TEXCOORD0 + ((vec2(sin(_134 + (_132 * 2.099999904632568359375)) + (0.449999988079071044921875 * sin((_134 * 2.7000000476837158203125) - _132)), sin(((in_var_TEXCOORD0.x * Parameters.values[2].x) * 0.699999988079071044921875) + (_132 * 1.2999999523162841796875))) * Parameters.values[1].x) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0));
    highp vec2 _158 = clamp(clamp(clamp(_153, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp vec3 _161 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, _158, 0.0).xyz;
    highp vec3 _181 = (((mix(vec3(dot(_161, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))), _161, vec3(Parameters.values[4].x)) - vec3(0.5)) * Parameters.values[5].x) + vec3(0.5)) + vec3(Parameters.values[6].x);
    bvec3 _334 = isnan(_181);
    bvec3 _335 = isnan(vec3(0.0));
    highp vec3 _336 = max(_181, vec3(0.0));
    highp vec3 _337 = vec3(_334.x ? vec3(0.0).x : _336.x, _334.y ? vec3(0.0).y : _336.y, _334.z ? vec3(0.0).z : _336.z);
    highp float _195 = _109 - Parameters.values[8].x;
    highp vec2 _214 = (mix(vec2(1.0, 0.0), (_153 - vec2(0.5)) * 2.0, vec2(Parameters.values[11].x)) * Parameters.values[10].x) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125);
    highp vec4 _234 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, _158, 0.0);
    highp vec3 _242 = mix(pow(vec3(_335.x ? _181.x : _337.x, _335.y ? _181.y : _337.y, _335.z ? _181.z : _337.z), vec3(1.0 / (isnan(0.100000001490116119384765625) ? Parameters.values[7].x : (isnan(Parameters.values[7].x) ? 0.100000001490116119384765625 : max(Parameters.values[7].x, 0.100000001490116119384765625))))) * Parameters.values[22].xyz, Parameters.values[23].xyz, vec3(clamp(1.0 - exp((-(isnan(0.0) ? _195 : (isnan(_195) ? 0.0 : max(_195, 0.0)))) / (isnan(1.0) ? Parameters.values[9].x : (isnan(Parameters.values[9].x) ? 1.0 : max(Parameters.values[9].x, 1.0)))), 0.0, 1.0))) + vec3(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(_153 + _214, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).x - _234.x, 0.0, textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(_153 - _214, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).z - _234.z);
    bvec3 _354 = isnan(_242);
    bvec3 _355 = isnan(vec3(0.0));
    highp vec3 _356 = max(_242, vec3(0.0));
    highp vec3 _357 = vec3(_354.x ? vec3(0.0).x : _356.x, _354.y ? vec3(0.0).y : _356.y, _354.z ? vec3(0.0).z : _356.z);
    highp vec2 _249 = (in_var_TEXCOORD0 - vec2(0.5)) * 2.0;
    _249.x = _249.x * mix(1.0, 1.77777779102325439453125, Parameters.values[13].x);
    highp vec3 _259 = vec3(_355.x ? _242.x : _357.x, _355.y ? _242.y : _357.y, _355.z ? _242.z : _357.z) * (1.0 - (clamp(Parameters.values[12].x, 0.0, 1.0) * smoothstep(0.300000011920928955078125, 1.7000000476837158203125, dot(_249, _249))));
    highp vec3 _277 = mix(mix(_259, _101 * _259, vec3(Parameters.values[20].x)), mix((_101 * 2.0) * _259, vec3(1.0) - (((vec3(1.0) - _101) * 2.0) * (vec3(1.0) - _259)), step(vec3(0.5), _101)), vec3(Parameters.values[21].x));
    highp float _294 = _109 * 0.001000000047497451305389404296875;
    bvec3 _364 = isnan(_277);
    bvec3 _365 = isnan(vec3(0.0));
    highp vec3 _366 = max(_277, vec3(0.0));
    highp vec3 _367 = vec3(_364.x ? vec3(0.0).x : _366.x, _364.y ? vec3(0.0).y : _366.y, _364.z ? vec3(0.0).z : _366.z);
    highp vec3 _315 = mix(mix(_101, vec3(_365.x ? _277.x : _367.x, _365.y ? _277.y : _367.y, _365.z ? _277.z : _367.z), vec3((clamp(Parameters.values[14].x * Parameters.values[19].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[16].x, in_var_TEXCOORD0.x), clamp(Parameters.values[15].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_113.z * 255.0) - Parameters.values[17].x))) * step(dot(roundEven(_113.xy * 255.0), vec2(1.0, 256.0)), _109 + (isnan(_294) ? 1.0 : (isnan(1.0) ? _294 : max(1.0, _294)))), clamp(Parameters.values[18].x, 0.0, 1.0)))), _101, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _369 = isnan(_315);
    bvec3 _370 = isnan(vec3(0.0));
    highp vec3 _371 = max(_315, vec3(0.0));
    highp vec3 _372 = vec3(_369.x ? vec3(0.0).x : _371.x, _369.y ? vec3(0.0).y : _371.y, _369.z ? vec3(0.0).z : _371.z);
    highp vec3 _322 = mix(_315 * 12.9200000762939453125, (pow(vec3(_370.x ? _315.x : _372.x, _370.y ? _315.y : _372.y, _370.z ? _315.z : _372.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _315));
    out_var_SV_Target = vec4(_322, 1.0);
}
