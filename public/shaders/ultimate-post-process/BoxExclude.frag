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
    highp vec3 _96 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _104 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _108 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _112 = dot(roundEven(_108.xy * 255.0), vec2(1.0, 256.0));
    highp float _115 = roundEven(_108.z * 255.0);
    highp vec3 _171 = (Parameters.cameraPosition.xyz + (((Parameters.cameraForward.xyz + ((Parameters.cameraRight.xyz * ((in_var_TEXCOORD0.x * 2.0) - 1.0)) * Parameters.cameraPosition.w)) + (((Parameters.cameraUp.xyz * (1.0 - (in_var_TEXCOORD0.y * 2.0))) * Parameters.cameraPosition.w) * vec3(0.5625))) * _104)) - Parameters.values[23].xyz;
    highp float _172 = Parameters.values[10].x * 0.01745329238474369049072265625;
    highp float _173 = cos(_172);
    highp float _174 = sin(_172);
    highp vec2 _180 = _171.xy * mat2(vec2(_173, _174), vec2(-_174, _173));
    highp vec3 _181 = vec3(_180.x, _180.y, _171.z);
    bvec3 _352 = isnan(Parameters.values[24].xyz);
    bvec3 _353 = isnan(vec3(1.0));
    highp vec3 _354 = max(Parameters.values[24].xyz, vec3(1.0));
    highp vec3 _355 = vec3(_352.x ? vec3(1.0).x : _354.x, _352.y ? vec3(1.0).y : _354.y, _352.z ? vec3(1.0).z : _354.z);
    highp vec3 _184 = abs(_181) - vec3(_353.x ? Parameters.values[24].xyz.x : _355.x, _353.y ? Parameters.values[24].xyz.y : _355.y, _353.z ? Parameters.values[24].xyz.z : _355.z);
    bvec3 _357 = isnan(_184);
    bvec3 _358 = isnan(vec3(0.0));
    highp vec3 _359 = max(_184, vec3(0.0));
    highp vec3 _360 = vec3(_357.x ? vec3(0.0).x : _359.x, _357.y ? vec3(0.0).y : _359.y, _357.z ? vec3(0.0).z : _359.z);
    highp float _187 = _184.x;
    highp float _188 = _184.y;
    highp float _189 = _184.z;
    highp float _190 = isnan(_189) ? _188 : (isnan(_188) ? _189 : max(_188, _189));
    highp float _191 = isnan(_190) ? _187 : (isnan(_187) ? _190 : max(_187, _190));
    highp float _201;
    if (Parameters.values[3].x < 0.5)
    {
        _201 = length(_181) - (isnan(1.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 1.0 : max(Parameters.values[1].x, 1.0)));
    }
    else
    {
        _201 = length(vec3(_358.x ? _184.x : _360.x, _358.y ? _184.y : _360.y, _358.z ? _184.z : _360.z)) + (isnan(0.0) ? _191 : (isnan(_191) ? 0.0 : min(_191, 0.0)));
    }
    highp float _202 = isnan(0.0) ? Parameters.values[2].x : (isnan(Parameters.values[2].x) ? 0.0 : max(Parameters.values[2].x, 0.0));
    highp float _203 = fwidth(_201);
    highp float _204 = isnan(0.100000001490116119384765625) ? _203 : (isnan(_203) ? 0.100000001490116119384765625 : max(_203, 0.100000001490116119384765625));
    highp float _205 = isnan(_204) ? _202 : (isnan(_202) ? _204 : max(_202, _204));
    highp float _206 = _104 * 9.9999997473787516355514526367188e-05;
    highp float _209 = step(_112, _104 + (isnan(_206) ? 0.5 : (isnan(0.5) ? _206 : max(0.5, _206))));
    highp float _223;
    if (Parameters.values[3].x > 1.5)
    {
        _223 = (1.0 - step(0.5, abs(_115 - Parameters.values[5].x))) * _209;
    }
    else
    {
        _223 = 1.0 - smoothstep(_205 * (-0.5), _205 * 0.5, _201);
    }
    highp float _229;
    if (Parameters.values[4].x > 0.5)
    {
        _229 = 1.0 - _223;
    }
    else
    {
        _229 = _223;
    }
    highp vec3 _267 = (((mix(vec3(dot(_96, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))), _96, vec3(Parameters.values[11].x)) - vec3(0.5)) * Parameters.values[12].x) + vec3(0.5)) + vec3(Parameters.values[13].x);
    bvec3 _402 = isnan(_267);
    bvec3 _403 = isnan(vec3(0.0));
    highp vec3 _404 = max(_267, vec3(0.0));
    highp vec3 _405 = vec3(_402.x ? vec3(0.0).x : _404.x, _402.y ? vec3(0.0).y : _404.y, _402.z ? vec3(0.0).z : _404.z);
    highp vec3 _275 = vec3(clamp(clamp((_229 * mix(1.0, (1.0 - step(0.5, abs(_115 - Parameters.values[7].x))) * _209, clamp(Parameters.values[6].x, 0.0, 1.0))) * (1.0 - (((1.0 - step(0.5, abs(_115 - Parameters.values[9].x))) * _209) * clamp(Parameters.values[8].x, 0.0, 1.0))), 0.0, 1.0), 0.0, 1.0));
    highp vec3 _276 = mix(_96, pow(vec3(_403.x ? _267.x : _405.x, _403.y ? _267.y : _405.y, _403.z ? _267.z : _405.z), vec3(1.0 / (isnan(0.100000001490116119384765625) ? Parameters.values[14].x : (isnan(Parameters.values[14].x) ? 0.100000001490116119384765625 : max(Parameters.values[14].x, 0.100000001490116119384765625))))) * Parameters.values[25].xyz, _275);
    highp vec3 _295 = mix(_276, mix(mix(_276, _96 * _276, vec3(Parameters.values[21].x)), mix((_96 * 2.0) * _276, vec3(1.0) - (((vec3(1.0) - _96) * 2.0) * (vec3(1.0) - _276)), step(vec3(0.5), _96)), vec3(Parameters.values[22].x)), _275);
    highp float _312 = _104 * 0.001000000047497451305389404296875;
    bvec3 _417 = isnan(_295);
    bvec3 _418 = isnan(vec3(0.0));
    highp vec3 _419 = max(_295, vec3(0.0));
    highp vec3 _420 = vec3(_417.x ? vec3(0.0).x : _419.x, _417.y ? vec3(0.0).y : _419.y, _417.z ? vec3(0.0).z : _419.z);
    highp vec3 _333 = mix(mix(_96, vec3(_418.x ? _295.x : _420.x, _418.y ? _295.y : _420.y, _418.z ? _295.z : _420.z), vec3((clamp(Parameters.values[15].x * Parameters.values[20].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[17].x, in_var_TEXCOORD0.x), clamp(Parameters.values[16].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(_115 - Parameters.values[18].x))) * step(_112, _104 + (isnan(_312) ? 1.0 : (isnan(1.0) ? _312 : max(1.0, _312)))), clamp(Parameters.values[19].x, 0.0, 1.0)))), _96, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _422 = isnan(_333);
    bvec3 _423 = isnan(vec3(0.0));
    highp vec3 _424 = max(_333, vec3(0.0));
    highp vec3 _425 = vec3(_422.x ? vec3(0.0).x : _424.x, _422.y ? vec3(0.0).y : _424.y, _422.z ? vec3(0.0).z : _424.z);
    out_var_SV_Target = vec4(mix(_333 * 12.9200000762939453125, (pow(vec3(_423.x ? _333.x : _425.x, _423.y ? _333.y : _425.y, _423.z ? _333.z : _425.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _333)), 1.0);
}
