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
    highp float _134 = Parameters.frame.x * Parameters.values[0].x;
    highp vec3 _170 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(clamp(in_var_TEXCOORD0 + vec2(((exp(-pow((fract(in_var_TEXCOORD0.y - (_134 * Parameters.values[2].x)) - 0.5) * 30.0, 2.0)) + ((sin((in_var_TEXCOORD0.y * 200.0) + (_134 * 25.0)) * 0.25) + (sin(_134 * 7.0) * 0.3499999940395355224609375))) * Parameters.values[1].x) * 0.0007812500116415321826934814453125, 0.0), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    highp vec3 _190 = (((mix(vec3(dot(_170, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))), _170, vec3(Parameters.values[3].x)) - vec3(0.5)) * Parameters.values[4].x) + vec3(0.5)) + vec3(Parameters.values[5].x);
    bvec3 _336 = isnan(_190);
    bvec3 _337 = isnan(vec3(0.0));
    highp vec3 _338 = max(_190, vec3(0.0));
    highp vec3 _339 = vec3(_336.x ? vec3(0.0).x : _338.x, _336.y ? vec3(0.0).y : _338.y, _336.z ? vec3(0.0).z : _338.z);
    highp vec3 _214 = (pow(vec3(_337.x ? _190.x : _339.x, _337.y ? _190.y : _339.y, _337.z ? _190.z : _339.z), vec3(1.0 / (isnan(0.100000001490116119384765625) ? Parameters.values[6].x : (isnan(Parameters.values[6].x) ? 0.100000001490116119384765625 : max(Parameters.values[6].x, 0.100000001490116119384765625))))) * Parameters.values[23].xyz) * (1.0 - ((0.5 + (0.5 * sin((((in_var_TEXCOORD0.y * 720.0) / (isnan(1.0) ? Parameters.values[8].x : (isnan(Parameters.values[8].x) ? 1.0 : max(Parameters.values[8].x, 1.0)))) + (_134 * Parameters.values[9].x)) * 6.28318500518798828125))) * Parameters.values[7].x));
    highp vec3 _243 = _214 + vec3(((fract(sin(dot(floor((in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(isnan(0.25) ? Parameters.values[11].x : (isnan(Parameters.values[11].x) ? 0.25 : max(Parameters.values[11].x, 0.25)))) + vec2(floor(_134 * 24.0) * Parameters.values[12].x), vec2(12.98980045318603515625, 78.233001708984375))) * 43758.546875) - 0.5) * Parameters.values[10].x) * (0.4000000059604644775390625 + (0.60000002384185791015625 * (1.0 - dot(_214, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))))));
    bvec3 _356 = isnan(_243);
    bvec3 _357 = isnan(vec3(0.0));
    highp vec3 _358 = max(_243, vec3(0.0));
    highp vec3 _359 = vec3(_356.x ? vec3(0.0).x : _358.x, _356.y ? vec3(0.0).y : _358.y, _356.z ? vec3(0.0).z : _358.z);
    highp vec2 _250 = (in_var_TEXCOORD0 - vec2(0.5)) * 2.0;
    _250.x = _250.x * mix(1.0, 1.77777779102325439453125, Parameters.values[14].x);
    highp vec3 _260 = vec3(_357.x ? _243.x : _359.x, _357.y ? _243.y : _359.y, _357.z ? _243.z : _359.z) * (1.0 - (clamp(Parameters.values[13].x, 0.0, 1.0) * smoothstep(0.300000011920928955078125, 1.7000000476837158203125, dot(_250, _250))));
    highp vec3 _278 = mix(mix(_260, _110 * _260, vec3(Parameters.values[21].x)), mix((_110 * 2.0) * _260, vec3(1.0) - (((vec3(1.0) - _110) * 2.0) * (vec3(1.0) - _260)), step(vec3(0.5), _110)), vec3(Parameters.values[22].x));
    highp float _296 = _118 * 0.001000000047497451305389404296875;
    bvec3 _366 = isnan(_278);
    bvec3 _367 = isnan(vec3(0.0));
    highp vec3 _368 = max(_278, vec3(0.0));
    highp vec3 _369 = vec3(_366.x ? vec3(0.0).x : _368.x, _366.y ? vec3(0.0).y : _368.y, _366.z ? vec3(0.0).z : _368.z);
    highp vec3 _317 = mix(mix(_110, vec3(_367.x ? _278.x : _369.x, _367.y ? _278.y : _369.y, _367.z ? _278.z : _369.z), vec3((clamp(Parameters.values[15].x * Parameters.values[20].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[17].x, in_var_TEXCOORD0.x), clamp(Parameters.values[16].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_122.z * 255.0) - Parameters.values[18].x))) * step(dot(roundEven(_122.xy * 255.0), vec2(1.0, 256.0)), _118 + (isnan(_296) ? 1.0 : (isnan(1.0) ? _296 : max(1.0, _296)))), clamp(Parameters.values[19].x, 0.0, 1.0)))), _110, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _371 = isnan(_317);
    bvec3 _372 = isnan(vec3(0.0));
    highp vec3 _373 = max(_317, vec3(0.0));
    highp vec3 _374 = vec3(_371.x ? vec3(0.0).x : _373.x, _371.y ? vec3(0.0).y : _373.y, _371.z ? vec3(0.0).z : _373.z);
    highp vec3 _324 = mix(_317 * 12.9200000762939453125, (pow(vec3(_372.x ? _317.x : _374.x, _372.y ? _317.y : _374.y, _372.z ? _317.z : _374.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _317));
    out_var_SV_Target = vec4(_324, 1.0);
}
