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
    highp vec3 _136 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _144 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _148 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _168 = clamp(dot(_136, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875)), 0.0, 1.0);
    highp float _169 = clamp(Parameters.values[1].x, 0.0500000007450580596923828125, 0.949999988079071044921875);
    highp vec3 _182;
    if (_168 < _169)
    {
        _182 = mix(Parameters.values[19].xyz, Parameters.values[20].xyz, vec3(_168 / _169));
    }
    else
    {
        _182 = mix(Parameters.values[20].xyz, Parameters.values[21].xyz, vec3((_168 - _169) / (1.0 - _169)));
    }
    highp float _187 = Parameters.frame.x * Parameters.values[0].x;
    highp float _195 = floor(_187 * 18.0);
    highp float _198 = floor(_195 * 0.0588235296308994293212890625) * 19.1000003814697265625;
    highp float _209 = in_var_TEXCOORD0.y * 40.0;
    highp vec2 _210 = vec2(_209, _195);
    highp vec2 _211 = floor(_210);
    highp vec2 _212 = fract(_210);
    highp vec2 _216 = (_212 * _212) * (vec2(3.0) - (_212 * 2.0));
    highp float _226 = _216.x;
    highp float _242 = (1.0 - smoothstep(0.300000011920928955078125, 1.2999999523162841796875, abs(in_var_TEXCOORD0.x - fract(sin(_198) * 43758.5390625)) * 1280.0)) * step(0.449999988079071044921875, mix(mix(fract(sin(dot(_211, vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_211 + vec2(1.0, 0.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _226), mix(fract(sin(dot(_211 + vec2(0.0, 1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_211 + vec2(1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _226), _216.y));
    highp float _243 = isnan(_242) ? 0.0 : (isnan(0.0) ? _242 : max(0.0, _242));
    highp vec2 _254 = vec2(_209, _195 + 19.0);
    highp vec2 _255 = floor(_254);
    highp vec2 _256 = fract(_254);
    highp vec2 _260 = (_256 * _256) * (vec2(3.0) - (_256 * 2.0));
    highp float _270 = _260.x;
    highp float _286 = (1.0 - smoothstep(0.300000011920928955078125, 1.2999999523162841796875, abs(in_var_TEXCOORD0.x - fract(sin(83.6999969482421875 + _198) * 43758.5390625)) * 1280.0)) * step(0.449999988079071044921875, mix(mix(fract(sin(dot(_255, vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_255 + vec2(1.0, 0.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _270), mix(fract(sin(dot(_255 + vec2(0.0, 1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_255 + vec2(1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _270), _260.y));
    highp float _287 = isnan(_286) ? _243 : (isnan(_243) ? _286 : max(_243, _286));
    highp vec2 _298 = vec2(_209, _195 + 38.0);
    highp vec2 _299 = floor(_298);
    highp vec2 _300 = fract(_298);
    highp vec2 _304 = (_300 * _300) * (vec2(3.0) - (_300 * 2.0));
    highp float _314 = _304.x;
    highp float _330 = (1.0 - smoothstep(0.300000011920928955078125, 1.2999999523162841796875, abs(in_var_TEXCOORD0.x - fract(sin(167.399993896484375 + _198) * 43758.5390625)) * 1280.0)) * step(0.449999988079071044921875, mix(mix(fract(sin(dot(_299, vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_299 + vec2(1.0, 0.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _314), mix(fract(sin(dot(_299 + vec2(0.0, 1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_299 + vec2(1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _314), _304.y));
    highp float _331 = isnan(_330) ? _287 : (isnan(_287) ? _330 : max(_287, _330));
    highp vec2 _342 = vec2(_209, _195 + 57.0);
    highp vec2 _343 = floor(_342);
    highp vec2 _344 = fract(_342);
    highp vec2 _348 = (_344 * _344) * (vec2(3.0) - (_344 * 2.0));
    highp float _358 = _348.x;
    highp float _374 = (1.0 - smoothstep(0.300000011920928955078125, 1.2999999523162841796875, abs(in_var_TEXCOORD0.x - fract(sin(251.0999908447265625 + _198) * 43758.5390625)) * 1280.0)) * step(0.449999988079071044921875, mix(mix(fract(sin(dot(_343, vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_343 + vec2(1.0, 0.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _358), mix(fract(sin(dot(_343 + vec2(0.0, 1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_343 + vec2(1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _358), _348.y));
    highp float _375 = isnan(_374) ? _331 : (isnan(_331) ? _374 : max(_331, _374));
    highp vec2 _386 = vec2(_209, _195 + 76.0);
    highp vec2 _387 = floor(_386);
    highp vec2 _388 = fract(_386);
    highp vec2 _392 = (_388 * _388) * (vec2(3.0) - (_388 * 2.0));
    highp float _402 = _392.x;
    highp float _418 = (1.0 - smoothstep(0.300000011920928955078125, 1.2999999523162841796875, abs(in_var_TEXCOORD0.x - fract(sin(334.79998779296875 + _198) * 43758.5390625)) * 1280.0)) * step(0.449999988079071044921875, mix(mix(fract(sin(dot(_387, vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_387 + vec2(1.0, 0.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _402), mix(fract(sin(dot(_387 + vec2(0.0, 1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_387 + vec2(1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _402), _392.y));
    highp vec2 _420 = in_var_TEXCOORD0 * vec2(90.0, 60.0);
    highp vec2 _461 = abs(in_var_TEXCOORD0 - vec2(0.5)) - vec2(0.5 - Parameters.values[5].x);
    highp vec2 _463 = _461 + vec2(Parameters.values[6].x);
    bvec2 _626 = isnan(_463);
    bvec2 _627 = isnan(vec2(0.0));
    highp vec2 _628 = max(_463, vec2(0.0));
    highp vec2 _629 = vec2(_626.x ? vec2(0.0).x : _628.x, _626.y ? vec2(0.0).y : _628.y);
    highp float _467 = _461.x + Parameters.values[6].x;
    highp float _469 = _461.y + Parameters.values[6].x;
    highp float _470 = isnan(_469) ? _467 : (isnan(_467) ? _469 : max(_467, _469));
    highp float _474 = smoothstep(-0.00200000009499490261077880859375, 0.00200000009499490261077880859375, (length(vec2(_627.x ? _463.x : _629.x, _627.y ? _463.y : _629.y)) + (isnan(0.0) ? _470 : (isnan(_470) ? 0.0 : min(_470, 0.0)))) - Parameters.values[6].x);
    highp vec3 _496 = (clamp(((_182 * (1.0 + ((fract(sin(dot(vec2(_195, 7.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875) - 0.5) * Parameters.values[4].x))) * (1.0 - (((1.0 - smoothstep(0.070000000298023223876953125, 0.2199999988079071044921875, length(fract(_420) - vec2(0.5)))) * step(0.97399997711181640625, fract(sin(dot(floor(_420) + vec2(_195), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875))) * Parameters.values[3].x))) - vec3((isnan(_418) ? _375 : (isnan(_375) ? _418 : max(_375, _418))) * Parameters.values[2].x), vec3(0.0), vec3(1.0)) * (1.0 - _474)) + vec3(((((1.0 - smoothstep(0.010999999940395355224609375, 0.01400000043213367462158203125, abs(abs(in_var_TEXCOORD0.x - 0.5) - (0.5 - (Parameters.values[5].x * 0.5))))) * (1.0 - smoothstep(0.2199999988079071044921875, 0.2899999916553497314453125, abs(fract(in_var_TEXCOORD0.y * 14.0) - 0.5)))) * Parameters.values[7].x) * 0.60000002384185791015625) * _474);
    highp vec3 _525 = _496 + vec3(((fract(sin(dot(floor((in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(isnan(0.25) ? Parameters.values[9].x : (isnan(Parameters.values[9].x) ? 0.25 : max(Parameters.values[9].x, 0.25)))) + vec2(floor(_187 * 24.0) * Parameters.values[10].x), vec2(12.98980045318603515625, 78.233001708984375))) * 43758.546875) - 0.5) * Parameters.values[8].x) * (0.4000000059604644775390625 + (0.60000002384185791015625 * (1.0 - dot(_496, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))))));
    bvec3 _646 = isnan(_525);
    bvec3 _647 = isnan(vec3(0.0));
    highp vec3 _648 = max(_525, vec3(0.0));
    highp vec3 _649 = vec3(_646.x ? vec3(0.0).x : _648.x, _646.y ? vec3(0.0).y : _648.y, _646.z ? vec3(0.0).z : _648.z);
    highp vec3 _526 = vec3(_647.x ? _525.x : _649.x, _647.y ? _525.y : _649.y, _647.z ? _525.z : _649.z);
    highp vec3 _544 = mix(mix(_526, _136 * _526, vec3(Parameters.values[17].x)), mix((_136 * 2.0) * _526, vec3(1.0) - (((vec3(1.0) - _136) * 2.0) * (vec3(1.0) - _526)), step(vec3(0.5), _136)), vec3(Parameters.values[18].x));
    highp float _561 = _144 * 0.001000000047497451305389404296875;
    bvec3 _656 = isnan(_544);
    bvec3 _657 = isnan(vec3(0.0));
    highp vec3 _658 = max(_544, vec3(0.0));
    highp vec3 _659 = vec3(_656.x ? vec3(0.0).x : _658.x, _656.y ? vec3(0.0).y : _658.y, _656.z ? vec3(0.0).z : _658.z);
    highp vec3 _582 = mix(mix(_136, vec3(_657.x ? _544.x : _659.x, _657.y ? _544.y : _659.y, _657.z ? _544.z : _659.z), vec3((clamp(Parameters.values[11].x * Parameters.values[16].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[13].x, in_var_TEXCOORD0.x), clamp(Parameters.values[12].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_148.z * 255.0) - Parameters.values[14].x))) * step(dot(roundEven(_148.xy * 255.0), vec2(1.0, 256.0)), _144 + (isnan(_561) ? 1.0 : (isnan(1.0) ? _561 : max(1.0, _561)))), clamp(Parameters.values[15].x, 0.0, 1.0)))), _136, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _661 = isnan(_582);
    bvec3 _662 = isnan(vec3(0.0));
    highp vec3 _663 = max(_582, vec3(0.0));
    highp vec3 _664 = vec3(_661.x ? vec3(0.0).x : _663.x, _661.y ? vec3(0.0).y : _663.y, _661.z ? vec3(0.0).z : _663.z);
    out_var_SV_Target = vec4(mix(_582 * 12.9200000762939453125, (pow(vec3(_662.x ? _582.x : _664.x, _662.y ? _582.y : _664.y, _662.z ? _582.z : _664.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _582)), 1.0);
}
