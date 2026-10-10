export const ultimatePostProcessProduct = {
  id: "aos-ultimate-post-process",
  slug: "art-of-shader-ultimate-post-process",
  name: "Art of Shader Ultimate Post Process",
  topText: "Art of Shader Ultimate Post Process",
  bottomText: "Shape the look of your world, one layer at a time.",
  summary: "A modular Unreal shader library with weighted layers, localized effects, and controls that work in the editor and during play.",
  description: `Explore 66 core post-process looks, 12 object and screen mask variants, and 6 combined presets across stylized, toon, film, distortion, scan, special effects, and localization collections.

Drag BP_AOSPostProcess into your level, add materials to its layer stack, and drag the independent weights to mix their contributions. Preview changes in the editor, then drive the same actor with Blueprint during play. Duplicate material instances to build your own palettes, outlines, lenses, grain, scan fields, and mask shapes.

The plugin includes reusable material functions, an overview gallery, practical example scenes, runtime parameter exhibits, four GPU Niagara scene-color lenses, and source code for the layer actor. Use the interactive library to customize every post-process preset with live parameters, compare the result, and copy the named settings for your Unreal setup.

Build your own combinations with fully editable materials, functions, Blueprints, and the included C++ layer actor.`,
  category: "shaders", price: null, engineVersions: ["5.7"], externalUrl: "",
  documentationUrl: "/docs/art-of-shader-ultimate-post-process", videoId: "",
  bannerImage: "/images/products/art-of-shader-ultimate-post-process/gallery/cover.jpg",
  thumbnail: "/images/products/art-of-shader-ultimate-post-process/gallery/thumbnail.jpg",
  gallery: Array.from({ length: 23 }, (_, i) => `/images/products/art-of-shader-ultimate-post-process/gallery/${String(i + 1).padStart(2, "0")}.jpg`),
  features: [
    { title: "Editor and runtime layers", description: "Stack multiple materials with an enable switch and weight for each, plus a master weight. Changes preview while you drag Details sliders.", image: "/images/products/art-of-shader-ultimate-post-process/gallery/editor-layers.jpg" },
    { title: "84 ready-made presets", description: "66 core looks, 12 localized variants, and 6 combined recipes. Inspect every preset in the comparison browser.", image: "/images/products/art-of-shader-ultimate-post-process/gallery/collections.jpg" },
    { title: "Object and screen masks", description: "Include or exclude visible surfaces using world spheres, oriented boxes, custom stencil, screen circles, screen boxes, and wipes.", image: "/images/products/art-of-shader-ultimate-post-process/gallery/localization.jpg" },
    { title: "Reusable shader functions", description: "Editable functions separate palette, sampling, patterns, distortion, scan fields, masks, and compositing operations.", image: "/images/products/art-of-shader-ultimate-post-process/gallery/functions.jpg" },
    { title: "Scene-color Niagara lenses", description: "Heat Plume, Pressure Wave, Gravity Lens, and Chromatic Rift use translucent GPU sprites to refract the opaque scene.", image: "/images/products/art-of-shader-ultimate-post-process/gallery/niagara.jpg" },
    { title: "Examples and documentation", description: "An overview gallery, editor setup, weighted-layer examples, and illustrated installation and Blueprint guides.", image: "/images/products/art-of-shader-ultimate-post-process/gallery/overview.jpg" },
  ],
  isExternal: false, isFeatured: false,
};
