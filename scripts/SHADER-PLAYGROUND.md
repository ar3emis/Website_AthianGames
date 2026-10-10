# Ultimate Post Process playground

The product explorer has two views: original Unreal comparisons and an interactive
WebGL 2 preview. All 84 fragment shaders are compiled from the pack's HLSL recipe
definitions. All shader recipes are bundled with the renderer; switching presets
does not make a new network request. Scene downloads are cached across canvas
mounts, so the initialized playground keeps working during a connection loss.
Failed downloads time out and are evicted to allow a fresh retry.
No compiler or Unreal runtime is bundled into the website.

## Sources and regeneration

`build-shader-playground.py` consumes the authoring directory's `pp50_library.py`,
`pp50_techniques.py`, `pp_scan_library.py`, `pp_local_library.py`, and
`pp_advanced_library.py`, plus the exported shipping material parameter report.
The Unreal-dependent advanced module is read with a metadata-only builder shim;
no asset-building code is run. Missing named parameters fail generation.

Run its `--help` for compiler arguments. Generation used Microsoft DXC
v1.9.2609 and Khronos SPIRV-Cross commit aa217ae. Both are build-time tools only.
The generated files are committed under `public/shaders/ultimate-post-process/`
and `lib/products/ultimatePostProcessParameters.json`. The generator also writes
`lib/products/ultimatePostProcessShaders.json`, which must match the `.frag` files.

The SM5 CMYK float4 indexing repair is also applied before WebGL compilation.
The original material's ordered function chain, global strength, split, stencil,
multiply, and overlay controls are retained. Compilers remove unused operations.

`prepare-playground-buffers.py <capture-directory>` packs four real Unreal EXR
captures and `capture.json` into browser textures. The capture uses L_EditorSetup,
the Example camera, a 1280 × 720 target, and identical camera transforms for all
buffers. Color is converted from linear sRGB to an sRGB PNG; the renderer samples
it with an sRGB texture. Normals are encoded from signed XYZ. Depth is quantized to
centimeters in two PNG channels; custom depth uses the same encoding, with stencil
IDs in the third channel. World position is reconstructed using captured camera
axes and FOV. These PNGs are lossless and total approximately 430 KB.

This is a fixed-scene browser adaptation. Temporal rendering, geometry interaction,
depth precision, color, and performance need final evaluation in Unreal. Existing
Unreal captures remain the engine-rendered reference. The Niagara lenses are not
included in the playground. Demo world-mask centers and scan origins are adjusted
to the photographed exhibit; copied JSON contains those adjusted values.

## Validation

```sh
node --test tests/shader-playground.test.cjs
npm run build
```

The tests cover every catalog ID, uniform indexing, finite slider ranges, export
semantics, isolated resets, camera vectors, image dimensions, and stencil targets.
Browser verification additionally covers compilation/linking of all 84 presets,
visible parameter changes, clipboard JSON, mode persistence, reset, keyboard
controls, animation, and the mobile layout.

The canvas redraws static effects on changes, caps animation at roughly 30 FPS,
and stops rendering outside the viewport or in a hidden tab. Reduced-motion
preferences pause animation initially. Errors distinguish scene downloads,
shader compilation, graphics interruptions, and unavailable WebGL instead of
misreporting every failure as browser incompatibility. A restored graphics context
reinitializes the canvas while retaining the user's parameter values.
