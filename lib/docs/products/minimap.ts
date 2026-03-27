import type { ProductDocumentation } from "../types";

const minimapDocs: ProductDocumentation = {
  productSlug: "minimap-map-and-navigation-system",
  sections: [
    {
      slug: "overview",
      title: "Overview",
      description: "Learn about the Minimap, Map and Navigation System and its core capabilities",
      content: `
        <section>
          <h3>Introduction</h3>
          <p>The <strong>Minimap, Map and Navigation System</strong> is a comprehensive plugin designed to create customizable and optimized texture-based minimaps and maps for your games.</p>
          <p>This system eliminates the performance overhead of RenderTargets while providing extensive customization options for any type of project.</p>
          <div class="callout-tip">
            <strong>💡 Pro Tip:</strong> This plugin is optimized for Open World RPGs but works great for any genre — from archviz to RTS games!
          </div>
        </section>
        <section>
          <h3>Key Features</h3>
          <div class="feature-grid">
            <div class="feature-card"><div class="fc-icon">🗺️</div><h4>Texture-Based System</h4><p>No RenderTarget overhead. Map is a static or dynamic texture you control.</p></div>
            <div class="feature-card"><div class="fc-icon">📍</div><h4>Datatable-Driven POIs</h4><p>Define Points of Interest in a datatable — no code changes needed to add new types.</p></div>
            <div class="feature-card"><div class="fc-icon">🔄</div><h4>Auto Rotate</h4><p>Circular and rectangular minimap shapes with optional auto-rotate to follow the camera.</p></div>
            <div class="feature-card"><div class="fc-icon">🧭</div><h4>Navigation System</h4><p>Waypoints, direction arrows, distance display, and out-of-bounds indicators.</p></div>
            <div class="feature-card"><div class="fc-icon">🌍</div><h4>Multiple Regions</h4><p>Multiple MapBounds actors in one level — system switches regions based on player position.</p></div>
            <div class="feature-card"><div class="fc-icon">🔍</div><h4>Interactive Map</h4><p>Full-screen map with zoom, pan, and click-to-navigate support.</p></div>
          </div>
        </section>
        <section>
          <h3>System Requirements</h3>
          <ul>
            <li>Unreal Engine 4.27 or 5.0+</li>
            <li>Basic knowledge of UMG and Blueprints</li>
            <li>Understanding of Actor components</li>
          </ul>
          <div class="callout-info">
            <strong>ℹ️ Note:</strong> Compatible with both Blueprint and C++ projects.
          </div>
        </section>
      `,
      next: { slug: "getting-started", title: "Getting Started" },
    },
    {
      slug: "getting-started",
      title: "Getting Started",
      description: "Installation and initial setup",
      content: `
        <section>
          <h3>Installation</h3>
          <p>After purchasing from the Unreal Engine Marketplace, install through your Epic Games Launcher:</p>
          <ol>
            <li>Open the <strong>Epic Games Launcher</strong></li>
            <li>Navigate to your <strong>Library</strong></li>
            <li>Find <code>Minimap, Map and Navigation System</code> in your Vault</li>
            <li>Click <strong>"Install to Engine"</strong> and select your engine version</li>
          </ol>
        </section>
        <section>
          <h3>Enabling the Plugin</h3>
          <ol>
            <li>Open your Unreal Engine project</li>
            <li>Go to <strong>Edit → Plugins</strong></li>
            <li>Search for <code>Minimap Map Navigation</code></li>
            <li>Check the <strong>"Enabled"</strong> box</li>
            <li>Restart the editor when prompted</li>
          </ol>
          <div class="callout-warning">
            <strong>⚠️ Important:</strong> Make sure to restart the editor after enabling the plugin.
          </div>
        </section>
        <section>
          <h3>Quick Setup</h3>
          <ol>
            <li>Create a new level or open an existing one</li>
            <li>Place a <code>MapBoundsActor</code> in your level (plugin content folder)</li>
            <li>Configure the bounds to match your level area</li>
            <li>Add the Minimap widget to your player's HUD</li>
            <li>Configure your POI datatable</li>
          </ol>
          <div class="callout-tip">
            <strong>💡 Quick Start:</strong> Check out the example level included with the plugin for a working implementation!
          </div>
        </section>
      `,
      prev: { slug: "overview", title: "Overview" },
      next: { slug: "mapbounds-actor", title: "MapBounds Actor" },
    },
    {
      slug: "mapbounds-actor",
      title: "MapBounds Actor",
      description: "Configure and use the MapBounds Actor for minimap regions",
      content: `
        <section>
          <h3>What is MapBounds Actor?</h3>
          <p>The <strong>MapBounds Actor</strong> represents the boundaries of your minimap. It defines the area visible on your minimap and handles texture mapping.</p>
          <div class="callout-info">
            <strong>ℹ️ Core Concept:</strong> Each MapBounds Actor corresponds to one minimap region. You can have multiple regions in a single level!
          </div>
        </section>
        <section>
          <h3>Placing MapBounds Actor</h3>
          <ol>
            <li>Find <code>BP_MapBounds</code> in the plugin's content folder</li>
            <li>Drag it into your level</li>
            <li>Position it to cover your desired map area</li>
            <li>Scale it to match the boundaries of your playable area</li>
          </ol>
        </section>
        <section>
          <h3>Configuration Properties</h3>
          <table>
            <thead><tr><th>Property</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Map Texture</strong></td><td>The texture representing your map (screenshot or custom design)</td></tr>
              <tr><td><strong>Bounds Size</strong></td><td>X and Y dimensions of your map area</td></tr>
              <tr><td><strong>Texture Mask</strong></td><td>Optional mask for non-rectangular map areas</td></tr>
              <tr><td><strong>Region Name</strong></td><td>Identifier for this map region</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Multiple Map Regions</h3>
          <p>The system automatically switches between MapBounds actors based on the player's position. Useful for:</p>
          <ul>
            <li><strong>Interior locations</strong> — caves, buildings, dungeons</li>
            <li><strong>Vertical spaces</strong> — different floors of a structure</li>
            <li><strong>Open world zones</strong> — separate areas with distinct maps</li>
          </ul>
        </section>
        <section>
          <h3>Creating Your Map Texture</h3>
          <ol>
            <li>Position your camera above your level for a <strong>top-down view</strong></li>
            <li>Take a <strong>high-resolution screenshot</strong></li>
            <li>Import the image into your project</li>
            <li>Assign it to the MapBounds actor's <code>Map Texture</code> property</li>
          </ol>
          <div class="callout-tip">
            <strong>💡 Pro Tip:</strong> Use a higher resolution than you need, then let the engine scale it down for better quality.
          </div>
        </section>
      `,
      prev: { slug: "getting-started", title: "Getting Started" },
      next: { slug: "poi-system", title: "Points of Interest" },
    },
    {
      slug: "poi-system",
      title: "Points of Interest (POI)",
      description: "Configure and manage Points of Interest on your minimap",
      content: `
        <section>
          <h3>POI Overview</h3>
          <p><strong>Points of Interest (POI)</strong> are actors that appear as icons on your minimap. They can represent enemies, pickups, NPCs, quest markers, or any other important location.</p>
          <div class="callout-info">
            <strong>ℹ️ Flexibility:</strong> The POI system is datatable-driven — add, modify, and manage types without changing code.
          </div>
        </section>
        <section>
          <h3>POI Properties Reference</h3>
          <table>
            <thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>Actor Class</code></td><td>Class</td><td>The class of actors to represent as POI</td></tr>
              <tr><td><code>Icon Texture</code></td><td>Texture</td><td>The icon displayed on the minimap</td></tr>
              <tr><td><code>Icon Size</code></td><td>Vector2D</td><td>Size of the icon</td></tr>
              <tr><td><code>Icon Color</code></td><td>Color</td><td>Tint color for the icon</td></tr>
              <tr><td><code>Is Dynamic</code></td><td>Boolean</td><td>Whether the POI updates position in real-time</td></tr>
              <tr><td><code>Distance Range</code></td><td>Float</td><td>Maximum distance to show this POI</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Static vs Dynamic POI</h3>
          <h4>Static POI</h4>
          <p>Fixed location markers — perfect for treasure chests, landmarks, fast travel points, quest objectives.</p>
          <h4>Dynamic POI</h4>
          <p>Moving markers that update in real-time — ideal for enemies, NPCs, vehicles, multiplayer players.</p>
          <div class="callout-warning">
            <strong>⚠️ Performance Note:</strong> Dynamic POIs have a slight overhead. Use static POIs when possible.
          </div>
        </section>
      `,
      prev: { slug: "mapbounds-actor", title: "MapBounds Actor" },
      next: { slug: "minimap-widget", title: "Minimap Widget" },
    },
    {
      slug: "minimap-widget",
      title: "Minimap Widget",
      description: "The UMG widget that displays the minimap on the player's HUD",
      content: `
        <section>
          <h3>Adding to HUD</h3>
          <ol>
            <li>Open your player HUD widget</li>
            <li>Add the Minimap widget blueprint from the plugin</li>
            <li>Position it on your screen (typically top-right or bottom-left)</li>
            <li>Configure the widget properties</li>
          </ol>
        </section>
        <section>
          <h3>Widget Properties</h3>
          <table>
            <thead><tr><th>Property</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Minimap Size</strong></td><td>Dimensions of the minimap display</td></tr>
              <tr><td><strong>Allow Circle Mask</strong></td><td>Enable circular minimap shape</td></tr>
              <tr><td><strong>Auto Rotate</strong></td><td>Rotate minimap with player camera</td></tr>
              <tr><td><strong>Zoom Level</strong></td><td>Default zoom level</td></tr>
              <tr><td><strong>POI Datatable</strong></td><td>Reference to your POI configuration</td></tr>
              <tr><td><strong>Player Icon</strong></td><td>Icon representing the player</td></tr>
              <tr><td><strong>Border Style</strong></td><td>Visual styling for the minimap border</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Circular vs Rectangular</h3>
          <p>The <code>AllowCircleMask</code> parameter controls the shape. <strong>Circular</strong> uses an opacity mask and adjusts POI positions to stay within bounds. <strong>Rectangular</strong> is the standard square display.</p>
          <h3>Auto Rotate</h3>
          <p>When enabled, the minimap rotates to match the player's camera direction. The player icon stays centered while the map rotates around it.</p>
        </section>
      `,
      prev: { slug: "poi-system", title: "Points of Interest" },
      next: { slug: "navigation-system", title: "Navigation System" },
    },
    {
      slug: "navigation-system",
      title: "Navigation System",
      description: "Waypoints, direction arrows, and distance display",
      content: `
        <section>
          <h3>Overview</h3>
          <p>The navigation system allows players to set waypoints and markers in the world, with visual indicators showing direction and distance to destinations.</p>
        </section>
        <section>
          <h3>Navigation Features</h3>
          <div class="feature-grid">
            <div class="feature-card"><div class="fc-icon">📌</div><h4>World Markers</h4><p>3D markers placed at the destination in world space.</p></div>
            <div class="feature-card"><div class="fc-icon">🧭</div><h4>Direction Arrow</h4><p>On-screen arrow pointing toward the destination at all times.</p></div>
            <div class="feature-card"><div class="fc-icon">📏</div><h4>Distance Display</h4><p>Shows distance to target in meters, km, or custom units.</p></div>
            <div class="feature-card"><div class="fc-icon">↗️</div><h4>Out of Bounds</h4><p>Edge indicator when the target is off-screen.</p></div>
          </div>
        </section>
        <section>
          <h3>Blueprint API</h3>
          <pre><code>// Set a navigation target
Set Navigation Target
  - Target Location: Vector (X, Y, Z)
  - Marker Icon: Texture 2D
  - Show Distance: Boolean

// Clear navigation
Clear Navigation Target</code></pre>
        </section>
      `,
      prev: { slug: "minimap-widget", title: "Minimap Widget" },
      next: { slug: "advanced-features", title: "Advanced Features" },
    },
    {
      slug: "advanced-features",
      title: "Advanced Features",
      description: "Texture masking, interactive map, multi-level support",
      content: `
        <section>
          <h3>Texture Masking</h3>
          <p>For non-rectangular map areas, create a black-and-white mask texture (white = visible, black = hidden) and assign it to the MapBounds actor.</p>
        </section>
        <section>
          <h3>Interactive Map</h3>
          <p>The full map view supports:</p>
          <ul>
            <li><strong>Zoom:</strong> Mouse wheel or pinch gestures</li>
            <li><strong>Pan:</strong> Click and drag</li>
            <li><strong>Click to Navigate:</strong> Set waypoints by clicking on the map</li>
            <li><strong>POI Details:</strong> Hover over POIs to see information</li>
          </ul>
        </section>
        <section>
          <h3>Multi-Level Support</h3>
          <p>Each level can have its own MapBounds actors. POI datatables can reference actors across levels, and the system automatically handles level streaming.</p>
        </section>
        <section>
          <h3>Integration Ideas</h3>
          <ul>
            <li><strong>Quest System</strong> — Show quest objectives as dynamic POIs</li>
            <li><strong>Fast Travel</strong> — Click map locations to fast travel</li>
            <li><strong>Fog of War</strong> — Reveal map areas as the player explores</li>
            <li><strong>Team Markers</strong> — Show party members in multiplayer</li>
          </ul>
        </section>
      `,
      prev: { slug: "navigation-system", title: "Navigation System" },
      next: { slug: "troubleshooting", title: "Troubleshooting" },
    },
    {
      slug: "troubleshooting",
      title: "Troubleshooting",
      description: "Common issues and how to fix them",
      content: `
        <section>
          <h3>Common Issues</h3>
          <table>
            <thead><tr><th>Problem</th><th>Solution</th></tr></thead>
            <tbody>
              <tr><td><strong>Minimap not showing</strong></td><td>Verify MapBounds actor is placed, Map Texture is assigned, minimap widget is in HUD, and player is within MapBounds area.</td></tr>
              <tr><td><strong>POIs not appearing</strong></td><td>Check POI datatable reference, verify actor classes match, ensure actors exist in level and are within distance range.</td></tr>
              <tr><td><strong>Performance issues</strong></td><td>Reduce dynamic POIs, increase POI update interval, use distance culling, optimise map texture resolution.</td></tr>
              <tr><td><strong>Map texture misaligned</strong></td><td>Verify MapBounds actor position/scale, check texture dimensions match bounds aspect ratio, ensure texture is oriented correctly (north = up).</td></tr>
              <tr><td><strong>Circular minimap issues</strong></td><td>Enable AllowCircleMask, check opacity mask material is applied, and verify POI positions are adjusted for circular bounds.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Support</h3>
          <p>For additional help, <a href="/support">open a support ticket</a>, join our Discord community, or check the example maps included with the plugin.</p>
        </section>
      `,
      prev: { slug: "advanced-features", title: "Advanced Features" },
    },
  ],
};

export default minimapDocs;

