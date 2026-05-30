export interface SeoLandingProductLink {
  slug: string;
  label?: string;
  reason: string;
  docsHref?: string;
}

export interface SeoLandingFAQ {
  q: string;
  a: string;
}

export interface SeoLandingPage {
  slug: string;
  shortTitle: string;
  title: string;
  description: string;
  heroTitle: string;
  heroText: string;
  intro: string;
  audience: string[];
  outcomes: string[];
  highlights: Array<{
    title: string;
    description: string;
  }>;
  featuredProducts: SeoLandingProductLink[];
  relatedLinks: Array<{
    href: string;
    title: string;
    description: string;
  }>;
  faqs: SeoLandingFAQ[];
}

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: "unreal-engine-minimap-system",
    shortTitle: "Minimap System",
    title: "Unreal Engine Minimap System for Maps, POI and Navigation",
    description:
      "Landing page for teams looking for an Unreal Engine minimap system with world maps, points of interest, and navigation-ready Blueprint workflows.",
    heroTitle: "Unreal Engine minimap system with map, POI, and navigation workflows",
    heroText:
      "If you need an Unreal Engine minimap plugin that is practical in production, this page points you to Athian Games products built for map displays, radar views, points of interest, and player navigation.",
    intro:
      "Searches for an Unreal Engine minimap system usually come from teams that need more than a simple rotating widget. They need a map that reads clearly, supports markers, scales to larger worlds, and stays friendly for Blueprint-driven gameplay work.",
    audience: [
      "Gameplay teams building RPG, survival, adventure, and action HUDs",
      "Blueprint-only projects that need map markers and route guidance",
      "Teams replacing ad hoc minimap widgets with a more complete workflow",
    ],
    outcomes: [
      "Present a cleaner player map and minimap experience",
      "Track POI, objectives, and navigation targets with less custom UI work",
      "Keep map features usable from Blueprint without building the whole system from scratch",
    ],
    highlights: [
      {
        title: "Map and minimap in one workflow",
        description:
          "Handle player-facing minimap views, larger map views, marker systems, and navigation support from a connected setup instead of mixing unrelated widgets.",
      },
      {
        title: "Blueprint-friendly integration",
        description:
          "These products are suited for teams that work mainly in Blueprint and want a direct path to implementation.",
      },
      {
        title: "Useful for both utility and style",
        description:
          "Whether your HUD is clean and tactical or stylized and gamey, you can start from the same base system and shape the final presentation around your project.",
      },
    ],
    featuredProducts: [
      {
        slug: "minimap-map-and-navigation-system",
        reason:
          "Best fit when you need a fuller map workflow with map bounds, points of interest, minimap widgets, and player navigation support.",
        docsHref: "/docs/minimap-map-and-navigation-system",
      },
      {
        slug: "radar-system-with-minimap",
        reason:
          "Best fit when you want radar-style tracking, actor markers, and a compact minimap presentation inside a Blueprint gameplay UI.",
        docsHref: "/docs/minimap-map-and-navigation-system",
      },
    ],
    relatedLinks: [
      {
        href: "/products/category/blueprints",
        title: "Blueprint systems",
        description: "Browse Blueprint-ready gameplay systems from Athian Games.",
      },
      {
        href: "/docs/minimap-map-and-navigation-system",
        title: "Minimap documentation",
        description: "Step-by-step setup for map bounds, minimap widgets, and POI.",
      },
    ],
    faqs: [
      {
        q: "Is this mainly for Blueprint users?",
        a: "Yes. The recommended minimap products on this page are suitable for Blueprint-heavy teams and product pages already point you to the relevant setup documentation.",
      },
      {
        q: "Can I use the same setup for a minimap and a larger world map?",
        a: "Yes. That is one of the core reasons teams search for this type of system, and the main minimap product is positioned around that broader workflow rather than a single small HUD element.",
      },
      {
        q: "What if I only need radar-style tracking?",
        a: "Start with Radar System with Minimap. It is the cleaner fit when your focus is actor tracking and a tighter radar/minimap presentation.",
      },
    ],
  },
  {
    slug: "unreal-engine-runtime-database-plugin",
    shortTitle: "Runtime Database Plugin",
    title: "Unreal Engine Runtime Database Plugin for Blueprint Projects",
    description:
      "Landing page for Unreal Engine runtime database access with Blueprint-friendly PostgreSQL, MySQL, and Microsoft SQL workflows.",
    heroTitle: "Unreal Engine runtime database access for Blueprint-first projects",
    heroText:
      "If you are searching for an Unreal Engine runtime database plugin, the important question is usually not just which database works, but how quickly your team can connect it inside a real Blueprint workflow.",
    intro:
      "Athian Games' database product page is set up as a practical entry point for runtime database access in Unreal. It covers shared capabilities and then breaks out PostgreSQL, MySQL, and Microsoft SQL into their own product-specific pages and documentation paths.",
    audience: [
      "Blueprint-only teams that need runtime read and write access",
      "Projects storing user data, inventories, progression, or external content",
      "Teams comparing PostgreSQL, MySQL, and Microsoft SQL from an Unreal workflow point of view",
    ],
    outcomes: [
      "Choose the right database workflow without comparing random forum posts",
      "Move from product page to database-specific setup docs quickly",
      "Keep implementation readable for non-C++ Unreal teams",
    ],
    highlights: [
      {
        title: "Three database options under one product family",
        description:
          "The database section starts with common capabilities, then routes the user into PostgreSQL, MySQL, or Microsoft SQL pages depending on what they actually plan to use.",
      },
      {
        title: "Database-specific docs only when relevant",
        description:
          "Documentation is intentionally split so each database can have a cleaner end-user path instead of one vague shared page.",
      },
      {
        title: "Better for Blueprint implementation",
        description:
          "The current database content on the site is written to serve Blueprint users directly rather than expecting end users to navigate engine-side C++ details first.",
      },
    ],
    featuredProducts: [
      {
        slug: "databases",
        reason:
          "Best starting point when you want to compare supported databases, shared capabilities, and the route into each database-specific page.",
      },
    ],
    relatedLinks: [
      {
        href: "/products/databases/postgresql",
        title: "PostgreSQL page",
        description: "Database-specific feature and setup view for PostgreSQL.",
      },
      {
        href: "/products/databases/mysql",
        title: "MySQL page",
        description: "Database-specific feature and setup view for MySQL.",
      },
      {
        href: "/products/databases/microsoft-sql",
        title: "Microsoft SQL page",
        description: "Database-specific feature and setup view for Microsoft SQL Server.",
      },
      {
        href: "/docs/databases/postgresql",
        title: "Database docs",
        description: "Step-by-step setup documentation for each supported database.",
      },
    ],
    faqs: [
      {
        q: "Can I choose the database after I read the common product page?",
        a: "Yes. The database landing flow is designed so users can start from the shared database page and then move into a specific PostgreSQL, MySQL, or Microsoft SQL page when they know what they need.",
      },
      {
        q: "Do I need to know C++ to use the database pages and docs?",
        a: "The current site flow is aimed at Blueprint users first. Database-specific docs are written to guide implementation in a more direct end-user style.",
      },
      {
        q: "Where should I start if I already know my database choice?",
        a: "Go directly to the PostgreSQL, MySQL, or Microsoft SQL product page from the shared database product page or the related links section on this landing page.",
      },
    ],
  },
  {
    slug: "unreal-engine-runtime-fbx-import",
    shortTitle: "Runtime FBX Import",
    title: "Unreal Engine Runtime FBX Import for User-Driven Content and Tools",
    description:
      "Landing page for Unreal Engine runtime FBX import workflows focused on async import, runtime scenes, and user-driven content pipelines.",
    heroTitle: "Runtime FBX import for Unreal Engine projects that need user-driven content",
    heroText:
      "When teams search for Unreal Engine runtime FBX import, they are usually trying to solve a real product requirement: bringing in external scenes, user assets, or dynamic 3D content after the project is already running.",
    intro:
      "Athian Games offers a runtime FBX import product and documentation path that is much more useful than a generic feature list. It is suited to projects that need runtime import behavior, texture handling, collisions, save and load, or scene reconstruction workflows.",
    audience: [
      "Projects importing user content or external scene files at runtime",
      "Tool builders making configurators, viewers, or interactive editors",
      "Teams that need async import and a documented runtime workflow",
    ],
    outcomes: [
      "Reduce the amount of custom import plumbing your team writes",
      "Move from product overview to concrete import steps quickly",
      "Handle more than just a single mesh preview use case",
    ],
    highlights: [
      {
        title: "Built around runtime import as a real workflow",
        description:
          "This is not just a one-line promise that a file loads. The supporting docs on the site break the process into import setup, mesh actor behavior, materials, collisions, animation, and save/load considerations.",
      },
      {
        title: "Useful for viewers and custom tools",
        description:
          "Teams building interactive product viewers, level tools, mod-friendly systems, or import-heavy utilities can use this as a starting point instead of hand-rolling every step.",
      },
      {
        title: "Documentation path already exists",
        description:
          "The runtime FBX import product already has a deeper docs structure on this site, which makes it a good target for search-intent pages.",
      },
    ],
    featuredProducts: [
      {
        slug: "runtime-fbx-import",
        reason:
          "Best fit for runtime scene import, async FBX loading, collision setup, and import-related save/load workflows.",
        docsHref: "/docs/runtime-fbx-import",
      },
    ],
    relatedLinks: [
      {
        href: "/docs/runtime-fbx-import",
        title: "Runtime FBX docs",
        description: "Installation, first import, materials, collisions, and runtime reference material.",
      },
      {
        href: "/products/category/plugins",
        title: "Code plugins",
        description: "Browse more Unreal Engine plugins and tooling products.",
      },
    ],
    faqs: [
      {
        q: "Is this only useful for editor workflows?",
        a: "No. This landing page is specifically about runtime FBX import use cases rather than editor-only asset preparation.",
      },
      {
        q: "Can I learn the setup from the site before buying?",
        a: "Yes. The runtime FBX import documentation path on the site is one of the deeper documentation sets available and is meant to help teams understand the workflow.",
      },
      {
        q: "Who benefits most from this type of plugin?",
        a: "Teams building user-driven import tools, runtime viewers, configurators, or other products where external 3D content needs to be brought into Unreal after launch.",
      },
    ],
  },
  {
    slug: "unreal-engine-post-process-shaders",
    shortTitle: "Post Process Shaders",
    title: "Unreal Engine Post Process Shaders and Stylized Screen Effects",
    description:
      "Landing page for Unreal Engine post-process shaders, stylized screen effects, distortion packs, and cinematic scene treatments from Athian Games.",
    heroTitle: "Post-process shaders and stylized screen effects for Unreal Engine scenes",
    heroText:
      "Searches around Unreal Engine post-process shaders usually come from teams trying to give their project a recognizable look without rebuilding every effect pipeline from scratch.",
    intro:
      "Athian Games has one of the stronger product clusters on the site in this area: multiple Art Of Shader products, a larger megapack, and documentation paths that explain how to work with the effects rather than just showing screenshots.",
    audience: [
      "Teams building stylized looks for gameplay, cinematics, or menus",
      "Creators comparing distortion, film, toon, and stylized post-process options",
      "Projects that want multiple visual directions from one shader product family",
    ],
    outcomes: [
      "Choose between stylized, film, distortion, and combined shader packs faster",
      "Use one product family instead of mixing unrelated one-off post-process materials",
      "Move from browsing effect examples to actual setup docs on the same site",
    ],
    highlights: [
      {
        title: "Multiple shader packs with different visual goals",
        description:
          "Instead of forcing one pack to do everything, the site separates distortion, film and special effects, stylized post-process, toon looks, and the larger megapack.",
      },
      {
        title: "Good fit for product-cluster SEO",
        description:
          "This is one of the strongest content areas on the site because it already has several related products and shared documentation context.",
      },
      {
        title: "Works well for broad and specific searches",
        description:
          "This page can serve users looking for a general post-process shader pack as well as users comparing one Art Of Shader product against another.",
      },
    ],
    featuredProducts: [
      {
        slug: "art-of-shader-megapack",
        reason:
          "Best fit when you want the broadest Art Of Shader collection rather than choosing one narrow pack first.",
        docsHref: "/docs/art-of-shader-megapack",
      },
      {
        slug: "art-of-shader-distortion-and-glitches",
        reason:
          "A good fit for distortion, glitch, interference, and broken-screen style effects.",
        docsHref: "/docs/art-of-shader-distortion-and-glitches",
      },
      {
        slug: "art-of-shader-stylized-post-process",
        reason:
          "A better fit for painterly, toon-like, and stylized presentation directions.",
        docsHref: "/docs/art-of-shader-stylized-post-process",
      },
      {
        slug: "art-of-shader-film-and-special-effects",
        reason:
          "Useful when your goal is more film treatment, scene mood, or special screen-space looks.",
        docsHref: "/docs/art-of-shader-film-and-special-effects",
      },
    ],
    relatedLinks: [
      {
        href: "/products/category/shaders",
        title: "Shader category",
        description: "Browse the full shader and post-process catalog.",
      },
      {
        href: "/docs/art-of-shader-distortion-and-glitches",
        title: "Art Of Shader docs",
        description: "Shared documentation entry points for the Art Of Shader family.",
      },
    ],
    faqs: [
      {
        q: "Which page should I start with if I only know that I want strong post-process visuals?",
        a: "Start here, then move into the shader category or the Art Of Shader product pages depending on whether you want a broad pack or a more specific visual direction.",
      },
      {
        q: "Is there a single pack that covers multiple styles?",
        a: "Yes. The Art Of Shader Megapack is the natural starting point if you want the broader family rather than one specialized pack.",
      },
      {
        q: "Do these pages lead into setup documentation?",
        a: "Yes. The main shader product family on this site is supported by documentation pages, which helps make the landing page useful beyond discovery alone.",
      },
    ],
  },
  {
    slug: "unreal-engine-metahuman-child-characters",
    shortTitle: "MetaHuman Child Characters",
    title: "Unreal Engine MetaHuman Child Characters for Story, Horror and Fantasy Scenes",
    description:
      "Landing page for Unreal Engine MetaHuman child characters including combo packs and themed child character products from Athian Games.",
    heroTitle: "MetaHuman child characters for cinematic, horror, and story-driven Unreal Engine scenes",
    heroText:
      "When teams search for Unreal Engine MetaHuman child characters, they are usually trying to find believable, themed, and ready-to-review options quickly rather than building a long character sourcing list by hand.",
    intro:
      "Athian Games now has a dedicated MetaHuman product category on the site, including a combo pack and individual child character pages. This landing page helps those searches land on a curated path instead of a generic product grid.",
    audience: [
      "Cinematic teams building family, school, horror, or fantasy scenes",
      "Story-driven projects that need younger character variants",
      "Teams comparing a combo pack against more specific character styles",
    ],
    outcomes: [
      "Review multiple child character options from one site path",
      "Move from broad search intent to a specific child character page faster",
      "Compare realistic, creepy, fantasy, and stylized child character directions",
    ],
    highlights: [
      {
        title: "Combo pack plus individual product pages",
        description:
          "The site does not stop at one bundle page. It also routes users into the specific child character packs that make up the MetaHuman child offering.",
      },
      {
        title: "Good fit for narrow and emotional search intent",
        description:
          "Searches around child characters are often very style-specific, so this page groups the relevant products while still letting users jump directly to a more exact fit.",
      },
      {
        title: "Useful visual-first browsing path",
        description:
          "The MetaHuman product pages on this site now include image-led product presentation and trailer support where appropriate.",
      },
    ],
    featuredProducts: [
      {
        slug: "metahuman-children",
        reason:
          "Best starting point when you want the child character combo pack and the ability to branch into included child products.",
      },
      {
        slug: "metahuman-grace-little-girl",
        reason:
          "A cleaner choice for teams looking for a more grounded little girl character presentation.",
      },
      {
        slug: "metahuman-arya-creepy-doll",
        reason:
          "A stronger fit for horror projects that want a deliberately unsettling child character direction.",
      },
      {
        slug: "metahuman-ghost-children",
        reason:
          "A direct fit for supernatural or ghost-story scenes that need themed child characters.",
      },
    ],
    relatedLinks: [
      {
        href: "/products/category/metahuman",
        title: "MetaHuman category",
        description: "Browse all MetaHuman-related products on the site.",
      },
      {
        href: "/products/metahuman-children",
        title: "MetaHuman child combo pack",
        description: "Open the parent product page and move into individual included packs.",
      },
    ],
    faqs: [
      {
        q: "Is there one page where I can compare the child character options first?",
        a: "Yes. The MetaHuman child combo pack page is the best first stop if you want to compare multiple included child packs before choosing one.",
      },
      {
        q: "What if I need horror or supernatural child characters specifically?",
        a: "This landing page points directly to Arya: The Creepy Doll and The Ghost Children, which are the stronger themed fits for horror and supernatural scenes.",
      },
      {
        q: "Do these products have separate docs pages?",
        a: "No. The MetaHuman product flow on the site is intentionally more product-page and support-link driven than documentation-driven.",
      },
    ],
  },
  {
    slug: "unreal-engine-tree-view-umg",
    shortTitle: "Tree View for UMG",
    title: "Unreal Engine Tree View for UMG and Blueprint UI Workflows",
    description:
      "Landing page for Unreal Engine tree view UI workflows in UMG, focused on nested rows, custom widgets, events, and Blueprint integration.",
    heroTitle: "Tree view UI for Unreal Engine UMG and Blueprint-driven interfaces",
    heroText:
      "Teams searching for an Unreal Engine tree view in UMG are usually building menus, settings panels, editors, quest interfaces, or tools that need expandable nested UI.",
    intro:
      "Athian Games has a dedicated TreeView for UMG product on the site with a real documentation path, which makes it an excellent candidate for a focused intent page rather than burying it under a general product listing.",
    audience: [
      "Teams building in-game menus with nested rows or categories",
      "Tool builders creating editor-like UI inside UMG",
      "Blueprint users who need tree-style interfaces without custom Slate work",
    ],
    outcomes: [
      "Understand quickly whether a UMG tree view product solves your UI problem",
      "Jump from search intent into product details and setup docs",
      "Avoid building a nested tree widget from scratch when your project just needs a reliable workflow",
    ],
    highlights: [
      {
        title: "Focused on nested UMG interaction",
        description:
          "This is not a broad UI framework pitch. It is targeted at the specific expandable tree-style interface pattern teams often need for menus and tools.",
      },
      {
        title: "Good Blueprint fit",
        description:
          "The product and docs are useful for teams that want row generation, expansion, selection, and styling control without dropping into a much heavier custom UI path.",
      },
      {
        title: "Supported by direct documentation",
        description:
          "The product already has documentation on the site for designer setup, Blueprint runtime setup, custom rows, events, styling, and troubleshooting.",
      },
    ],
    featuredProducts: [
      {
        slug: "treeview-for-umg",
        reason:
          "The direct fit for nested UMG tree views with Blueprint setup, custom rows, events, and styling control.",
        docsHref: "/docs/treeview-for-umg",
      },
    ],
    relatedLinks: [
      {
        href: "/docs/treeview-for-umg",
        title: "TreeView for UMG docs",
        description: "Overview, designer setup, Blueprint runtime setup, rows, events, and styling.",
      },
      {
        href: "/products/category/umg",
        title: "UMG category",
        description: "Browse UI-focused products on the site.",
      },
    ],
    faqs: [
      {
        q: "Is this only for editor tools?",
        a: "No. Tree-style interfaces are useful for in-game settings, inventory categories, quest structures, browser-like menus, and tool UIs.",
      },
      {
        q: "Can Blueprint users work with it directly?",
        a: "Yes. That is one of the key reasons this landing page exists: the product is intended to be usable from Blueprint workflows rather than only as a deep custom UI code path.",
      },
      {
        q: "Where do I find setup instructions?",
        a: "Go straight to the TreeView for UMG documentation link from this page. It already covers designer setup, Blueprint runtime setup, and troubleshooting.",
      },
    ],
  },
  {
    slug: "unreal-engine-procedural-vfx",
    shortTitle: "Procedural VFX",
    title: "Unreal Engine Procedural VFX for Niagara, Space Scenes, and Generative Effects",
    description:
      "Landing page for Unreal Engine procedural VFX searches around Niagara systems, procedural space visuals, generative effects, and scene-driven visual motion.",
    heroTitle: "Procedural VFX for Unreal Engine scenes, tools, and space-driven visuals",
    heroText:
      "Searches for Unreal Engine procedural VFX usually come from teams that want more than a fixed effect library. They are looking for systems that can be shaped, repeated, generated, or art-directed into many results.",
    intro:
      "Athian Games has several products that fit this area from different angles: Niagara-driven geometry effects, procedural galaxy visuals, volumetric nebula and black hole systems, and a spline-based vortex workflow for scene motion and traversal.",
    audience: [
      "Teams building stylized or cinematic procedural visual effects",
      "Projects creating space scenes, tunnels, energy motion, or generative Niagara visuals",
      "Creators who need reusable systems instead of one-off effect shots",
    ],
    outcomes: [
      "Find the right procedural effect product faster based on the kind of visual motion you need",
      "Compare Niagara-focused and volumetric-focused procedural VFX directions",
      "Route space-scene and generative VFX searches into real product pages instead of broad catalog browsing",
    ],
    highlights: [
      {
        title: "Several procedural effect directions on one site",
        description:
          "The site now covers procedural galaxies, volumetric nebula, black hole visuals, Niagara geometry effects, and vortex/tunnel workflows instead of collapsing them into one vague VFX bucket.",
      },
      {
        title: "Useful for cinematic and gameplay scenes",
        description:
          "These products can support both environment-driven scene visuals and effect-heavy interactive moments depending on the project.",
      },
      {
        title: "Better for searchers with partial intent",
        description:
          "A lot of people know they want procedural VFX before they know whether the answer is Niagara, volumetric space visuals, or a motion-driven tunnel system. This page helps split that decision cleanly.",
      },
    ],
    featuredProducts: [
      {
        slug: "procedural-galaxy-system",
        reason:
          "Strong fit for procedural galaxy generation, spiral structure, star cluster visuals, and broader space-scene composition.",
      },
      {
        slug: "niagara-curves-and-surfaces",
        reason:
          "Best fit when the search is really about Niagara-driven procedural geometry, curves, and surface-style visual construction.",
      },
      {
        slug: "volumetric-clouds-and-nebula",
        reason:
          "Useful when you need procedural-feeling atmospheric space visuals with volumetric cloud and nebula presentation.",
      },
      {
        slug: "volumetric-black-hole",
        reason:
          "A targeted choice for teams specifically after procedural black hole visuals and space distortion scenes.",
      },
      {
        slug: "procedural-vortex-tunnel",
        reason:
          "A better fit when the procedural effect is about tunnels, spline-based motion, and stylized traversal visuals instead of broad space composition.",
        docsHref: "/docs/procedural-vortex-tunnel",
      },
    ],
    relatedLinks: [
      {
        href: "/products/category/vfx",
        title: "VFX category",
        description: "Browse Niagara and real-time visual effect products.",
      },
      {
        href: "/products/category/volumetric",
        title: "Volumetric category",
        description: "Browse nebula, black hole, and other volumetric scene products.",
      },
      {
        href: "/docs/procedural-vortex-tunnel",
        title: "Procedural Vortex Tunnel docs",
        description: "Read the setup path for the spline-based vortex workflow.",
      },
    ],
    faqs: [
      {
        q: "What if I know I want procedural VFX but not which type yet?",
        a: "Start here. This page separates Niagara geometry-style effects, space-scene systems, volumetric visuals, and vortex/tunnel workflows so you can narrow the search with less guesswork.",
      },
      {
        q: "Is this more for gameplay effects or cinematic visuals?",
        a: "It supports both. Some products are better for scene-scale cinematic visuals while others are more naturally suited to gameplay-driven or motion-driven presentation.",
      },
      {
        q: "Where should I start for space visuals specifically?",
        a: "Begin with Procedural Galaxy System, Volumetric Clouds and Nebula, and Volumetric Black Hole. Those are the strongest fits when the search intent is space-scene driven.",
      },
    ],
  },
  {
    slug: "unreal-engine-radar-system-minimap",
    shortTitle: "Radar and Minimap",
    title: "Unreal Engine Radar System and Minimap UI for Blueprint HUDs",
    description:
      "Landing page for Unreal Engine radar system and minimap searches focused on tactical HUDs, actor tracking, points of interest, and Blueprint UI workflows.",
    heroTitle: "Radar system and minimap UI for Unreal Engine Blueprint HUD workflows",
    heroText:
      "Some searches are really about a full map system, but others are more tactical: actor tracking, nearby targets, compact UI, and radar-style awareness. This page is for that second group.",
    intro:
      "Athian Games now has both a broader map workflow product and a more radar-specific minimap product. This landing page helps separate those intents so the user lands on the product that matches the kind of HUD they are building.",
    audience: [
      "Teams building compact HUDs for tracking actors, threats, allies, or targets",
      "Blueprint projects that need radar-style map feedback with less full-map complexity",
      "Designers comparing a radar/minimap UI against a larger map-and-navigation workflow",
    ],
    outcomes: [
      "Choose between a radar-focused and map-focused product path faster",
      "Reduce time spent comparing similar-sounding minimap products",
      "Move directly into the right product and documentation route for HUD tracking work",
    ],
    highlights: [
      {
        title: "Separate tactical intent from full map intent",
        description:
          "A lot of minimap searches are actually radar searches in disguise. This page gives that use case its own route instead of treating every query as a world-map problem.",
      },
      {
        title: "Useful for actor tracking and spatial awareness",
        description:
          "If the core need is seeing nearby actors, markers, and directional context inside the HUD, the radar-specific product path is usually the cleaner fit.",
      },
      {
        title: "Still connected to the broader map docs",
        description:
          "The radar and minimap flow still benefits from the stronger map and minimap documentation already on the site where relevant.",
      },
    ],
    featuredProducts: [
      {
        slug: "radar-system-with-minimap",
        reason:
          "Best fit when the search is really about radar presentation, actor tracking, HUD markers, and compact minimap behavior.",
        docsHref: "/docs/minimap-map-and-navigation-system",
      },
      {
        slug: "minimap-map-and-navigation-system",
        reason:
          "A better fit when the project also needs a larger map, POI handling, and navigation workflows beyond the tighter radar use case.",
        docsHref: "/docs/minimap-map-and-navigation-system",
      },
    ],
    relatedLinks: [
      {
        href: "/products/category/blueprints",
        title: "Blueprint systems",
        description: "Browse more Blueprint-friendly gameplay systems and HUD workflows.",
      },
      {
        href: "/docs/minimap-map-and-navigation-system",
        title: "Map and minimap docs",
        description: "Read the step-by-step map and minimap setup documentation.",
      },
    ],
    faqs: [
      {
        q: "Should I start with the radar product or the larger map product?",
        a: "If the main goal is compact HUD tracking, start with Radar System with Minimap. If you also need world-map behavior, POI workflows, and navigation, the larger minimap and map product is the better first stop.",
      },
      {
        q: "Is this useful for Blueprint-only teams?",
        a: "Yes. This landing page is specifically written to route Blueprint-first HUD work into the right product path instead of assuming a code-driven UI setup.",
      },
      {
        q: "Can I still use the map documentation if I choose the radar product?",
        a: "Yes. The radar path on the site still points into the broader minimap documentation when it helps the implementation flow.",
      },
    ],
  },
  {
    slug: "unreal-engine-dynamic-mesh-occluder",
    shortTitle: "Dynamic Mesh Occluder",
    title: "Unreal Engine Dynamic Mesh Occluder for Clothing and Hidden Body Geometry",
    description:
      "Landing page for Unreal Engine dynamic mesh occlusion searches focused on hiding covered body geometry, reducing overdraw, and improving character outfit workflows.",
    heroTitle: "Dynamic mesh occlusion for clothing, hidden body geometry, and cleaner character rendering",
    heroText:
      "When people search for Unreal Engine hidden body geometry or mesh occlusion under clothing, they are usually dealing with a character customization problem that becomes a rendering and workflow problem very quickly.",
    intro:
      "Athian Games' Dynamic Mesh Occluder product is one of the more specific utility plugins on the site. It is aimed at projects that need to strip or hide covered body geometry under clothing so runtime presentation stays cleaner and more efficient.",
    audience: [
      "Character customization systems with modular clothing and body parts",
      "Teams dealing with hidden body geometry under outfits, armor, or layered character wearables",
      "Projects trying to reduce wasted overdraw and cleanup work in character pipelines",
    ],
    outcomes: [
      "Route clothing-occlusion searches into a product built for that exact problem",
      "Understand quickly whether the product solves mesh hiding under garments",
      "Move from search intent into docs and setup material without bouncing through unrelated utility plugins",
    ],
    highlights: [
      {
        title: "Very specific problem, very specific product",
        description:
          "This page exists because searches around body occlusion under clothing are much narrower than a generic plugin search and deserve their own entry point.",
      },
      {
        title: "Useful for outfit-heavy character workflows",
        description:
          "If your game or tool swaps clothing pieces, armor, or layered garments often, hidden geometry becomes a recurring problem rather than a one-off cleanup task.",
      },
      {
        title: "Supports both visual and performance concerns",
        description:
          "The value is not just cleaner visuals. It also helps teams reduce the cost of rendering geometry that should never be seen under clothing.",
      },
    ],
    featuredProducts: [
      {
        slug: "dynamic-mesh-occluder",
        reason:
          "The direct fit for detecting and removing covered body geometry under clothing in Unreal character workflows.",
        docsHref: "/docs/dynamic-mesh-occluder",
      },
    ],
    relatedLinks: [
      {
        href: "/docs/dynamic-mesh-occluder",
        title: "Dynamic Mesh Occluder docs",
        description: "Read installation, editor workflow, runtime setup, and troubleshooting guidance.",
      },
      {
        href: "/products/category/plugins",
        title: "Code plugins",
        description: "Browse more Unreal Engine utility and workflow plugins.",
      },
      {
        href: "/products/category/metahuman",
        title: "MetaHuman category",
        description: "Browse character-focused products that may pair with character workflow tooling.",
      },
    ],
    faqs: [
      {
        q: "Is this page only relevant if I have modular clothing?",
        a: "That is the strongest use case, yes. Teams with outfit swaps, layered clothing, or body-part visibility issues under garments are the natural audience.",
      },
      {
        q: "Is the point just visual cleanup?",
        a: "No. A big reason to care is that hidden body geometry can also create wasted rendering work, so the product helps with both presentation and performance concerns.",
      },
      {
        q: "Where do I learn how the workflow actually works?",
        a: "Go directly to the Dynamic Mesh Occluder documentation from this page. It already covers installation, tool usage, runtime setup, and troubleshooting.",
      },
    ],
  },
  {
    slug: "unreal-engine-cinematic-shaders",
    shortTitle: "Cinematic Shaders",
    title: "Unreal Engine Cinematic Shaders for Film Looks, Post Process, and Scene Mood",
    description:
      "Landing page for Unreal Engine cinematic shader searches focused on film looks, scene mood, camera treatment, post-process blendables, and atmospheric screen effects.",
    heroTitle: "Cinematic shaders for Unreal Engine film looks, scene mood, and post-process treatment",
    heroText:
      "Not every shader search is about stylization or distortion. A big chunk of Unreal Engine visual search intent is really about cinematic treatment: scene mood, screen-space atmosphere, camera look, and film-like presentation.",
    intro:
      "Athian Games has several products that serve this use case well, especially around film and special effects, scene-level post-process treatment, and reusable blendable looks. This page gives those searches a more precise path than the broader shader cluster page.",
    audience: [
      "Teams building cinematic looks for cutscenes, trailers, or atmosphere-heavy gameplay",
      "Projects comparing film treatment shaders against broader stylized packs",
      "Creators who want scene mood controls, blendables, and camera-driven screen effects",
    ],
    outcomes: [
      "Find the shader products best suited to cinematic scene treatment",
      "Separate film-look needs from broader stylized or glitch-focused shader searches",
      "Move into the right shader product family and category page with less noise",
    ],
    highlights: [
      {
        title: "Focused on mood and presentation",
        description:
          "This page is narrower than the general post-process shader page. It is about cinematic treatment, scene feel, and camera-facing visual polish more than broad effect variety.",
      },
      {
        title: "Good fit for film and special effects searches",
        description:
          "If the search intent is closer to film grain, mood, lens-like treatment, or post-process atmosphere than to toon or glitch looks, this page is the better entry point.",
      },
      {
        title: "Still connected to the larger shader family",
        description:
          "The page routes users into the more cinematic products first while keeping the broader shader catalog and Art Of Shader family nearby.",
      },
    ],
    featuredProducts: [
      {
        slug: "art-of-shader-film-and-special-effects",
        reason:
          "Best fit when the goal is film-like treatment, scene mood, and cinematic post-process presentation.",
        docsHref: "/docs/art-of-shader-film-and-special-effects",
      },
      {
        slug: "post-process-blendables-volume-1",
        reason:
          "A useful choice for reusable blendable looks and scene-wide post-process mood changes through volume-driven workflows.",
      },
      {
        slug: "art-of-shader-megapack",
        reason:
          "A broader option when cinematic looks are only one part of the visual treatment you need.",
        docsHref: "/docs/art-of-shader-megapack",
      },
      {
        slug: "procedural-skybox",
        reason:
          "Helpful when the cinematic search also includes large-scale sky and atmosphere presentation rather than only screen-space treatment.",
      },
    ],
    relatedLinks: [
      {
        href: "/products/category/shaders",
        title: "Shader category",
        description: "Browse the full shader and post-process lineup.",
      },
      {
        href: "/docs/art-of-shader-film-and-special-effects",
        title: "Art Of Shader docs",
        description: "Open the shader documentation path for setup and effect categories.",
      },
      {
        href: "/unreal-engine/unreal-engine-post-process-shaders",
        title: "General post-process shader page",
        description: "Compare this cinematic-focused page with the broader post-process shader landing page.",
      },
    ],
    faqs: [
      {
        q: "How is this different from the general post-process shader page?",
        a: "This page is more focused. It is aimed at searches about cinematic treatment, film looks, and scene mood rather than the broader range of stylized, distortion, and multipurpose post-process directions.",
      },
      {
        q: "Which product should I start with for a film-like scene treatment?",
        a: "Art Of Shader - Film And Special Effects is the clearest first stop when the search intent is strongly cinematic or mood-driven.",
      },
      {
        q: "What if I need cinematic looks plus many other shader styles?",
        a: "Start with the cinematic page to understand the mood-focused products, then move into Art Of Shader Megapack or the broader post-process shader landing page for the wider family.",
      },
    ],
  },
];

export function getSeoLandingPage(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug) ?? null;
}
