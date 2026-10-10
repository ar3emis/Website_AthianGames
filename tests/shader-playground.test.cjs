const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const sharp = require('sharp');
const root = path.resolve(__dirname, '..');
const catalog = require('../lib/products/ultimatePostProcessCatalog.json');
const params = require('../lib/products/ultimatePostProcessParameters.json');
const bundledShaders = require('../lib/products/ultimatePostProcessShaders.json');
const output = ts.transpileModule(fs.readFileSync(path.join(root, 'lib/products/shaderPlayground.ts'), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017, esModuleInterop: true } }).outputText;
const exportsForTest = {};
new Function('exports', 'require', output)(exportsForTest, (id) => {
  assert.equal(id, './ultimatePostProcessParameters.json'); return params;
});
const { initialValues, exportSettings, colorFromHex } = exportsForTest;
const sceneModule = {};
const sceneSource = ts.transpileModule(fs.readFileSync(path.join(root, 'lib/products/shaderScene.ts'), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017 } }).outputText;
new Function('exports', sceneSource)(sceneModule);

test('every advertised preset has a complete shader and bounded finite controls', () => {
  assert.equal(catalog.length, 84);
  assert.deepEqual(Object.keys(params).sort(), catalog.map((p) => p.id).sort());
  assert.deepEqual(Object.keys(bundledShaders).sort(), catalog.map((p) => p.id).sort());
  for (const look of catalog) {
    const preset = params[look.id];
    const values = initialValues(look.id);
    assert(preset.parameters.length <= 64);
    assert.equal(new Set(preset.parameters.map((p) => p.name)).size, preset.parameters.length);
    const shader = fs.readFileSync(path.join(root, 'public/shaders/ultimate-post-process', look.id + '.frag'), 'utf8');
    assert.equal(bundledShaders[look.id], shader.replace(/\r\n/g, '\n'), look.id + ': bundled recipe must match the compiled shader');
    assert(shader.startsWith('#version 300 es'));
    assert(shader.includes('uniform type_Parameters'));
    for (const parameter of preset.parameters) {
      const value = values[parameter.name];
      if (Array.isArray(value)) { assert.equal(value.length, 4); assert(value.every(Number.isFinite)); }
      else {
        assert(Number.isFinite(value), look.id + ':' + parameter.name);
        assert(value >= parameter.min && value <= parameter.max, look.id + ':' + parameter.name + ' outside control range');
        assert(parameter.step > 0 && parameter.min < parameter.max);
      }
    }
    for (const match of shader.matchAll(/Parameters\.values\[(\d+)\]/g)) assert(Number(match[1]) < preset.parameters.length);
  }
});

test('export keeps exact parameter names, edited values, vector alpha, and preset identity', () => {
  const look = catalog.find((p) => p.id === 'SoftCel');
  const values = initialValues(look.id);
  values.ClayRelief_ClayColor = colorFromHex('#ff8040', [0, 0, 0, .7]);
  values.Strength = .42;
  const result = JSON.parse(exportSettings(look.id, look.asset, values));
  assert.equal(result.preset, look.id); assert.equal(result.asset, look.asset);
  assert.equal(result.scalars.Strength, .42);
  assert.deepEqual(result.vectors.ClayRelief_ClayColor, [1, 128 / 255, 64 / 255, .7]);
  assert.equal(Object.keys(result.scalars).length + Object.keys(result.vectors).length, params[look.id].parameters.length);
});

test('resets return fresh vectors and object coordinates fit their controls', () => {
  const before = JSON.stringify(params);
  const first = initialValues('SoftCel'); first.ClayRelief_ClayColor[0] = 99;
  assert.notEqual(initialValues('SoftCel').ClayRelief_ClayColor[0], 99);
  assert.equal(JSON.stringify(params), before);
  assert.equal(initialValues('ObjectSphereInclude').Local_CenterX, 520);
  assert.equal(initialValues('ScreenCircleInclude').Local_CenterX, .5);
});

test('scene textures are aligned, contain real depth and normals, and expose two stencil targets', async () => {
  const folder = path.join(root, 'public/images/products/art-of-shader-ultimate-post-process/playground');
  for (const name of ['color', 'depth', 'normal', 'custom']) {
    const image = await sharp(path.join(folder, name + '.png')).metadata();
    assert.equal(image.width, 1280); assert.equal(image.height, 720);
  }
  const { data, info } = await sharp(path.join(folder, 'custom.png')).raw().toBuffer({ resolveWithObject: true });
  const ids = new Set(); for (let i = 2; i < data.length; i += info.channels) ids.add(data[i]);
  assert(ids.has(1) && ids.has(2));
  const depth = await sharp(path.join(folder, 'depth.png')).raw().toBuffer();
  assert(depth.some((v, i) => i % 3 === 1 && v > 2));
  const camera = JSON.parse(fs.readFileSync(path.join(folder, 'camera.json'), 'utf8'));
  assert(camera.fov > 0 && camera.fov < 180);
  for (const axis of ['forward', 'right', 'up']) assert(Math.abs(Math.hypot(...camera[axis]) - 1) < .0001);
});

test('preset changes reuse the loaded scene when the server goes offline', async () => {
  let calls = 0, offline = false;
  const load = sceneModule.createSceneLoader(async (url) => {
    calls++;
    if (offline) throw new TypeError('Failed to fetch');
    return new Response(url.endsWith('.json') ? JSON.stringify({ fov: 70 }) : 'texture');
  });
  const first = load();
  assert.equal(load(), first, 'concurrent canvases share the in-flight request');
  const scene = await first;
  assert.equal(calls, 5);
  assert.equal(scene.images.length, 4);
  offline = true;
  for (let preset = 0; preset < 84; preset++) assert.equal(await load(), scene);
  assert.equal(calls, 5, 'switching presets does not fetch scene assets again');
});

test('a failed scene download is evicted so Retry can recover', async () => {
  let failing = true, calls = 0;
  const load = sceneModule.createSceneLoader(async (url) => {
    calls++;
    if (failing && url.endsWith('camera.json')) return new Response('', { status: 503 });
    return new Response(url.endsWith('.json') ? JSON.stringify({ fov: 70 }) : 'texture');
  });
  await assert.rejects(load(), /camera.json: HTTP 503/);
  failing = false;
  assert.equal((await load()).camera.fov, 70);
  assert.equal(calls, 10);
});
