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
uniform highp sampler2D SPIRV_Cross_CombinednormalTexturepointSampler;

in highp vec2 in_var_TEXCOORD0;
layout(location = 0) out highp vec4 out_var_SV_Target;

void main()
{
    highp vec3 _155 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _163 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _167 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _215 = Parameters.frame.x * Parameters.values[0].x;
    highp float _222 = _215 * Parameters.values[3].x;
    highp float _223 = in_var_TEXCOORD0.y * Parameters.values[2].x;
    highp float _257 = _163 - Parameters.values[4].x;
    highp vec3 _266 = mix(textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(clamp(in_var_TEXCOORD0 + ((vec2(sin(_223 + (_222 * 2.099999904632568359375)) + (0.449999988079071044921875 * sin((_223 * 2.7000000476837158203125) - _222)), sin(((in_var_TEXCOORD0.x * Parameters.values[2].x) * 0.699999988079071044921875) + (_222 * 1.2999999523162841796875))) * Parameters.values[1].x) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz, Parameters.values[21].xyz, vec3(clamp(1.0 - exp((-(isnan(0.0) ? _257 : (isnan(_257) ? 0.0 : max(_257, 0.0)))) / (isnan(1.0) ? Parameters.values[5].x : (isnan(Parameters.values[5].x) ? 1.0 : max(Parameters.values[5].x, 1.0)))), 0.0, 1.0)));
    highp vec3 _286 = (((mix(vec3(dot(_266, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))), _266, vec3(Parameters.values[6].x)) - vec3(0.5)) * Parameters.values[7].x) + vec3(0.5)) + vec3(Parameters.values[8].x);
    bvec3 _820 = isnan(_286);
    bvec3 _821 = isnan(vec3(0.0));
    highp vec3 _822 = max(_286, vec3(0.0));
    highp vec3 _823 = vec3(_820.x ? vec3(0.0).x : _822.x, _820.y ? vec3(0.0).y : _822.y, _820.z ? vec3(0.0).z : _822.z);
    highp vec2 _301 = (Parameters.cameraPosition.xyz + (((Parameters.cameraForward.xyz + ((Parameters.cameraRight.xyz * ((in_var_TEXCOORD0.x * 2.0) - 1.0)) * Parameters.cameraPosition.w)) + (((Parameters.cameraUp.xyz * (1.0 - (in_var_TEXCOORD0.y * 2.0))) * Parameters.cameraPosition.w) * vec3(0.5625))) * _163)).xy * (isnan(9.9999997473787516355514526367188e-05) ? Parameters.values[10].x : (isnan(Parameters.values[10].x) ? 9.9999997473787516355514526367188e-05 : max(Parameters.values[10].x, 9.9999997473787516355514526367188e-05)));
    highp vec2 _302 = _301 * 0.699999988079071044921875;
    highp float _303 = _215 * Parameters.values[12].x;
    highp vec2 _306 = _302 + vec2(_303 * 0.4000000059604644775390625);
    highp vec2 _307 = floor(_306);
    highp vec2 _308 = fract(_306);
    highp vec2 _312 = (_308 * _308) * (vec2(3.0) - (_308 * 2.0));
    highp float _322 = _312.x;
    highp vec2 _339 = (_306 * 2.0299999713897705078125) + vec2(19.0);
    highp vec2 _340 = floor(_339);
    highp vec2 _341 = fract(_339);
    highp vec2 _345 = (_341 * _341) * (vec2(3.0) - (_341 * 2.0));
    highp float _355 = _345.x;
    highp vec2 _373 = (_306 * 4.110000133514404296875) + vec2(41.0);
    highp vec2 _374 = floor(_373);
    highp vec2 _375 = fract(_373);
    highp vec2 _379 = (_375 * _375) * (vec2(3.0) - (_375 * 2.0));
    highp float _389 = _379.x;
    highp vec2 _409 = (_302 + vec2(31.0)) - vec2(_303 * 0.300000011920928955078125);
    highp vec2 _410 = floor(_409);
    highp vec2 _411 = fract(_409);
    highp vec2 _415 = (_411 * _411) * (vec2(3.0) - (_411 * 2.0));
    highp float _425 = _415.x;
    highp vec2 _442 = (_409 * 2.0299999713897705078125) + vec2(19.0);
    highp vec2 _443 = floor(_442);
    highp vec2 _444 = fract(_442);
    highp vec2 _448 = (_444 * _444) * (vec2(3.0) - (_444 * 2.0));
    highp float _458 = _448.x;
    highp vec2 _476 = (_409 * 4.110000133514404296875) + vec2(41.0);
    highp vec2 _477 = floor(_476);
    highp vec2 _478 = fract(_476);
    highp vec2 _482 = (_478 * _478) * (vec2(3.0) - (_478 * 2.0));
    highp float _492 = _482.x;
    highp vec2 _509 = vec2(((mix(mix(fract(sin(dot(_307, vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_307 + vec2(1.0, 0.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _322), mix(fract(sin(dot(_307 + vec2(0.0, 1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_307 + vec2(1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _322), _312.y) * 0.569999992847442626953125) + (mix(mix(fract(sin(dot(_340, vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_340 + vec2(1.0, 0.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _355), mix(fract(sin(dot(_340 + vec2(0.0, 1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_340 + vec2(1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _355), _345.y) * 0.2800000011920928955078125)) + (mix(mix(fract(sin(dot(_374, vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_374 + vec2(1.0, 0.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _389), mix(fract(sin(dot(_374 + vec2(0.0, 1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_374 + vec2(1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _389), _379.y) * 0.1500000059604644775390625), ((mix(mix(fract(sin(dot(_410, vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_410 + vec2(1.0, 0.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _425), mix(fract(sin(dot(_410 + vec2(0.0, 1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_410 + vec2(1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _425), _415.y) * 0.569999992847442626953125) + (mix(mix(fract(sin(dot(_443, vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_443 + vec2(1.0, 0.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _458), mix(fract(sin(dot(_443 + vec2(0.0, 1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_443 + vec2(1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _458), _448.y) * 0.2800000011920928955078125)) + (mix(mix(fract(sin(dot(_477, vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_477 + vec2(1.0, 0.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _492), mix(fract(sin(dot(_477 + vec2(0.0, 1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), fract(sin(dot(_477 + vec2(1.0), vec2(127.09999847412109375, 311.70001220703125))) * 43758.546875), _492), _482.y) * 0.1500000059604644775390625));
    highp vec2 _511 = _301 + (_509 * 0.800000011920928955078125);
    highp vec2 _512 = floor(_511);
    highp vec2 _513 = _512 + vec2(-1.0);
    highp vec2 _522 = vec2(_303);
    highp float _528 = length(_511 - ((_512 + vec2(-0.5)) + (sin((fract(sin(vec2(dot(_513, vec2(127.09999847412109375, 311.70001220703125)), dot(_513, vec2(269.5, 183.3000030517578125)))) * 43758.546875) * 6.28318500518798828125) + _522) * 0.2800000011920928955078125)));
    bool _529 = _528 < 100.0;
    highp float _534;
    if (_529)
    {
        _534 = 100.0;
    }
    else
    {
        _534 = isnan(_528) ? 100.0 : (isnan(100.0) ? _528 : min(100.0, _528));
    }
    highp float _535 = _529 ? _528 : 100.0;
    highp vec2 _536 = _512 + vec2(0.0, -1.0);
    highp float _550 = length(_511 - ((_512 + vec2(0.5, -0.5)) + (sin((fract(sin(vec2(dot(_536, vec2(127.09999847412109375, 311.70001220703125)), dot(_536, vec2(269.5, 183.3000030517578125)))) * 43758.546875) * 6.28318500518798828125) + _522) * 0.2800000011920928955078125)));
    bool _551 = _550 < _535;
    highp float _556;
    if (_551)
    {
        _556 = _535;
    }
    else
    {
        _556 = isnan(_550) ? _534 : (isnan(_534) ? _550 : min(_534, _550));
    }
    highp float _557 = _551 ? _550 : _535;
    highp vec2 _558 = _512 + vec2(1.0, -1.0);
    highp float _572 = length(_511 - ((_512 + vec2(1.5, -0.5)) + (sin((fract(sin(vec2(dot(_558, vec2(127.09999847412109375, 311.70001220703125)), dot(_558, vec2(269.5, 183.3000030517578125)))) * 43758.546875) * 6.28318500518798828125) + _522) * 0.2800000011920928955078125)));
    bool _573 = _572 < _557;
    highp float _578;
    if (_573)
    {
        _578 = _557;
    }
    else
    {
        _578 = isnan(_572) ? _556 : (isnan(_556) ? _572 : min(_556, _572));
    }
    highp float _579 = _573 ? _572 : _557;
    highp vec2 _580 = _512 + vec2(-1.0, 0.0);
    highp float _594 = length(_511 - ((_512 + vec2(-0.5, 0.5)) + (sin((fract(sin(vec2(dot(_580, vec2(127.09999847412109375, 311.70001220703125)), dot(_580, vec2(269.5, 183.3000030517578125)))) * 43758.546875) * 6.28318500518798828125) + _522) * 0.2800000011920928955078125)));
    bool _595 = _594 < _579;
    highp float _600;
    if (_595)
    {
        _600 = _579;
    }
    else
    {
        _600 = isnan(_594) ? _578 : (isnan(_578) ? _594 : min(_578, _594));
    }
    highp float _601 = _595 ? _594 : _579;
    highp float _615 = length(_511 - ((_512 + vec2(0.5)) + (sin((fract(sin(vec2(dot(_512, vec2(127.09999847412109375, 311.70001220703125)), dot(_512, vec2(269.5, 183.3000030517578125)))) * 43758.546875) * 6.28318500518798828125) + _522) * 0.2800000011920928955078125)));
    bool _616 = _615 < _601;
    highp float _621;
    if (_616)
    {
        _621 = _601;
    }
    else
    {
        _621 = isnan(_615) ? _600 : (isnan(_600) ? _615 : min(_600, _615));
    }
    highp float _622 = _616 ? _615 : _601;
    highp vec2 _623 = _512 + vec2(1.0, 0.0);
    highp float _637 = length(_511 - ((_512 + vec2(1.5, 0.5)) + (sin((fract(sin(vec2(dot(_623, vec2(127.09999847412109375, 311.70001220703125)), dot(_623, vec2(269.5, 183.3000030517578125)))) * 43758.546875) * 6.28318500518798828125) + _522) * 0.2800000011920928955078125)));
    bool _638 = _637 < _622;
    highp float _643;
    if (_638)
    {
        _643 = _622;
    }
    else
    {
        _643 = isnan(_637) ? _621 : (isnan(_621) ? _637 : min(_621, _637));
    }
    highp float _644 = _638 ? _637 : _622;
    highp vec2 _645 = _512 + vec2(-1.0, 1.0);
    highp float _659 = length(_511 - ((_512 + vec2(-0.5, 1.5)) + (sin((fract(sin(vec2(dot(_645, vec2(127.09999847412109375, 311.70001220703125)), dot(_645, vec2(269.5, 183.3000030517578125)))) * 43758.546875) * 6.28318500518798828125) + _522) * 0.2800000011920928955078125)));
    bool _660 = _659 < _644;
    highp float _665;
    if (_660)
    {
        _665 = _644;
    }
    else
    {
        _665 = isnan(_659) ? _643 : (isnan(_643) ? _659 : min(_643, _659));
    }
    highp float _666 = _660 ? _659 : _644;
    highp vec2 _667 = _512 + vec2(0.0, 1.0);
    highp float _681 = length(_511 - ((_512 + vec2(0.5, 1.5)) + (sin((fract(sin(vec2(dot(_667, vec2(127.09999847412109375, 311.70001220703125)), dot(_667, vec2(269.5, 183.3000030517578125)))) * 43758.546875) * 6.28318500518798828125) + _522) * 0.2800000011920928955078125)));
    bool _682 = _681 < _666;
    highp float _687;
    if (_682)
    {
        _687 = _666;
    }
    else
    {
        _687 = isnan(_681) ? _665 : (isnan(_665) ? _681 : min(_665, _681));
    }
    highp float _688 = _682 ? _681 : _666;
    highp vec2 _689 = _512 + vec2(1.0);
    highp float _703 = length(_511 - ((_512 + vec2(1.5)) + (sin((fract(sin(vec2(dot(_689, vec2(127.09999847412109375, 311.70001220703125)), dot(_689, vec2(269.5, 183.3000030517578125)))) * 43758.546875) * 6.28318500518798828125) + _522) * 0.2800000011920928955078125)));
    bool _704 = _703 < _688;
    highp float _709;
    if (_704)
    {
        _709 = _688;
    }
    else
    {
        _709 = isnan(_703) ? _687 : (isnan(_687) ? _703 : min(_687, _703));
    }
    highp float _711 = _709 - (_704 ? _703 : _688);
    highp float _712 = fwidth(_711);
    highp float _727 = ((1.0 - smoothstep(0.017999999225139617919921875, 0.039999999105930328369140625 + (isnan(0.006000000052154064178466796875) ? _712 : (isnan(_712) ? 0.006000000052154064178466796875 : max(_712, 0.006000000052154064178466796875))), _711)) * ((smoothstep(0.1500000059604644775390625, 0.85000002384185791015625, ((textureLod(SPIRV_Cross_CombinednormalTexturepointSampler, in_var_TEXCOORD0, 0.0).xyz * 2.0) - vec3(1.0)).z) * exp(_163 * (-0.00022222222469281405210494995117188))) * (1.0 - step(15000.0, _163)))) * clamp(Parameters.values[11].x, 0.0, 1.0);
    highp vec3 _733 = ((pow(vec3(_821.x ? _286.x : _823.x, _821.y ? _286.y : _823.y, _821.z ? _286.z : _823.z), vec3(1.0 / (isnan(0.100000001490116119384765625) ? Parameters.values[9].x : (isnan(Parameters.values[9].x) ? 0.100000001490116119384765625 : max(Parameters.values[9].x, 0.100000001490116119384765625))))) * Parameters.values[22].xyz) * (1.0 + (_727 * 0.60000002384185791015625))) + ((vec3(0.119999997317790985107421875, 0.1599999964237213134765625, 0.180000007152557373046875) * _727) * 0.1599999964237213134765625);
    highp vec3 _751 = mix(mix(_733, _155 * _733, vec3(Parameters.values[19].x)), mix((_155 * 2.0) * _733, vec3(1.0) - (((vec3(1.0) - _155) * 2.0) * (vec3(1.0) - _733)), step(vec3(0.5), _155)), vec3(Parameters.values[20].x));
    highp float _768 = _163 * 0.001000000047497451305389404296875;
    bvec3 _890 = isnan(_751);
    bvec3 _891 = isnan(vec3(0.0));
    highp vec3 _892 = max(_751, vec3(0.0));
    highp vec3 _893 = vec3(_890.x ? vec3(0.0).x : _892.x, _890.y ? vec3(0.0).y : _892.y, _890.z ? vec3(0.0).z : _892.z);
    highp vec3 _789 = mix(mix(_155, vec3(_891.x ? _751.x : _893.x, _891.y ? _751.y : _893.y, _891.z ? _751.z : _893.z), vec3((clamp(Parameters.values[13].x * Parameters.values[18].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[15].x, in_var_TEXCOORD0.x), clamp(Parameters.values[14].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_167.z * 255.0) - Parameters.values[16].x))) * step(dot(roundEven(_167.xy * 255.0), vec2(1.0, 256.0)), _163 + (isnan(_768) ? 1.0 : (isnan(1.0) ? _768 : max(1.0, _768)))), clamp(Parameters.values[17].x, 0.0, 1.0)))), _155, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _895 = isnan(_789);
    bvec3 _896 = isnan(vec3(0.0));
    highp vec3 _897 = max(_789, vec3(0.0));
    highp vec3 _898 = vec3(_895.x ? vec3(0.0).x : _897.x, _895.y ? vec3(0.0).y : _897.y, _895.z ? vec3(0.0).z : _897.z);
    highp vec3 _796 = mix(_789 * 12.9200000762939453125, (pow(vec3(_896.x ? _789.x : _898.x, _896.y ? _789.y : _898.y, _896.z ? _789.z : _898.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _789));
    out_var_SV_Target = vec4(_796, 1.0);
}
