// Complete product data with all features from your existing site
export const productDetails = {
  "minimap-map-and-navigation-system": {
    id: "1",
    slug: "minimap-map-and-navigation-system",
    name: "Minimap, Map and Navigation System",
    topText: "Minimap, Map and Navigation System",
    bottomText: "Build a fully customized and texture based Minimap, Map and Navigation System for your next big title.",
    summary: "Build a fully customized and texture based Minimap, Map and Navigation System for your next big title.",
    description: `MInimap, Map and Navigation System is a plugin designed to create customizable and optimized texture based Minimaps and Maps for your next big title. Forget dealing with the limitations of RenderTargets to design your Minimaps, which are performance heavy for larger worlds. This system can handle thousands of Points of Interest at a time without affecting the performance, and is designed keeping Open World RPGs in mind, however the flexibility and ease of implementation allows you to use this system in any kind of game you want, from archviz projects to real time strategy games. Actors represented as Points of Interest in the Minimaps and Maps are implemented via Datatable and each POI Actor class added to the Datatable has its own set of unique properties, making it simple to add a variety of different POI having different functionalities.`,
    category: "plugins",
    engineVersions: ["UE 4.27", "UE 5.0+"],
    externalUrl: "https://www.unrealengine.com/marketplace/en-US/product/minimap-map-and-navigation-system",
    documentationUrl: "https://docs.athiangames.com/doc_minimapandmap.html",
    videoId: "zTLjtnlbFjU",
    bannerImage: "/images/products/minimap/minimapcover.png",
    thumbnail: "/images/products/minimap/minimap_thumb.jpg",
    gallery: [
      "/images/products/minimap/minimapcover.png",
      "/images/products/minimap/minimap_texturebased.jpg",
      "/images/products/minimap/minimap_mapboundsactor.png",
      "/images/products/minimap/minimap_circularandrectangularmaps.jpg",
      "/images/products/minimap/minimap_texturemasking.png"
    ],
    features: [
      {
        title: "Texture Based Minimap System",
        description: "Your map is mapped to a custom texture that you can either design externally or take a snapshot of the topview of your bounds area. Either way, Texture based minimap ensures fastest performance as it eliminates the need of using a scene capture component.",
        image: "/images/products/minimap/minimap_texturebased.jpg"
      },
      {
        title: "Transition between multiple Map regions in same level",
        description: "The MapBounds Actor represents Bounds area corresponding to a given Minimap. So having more than one MapBounds in a scene indicates switching between multiple Minimaps depending on position of the player. This is very useful for large or open world scenes, where you often need to switch your Minimap while moving inside a different Bounds, like a cave, or a house interior.",
        image: "/images/products/minimap/minimap_mapboundsactor.png",
        learnMoreUrl: "https://docs.athiangames.com/doc_minimapandmap.html#MapBoundsActor"
      },
      {
        title: "Datatable driven Static and Dynamic Points of Interest",
        description: "The actors which are displayed as Icons in Minimap as well as Map, also known as the Points of Interest(POI), are defined in a Datatable, derived from the structure POIElement. The POIActors can either be static or dynamic, and is not limited to what it can represent. It can be a pickup item, an NPC, enemies, or simply a Fast Travel system, the applications are infinite.",
        image: "/images/products/minimap/minimap_poielementtable.png",
        learnMoreUrl: "https://docs.athiangames.com/doc_minimapandmap.html#POIElement"
      },
      {
        title: "Rectangular and Circular Minimap, with AutoRotate feature",
        description: "Control the Shape of your MInimap using the AllowCircleMask parameter in your Minimap UMG. This not only uses a circular opacity mask in the material, but it adjusts the positions of the Players and the Points of Interest accordingly, ensuring they stay within the bounding region of the minimap. The Auto Rotate feature allows the minimap to rotate along with the player camera.",
        image: "/images/products/minimap/minimap_circularandrectangularmaps.jpg",
        learnMoreUrl: "https://docs.athiangames.com/doc_minimapandmap.html#CircularMinimap"
      },
      {
        title: "Minimap Texture masking for non rectangular Bounds",
        description: "Minimap Texture Masking ensures that your minimap can transition smoothly when player navigates in and out of it, and can be added to the corresponding MapBoundsActor placed in the Scene.",
        image: "/images/products/minimap/minimap_texturemasking.png",
        learnMoreUrl: "https://docs.athiangames.com/doc_minimapandmap.html#MinimapMasking"
      },
      {
        title: "Interactive Map, with Zoom and Pan functionalities",
        description: "",
        image: "/images/products/minimap/minimapcover.png"
      },
      {
        title: "Customizable Navigation system, allowing user to add one or many Navigation Markers in the world, to display the location of the destination",
        description: "",
        image: "/images/products/minimap/minimapcover.png"
      },
      {
        title: "Navigation Out of Bounds notification, to display custom markers when player camera view is not looking at the destination",
        description: "",
        image: "/images/products/minimap/minimapcover.png"
      }
    ]
  },
  "procedural-vortex-tunnel": {
    id: "2",
    slug: "procedural-vortex-tunnel",
    name: "Procedural Vortex Tunnel",
    topText: "Procedural Vortex Tunnel",
    bottomText: "Redefine your imagination with the Procedural Vortex Tunnel, a plugin that lets you create a highly customizable Material Driven Vortex System along a given spline path.",
    summary: "Redefine your imagination with this highly customizable Material Driven Vortex System along a given spline path.",
    description: "Procedural Vortex Tunnel is a plugin that lets you build a customizable Vortex Tunnel along a given Spline path procedurally through predefined sets of parameters.",
    category: "tools",
    engineVersions: ["UE 4.27", "UE 5.0+"],
    externalUrl: "https://www.unrealengine.com/marketplace/en-US/product/a35f1131e36843f28df349d8f63b6660",
    videoId: "-yoDS9LK6p8",
    thumbnail: "/images/products/procedural-vortex-tunnel/pvt_thumb.jpg",
    videoThumbnail: "/images/products/procedural-vortex-tunnel/pvt_videothumbnail.jpg",
    gallery: [
      "/images/products/procedural-vortex-tunnel/pvt_banner.jpg",
      "/images/products/procedural-vortex-tunnel/pvt_splinebasedgeneration.png",
      "/images/products/procedural-vortex-tunnel/pvt_displacementmaterials.png",
      "/images/products/procedural-vortex-tunnel/pvt_features_vortexmeshes.jpg",
      "/images/products/procedural-vortex-tunnel/pvt_features_fxactor.jpg",
      "/images/products/procedural-vortex-tunnel/pvt_features_materialblending.jpg"
    ],
    features: [
      {
        title: "Spline Based Vortex Generation",
        description: "Generate the Vortex Tunnel along a given Spline path. The Size of each Vortex Mesh generated is determined by actual dimension of the static mesh, hence preventing stretching along the spline.",
        image: "/images/products/procedural-vortex-tunnel/pvt_splinebasedgeneration.png"
      },
      {
        title: "Displacement Materials using High Quality Procedural Noise Shaders",
        description: "Customizable Materials designed by combining multiple procedural noise shaders with lots of parameters to tweak from, gives the Vortex a completely unique and customized look that goes along with your vision.",
        image: "/images/products/procedural-vortex-tunnel/pvt_displacementmaterials.png"
      },
      {
        title: "Custom Vortex Meshes",
        description: "The VortexTunnel Actor facilitates the generation of Material Driven Vortex Meshes along the given Spline Path. Choose from the meshes provided in the plugin which gives a lot of variations, or make your own meshes and use them with this plugin, for the ultimate control of the design.",
        image: "/images/products/procedural-vortex-tunnel/pvt_features_vortexmeshes.jpg"
      },
      {
        title: "Niagara FX Along the Vortex",
        description: "The VortexFX Actor is designed to generate a set of NIagara FX along the path. It works in conjunction with Niagara module scripts to calculate the points where the FX will be placed and rotated to face the direction of the Vortex at any given point",
        image: "/images/products/procedural-vortex-tunnel/pvt_features_fxactor.jpg"
      },
      {
        title: "Static Meshes Along The Vortex",
        description: "The VortexRepeater Actor scatters a set of static meshes procedurally, along the vortex path. Custom Repeater Data contains the parameters that controls how the meshes will be scattered",
        image: "/images/products/procedural-vortex-tunnel/pvt_features_repeateractor.jpg"
      },
      {
        title: "Material Blending",
        description: "Using Vortex Data, blend multiple material instances for the Vortex meshes along the length of the spline, using the Material Blending feature.",
        image: "/images/products/procedural-vortex-tunnel/pvt_features_materialblending.jpg"
      },
      {
        title: "Pawn Movement Component",
        description: "The PawnMovementComponent Blueprint can be used to move the pawn as well as a set of custom actors along the Vortex Spline path, based on certain parameters. This Blueprint also acts as an example to demonstrate how Niagara FX can be generated runtime along the Vortex.",
        image: "/images/products/procedural-vortex-tunnel/pvt_features_pawnmovement.jpg"
      },
      {
        title: "GravityPull",
        description: "The GravityPull Bluprint pull a set of Actors towards a given TargetPoint, which would replicate the effect of objects being pulled inside the Vortex, when the TargetPoint location is set along the length of the Vortex Spline via the Pawn Movement Component Blueprint.",
        image: "/images/products/procedural-vortex-tunnel/pvt_features_gravitypull.jpg"
      }
    ]
  },
  "art-of-shader-distortion-and-glitches": {
    id: "3",
    slug: "art-of-shader-distortion-and-glitches",
    name: "Art Of Shader - Distortion And Glitches",
    topText: "Art Of Shader - Distortion And Glitches",
    bottomText: "A series of customizable Shaders and Niagara FX that can be combined, blended, grouped and localized to give different types of distorted and glitched effect to your actors and scenes.",
    summary: "A series of customizable Shaders and Niagara FX that gives distorted and glitched effects to your actors and scenes.",
    description: "Art of Shader - Distortion And Glitches is a pack of 40 Customizable Shaders, that can be used in Post Process Blendable Materials, Niagara FX, as well as Mesh Materials to create a variety of distorted and glitched effect to your actors and scenes. The Blueprint Actors facilitate the easy combining, blending and grouping of the Post process materials based on certain common properties. From Artifacts, VCRGlitch, GlitcySpectrum, Wavy, InterlacedGlitch, BlockySurface, BrokenPixels and many more Effects, choose, combine and customize via the parameterized material instances to suit your style.",
    category: "vfx",
    engineVersions: ["UE 4.27", "UE 5.0+"],
    externalUrl: "https://www.unrealengine.com/marketplace/en-US/product/art-of-shader-stylized-post-process-pack",
    documentationUrl: "https://docs.athiangames.com/doc_artofshader",
    videoId: "WApWjoeoubw",
    bannerImage: "/images/products/art-of-shader-distortion-glitches/aos_dg.png",
    thumbnail: "/images/products/art-of-shader-distortion-glitches/aos_dg_thumb.jpg",
    gallery: [
      "/images/products/art-of-shader-distortion-glitches/aos_dg.png",
      "/images/products/art-of-shader-distortion-glitches/aos_spp_features_ppmaterials.jpg",
      "/images/products/art-of-shader-distortion-glitches/aos_dg_multiplefunctionalities.jpg",
      "/images/products/art-of-shader-distortion-glitches/aos_spp_features_bgshading.jpg",
      "/images/products/art-of-shader-distortion-glitches/aos_spp_features_blueprintactor.jpg",
      "/images/products/art-of-shader-distortion-glitches/aos_dg_localizationwithniagara.jpg"
    ],
    features: [
      {
        title: "Customizable Post Process Shaders",
        description: "40 Different Types of Parameterized Distortion And Glitched Effects.",
        image: "/images/products/art-of-shader-distortion-glitches/aos_spp_features_ppmaterials.jpg"
      },
      {
        title: "Multiple Functionalities and usecases for every shader",
        description: "Each Effect can be used as Post Process Blendable Material, Niagara FX, and Mesh Material with World Displacement.",
        image: "/images/products/art-of-shader-distortion-glitches/aos_dg_multiplefunctionalities.jpg"
      },
      {
        title: "Background Shading via SceneDepth",
        description: "Separate out the MainObjects placed in the environment from the Background via SceneDepth. Apply different shader combination simultaneously to your main environment and background scene.",
        image: "/images/products/art-of-shader-distortion-glitches/aos_spp_features_bgshading.jpg"
      },
      {
        title: "AOS Blueprint Actor for Grouping and Combining",
        description: "The AOS Blueprint Actor for easily combining and grouping multiple Blendable Materials based on common properties",
        image: "/images/products/art-of-shader-distortion-glitches/aos_spp_features_blueprintactor.jpg"
      },
      {
        title: "Object Space Localization via Depth Stencil",
        description: "Object Space Localization allows you to apply the shaders only to certain objects, or exclude certain objects from given effects, via custom depth stencils",
        image: "/images/products/art-of-shader-distortion-glitches/aos_spp_features_oslocalizations.jpg"
      },
      {
        title: "Object Space Localization with Niagara",
        description: "Glitch and Distort individual Actors in Scene with the extremely powerful Niagara System",
        image: "/images/products/art-of-shader-distortion-glitches/aos_dg_localizationwithniagara.jpg"
      },
      {
        title: "ScreenSpace Localization",
        description: "ScreenSpace Localization lets you split the screen based on user defined shape and size, and apply multiple Blendable Materials simultaneously at different parts of the screen",
        image: "/images/products/art-of-shader-distortion-glitches/aos_spp_features_sslocalizations.jpg"
      },
      {
        title: "Runtime Examples",
        description: "AOSRuntime Blueprints and Widgets, including Dynamic UMG Based Color Wheel allows you to tweak and modify the post process materials at runtime",
        image: "/images/products/art-of-shader-distortion-glitches/aos_spp_features_runtimecontrols.jpg"
      }
    ]
  },
  "niagara-curves-and-surfaces": {
    id: "7",
    slug: "niagara-curves-and-surfaces",
    name: "Niagara Curves and Surfaces",
    topText: "Niagara Curves and Surfaces",
    bottomText: "Elevate your VFX to the next level with this pack of customizable geometrical shapes",
    summary: "Elevate your VFX to the next level with this pack of customizable geometrical shapes.",
    description: `The Asset Pack includes a collection of high quality Niagara FX that you can use as a starting point for your own creations. Additionally, the pack comes with a set of parameterized Module Scripts that can help you build custom FX from the ground up, allowing you to create effects that follow specific shapes and patterns.

With the Asset Pack, you'll have access to a range of Niagara FX that are ready to be customized and adapted to your needs. Whether you want to use them as is or modify them to fit your vision, you'll have plenty of options to choose from. And if you want to create your own FX from scratch, the included Module Scripts provide a solid foundation for building effects that adhere to a specific design. With this Asset Pack, you'll have all the tools you need to quickly and easily create stunning visual effects`,
    category: "vfx",
    engineVersions: ["UE 5.0+"],
    externalUrl: "https://www.unrealengine.com/marketplace/en-US/product/d967bdcc8ff94010acb5b84e9b82cce5",
    videoId: "tkIYZImGk84",
    bannerImage: "/images/products/niagara-curves-surfaces/cs_screenshot01.jpg",
    thumbnail: "/images/products/niagara-curves-surfaces/curvesandsurfaces_thumb.jpg",
    features: [
      {
        title: "High quality Niagara FX",
        description: "A selection of professional-grade visual effects that are ready to be used or customized in your projects",
        image: "/images/products/niagara-curves-surfaces/cs_feature_highqualityfx.jpg"
      },
      {
        title: "Customization options",
        description: "The ability to tweak and adjust the included FX to suit your specific needs.",
        image: "/images/products/niagara-curves-surfaces/cs_feature_customization.jpg"
      },
      {
        title: "Module Scripts",
        description: "A set of parameterized scripts that can be used as the building blocks for creating custom FX from scratch.",
        image: "/images/products/niagara-curves-surfaces/cs_feature_modulescripts.jpg"
      },
      {
        title: "Quick and easy creation",
        description: "The Asset Pack provides you with the Emitters and corresponding Niagara Systems derived from them, as starting points to quickly start developing your own FX from a given shape.",
        image: "/images/products/niagara-curves-surfaces/cs_feature_easycreation.jpg"
      }
    ]
  },
  "runtime-fbx-import": {
    id: "8",
    slug: "runtime-fbx-import",
    name: "Runtime FBX Import for Unreal Engine",
    topText: "Runtime FBX Import for Unreal Engine",
    bottomText: "Asynchronously Import FBX files in your Unreal projects, in runtime.",
    summary: "Asynchronously Import FBX files in your Unreal projects, in runtime",
    description: "With this plugin, you can import FBX files along with all the textures and color values. Highly detailed FBX scenes can be loaded very fast, and grouping of a single file into Nodes and Material sections further allows you to generate an entire scene comprising of various interactive actors, from a single FBX file.",
    category: "tools",
    engineVersions: ["UE 4.27", "UE 5.0+"],
    externalUrl: "https://www.unrealengine.com/marketplace/en-US/slug/runtime-fbx-import-asynchronous",
    documentationUrl: "https://docs.athiangames.com/doc_fbximport",
    videoId: "qrB7rDunSrM",
    thumbnail: "/images/products/runtime-fbx-import/fbximport.png",
    features: [
      {
        title: "Asynchronously Import FBX files in runtime",
        description: "Import FBX Files from your hard drive to your Unreal Project in Runtime. The process is fully asynchronous, ensuring the game thread is not blocked, so that you can perfrom other operations, like displaying a progress bar, while the FBX is being loaded.",
        image: "/images/products/runtime-fbx-import/rfbxi_features_asynchronousimport.jpg",
        learnMoreUrl: "https://docs.athiangames.com/doc_fbximport#TheImportFunction"
      },
      {
        title: "Auto Import Textures",
        description: "Relevant Textures(Diffuse, Normal, Specular, Opacity) are auto imported with the mesh and can be applied to the generated Procedural Mesh Components, each unique to a material index and is a child of a specific node, as read from the source file.",
        image: "/images/products/runtime-fbx-import/rfbxi_features_importtextures.jpg"
      },
      {
        title: "Custom collisions",
        description: "Custom collisions can be applied in the generated mesh component via UCX_ prefix as read from the source file.",
        image: "/images/products/runtime-fbx-import/rfbxi_features_customcollisions.jpg",
        learnMoreUrl: "https://docs.athiangames.com/doc_fbximport#CreatingCollisions"
      },
      {
        title: "Changeable Material Property",
        description: "Built in support for designing changeable material property layout for every Mesh Component.",
        image: "/images/products/runtime-fbx-import/rfbxi_features_changeablematerial.jpg",
        learnMoreUrl: "https://docs.athiangames.com/doc_fbximport#UsingParameterizedMaterials"
      },
      {
        title: "Custom FBX Actor",
        description: "Every FBX scene imported is represented by a custom actor which hosts all the Procedural Mesh Components generated from the nodes read from the source file. Hence every FBX scene can have its own set of custom logic, allowing user to implement this plugin in number of various scenarios, from importing larger scenes, to interactive smaller props like weapons, barrels, etc.",
        image: "/images/products/runtime-fbx-import/rfbxi_features_customfbxactor.jpg"
      },
      {
        title: "Load and Save System",
        description: "Load and Save System implemented for storing the Imported FBX Meshes in desired location in hard drive, and loading it without importing it all over again, in the next session.",
        image: "/images/products/runtime-fbx-import/rfbxi_features_loadingandsaving.jpg",
        learnMoreUrl: "https://docs.athiangames.com/doc_fbximport#LoadingAndSaving"
      }
    ]
  },
  "art-of-shader-advanced-distortion": {
    id: "4",
    slug: "art-of-shader-advanced-distortion",
    name: "Art Of Shader - Advanced Distortion",
    topText: "Art Of Shader - Advanced Distortion",
    bottomText: "The ultimate tool for adding dynamic and visually stunning distortions to your Unreal Engine projects.",
    summary: "A series of customizable Shaders and Niagara FX that gives distorted and glitched effects to your actors and scenes.",
    description: `The Art of Shader - Advanced Distortion pack includes a wide range of effects, from subtle distortions to intense and chaotic effects, making it suitable for a variety of applications and genres. The pack features a powerful and intuitive interface, allowing you to easily adjust the distortion strength, color, noise, and other parameters with just a few clicks.

Whether you're creating a futuristic sci-fi world, a creepy horror game, or just want to add a touch of style to your scenes, the Art of Shader - Advanced Distortion pack has got you covered. The materials are highly optimized and easy to use, allowing you to quickly apply the effects to your actors and scenes without sacrificing performance.`,
    category: "vfx",
    engineVersions: ["UE 4.27", "UE 5.0+"],
    externalUrl: "https://www.unrealengine.com/marketplace/en-US/product/art-of-shader-advanced-distortion",
    documentationUrl: "https://docs.athiangames.com/doc_artofshader",
    videoId: "S9oDuFZA0Lo",
    bannerImage: "/images/products/art-of-shader-advanced-distortion/aos_ad_screenshot01.jpg",
    thumbnail: "/images/products/art-of-shader-advanced-distortion/aos_ad_thumbnail.png",
    features: [
      {
        title: "Customizable Post Process Shaders",
        description: "40 Different Types of Parameterized Distortion And Glitched Effects.",
        image: "/images/products/art-of-shader-advanced-distortion/aos_spp_features_ppmaterials.jpg"
      },
      {
        title: "Multiple Functionalities and usecases for every shader",
        description: "Each Effect can be used as Post Process Blendable Material, Niagara FX, and Mesh Material with World Displacement.",
        image: "/images/products/art-of-shader-advanced-distortion/aos_dg_multiplefunctionalities.jpg"
      },
      {
        title: "Background Shading via SceneDepth",
        description: "Separate out the MainObjects placed in the environment from the Background via SceneDepth. Apply different shader combination simultaneously to your main environment and background scene.",
        image: "/images/products/art-of-shader-advanced-distortion/aos_spp_features_bgshading.jpg"
      },
      {
        title: "AOS Blueprint Actor for Grouping and Combining",
        description: "The AOS Blueprint Actor for easily combining and grouping multiple Blendable Materials based on common properties",
        image: "/images/products/art-of-shader-advanced-distortion/aos_spp_features_blueprintactor.jpg"
      },
      {
        title: "Object Space Localization via Depth Stencil",
        description: "Object Space Localization allows you to apply the shaders only to certain objects, or exclude certain objects from given effects, via custom depth stencils",
        image: "/images/products/art-of-shader-advanced-distortion/aos_spp_features_oslocalizations.jpg"
      },
      {
        title: "Object Space Localization with Niagara",
        description: "Glitch and Distort individual Actors in Scene with the extremely powerful Niagara System",
        image: "/images/products/art-of-shader-advanced-distortion/aos_dg_localizationwithniagara.jpg"
      },
      {
        title: "ScreenSpace Localization",
        description: "ScreenSpace Localization lets you split the screen based on user defined shape and size, and apply multiple Blendable Materials simultaneously at different parts of the screen",
        image: "/images/products/art-of-shader-advanced-distortion/aos_spp_features_sslocalizations.jpg"
      },
      {
        title: "Runtime Examples",
        description: "AOSRuntime Blueprints and Widgets, including Dynamic UMG Based Color Wheel allows you to tweak and modify the post process materials at runtime",
        image: "/images/products/art-of-shader-advanced-distortion/aos_spp_features_runtimecontrols.jpg"
      }
    ]
  },
  "art-of-shader-film-and-special-effects": {
    id: "5",
    slug: "art-of-shader-film-and-special-effects",
    name: "Art Of Shader - Film And Special Effects",
    topText: "Art Of Shader - Film And Special Effects",
    bottomText: "Series of customizable Post Process Materials that can be combined, blended, grouped and localized to give advanced and useful post process effects to your scene.",
    summary: "Transform your scene into a cinematic visual experience with a series of highly customizable post process materials.",
    description: `Art of Shader - Film and Special Effects is a pack of 47 Post Process Blendable Materials that you can customize and tweak to give a desired post process effect to your scene. The Blueprint Actors facilitate the easy combining, blending and grouping of the Post process materials based on certain common properties. From simple color tone effects including SplitTone, LinearTone, ColorShift, ACESToneMapping and Sepia, to advanced special effects including RainShader, Wobbly, DisplacedGlass, Ripple, Camouflage, NightVision and many more, choose, combine and customize via the parameterized material instances to suit your style.`,
    category: "vfx",
    engineVersions: ["UE 4.27", "UE 5.0+"],
    externalUrl: "https://www.unrealengine.com/marketplace/en-US/product/art-of-shader-film-and-special-effects",
    documentationUrl: "https://docs.athiangames.com/doc_artofshader",
    videoId: "bGBKn4-K3rQ",
    bannerImage: "/images/products/art-of-shader-film-special-effects/aos_stylizedpostprocess_screensho08.jpg",
    thumbnail: "/images/products/art-of-shader-film-special-effects/aos_fse_thumb.png",
    features: [
      {
        title: "Parameterized Post Process Blendable Materials",
        description: "47 highly customizable post process materials for cinematic effects.",
        image: "/images/products/art-of-shader-film-special-effects/aos_spp_features_ppmaterials.jpg"
      },
      {
        title: "Background Shading Via SceneDepth",
        description: "Separate out the MainObjects placed in the environment from the Background via SceneDepth. Apply different shader combination simultaneously to your main environment and background scene.",
        image: "/images/products/art-of-shader-film-special-effects/aos_spp_features_bgshading.jpg"
      },
      {
        title: "AOS Blueprint Actor for Grouping and Combining",
        description: "The AOS Blueprint Actor for easily combining and grouping multiple Blendable Materials based on common properties",
        image: "/images/products/art-of-shader-film-special-effects/aos_spp_features_blueprintactor.jpg"
      },
      {
        title: "Object Space Localization",
        description: "Object Space Localization allows you to apply the shaders only to certain objects, or exclude certain objects from given effects, via custom depth stencils",
        image: "/images/products/art-of-shader-film-special-effects/aos_spp_features_oslocalizations.jpg"
      },
      {
        title: "ScreenSpace Localization",
        description: "ScreenSpace Localization lets you split the screen based on user defined shape and size, and apply multiple Blendable Materials simultaneously at different parts of the screen",
        image: "/images/products/art-of-shader-film-special-effects/aos_spp_features_sslocalizations.jpg"
      },
      {
        title: "Runtime Examples",
        description: "AOSRuntime Blueprints and Widgets, including Dynamic UMG Based Color Wheel allows you to tweak and modify the post process materials at runtime",
        image: "/images/products/art-of-shader-film-special-effects/aos_spp_features_runtimecontrols.jpg"
      }
    ]
  },
  "art-of-shader-stylized-post-process": {
    id: "6",
    slug: "art-of-shader-stylized-post-process",
    name: "Art Of Shader - Stylized Post Process",
    topText: "Art Of Shader - Stylized Post Process",
    bottomText: "The ultimate Stylized Post Process Effect pack, with 40 Materials that can be combined and blended to give your scene a unique stylized look.",
    summary: "Give a unique stylized look to your actors and scenes with this customizable Post Process Shader Pack",
    description: `Art of Shader - Stylized Post Process is a pack of 40 Post Process Blendable Materials that you customize and tweak to create a unique stylized look for your scene. The Blueprint Actors facilitate the easy combining, blending and grouping of the Post process materials based on certain common properties. From WaterColor, OilPaint, Aquarelle, Cartoon, ComicBook, CelShaded and many more Effects, choose, combine and customize via the parameterized material instances to suit your style.`,
    category: "vfx",
    engineVersions: ["UE 4.27", "UE 5.0+"],
    externalUrl: "https://www.unrealengine.com/marketplace/en-US/product/art-of-shader-stylized-post-process",
    documentationUrl: "https://docs.athiangames.com/doc_artofshader",
    videoId: "Bpvj075xnkA",
    bannerImage: "/images/products/art-of-shader-stylized-post-process/aos_stylizedpostprocess_screensho08.jpg",
    thumbnail: "/images/products/art-of-shader-stylized-post-process/aos_stylizedpostprocess_thumb.png",
    features: [
      {
        title: "Customizable Stylized Post Process Shaders",
        description: "40 Stylized Post Process Blendable Materials, divided into 26 MainShaders and 11 SceneShaders, to give a unique stylized post process effect to your scene.",
        image: "/images/products/art-of-shader-stylized-post-process/aos_spp_features_ppmaterials.jpg"
      },
      {
        title: "Background Shading Via SceneDepth",
        description: "Separate out the MainObjects placed in the environment from the Background via SceneDepth. Apply different shader combination simultaneously to your main environment and background scene.",
        image: "/images/products/art-of-shader-stylized-post-process/aos_spp_features_bgshading.jpg"
      },
      {
        title: "AOS Blueprint Actor for Grouping and Combining",
        description: "The AOS Blueprint Actor for easily combining and grouping multiple Blendable Materials based on common properties",
        image: "/images/products/art-of-shader-stylized-post-process/aos_spp_features_blueprintactor.jpg"
      },
      {
        title: "Object Space Localization",
        description: "Object Space Localization allows you to apply the shaders only to certain objects, or exclude certain objects from given effects, via custom depth stencils",
        image: "/images/products/art-of-shader-stylized-post-process/aos_spp_features_oslocalizations.jpg"
      },
      {
        title: "ScreenSpace Localization",
        description: "ScreenSpace Localization lets you split the screen based on user defined shape and size, and apply multiple Blendable Materials simultaneously at different parts of the screen",
        image: "/images/products/art-of-shader-stylized-post-process/aos_spp_features_sslocalizations.jpg"
      },
      {
        title: "Runtime Examples",
        description: "AOSRuntime Blueprints and Widgets, including Dynamic UMG Based Color Wheel allows you to tweak and modify the post process materials at runtime",
        image: "/images/products/art-of-shader-stylized-post-process/aos_spp_features_runtimecontrols.jpg"
      }
    ]
  },
  "volumetric-clouds-and-nebula": {
    id: "9",
    slug: "volumetric-clouds-and-nebula",
    name: "Volumetric Clouds and Nebula",
    topText: "Volumetric Clouds and Nebula",
    bottomText: "Create stunning volumetric clouds and nebula effects with this highly customizable system for space and atmospheric scenes.",
    summary: "Create stunning volumetric clouds and nebula effects with this highly customizable system.",
    description: `Volumetric Clouds and Nebula is a comprehensive VFX system for creating breathtaking space environments and atmospheric effects in Unreal Engine. Using advanced raymarching techniques and optimized shaders, this asset allows you to generate realistic volumetric clouds, colorful nebulae, and cosmic gas formations.

Perfect for sci-fi games, space simulators, and cinematic projects that require high-quality atmospheric effects. The system is fully customizable with parameters for density, color gradients, lighting interaction, and animation.`,
    category: "vfx",
    price: 39.99,
    engineVersions: ["UE 5.0+"],
    externalUrl: "https://www.fab.com/listings/3c902769-c907-4901-bb98-dfd9e1c5cf53",
    videoId: "",
    thumbnail: "/images/products/volumetric-clouds-nebula/thumbnail.jpg",
    bannerImage: "/images/products/volumetric-clouds-nebula/thumbnail.jpg",
    features: [
      {
        title: "Volumetric Raymarching",
        description: "Advanced raymarching technique for realistic volumetric rendering of clouds and nebulae.",
        image: "/images/products/volumetric-clouds-nebula/thumbnail.jpg"
      },
      {
        title: "Customizable Colors and Density",
        description: "Full control over color gradients, density distribution, and opacity for unique visual effects.",
        image: "/images/products/volumetric-clouds-nebula/thumbnail.jpg"
      },
      {
        title: "Dynamic Lighting Integration",
        description: "Realistic light scattering and absorption for authentic volumetric lighting effects.",
        image: "/images/products/volumetric-clouds-nebula/thumbnail.jpg"
      },
      {
        title: "Animation Controls",
        description: "Built-in animation parameters for flowing, swirling nebula movements.",
        image: "/images/products/volumetric-clouds-nebula/thumbnail.jpg"
      }
    ]
  },
  "procedural-skybox": {
    id: "12",
    slug: "procedural-skybox",
    name: "Procedural Skybox",
    topText: "Procedural Skybox",
    bottomText: "Fully procedural and customizable skybox system with day/night cycle support.",
    summary: "Fully procedural and customizable skybox system with day/night cycle support.",
    description: `Procedural Skybox is a complete skybox solution that generates beautiful skies entirely through procedural techniques. No static textures required - everything from clouds to atmospheric scattering is generated in real-time with full control over all parameters.

Features include dynamic day/night cycles, customizable star fields, procedural clouds, sun and moon positioning, and atmospheric effects. Perfect for games, simulations, and any project requiring dynamic sky conditions.`,
    category: "vfx",
    price: 29.99,
    engineVersions: ["UE 5.0+"],
    externalUrl: "https://www.fab.com/sellers/Athian%20Games",
    videoId: "",
    thumbnail: "/images/products/procedural-skybox/thumbnail.jpg",
    bannerImage: "/images/products/procedural-skybox/thumbnail.jpg",
    gallery: [
      "/images/products/procedural-skybox/media_01.jpg",
      "/images/products/procedural-skybox/media_02.jpg",
      "/images/products/procedural-skybox/feature_01.jpg",
      "/images/products/procedural-skybox/feature_02.jpg",
      "/images/products/procedural-skybox/feature_03.jpg"
    ],
    features: [
      {
        title: "Fully Procedural Generation",
        description: "All sky elements are generated procedurally - no baked textures required.",
        image: "/images/products/procedural-skybox/feature_01.jpg"
      },
      {
        title: "Day/Night Cycle",
        description: "Built-in time of day system with smooth transitions between day, sunset, night, and sunrise.",
        image: "/images/products/procedural-skybox/feature_02.jpg"
      },
      {
        title: "Procedural Clouds",
        description: "Customizable cloud layers with density, coverage, and animation controls.",
        image: "/images/products/procedural-skybox/feature_03.jpg"
      },
      {
        title: "Atmospheric Scattering",
        description: "Physically-based atmospheric scattering for realistic horizon colors and sky gradients.",
        image: "/images/products/procedural-skybox/media_01.jpg"
      }
    ]
  },
  "volumetric-black-hole": {
    id: "13",
    slug: "volumetric-black-hole",
    name: "Volumetric Black Hole",
    topText: "Volumetric Black Hole",
    bottomText: "Realistic volumetric black hole effect with accretion disk, gravitational lensing and distortion.",
    summary: "Realistic volumetric black hole effect with accretion disk, gravitational lensing and distortion.",
    description: `Volumetric Black Hole brings the awe-inspiring visuals of cosmic singularities to your Unreal Engine projects. This asset creates scientifically-inspired black hole effects complete with glowing accretion disks, gravitational lensing distortion, and event horizon rendering.

Ideal for sci-fi games, educational applications, and any project that needs to visualize one of the universe's most fascinating phenomena. Fully customizable parameters allow you to adjust the black hole's size, accretion disk colors, distortion intensity, and more.`,
    category: "vfx",
    price: 34.99,
    engineVersions: ["UE 5.0+"],
    externalUrl: "https://www.fab.com/sellers/Athian%20Games",
    videoId: "",
    thumbnail: "/images/products/volumetric-black-hole/thumbnail.jpg",
    bannerImage: "/images/products/volumetric-black-hole/thumbnail.jpg",
    gallery: [
      "/images/products/volumetric-black-hole/media_01.jpg",
      "/images/products/volumetric-black-hole/media_02.jpg",
      "/images/products/volumetric-black-hole/media_03.jpg",
      "/images/products/volumetric-black-hole/media_04.jpg",
      "/images/products/volumetric-black-hole/media_05.jpg",
      "/images/products/volumetric-black-hole/media_06.jpg",
      "/images/products/volumetric-black-hole/media_07.jpg",
      "/images/products/volumetric-black-hole/media_08.jpg",
      "/images/products/volumetric-black-hole/media_09.jpg",
      "/images/products/volumetric-black-hole/media_10.jpg",
      "/images/products/volumetric-black-hole/media_11.jpg"
    ],
    features: [
      {
        title: "Accretion Disk",
        description: "Glowing accretion disk with customizable colors, intensity, and rotation speed.",
        image: "/images/products/volumetric-black-hole/media_01.jpg"
      },
      {
        title: "Gravitational Lensing",
        description: "Screen-space distortion simulating the light-bending effect of extreme gravity.",
        image: "/images/products/volumetric-black-hole/media_02.jpg"
      },
      {
        title: "Event Horizon Rendering",
        description: "Realistic black sphere representing the point of no return with proper shadowing.",
        image: "/images/products/volumetric-black-hole/media_03.jpg"
      },
      {
        title: "Customizable Parameters",
        description: "Full control over size, colors, distortion strength, and visual effects.",
        image: "/images/products/volumetric-black-hole/media_04.jpg"
      }
    ]
  },
  "procedural-galaxy-system": {
    id: "14",
    slug: "procedural-galaxy-system",
    name: "Procedural Galaxy System",
    topText: "Procedural Galaxy System",
    bottomText: "Generate stunning procedural galaxies with spiral arms, star clusters and cosmic dust.",
    summary: "Generate stunning procedural galaxies with spiral arms, star clusters and cosmic dust.",
    description: `Procedural Galaxy System allows you to create beautiful, fully procedural galaxy visualizations in Unreal Engine. Generate spiral galaxies, elliptical galaxies, and irregular formations with customizable parameters for arm count, star density, color distributions, and cosmic dust.

Perfect for space games, galaxy maps, loading screens, and any project requiring stunning cosmic visuals. The system uses optimized Niagara particles and custom shaders for high performance even with millions of visible stars.`,
    category: "vfx",
    price: 49.99,
    engineVersions: ["UE 5.0+"],
    externalUrl: "https://www.fab.com/sellers/Athian%20Games",
    videoId: "",
    thumbnail: "/images/products/procedural-galaxy-system/thumbnail.jpg",
    bannerImage: "/images/products/procedural-galaxy-system/thumbnail.jpg",
    gallery: [
      "/images/products/procedural-galaxy-system/media_01.jpg",
      "/images/products/procedural-galaxy-system/media_02.jpg",
      "/images/products/procedural-galaxy-system/media_03.jpg",
      "/images/products/procedural-galaxy-system/media_04.jpg",
      "/images/products/procedural-galaxy-system/media_05.jpg",
      "/images/products/procedural-galaxy-system/media_06.jpg",
      "/images/products/procedural-galaxy-system/media_07.jpg",
      "/images/products/procedural-galaxy-system/media_08.jpg",
      "/images/products/procedural-galaxy-system/media_09.jpg",
      "/images/products/procedural-galaxy-system/media_10.jpg",
      "/images/products/procedural-galaxy-system/media_11.jpg",
      "/images/products/procedural-galaxy-system/media_12.jpg",
      "/images/products/procedural-galaxy-system/media_13.jpg",
      "/images/products/procedural-galaxy-system/media_14.jpg"
    ],
    features: [
      {
        title: "Spiral Arm Generation",
        description: "Customizable spiral arm count, tightness, and star distribution patterns.",
        image: "/images/products/procedural-galaxy-system/media_01.jpg"
      },
      {
        title: "Star Cluster Simulation",
        description: "Dense star clusters and globular formations with realistic density falloff.",
        image: "/images/products/procedural-galaxy-system/media_02.jpg"
      },
      {
        title: "Cosmic Dust and Nebulae",
        description: "Integrated dust lanes and nebular regions for added visual depth.",
        image: "/images/products/procedural-galaxy-system/media_03.jpg"
      },
      {
        title: "High Performance",
        description: "Optimized Niagara particles handle millions of stars with minimal performance impact.",
        image: "/images/products/procedural-galaxy-system/media_04.jpg"
      }
    ]
  },
  "aos-toons": {
    id: "10",
    slug: "aos-toons",
    name: "AOS Toons",
    topText: "A set of post-process blendable materials designed to give your Unreal Engine projects a unique toon-style look.",
    bottomText: "Transform your projects with stylized toon shading",
    summary: "A set of post-process blendable materials designed to give your Unreal Engine projects a unique toon-style look.",
    description: `The Art of Shader: Toons is a series of post-process blendable materials that brings a unique and visually stunning toon-style look to your Unreal Engine projects. With this asset, you can easily create a range of stylized environments, characters, and scenes that stand out from the crowd and capture the attention of your audience.

It offers a wealth of customization options, allowing you to fine-tune the intensity of the toon effect to create the perfect look for your project. Whether you're looking to create a bold and vibrant cartoon-style world or a more subdued and subtle toon effect, this asset has you covered. You can adjust the thickness of the outlines, choose from a variety of color schemes and textures, and experiment with different lighting settings to achieve the exact look and feel that you're after.

In addition to its visual appeal, this asset pack is also highly performant. The materials are optimized for use in real-time rendering environments, ensuring that your projects run smoothly and efficiently on a wide range of hardware configurations.`,
    category: "materials",
    engineVersions: ["UE 4.27", "UE 5.0+"],
    externalUrl: "https://www.unrealengine.com/marketplace/en-US/product/aos-toons",
    bannerImage: "/images/products/aos-toons/aos_toons_cover.png",
    thumbnail: "/images/products/aos-toons/aos_toons_thumb.png",
    features: [
      {
        title: "Customizable Post Process Shaders",
        description: "16 Different Types of Parameterized Post Process Effects.",
        image: "/images/products/aos-toons/aos_toons_feauture01.png"
      }
    ]
  },
  "art-of-shader-megapack": {
    id: "11",
    slug: "art-of-shader-megapack",
    name: "Art Of Shader - Megapack",
    topText: "Art Of Shader - Megapack",
    bottomText: "The complete Art of Shader collection - All 5 packs in one bundle with over 150 post-process materials",
    summary: "Get the complete Art of Shader collection with all 5 packs bundled together. Over 150 customizable post-process materials for distortion, glitches, film effects, stylized looks, and toon shading.",
    description: `The Art of Shader Megapack brings together all five individual Art of Shader products into one comprehensive bundle. This complete collection provides you with over 150 highly customizable post-process materials, Niagara FX, and shader effects to transform your Unreal Engine projects.

Whether you're creating futuristic sci-fi worlds, horror games, stylized artistic environments, or cinematic experiences, this megapack has everything you need. All materials are optimized for real-time rendering and include extensive customization options, blueprint actors for combining effects, and support for both object-space and screen-space localization.

This bundle includes all features from every individual pack, giving you the ultimate toolkit for visual effects in Unreal Engine.`,
    category: "vfx",
    engineVersions: ["UE 4.27", "UE 5.0+"],
    externalUrl: "https://www.unrealengine.com/marketplace/en-US/product/art-of-shader-stylized-post-process-pack",
    documentationUrl: "https://docs.athiangames.com/doc_artofshader",
    videoId: "WApWjoeoubw",
    bannerImage: "/images/products/art-of-shader-megapack/aos_dg_thumb.jpg",
    thumbnail: "/images/products/art-of-shader-megapack/aos_dg_thumb.jpg",
    isMegapack: true,
    subProducts: [
      {
        slug: "art-of-shader-distortion-and-glitches",
        name: "Art Of Shader - Distortion And Glitches",
        description: "40 customizable distortion and glitch effects",
        thumbnail: "/images/products/art-of-shader-distortion-glitches/aos_dg_thumb.jpg"
      },
      {
        slug: "art-of-shader-advanced-distortion",
        name: "Art Of Shader - Advanced Distortion",
        description: "40 advanced distortion shaders with multiple functionalities",
        thumbnail: "/images/products/art-of-shader-advanced-distortion/aos_ad_thumbnail.png"
      },
      {
        slug: "art-of-shader-film-and-special-effects",
        name: "Art Of Shader - Film And Special Effects",
        description: "47 post-process materials for cinematic effects",
        thumbnail: "/images/products/art-of-shader-film-special-effects/aos_fse_thumb.png"
      },
      {
        slug: "art-of-shader-stylized-post-process",
        name: "Art Of Shader - Stylized Post Process",
        description: "40 stylized post-process materials for unique artistic looks",
        thumbnail: "/images/products/art-of-shader-stylized-post-process/aos_stylizedpostprocess_thumb.png"
      },
      {
        slug: "aos-toons",
        name: "AOS Toons",
        description: "16 toon-style post-process effects for cel-shaded visuals",
        thumbnail: "/images/products/aos-toons/aos_toons_thumb.png"
      }
    ],
    features: []
  },
  "tile-variation-material": {
    id: "15",
    slug: "tile-variation-material",
    name: "Tile Variation Material",
    topText: "Tile Variation Material",
    bottomText: "Create realistic and varied tiling textures without visible repetition patterns",
    summary: "Advanced material system that eliminates visible tiling patterns in your textures for more realistic environments.",
    description: `Tile Variation Material is a powerful material system designed to eliminate the visible repetition patterns that occur when tiling textures across large surfaces. Using advanced techniques like stochastic sampling, color variation, and procedural noise, this asset creates natural-looking variations in your materials.

Perfect for large outdoor environments, interior floors, walls, and any surface where texture repetition would be noticeable. The system is fully customizable and optimized for real-time rendering, making it suitable for both games and architectural visualization.`,
    category: "materials",
    engineVersions: ["UE 4.27", "UE 5.0+"],
    externalUrl: "https://www.fab.com/sellers/Athian%20Games",
    thumbnail: "/images/products/tile-variation-material/Tex_TileVariation01.png",
    features: [
      {
        title: "Stochastic Tiling",
        description: "Advanced sampling technique that randomizes texture lookups to eliminate visible seams and patterns.",
        image: "/images/products/tile-variation-material/Tex_TileVariation01.png"
      },
      {
        title: "Color Variation",
        description: "Procedural color shifts that add natural variation to your tiled surfaces.",
        image: "/images/products/tile-variation-material/Tex_TileVariation01.png"
      },
      {
        title: "Easy Integration",
        description: "Simple to integrate with your existing materials and texture workflows.",
        image: "/images/products/tile-variation-material/Tex_TileVariation01.png"
      }
    ]
  },
  "runtime-asset-import": {
    id: "16",
    slug: "runtime-asset-import",
    name: "Runtime Asset Import",
    topText: "Runtime Asset Import",
    bottomText: "Import various 3D assets and textures at runtime in your Unreal Engine projects",
    summary: "Comprehensive runtime asset import solution supporting multiple file formats for dynamic content loading.",
    description: `Runtime Asset Import is an extended solution for importing various 3D assets and textures at runtime in your Unreal Engine projects. Building upon the concepts of runtime FBX import, this system supports additional file formats and provides more flexibility for dynamic content loading.

Ideal for applications like architectural visualization, product configurators, user-generated content systems, and any project requiring dynamic asset loading from external sources.`,
    category: "tools",
    engineVersions: ["UE 4.27", "UE 5.0+"],
    externalUrl: "https://www.fab.com/sellers/Athian%20Games",
    thumbnail: "/images/products/runtime-asset-import/assetimportcover.jpg",
    features: [
      {
        title: "Multiple Format Support",
        description: "Import various 3D file formats including FBX, OBJ, and more at runtime.",
        image: "/images/products/runtime-asset-import/assetimportcover.jpg"
      },
      {
        title: "Texture Auto-Import",
        description: "Automatically import and apply associated textures with your 3D models.",
        image: "/images/products/runtime-asset-import/assetimportcover.jpg"
      },
      {
        title: "Async Loading",
        description: "Non-blocking asynchronous import process that keeps your game responsive.",
        image: "/images/products/runtime-asset-import/assetimportcover.jpg"
      }
    ]
  },
  "dynamic-mesh-occluder": {
    id: "18",
    slug: "dynamic-mesh-occluder",
    name: "Dynamic Mesh Occluder",
    topText: "Dynamic Mesh Occluder",
    bottomText: "Strip hidden body geometry under clothing in one click — zero overdraw, zero runtime cost.",
    summary: "Automatically detect and bake away body mesh triangles hidden under clothing, then swap the body mesh at runtime to eliminate GPU overdraw.",
    description: `Dynamic Mesh Occluder is an editor tool that removes body geometry hidden inside clothing — improving rendering performance without any complicated setup at runtime.

When a character wears clothing, the body underneath is still rendered by the GPU even though the player never sees it. This plugin lets you detect and bake away those hidden triangles in the editor, then automatically swap the body mesh at runtime to the trimmed version — so the GPU never has to render what isn't visible.

The tool ships with a standalone editor window, a live 3D preview viewport, fully tunable detection settings, a paint-over mode for manual corrections, and a runtime Blueprint component that handles automatic mesh swapping via a mapping table. Multiple outfit combinations can be stored in a single data asset — one asset covers your whole character.`,
    category: "plugins",
    engineVersions: ["UE 5.7"],
    externalUrl: "",
    documentationUrl: "/docs/dynamic-mesh-occluder",
    thumbnail: "/images/products/dynamic-mesh-occluder/thumbnail.jpg",
    bannerImage: "/images/products/dynamic-mesh-occluder/thumbnail.jpg",
    gallery: [
      "/images/products/dynamic-mesh-occluder/thumbnail.jpg",
    ],
    features: [
      {
        title: "Auto Occlusion Detection",
        description: "Multi-angle raycasting with Fibonacci sphere sampling automatically detects which body triangles are hidden under clothing. Fully tunable settings let you dial in the result for any character and outfit combination.",
      },
      {
        title: "Manual Paint Override",
        description: "LMB to paint triangles hidden, Shift+LMB to restore them visible. Full undo/redo, brush radius control, invert and clear — correct edge artifacts in seconds without re-running detection.",
      },
      {
        title: "Multiple Outfits in One Asset",
        description: "Every save run appends a new entry to the same mapping table. One DA_BodyOcclusionMap covers your whole character — the runtime component picks the right occluded mesh automatically based on what the character is wearing.",
      },
      {
        title: "Blueprint-Ready Runtime Component",
        description: "Add UDynamicMeshOccluderComponent to your character, assign the mapping table, and call one Blueprint node when clothing changes. The plugin swaps the body mesh automatically — no manual mesh management needed.",
      },
      {
        title: "Live 3D Preview Viewport",
        description: "Inspect the body and clothing meshes together in a dockable 3D viewport. Toggle the hidden/visible mask overlay instantly. Clothing automatically matches the body skeleton pose for an accurate preview.",
      },
      {
        title: "Non-Destructive Workflow",
        description: "Your original skeletal mesh assets are never modified. The tool generates a new trimmed mesh asset and a separate mapping table, leaving your source data completely intact.",
      },
    ],
    isExternal: false,
    isFeatured: false,
  },
  "fabric-ai": {
    id: "17",
    slug: "fabric-ai",
    name: "FabricAI",
    topText: "FabricAI",
    bottomText: "Cross-language runtime asset generation and automation for Unreal Engine",
    summary: "A powerful cross-language Unreal Engine plugin that generates, applies, and customizes assets at runtime, featuring AI-powered automation and seamless Python integration.",
    description: `FabricAI is a next-generation Unreal Engine plugin that revolutionizes asset creation and management through intelligent runtime generation and cross-language automation. This powerful tool bridges the gap between Python's flexibility and Unreal Engine's robustness, enabling developers to generate materials, spawn objects, and automate complex pipelines without leaving the editor.

Built with modern game development workflows in mind, FabricAI provides a comprehensive suite of tools for runtime asset manipulation, including parameterized material creation, dynamic instance generation, and automated object spawning. The plugin features deep Python integration, allowing developers to leverage Python's extensive ecosystem for procedural content generation, batch processing, and custom tooling.

Whether you're building procedural worlds, implementing dynamic customization systems, or automating repetitive tasks, FabricAI provides the flexibility and power you need. With detailed logging, robust error handling, and an intuitive API, FabricAI streamlines your development process and unlocks new creative possibilities.`,
    category: "wip",
    price: 79.99,
    engineVersions: ["UE 5.7+"],
    externalUrl: "",
    documentationUrl: "",
    discordUrl: "https://discord.gg/MYwThQd4",
    videoId: "",
    demoVideos: [
      // Add demo video IDs here - these will be YouTube video IDs
      // Example: "dQw4w9WgXcQ"
    ],
    thumbnail: "/images/products/fabric-ai/thumbnail.jpg",
    bannerImage: "/images/products/fabric-ai/thumbnail.jpg",
    logo: "/images/products/fabric-ai/logo.png",
    gallery: [
      "/images/products/fabric-ai/logo.png",
      "/images/products/fabric-ai/thumbnail.jpg"
    ],
    features: [
      {
        title: "Automatic Layout Generation",
        description: "Intelligently generates and arranges UI layouts, level structures, and spatial configurations automatically. The system analyzes your design requirements and creates optimized layouts that adapt to different contexts, saving hours of manual placement and arrangement work.",
      },
      {
        title: "AI-Powered Automation",
        description: "Harness the power of artificial intelligence to automate complex development workflows. From intelligent asset selection to predictive behavior patterns, FabricAI learns from your projects and suggests optimizations, handles repetitive tasks, and accelerates your creative process through smart automation.",
      },
      {
        title: "Cross-Language Python Integration",
        description: "Seamlessly bridge Unreal Engine with Python's vast ecosystem. Execute Python scripts directly within your project, leverage powerful libraries for data processing, machine learning, and procedural generation, all while maintaining full access to Unreal's C++ and Blueprint functionality.",
      },
      {
        title: "Automated Object Spawning",
        description: "Deploy sophisticated object spawning systems with minimal setup. Define rules, patterns, and constraints, then let FabricAI handle the placement logic. Perfect for populating vast environments, creating dynamic encounters, or building procedurally generated worlds that feel handcrafted.",
      },
      {
        title: "Pipeline Automation",
        description: "Transform your development pipeline with end-to-end automation. From asset import and processing to build preparation and deployment, create custom automated workflows that eliminate manual steps. Chain operations together, set up triggers, and watch your pipeline handle the busywork while you focus on creativity.",
      },
      {
        title: "Multiple Language Model Support",
        description: "Choose from industry-leading AI models including Claude, OpenRouter, and GitHub Copilot. Switch between models based on your needs - use Claude for complex reasoning, OpenRouter for diverse model access, or GitHub Copilot for code generation. Each integration is optimized for Unreal Engine workflows, providing intelligent suggestions and automation tailored to game development.",
      }
    ],
    isExternal: false,
    isFeatured: true
  }
};

