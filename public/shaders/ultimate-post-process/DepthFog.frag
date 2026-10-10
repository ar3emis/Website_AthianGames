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
    highp vec3 _79 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _87 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _91 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _106 = _87 - Parameters.values[1].x;
    highp vec3 _115 = mix(_79, Parameters.values[15].xyz, vec3(clamp(1.0 - exp((-(isnan(0.0) ? _106 : (isnan(_106) ? 0.0 : max(_106, 0.0)))) / (isnan(1.0) ? Parameters.values[2].x : (isnan(Parameters.values[2].x) ? 1.0 : max(Parameters.values[2].x, 1.0)))), 0.0, 1.0)));
    highp vec3 _135 = (((mix(vec3(dot(_115, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))), _115, vec3(Parameters.values[3].x)) - vec3(0.5)) * Parameters.values[4].x) + vec3(0.5)) + vec3(Parameters.values[5].x);
    bvec3 _227 = isnan(_135);
    bvec3 _228 = isnan(vec3(0.0));
    highp vec3 _229 = max(_135, vec3(0.0));
    highp vec3 _230 = vec3(_227.x ? vec3(0.0).x : _229.x, _227.y ? vec3(0.0).y : _229.y, _227.z ? vec3(0.0).z : _229.z);
    highp vec3 _141 = pow(vec3(_228.x ? _135.x : _230.x, _228.y ? _135.y : _230.y, _228.z ? _135.z : _230.z), vec3(1.0 / (isnan(0.100000001490116119384765625) ? Parameters.values[6].x : (isnan(Parameters.values[6].x) ? 0.100000001490116119384765625 : max(Parameters.values[6].x, 0.100000001490116119384765625))))) * Parameters.values[16].xyz;
    highp vec3 _159 = mix(mix(_141, _79 * _141, vec3(Parameters.values[13].x)), mix((_79 * 2.0) * _141, vec3(1.0) - (((vec3(1.0) - _79) * 2.0) * (vec3(1.0) - _141)), step(vec3(0.5), _79)), vec3(Parameters.values[14].x));
    highp float _177 = _87 * 0.001000000047497451305389404296875;
    bvec3 _242 = isnan(_159);
    bvec3 _243 = isnan(vec3(0.0));
    highp vec3 _244 = max(_159, vec3(0.0));
    highp vec3 _245 = vec3(_242.x ? vec3(0.0).x : _244.x, _242.y ? vec3(0.0).y : _244.y, _242.z ? vec3(0.0).z : _244.z);
    highp vec3 _198 = mix(mix(_79, vec3(_243.x ? _159.x : _245.x, _243.y ? _159.y : _245.y, _243.z ? _159.z : _245.z), vec3((clamp(Parameters.values[7].x * Parameters.values[12].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[9].x, in_var_TEXCOORD0.x), clamp(Parameters.values[8].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_91.z * 255.0) - Parameters.values[10].x))) * step(dot(roundEven(_91.xy * 255.0), vec2(1.0, 256.0)), _87 + (isnan(_177) ? 1.0 : (isnan(1.0) ? _177 : max(1.0, _177)))), clamp(Parameters.values[11].x, 0.0, 1.0)))), _79, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _247 = isnan(_198);
    bvec3 _248 = isnan(vec3(0.0));
    highp vec3 _249 = max(_198, vec3(0.0));
    highp vec3 _250 = vec3(_247.x ? vec3(0.0).x : _249.x, _247.y ? vec3(0.0).y : _249.y, _247.z ? vec3(0.0).z : _249.z);
    highp vec3 _205 = mix(_198 * 12.9200000762939453125, (pow(vec3(_248.x ? _198.x : _250.x, _248.y ? _198.y : _250.y, _248.z ? _198.z : _250.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _198));
    out_var_SV_Target = vec4(_205, 1.0);
}
