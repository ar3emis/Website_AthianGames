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
    engineVersions: [],
    externalUrl: "https://www.unrealengine.com/marketplace/en-US/product/minimap-map-and-navigation-system",
    documentationUrl: "/docs/minimap-map-and-navigation-system",
    videoId: "zTLjtnlbFjU",
    bannerImage: "/images/products/minimap/minimapcover.png",
    thumbnail: "/images/products/minimap/thumbnail_recreated.png",
    gallery: [
      "/images/products/minimap/minimapcover.png",
      "/images/products/minimap/feature-texture-based.png",
      "/images/products/minimap/feature-mapbounds-actor.png",
      "/images/products/minimap/feature-poi-datatable.png",
      "/images/products/minimap/feature-circular-rectangular.png",
      "/images/products/minimap/feature-texture-masking.png",
      "/images/products/minimap/feature-interactive-map.png",
      "/images/products/minimap/feature-navigation-waypoints.png",
      "/images/products/minimap/feature-opacity-mask.png"
    ],
    features: [
      {
        title: "Texture Based Minimap System",
        description: "Your map is mapped to a custom texture that you can either design externally or take a snapshot of the topview of your bounds area. Either way, Texture based minimap ensures fastest performance as it eliminates the need of using a scene capture component.",
        image: "/images/products/minimap/feature-texture-based.png"
      },
      {
        title: "Transition between multiple Map regions in same level",
        description: "The MapBounds Actor represents Bounds area corresponding to a given Minimap. So having more than one MapBounds in a scene indicates switching between multiple Minimaps depending on position of the player. This is very useful for large or open world scenes, where you often need to switch your Minimap while moving inside a different Bounds, like a cave, or a house interior.",
        image: "/images/products/minimap/feature-mapbounds-actor.png",
        learnMoreUrl: "/docs/minimap-map-and-navigation-system/mapbounds-actor"
      },
      {
        title: "Datatable driven Static and Dynamic Points of Interest",
        description: "The actors which are displayed as Icons in Minimap as well as Map, also known as the Points of Interest(POI), are defined in a Datatable, derived from the structure POIElement. The POIActors can either be static or dynamic, and is not limited to what it can represent. It can be a pickup item, an NPC, enemies, or simply a Fast Travel system, the applications are infinite.",
        image: "/images/products/minimap/feature-poi-datatable.png",
        learnMoreUrl: "/docs/minimap-map-and-navigation-system/poi-system"
      },
      {
        title: "Rectangular and Circular Minimap, with AutoRotate feature",
        description: "Control the Shape of your MInimap using the AllowCircleMask parameter in your Minimap UMG. This not only uses a circular opacity mask in the material, but it adjusts the positions of the Players and the Points of Interest accordingly, ensuring they stay within the bounding region of the minimap. The Auto Rotate feature allows the minimap to rotate along with the player camera.",
        image: "/images/products/minimap/feature-circular-rectangular.png",
        learnMoreUrl: "/docs/minimap-map-and-navigation-system/minimap-widget"
      },
      {
        title: "Minimap Texture masking for non rectangular Bounds",
        description: "Minimap Texture Masking ensures that your minimap can transition smoothly when player navigates in and out of it, and can be added to the corresponding MapBoundsActor placed in the Scene.",
        image: "/images/products/minimap/feature-texture-masking.png",
        learnMoreUrl: "/docs/minimap-map-and-navigation-system/advanced-features"
      },
      {
        title: "Interactive Map, with Zoom and Pan functionalities",
        description: "",
        image: "/images/products/minimap/feature-interactive-map.png"
      },
      {
        title: "Customizable Navigation system, allowing user to add one or many Navigation Markers in the world, to display the location of the destination",
        description: "",
        image: "/images/products/minimap/feature-navigation-waypoints.png"
      },
      {
        title: "Navigation Out of Bounds notification, to display custom markers when player camera view is not looking at the destination",
        description: "",
        image: "/images/products/minimap/feature-opacity-mask.png"
      }
    ]
  },
  "radar-system-with-minimap": {
    id: "23",
    slug: "radar-system-with-minimap",
    name: "Radar System with Minimap",
    topText: "Radar System with Minimap",
    bottomText: "Blueprint radar and minimap system for tracking actors, markers, and navigation targets.",
    summary: "Blueprint radar and minimap system for tracking actors, markers, and navigation targets.",
    description: `Radar System with Minimap is a Blueprint-focused gameplay UI product for showing tracked actors, points of interest, and navigation targets through a radar/minimap interface. It is designed for projects that need a fast Fab marketplace setup path with practical Blueprint controls for player-facing map feedback.`,
    category: "blueprints",
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/77159867-e5d9-43c0-b7d2-4fa78ffdca81",
    documentationUrl: "/docs/minimap-map-and-navigation-system",
    videoId: "zTLjtnlbFjU",
    bannerImage: "/images/products/radar-system-with-minimap/thumbnail_refined.png",
    thumbnail: "/images/products/radar-system-with-minimap/thumbnail_refined.png",
    gallery: [
      "/images/products/radar-system-with-minimap/fab_cover.jpg",
      "/images/products/minimap/minimapcover.png",
      "/images/products/minimap/minimap_texturebased.jpg",
      "/images/products/minimap/minimap_mapboundsactor.png",
      "/images/products/minimap/minimap_circularandrectangularmaps.jpg"
    ],
    features: [
      {
        title: "Blueprint Radar Display",
        description: "Show tracked actors and points of interest through a radar-style UI that can be driven from Blueprint.",
        image: "/images/products/radar-system-with-minimap/thumbnail_refined.png"
      },
      {
        title: "Minimap Markers",
        description: "Display player, target, and point-of-interest markers with a clear minimap workflow.",
        image: "/images/products/minimap/minimap_poielementtable.png"
      },
      {
        title: "Circular and Rectangular Layouts",
        description: "Use circular or rectangular map layouts depending on your HUD style.",
        image: "/images/products/minimap/minimap_circularandrectangularmaps.jpg"
      }
    ]
  },
  "treeview-for-umg": {
    id: "24",
    slug: "treeview-for-umg",
    name: "TreeView for UMG",
    topText: "TreeView for UMG",
    bottomText: "Create customizable tree views inside UMG with Blueprint-built nodes, custom row widgets, selection events, and expansion controls.",
    summary: "Blueprint-ready tree view widget with custom rows, nested nodes, selection, and expansion events.",
    description: `TreeView for UMG lets you build clean nested tree views directly inside Widget Blueprints. You can set up nodes in the Widget Designer, or build the node list from Blueprint at runtime and call Create Tree when your data is ready.

Use it for inventories, quest logs, settings pages, file browsers, skill trees, debug menus, editor-style tools, and any UI that needs expandable parent and child rows. Rows can use the default look, one shared custom widget, or different custom widgets for specific parents or node ids.`,
    category: "umg",
    price: null,
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/86b5e8eb-03a6-4b56-84b7-5853e2d8f16e",
    documentationUrl: "/docs/treeview-for-umg",
    videoId: "",
    thumbnail: "/images/products/treeview-for-umg/thumbnail.png",
    bannerImage: "/images/products/treeview-for-umg/banner.png",
    gallery: [
      "/images/products/treeview-for-umg/thumbnail.png",
      "/images/products/treeview-for-umg/banner.png",
      "/images/products/treeview-for-umg/fab_cover.png",
      "/images/products/treeview-for-umg/fab_main.jpg"
    ],
    features: [
      {
        title: "Designer or Blueprint Setup",
        description: "Create the tree in the Widget Designer, or fill the Tree Nodes array from Blueprint and call Create Tree at runtime.",
        image: "/images/products/treeview-for-umg/thumbnail.png"
      },
      {
        title: "Custom Row Widgets",
        description: "Use one default row widget for the whole tree, or assign different row widgets by parent id or node id.",
        image: "/images/products/treeview-for-umg/fab_cover.png"
      },
      {
        title: "Selection and Expansion Events",
        description: "React when a row is selected, expanded, collapsed, or generated so your UI can update immediately.",
        image: "/images/products/treeview-for-umg/banner.png"
      },
      {
        title: "Blueprint Control",
        description: "Expand, collapse, toggle, and select nodes from Blueprint for guided UI flows or gamepad-driven menus.",
        image: "/images/products/treeview-for-umg/thumbnail.png"
      },
      {
        title: "Per-Node Data",
        description: "Store display names, parent links, padding, and extra string values per node for flexible UI behavior.",
        image: "/images/products/treeview-for-umg/fab_main.jpg"
      },
      {
        title: "Style Controls",
        description: "Tune row style, text style, scrollbar style, tree padding, row padding, and expander visibility from the widget details.",
        image: "/images/products/treeview-for-umg/banner.png"
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
    category: "shaders",
    engineVersions: [],
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
    category: "shaders",
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/0223faf6-76e1-4049-ae3a-82ea1daa296f",
    documentationUrl: "/docs/art-of-shader-distortion-and-glitches",
    videoId: "WApWjoeoubw",
    bannerImage: "/images/products/art-of-shader-distortion-glitches/fab_cover.jpg",
    thumbnail: "/images/products/art-of-shader-distortion-glitches/aos_dg_thumbnail_clean.png",
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
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/51e915a1-7046-4737-8fde-3cf98d777401",
    videoId: "tkIYZImGk84",
    bannerImage: "/images/products/niagara-curves-surfaces/fab_cover.jpg",
    thumbnail: "/images/products/niagara-curves-surfaces/thumbnail_refined.png",
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
    category: "plugins",
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/45f2d0d9-ecdf-45ff-871d-85b16bc14ca7",
    documentationUrl: "/docs/runtime-fbx-import",
    videoId: "qrB7rDunSrM",
    thumbnail: "/images/products/runtime-fbx-import/thumbnail_recreated.png",
    features: [
      {
        title: "Asynchronously Import FBX files in runtime",
        description: "Import FBX Files from your hard drive to your Unreal Project in Runtime. The process is fully asynchronous, ensuring the game thread is not blocked, so that you can perfrom other operations, like displaying a progress bar, while the FBX is being loaded.",
        image: "/images/products/runtime-fbx-import/rfbxi_features_asynchronousimport.jpg",
        learnMoreUrl: "/docs/runtime-fbx-import/getting-started"
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
        learnMoreUrl: "/docs/runtime-fbx-import/collisions"
      },
      {
        title: "Changeable Material Property",
        description: "Built in support for designing changeable material property layout for every Mesh Component.",
        image: "/images/products/runtime-fbx-import/rfbxi_features_changeablematerial.jpg",
        learnMoreUrl: "/docs/runtime-fbx-import/materials"
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
        learnMoreUrl: "/docs/runtime-fbx-import/save-load"
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
    category: "shaders",
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/3546d4b0-84f7-494d-9f21-867ca5cea3e9",
    documentationUrl: "/docs/art-of-shader-advanced-distortion",
    videoId: "S9oDuFZA0Lo",
    bannerImage: "/images/products/art-of-shader-advanced-distortion/aos_ad_screenshot01.jpg",
    thumbnail: "/images/products/art-of-shader-advanced-distortion/aos_ad_thumbnail_clean.png",
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
    category: "shaders",
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/a494f18d-6db0-4b51-8525-bfeaf6efb749",
    documentationUrl: "/docs/art-of-shader-film-and-special-effects",
    videoId: "bGBKn4-K3rQ",
    bannerImage: "/images/products/art-of-shader-film-special-effects/fab_cover.jpg",
    thumbnail: "/images/products/art-of-shader-film-special-effects/aos_fse_thumbnail_clean.png",
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
    category: "shaders",
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/2a90a4b2-44d1-4150-be68-2b4cd53b869d",
    documentationUrl: "/docs/art-of-shader-stylized-post-process",
    videoId: "Bpvj075xnkA",
    bannerImage: "/images/products/art-of-shader-stylized-post-process/fab_cover.jpg",
    thumbnail: "/images/products/art-of-shader-stylized-post-process/aos_spp_thumbnail_recreated.png",
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
    category: "volumetric",
    price: 39.99,
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/3c902769-c907-4901-bb98-dfd9e1c5cf53",
    videoId: "",
    thumbnail: "/images/products/volumetric-clouds-nebula/thumbnail_refined.png",
    bannerImage: "/images/products/volumetric-clouds-nebula/thumbnail_refined.png",
    features: [
      {
        title: "Volumetric Raymarching",
        description: "Advanced raymarching technique for realistic volumetric rendering of clouds and nebulae.",
        image: "/images/products/volumetric-clouds-nebula/thumbnail_refined.png"
      },
      {
        title: "Customizable Colors and Density",
        description: "Full control over color gradients, density distribution, and opacity for unique visual effects.",
        image: "/images/products/volumetric-clouds-nebula/thumbnail_refined.png"
      },
      {
        title: "Dynamic Lighting Integration",
        description: "Realistic light scattering and absorption for authentic volumetric lighting effects.",
        image: "/images/products/volumetric-clouds-nebula/thumbnail_refined.png"
      },
      {
        title: "Animation Controls",
        description: "Built-in animation parameters for flowing, swirling nebula movements.",
        image: "/images/products/volumetric-clouds-nebula/thumbnail_refined.png"
      }
    ]
  },
  "procedural-skybox": {
    id: "12",
    slug: "procedural-skybox",
    name: "Procedural Skybox",
    topText: "Procedural Skybox",
    bottomText: "A Blueprint-ready sky actor with procedural skies, time of day, moon rendering, atmosphere, fog, skylight, and editable sky material presets.",
    summary: "A Blueprint-ready sky actor with procedural skies, time of day, moon rendering, atmosphere, fog, skylight, and editable sky material presets.",
    description: `Procedural Skybox is a complete dynamic sky system built around a single SkyBox Time of Day Actor. Place the actor in your level, assign one of the included sky material presets, then control time, sun direction, moon visibility, clouds, stars, atmosphere, height fog, skylight, and exposure from the Details panel or Blueprint.

The plugin includes demo maps, panning cloud materials, layered procedural sky presets, sky color curves, a procedural moon material, sky sphere meshes, and runtime Blueprint functions for setting time, reading sun and moon direction, changing planet presets, refreshing the sky, and tuning performance. It is built for artists and Blueprint users who want a flexible sky setup without building a lighting stack from scratch.`,
    category: "shaders",
    price: 29.99,
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/a232fdfe-f5d0-4527-8ea1-21994d4500ff",
    documentationUrl: "/docs/procedural-skybox",
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
        title: "SkyBox Time of Day Actor",
        description: "One placed actor manages the sky sphere, sun light, moon light, sky atmosphere, height fog, skylight, post process, and runtime updates.",
        image: "/images/products/procedural-skybox/feature-time-of-day.jpg"
      },
      {
        title: "Editor and Blueprint Controls",
        description: "Tune the placed sky actor from the Details panel, or control time, sun direction, moon visibility, planet presets, and update frequency from Blueprint.",
        image: "/images/products/procedural-skybox/feature-editor-controls.jpg",
        learnMoreUrl: "/docs/procedural-skybox/blueprint-control"
      },
      {
        title: "Procedural Sky Material Library",
        description: "Includes panning clouds, simple procedural sky, layered sky, star field, nebula, Musgrave, Perlin-Worley, Simplex, northern lights, and color curve assets.",
        image: "/images/products/procedural-skybox/feature-material-library.jpg",
        learnMoreUrl: "/docs/procedural-skybox/materials-and-presets"
      },
      {
        title: "Moon, Stars, and Night Lighting",
        description: "Enable a procedural moon with phase, brightness, scale, color, surface detail, visibility logic, and optional moon light for night scenes.",
        image: "/images/products/procedural-skybox/feature-moon-night.jpg",
        learnMoreUrl: "/docs/procedural-skybox/actor-settings"
      },
      {
        title: "Atmosphere and Color Controls",
        description: "Use planet presets, atmosphere settings, fog, horizon colors, sky color curves, and custom values for different world lighting moods.",
        image: "/images/products/procedural-skybox/feature-atmosphere-controls.jpg",
        learnMoreUrl: "/docs/procedural-skybox/actor-settings"
      },
      {
        title: "Documented Material Parameters",
        description: "The documentation lists the editable parameters for the sky, panning cloud, moon, and layered procedural materials in table format.",
        image: "/images/products/procedural-skybox/feature-material-parameters.jpg",
        learnMoreUrl: "/docs/procedural-skybox/material-parameters"
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

Ideal for sci-fi games, scientific visualization, and any project that needs to show one of the universe's most fascinating phenomena. Fully customizable parameters allow you to adjust the black hole's size, accretion disk colors, distortion intensity, and more.`,
    category: "volumetric",
    price: 34.99,
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/5696e48e-ad7f-4455-9679-187dfaff62d0",
    videoId: "",
    thumbnail: "/images/products/volumetric-black-hole/thumbnail_recreated.png",
    bannerImage: "/images/products/volumetric-black-hole/thumbnail_refined.png",
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
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/fc525aa7-eb3d-4e69-8d85-30eca12988d9",
    videoId: "",
    thumbnail: "/images/products/procedural-galaxy-system/thumbnail_recreated.png",
    bannerImage: "/images/products/procedural-galaxy-system/thumbnail_refined.png",
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
    category: "shaders",
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/328c9a79-1d07-4f91-b961-21e8b990fc46",
    bannerImage: "/images/products/aos-toons/fab_cover.jpg",
    thumbnail: "/images/products/aos-toons/aos_toons_thumbnail_clean.png",
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
    category: "shaders",
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/9ff6c455-fd2a-44fc-a9b3-f55660ed90ad",
    documentationUrl: "/docs/art-of-shader-megapack",
    videoId: "WApWjoeoubw",
    bannerImage: "/images/products/art-of-shader-megapack/aos_megapack_thumbnail_clean.png",
    thumbnail: "/images/products/art-of-shader-megapack/aos_megapack_thumbnail_clean.png",
    isMegapack: true,
    subProducts: [
      {
        slug: "art-of-shader-distortion-and-glitches",
        name: "Art Of Shader - Distortion And Glitches",
        description: "40 customizable distortion and glitch effects",
        thumbnail: "/images/products/art-of-shader-distortion-glitches/aos_dg_thumbnail_clean.png"
      },
      {
        slug: "art-of-shader-advanced-distortion",
        name: "Art Of Shader - Advanced Distortion",
        description: "40 advanced distortion shaders with multiple functionalities",
        thumbnail: "/images/products/art-of-shader-advanced-distortion/aos_ad_thumbnail_clean.png"
      },
      {
        slug: "art-of-shader-film-and-special-effects",
        name: "Art Of Shader - Film And Special Effects",
        description: "47 post-process materials for cinematic effects",
        thumbnail: "/images/products/art-of-shader-film-special-effects/aos_fse_thumbnail_clean.png"
      },
      {
        slug: "art-of-shader-stylized-post-process",
        name: "Art Of Shader - Stylized Post Process",
        description: "40 stylized post-process materials for unique artistic looks",
        thumbnail: "/images/products/art-of-shader-stylized-post-process/aos_spp_thumbnail_recreated.png"
      },
      {
        slug: "aos-toons",
        name: "AOS Toons",
        description: "16 toon-style post-process effects for cel-shaded visuals",
        thumbnail: "/images/products/aos-toons/aos_toons_thumbnail_clean.png"
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
    category: "plugins",
    engineVersions: [],
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
    category: "plugins",
    engineVersions: [],
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
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/74734a8d-f8d3-4474-810b-f4577cdb769b",
    documentationUrl: "/docs/dynamic-mesh-occluder",
    thumbnail: "/images/products/dynamic-mesh-occluder/thumbnail_no_text.png",
    bannerImage: "/images/products/dynamic-mesh-occluder/fab_01.jpg",
    gallery: [
      "/images/products/dynamic-mesh-occluder/fab_01.jpg",
      "/images/products/dynamic-mesh-occluder/gallery_02.png",
      "/images/products/dynamic-mesh-occluder/gallery_03.png",
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
  "ultimate-level-design-kit": {
    id: "19",
    slug: "ultimate-level-design-kit",
    name: "Ultimate Level Design Kit",
    topText: "Ultimate Level Design Kit",
    bottomText: "Block out entire levels in minutes with 11 parametric greybox shapes, auto-snapping, measurement tools, and gameplay markers — no external modeling required.",
    summary: "A complete greyboxing toolkit for Unreal Engine — parametric shapes, click-to-place, auto-snap, measurement tools, and gameplay markers, all from inside the editor.",
    description: `Ultimate Level Design Kit (ULDK) is a comprehensive greyboxing and level-design prototyping toolkit for Unreal Engine. It provides 11 procedural shape actors — boxes, cylinders, wedges, arches, L-shapes, stairs, walls, floors, pipes, columns, spheres — that generate geometry on the fly from dimensions. No external meshes, no FBX imports, no Blueprint scripting required.

Every shape is parametric: change a dimension and the mesh rebuilds instantly. Stairs support linear, spiral, and circular configurations with optional balustrades. Boxes can be hollow with adjustable wall thickness. Eight UV projection modes (orthogonal, cylindrical, polar, spherical, radial brick, and more) keep textures aligned automatically.

Beyond the shape library, ULDK ships with measurement tools, snap grids, trigger volumes, AI cover points, spawn markers, navigation links, and spline-based actor distribution. A dedicated editor mode handles placement preview, click-to-drop workflow, and per-face editing (extrude, inset, bevel) while you're still placing the shape. Auto-snapping aligns walls to walls, floors to floor edges, and stair flights stack-to-stack out of the box.`,
    category: "plugins",
    engineVersions: [],
    externalUrl: "",
    documentationUrl: "/docs/ultimate-level-design-kit",
    thumbnail: "/images/products/ultimate-level-design-kit/thumbnail.jpg",
    bannerImage: "/images/products/ultimate-level-design-kit/thumbnail.jpg",
    gallery: [
      "/images/products/ultimate-level-design-kit/thumbnail.jpg",
    ],
    features: [
      {
        title: "11 Parametric Shape Actors",
        description: "Boxes, cylinders, wedges, arches, L-shapes, stairs, walls, floors, pipes, columns, and spheres — every shape inherits from AULDKProtoShape and rebuilds its mesh instantly when dimensions change. No external modeling tool needed.",
      },
      {
        title: "Advanced Staircase System",
        description: "AULDKStairs supports Linear (open/closed/box), Spiral with optional helix column, and Circular (tiered platforms) configurations. Optional balustrades use Instanced Static Mesh components for custom balusters and handrails without per-instance overhead.",
      },
      {
        title: "Eight UV Projection Modes",
        description: "Orthogonal, cylindrical, polar, planar XY/XZ/YZ, spherical, radial-auto, and radial-brick projections keep textures aligned on round and curved geometry. Per-actor UV scale, tiling, offset, and rotation controls let you texture-greybox without ever leaving the editor.",
      },
      {
        title: "Dedicated Editor Mode with Click-to-Place",
        description: "FULDKEdMode adds a custom editor mode with click-to-place workflow, translucent placement preview (bIsEditorPreview flag), and per-tool SVG icons. Drop shapes into the viewport and adjust dimensions live in the Details panel.",
      },
      {
        title: "Auto-Snap to Adjacent Shapes",
        description: "Each shape exposes its own GetSnapPoints() — walls expose end-to-end sockets, floors expose top-edge rings, stairs expose stack points. Move a shape within SnapSize of any of these and it locks into alignment. Disable per-actor when needed.",
      },
      {
        title: "Measurement & Snap Grid Tools",
        description: "AULDKMeasureTool shows world-space distances with per-axis deltas (?X, ?Y, ?Z), configurable units (cm/m/mm/km/ft/in), and optional angle display. AULDKSnapGrid visualizes a construction grid with major-line intervals for visual alignment reference.",
      },
      {
        title: "Trigger Volumes & Gameplay Markers",
        description: "AULDKVolumeTrigger creates wireframe trigger boxes with custom tags and overlap events. AULDKSpawnPoint marks player/AI spawn locations with team indices. AULDKCoverPoint defines AI cover (standing/crouching/prone) with lean directions. AULDKNavLink connects two points with link types (walk/jump/drop/ladder/vault) for navigation.",
      },
      {
        title: "Spline-Based Placement & Distribution",
        description: "AULDKSplinePath supports four spline types (Road, ActorPlacement, SplineMesh, Fence) and three distribution modes (FixedSpacing, EvenCount, Random). Generate roads, distribute crates along a path, or build fence runs procedurally.",
      },
      {
        title: "Per-Face Geometry Editing",
        description: "EULDKFaceEditOperation (Extrude, Inset, Bevel) with per-face index API lets you push, pull, or bevel individual faces during placement — Blender-style editing without leaving the level. FaceInsetAmounts and FaceBevelAmounts arrays give you fine-grained control on every shape.",
      },
      {
        title: "Dual Material Slots with Cap-Face Split",
        description: "Every shape exposes two material slots — Slot 0 for walls, Slot 1 for caps. Cap-face detection automatically splits top/bottom faces (±Z normal) into section 1, so you can color top and bottom of any shape independently for two-tone greyboxes.",
      },
      {
        title: "Hollow Geometry & Variants",
        description: "Boxes support hollow interiors with adjustable wall thickness and open/closed top. Cylinders, cones, pipes, and columns expose geometry variants via simple properties. Build rooms, sewer sections, and structural columns without ever switching to a DCC tool.",
      },
      {
        title: "Greybox Color Tinting",
        description: "Set a GreyboxColor on any shape to mark zones — red for danger, green for safe, blue for water, yellow for objectives. Tints apply through the shared base material so your blockouts read clearly without committing to final art.",
      },
    ],
    isExternal: false,
    isFeatured: false,
  },
  "elevenlabs-voice-studio": {
    id: "20",
    slug: "elevenlabs-voice-studio",
    name: "ElevenLabs Voice Studio",
    topText: "ElevenLabs Voice Studio",
    bottomText: "Generate professional TTS, design custom voices, and import audio as native USoundWave assets — all from inside the Unreal Editor.",
    summary: "An editor bridge to the ElevenLabs API — generate TTS, design custom voices, and save audio as USoundWave assets from dockable editor panels.",
    description: `ElevenLabs Voice Studio is an editor-side bridge between Unreal Engine and the ElevenLabs API. Generate professional text-to-speech audio, design custom voices from a written description, and organize all resulting audio as native USoundWave assets — directly from dockable editor panels, without leaving the engine.

The plugin ships with two main panels: a full Studio for voice browsing, voice design, and TTS with full parameter control, plus a Quick TTS panel for rapid one-shot generations. A live credit meter widget tracks your API usage in real time and refreshes automatically after every call, so you never blow past your subscription limits.

Generated audio plays back instantly inside the editor for preview, then saves as a USoundWave to /Game/Audio/ElvenLab/<VoiceName>/SW_<ClipName>_<HHMMSS>.uasset with intelligent path sanitization and automatic Content Browser sync. Console commands (ElevenLabs.OpenStudio and ElevenLabs.OpenQuickTTS) and toolbar buttons make the panels available from anywhere in the editor.`,
    category: "plugins",
    engineVersions: [],
    externalUrl: "",
    documentationUrl: "/docs/elevenlabs-voice-studio",
    thumbnail: "/images/products/elevenlabs-voice-studio/thumbnail.jpg",
    bannerImage: "/images/products/elevenlabs-voice-studio/thumbnail.jpg",
    gallery: [
      "/images/products/elevenlabs-voice-studio/thumbnail.jpg",
    ],
    features: [
      {
        title: "Studio Tab — Full TTS Workbench",
        description: "Dockable Slate panel (SElevenLabsStudioWindow) with voice browser, voice settings (stability, similarity boost, style, speed, speaker boost), text input, instant playback, asset save, and a complete history log with per-entry replay.",
      },
      {
        title: "Quick TTS Panel for Rapid Generation",
        description: "Lightweight one-shot TTS panel (SElevenLabsQuickTTS) — pick a voice, type text, press Ctrl+Enter, audio plays instantly. Optional auto-save toggle drops every generation onto disk under SavedAudioRoot/VoiceName/ without an extra click.",
      },
      {
        title: "Live Voice Library Browser",
        description: "Fetches your complete voice roster from the ElevenLabs API (premade, cloned, generated, and professional voices) with name, category, description, and baseline voice settings. Refreshes whenever you create or delete a voice — no editor restart required.",
      },
      {
        title: "Voice Design Studio",
        description: "Describe a voice in plain English (e.g. \"Deep, masculine, with a slight accent\") and the API returns three preview samples. Pick the best one and save it as a permanent voice in your library. Guidance scale, loudness, and seed controls give you deterministic iteration.",
      },
      {
        title: "Generated USoundWave Assets",
        description: "Audio saves to /Game/Audio/ElvenLab/<VoiceName>/SW_<ClipName>_<HHMMSS>.uasset with automatic name sanitization (capped at 60 characters). The Content Browser syncs automatically so new assets appear without manual refresh.",
      },
      {
        title: "Live Credit Meter Widget",
        description: "Real-time subscription status (SElevenLabsCreditMeter) showing character-count usage, remaining balance, tier, character limit, and reset date. Refreshes in the background and instantly after any TTS or voice-design call — never get caught short mid-session.",
      },
      {
        title: "Console Commands & Toolbar",
        description: "Open the Studio with ElevenLabs.OpenStudio or the Quick TTS with ElevenLabs.OpenQuickTTS from the editor console. Both panels are also available from main-editor toolbar buttons under Window > AI Tools.",
      },
      {
        title: "MetaHuman Face Animator Integration",
        description: "Paired Face Animator panel (SElevenLabsFaceAnimator) generates facial animations synced to TTS output via a Speech-to-Face pipeline. Includes mood detection (auto or manual), blink generation, head movement, and multi-channel audio. Runtime playback via UElevenLabsPersonaComponent.",
      },
      {
        title: "Regional API Endpoints for Data Residency",
        description: "Optional API Base URL field supports regional endpoints (api.eu.residency.elevenlabs.io, api.in.residency.elevenlabs.io, and more) for projects with data residency requirements. Configure once in Project Settings — every call routes through the chosen endpoint.",
      },
      {
        title: "Editor + Runtime Module Split",
        description: "Editor module (ElevenLabsVoiceStudio) ships all UI, HTTP client, and asset importing. Minimal runtime module (ElevenLabsVoiceStudioRuntime) provides UElevenLabsPersonaComponent and UElevenLabsPersonaMappingData for runtime audio + animation playback in packaged games.",
      },
      {
        title: "Project-Local Credential Storage",
        description: "API keys live in EditorPerProjectUserSettings.ini — never committed to source control. Configure once in Project Settings > Plugins > ElevenLabs Voice Studio and the plugin remembers across editor sessions.",
      },
    ],
    isExternal: false,
    isFeatured: false,
  },
  "ultimate-ai-mesh-generator": {
    id: "21",
    slug: "ultimate-ai-mesh-generator",
    name: "Ultimate AI Mesh Generator",
    topText: "Ultimate AI Mesh Generator",
    bottomText: "Generate production-ready 3D meshes from text, images, or multi-view photos using Hitem3D, MeshyAI, and Tripo3D — all from inside the Unreal Editor.",
    summary: "A production-ready editor plugin that generates 3D meshes from text, single images, or multi-view photos using abstracted AI providers (Hitem3D, MeshyAI, Tripo3D).",
    description: `Ultimate AI Mesh Generator is a production-ready Unreal Engine editor plugin that generates 3D meshes from text prompts, single reference images, or multi-view photo sets. It supports three AI providers out of the box — Hitem3D, MeshyAI, and Tripo3D — behind a single unified interface, with a provider abstraction layer that lets you register new services by implementing one C++ class.

Three generation modes cover the typical workflows: text-to-3D (describe what you want), image-to-3D (drag in a single reference image), and multi-image-to-3D (drop front/back/left/right photos into labeled slots for constraint-guided geometry). Drag-and-drop and clipboard paste work everywhere. The plugin polls each provider's status endpoint and shows a live progress log inside the editor — no need to leave Unreal to track jobs.

Completed meshes are automatically downloaded, imported as Static Meshes, organized into /Game/AI_Meshes/<Provider>/ folders with separate sub-folders for meshes, textures, and materials, and wired up with PBR material instances built on a shared M_AIMeshPBR base. A persistent task history (Saved/AIMeshGenerator/TaskHistory.json) survives editor restarts so you can re-download or re-import any past generation. Place an AMeshSpawnTarget actor in your level and the finished mesh spawns at that exact location and rotation on completion.`,
    category: "plugins",
    engineVersions: [],
    externalUrl: "",
    documentationUrl: "/docs/ultimate-ai-mesh-generator",
    thumbnail: "/images/products/ultimate-ai-mesh-generator/thumbnail.jpg",
    bannerImage: "/images/products/ultimate-ai-mesh-generator/thumbnail.jpg",
    gallery: [
      "/images/products/ultimate-ai-mesh-generator/thumbnail.jpg",
    ],
    features: [
      {
        title: "Multi-Provider Abstraction (Hitem3D / MeshyAI / Tripo3D)",
        description: "Switch between Hitem3D, MeshyAI, and Tripo3D from a single dropdown. The IAIMeshProvider interface lets you register new services by implementing one C++ class — the UI auto-enables generation modes based on what each provider supports.",
      },
      {
        title: "Text-to-3D Mesh Generation",
        description: "Type a prompt and generate high-quality geometry with optional refining pass for textures. Configurable model types (standard / lowpoly), art styles (realistic / sculpture), and automatic sizing — go from idea to mesh without leaving the editor.",
      },
      {
        title: "Image-to-3D from a Single Reference",
        description: "Drag a single reference image into the Front slot and generate a textured 3D mesh. All three providers support this mode; MeshyAI can optionally generate four cardinal thumbnail views on completion for instant preview.",
      },
      {
        title: "Multi-Image (Front / Back / Left / Right)",
        description: "Drop up to four images into labeled slots for constraint-guided geometry. Hitem3D and MeshyAI both support multi-view mode for far better accuracy on complex subjects. Context menus on each slot enable file browse, clipboard paste, or right-click clear.",
      },
      {
        title: "Live In-Editor Progress UI",
        description: "SUltimateAIMeshWindow polls each provider every 2-30 seconds and shows live task state (queueing to processing to success or failure) with percentage completion in a real-time log panel. Watch jobs progress without leaving Unreal.",
      },
      {
        title: "Persistent Task History",
        description: "All submitted tasks are recorded in Saved/AIMeshGenerator/TaskHistory.json — survives editor restarts. Re-download or re-import any past generation from the History tab, or sync your full account history from MeshyAI in one click.",
      },
      {
        title: "Automatic Asset Organization",
        description: "Completed meshes are downloaded and imported as Static Meshes into organized folder trees (/Game/AI_Meshes/<Provider>/API/Meshes/, /Textures/, /Materials/) with consistent naming. PBR maps are auto-applied via material instances built on a shared M_AIMeshPBR base.",
      },
      {
        title: "AI Mesh Spawn Target Actor",
        description: "Drop an AMeshSpawnTarget into your level, kick off a generation, and the finished mesh spawns at that exact location and rotation on completion. Editor-only actor with an optional preview gizmo — stripped from packaged builds.",
      },
      {
        title: "Drag-and-Drop & Clipboard Paste",
        description: "Drop images from Windows Explorer or your browser directly onto image slots, or press Ctrl+V to paste a screenshot from your clipboard. The plugin auto-converts bitmap data (CF_DIB) to PNG for transmission to the API.",
      },
      {
        title: "Provider-Specific Advanced Options",
        description: "Hitem3D: face count (100k–2M) and voxel resolution presets. MeshyAI: topology (triangle/quad), remesh polycount, PBR/HD texture toggles, pose hints (a-pose / t-pose), content moderation. Tripo3D: version pinning. Every provider's full power, behind one UI.",
      },
      {
        title: "Live Account Balance & Cost Estimation",
        description: "Display the current credit balance from your chosen provider (refresh on demand). Estimate cost per generation from provider-published cost tables — green/red/grey indicator shows whether you have sufficient balance before you commit.",
      },
      {
        title: "Retexture Workflow",
        description: "Re-texture any existing Meshy-generated mesh by selecting a past task or a project Static Mesh as the source, then providing a new prompt or reference image. The API applies new textures to the same geometry — no re-sculpting required.",
      },
    ],
    isExternal: false,
    isFeatured: false,
  },
  "databases": {
    id: "22",
    slug: "databases",
    name: "DataBases",
    topText: "DataBases",
    bottomText: "Runtime SQL database access for Unreal Engine across PostgreSQL, MySQL, and Microsoft SQL Server.",
    summary: "An Unreal Engine runtime database plugin package with selectable PostgreSQL, MySQL/MariaDB, and Microsoft SQL Server integrations.",
    description: `DataBases is an Unreal Engine runtime database product for projects that need real SQL connectivity from Blueprint. It brings PostgreSQL, MySQL/MariaDB, and Microsoft SQL Server into one product page, with a shared workflow for connection setup, validation, SQL queries, and result parsing.

The common workflow is built around database-specific connection actors and Blueprint-spawnable components. Users can create a connection, run select or update queries, receive row and column result arrays, format results for UI, and respond to connection/query events without changing the gameplay-facing flow for each database.

Each database option keeps the same Blueprint-first workflow while still giving project-specific setup controls when needed. PostgreSQL supports standard host, database, user, password, port, and optional connection settings. MySQL/MariaDB supports multiple saved connections and optional security settings. Microsoft SQL Server supports username/password, Windows authentication, server options, custom connection strings, and the image workflow currently available for that database option.`,
    category: "plugins",
    engineVersions: [],
    externalUrl: "",
    documentationUrl: "",
    thumbnail: "/images/products/databases/thumbnail.png",
    bannerImage: "/images/products/databases/thumbnail.png",
    gallery: [
      "/images/products/databases/thumbnail.png",
      "/images/products/databases/postgresql.png",
      "/images/products/databases/mysql.png",
      "/images/products/databases/microsoft-sql.png"
    ],
    features: [
      {
        title: "One Blueprint API for three SQL backends",
        description: "Use the same actor or component flow for PostgreSQL, MySQL/MariaDB, and Microsoft SQL Server connection, validation, queries, result handling, and cleanup.",
      },
      {
        title: "Runtime select and update queries",
        description: "Run select, insert, update, and delete SQL from gameplay, tools, or UI flows and receive status through Blueprint delegates.",
      },
      {
        title: "Row and column result structures",
        description: "Query results are returned as Blueprint-friendly row and column arrays, with helper nodes for lookup, counts, and formatted text output.",
      },
      {
        title: "Blueprint-first setup",
        description: "Place the actor or add the component, make backend params, bind events, connect, then run queries directly from Blueprint graphs.",
      },
      {
        title: "Backend-specific connection options",
        description: "Pass extra params or full connection string overrides so each deployment can supply SSL, ODBC, timeout, driver, or custom server settings.",
      },
      {
        title: "PostgreSQL connection setup",
        description: "Connect with the usual host, database name, user, password, port, and optional extra settings from Blueprint-friendly setup nodes.",
      },
      {
        title: "MySQL and MariaDB connection setup",
        description: "Create and reuse saved connections, run tracked queries, and add optional security or client settings when your server requires them.",
      },
      {
        title: "Microsoft SQL Server connection setup",
        description: "Use username and password, Windows authentication, server options, or a custom connection string depending on how your database is hosted.",
      },
      {
        title: "Microsoft SQL Server image support",
        description: "Image/BLOB Blueprint nodes are currently documented and supported for the Microsoft SQL Server path only.",
      },
    ],
    isExternal: false,
    isFeatured: true
  },
  "jigsaw-puzzle-template": {
    id: "25",
    slug: "jigsaw-puzzle-template",
    name: "JigSaw Puzzle Template",
    topText: "JigSaw Puzzle Template",
    bottomText: "Blueprint puzzle template for building image-based jigsaw gameplay with clean piece interaction.",
    summary: "Blueprint puzzle template for image-based jigsaw gameplay, piece movement, snapping, and completion flow.",
    description: `JigSaw Puzzle Template gives you a ready puzzle foundation for projects that need draggable puzzle pieces, snapping, image-based layouts, and a simple completion loop. It is built for direct project use, so you can focus on artwork, rules, and presentation instead of recreating the basic puzzle flow from scratch.`,
    category: "blueprints",
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/2df678ba-ae9e-49ac-8442-e77aa51c1412",
    documentationUrl: "",
    videoId: "nEUM7WtdeS4",
    thumbnail: "/images/products/jigsaw-puzzle-template/thumbnail.png",
    bannerImage: "/images/products/jigsaw-puzzle-template/fab_01.jpg",
    gallery: [
      "/images/products/jigsaw-puzzle-template/fab_01.jpg",
      "/images/products/jigsaw-puzzle-template/feature_02.png",
      "/images/products/jigsaw-puzzle-template/feature_03.png"
    ],
    features: [
      {
        title: "Puzzle Piece Interaction",
        description: "Move puzzle pieces through a clean gameplay flow designed for jigsaw-style projects.",
        image: "/images/products/jigsaw-puzzle-template/fab_01.jpg"
      },
      {
        title: "Image-Based Puzzle Setup",
        description: "Build puzzle boards around your own artwork and visual themes.",
        image: "/images/products/jigsaw-puzzle-template/feature_02.png"
      },
      {
        title: "Completion Flow",
        description: "Use the included template behavior as a starting point for win states, UI feedback, and level progression.",
        image: "/images/products/jigsaw-puzzle-template/feature_03.png"
      }
    ],
    isFeatured: false
  },
  "post-process-blendables-volume-1": {
    id: "26",
    slug: "post-process-blendables-volume-1",
    name: "Post Process Blendables Volume 1",
    topText: "Post Process Blendables Volume 1",
    bottomText: "A focused set of post-process blendable looks for stylizing scenes directly through volumes.",
    summary: "Post-process blendable looks for scene styling, camera treatment, and visual variation.",
    description: `Post Process Blendables Volume 1 gives you ready visual treatments that can be applied through post-process volumes. It is suited for projects that need quick scene mood changes, screen effects, stylized looks, and reusable visual presets without building every material from zero.`,
    category: "shaders",
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/ba0fb280-c742-404b-85d2-c71a6f4d7c9d",
    documentationUrl: "",
    videoId: "",
    thumbnail: "/images/products/post-process-blendables-volume-1/thumbnail.png",
    bannerImage: "/images/products/post-process-blendables-volume-1/fab_01.jpg",
    gallery: [
      "/images/products/post-process-blendables-volume-1/fab_01.jpg",
      "/images/products/post-process-blendables-volume-1/feature_02.png",
      "/images/products/post-process-blendables-volume-1/feature_03.png"
    ],
    features: [
      {
        title: "Ready Visual Looks",
        description: "Apply prepared post-process styles to quickly change the feel of a scene.",
        image: "/images/products/post-process-blendables-volume-1/fab_01.jpg"
      },
      {
        title: "Scene Mood Control",
        description: "Use blendables for camera effects, environmental treatments, and stylized presentation.",
        image: "/images/products/post-process-blendables-volume-1/feature_02.png"
      },
      {
        title: "Reusable Setup",
        description: "Keep the visual effect workflow reusable across multiple scenes and projects.",
        image: "/images/products/post-process-blendables-volume-1/feature_03.png"
      }
    ],
    isFeatured: false
  },
  "framecapture": {
    id: "27",
    slug: "framecapture",
    name: "FrameCapture",
    topText: "FrameCapture",
    bottomText: "Screenshot, recording, and camera capture workflow for in-game and runtime presentation.",
    summary: "Capture screenshots and video-style output from your project with camera-focused controls.",
    description: `FrameCapture is built for projects that need screenshot and recording workflows directly inside the experience. It focuses on capture controls, camera adjustment, and polished output for users who need presentation, proof, or shareable media from gameplay and interactive scenes.`,
    category: "plugins",
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/53a9fd62-1335-4089-9b77-f5996f41dfbf",
    documentationUrl: "",
    discordUrl: "https://discord.gg/DgzRkx9",
    videoId: "LbYDMOrNX14",
    videoTutorialUrl: "https://youtu.be/wdOVbprSQRQ",
    thumbnail: "/images/products/framecapture/thumbnail.png",
    bannerImage: "/images/products/framecapture/fab_01.jpg",
    gallery: [
      "/images/products/framecapture/fab_01.jpg",
      "/images/products/framecapture/feature_02.png",
      "/images/products/framecapture/feature_03.png"
    ],
    features: [
      {
        title: "Screenshot Capture",
        description: "Give users a direct capture path for saved screenshots and scene presentation.",
        image: "/images/products/framecapture/fab_01.jpg"
      },
      {
        title: "Recording Workflow",
        description: "Support recording-style output for demos, previews, and in-game sharing workflows.",
        image: "/images/products/framecapture/feature_02.png"
      },
      {
        title: "Camera Adjustment",
        description: "Use camera-focused controls to frame the output before capture.",
        image: "/images/products/framecapture/feature_03.png"
      }
    ],
    isFeatured: false
  },
  "metahuman-children": {
    id: "28",
    slug: "metahuman-children",
    name: "Metahuman Child Characters",
    topText: "Metahuman Child Characters",
    bottomText: "A combo pack containing multiple child character packs for projects that need varied young characters.",
    summary: "Combo pack of multiple child character packs with distinct looks, moods, and presentation styles.",
    description: `Metahuman Child Characters is a combo pack that brings together multiple child character packs in one bundle. Use the included product selections below to jump into the individual packs and compare the characters, trailers, and image galleries before choosing the ones that fit your project.`,
    category: "metahuman",
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/2f99cb77-b966-4f29-a186-af1c6d80261f",
    documentationUrl: "",
    discordUrl: "https://discord.gg/sgTctVUJ4D",
    videoId: "",
    thumbnail: "/images/products/metahuman-children/thumbnail_ai.webp",
    bannerImage: "/images/products/metahuman-children/fab_01.jpg",
    gallery: [
      "/images/products/metahuman-children/fab_01.jpg",
      "/images/products/metahuman-children/feature_02.png",
      "/images/products/metahuman-children/feature_03.png"
    ],
    isMegapack: true,
    subProducts: [
      {
        slug: "metahuman-ghost-children",
        name: "The Ghost Children",
        description: "Two eerie child characters for horror and supernatural scenes.",
        thumbnail: "/images/products/metahuman-ghost-children/thumbnail_ai.webp"
      },
      {
        slug: "metahuman-aerin-toddler",
        name: "Aerin : Toddler",
        description: "A toddler character with a bright, expressive look.",
        thumbnail: "/images/products/metahuman-aerin-toddler/thumbnail_ai.webp"
      },
      {
        slug: "metahuman-jimmy-fat-kid",
        name: "Jimmy : The Fat Kid",
        description: "A distinctive kid character with a strong facial identity.",
        thumbnail: "/images/products/metahuman-jimmy-fat-kid/thumbnail_ai.webp"
      },
      {
        slug: "metahuman-arya-creepy-doll",
        name: "Arya : The Creepy Doll",
        description: "A stylized creepy doll child character.",
        thumbnail: "/images/products/metahuman-arya-creepy-doll/thumbnail_ai.webp"
      },
      {
        slug: "metahuman-grace-little-girl",
        name: "Grace : Little Girl",
        description: "A young girl character for story, cinematic, and game scenes.",
        thumbnail: "/images/products/metahuman-grace-little-girl/thumbnail_ai.webp"
      }
    ],
    features: [
      {
        title: "Multiple Child Character Packs",
        description: "A bundle built around several different young character looks and moods.",
        image: "/images/products/metahuman-children/fab_01.jpg"
      },
      {
        title: "Individual Pack Selection",
        description: "Open each included pack from this page to view its own gallery and trailer.",
        image: "/images/products/metahuman-children/feature_02.png"
      },
      {
        title: "Discord Support",
        description: "Support is available through the Discord link provided from the Fab listing.",
        image: "/images/products/metahuman-children/feature_03.png"
      }
    ],
    isFeatured: true
  },
  "metahuman-ghost-children": {
    id: "29",
    slug: "metahuman-ghost-children",
    name: "The Ghost Children",
    topText: "The Ghost Children",
    bottomText: "Two eerie child characters for ghost stories, supernatural scenes, and horror projects.",
    summary: "Two eerie child characters with pale skin, glowing eyes, and a supernatural look.",
    description: `The Ghost Children includes two young supernatural characters suited for horror, mystery, and cinematic scenes. The product page keeps the setup simple: view the trailer, inspect the images, and use the Fab support Discord link if you need help.`,
    category: "metahuman",
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/f0a6c5b3-8cf8-4d31-90c7-14dd65256197",
    documentationUrl: "",
    discordUrl: "https://discord.gg/sgTctVUJ4D",
    videoId: "cjrTbaa5Hq8",
    thumbnail: "/images/products/metahuman-ghost-children/thumbnail_ai.webp",
    bannerImage: "/images/products/metahuman-ghost-children/fab_01.jpg",
    gallery: ["/images/products/metahuman-ghost-children/fab_01.jpg"],
    features: [
      {
        title: "Two Ghost Children",
        description: "A pair of young supernatural characters with a matching horror tone.",
        image: "/images/products/metahuman-ghost-children/fab_01.jpg"
      },
      {
        title: "Trailer Included",
        description: "Watch the product trailer directly on the page before opening Fab.",
        image: "/images/products/metahuman-ghost-children/thumbnail_ai.webp"
      }
    ],
    isFeatured: false
  },
  "metahuman-aerin-toddler": {
    id: "30",
    slug: "metahuman-aerin-toddler",
    name: "Aerin : Toddler",
    topText: "Aerin : Toddler",
    bottomText: "A bright toddler character for story-driven scenes and cinematic projects.",
    summary: "A toddler character with an expressive, friendly look.",
    description: `Aerin : Toddler is a young character pack for scenes that need a lively child presence. The page includes the product trailer, images from the Fab listing, and the Discord support link.`,
    category: "metahuman",
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/f6e61d5f-320f-495f-b379-e593c91a4fd1",
    documentationUrl: "",
    discordUrl: "https://discord.gg/sgTctVUJ4D",
    videoId: "AuMoxNttJ3M",
    thumbnail: "/images/products/metahuman-aerin-toddler/thumbnail_ai.webp",
    bannerImage: "/images/products/metahuman-aerin-toddler/fab_01.jpg",
    gallery: ["/images/products/metahuman-aerin-toddler/fab_01.jpg"],
    features: [
      {
        title: "Expressive Toddler Character",
        description: "A bright child character with a cheerful facial style.",
        image: "/images/products/metahuman-aerin-toddler/fab_01.jpg"
      }
    ],
    isFeatured: false
  },
  "metahuman-jimmy-fat-kid": {
    id: "31",
    slug: "metahuman-jimmy-fat-kid",
    name: "Jimmy : The Fat Kid",
    topText: "Jimmy : The Fat Kid",
    bottomText: "A distinctive kid character with a memorable face and full-body presentation.",
    summary: "A kid character with a strong visual identity for story and gameplay scenes.",
    description: `Jimmy : The Fat Kid is a child character pack with a clearly recognizable face and body shape. Use the trailer and image gallery to review the character before visiting the Fab listing.`,
    category: "metahuman",
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/7556198b-4fd6-4863-9995-86c081cc6b54",
    documentationUrl: "",
    discordUrl: "https://discord.gg/sgTctVUJ4D",
    videoId: "Jw3z5D2ctUo",
    thumbnail: "/images/products/metahuman-jimmy-fat-kid/thumbnail_ai.webp",
    bannerImage: "/images/products/metahuman-jimmy-fat-kid/fab_01.jpg",
    gallery: ["/images/products/metahuman-jimmy-fat-kid/fab_01.jpg"],
    features: [
      {
        title: "Distinct Character Shape",
        description: "A young character with a strong silhouette and memorable facial expression.",
        image: "/images/products/metahuman-jimmy-fat-kid/fab_01.jpg"
      }
    ],
    isFeatured: false
  },
  "metahuman-arya-creepy-doll": {
    id: "32",
    slug: "metahuman-arya-creepy-doll",
    name: "Arya : The Creepy Doll",
    topText: "Arya : The Creepy Doll",
    bottomText: "A creepy doll child character for horror, mystery, and unsettling cinematic scenes.",
    summary: "A stylized creepy doll child character with a horror-ready look.",
    description: `Arya : The Creepy Doll is designed for unsettling scenes, horror games, and stylized dark storytelling. The product page includes the trailer, images, and the Fab support Discord link.`,
    category: "metahuman",
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/4b2f08db-1957-4818-9890-eea95b666603",
    documentationUrl: "",
    discordUrl: "https://discord.gg/sgTctVUJ4D",
    videoId: "TvPZaTbY1AI",
    thumbnail: "/images/products/metahuman-arya-creepy-doll/thumbnail_ai.webp",
    bannerImage: "/images/products/metahuman-arya-creepy-doll/fab_01.jpg",
    gallery: ["/images/products/metahuman-arya-creepy-doll/fab_01.jpg"],
    features: [
      {
        title: "Creepy Doll Look",
        description: "A child character with oversized eyes and a deliberately unsettling face.",
        image: "/images/products/metahuman-arya-creepy-doll/fab_01.jpg"
      }
    ],
    isFeatured: false
  },
  "metahuman-grace-little-girl": {
    id: "33",
    slug: "metahuman-grace-little-girl",
    name: "Grace : Little Girl",
    topText: "Grace : Little Girl",
    bottomText: "A little girl character for cinematic, story, and gameplay scenes.",
    summary: "A young girl character with an approachable, expressive look.",
    description: `Grace : Little Girl is a young character pack for scenes that need a believable child presence. The product page includes listing images, the trailer, and Discord support from Fab.`,
    category: "metahuman",
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/87e560ed-a31b-422c-a450-4a0b896fc927",
    documentationUrl: "",
    discordUrl: "https://discord.gg/sgTctVUJ4D",
    videoId: "s1h6KKtCbHI",
    thumbnail: "/images/products/metahuman-grace-little-girl/thumbnail_ai.webp",
    bannerImage: "/images/products/metahuman-grace-little-girl/feature_01.png",
    gallery: [
      "/images/products/metahuman-grace-little-girl/feature_01.png",
      "/images/products/metahuman-grace-little-girl/feature_02.png"
    ],
    features: [
      {
        title: "Little Girl Character",
        description: "A young character with a clear face and child-friendly presentation.",
        image: "/images/products/metahuman-grace-little-girl/feature_01.png"
      }
    ],
    isFeatured: false
  },
  "metahuman-jihyo-korean-girl": {
    id: "34",
    slug: "metahuman-jihyo-korean-girl",
    name: "Jihyo : Korean Girl",
    topText: "Jihyo : Korean Girl",
    bottomText: "A Korean girl character with multiple facial presentations for expressive scenes.",
    summary: "A Korean girl character with expressive facial presentation for story and cinematic use.",
    description: `Jihyo : Korean Girl is a young character pack with several facial presentations shown through the marketplace imagery. The product page includes the trailer, images, and Discord support from Fab.`,
    category: "metahuman",
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/68646f55-88ed-449b-84cc-daa61821f3ce",
    documentationUrl: "",
    discordUrl: "https://discord.gg/sgTctVUJ4D",
    videoId: "",
    thumbnail: "/images/products/metahuman-jihyo-korean-girl/thumbnail_ai.webp",
    bannerImage: "/images/products/metahuman-jihyo-korean-girl/fab_01.jpg",
    gallery: ["/images/products/metahuman-jihyo-korean-girl/fab_01.jpg"],
    features: [
      {
        title: "Expressive Facial Looks",
        description: "A young Korean girl character shown with multiple facial presentations.",
        image: "/images/products/metahuman-jihyo-korean-girl/fab_01.jpg"
      }
    ],
    isFeatured: false
  },
  "metahuman-house-elf": {
    id: "35",
    slug: "metahuman-house-elf",
    name: "The House Elf",
    topText: "The House Elf",
    bottomText: "A fantasy elf character with a stylized creature look.",
    summary: "A fantasy house elf character for stylized, magical, and story-driven scenes.",
    description: `The House Elf is a stylized fantasy character with a distinct creature profile. The product page includes Fab imagery, trailer support, and the Discord support link.`,
    category: "metahuman",
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/3017519c-73b3-4933-930f-ae6083dca40a",
    documentationUrl: "",
    discordUrl: "https://discord.gg/sgTctVUJ4D",
    videoId: "",
    thumbnail: "/images/products/metahuman-house-elf/thumbnail_ai.webp",
    bannerImage: "/images/products/metahuman-house-elf/fab_01.jpg",
    gallery: ["/images/products/metahuman-house-elf/fab_01.jpg"],
    features: [
      {
        title: "Fantasy Creature Character",
        description: "A stylized elf character with a strong creature silhouette and facial identity.",
        image: "/images/products/metahuman-house-elf/fab_01.jpg"
      }
    ],
    isFeatured: false
  },
  "metahuman-banshee": {
    id: "36",
    slug: "metahuman-banshee",
    name: "The Banshee",
    topText: "The Banshee",
    bottomText: "A supernatural banshee character for horror and fantasy scenes.",
    summary: "A supernatural banshee character with multiple creature-like facial looks.",
    description: `The Banshee is a supernatural character pack for horror, fantasy, and cinematic scenes. The product page includes the trailer, images, and Fab Discord support link.`,
    category: "metahuman",
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/190489ba-3e96-4fb7-a836-79675aa65f3f",
    documentationUrl: "",
    discordUrl: "https://discord.gg/sgTctVUJ4D",
    videoId: "",
    thumbnail: "/images/products/metahuman-banshee/thumbnail_ai.webp",
    bannerImage: "/images/products/metahuman-banshee/fab_01.jpg",
    gallery: ["/images/products/metahuman-banshee/fab_01.jpg"],
    features: [
      {
        title: "Supernatural Character",
        description: "A banshee-style character with a sharp, eerie facial profile.",
        image: "/images/products/metahuman-banshee/fab_01.jpg"
      }
    ],
    isFeatured: false
  },
  "metahuman-ghoul": {
    id: "37",
    slug: "metahuman-ghoul",
    name: "The Ghoul",
    topText: "The Ghoul",
    bottomText: "A ghoul character for horror, creature, and dark fantasy scenes.",
    summary: "A ghoul character with a strong horror identity and expressive face.",
    description: `The Ghoul is a horror character pack built around a strong creature identity. The product page includes the trailer, marketplace imagery, and the Fab support Discord link.`,
    category: "metahuman",
    engineVersions: [],
    externalUrl: "https://www.fab.com/listings/4801fdb3-4f73-42e8-8359-2c33784ea064",
    documentationUrl: "",
    discordUrl: "https://discord.gg/sgTctVUJ4D",
    videoId: "DHegzd7qQso",
    thumbnail: "/images/products/metahuman-ghoul/thumbnail_ai.webp",
    bannerImage: "/images/products/metahuman-ghoul/fab_01.jpg",
    gallery: ["/images/products/metahuman-ghoul/fab_01.jpg"],
    features: [
      {
        title: "Ghoul Character",
        description: "A horror-ready character with a strong creature face and expression.",
        image: "/images/products/metahuman-ghoul/fab_01.jpg"
      }
    ],
    isFeatured: false
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
    engineVersions: [],
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

Object.assign(productDetails, {
  "ultimate-level-design-kit": {
    id: "19",
    slug: "ultimate-level-design-kit",
    name: "Ultimate Level Design Kit",
    topText: "Ultimate Level Design Kit",
    bottomText: "Build greybox levels directly in the editor with procedural shapes, snap tools, measurement helpers, gameplay markers, and spline placement.",
    summary: "A level blockout toolkit with procedural greybox shapes, editor placement tools, snap grids, measurements, gameplay markers, and spline-based layout helpers.",
    description: `Ultimate Level Design Kit is built for fast level prototyping inside the editor. Drop in reusable greybox shapes, resize them from the Details panel, color-code areas, align pieces with snapping, measure spaces, and sketch gameplay intent before final art is ready.

The toolkit includes modular building shapes such as boxes, walls, floors, ramps, arches, cylinders, pipes, columns, spheres, ladders, doors, stairs, polygons, and barrel-style forms. It also includes helper actors for measuring distances, visualizing grids, marking trigger areas, placing spawn/cover/navigation references, drawing spline paths, copying layouts, and distributing actors along paths or areas.

Designers can work visually: choose a tool, preview placement, click into the viewport, then keep adjusting dimensions, materials, UVs, collision, and snap behavior without leaving the editor.`,
    category: "plugins",
    engineVersions: [],
    externalUrl: "",
    documentationUrl: "/docs/ultimate-level-design-kit",
    thumbnail: "/images/products/ultimate-level-design-kit/thumbnail.png",
    bannerImage: "/images/products/ultimate-level-design-kit/thumbnail.png",
    gallery: [
      "/images/products/ultimate-level-design-kit/thumbnail.png",
      "/images/products/ultimate-level-design-kit/feature-shapes.png",
      "/images/products/ultimate-level-design-kit/feature-editor-mode.png",
      "/images/products/ultimate-level-design-kit/feature-face-editing.png",
      "/images/products/ultimate-level-design-kit/feature-measure-snap.png",
      "/images/products/ultimate-level-design-kit/feature-gameplay-markers.png",
      "/images/products/ultimate-level-design-kit/feature-spline-placement.png",
    ],
    features: [
      {
        title: "Procedural Shape Library",
        description: "Block out rooms, platforms, ramps, tunnels, columns, stairs, doors, ladders, pipes, and curved spaces with editable actors instead of imported placeholder meshes.",
        image: "/images/products/ultimate-level-design-kit/feature-shapes.png",
      },
      {
        title: "Viewport Placement Workflow",
        description: "Use the toolkit panel to pick a shape or helper, preview it in the viewport, place it, and keep editing its size and options from the Details panel.",
        image: "/images/products/ultimate-level-design-kit/feature-editor-mode.png",
      },
      {
        title: "Face Editing for Blockouts",
        description: "Push, inset, or bevel selectable faces on supported greybox shapes so you can rough in layout details without switching to a modeling package.",
        image: "/images/products/ultimate-level-design-kit/feature-face-editing.png",
      },
      {
        title: "Snap Grid and Measurement Tools",
        description: "Visualize construction grids, snap shapes together, and measure distances or per-axis offsets while tuning scale, spacing, and traversal.",
        image: "/images/products/ultimate-level-design-kit/feature-measure-snap.png",
      },
      {
        title: "Gameplay Planning Helpers",
        description: "Mark trigger areas, spawn points, cover points, and navigation links while the level is still a prototype, so layout and gameplay can evolve together.",
        image: "/images/products/ultimate-level-design-kit/feature-gameplay-markers.png",
      },
      {
        title: "Spline Paths and Actor Placement",
        description: "Draw paths for roads, fences, prop runs, or repeated placement. Use fixed spacing, even counts, random distribution, or area fill workflows.",
        image: "/images/products/ultimate-level-design-kit/feature-spline-placement.png",
      },
    ],
    isExternal: false,
    isFeatured: false,
  },
  "elevenlabs-voice-studio": {
    id: "20",
    slug: "elevenlabs-voice-studio",
    name: "ElevenLabs Voice Studio",
    topText: "ElevenLabs Voice Studio",
    bottomText: "Generate voice lines, design voices, save SoundWave assets, monitor credits, and create face animation support from editor panels.",
    summary: "An editor workflow for ElevenLabs voice generation with Studio, Quick TTS, voice design, SoundWave saving, credit monitoring, and face-animation tools.",
    description: `ElevenLabs Voice Studio brings voice generation into the editor so teams can create dialogue, preview it instantly, save it as project audio, and keep production moving without constantly switching tools.

The Studio panel gives you voice selection, text input, voice controls, generation history, preview playback, and asset saving. Quick TTS is a compact panel for fast one-line generation. Voice Design lets you describe a new voice, preview samples, and save the result to your account. The included credit meter helps you track usage during a session.

For character workflows, the face animation panel can scan saved audio, generate matching facial animation assets, preview them, and help connect audio plus face animation through a Blueprint-friendly persona component.`,
    category: "plugins",
    engineVersions: [],
    externalUrl: "",
    documentationUrl: "/docs/elevenlabs-voice-studio",
    thumbnail: "/images/products/elevenlabs-voice-studio/thumbnail.png",
    bannerImage: "/images/products/elevenlabs-voice-studio/thumbnail.png",
    gallery: [
      "/images/products/elevenlabs-voice-studio/thumbnail.png",
      "/images/products/elevenlabs-voice-studio/feature-studio.png",
      "/images/products/elevenlabs-voice-studio/feature-quick-tts.png",
      "/images/products/elevenlabs-voice-studio/feature-voice-design.png",
      "/images/products/elevenlabs-voice-studio/feature-soundwave-assets.png",
      "/images/products/elevenlabs-voice-studio/feature-credit-meter.png",
      "/images/products/elevenlabs-voice-studio/feature-face-animator.png",
    ],
    features: [
      {
        title: "Full Voice Studio Panel",
        description: "Pick a voice, write dialogue, tune delivery, generate audio, preview the result, save it as a SoundWave, and review session history from one dockable panel.",
        image: "/images/products/elevenlabs-voice-studio/feature-studio.png",
      },
      {
        title: "Quick TTS for Fast Iteration",
        description: "Use the compact panel when you just need to choose a voice, paste a line, generate, preview, and optionally auto-save the result.",
        image: "/images/products/elevenlabs-voice-studio/feature-quick-tts.png",
      },
      {
        title: "Voice Design Workflow",
        description: "Describe a new voice, generate preview samples, listen to each option, and save the selected voice so it appears in your voice list.",
        image: "/images/products/elevenlabs-voice-studio/feature-voice-design.png",
      },
      {
        title: "SoundWave Asset Saving",
        description: "Generated audio can be saved directly into your Content Browser as organized SoundWave assets, ready for cues, dialogue systems, widgets, and Blueprints.",
        image: "/images/products/elevenlabs-voice-studio/feature-soundwave-assets.png",
      },
      {
        title: "Live Credit Meter",
        description: "See usage and account status in the panel, with refreshes after generation so voice production stays easier to budget during a session.",
        image: "/images/products/elevenlabs-voice-studio/feature-credit-meter.png",
      },
      {
        title: "Face Animation and Persona Playback",
        description: "Generate face animation assets from saved audio and use the included Blueprint component to play audio and matching facial animation by ID.",
        image: "/images/products/elevenlabs-voice-studio/feature-face-animator.png",
      },
    ],
    isExternal: false,
    isFeatured: false,
  },
  "ultimate-ai-mesh-generator": {
    id: "21",
    slug: "ultimate-ai-mesh-generator",
    name: "Ultimate AI Mesh Generator",
    topText: "Ultimate AI Mesh Generator",
    bottomText: "Generate 3D meshes from prompts, single images, multi-view references, or retexture workflows without leaving the editor.",
    summary: "An editor tool for generating, importing, organizing, and placing AI-created 3D meshes from supported external mesh generation services.",
    description: `Ultimate AI Mesh Generator helps artists and designers turn references into usable static mesh assets from inside the editor. Choose a provider, enter a prompt or drop reference images, start a task, monitor progress, and import the finished result into organized Content Browser folders.

The current tool supports text-to-3D, single image-to-3D, multi-image generation, and retexturing depending on the selected provider. It can show account balance and estimated cost where the provider supports it, stores a local task history, downloads result previews, imports meshes and textures, builds material assets, and can place completed meshes at a target actor in the level.

It is designed as an editor workflow first: set up credentials once, generate from a dockable panel, and keep using the imported meshes like normal project assets.`,
    category: "plugins",
    engineVersions: [],
    externalUrl: "",
    documentationUrl: "/docs/ultimate-ai-mesh-generator",
    thumbnail: "/images/products/ultimate-ai-mesh-generator/thumbnail.png",
    bannerImage: "/images/products/ultimate-ai-mesh-generator/thumbnail.png",
    gallery: [
      "/images/products/ultimate-ai-mesh-generator/thumbnail.png",
      "/images/products/ultimate-ai-mesh-generator/feature-providers.png",
      "/images/products/ultimate-ai-mesh-generator/feature-text-to-3d.png",
      "/images/products/ultimate-ai-mesh-generator/feature-image-to-3d.png",
      "/images/products/ultimate-ai-mesh-generator/feature-auto-import.png",
      "/images/products/ultimate-ai-mesh-generator/feature-spawn-target.png",
      "/images/products/ultimate-ai-mesh-generator/feature-history-retexture.png",
    ],
    features: [
      {
        title: "Multiple Provider Support",
        description: "Connect provider credentials in Project Settings, switch providers from the tool panel, and only use the generation modes available for the selected service.",
        image: "/images/products/ultimate-ai-mesh-generator/feature-providers.png",
      },
      {
        title: "Text-to-3D Generation",
        description: "Describe the object you want, add optional style or avoidance notes where supported, then generate a mesh without leaving the editor.",
        image: "/images/products/ultimate-ai-mesh-generator/feature-text-to-3d.png",
      },
      {
        title: "Image and Multi-Image Generation",
        description: "Drop a single reference image or provide front, back, left, and right references for subjects that need more accurate shape guidance.",
        image: "/images/products/ultimate-ai-mesh-generator/feature-image-to-3d.png",
      },
      {
        title: "Automatic Import and Organization",
        description: "Finished results are downloaded, imported as Static Mesh assets, organized into provider folders, and connected to generated materials and texture assets.",
        image: "/images/products/ultimate-ai-mesh-generator/feature-auto-import.png",
      },
      {
        title: "Spawn Target Placement",
        description: "Place an AI Mesh Spawn Target in the level before generation and the finished mesh can appear at that target when the import completes.",
        image: "/images/products/ultimate-ai-mesh-generator/feature-spawn-target.png",
      },
      {
        title: "Task History and Retexture Flow",
        description: "Reopen previous tasks, refresh status, re-import results, save files, and use supported workflows to restyle an existing generated mesh.",
        image: "/images/products/ultimate-ai-mesh-generator/feature-history-retexture.png",
      },
    ],
    isExternal: false,
    isFeatured: false,
  },
});

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