// Load product overrides from JSON file (admin edits)
function loadProductOverrides() {
  if (typeof window === 'undefined') {
    // Server-side: load from file
    try {
      const fs = require('fs');
      const path = require('path');
      const overridesPath = path.join(process.cwd(), 'data', 'product-overrides.json');
      
      if (fs.existsSync(overridesPath)) {
        const data = fs.readFileSync(overridesPath, 'utf-8');
        return JSON.parse(data);
      }
    } catch (error) {
      console.error('Failed to load product overrides:', error);
    }
  }
  return { products: {} };
}

// Merge base product data with admin overrides
function mergeProductWithOverrides(product: any) {
  const overrides = loadProductOverrides();
  const productOverride = overrides.products?.[product.slug];
  
  // If product is marked as deleted, return null
  if (productOverride?.isDeleted) {
    return null;
  }
  
  if (productOverride) {
    return { ...product, ...productOverride };
  }
  
  return product;
}

// Helper function to get product by slug
export function getProductBySlug(slug: string) {
  const product = productDetails[slug as keyof typeof productDetails] || null;
  if (!product) return null;
  
  const mergedProduct = mergeProductWithOverrides(product);
  return mergedProduct;
}

// Helper function to get product by ID
export function getProductById(id: string) {
  const product = Object.values(productDetails).find((p) => p.id === id) || null;
  if (!product) return null;
  
  const mergedProduct = mergeProductWithOverrides(product);
  return mergedProduct;
}

// Helper function to get all non-deleted products
export function getAllProducts() {
  const overrides = loadProductOverrides();
  
  return Object.values(productDetails)
    .map(product => {
      const productOverride = overrides.products?.[product.slug];
      
      // Skip deleted products
      if (productOverride?.isDeleted) {
        return null;
      }
      
      // Merge with overrides
      return productOverride ? { ...product, ...productOverride } : product;
    })
    .filter(Boolean); // Remove null values
}
