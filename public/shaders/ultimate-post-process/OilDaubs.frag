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
    highp vec3 _127 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _135 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _139 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _151 = isnan(2.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 2.0 : max(Parameters.values[1].x, 2.0));
    highp vec2 _155 = vec2(_151 * 1.7000000476837158203125, _151 * 0.64999997615814208984375);
    highp vec2 _156 = (in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / _155;
    highp vec2 _157 = floor(_156);
    highp vec2 _158 = _157 + vec2(-1.0);
    highp vec2 _164 = fract(sin(vec2(dot(_158, vec2(127.09999847412109375, 311.70001220703125)), dot(_158, vec2(269.5, 183.3000030517578125)))) * 43758.546875);
    highp vec2 _167 = (_157 + vec2(-0.75)) + (_164 * 0.5);
    highp float _171 = (_164.x - 0.5) * 0.89999997615814208984375;
    highp float _172 = cos(_171);
    highp float _173 = sin(_171);
    highp vec2 _178 = (_156 - _167) * mat2(vec2(_172, -_173), vec2(_173, _172));
    highp float _187 = dot(_178, _178) + (0.07999999821186065673828125 * sin((_178.y * 45.0) + (_164.y * 9.0)));
    bool _188 = _187 < 100000000.0;
    highp vec3 _201;
    if (_188)
    {
        _201 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp((_167 * _155) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    }
    else
    {
        _201 = _127;
    }
    highp float _202 = _188 ? _187 : 100000000.0;
    bvec2 _203 = bvec2(_188);
    highp vec2 _204 = vec2(_203.x ? _178.x : vec2(0.0).x, _203.y ? _178.y : vec2(0.0).y);
    highp vec2 _205 = _157 + vec2(0.0, -1.0);
    highp vec2 _211 = fract(sin(vec2(dot(_205, vec2(127.09999847412109375, 311.70001220703125)), dot(_205, vec2(269.5, 183.3000030517578125)))) * 43758.546875);
    highp vec2 _214 = (_157 + vec2(0.25, -0.75)) + (_211 * 0.5);
    highp float _218 = (_211.x - 0.5) * 0.89999997615814208984375;
    highp float _219 = cos(_218);
    highp float _220 = sin(_218);
    highp vec2 _225 = (_156 - _214) * mat2(vec2(_219, -_220), vec2(_220, _219));
    highp float _234 = dot(_225, _225) + (0.07999999821186065673828125 * sin((_225.y * 45.0) + (_211.y * 9.0)));
    bool _235 = _234 < _202;
    highp vec3 _248;
    if (_235)
    {
        _248 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp((_214 * _155) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    }
    else
    {
        _248 = _201;
    }
    highp float _249 = _235 ? _234 : _202;
    bvec2 _250 = bvec2(_235);
    highp vec2 _251 = vec2(_250.x ? _225.x : _204.x, _250.y ? _225.y : _204.y);
    highp vec2 _252 = _157 + vec2(1.0, -1.0);
    highp vec2 _258 = fract(sin(vec2(dot(_252, vec2(127.09999847412109375, 311.70001220703125)), dot(_252, vec2(269.5, 183.3000030517578125)))) * 43758.546875);
    highp vec2 _261 = (_157 + vec2(1.25, -0.75)) + (_258 * 0.5);
    highp float _265 = (_258.x - 0.5) * 0.89999997615814208984375;
    highp float _266 = cos(_265);
    highp float _267 = sin(_265);
    highp vec2 _272 = (_156 - _261) * mat2(vec2(_266, -_267), vec2(_267, _266));
    highp float _281 = dot(_272, _272) + (0.07999999821186065673828125 * sin((_272.y * 45.0) + (_258.y * 9.0)));
    bool _282 = _281 < _249;
    highp vec3 _295;
    if (_282)
    {
        _295 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp((_261 * _155) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    }
    else
    {
        _295 = _248;
    }
    highp float _296 = _282 ? _281 : _249;
    bvec2 _297 = bvec2(_282);
    highp vec2 _298 = vec2(_297.x ? _272.x : _251.x, _297.y ? _272.y : _251.y);
    highp vec2 _299 = _157 + vec2(-1.0, 0.0);
    highp vec2 _305 = fract(sin(vec2(dot(_299, vec2(127.09999847412109375, 311.70001220703125)), dot(_299, vec2(269.5, 183.3000030517578125)))) * 43758.546875);
    highp vec2 _308 = (_157 + vec2(-0.75, 0.25)) + (_305 * 0.5);
    highp float _312 = (_305.x - 0.5) * 0.89999997615814208984375;
    highp float _313 = cos(_312);
    highp float _314 = sin(_312);
    highp vec2 _319 = (_156 - _308) * mat2(vec2(_313, -_314), vec2(_314, _313));
    highp float _328 = dot(_319, _319) + (0.07999999821186065673828125 * sin((_319.y * 45.0) + (_305.y * 9.0)));
    bool _329 = _328 < _296;
    highp vec3 _342;
    if (_329)
    {
        _342 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp((_308 * _155) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    }
    else
    {
        _342 = _295;
    }
    highp float _343 = _329 ? _328 : _296;
    bvec2 _344 = bvec2(_329);
    highp vec2 _345 = vec2(_344.x ? _319.x : _298.x, _344.y ? _319.y : _298.y);
    highp vec2 _351 = fract(sin(vec2(dot(_157, vec2(127.09999847412109375, 311.70001220703125)), dot(_157, vec2(269.5, 183.3000030517578125)))) * 43758.546875);
    highp vec2 _354 = (_157 + vec2(0.25)) + (_351 * 0.5);
    highp float _358 = (_351.x - 0.5) * 0.89999997615814208984375;
    highp float _359 = cos(_358);
    highp float _360 = sin(_358);
    highp vec2 _365 = (_156 - _354) * mat2(vec2(_359, -_360), vec2(_360, _359));
    highp float _374 = dot(_365, _365) + (0.07999999821186065673828125 * sin((_365.y * 45.0) + (_351.y * 9.0)));
    bool _375 = _374 < _343;
    highp vec3 _388;
    if (_375)
    {
        _388 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp((_354 * _155) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    }
    else
    {
        _388 = _342;
    }
    highp float _389 = _375 ? _374 : _343;
    bvec2 _390 = bvec2(_375);
    highp vec2 _391 = vec2(_390.x ? _365.x : _345.x, _390.y ? _365.y : _345.y);
    highp vec2 _392 = _157 + vec2(1.0, 0.0);
    highp vec2 _398 = fract(sin(vec2(dot(_392, vec2(127.09999847412109375, 311.70001220703125)), dot(_392, vec2(269.5, 183.3000030517578125)))) * 43758.546875);
    highp vec2 _401 = (_157 + vec2(1.25, 0.25)) + (_398 * 0.5);
    highp float _405 = (_398.x - 0.5) * 0.89999997615814208984375;
    highp float _406 = cos(_405);
    highp float _407 = sin(_405);
    highp vec2 _412 = (_156 - _401) * mat2(vec2(_406, -_407), vec2(_407, _406));
    highp float _421 = dot(_412, _412) + (0.07999999821186065673828125 * sin((_412.y * 45.0) + (_398.y * 9.0)));
    bool _422 = _421 < _389;
    highp vec3 _435;
    if (_422)
    {
        _435 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp((_401 * _155) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    }
    else
    {
        _435 = _388;
    }
    highp float _436 = _422 ? _421 : _389;
    bvec2 _437 = bvec2(_422);
    highp vec2 _438 = vec2(_437.x ? _412.x : _391.x, _437.y ? _412.y : _391.y);
    highp vec2 _439 = _157 + vec2(-1.0, 1.0);
    highp vec2 _445 = fract(sin(vec2(dot(_439, vec2(127.09999847412109375, 311.70001220703125)), dot(_439, vec2(269.5, 183.3000030517578125)))) * 43758.546875);
    highp vec2 _448 = (_157 + vec2(-0.75, 1.25)) + (_445 * 0.5);
    highp float _452 = (_445.x - 0.5) * 0.89999997615814208984375;
    highp float _453 = cos(_452);
    highp float _454 = sin(_452);
    highp vec2 _459 = (_156 - _448) * mat2(vec2(_453, -_454), vec2(_454, _453));
    highp float _468 = dot(_459, _459) + (0.07999999821186065673828125 * sin((_459.y * 45.0) + (_445.y * 9.0)));
    bool _469 = _468 < _436;
    highp vec3 _482;
    if (_469)
    {
        _482 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp((_448 * _155) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    }
    else
    {
        _482 = _435;
    }
    highp float _483 = _469 ? _468 : _436;
    bvec2 _484 = bvec2(_469);
    highp vec2 _485 = vec2(_484.x ? _459.x : _438.x, _484.y ? _459.y : _438.y);
    highp vec2 _486 = _157 + vec2(0.0, 1.0);
    highp vec2 _492 = fract(sin(vec2(dot(_486, vec2(127.09999847412109375, 311.70001220703125)), dot(_486, vec2(269.5, 183.3000030517578125)))) * 43758.546875);
    highp vec2 _495 = (_157 + vec2(0.25, 1.25)) + (_492 * 0.5);
    highp float _499 = (_492.x - 0.5) * 0.89999997615814208984375;
    highp float _500 = cos(_499);
    highp float _501 = sin(_499);
    highp vec2 _506 = (_156 - _495) * mat2(vec2(_500, -_501), vec2(_501, _500));
    highp float _515 = dot(_506, _506) + (0.07999999821186065673828125 * sin((_506.y * 45.0) + (_492.y * 9.0)));
    bool _516 = _515 < _483;
    highp vec3 _529;
    if (_516)
    {
        _529 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp((_495 * _155) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    }
    else
    {
        _529 = _482;
    }
    bvec2 _531 = bvec2(_516);
    highp vec2 _532 = vec2(_531.x ? _506.x : _485.x, _531.y ? _506.y : _485.y);
    highp vec2 _533 = _157 + vec2(1.0);
    highp vec2 _539 = fract(sin(vec2(dot(_533, vec2(127.09999847412109375, 311.70001220703125)), dot(_533, vec2(269.5, 183.3000030517578125)))) * 43758.546875);
    highp vec2 _542 = (_157 + vec2(1.25)) + (_539 * 0.5);
    highp float _546 = (_539.x - 0.5) * 0.89999997615814208984375;
    highp float _547 = cos(_546);
    highp float _548 = sin(_546);
    highp vec2 _553 = (_156 - _542) * mat2(vec2(_547, -_548), vec2(_548, _547));
    bool _563 = (dot(_553, _553) + (0.07999999821186065673828125 * sin((_553.y * 45.0) + (_539.y * 9.0)))) < (_516 ? _515 : _483);
    highp vec3 _576;
    if (_563)
    {
        _576 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp((_542 * _155) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    }
    else
    {
        _576 = _529;
    }
    bvec2 _577 = bvec2(_563);
    highp vec2 _578 = vec2(_577.x ? _553.x : _532.x, _577.y ? _553.y : _532.y);
    highp float _585 = sin((_578.y * 80.0) + (_578.x * 5.0)) * 0.5;
    highp vec3 _595 = clamp((_576 * (1.0 + (Parameters.values[2].x * _585))) + vec3((0.0500000007450580596923828125 * Parameters.values[2].x) * pow(_585 + 0.5, 6.0)), vec3(0.0), vec3(1.0));
    highp vec3 _615 = (((mix(vec3(dot(_595, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))), _595, vec3(Parameters.values[3].x)) - vec3(0.5)) * Parameters.values[4].x) + vec3(0.5)) + vec3(Parameters.values[5].x);
    bvec3 _702 = isnan(_615);
    bvec3 _703 = isnan(vec3(0.0));
    highp vec3 _704 = max(_615, vec3(0.0));
    highp vec3 _705 = vec3(_702.x ? vec3(0.0).x : _704.x, _702.y ? vec3(0.0).y : _704.y, _702.z ? vec3(0.0).z : _704.z);
    highp vec3 _621 = pow(vec3(_703.x ? _615.x : _705.x, _703.y ? _615.y : _705.y, _703.z ? _615.z : _705.z), vec3(1.0 / (isnan(0.100000001490116119384765625) ? Parameters.values[6].x : (isnan(Parameters.values[6].x) ? 0.100000001490116119384765625 : max(Parameters.values[6].x, 0.100000001490116119384765625))))) * Parameters.values[15].xyz;
    highp vec3 _639 = mix(mix(_621, _127 * _621, vec3(Parameters.values[13].x)), mix((_127 * 2.0) * _621, vec3(1.0) - (((vec3(1.0) - _127) * 2.0) * (vec3(1.0) - _621)), step(vec3(0.5), _127)), vec3(Parameters.values[14].x));
    highp float _657 = _135 * 0.001000000047497451305389404296875;
    bvec3 _717 = isnan(_639);
    bvec3 _718 = isnan(vec3(0.0));
    highp vec3 _719 = max(_639, vec3(0.0));
    highp vec3 _720 = vec3(_717.x ? vec3(0.0).x : _719.x, _717.y ? vec3(0.0).y : _719.y, _717.z ? vec3(0.0).z : _719.z);
    highp vec3 _678 = mix(mix(_127, vec3(_718.x ? _639.x : _720.x, _718.y ? _639.y : _720.y, _718.z ? _639.z : _720.z), vec3((clamp(Parameters.values[7].x * Parameters.values[12].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[9].x, in_var_TEXCOORD0.x), clamp(Parameters.values[8].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_139.z * 255.0) - Parameters.values[10].x))) * step(dot(roundEven(_139.xy * 255.0), vec2(1.0, 256.0)), _135 + (isnan(_657) ? 1.0 : (isnan(1.0) ? _657 : max(1.0, _657)))), clamp(Parameters.values[11].x, 0.0, 1.0)))), _127, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _722 = isnan(_678);
    bvec3 _723 = isnan(vec3(0.0));
    highp vec3 _724 = max(_678, vec3(0.0));
    highp vec3 _725 = vec3(_722.x ? vec3(0.0).x : _724.x, _722.y ? vec3(0.0).y : _724.y, _722.z ? vec3(0.0).z : _724.z);
    out_var_SV_Target = vec4(mix(_678 * 12.9200000762939453125, (pow(vec3(_723.x ? _678.x : _725.x, _723.y ? _678.y : _725.y, _723.z ? _678.z : _725.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _678)), 1.0);
}
