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
    highp vec3 _120 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _128 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _132 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _149 = isnan(4.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 4.0 : max(Parameters.values[1].x, 4.0));
    highp vec2 _151 = (in_var_TEXCOORD0 * vec2(1280.0, 720.0)) / vec2(_149);
    highp vec2 _152 = floor(_151);
    highp vec2 _153 = _152 + vec2(-1.0);
    highp vec2 _162 = (_152 + vec2(-0.85000002384185791015625)) + (fract(sin(vec2(dot(_153, vec2(127.09999847412109375, 311.70001220703125)), dot(_153, vec2(269.5, 183.3000030517578125)))) * 43758.546875) * 0.699999988079071044921875);
    highp vec2 _163 = _151 - _162;
    highp float _164 = dot(_163, _163);
    bool _165 = _164 < 100000000.0;
    highp float _170;
    if (_165)
    {
        _170 = 100000000.0;
    }
    else
    {
        _170 = isnan(_164) ? 100000000.0 : (isnan(100000000.0) ? _164 : min(100000000.0, _164));
    }
    highp float _171 = _165 ? _164 : 100000000.0;
    bvec2 _172 = bvec2(_165);
    highp vec2 _173 = vec2(_172.x ? _162.x : vec2(0.0).x, _172.y ? _162.y : vec2(0.0).y);
    highp vec2 _174 = _152 + vec2(0.0, -1.0);
    highp vec2 _183 = (_152 + vec2(0.1500000059604644775390625, -0.85000002384185791015625)) + (fract(sin(vec2(dot(_174, vec2(127.09999847412109375, 311.70001220703125)), dot(_174, vec2(269.5, 183.3000030517578125)))) * 43758.546875) * 0.699999988079071044921875);
    highp vec2 _184 = _151 - _183;
    highp float _185 = dot(_184, _184);
    bool _186 = _185 < _171;
    highp float _191;
    if (_186)
    {
        _191 = _171;
    }
    else
    {
        _191 = isnan(_185) ? _170 : (isnan(_170) ? _185 : min(_170, _185));
    }
    highp float _192 = _186 ? _185 : _171;
    bvec2 _193 = bvec2(_186);
    highp vec2 _194 = vec2(_193.x ? _183.x : _173.x, _193.y ? _183.y : _173.y);
    highp vec2 _195 = _152 + vec2(1.0, -1.0);
    highp vec2 _204 = (_152 + vec2(1.14999997615814208984375, -0.85000002384185791015625)) + (fract(sin(vec2(dot(_195, vec2(127.09999847412109375, 311.70001220703125)), dot(_195, vec2(269.5, 183.3000030517578125)))) * 43758.546875) * 0.699999988079071044921875);
    highp vec2 _205 = _151 - _204;
    highp float _206 = dot(_205, _205);
    bool _207 = _206 < _192;
    highp float _212;
    if (_207)
    {
        _212 = _192;
    }
    else
    {
        _212 = isnan(_206) ? _191 : (isnan(_191) ? _206 : min(_191, _206));
    }
    highp float _213 = _207 ? _206 : _192;
    bvec2 _214 = bvec2(_207);
    highp vec2 _215 = vec2(_214.x ? _204.x : _194.x, _214.y ? _204.y : _194.y);
    highp vec2 _216 = _152 + vec2(-1.0, 0.0);
    highp vec2 _225 = (_152 + vec2(-0.85000002384185791015625, 0.1500000059604644775390625)) + (fract(sin(vec2(dot(_216, vec2(127.09999847412109375, 311.70001220703125)), dot(_216, vec2(269.5, 183.3000030517578125)))) * 43758.546875) * 0.699999988079071044921875);
    highp vec2 _226 = _151 - _225;
    highp float _227 = dot(_226, _226);
    bool _228 = _227 < _213;
    highp float _233;
    if (_228)
    {
        _233 = _213;
    }
    else
    {
        _233 = isnan(_227) ? _212 : (isnan(_212) ? _227 : min(_212, _227));
    }
    highp float _234 = _228 ? _227 : _213;
    bvec2 _235 = bvec2(_228);
    highp vec2 _236 = vec2(_235.x ? _225.x : _215.x, _235.y ? _225.y : _215.y);
    highp vec2 _245 = (_152 + vec2(0.1500000059604644775390625)) + (fract(sin(vec2(dot(_152, vec2(127.09999847412109375, 311.70001220703125)), dot(_152, vec2(269.5, 183.3000030517578125)))) * 43758.546875) * 0.699999988079071044921875);
    highp vec2 _246 = _151 - _245;
    highp float _247 = dot(_246, _246);
    bool _248 = _247 < _234;
    highp float _253;
    if (_248)
    {
        _253 = _234;
    }
    else
    {
        _253 = isnan(_247) ? _233 : (isnan(_233) ? _247 : min(_233, _247));
    }
    highp float _254 = _248 ? _247 : _234;
    bvec2 _255 = bvec2(_248);
    highp vec2 _256 = vec2(_255.x ? _245.x : _236.x, _255.y ? _245.y : _236.y);
    highp vec2 _257 = _152 + vec2(1.0, 0.0);
    highp vec2 _266 = (_152 + vec2(1.14999997615814208984375, 0.1500000059604644775390625)) + (fract(sin(vec2(dot(_257, vec2(127.09999847412109375, 311.70001220703125)), dot(_257, vec2(269.5, 183.3000030517578125)))) * 43758.546875) * 0.699999988079071044921875);
    highp vec2 _267 = _151 - _266;
    highp float _268 = dot(_267, _267);
    bool _269 = _268 < _254;
    highp float _274;
    if (_269)
    {
        _274 = _254;
    }
    else
    {
        _274 = isnan(_268) ? _253 : (isnan(_253) ? _268 : min(_253, _268));
    }
    highp float _275 = _269 ? _268 : _254;
    bvec2 _276 = bvec2(_269);
    highp vec2 _277 = vec2(_276.x ? _266.x : _256.x, _276.y ? _266.y : _256.y);
    highp vec2 _278 = _152 + vec2(-1.0, 1.0);
    highp vec2 _287 = (_152 + vec2(-0.85000002384185791015625, 1.14999997615814208984375)) + (fract(sin(vec2(dot(_278, vec2(127.09999847412109375, 311.70001220703125)), dot(_278, vec2(269.5, 183.3000030517578125)))) * 43758.546875) * 0.699999988079071044921875);
    highp vec2 _288 = _151 - _287;
    highp float _289 = dot(_288, _288);
    bool _290 = _289 < _275;
    highp float _295;
    if (_290)
    {
        _295 = _275;
    }
    else
    {
        _295 = isnan(_289) ? _274 : (isnan(_274) ? _289 : min(_274, _289));
    }
    highp float _296 = _290 ? _289 : _275;
    bvec2 _297 = bvec2(_290);
    highp vec2 _298 = vec2(_297.x ? _287.x : _277.x, _297.y ? _287.y : _277.y);
    highp vec2 _299 = _152 + vec2(0.0, 1.0);
    highp vec2 _308 = (_152 + vec2(0.1500000059604644775390625, 1.14999997615814208984375)) + (fract(sin(vec2(dot(_299, vec2(127.09999847412109375, 311.70001220703125)), dot(_299, vec2(269.5, 183.3000030517578125)))) * 43758.546875) * 0.699999988079071044921875);
    highp vec2 _309 = _151 - _308;
    highp float _310 = dot(_309, _309);
    bool _311 = _310 < _296;
    highp float _316;
    if (_311)
    {
        _316 = _296;
    }
    else
    {
        _316 = isnan(_310) ? _295 : (isnan(_295) ? _310 : min(_295, _310));
    }
    highp float _317 = _311 ? _310 : _296;
    bvec2 _318 = bvec2(_311);
    highp vec2 _319 = vec2(_318.x ? _308.x : _298.x, _318.y ? _308.y : _298.y);
    highp vec2 _320 = _152 + vec2(1.0);
    highp vec2 _329 = (_152 + vec2(1.14999997615814208984375)) + (fract(sin(vec2(dot(_320, vec2(127.09999847412109375, 311.70001220703125)), dot(_320, vec2(269.5, 183.3000030517578125)))) * 43758.546875) * 0.699999988079071044921875);
    highp vec2 _330 = _151 - _329;
    highp float _331 = dot(_330, _330);
    bool _332 = _331 < _317;
    highp float _337;
    if (_332)
    {
        _337 = _317;
    }
    else
    {
        _337 = isnan(_331) ? _316 : (isnan(_316) ? _331 : min(_316, _331));
    }
    bvec2 _339 = bvec2(_332);
    highp vec2 _340 = vec2(_339.x ? _329.x : _319.x, _339.y ? _329.y : _319.y);
    highp vec3 _350 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp((_340 * _149) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    highp vec3 _354 = mix(vec3(dot(_350, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))), _350, vec3(Parameters.values[3].x));
    highp float _358 = (sqrt(_337) - sqrt(_332 ? _331 : _317)) * Parameters.values[1].x;
    bvec3 _502 = isnan(_354);
    bvec3 _503 = isnan(vec3(0.039999999105930328369140625));
    highp vec3 _504 = max(_354, vec3(0.039999999105930328369140625));
    highp vec3 _505 = vec3(_502.x ? vec3(0.039999999105930328369140625).x : _504.x, _502.y ? vec3(0.039999999105930328369140625).y : _504.y, _502.z ? vec3(0.039999999105930328369140625).z : _504.z);
    highp vec3 _376 = mix(vec3(0.008000000379979610443115234375, 0.01200000010430812835693359375, 0.014999999664723873138427734375), clamp((vec3(_503.x ? _354.x : _505.x, _503.y ? _354.y : _505.y, _503.z ? _354.z : _505.z) * (1.0 + (Parameters.values[4].x * (_151.x - _340.x)))) + vec3(exp(_358 * (-0.60000002384185791015625)) * Parameters.values[4].x), vec3(0.0), vec3(1.0)), vec3(smoothstep(Parameters.values[2].x - 0.5, Parameters.values[2].x + 0.5, _358)));
    highp vec3 _394 = mix(mix(_376, _120 * _376, vec3(Parameters.values[11].x)), mix((_120 * 2.0) * _376, vec3(1.0) - (((vec3(1.0) - _120) * 2.0) * (vec3(1.0) - _376)), step(vec3(0.5), _120)), vec3(Parameters.values[12].x));
    highp float _412 = _128 * 0.001000000047497451305389404296875;
    bvec3 _512 = isnan(_394);
    bvec3 _513 = isnan(vec3(0.0));
    highp vec3 _514 = max(_394, vec3(0.0));
    highp vec3 _515 = vec3(_512.x ? vec3(0.0).x : _514.x, _512.y ? vec3(0.0).y : _514.y, _512.z ? vec3(0.0).z : _514.z);
    highp vec3 _433 = mix(mix(_120, vec3(_513.x ? _394.x : _515.x, _513.y ? _394.y : _515.y, _513.z ? _394.z : _515.z), vec3((clamp(Parameters.values[5].x * Parameters.values[10].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[7].x, in_var_TEXCOORD0.x), clamp(Parameters.values[6].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_132.z * 255.0) - Parameters.values[8].x))) * step(dot(roundEven(_132.xy * 255.0), vec2(1.0, 256.0)), _128 + (isnan(_412) ? 1.0 : (isnan(1.0) ? _412 : max(1.0, _412)))), clamp(Parameters.values[9].x, 0.0, 1.0)))), _120, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _517 = isnan(_433);
    bvec3 _518 = isnan(vec3(0.0));
    highp vec3 _519 = max(_433, vec3(0.0));
    highp vec3 _520 = vec3(_517.x ? vec3(0.0).x : _519.x, _517.y ? vec3(0.0).y : _519.y, _517.z ? vec3(0.0).z : _519.z);
    highp vec3 _440 = mix(_433 * 12.9200000762939453125, (pow(vec3(_518.x ? _433.x : _520.x, _518.y ? _433.y : _520.y, _518.z ? _433.z : _520.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _433));
    out_var_SV_Target = vec4(_440, 1.0);
}
