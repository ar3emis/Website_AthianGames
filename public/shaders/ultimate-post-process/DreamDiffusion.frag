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
    highp vec3 _107 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _115 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _119 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp vec2 _129 = vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125) * Parameters.values[1].x;
    highp vec2 _181 = clamp(clamp(clamp(in_var_TEXCOORD0, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0));
    highp vec3 _233 = ((((((((textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0) * _129), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz * 1.0) + (textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, -1.0) * _129), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz * 2.0)) + (textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, -1.0) * _129), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz * 1.0)) + (textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 0.0) * _129), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz * 2.0)) + (textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, _181, 0.0).xyz * 4.0)) + (textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(1.0, 0.0) * _129), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz * 2.0)) + (textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(-1.0, 1.0) * _129), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz * 1.0)) + (textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(0.0, 1.0) * _129), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz * 2.0)) + (textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + _129, vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz * 1.0);
    highp vec3 _238 = mix(_107, _233 * vec3(0.0625), vec3(Parameters.values[2].x));
    highp vec3 _258 = (((mix(vec3(dot(_238, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))), _238, vec3(Parameters.values[3].x)) - vec3(0.5)) * Parameters.values[4].x) + vec3(0.5)) + vec3(Parameters.values[5].x);
    bvec3 _521 = isnan(_258);
    bvec3 _522 = isnan(vec3(0.0));
    highp vec3 _523 = max(_258, vec3(0.0));
    highp vec3 _524 = vec3(_521.x ? vec3(0.0).x : _523.x, _521.y ? vec3(0.0).y : _523.y, _521.z ? vec3(0.0).z : _523.z);
    highp vec3 _283 = vec3(Parameters.values[9].x);
    highp vec3 _284 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2((-4.0) * Parameters.values[7].x, 0.0) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz - _283;
    bvec3 _531 = isnan(_284);
    bvec3 _532 = isnan(vec3(0.0));
    highp vec3 _533 = max(_284, vec3(0.0));
    highp vec3 _534 = vec3(_531.x ? vec3(0.0).x : _533.x, _531.y ? vec3(0.0).y : _533.y, _531.z ? vec3(0.0).z : _533.z);
    int _286 = abs(-4);
    highp vec3 _303 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2((-3.0) * Parameters.values[7].x, 0.0) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz - _283;
    bvec3 _536 = isnan(_303);
    bvec3 _537 = isnan(vec3(0.0));
    highp vec3 _538 = max(_303, vec3(0.0));
    highp vec3 _539 = vec3(_536.x ? vec3(0.0).x : _538.x, _536.y ? vec3(0.0).y : _538.y, _536.z ? vec3(0.0).z : _538.z);
    int _305 = abs(-3);
    highp vec3 _323 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2((-2.0) * Parameters.values[7].x, 0.0) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz - _283;
    bvec3 _541 = isnan(_323);
    bvec3 _542 = isnan(vec3(0.0));
    highp vec3 _543 = max(_323, vec3(0.0));
    highp vec3 _544 = vec3(_541.x ? vec3(0.0).x : _543.x, _541.y ? vec3(0.0).y : _543.y, _541.z ? vec3(0.0).z : _543.z);
    int _325 = abs(-2);
    highp vec3 _343 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2((-1.0) * Parameters.values[7].x, 0.0) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz - _283;
    bvec3 _546 = isnan(_343);
    bvec3 _547 = isnan(vec3(0.0));
    highp vec3 _548 = max(_343, vec3(0.0));
    highp vec3 _549 = vec3(_546.x ? vec3(0.0).x : _548.x, _546.y ? vec3(0.0).y : _548.y, _546.z ? vec3(0.0).z : _548.z);
    int _345 = abs(-1);
    highp vec3 _356 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, _181, 0.0).xyz - _283;
    bvec3 _551 = isnan(_356);
    bvec3 _552 = isnan(vec3(0.0));
    highp vec3 _553 = max(_356, vec3(0.0));
    highp vec3 _554 = vec3(_551.x ? vec3(0.0).x : _553.x, _551.y ? vec3(0.0).y : _553.y, _551.z ? vec3(0.0).z : _553.z);
    int _358 = abs(0);
    highp vec3 _375 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(Parameters.values[7].x, 0.0) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz - _283;
    bvec3 _556 = isnan(_375);
    bvec3 _557 = isnan(vec3(0.0));
    highp vec3 _558 = max(_375, vec3(0.0));
    highp vec3 _559 = vec3(_556.x ? vec3(0.0).x : _558.x, _556.y ? vec3(0.0).y : _558.y, _556.z ? vec3(0.0).z : _558.z);
    int _377 = abs(1);
    highp vec3 _395 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(2.0 * Parameters.values[7].x, 0.0) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz - _283;
    bvec3 _561 = isnan(_395);
    bvec3 _562 = isnan(vec3(0.0));
    highp vec3 _563 = max(_395, vec3(0.0));
    highp vec3 _564 = vec3(_561.x ? vec3(0.0).x : _563.x, _561.y ? vec3(0.0).y : _563.y, _561.z ? vec3(0.0).z : _563.z);
    int _397 = abs(2);
    highp vec3 _415 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(3.0 * Parameters.values[7].x, 0.0) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz - _283;
    bvec3 _566 = isnan(_415);
    bvec3 _567 = isnan(vec3(0.0));
    highp vec3 _568 = max(_415, vec3(0.0));
    highp vec3 _569 = vec3(_566.x ? vec3(0.0).x : _568.x, _566.y ? vec3(0.0).y : _568.y, _566.z ? vec3(0.0).z : _568.z);
    int _417 = abs(3);
    highp vec3 _422 = (((((((vec3(_532.x ? _284.x : _534.x, _532.y ? _284.y : _534.y, _532.z ? _284.z : _534.z) * (1.0 - (float(_286) * 0.20000000298023223876953125))) + (vec3(_537.x ? _303.x : _539.x, _537.y ? _303.y : _539.y, _537.z ? _303.z : _539.z) * (1.0 - (float(_305) * 0.20000000298023223876953125)))) + (vec3(_542.x ? _323.x : _544.x, _542.y ? _323.y : _544.y, _542.z ? _323.z : _544.z) * (1.0 - (float(_325) * 0.20000000298023223876953125)))) + (vec3(_547.x ? _343.x : _549.x, _547.y ? _343.y : _549.y, _547.z ? _343.z : _549.z) * (1.0 - (float(_345) * 0.20000000298023223876953125)))) + (vec3(_552.x ? _356.x : _554.x, _552.y ? _356.y : _554.y, _552.z ? _356.z : _554.z) * (1.0 - (float(_358) * 0.20000000298023223876953125)))) + (vec3(_557.x ? _375.x : _559.x, _557.y ? _375.y : _559.y, _557.z ? _375.z : _559.z) * (1.0 - (float(_377) * 0.20000000298023223876953125)))) + (vec3(_562.x ? _395.x : _564.x, _562.y ? _395.y : _564.y, _562.z ? _395.z : _564.z) * (1.0 - (float(_397) * 0.20000000298023223876953125)))) + (vec3(_567.x ? _415.x : _569.x, _567.y ? _415.y : _569.y, _567.z ? _415.z : _569.z) * (1.0 - (float(_417) * 0.20000000298023223876953125)));
    highp vec3 _435 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + (vec2(4.0 * Parameters.values[7].x, 0.0) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz - _283;
    bvec3 _571 = isnan(_435);
    bvec3 _572 = isnan(vec3(0.0));
    highp vec3 _573 = max(_435, vec3(0.0));
    highp vec3 _574 = vec3(_571.x ? vec3(0.0).x : _573.x, _571.y ? vec3(0.0).y : _573.y, _571.z ? vec3(0.0).z : _573.z);
    int _437 = abs(4);
    highp vec3 _445 = (pow(vec3(_522.x ? _258.x : _524.x, _522.y ? _258.y : _524.y, _522.z ? _258.z : _524.z), vec3(1.0 / (isnan(0.100000001490116119384765625) ? Parameters.values[6].x : (isnan(Parameters.values[6].x) ? 0.100000001490116119384765625 : max(Parameters.values[6].x, 0.100000001490116119384765625))))) * Parameters.values[18].xyz) + (((_422 + (vec3(_572.x ? _435.x : _574.x, _572.y ? _435.y : _574.y, _572.z ? _435.z : _574.z) * (1.0 - (float(_437) * 0.20000000298023223876953125)))) * Parameters.values[8].x) * vec3(0.20000000298023223876953125));
    highp vec3 _463 = mix(mix(_445, _107 * _445, vec3(Parameters.values[16].x)), mix((_107 * 2.0) * _445, vec3(1.0) - (((vec3(1.0) - _107) * 2.0) * (vec3(1.0) - _445)), step(vec3(0.5), _107)), vec3(Parameters.values[17].x));
    highp float _481 = _115 * 0.001000000047497451305389404296875;
    bvec3 _581 = isnan(_463);
    bvec3 _582 = isnan(vec3(0.0));
    highp vec3 _583 = max(_463, vec3(0.0));
    highp vec3 _584 = vec3(_581.x ? vec3(0.0).x : _583.x, _581.y ? vec3(0.0).y : _583.y, _581.z ? vec3(0.0).z : _583.z);
    highp vec3 _502 = mix(mix(_107, vec3(_582.x ? _463.x : _584.x, _582.y ? _463.y : _584.y, _582.z ? _463.z : _584.z), vec3((clamp(Parameters.values[10].x * Parameters.values[15].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[12].x, in_var_TEXCOORD0.x), clamp(Parameters.values[11].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_119.z * 255.0) - Parameters.values[13].x))) * step(dot(roundEven(_119.xy * 255.0), vec2(1.0, 256.0)), _115 + (isnan(_481) ? 1.0 : (isnan(1.0) ? _481 : max(1.0, _481)))), clamp(Parameters.values[14].x, 0.0, 1.0)))), _107, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _586 = isnan(_502);
    bvec3 _587 = isnan(vec3(0.0));
    highp vec3 _588 = max(_502, vec3(0.0));
    highp vec3 _589 = vec3(_586.x ? vec3(0.0).x : _588.x, _586.y ? vec3(0.0).y : _588.y, _586.z ? vec3(0.0).z : _588.z);
    highp vec3 _509 = mix(_502 * 12.9200000762939453125, (pow(vec3(_587.x ? _502.x : _589.x, _587.y ? _502.y : _589.y, _587.z ? _502.z : _589.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _502));
    out_var_SV_Target = vec4(_509, 1.0);
}
