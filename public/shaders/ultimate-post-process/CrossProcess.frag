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
    highp vec3 _153 = textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, in_var_TEXCOORD0, 0.0).xyz;
    highp float _161 = dot(roundEven(textureLod(SPIRV_Cross_CombineddepthTexturepointSampler, in_var_TEXCOORD0, 0.0).xy * 255.0), vec2(1.0, 256.0));
    highp vec4 _165 = textureLod(SPIRV_Cross_CombinedcustomTexturepointSampler, in_var_TEXCOORD0, 0.0);
    highp float _185 = mix(Parameters.values[1].x, Parameters.values[2].x, smoothstep(Parameters.values[4].x - 0.014999999664723873138427734375, Parameters.values[4].x + 0.014999999664723873138427734375, in_var_TEXCOORD0.x));
    highp float _188 = _185 * 0.300000011920928955078125;
    highp float _191 = clamp(abs(_161 - _185) / (isnan(1.0) ? _188 : (isnan(_188) ? 1.0 : max(_188, 1.0))), 0.0, 1.0);
    highp float _197 = exp(-pow((in_var_TEXCOORD0.x - Parameters.values[4].x) * 30.0, 2.0)) * 0.85000002384185791015625;
    highp float _198 = isnan(_197) ? _191 : (isnan(_191) ? _197 : max(_191, _197));
    highp vec3 _295 = (((((textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + ((vec2(1.0, 0.0) * ((0.17677669227123260498046875 * Parameters.values[3].x) * _198)) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + ((vec2(-0.737368643283843994140625, 0.675490558147430419921875) * ((0.3061862289905548095703125 * Parameters.values[3].x) * _198)) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + ((vec2(0.087425075471401214599609375, -0.99617111682891845703125) * ((0.395284712314605712890625 * Parameters.values[3].x) * _198)) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + ((vec2(0.608439624309539794921875, 0.793600142002105712890625) * ((0.4677071869373321533203125 * Parameters.values[3].x) * _198)) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + ((vec2(-0.984713733196258544921875, -0.1741806566715240478515625) * ((0.53033006191253662109375 * Parameters.values[3].x) * _198)) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + ((vec2(0.84375464916229248046875, -0.536729037761688232421875) * ((0.586301982402801513671875 * Parameters.values[3].x) * _198)) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + ((vec2(-0.2596023976802825927734375, 0.965715587139129638671875) * ((0.637377440929412841796875 * Parameters.values[3].x) * _198)) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    highp vec3 _393 = ((((((_295 + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + ((vec2(-0.46090948581695556640625, -0.887447178363800048828125) * ((0.684653222560882568359375 * Parameters.values[3].x) * _198)) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + ((vec2(0.939322173595428466796875, 0.343036174774169921875) * ((0.728868961334228515625 * Parameters.values[3].x) * _198)) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + ((vec2(-0.924344599246978759765625, 0.3815586864948272705078125) * ((0.770551741123199462890625 * Parameters.values[3].x) * _198)) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + ((vec2(0.4238438904285430908203125, -0.9057352542877197265625) * ((0.81009256839752197265625 * Parameters.values[3].x) * _198)) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + ((vec2(0.2992877662181854248046875, 0.954162895679473876953125) * ((0.847791254520416259765625 * Parameters.values[3].x) * _198)) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + ((vec2(-0.8652131557464599609375, -0.50140416622161865234375) * ((0.88388347625732421875 * Parameters.values[3].x) * _198)) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + ((vec2(0.976674973964691162109375, -0.21472312510013580322265625) * ((0.918558657169342041015625 * Parameters.values[3].x) * _198)) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz;
    highp vec3 _422 = ((_393 + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + ((vec2(-0.575124919414520263671875, 0.818065643310546875) * ((0.95197165012359619140625 * Parameters.values[3].x) * _198)) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) + textureLod(SPIRV_Cross_CombinedsceneTexturelinearSampler, clamp(clamp(clamp(in_var_TEXCOORD0 + ((vec2(-0.12851603329181671142578125, -0.99170744419097900390625) * ((0.984250962734222412109375 * Parameters.values[3].x) * _198)) * vec2(0.0007812500116415321826934814453125, 0.001388888922519981861114501953125)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), vec2(0.0), vec2(1.0)), 0.0).xyz) * vec3(0.0625);
    highp vec3 _442 = (((mix(vec3(dot(_422, vec3(0.2125999927520751953125, 0.715200006961822509765625, 0.072200000286102294921875))), _422, vec3(Parameters.values[5].x)) - vec3(0.5)) * Parameters.values[6].x) + vec3(0.5)) + vec3(Parameters.values[7].x);
    bvec3 _533 = isnan(_442);
    bvec3 _534 = isnan(vec3(0.0));
    highp vec3 _535 = max(_442, vec3(0.0));
    highp vec3 _536 = vec3(_533.x ? vec3(0.0).x : _535.x, _533.y ? vec3(0.0).y : _535.y, _533.z ? vec3(0.0).z : _535.z);
    highp vec3 _448 = pow(vec3(_534.x ? _442.x : _536.x, _534.y ? _442.y : _536.y, _534.z ? _442.z : _536.z), vec3(1.0 / (isnan(0.100000001490116119384765625) ? Parameters.values[8].x : (isnan(Parameters.values[8].x) ? 0.100000001490116119384765625 : max(Parameters.values[8].x, 0.100000001490116119384765625))))) * Parameters.values[17].xyz;
    highp vec3 _466 = mix(mix(_448, _153 * _448, vec3(Parameters.values[15].x)), mix((_153 * 2.0) * _448, vec3(1.0) - (((vec3(1.0) - _153) * 2.0) * (vec3(1.0) - _448)), step(vec3(0.5), _153)), vec3(Parameters.values[16].x));
    highp float _483 = _161 * 0.001000000047497451305389404296875;
    bvec3 _548 = isnan(_466);
    bvec3 _549 = isnan(vec3(0.0));
    highp vec3 _550 = max(_466, vec3(0.0));
    highp vec3 _551 = vec3(_548.x ? vec3(0.0).x : _550.x, _548.y ? vec3(0.0).y : _550.y, _548.z ? vec3(0.0).z : _550.z);
    highp vec3 _504 = mix(mix(_153, vec3(_549.x ? _466.x : _551.x, _549.y ? _466.y : _551.y, _549.z ? _466.z : _551.z), vec3((clamp(Parameters.values[9].x * Parameters.values[14].x, 0.0, 1.0) * mix(1.0, step(Parameters.values[11].x, in_var_TEXCOORD0.x), clamp(Parameters.values[10].x, 0.0, 1.0))) * mix(1.0, (1.0 - step(0.5, abs(roundEven(_165.z * 255.0) - Parameters.values[12].x))) * step(dot(roundEven(_165.xy * 255.0), vec2(1.0, 256.0)), _161 + (isnan(_483) ? 1.0 : (isnan(1.0) ? _483 : max(1.0, _483)))), clamp(Parameters.values[13].x, 0.0, 1.0)))), _153, vec3(step(in_var_TEXCOORD0.x, Parameters.frame.y)));
    bvec3 _553 = isnan(_504);
    bvec3 _554 = isnan(vec3(0.0));
    highp vec3 _555 = max(_504, vec3(0.0));
    highp vec3 _556 = vec3(_553.x ? vec3(0.0).x : _555.x, _553.y ? vec3(0.0).y : _555.y, _553.z ? vec3(0.0).z : _555.z);
    highp vec3 _511 = mix(_504 * 12.9200000762939453125, (pow(vec3(_554.x ? _504.x : _556.x, _554.y ? _504.y : _556.y, _554.z ? _504.z : _556.z), vec3(0.4166666567325592041015625)) * 1.05499994754791259765625) - vec3(0.054999999701976776123046875), step(vec3(0.003130800090730190277099609375), _504));
    out_var_SV_Target = vec4(_511, 1.0);
}
