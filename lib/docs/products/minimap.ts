import type { ProductDocumentation } from "../types";

const minimapDocs: ProductDocumentation = {
  productSlug: "minimap-map-and-navigation-system",
  sections: [
    {
      slug: "overview",
      title: "Overview",
      description: "Texture-based minimap, map, POI, and navigation workflow",
      content: `
        <section>
          <h3>Introduction</h3>
          <p><strong>Minimap, Map and Navigation System</strong> is built around texture-based maps, so your HUD does not need a live scene capture for the minimap. You prepare or capture a map texture, assign it to a MapBounds actor, then let Blueprint-friendly widgets display the player, POIs, navigation targets, and map regions.</p>
          <p>The same system can be used for open worlds, indoor areas, RTS-style maps, archviz walkthroughs, and gameplay HUDs that need many icons without a heavy render target setup.</p>
          <img src="/images/products/minimap/feature-texture-based.png" alt="Runtime minimap showing player and POI markers during gameplay" />
        </section>
        <section>
          <h3>Core Features</h3>
          <div class="feature-grid">
            <div class="feature-card"><h4>Texture-Based Minimap</h4><p>Use a map texture or top-down screenshot instead of a live render target.</p></div>
            <div class="feature-card"><h4>MapBounds Regions</h4><p>Switch maps automatically when the player enters a different area.</p></div>
            <div class="feature-card"><h4>POI Datatable</h4><p>Define icon, pointer, display range, static/dynamic behavior, and map interaction from rows.</p></div>
            <div class="feature-card"><h4>Circle or Rectangle</h4><p>Choose the minimap shape and keep markers clamped correctly.</p></div>
            <div class="feature-card"><h4>Texture Masks</h4><p>Support non-rectangular interiors, caves, rooms, and custom map silhouettes.</p></div>
            <div class="feature-card"><h4>Navigation Markers</h4><p>Show destination pointers, distance, and out-of-bounds indicators.</p></div>
          </div>
        </section>
        <section>
          <h3>What You Need</h3>
          <ul>
            <li>A project with UMG and Blueprint support.</li>
            <li>A player pawn or character that can own the minimap widget.</li>
            <li>A map texture, top-down screenshot, or custom map art for each region.</li>
            <li>One or more MapBounds actors placed around the playable areas.</li>
          </ul>
        </section>
      `,
      next: { slug: "getting-started", title: "Getting Started" },
    },
    {
      slug: "getting-started",
      title: "Getting Started",
      description: "Install, enable, and place the first working minimap",
      content: `
        <section>
          <h3>Enable the Plugin</h3>
          <ol>
            <li>Add the product to your project from the launcher or marketplace vault.</li>
            <li>Open the project and go to <strong>Edit > Plugins</strong>.</li>
            <li>Search for the minimap/navigation plugin and enable it.</li>
            <li>Restart the editor if the plugin prompt asks for it.</li>
          </ol>
        </section>
        <section>
          <h3>Quick Setup</h3>
          <ol>
            <li>Open your gameplay level.</li>
            <li>Place the MapBounds actor from the plugin content folder.</li>
            <li>Scale the bounds so it covers the exact area represented by the map texture.</li>
            <li>Assign your minimap texture in the MapBounds actor settings.</li>
            <li>Add the minimap widget to your HUD or player widget.</li>
            <li>Assign the POI datatable and test in Play mode.</li>
          </ol>
          <img src="/images/products/minimap/feature-mapbounds-actor.png" alt="MapBounds Actor selected in the editor with bounds dimensions and minimap texture settings" />
        </section>
      `,
      prev: { slug: "overview", title: "Overview" },
      next: { slug: "mapbounds-actor", title: "MapBounds Actor" },
    },
    {
      slug: "mapbounds-actor",
      title: "MapBounds Actor",
      description: "Configure the area represented by each minimap texture",
      content: `
        <section>
          <h3>What the Actor Does</h3>
          <p>The MapBounds actor defines the world area that a minimap texture represents. The system uses the actor location, scale, and texture settings to convert world positions into map positions.</p>
          <img src="/images/products/minimap/feature-mapbounds-actor.png" alt="MapBounds actor in an editor scene with its Details panel visible" />
        </section>
        <section>
          <h3>Place a MapBounds Actor</h3>
          <ol>
            <li>Find the MapBounds actor in the plugin content.</li>
            <li>Drag it into the level.</li>
            <li>Move it to the center of the area represented by your map texture.</li>
            <li>Scale X and Y until the bounds match the playable space.</li>
            <li>Set Z high enough to include the relevant vertical range for the player.</li>
          </ol>
        </section>
        <section>
          <h3>Main Settings</h3>
          <table>
            <thead><tr><th>Setting</th><th>Use</th></tr></thead>
            <tbody>
              <tr><td><strong>Level Bounds X / Y / Z</strong></td><td>Controls the world area that maps into the minimap texture.</td></tr>
              <tr><td><strong>Mini Map Texture</strong></td><td>The texture shown in the minimap widget.</td></tr>
              <tr><td><strong>Mini Map Mask Texture</strong></td><td>Optional black-white mask for irregular map shapes.</td></tr>
              <tr><td><strong>Minimap Element Size Ratio</strong></td><td>Adjusts marker scale for this bounds region.</td></tr>
              <tr><td><strong>Local Map</strong></td><td>Use when a region needs its own local map behavior.</td></tr>
              <tr><td><strong>Navigation Exit Actors</strong></td><td>Optional exits used by navigation and region transitions.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Multiple Regions</h3>
          <p>Use multiple MapBounds actors when your project has caves, interiors, multi-floor areas, or separate zones. When the player moves into a different bounds actor, the minimap can switch to that region's texture and marker rules.</p>
          <img src="/images/products/minimap/feature-opacity-mask.png" alt="Player entering an interior while the minimap shows a masked local region" />
        </section>
      `,
      prev: { slug: "getting-started", title: "Getting Started" },
      next: { slug: "poi-system", title: "Points of Interest" },
    },
    {
      slug: "poi-system",
      title: "Points of Interest",
      description: "Configure static and dynamic markers shown on the minimap and map",
      content: `
        <section>
          <h3>POI Overview</h3>
          <p>Points of Interest are the actors shown as icons on your minimap or full map. They can represent enemies, pickups, NPCs, quest locations, exits, fast travel points, or custom gameplay objects.</p>
          <img src="/images/products/minimap/feature-poi-datatable.png" alt="POIElement datatable with icon and pointer settings" />
        </section>
        <section>
          <h3>Configure a POI Row</h3>
          <ol>
            <li>Open the POI datatable.</li>
            <li>Add or duplicate a row for the actor class you want to display.</li>
            <li>Set whether it appears on the full map, minimap, or both.</li>
            <li>Assign the minimap icon and pointer icon textures.</li>
            <li>Choose if the POI is static or dynamic.</li>
            <li>Set visibility range, hover behavior, navigation behavior, and icon size.</li>
          </ol>
        </section>
        <section>
          <h3>Static vs Dynamic</h3>
          <p><strong>Static POIs</strong> are best for fixed landmarks, pickups, quest locations, and fast travel points. <strong>Dynamic POIs</strong> update during play and are useful for enemies, NPCs, vehicles, or multiplayer characters.</p>
          <img src="/images/products/minimap/feature-dynamic-poi.png" alt="Gameplay view with moving POI markers updating on the minimap" />
        </section>
      `,
      prev: { slug: "mapbounds-actor", title: "MapBounds Actor" },
      next: { slug: "minimap-widget", title: "Minimap Widget" },
    },
    {
      slug: "minimap-widget",
      title: "Minimap Widget",
      description: "Add and customize the UMG minimap display",
      content: `
        <section>
          <h3>Add the Widget</h3>
          <ol>
            <li>Open your HUD or player UI widget.</li>
            <li>Add the minimap widget from the plugin content.</li>
            <li>Position it in your layout.</li>
            <li>Assign the player reference and POI datatable if required by your setup.</li>
            <li>Play the level and confirm the player marker appears inside the bounds.</li>
          </ol>
        </section>
        <section>
          <h3>Shape and Rotation</h3>
          <p>Use the widget settings to choose between circular and rectangular minimap presentation. When auto-rotate is enabled, the map can rotate with the camera while keeping the player marker centered.</p>
          <img src="/images/products/minimap/feature-circular-rectangular.png" alt="Circular and rectangular minimap examples with player and pointer icons" />
        </section>
        <section>
          <h3>Zoom</h3>
          <p>Zoom settings decide how much of the MapBounds area is visible around the player. Larger areas show more context, while tighter zoom makes nearby POIs easier to read.</p>
          <img src="/images/products/minimap/feature-zoom-levels.png" alt="Two minimap zoom examples showing different visible area sizes" />
        </section>
      `,
      prev: { slug: "poi-system", title: "Points of Interest" },
      next: { slug: "navigation-system", title: "Navigation System" },
    },
    {
      slug: "navigation-system",
      title: "Navigation System",
      description: "Waypoints, direction pointers, distance, and out-of-bounds markers",
      content: `
        <section>
          <h3>Overview</h3>
          <p>The navigation system helps players understand where to go. You can set a world target, show direction pointers, display distance, and show a custom indicator when the target is outside the current view.</p>
          <img src="/images/products/minimap/feature-navigation-waypoints.png" alt="Navigation waypoint Blueprint setup used for in-bounds and out-of-bounds marker behavior" />
        </section>
        <section>
          <h3>Basic Flow</h3>
          <ol>
            <li>Create or choose the destination actor or world location.</li>
            <li>Call the navigation setup event or function from Blueprint.</li>
            <li>Assign the marker icon or pointer icon.</li>
            <li>Enable distance display if your HUD needs it.</li>
            <li>Clear the navigation marker when the objective is complete.</li>
          </ol>
        </section>
      `,
      prev: { slug: "minimap-widget", title: "Minimap Widget" },
      next: { slug: "advanced-features", title: "Advanced Features" },
    },
    {
      slug: "advanced-features",
      title: "Advanced Features",
      description: "Texture masks, interactive maps, and multi-level support",
      content: `
        <section>
          <h3>Texture Masking</h3>
          <p>For non-rectangular maps, create a mask texture where white is visible and black is hidden. Assign it to the MapBounds actor so rooms, caves, and interiors can have custom map shapes.</p>
          <img src="/images/products/minimap/feature-texture-masking.png" alt="Map texture and black-white mask assigned on the MapBounds actor" />
        </section>
        <section>
          <h3>Interactive Map</h3>
          <p>The full map can support zoom, pan, click-to-navigate, POI hover behavior, and marker selection depending on how you configure the widgets and POI rows.</p>
          <img src="/images/products/minimap/feature-interactive-map.png" alt="Interactive map view with POI markers and a waypoint pointer" />
        </section>
        <section>
          <h3>Multi-Level Support</h3>
          <p>Use separate MapBounds actors and textures for interiors, floors, or streamed areas. Keep the POI datatable consistent, then let the bounds setup control which map is shown.</p>
        </section>
      `,
      prev: { slug: "navigation-system", title: "Navigation System" },
      next: { slug: "troubleshooting", title: "Troubleshooting" },
    },
    {
      slug: "troubleshooting",
      title: "Troubleshooting",
      description: "Common setup issues and fixes",
      content: `
        <section>
          <h3>Common Issues</h3>
          <table>
            <thead><tr><th>Problem</th><th>What to Check</th></tr></thead>
            <tbody>
              <tr><td><strong>Minimap not showing</strong></td><td>Confirm the widget is added to the HUD, the MapBounds actor exists, and the player is inside the bounds.</td></tr>
              <tr><td><strong>Map texture is offset</strong></td><td>Check MapBounds location, X/Y scale, texture orientation, and whether north/up matches your intended map direction.</td></tr>
              <tr><td><strong>POIs not appearing</strong></td><td>Check the POI datatable reference, actor class row, visibility range, and whether the actor exists in the current level.</td></tr>
              <tr><td><strong>Circle map clips markers</strong></td><td>Confirm circular mode is enabled and the widget is using the intended mask/material setup.</td></tr>
              <tr><td><strong>Too many dynamic markers</strong></td><td>Use static rows where possible and reduce update frequency or visibility distance for moving actors.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Support</h3>
          <p>For more help, open a support ticket, use the Discord support link, or compare your setup with the example content included with the plugin.</p>
        </section>
      `,
      prev: { slug: "advanced-features", title: "Advanced Features" },
    },
  ],
};

export default minimapDocs;
