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
    highp vec2 _122 = in_var_TEXCOORD0 * vec2(1280.0, 720.0);
    highp float _123 = isnan(16.0) ? Parameters.values[1].x : (isnan(Parameters.values[1].x) ? 16.0 : max(Parameters.values[1].x, 16.0));
    highp float _124 = isnan(1.0) ? Parameters.values[2].x : (isnan(Parameters.values[2].x) ? 1.0 : max(Parameters.values[2].x, 1.0));
    highp float _126 = _122.x / _123;
    highp float _128 = floor(_126) * _123;
    highp float _133 = (floor(_122.y / _124) + 0.5) * _124;
    highp vec3 _90[8];
    _90[0] = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(vec2(_128 + (_123 * 0.0625), _133) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    highp vec3 _147 = _90[0];
    highp float _148 = dot(_147, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    _90[1] = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(vec2(_128 + (_123 * 0.1875), _133) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    highp vec3 _162 = _90[1];
    highp float _163 = dot(_162, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    _90[2] = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(vec2(_128 + (_123 * 0.3125), _133) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    highp vec3 _177 = _90[2];
    highp float _178 = dot(_177, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    _90[3] = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(vec2(_128 + (_123 * 0.4375), _133) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    highp vec3 _192 = _90[3];
    highp float _193 = dot(_192, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    _90[4] = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(vec2(_128 + (_123 * 0.5625), _133) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    highp vec3 _207 = _90[4];
    highp float _208 = dot(_207, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    _90[5] = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(vec2(_128 + (_123 * 0.6875), _133) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    highp vec3 _222 = _90[5];
    highp float _223 = dot(_222, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    _90[6] = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(vec2(_128 + (_123 * 0.8125), _133) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    highp vec3 _237 = _90[6];
    highp float _238 = dot(_237, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    _90[7] = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(vec2(_128 + (_123 * 0.9375), _133) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    highp vec3 _252 = _90[7];
    highp float _253 = dot(_252, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875));
    bool _254 = _148 > _163;
    if (_254)
    {
        highp vec3 _257 = _90[0];
        _90[0] = _90[1];
        _90[1] = _257;
    }
    highp float _259 = _254 ? _163 : _148;
    highp float _260 = _254 ? _148 : _163;
    bool _261 = _260 > _178;
    if (_261)
    {
        highp vec3 _264 = _90[1];
        _90[1] = _90[2];
        _90[2] = _264;
    }
    highp float _266 = _261 ? _178 : _260;
    highp float _267 = _261 ? _260 : _178;
    bool _268 = _267 > _193;
    if (_268)
    {
        highp vec3 _271 = _90[2];
        _90[2] = _90[3];
        _90[3] = _271;
    }
    highp float _273 = _268 ? _193 : _267;
    highp float _274 = _268 ? _267 : _193;
    bool _275 = _274 > _208;
    if (_275)
    {
        highp vec3 _278 = _90[3];
        _90[3] = _90[4];
        _90[4] = _278;
    }
    highp float _280 = _275 ? _208 : _274;
    highp float _281 = _275 ? _274 : _208;
    bool _282 = _281 > _223;
    if (_282)
    {
        highp vec3 _285 = _90[4];
        _90[4] = _90[5];
        _90[5] = _285;
    }
    highp float _287 = _282 ? _223 : _281;
    highp float _288 = _282 ? _281 : _223;
    bool _289 = _288 > _238;
    if (_289)
    {
        highp vec3 _292 = _90[5];
        _90[5] = _90[6];
        _90[6] = _292;
    }
    highp float _294 = _289 ? _238 : _288;
    highp float _295 = _289 ? _288 : _238;
    bool _296 = _295 > _253;
    if (_296)
    {
        highp vec3 _299 = _90[6];
        _90[6] = _90[7];
        _90[7] = _299;
    }
    highp float _301 = _296 ? _295 : _253;
    highp float _302 = _296 ? _253 : _295;
    bool _303 = _259 > _266;
    if (_303)
    {
        highp vec3 _306 = _90[0];
        _90[0] = _90[1];
        _90[1] = _306;
    }
    highp float _308 = _303 ? _266 : _259;
    highp float _309 = _303 ? _259 : _266;
    bool _310 = _309 > _273;
    if (_310)
    {
        highp vec3 _313 = _90[1];
        _90[1] = _90[2];
        _90[2] = _313;
    }
    highp float _315 = _310 ? _273 : _309;
    highp float _316 = _310 ? _309 : _273;
    bool _317 = _316 > _280;
    if (_317)
    {
        highp vec3 _320 = _90[2];
        _90[2] = _90[3];
        _90[3] = _320;
    }
    highp float _322 = _317 ? _280 : _316;
    highp float _323 = _317 ? _316 : _280;
    bool _324 = _323 > _287;
    if (_324)
    {
        highp vec3 _327 = _90[3];
        _90[3] = _90[4];
        _90[4] = _327;
    }
    highp float _329 = _324 ? _287 : _323;
    highp float _330 = _324 ? _323 : _287;
    bool _331 = _330 > _294;
    if (_331)
    {
        highp vec3 _334 = _90[4];
        _90[4] = _90[5];
        _90[5] = _334;
    }
    highp float _336 = _331 ? _294 : _330;
    highp float _337 = _331 ? _330 : _294;
    bool _338 = _337 > _302;
    if (_338)
    {
        highp vec3 _341 = _90[5];
        _90[5] = _90[6];
        _90[6] = _341;
    }
    highp float _343 = _338 ? _302 : _337;
    highp float _344 = _338 ? _337 : _302;
    bool _345 = _344 > _301;
    if (_345)
    {
        highp vec3 _348 = _90[6];
        _90[6] = _90[7];
        _90[7] = _348;
    }
    highp float _350 = _345 ? _344 : _301;
    highp float _351 = _345 ? _301 : _344;
    bool _352 = _308 > _315;
    if (_352)
    {
        highp vec3 _355 = _90[0];
        _90[0] = _90[1];
        _90[1] = _355;
    }
    highp float _357 = _352 ? _315 : _308;
    highp float _358 = _352 ? _308 : _315;
    bool _359 = _358 > _322;
    if (_359)
    {
        highp vec3 _362 = _90[1];
        _90[1] = _90[2];
        _90[2] = _362;
    }
    highp float _364 = _359 ? _322 : _358;
    highp float _365 = _359 ? _358 : _322;
    bool _366 = _365 > _329;
    if (_366)
    {
        highp vec3 _369 = _90[2];
        _90[2] = _90[3];
        _90[3] = _369;
    }
    highp float _371 = _366 ? _329 : _365;
    highp float _372 = _366 ? _365 : _329;
    bool _373 = _372 > _336;
    if (_373)
    {
        highp vec3 _376 = _90[3];
        _90[3] = _90[4];
        _90[4] = _376;
    }
    highp float _378 = _373 ? _336 : _372;
    highp float _379 = _373 ? _372 : _336;
    bool _380 = _379 > _343;
    if (_380)
    {
        highp vec3 _383 = _90[4];
        _90[4] = _90[5];
        _90[5] = _383;
    }
    highp float _385 = _380 ? _343 : _379;
    highp float _386 = _380 ? _379 : _343;
    bool _387 = _386 > _351;
    if (_387)
    {
        highp vec3 _390 = _90[5];
        _90[5] = _90[6];
        _90[6] = _390;
    }
    highp float _392 = _387 ? _351 : _386;
    highp float _393 = _387 ? _386 : _351;
    bool _394 = _393 > _350;
    if (_394)
    {
        highp vec3 _397 = _90[6];
        _90[6] = _90[7];
        _90[7] = _397;
    }
    highp float _399 = _394 ? _393 : _350;
    highp float _400 = _394 ? _350 : _393;
    bool _401 = _357 > _364;
    if (_401)
    {
        highp vec3 _404 = _90[0];
        _90[0] = _90[1];
        _90[1] = _404;
    }
    highp float _406 = _401 ? _364 : _357;
    highp float _407 = _401 ? _357 : _364;
    bool _408 = _407 > _371;
    if (_408)
    {
        highp vec3 _411 = _90[1];
        _90[1] = _90[2];
        _90[2] = _411;
    }
    highp float _413 = _408 ? _371 : _407;
    highp float _414 = _408 ? _407 : _371;
    bool _415 = _414 > _378;
    if (_415)
    {
        highp vec3 _418 = _90[2];
        _90[2] = _90[3];
        _90[3] = _418;
    }
    highp float _420 = _415 ? _378 : _414;
    highp float _421 = _415 ? _414 : _378;
    bool _422 = _421 > _385;
    if (_422)
    {
        highp vec3 _425 = _90[3];
        _90[3] = _90[4];
        _90[4] = _425;
    }
    highp float _427 = _422 ? _385 : _421;
    highp float _428 = _422 ? _421 : _385;
    bool _429 = _428 > _392;
    if (_429)
    {
        highp vec3 _432 = _90[4];
        _90[4] = _90[5];
        _90[5] = _432;
    }
    highp float _434 = _429 ? _392 : _428;
    highp float _435 = _429 ? _428 : _392;
    bool _436 = _435 > _400;
    if (_436)
    {
        highp vec3 _439 = _90[5];
        _90[5] = _90[6];
        _90[6] = _439;
    }
    highp float _441 = _436 ? _400 : _435;
    highp float _442 = _436 ? _435 : _400;
    bool _443 = _442 > _399;
    if (_443)
    {
        highp vec3 _446 = _90[6];
        _90[6] = _90[7];
        _90[7] = _446;
    }
    highp float _448 = _443 ? _442 : _399;
    highp float _449 = _443 ? _399 : _442;
    bool _450 = _406 > _413;
    if (_450)
    {
        highp vec3 _453 = _90[0];
        _90[0] = _90[1];
        _90[1] = _453;
    }
    highp float _455 = _450 ? _413 : _406;
    highp float _456 = _450 ? _406 : _413;
    bool _457 = _456 > _420;
    if (_457)
    {
        highp vec3 _460 = _90[1];
        _90[1] = _90[2];
        _90[2] = _460;
    }
    highp float _462 = _457 ? _420 : _456;
    highp float _463 = _457 ? _456 : _420;
    bool _464 = _463 > _427;
    if (_464)
    {
        highp vec3 _467 = _90[2];
        _90[2] = _90[3];
        _90[3] = _467;
    }
    highp float _469 = _464 ? _427 : _463;
    highp float _470 = _464 ? _463 : _427;
    bool _471 = _470 > _434;
    if (_471)
    {
        highp vec3 _474 = _90[3];
        _90[3] = _90[4];
        _90[4] = _474;
    }
    highp float _476 = _471 ? _434 : _470;
    highp float _477 = _471 ? _470 : _434;
    bool _478 = _477 > _441;
    if (_478)
    {
        highp vec3 _481 = _90[4];
        _90[4] = _90[5];
        _90[5] = _481;
    }
    highp float _483 = _478 ? _441 : _477;
    highp float _484 = _478 ? _477 : _441;
    bool _485 = _484 > _449;
    if (_485)
    {
        highp vec3 _488 = _90[5];
        _90[5] = _90[6];
        _90[6] = _488;
    }
    highp float _490 = _485 ? _449 : _484;
    highp float _491 = _485 ? _484 : _449;
    bool _492 = _491 > _448;
    if (_492)
    {
        highp vec3 _495 = _90[6];
        _90[6] = _90[7];
        _90[7] = _495;
    }
    highp float _497 = _492 ? _491 : _448;
    highp float _498 = _492 ? _448 : _491;
    bool _499 = _455 > _462;
    if (_499)
    {
        highp vec3 _502 = _90[0];
        _90[0] = _90[1];
        _90[1] = _502;
    }
    highp float _504 = _499 ? _462 : _455;
    highp float _505 = _499 ? _455 : _462;
    bool _506 = _505 > _469;
    if (_506)
    {
        highp vec3 _509 = _90[1];
        _90[1] = _90[2];
        _90[2] = _509;
    }
    highp float _511 = _506 ? _469 : _505;
    highp float _512 = _506 ? _505 : _469;
    bool _513 = _512 > _476;
    if (_513)
    {
        highp vec3 _516 = _90[2];
        _90[2] = _90[3];
        _90[3] = _516;
    }
    highp float _518 = _513 ? _476 : _512;
    highp float _519 = _513 ? _512 : _476;
    bool _520 = _519 > _483;
    if (_520)
    {
        highp vec3 _523 = _90[3];
        _90[3] = _90[4];
        _90[4] = _523;
    }
    highp float _525 = _520 ? _483 : _519;
    highp float _526 = _520 ? _519 : _483;
    bool _527 = _526 > _490;
    if (_527)
    {
        highp vec3 _530 = _90[4];
        _90[4] = _90[5];
        _90[5] = _530;
    }
    highp float _532 = _527 ? _490 : _526;
    highp float _533 = _527 ? _526 : _490;
    bool _534 = _533 > _498;
    if (_534)
    {
        highp vec3 _537 = _90[5];
        _90[5] = _90[6];
        _90[6] = _537;
    }
    highp float _539 = _534 ? _498 : _533;
    highp float _540 = _534 ? _533 : _498;
    bool _541 = _540 > _497;
    if (_541)
    {
        highp vec3 _544 = _90[6];
        _90[6] = _90[7];
        _90[7] = _544;
    }
    highp float _547 = _541 ? _497 : _540;
    bool _548 = _504 > _511;
    if (_548)
    {
        highp vec3 _551 = _90[0];
        _90[0] = _90[1];
        _90[1] = _551;
    }
    highp float _553 = _548 ? _504 : _511;
    bool _554 = _553 > _518;
    if (_554)
    {
        highp vec3 _557 = _90[1];
        _90[1] = _90[2];
        _90[2] = _557;
    }
    highp float _559 = _554 ? _553 : _518;
    bool _560 = _559 > _525;
    if (_560)
    {
        highp vec3 _563 = _90[2];
        _90[2] = _90[3];
        _90[3] = _563;
    }
    highp float _565 = _560 ? _559 : _525;
    bool _566 = _565 > _532;
    if (_566)
    {
        highp vec3 _569 = _90[3];
        _90[3] = _90[4];
        _90[4] = _569;
    }
    highp float _571 = _566 ? _565 : _532;
    bool _572 = _571 > _539;
    if (_572)
    {
        highp vec3 _575 = _90[4];
        _90[4] = _90[5];
        _90[5] = _575;
    }
    highp float _577 = _572 ? _571 : _539;
    bool _578 = _577 > _547;
    if (_578)
    {
        highp vec3 _581 = _90[5];
        _90[5] = _90[6];
        _90[6] = _581;
    }
    if ((_578 ? _577 : _547) > (_541 ? _540 : _497))
    {
        highp vec3 _587 = _90[6];
        _90[6] = _90[7];
        _90[7] = _587;
    }
    highp vec3 _597 = mix(_96, _90[min(7, int(fract(_126) * 8.0))], vec3(clamp(Parameters.values[3].x, 0.0, 1.0)));
    highp vec3 _615 = mix(mix(_597, _96 * _597, vec3(Parameters.values[10].x)), mix((_96 * 2.0) * _597, vec3(1.0) - (((vec3(1.0) - _96) * 2.0) * (vec3(1.0) - _597)), step(vec3(0.5), _96)), vec3(Parameters.values[11].x));
    highp float _633 = _104 * 0.001000000047497451305389404296875;
    bvec3 _688 = isnan(_615);
    bvec3 _689 = isnan(vec3(0.0));
    highp vec3 _690 = max(_615, vec3(0.0));
    highp vec3 _691 = vec3(_688.x ? vec3(0.0).x : _690.x, _688.y ? vec3(0.0).y : _690.y, _688.z ? vec3(0.0).z : _690.z);
    highp vec3 _654 = mix(mix(_96, vec3(_689.x ? _615.x : _691.x, _689.y ? _615.y : _691.y, _689.z ? _615.z : _691.z), vec3((clamp(Parameters.values[4].x * Parameters.values[9].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[6].x, in_var_TEXCOORD0.x), clamp(Parameters.values[5].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_108.z * 255.0) - Parameters.values[7].x))) * step(dot(roundEven(_108.xy * 255.0), vec2(1.0, 256.0)), _104 + (isnan(_633) ? 1.0 : (isnan(1.0) ? _633 : max(1.0, _633)))), clamp(Parameters.values[8].x, 0.0, 1.0)))), _96, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _693 = isnan(_654);
    bvec3 _694 = isnan(vec3(0.0));
    highp vec3 _695 = max(_654, vec3(0.0));
    highp vec3 _696 = vec3(_693.x ? vec3(0.0).x : _695.x, _693.y ? vec3(0.0).y : _695.y, _693.z ? vec3(0.0).z : _695.z);
    highp vec3 _661 = mix(_654 * 12.9200000762939453125, (pow(vec3(_694.x ? _654.x : _696.x, _694.y ? _654.y : _696.y, _694.z ? _654.z : _696.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _654));
    out_var_SV_Target = vec4(_661, 1.0);
}
