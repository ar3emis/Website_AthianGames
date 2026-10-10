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
    highp vec3 _110 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _118 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _122 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec2 _142 = (in_var_TEXCOORD0 * vec2(1.77777779102325439453125, 1.0)) * Parameters.values[2].x;
    _142.y = _142.y + (((Parameters.frame.x * Parameters.values[0].x) * Parameters.values[3].x) * 4.0);
    highp vec2 _148 = floor(_142);
    highp vec2 _149 = fract(_142);
    highp vec2 _153 = (_149 * _149) * (vec2(3.0) - (_149 * 2.0));
    highp float _163 = _153.x;
    highp vec2 _180 = (_142 * 2.0299999713897705078125) + vec2(19.0);
    highp vec2 _181 = floor(_180);
    highp vec2 _182 = fract(_180);
    highp vec2 _186 = (_182 * _182) * (vec2(3.0) - (_182 * 2.0));
    highp float _196 = _186.x;
    highp vec2 _214 = (_142 * 4.110000133514404296875) + vec2(41.0);
    highp vec2 _215 = floor(_214);
    highp vec2 _216 = fract(_214);
    highp vec2 _220 = (_216 * _216) * (vec2(3.0) - (_216 * 2.0));
    highp float _230 = _220.x;
    highp vec2 _247 = _142 + vec2(31.0, 79.0);
    highp vec2 _248 = floor(_247);
    highp vec2 _249 = fract(_247);
    highp vec2 _253 = (_249 * _249) * (vec2(3.0) - (_249 * 2.0));
    highp float _263 = _253.x;
    highp vec2 _280 = (_247 * 2.0299999713897705078125) + vec2(19.0);
    highp vec2 _281 = floor(_280);
    highp vec2 _282 = fract(_280);
    highp vec2 _286 = (_282 * _282) * (vec2(3.0) - (_282 * 2.0));
    highp float _296 = _286.x;
    highp vec2 _314 = (_247 * 4.110000133514404296875) + vec2(41.0);
    highp vec2 _315 = floor(_314);
    highp vec2 _316 = fract(_314);
    highp vec2 _320 = (_316 * _316) * (vec2(3.0) - (_316 * 2.0));
    highp float _330 = _320.x;
    highp vec2 _347 = vec2(((mix(mix(fract(sin(dot(_148, vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_148 + vec2(1.0, 0.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _163), mix(fract(sin(dot(_148 + vec2(0.0, 1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_148 + vec2(1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _163), _153.y) * 0.569999992847442626953125) + (mix(mix(fract(sin(dot(_181, vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_181 + vec2(1.0, 0.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _196), mix(fract(sin(dot(_181 + vec2(0.0, 1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_181 + vec2(1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _196), _186.y) * 0.2800000011920928955078125)) + (mix(mix(fract(sin(dot(_215, vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_215 + vec2(1.0, 0.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _230), mix(fract(sin(dot(_215 + vec2(0.0, 1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_215 + vec2(1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _230), _220.y) * 0.1500000059604644775390625), ((mix(mix(fract(sin(dot(_248, vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_248 + vec2(1.0, 0.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _263), mix(fract(sin(dot(_248 + vec2(0.0, 1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_248 + vec2(1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _263), _253.y) * 0.569999992847442626953125) + (mix(mix(fract(sin(dot(_281, vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_281 + vec2(1.0, 0.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _296), mix(fract(sin(dot(_281 + vec2(0.0, 1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_281 + vec2(1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _296), _286.y) * 0.2800000011920928955078125)) + (mix(mix(fract(sin(dot(_315, vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_315 + vec2(1.0, 0.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _330), mix(fract(sin(dot(_315 + vec2(0.0, 1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_315 + vec2(1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _330), _320.y) * 0.1500000059604644775390625));
    highp vec3 _363 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(clamp(in_var_TEXCOORD0 + ((((_347 - vec2(0.5)) * Parameters.values[1].x) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)) * smoothstep(0.119999997317790985107421875, 0.800000011920928955078125, in_var_TEXCOORD0.y)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    highp vec3 _383 = (((mix(vec3(dot(_363, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))), _363, vec3(Parameters.values[4].x)) - vec3(0.5)) * Parameters.values[5].x) + vec3(0.5)) + vec3(Parameters.values[6].x);
    bvec3 _465 = isnan(_383);
    bvec3 _466 = isnan(vec3(0.0));
    highp vec3 _467 = max(_383, vec3(0.0));
    highp vec3 _468 = vec3(_465.x ? vec3(0.0).x : _467.x, _465.y ? vec3(0.0).y : _467.y, _465.z ? vec3(0.0).z : _467.z);
    highp vec3 _389 = pow(vec3(_466.x ? _383.x : _468.x, _466.y ? _383.y : _468.y, _466.z ? _383.z : _468.z), vec3(1.0 / (isnan(0.100000001490116119384765625) ? Parameters.values[7].x : (isnan(Parameters.values[7].x) ? 0.100000001490116119384765625 : max(Parameters.values[7].x, 0.100000001490116119384765625))))) * Parameters.values[16].xyz;
    highp vec3 _407 = mix(mix(_389, _110 * _389, vec3(Parameters.values[14].x)), mix((_110 * 2.0) * _389, vec3(1.0) - (((vec3(1.0) - _110) * 2.0) * (vec3(1.0) - _389)), step(vec3(0.5), _110)), vec3(Parameters.values[15].x));
    highp float _425 = _118 * 0.001000000047497451305389404296875;
    bvec3 _480 = isnan(_407);
    bvec3 _481 = isnan(vec3(0.0));
    highp vec3 _482 = max(_407, vec3(0.0));
    highp vec3 _483 = vec3(_480.x ? vec3(0.0).x : _482.x, _480.y ? vec3(0.0).y : _482.y, _480.z ? vec3(0.0).z : _482.z);
    highp vec3 _446 = mix(mix(_110, vec3(_481.x ? _407.x : _483.x, _481.y ? _407.y : _483.y, _481.z ? _407.z : _483.z), vec3((clamp(Parameters.values[8].x * Parameters.values[13].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[10].x, in_var_TEXCOORD0.x), clamp(Parameters.values[9].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_122.z * 255.0) - Parameters.values[11].x))) * step(dot(roundEven(_122.xy * 255.0), vec2(1.0, 256.0)), _118 + (isnan(_425) ? 1.0 : (isnan(1.0) ? _425 : max(1.0, _425)))), clamp(Parameters.values[12].x, 0.0, 1.0)))), _110, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _485 = isnan(_446);
    bvec3 _486 = isnan(vec3(0.0));
    highp vec3 _487 = max(_446, vec3(0.0));
    highp vec3 _488 = vec3(_485.x ? vec3(0.0).x : _487.x, _485.y ? vec3(0.0).y : _487.y, _485.z ? vec3(0.0).z : _487.z);
    out_var_SV_Target = vec4(mix(_446 * 12.9200000762939453125, (pow(vec3(_486.x ? _446.x : _488.x, _486.y ? _446.y : _488.y, _486.z ? _446.z : _488.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _446)), 1.0);
}
