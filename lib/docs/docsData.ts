// Documentation data structure for all products

export interface DocSection {
  slug: string;
  title: string;
  description?: string;
  content: string;
  prev?: {
    slug: string;
    title: string;
  };
  next?: {
    slug: string;
    title: string;
  };
}

export interface ProductDocumentation {
  productSlug: string;
  sections: DocSection[];
}

// Documentation content for each product
const documentationData: Record<string, ProductDocumentation> = {
  "minimap-map-and-navigation-system": {
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
              <strong>💡 Pro Tip:</strong> This plugin is optimized for Open World RPGs but works great for any genre - from archviz to RTS games!
            </div>
          </section>

          <section>
            <h3>Key Features</h3>
            <ul>
              <li><strong>Texture-based minimap system</strong> for optimal performance</li>
              <li><strong>Multiple map regions</strong> support in the same level</li>
              <li><strong>Datatable-driven Points of Interest</strong> (POI) system</li>
              <li><strong>Circular and rectangular</strong> minimap shapes with auto-rotate</li>
              <li><strong>Interactive map</strong> with zoom and pan controls</li>
              <li><strong>Customizable navigation</strong> system with waypoints</li>
            </ul>
          </section>

          <section>
            <h3>System Requirements</h3>
            <ul>
              <li>Unreal Engine 4.27 or 5.0+</li>
              <li>Basic knowledge of UMG and Blueprints</li>
              <li>Understanding of Actor components</li>
            </ul>
            
            <div class="callout-info">
              <strong>ℹ️ Note:</strong> This plugin is compatible with both Blueprint and C++ projects.
            </div>
          </section>
        `,
        next: {
          slug: "getting-started",
          title: "Getting Started"
        }
      },
      {
        slug: "getting-started",
        title: "Getting Started",
        description: "Installation and initial setup instructions",
        content: `
          <section>
            <h3>Installation</h3>
            <p>After purchasing from the Unreal Engine Marketplace, install the plugin through your Epic Games Launcher:</p>
            <ol>
              <li>Open the <strong>Epic Games Launcher</strong></li>
              <li>Navigate to your <strong>Library</strong></li>
              <li>Find <code>Minimap, Map and Navigation System</code> in your Vault</li>
              <li>Click <strong>"Install to Engine"</strong> and select your engine version</li>
            </ol>
          </section>

          <section>
            <h3>Enabling the Plugin</h3>
            <p>Once installed, you need to enable the plugin in your project:</p>
            <ol>
              <li>Open your Unreal Engine project</li>
              <li>Go to <strong>Edit → Plugins</strong></li>
              <li>Search for <code>Minimap Map Navigation</code></li>
              <li>Check the <strong>"Enabled"</strong> box</li>
              <li>Restart the editor when prompted</li>
            </ol>
            
            <div class="callout-warning">
              <strong>⚠️ Important:</strong> Make sure to restart the editor after enabling the plugin for changes to take effect.
            </div>
          </section>

          <section>
            <h3>Quick Setup</h3>
            <p>Follow these steps to get your minimap system running:</p>
            <ol>
              <li>Create a new level or open an existing one</li>
              <li>Place a <code>MapBoundsActor</code> in your level (found in the plugin's content folder)</li>
              <li>Configure the bounds to match your level area</li>
              <li>Add the Minimap widget to your player's HUD</li>
              <li>Configure your POI datatable</li>
            </ol>
            
            <div class="callout-tip">
              <strong>💡 Quick Start:</strong> Check out the example level included with the plugin for a working implementation!
            </div>
          </section>
        `,
        prev: {
          slug: "overview",
          title: "Overview"
        },
        next: {
          slug: "mapbounds-actor",
          title: "MapBounds Actor"
        }
      },
      {
        slug: "mapbounds-actor",
        title: "MapBounds Actor",
        description: "Learn how to configure and use the MapBounds Actor for your minimap regions",
        content: `
          <section>
            <h3>What is MapBounds Actor?</h3>
            <p>The <strong>MapBounds Actor</strong> represents the boundaries of your minimap. It defines the area that will be visible on your minimap and handles the texture mapping.</p>
            
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
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Map Texture</strong></td>
                  <td>The texture that represents your map (screenshot or custom design)</td>
                </tr>
                <tr>
                  <td><strong>Bounds Size</strong></td>
                  <td>The X and Y dimensions of your map area</td>
                </tr>
                <tr>
                  <td><strong>Texture Mask</strong></td>
                  <td>Optional mask for non-rectangular map areas</td>
                </tr>
                <tr>
                  <td><strong>Region Name</strong></td>
                  <td>Identifier for this map region</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h3>Multiple Map Regions</h3>
            <p>You can have multiple MapBounds actors in a single level. The system will automatically switch between them based on the player's position. This is useful for:</p>
            <ul>
              <li><strong>Interior locations</strong> - caves, buildings, dungeons</li>
              <li><strong>Vertical spaces</strong> - different floors of a structure</li>
              <li><strong>Open world zones</strong> - separate areas with distinct maps</li>
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
              <strong>💡 Pro Tip:</strong> Use a higher resolution than you need, then let the engine scale it down for better quality minimaps.
            </div>
          </section>
        `,
        prev: {
          slug: "getting-started",
          title: "Getting Started"
        },
        next: {
          slug: "poi-system",
          title: "Points of Interest"
        }
      },
      {
        slug: "poi-system",
        title: "Points of Interest (POI)",
        description: "Configure and manage Points of Interest on your minimap",
        content: `
          <section>
            <h3>POI Overview</h3>
            <p><strong>Points of Interest (POI)</strong> are actors that appear as icons on your minimap and map. They can represent enemies, pickups, NPCs, quest markers, or any other important location.</p>
            
            <div class="callout-info">
              <strong>ℹ️ Flexibility:</strong> The POI system is datatable-driven, making it easy to add, modify, and manage different types of markers without changing code.
            </div>
          </section>

          <section>
            <h3>POI Element Datatable</h3>
            <p>POIs are defined in a datatable derived from the <code>POIElement</code> structure. This allows you to configure different types of POIs with unique properties.</p>
            
            <h4>Creating POI Actors</h4>
            <ol>
              <li>Create a new datatable based on <code>POIElement</code> structure</li>
              <li>Add rows for each POI type you want</li>
              <li>Configure the properties for each POI type</li>
              <li>Reference this datatable in your minimap widget</li>
            </ol>
          </section>

          <section>
            <h3>POI Properties Reference</h3>
            <table>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>Actor Class</code></td>
                  <td>Class</td>
                  <td>The class of actors to represent as POI</td>
                </tr>
                <tr>
                  <td><code>Icon Texture</code></td>
                  <td>Texture</td>
                  <td>The icon displayed on the minimap</td>
                </tr>
                <tr>
                  <td><code>Icon Size</code></td>
                  <td>Vector2D</td>
                  <td>Size of the icon on the minimap</td>
                </tr>
                <tr>
                  <td><code>Icon Color</code></td>
                  <td>Color</td>
                  <td>Tint color for the icon</td>
                </tr>
                <tr>
                  <td><code>Is Dynamic</code></td>
                  <td>Boolean</td>
                  <td>Whether the POI updates position in real-time</td>
                </tr>
                <tr>
                  <td><code>Distance Range</code></td>
                  <td>Float</td>
                  <td>Maximum distance to show this POI</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h3>Static vs Dynamic POI</h3>
            
            <h4>Static POI</h4>
            <p>Fixed location markers that don't move. Perfect for:</p>
            <ul>
              <li>Treasure chests and collectibles</li>
              <li>Landmarks and locations</li>
              <li>Fast travel points</li>
              <li>Quest objectives</li>
            </ul>
            
            <h4>Dynamic POI</h4>
            <p>Moving markers that update in real-time. Ideal for:</p>
            <ul>
              <li>Enemies and hostile NPCs</li>
              <li>Friendly NPCs and companions</li>
              <li>Vehicles and moving platforms</li>
              <li>Other players in multiplayer</li>
            </ul>
            
            <div class="callout-warning">
              <strong>⚠️ Performance Note:</strong> Dynamic POIs have a slight performance overhead. Use static POIs when possible for best performance.
            </div>
          </section>
        `,
        prev: {
          slug: "mapbounds-actor",
          title: "MapBounds Actor"
        },
        next: {
          slug: "minimap-widget",
          title: "Minimap Widget"
        }
      },
      {
        slug: "minimap-widget",
        title: "Minimap Widget",
        content: `
          <h3>Minimap Widget Setup</h3>
          <p>The minimap widget is the UMG component that displays your minimap on the player's HUD.</p>

          <h3>Adding to HUD</h3>
          <ol>
            <li>Open your player HUD widget</li>
            <li>Add the Minimap widget blueprint from the plugin</li>
            <li>Position it on your screen (typically top-right or bottom-left corner)</li>
            <li>Configure the widget properties</li>
          </ol>

          <h3>Widget Properties</h3>
          <ul>
            <li><strong>Minimap Size:</strong> The dimensions of the minimap display</li>
            <li><strong>Allow Circle Mask:</strong> Enable circular minimap shape</li>
            <li><strong>Auto Rotate:</strong> Rotate minimap with player camera</li>
            <li><strong>Zoom Level:</strong> Default zoom level for the minimap</li>
            <li><strong>POI Datatable:</strong> Reference to your POI configuration</li>
            <li><strong>Player Icon:</strong> Icon representing the player</li>
            <li><strong>Border Style:</strong> Visual styling for the minimap border</li>
          </ul>

          <h3>Circular vs Rectangular Minimap</h3>
          <p>The <code>AllowCircleMask</code> parameter controls the shape:</p>
          <ul>
            <li><strong>Circular:</strong> Uses an opacity mask and adjusts POI positions to stay within bounds</li>
            <li><strong>Rectangular:</strong> Standard square/rectangular display</li>
          </ul>

          <h3>Auto Rotate Feature</h3>
          <p>When enabled, the minimap rotates to match the player's camera direction. The player icon stays centered while the map rotates around it.</p>
        `,
        prev: {
          slug: "poi-system",
          title: "Points of Interest"
        },
        next: {
          slug: "navigation-system",
          title: "Navigation System"
        }
      },
      {
        slug: "navigation-system",
        title: "Navigation System",
        content: `
          <h3>Navigation Overview</h3>
          <p>The navigation system allows players to set waypoints and markers in the world, with visual indicators showing the direction and distance to destinations.</p>

          <h3>Setting Navigation Markers</h3>
          <ol>
            <li>Call the "Set Navigation Target" function</li>
            <li>Provide the target location (world coordinates)</li>
            <li>Optionally specify a custom marker icon</li>
          </ol>

          <h3>Navigation Features</h3>
          <ul>
            <li><strong>World Markers:</strong> 3D markers placed at the destination</li>
            <li><strong>Minimap Indicator:</strong> Icon showing destination on minimap</li>
            <li><strong>Distance Display:</strong> Shows distance to target</li>
            <li><strong>Direction Arrow:</strong> Points toward the destination</li>
            <li><strong>Out of Bounds Notification:</strong> Indicator when target is off-screen</li>
          </ul>

          <h3>Out of Bounds Markers</h3>
          <p>When the navigation target is not visible on screen, a special marker appears at the edge of the screen pointing in the target's direction.</p>

          <h3>Customization</h3>
          <p>You can customize:</p>
          <ul>
            <li>Marker appearance and colors</li>
            <li>Distance calculation units (meters, miles, etc.)</li>
            <li>Out of bounds indicator style</li>
            <li>Multiple simultaneous navigation targets</li>
          </ul>

          <h3>Blueprint Example</h3>
          <pre><code>// Set a navigation target
Set Navigation Target
  - Target Location: Vector (X, Y, Z)
  - Marker Icon: Texture 2D
  - Show Distance: Boolean

// Clear navigation
Clear Navigation Target</code></pre>
        `,
        prev: {
          slug: "minimap-widget",
          title: "Minimap Widget"
        },
        next: {
          slug: "advanced-features",
          title: "Advanced Features"
        }
      },
      {
        slug: "advanced-features",
        title: "Advanced Features",
        content: `
          <h3>Texture Masking</h3>
          <p>For non-rectangular map areas, you can use texture masking to create custom shapes:</p>
          <ol>
            <li>Create a black and white mask texture (white = visible, black = hidden)</li>
            <li>Assign the mask to the MapBounds actor</li>
            <li>The minimap will smoothly transition when entering/exiting the masked area</li>
          </ol>

          <h3>Interactive Map</h3>
          <p>The full map view supports:</p>
          <ul>
            <li><strong>Zoom:</strong> Mouse wheel or pinch gestures</li>
            <li><strong>Pan:</strong> Click and drag to move around the map</li>
            <li><strong>Click to Navigate:</strong> Set waypoints by clicking on the map</li>
            <li><strong>POI Details:</strong> Hover over POIs to see information</li>
          </ul>

          <h3>Performance Optimization</h3>
          <ul>
            <li>Use texture-based system instead of RenderTargets</li>
            <li>Limit POI update frequency for distant objects</li>
            <li>Use LOD for POI icons based on zoom level</li>
            <li>Cull POIs outside the visible map area</li>
          </ul>

          <h3>Multi-Level Support</h3>
          <p>Handle level streaming and transitions:</p>
          <ol>
            <li>Each level can have its own MapBounds actors</li>
            <li>POI datatable can reference actors across levels</li>
            <li>System automatically handles level loading/unloading</li>
          </ol>

          <h3>Integration with Other Systems</h3>
          <ul>
            <li><strong>Quest System:</strong> Show quest objectives as POIs</li>
            <li><strong>Fast Travel:</strong> Click map locations to fast travel</li>
            <li><strong>Fog of War:</strong> Reveal map areas as player explores</li>
            <li><strong>Team Markers:</strong> Show party members on multiplayer maps</li>
          </ul>
        `,
        prev: {
          slug: "navigation-system",
          title: "Navigation System"
        },
        next: {
          slug: "troubleshooting",
          title: "Troubleshooting"
        }
      },
      {
        slug: "troubleshooting",
        title: "Troubleshooting",
        content: `
          <h3>Common Issues</h3>

          <h4>Minimap Not Showing</h4>
          <ul>
            <li>Verify MapBounds actor is placed in level</li>
            <li>Check that Map Texture is assigned</li>
            <li>Ensure minimap widget is added to HUD</li>
            <li>Verify player is within MapBounds area</li>
          </ul>

          <h4>POIs Not Appearing</h4>
          <ul>
            <li>Check POI datatable is properly referenced</li>
            <li>Verify actor classes match those in datatable</li>
            <li>Ensure POI actors exist in the level</li>
            <li>Check Show on Minimap/Map settings</li>
            <li>Verify actors are within distance range</li>
          </ul>

          <h4>Performance Issues</h4>
          <ul>
            <li>Reduce number of dynamic POIs</li>
            <li>Increase POI update interval</li>
            <li>Use distance culling for distant POIs</li>
            <li>Optimize map texture resolution</li>
          </ul>

          <h4>Map Texture Not Aligned</h4>
          <ul>
            <li>Verify MapBounds actor position and scale</li>
            <li>Check map texture dimensions match bounds aspect ratio</li>
            <li>Ensure texture is oriented correctly (north = up)</li>
          </ul>

          <h4>Circular Minimap Issues</h4>
          <ul>
            <li>Verify AllowCircleMask is enabled</li>
            <li>Check opacity mask material is applied</li>
            <li>Ensure POI positions are being adjusted for circular bounds</li>
          </ul>

          <h3>Support</h3>
          <p>For additional help:</p>
          <ul>
            <li>Join our Discord community</li>
            <li>Check the example maps in the plugin content</li>
            <li>Visit the support forums on the marketplace page</li>
            <li>Contact support at support@athiangames.com</li>
          </ul>
        `,
        prev: {
          slug: "advanced-features",
          title: "Advanced Features"
        }
      }
    ]
  },
  "art-of-shader-distortion-and-glitches": {
    productSlug: "art-of-shader-distortion-and-glitches",
    sections: [
      {
        slug: "overview",
        title: "Overview",
        content: `
          <h3>Introduction</h3>
          <p>Art of Shader - Distortion and Glitches is a comprehensive pack of 40 customizable shaders designed to create stunning distortion and glitch effects in your Unreal Engine projects.</p>

          <h3>Key Features</h3>
          <ul>
            <li>40 unique distortion and glitch shader effects</li>
            <li>Post-process blendable materials</li>
            <li>Niagara FX integration</li>
            <li>Mesh material support with world displacement</li>
            <li>Blueprint actors for combining and grouping effects</li>
            <li>Object space and screen space localization</li>
            <li>Runtime customization support</li>
          </ul>

          <h3>System Requirements</h3>
          <ul>
            <li>Unreal Engine 4.27 or 5.0+</li>
            <li>Basic knowledge of post-process materials</li>
            <li>Understanding of material instances</li>
          </ul>
        `,
        next: {
          slug: "getting-started",
          title: "Getting Started"
        }
      },
      {
        slug: "getting-started",
        title: "Getting Started",
        content: `
          <h3>Installation</h3>
          <ol>
            <li>Purchase from the Unreal Engine Marketplace</li>
            <li>Install through Epic Games Launcher</li>
            <li>Enable the plugin in your project</li>
            <li>Restart the editor</li>
          </ol>

          <h3>Quick Start Guide</h3>
          <ol>
            <li>Open the plugin content folder</li>
            <li>Browse the shader categories (Artifacts, VCRGlitch, GlitchySpectrum, etc.)</li>
            <li>Drag a material instance into your post-process volume</li>
            <li>Adjust parameters to customize the effect</li>
          </ol>

          <h3>Project Structure</h3>
          <ul>
            <li><strong>Materials:</strong> Base shader materials</li>
            <li><strong>MaterialInstances:</strong> Parameterized presets</li>
            <li><strong>Blueprints:</strong> AOS actors for combining effects</li>
            <li><strong>Niagara:</strong> Particle system effects</li>
            <li><strong>Examples:</strong> Demo maps and setups</li>
          </ul>
        `,
        prev: {
          slug: "overview",
          title: "Overview"
        },
        next: {
          slug: "shader-types",
          title: "Shader Types"
        }
      },
      {
        slug: "shader-types",
        title: "Shader Types",
        content: `
          <h3>Available Shader Effects</h3>

          <h4>Artifacts</h4>
          <p>Digital artifacts and compression-style effects perfect for damaged screens or corrupted visuals.</p>

          <h4>VCR Glitch</h4>
          <p>Retro VHS tape-style glitches with scanlines and tracking errors.</p>

          <h4>Glitchy Spectrum</h4>
          <p>Chromatic aberration and RGB split effects for digital glitch aesthetics.</p>

          <h4>Wavy Distortion</h4>
          <p>Fluid wave-based distortions for underwater or heat haze effects.</p>

          <h4>Interlaced Glitch</h4>
          <p>Scanline and interlacing effects reminiscent of old displays.</p>

          <h4>Blocky Surface</h4>
          <p>Pixelation and mosaic effects for censoring or low-res aesthetics.</p>

          <h4>Broken Pixels</h4>
          <p>Dead pixel and screen damage simulation.</p>

          <h3>Combining Effects</h3>
          <p>Use the AOS Blueprint Actor to combine multiple shader effects. You can blend, layer, and group effects with custom weights and blending modes.</p>
        `,
        prev: {
          slug: "getting-started",
          title: "Getting Started"
        },
        next: {
          slug: "localization",
          title: "Localization"
        }
      },
      {
        slug: "localization",
        title: "Localization",
        content: `
          <h3>Object Space Localization</h3>
          <p>Apply effects to specific objects using custom depth stencils:</p>
          <ol>
            <li>Enable "Render CustomDepth Pass" on target actors</li>
            <li>Set a unique stencil value</li>
            <li>Configure the shader to match the stencil value</li>
            <li>Effect will only apply to those objects</li>
          </ol>

          <h3>Screen Space Localization</h3>
          <p>Split the screen into regions with different effects:</p>
          <ul>
            <li>Define screen regions using UV coordinates</li>
            <li>Apply different shader combinations to each region</li>
            <li>Useful for split-screen effects or UI transitions</li>
          </ul>

          <h3>Niagara Localization</h3>
          <p>Use Niagara systems to localize effects to specific areas:</p>
          <ol>
            <li>Place Niagara emitters in your scene</li>
            <li>Configure the particle system to spawn glitch effects</li>
            <li>Effects will only appear where particles are present</li>
          </ol>

          <h3>Background Shading</h3>
          <p>Separate foreground from background using scene depth:</p>
          <ul>
            <li>Apply one effect to main objects</li>
            <li>Apply different effects to background</li>
            <li>Controlled by depth threshold parameter</li>
          </ul>
        `,
        prev: {
          slug: "shader-types",
          title: "Shader Types"
        },
        next: {
          slug: "customization",
          title: "Customization"
        }
      },
      {
        slug: "customization",
        title: "Customization",
        content: `
          <h3>Material Parameters</h3>
          <p>All shader effects include customizable parameters:</p>

          <h4>Common Parameters</h4>
          <ul>
            <li><strong>Intensity:</strong> Overall effect strength</li>
            <li><strong>Color Tint:</strong> Color overlay for the effect</li>
            <li><strong>Speed:</strong> Animation speed (for animated effects)</li>
            <li><strong>Scale:</strong> Effect pattern size</li>
            <li><strong>Blend Mode:</strong> How the effect blends with the scene</li>
          </ul>

          <h4>Effect-Specific Parameters</h4>
          <p>Each shader type has unique parameters. For example:</p>
          <ul>
            <li><strong>VCR Glitch:</strong> Scanline density, tracking offset, color bleed</li>
            <li><strong>Wavy:</strong> Wave amplitude, frequency, direction</li>
            <li><strong>Blocky Surface:</strong> Pixel size, mosaic pattern</li>
          </ul>

          <h3>Creating Custom Presets</h3>
          <ol>
            <li>Right-click a material in the content browser</li>
            <li>Select "Create Material Instance"</li>
            <li>Adjust parameters to create your custom look</li>
            <li>Save and reuse across your project</li>
          </ol>

          <h3>Runtime Modification</h3>
          <p>Use the AOSRuntime blueprints to change effects at runtime:</p>
          <ul>
            <li>Dynamic parameter adjustment during gameplay</li>
            <li>UMG-based color wheel for color customization</li>
            <li>Smooth parameter interpolation</li>
            <li>Save/load effect presets</li>
          </ul>
        `,
        prev: {
          slug: "localization",
          title: "Localization"
        }
      }
    ]
  },
  "procedural-vortex-tunnel": {
    productSlug: "procedural-vortex-tunnel",
    sections: [
      {
        slug: "overview",
        title: "Overview",
        content: `
          <h3>Introduction</h3>
          <p>Procedural Vortex Tunnel is a plugin that lets you create highly customizable, material-driven vortex tunnels along spline paths in Unreal Engine.</p>

          <h3>Key Features</h3>
          <ul>
            <li>Spline-based vortex generation</li>
            <li>Displacement materials with procedural noise shaders</li>
            <li>Custom vortex meshes</li>
            <li>Niagara FX integration</li>
            <li>Static mesh scattering along paths</li>
            <li>Material blending system</li>
            <li>Pawn movement component</li>
            <li>Gravity pull effects</li>
          </ul>

          <h3>System Requirements</h3>
          <ul>
            <li>Unreal Engine 4.27 or 5.0+</li>
            <li>Understanding of spline components</li>
            <li>Basic material knowledge</li>
            <li>Niagara system familiarity (optional)</li>
          </ul>
        `,
        next: {
          slug: "getting-started",
          title: "Getting Started"
        }
      },
      {
        slug: "getting-started",
        title: "Getting Started",
        content: `
          <h3>Installation</h3>
          <ol>
            <li>Install from Epic Games Launcher</li>
            <li>Enable the plugin in your project settings</li>
            <li>Restart Unreal Engine</li>
            <li>Browse plugin content folder</li>
          </ol>

          <h3>Creating Your First Vortex</h3>
          <ol>
            <li>Place a VortexTunnel actor in your level</li>
            <li>Select the actor and view the spline component</li>
            <li>Add spline points to create your tunnel path</li>
            <li>Adjust vortex mesh and material settings</li>
            <li>Click "Generate Vortex" to create the tunnel</li>
          </ol>

          <h3>Basic Configuration</h3>
          <ul>
            <li><strong>Vortex Mesh:</strong> Select from provided meshes or use custom</li>
            <li><strong>Material Instance:</strong> Choose displacement material</li>
            <li><strong>Mesh Spacing:</strong> Distance between vortex segments</li>
            <li><strong>Rotation Offset:</strong> Twist amount along the tunnel</li>
          </ul>
        `,
        prev: {
          slug: "overview",
          title: "Overview"
        },
        next: {
          slug: "vortex-materials",
          title: "Vortex Materials"
        }
      },
      {
        slug: "vortex-materials",
        title: "Vortex Materials",
        content: `
          <h3>Displacement Materials</h3>
          <p>The vortex materials use high-quality procedural noise shaders to create dynamic displacement effects.</p>

          <h3>Material Parameters</h3>
          <ul>
            <li><strong>Noise Scale:</strong> Size of the displacement pattern</li>
            <li><strong>Displacement Amount:</strong> How far vertices are displaced</li>
            <li><strong>Animation Speed:</strong> Speed of material animation</li>
            <li><strong>Color Scheme:</strong> Base colors and gradients</li>
            <li><strong>Emissive Intensity:</strong> Glow strength</li>
            <li><strong>Noise Type:</strong> Different procedural noise patterns</li>
          </ul>

          <h3>Material Blending</h3>
          <p>Blend multiple materials along the vortex length:</p>
          <ol>
            <li>Define blend zones in the Vortex Data</li>
            <li>Assign different material instances to each zone</li>
            <li>Set blend transition distance</li>
            <li>Materials will smoothly interpolate along the spline</li>
          </ol>

          <h3>Creating Custom Materials</h3>
          <ol>
            <li>Duplicate one of the provided material instances</li>
            <li>Adjust displacement and color parameters</li>
            <li>Test with different noise shader combinations</li>
            <li>Assign to your VortexTunnel actor</li>
          </ol>
        `,
        prev: {
          slug: "getting-started",
          title: "Getting Started"
        },
        next: {
          slug: "niagara-fx",
          title: "Niagara FX"
        }
      },
      {
        slug: "niagara-fx",
        title: "Niagara FX",
        content: `
          <h3>VortexFX Actor</h3>
          <p>The VortexFX Actor generates Niagara particle systems along the vortex path.</p>

          <h3>Setup</h3>
          <ol>
            <li>Place a VortexFX actor in your level</li>
            <li>Reference the VortexTunnel actor's spline</li>
            <li>Select your Niagara system</li>
            <li>Configure spacing and rotation parameters</li>
          </ol>

          <h3>Module Scripts</h3>
          <p>The plugin includes Niagara module scripts that:</p>
          <ul>
            <li>Calculate spawn points along the spline</li>
            <li>Orient particles to face vortex direction</li>
            <li>Synchronize with vortex rotation</li>
            <li>Handle particle velocity along the tunnel</li>
          </ul>

          <h3>Runtime FX Generation</h3>
          <p>Use the Pawn Movement Component to spawn FX at runtime:</p>
          <ol>
            <li>Attach the component to your pawn blueprint</li>
            <li>Configure FX spawn rate and lifetime</li>
            <li>FX will trail behind the pawn as it moves through the vortex</li>
          </ol>

          <h3>Optimization</h3>
          <ul>
            <li>Use LOD for distant particle systems</li>
            <li>Limit particle count for performance</li>
            <li>Cull systems outside camera view</li>
            <li>Adjust spawn rate based on movement speed</li>
          </ul>
        `,
        prev: {
          slug: "vortex-materials",
          title: "Vortex Materials"
        },
        next: {
          slug: "mesh-scattering",
          title: "Mesh Scattering"
        }
      },
      {
        slug: "mesh-scattering",
        title: "Mesh Scattering",
        content: `
          <h3>VortexRepeater Actor</h3>
          <p>The VortexRepeater scatters static meshes procedurally along the vortex tunnel.</p>

          <h3>Configuration</h3>
          <ul>
            <li><strong>Mesh Array:</strong> List of meshes to scatter</li>
            <li><strong>Spacing:</strong> Distance between mesh instances</li>
            <li><strong>Random Offset:</strong> Variation in position</li>
            <li><strong>Rotation:</strong> How meshes are oriented</li>
            <li><strong>Scale Variation:</strong> Random size changes</li>
          </ul>

          <h3>Custom Repeater Data</h3>
          <p>Create custom data structures to control scattering:</p>
          <ol>
            <li>Define mesh placement rules</li>
            <li>Set density variation along the spline</li>
            <li>Configure clustering patterns</li>
            <li>Add randomization seed for consistency</li>
          </ol>

          <h3>Performance Considerations</h3>
          <ul>
            <li>Use instanced static mesh components</li>
            <li>Implement distance-based culling</li>
            <li>Reduce mesh complexity for distant objects</li>
            <li>Limit total instance count</li>
          </ul>

          <h3>Use Cases</h3>
          <ul>
            <li>Debris floating in the vortex</li>
            <li>Crystal formations along walls</li>
            <li>Architectural elements</li>
            <li>Collectible pickups</li>
          </ul>
        `,
        prev: {
          slug: "niagara-fx",
          title: "Niagara FX"
        },
        next: {
          slug: "pawn-movement",
          title: "Pawn Movement"
        }
      },
      {
        slug: "pawn-movement",
        title: "Pawn Movement",
        content: `
          <h3>Pawn Movement Component</h3>
          <p>The PawnMovementComponent blueprint enables smooth movement along the vortex spline.</p>

          <h3>Setup</h3>
          <ol>
            <li>Add the component to your pawn blueprint</li>
            <li>Reference the VortexTunnel actor</li>
            <li>Configure movement parameters</li>
            <li>Set up input bindings</li>
          </ol>

          <h3>Movement Parameters</h3>
          <ul>
            <li><strong>Movement Speed:</strong> Base travel speed</li>
            <li><strong>Acceleration:</strong> Rate of speed change</li>
            <li><strong>Max Speed:</strong> Speed limit</li>
            <li><strong>Rotation Speed:</strong> How fast the pawn rotates</li>
            <li><strong>Follow Spline:</strong> Strict path following vs. free movement</li>
          </ul>

          <h3>Camera Setup</h3>
          <p>Configure camera to work with vortex movement:</p>
          <ul>
            <li>Use spring arm for smooth following</li>
            <li>Enable rotation lag for cinematic feel</li>
            <li>Adjust FOV for speed sensation</li>
            <li>Add camera shake for intensity</li>
          </ul>

          <h3>Integration with Other Systems</h3>
          <ul>
            <li>Spawn trail FX during movement</li>
            <li>Trigger events at specific spline points</li>
            <li>Handle collision with vortex walls</li>
            <li>Implement boost mechanics</li>
          </ul>
        `,
        prev: {
          slug: "mesh-scattering",
          title: "Mesh Scattering"
        },
        next: {
          slug: "gravity-pull",
          title: "Gravity Pull"
        }
      },
      {
        slug: "gravity-pull",
        title: "Gravity Pull",
        content: `
          <h3>GravityPull System</h3>
          <p>The GravityPull blueprint simulates objects being pulled into the vortex.</p>

          <h3>How It Works</h3>
          <ol>
            <li>Define a target point along the vortex spline</li>
            <li>Specify which actors should be affected</li>
            <li>Configure pull strength and radius</li>
            <li>Objects are attracted toward the target point</li>
          </ol>

          <h3>Configuration</h3>
          <ul>
            <li><strong>Pull Strength:</strong> Force applied to objects</li>
            <li><strong>Pull Radius:</strong> Distance at which pull begins</li>
            <li><strong>Target Point:</strong> Location objects are pulled toward</li>
            <li><strong>Affected Actors:</strong> Which objects respond to pull</li>
            <li><strong>Falloff Curve:</strong> How strength decreases with distance</li>
          </ul>

          <h3>Integration with Pawn Movement</h3>
          <p>Combine with the movement component:</p>
          <ol>
            <li>Set target point to move along spline with pawn</li>
            <li>Objects appear to be pulled into the vortex</li>
            <li>Creates dynamic environment as player moves</li>
          </ol>

          <h3>Use Cases</h3>
          <ul>
            <li>Environmental objects being sucked into vortex</li>
            <li>Enemy AI being drawn toward player</li>
            <li>Collectibles attracted to player path</li>
            <li>Particle systems following vortex flow</li>
          </ul>
        `,
        prev: {
          slug: "pawn-movement",
          title: "Pawn Movement"
        }
      }
    ]
  },
  "runtime-fbx-import": {
    productSlug: "runtime-fbx-import",
    sections: [
      {
        slug: "overview",
        title: "Overview",
        content: `
          <h3>Introduction</h3>
          <p>Runtime FBX Import allows you to asynchronously import FBX files directly into your Unreal Engine project during runtime, complete with textures and materials.</p>

          <h3>Key Features</h3>
          <ul>
            <li>Asynchronous FBX file import at runtime</li>
            <li>Automatic texture import (Diffuse, Normal, Specular, Opacity)</li>
            <li>Custom collision support via UCX_ prefix</li>
            <li>Changeable material properties</li>
            <li>Custom FBX Actor system</li>
            <li>Load and save system for imported meshes</li>
            <li>Node-based scene organization</li>
          </ul>

          <h3>System Requirements</h3>
          <ul>
            <li>Unreal Engine 4.27 or 5.0+</li>
            <li>Understanding of procedural mesh components</li>
            <li>Basic knowledge of FBX file format</li>
          </ul>
        `,
        next: {
          slug: "getting-started",
          title: "Getting Started"
        }
      },
      {
        slug: "getting-started",
        title: "Getting Started",
        content: `
          <h3>Installation</h3>
          <ol>
            <li>Purchase from Unreal Engine Marketplace</li>
            <li>Install through Epic Games Launcher</li>
            <li>Enable plugin in project settings</li>
            <li>Restart editor</li>
          </ol>

          <h3>Basic Import Example</h3>
          <p>Simple blueprint example to import an FBX file:</p>
          <ol>
            <li>Create a new blueprint</li>
            <li>Call the "Import FBX File" function</li>
            <li>Provide the file path to your FBX</li>
            <li>Bind to the completion event</li>
            <li>The FBX Actor will be spawned when import finishes</li>
          </ol>

          <h3>Project Structure</h3>
          <ul>
            <li><strong>Blueprints:</strong> Import functions and custom actors</li>
            <li><strong>Materials:</strong> Default material templates</li>
            <li><strong>Examples:</strong> Sample FBX files and demo blueprints</li>
          </ul>
        `,
        prev: {
          slug: "overview",
          title: "Overview"
        },
        next: {
          slug: "import-function",
          title: "Import Function"
        }
      },
      {
        slug: "import-function",
        title: "Import Function",
        content: `
          <h3>The Import FBX Function</h3>
          <p>The core import function handles all aspects of loading an FBX file asynchronously.</p>

          <h3>Function Parameters</h3>
          <ul>
            <li><strong>File Path:</strong> Full path to the FBX file on disk</li>
            <li><strong>Import Settings:</strong> Configuration for import behavior</li>
            <li><strong>Spawn Transform:</strong> Where to place the imported actor</li>
            <li><strong>Auto Generate Materials:</strong> Whether to create materials automatically</li>
          </ul>

          <h3>Import Settings</h3>
          <ul>
            <li><strong>Import Textures:</strong> Automatically find and import textures</li>
            <li><strong>Import Collisions:</strong> Look for UCX_ collision meshes</li>
            <li><strong>Combine Meshes:</strong> Merge all meshes into one component</li>
            <li><strong>Scale Factor:</strong> Adjust imported mesh scale</li>
          </ul>

          <h3>Completion Events</h3>
          <p>Bind to events to handle import completion:</p>
          <ul>
            <li><strong>On Import Success:</strong> Called when import completes</li>
            <li><strong>On Import Failed:</strong> Called if import fails</li>
            <li><strong>On Progress Update:</strong> Called during import (for progress bars)</li>
          </ul>

          <h3>Asynchronous Processing</h3>
          <p>The import happens off the game thread, so you can:</p>
          <ul>
            <li>Display loading screens</li>
            <li>Show progress bars</li>
            <li>Continue gameplay while loading</li>
            <li>Import multiple files simultaneously</li>
          </ul>
        `,
        prev: {
          slug: "getting-started",
          title: "Getting Started"
        },
        next: {
          slug: "textures",
          title: "Texture Import"
        }
      },
      {
        slug: "textures",
        title: "Texture Import",
        content: `
          <h3>Automatic Texture Import</h3>
          <p>The plugin automatically searches for and imports textures referenced in the FBX file.</p>

          <h3>Supported Texture Types</h3>
          <ul>
            <li><strong>Diffuse/Base Color:</strong> Main color texture</li>
            <li><strong>Normal Map:</strong> Surface detail normal map</li>
            <li><strong>Specular:</strong> Specular/roughness map</li>
            <li><strong>Opacity:</strong> Transparency mask</li>
          </ul>

          <h3>Texture Search</h3>
          <p>The plugin looks for textures in:</p>
          <ol>
            <li>Same directory as the FBX file</li>
            <li>Textures subdirectory</li>
            <li>Parent directory</li>
            <li>Paths specified in FBX file</li>
          </ol>

          <h3>Texture Naming Conventions</h3>
          <p>Textures are identified by naming conventions:</p>
          <ul>
            <li>_Diffuse, _BaseColor, _D, _BC for diffuse</li>
            <li>_Normal, _N, _NRM for normal maps</li>
            <li>_Specular, _Spec, _S for specular</li>
            <li>_Opacity, _Alpha, _O for opacity</li>
          </ul>

          <h3>Material Generation</h3>
          <p>Materials are automatically created and applied:</p>
          <ol>
            <li>Plugin creates material instance for each material slot</li>
            <li>Textures are assigned to appropriate parameters</li>
            <li>Material is applied to the procedural mesh component</li>
          </ol>
        `,
        prev: {
          slug: "import-function",
          title: "Import Function"
        },
        next: {
          slug: "collisions",
          title: "Collisions"
        }
      },
      {
        slug: "collisions",
        title: "Collisions",
        content: `
          <h3>Custom Collision Meshes</h3>
          <p>The plugin supports custom collision meshes using Unreal's UCX_ naming convention.</p>

          <h3>Creating Collision Meshes</h3>
          <ol>
            <li>In your 3D modeling software (Maya, Blender, etc.)</li>
            <li>Create simplified collision geometry</li>
            <li>Name the mesh with UCX_ prefix followed by the target mesh name</li>
            <li>Example: UCX_Table_01 for collision on Table_01 mesh</li>
            <li>Export with your FBX file</li>
          </ol>

          <h3>Collision Types</h3>
          <ul>
            <li><strong>UCX_:</strong> Convex collision hull</li>
            <li><strong>UBX_:</strong> Box collision (if supported by exporter)</li>
            <li><strong>USP_:</strong> Sphere collision (if supported by exporter)</li>
          </ul>

          <h3>Automatic Application</h3>
          <p>The plugin automatically:</p>
          <ol>
            <li>Detects meshes with UCX_ prefix</li>
            <li>Generates collision geometry from these meshes</li>
            <li>Applies collision to the corresponding procedural mesh</li>
            <li>Hides the UCX_ meshes from rendering</li>
          </ol>

          <h3>Complex Collision</h3>
          <p>For complex objects, you can:</p>
          <ul>
            <li>Create multiple UCX_ meshes per object</li>
            <li>Use UCX_ObjectName_01, UCX_ObjectName_02, etc.</li>
            <li>Plugin will combine all collision hulls</li>
          </ul>
        `,
        prev: {
          slug: "textures",
          title: "Texture Import"
        },
        next: {
          slug: "materials",
          title: "Material Properties"
        }
      },
      {
        slug: "materials",
        title: "Material Properties",
        content: `
          <h3>Changeable Material Property System</h3>
          <p>The plugin includes a system for making materials interactive and customizable at runtime.</p>

          <h3>Setting Up Material Properties</h3>
          <ol>
            <li>Create a material parameter collection</li>
            <li>Define scalar and vector parameters</li>
            <li>Reference parameters in your master material</li>
            <li>Assign the parameter collection to your FBX Actor</li>
          </ol>

          <h3>Using Parameterized Materials</h3>
          <p>You can change material properties at runtime:</p>
          <ul>
            <li><strong>Colors:</strong> Change object colors dynamically</li>
            <li><strong>Roughness:</strong> Adjust surface finish</li>
            <li><strong>Metallic:</strong> Toggle metallic appearance</li>
            <li><strong>Emission:</strong> Add glowing effects</li>
          </ul>

          <h3>Material Slots</h3>
          <p>Each procedural mesh component has material slots:</p>
          <ol>
            <li>Access materials by index</li>
            <li>Create dynamic material instances</li>
            <li>Modify parameters on the fly</li>
            <li>Apply different materials to different parts</li>
          </ol>

          <h3>Blueprint Example</h3>
          <pre><code>// Get material from FBX Actor
Dynamic Material = FBX Actor → Get Material(Index: 0)

// Change color parameter
Dynamic Material → Set Vector Parameter Value
  - Parameter Name: "BaseColor"
  - Value: (R=1, G=0, B=0, A=1)</code></pre>
        `,
        prev: {
          slug: "collisions",
          title: "Collisions"
        },
        next: {
          slug: "save-load",
          title: "Save & Load System"
        }
      },
      {
        slug: "save-load",
        title: "Save & Load System",
        content: `
          <h3>Saving Imported Meshes</h3>
          <p>The save system allows you to store imported FBX data to disk, avoiding re-import on subsequent runs.</p>

          <h3>How It Works</h3>
          <ol>
            <li>Import FBX file for the first time</li>
            <li>Call "Save FBX Data" function</li>
            <li>Mesh data is serialized to a save file</li>
            <li>On next session, call "Load FBX Data" instead of importing</li>
          </ol>

          <h3>Save Function Parameters</h3>
          <ul>
            <li><strong>Save Name:</strong> Identifier for the saved data</li>
            <li><strong>Save Directory:</strong> Where to store the save file</li>
            <li><strong>Include Textures:</strong> Whether to save texture data</li>
          </ul>

          <h3>Load Function</h3>
          <p>Loading is much faster than importing:</p>
          <ul>
            <li>No FBX parsing required</li>
            <li>Direct procedural mesh generation</li>
            <li>Textures loaded from saved references</li>
            <li>Materials instantiated from saved data</li>
          </ul>

          <h3>Use Cases</h3>
          <ul>
            <li><strong>User-Generated Content:</strong> Let users import custom assets</li>
            <li><strong>Level Editors:</strong> Save imported props for reuse</li>
            <li><strong>Configuration Tools:</strong> Load different FBX sets</li>
            <li><strong>Mod Support:</strong> Allow community-created content</li>
          </ul>

          <h3>Data Management</h3>
          <p>Best practices:</p>
          <ul>
            <li>Use unique save names for each FBX</li>
            <li>Implement versioning for save files</li>
            <li>Provide UI for managing saved imports</li>
            <li>Handle missing texture files gracefully</li>
          </ul>
        `,
        prev: {
          slug: "materials",
          title: "Material Properties"
        }
      }
    ]
  },
  // Unified Art of Shader documentation - used for all AOS products
  "art-of-shader": {
    productSlug: "art-of-shader",
    sections: [
      {
        slug: "overview",
        title: "Overview",
        description: "Introduction to the Art of Shader suite of post-process effects",
        content: `
          <h2>Welcome to Art of Shader</h2>
          <p>Art of Shader is a comprehensive suite of post-process effect packs for Unreal Engine, designed to give your projects unique and stunning visual styles. Whether you're creating distorted glitch effects, cinematic film looks, or stylized cartoon aesthetics, Art of Shader has you covered.</p>

          <h3>The Complete Collection</h3>
          <p>The Art of Shader suite includes five specialized packs:</p>
          <ul>
            <li><strong>Distortion and Glitches</strong> - 40 customizable digital distortion and glitch effects</li>
            <li><strong>Advanced Distortion</strong> - 40 dynamic distortion shaders with enhanced capabilities</li>
            <li><strong>Film and Special Effects</strong> - 47 cinematic and special effect materials</li>
            <li><strong>Stylized Post Process</strong> - 40 materials for unique artistic looks</li>
            <li><strong>Toons</strong> - 16 toon-style cel-shaded effects</li>
          </ul>

          <h3>Core Features</h3>
          <ul>
            <li>Over 180 parameterized post-process materials</li>
            <li>Real-time customization with extensive parameters</li>
            <li>Blueprint actors for combining and blending effects</li>
            <li>Object space and screen space localization</li>
            <li>Niagara FX integration for particle-based effects</li>
            <li>Runtime controls and UMG widgets</li>
            <li>Optimized for performance</li>
          </ul>

          <h3>System Requirements</h3>
          <ul>
            <li>Unreal Engine 4.27 or 5.0+</li>
            <li>Basic understanding of post-process volumes</li>
            <li>Familiarity with material instances</li>
            <li>Knowledge of UMG for runtime controls (optional)</li>
          </ul>

          <h3>What Makes Art of Shader Unique</h3>
          <p>Unlike simple shader packs, Art of Shader provides a complete framework for managing and combining post-process effects. The AOS Blueprint Actor system allows you to layer multiple effects, control their intensity, and localize them to specific objects or screen regions—all without writing a single line of code.</p>
        `,
        next: {
          slug: "getting-started",
          title: "Getting Started"
        }
      },
      {
        slug: "getting-started",
        title: "Getting Started",
        description: "Quick start guide for installing and using Art of Shader",
        content: `
          <h2>Installation</h2>
          <p>Each Art of Shader pack is available separately on the Unreal Engine Marketplace, or as part of the complete Megapack bundle.</p>

          <h3>Installing from Marketplace</h3>
          <ol>
            <li>Purchase your desired pack(s) from the Unreal Engine Marketplace</li>
            <li>Open the Epic Games Launcher</li>
            <li>Navigate to your Library and find the Art of Shader pack</li>
            <li>Click "Install to Engine" and select your Unreal Engine version</li>
            <li>Open your Unreal project</li>
            <li>The Art of Shader content will be available in your Content Browser</li>
          </ol>

          <h3>Project Setup</h3>
          <p>To start using Art of Shader effects:</p>
          <ol>
            <li>Create or open a Post Process Volume in your level</li>
            <li>Set the volume to "Unbound" if you want effects to apply globally</li>
            <li>Browse to the Art of Shader content folder</li>
            <li>Navigate to MaterialInstances → [Effect Category]</li>
            <li>Select a material instance and add it to your Post Process Volume's Blendables array</li>
          </ol>

          <h3>Your First Effect</h3>
          <p>Let's apply a simple glitch effect:</p>
          <ol>
            <li>Open your Post Process Volume settings</li>
            <li>Scroll to the "Rendering Features" section</li>
            <li>Find "Post Process Materials"</li>
            <li>Click the + icon next to "Blendables"</li>
            <li>Select an Art of Shader material instance (e.g., MI_VCRGlitch)</li>
            <li>The effect will immediately apply to your viewport</li>
            <li>Adjust the material instance parameters to customize the look</li>
          </ol>

          <h3>Content Organization</h3>
          <p>Art of Shader content is organized by category:</p>
          <ul>
            <li><strong>Materials</strong> - Base shader materials (usually don't edit these)</li>
            <li><strong>MaterialInstances</strong> - Parameterized presets ready to use</li>
            <li><strong>Blueprints</strong> - AOS actors and helper blueprints</li>
            <li><strong>Niagara</strong> - Particle system effects and modules</li>
            <li><strong>Textures</strong> - Noise textures and lookup tables</li>
            <li><strong>Examples</strong> - Demo maps showing effect usage</li>
          </ul>

          <h3>Quick Tips</h3>
          <ul>
            <li>Start with low intensity values and increase gradually</li>
            <li>Use the example maps to see effects in context</li>
            <li>Create your own material instances for custom presets</li>
            <li>Combine multiple effects for unique looks</li>
            <li>Check performance in packaged builds, not just editor</li>
          </ul>
        `,
        prev: {
          slug: "overview",
          title: "Overview"
        },
        next: {
          slug: "effect-categories",
          title: "Effect Categories"
        }
      },
      {
        slug: "effect-categories",
        title: "Effect Categories",
        description: "Overview of all available effect categories and when to use them",
        content: `
          <h2>Understanding Effect Categories</h2>
          <p>Art of Shader effects are organized into categories based on their visual purpose. Understanding these categories helps you quickly find the right effect for your project.</p>

          <h3>Distortion & Glitch Effects</h3>
          <p>Perfect for sci-fi, cyberpunk, horror, or any project needing digital corruption effects.</p>

          <h4>Popular Effects:</h4>
          <ul>
            <li><strong>VCR Glitch</strong> - Retro VHS tape artifacts with tracking errors and scanlines</li>
            <li><strong>Chromatic Aberration</strong> - RGB color split for digital glitch aesthetics</li>
            <li><strong>Digital Artifacts</strong> - Compression artifacts and pixelation</li>
            <li><strong>Interlaced Glitch</strong> - Scanline effects reminiscent of old CRT displays</li>
            <li><strong>Block Distortion</strong> - Chunky pixel blocks and mosaic effects</li>
          </ul>

          <h4>Use Cases:</h4>
          <ul>
            <li>Damaged screens or holograms</li>
            <li>Hacking or system malfunction sequences</li>
            <li>Transition effects between scenes</li>
            <li>Death or damage visual feedback</li>
            <li>Cyberpunk aesthetic</li>
          </ul>

          <h3>Film & Cinematic Effects</h3>
          <p>Professional-grade effects for achieving cinematic looks and special visual treatments.</p>

          <h4>Popular Effects:</h4>
          <ul>
            <li><strong>Film Grain</strong> - Authentic film grain simulation</li>
            <li><strong>Vignette</strong> - Lens vignetting effects</li>
            <li><strong>Color Grading</strong> - Advanced color tone adjustments</li>
            <li><strong>Rain Shader</strong> - Realistic rain on camera lens</li>
            <li><strong>Night Vision</strong> - Military-style night vision goggles</li>
            <li><strong>Thermal Vision</strong> - Heat signature visualization</li>
          </ul>

          <h4>Use Cases:</h4>
          <ul>
            <li>Cinematic cutscenes</li>
            <li>Special camera modes</li>
            <li>Environmental storytelling</li>
            <li>Genre-specific atmospheres (noir, war, survival)</li>
          </ul>

          <h3>Stylized & Artistic Effects</h3>
          <p>Transform your realistic scenes into stylized artistic visuals.</p>

          <h4>Popular Effects:</h4>
          <ul>
            <li><strong>Watercolor</strong> - Paint-like watercolor effect</li>
            <li><strong>Oil Paint</strong> - Impressionist oil painting style</li>
            <li><strong>Cartoon/Cel-Shaded</strong> - Comic book and cartoon aesthetics</li>
            <li><strong>Sketch</strong> - Hand-drawn pencil sketch look</li>
            <li><strong>Halftone</strong> - Comic book dot patterns</li>
          </ul>

          <h4>Use Cases:</h4>
          <ul>
            <li>Indie games with unique art styles</li>
            <li>Flashback or memory sequences</li>
            <li>Mini-games or special game modes</li>
            <li>Stylized narrative games</li>
          </ul>

          <h3>Toon Effects</h3>
          <p>Dedicated cel-shading and toon effects for anime and cartoon styles.</p>

          <h4>Features:</h4>
          <ul>
            <li>Customizable outline thickness and color</li>
            <li>Shadow quantization (stepped shadows)</li>
            <li>Rim lighting controls</li>
            <li>Color palette reduction</li>
          </ul>

          <h4>Use Cases:</h4>
          <ul>
            <li>Anime-style games</li>
            <li>Cartoon adaptations</li>
            <li>Stylized character renders</li>
            <li>Comic book visualizations</li>
          </ul>

          <h3>Advanced Distortion</h3>
          <p>Enhanced distortion effects with more control and complexity.</p>

          <h4>Key Differences:</h4>
          <ul>
            <li>More parameters for fine-tuning</li>
            <li>Enhanced noise algorithms</li>
            <li>Better performance optimization</li>
            <li>Additional blend modes</li>
          </ul>

          <h3>Choosing the Right Effect</h3>
          <p>When selecting effects:</p>
          <ol>
            <li><strong>Match Your Genre</strong> - Glitch for cyberpunk, film effects for realism, toon for anime</li>
            <li><strong>Consider Performance</strong> - More complex effects cost more performance</li>
            <li><strong>Test in Context</strong> - Effects look different with various lighting and content</li>
            <li><strong>Layer Thoughtfully</strong> - Combining too many effects can be overwhelming</li>
            <li><strong>Stay Subtle</strong> - Often less is more for professional results</li>
          </ol>
        `,
        prev: {
          slug: "getting-started",
          title: "Getting Started"
        },
        next: {
          slug: "combining-effects",
          title: "Combining Effects"
        }
      },
      {
        slug: "combining-effects",
        title: "Combining Effects",
        description: "Learn how to layer and blend multiple effects using the AOS Blueprint Actor",
        content: `
          <h2>The AOS Blueprint Actor</h2>
          <p>The AOS (Art of Shader) Blueprint Actor is the central tool for combining, grouping, and managing multiple post-process effects. It provides an intuitive interface for creating complex visual combinations without dealing with multiple Post Process Volumes.</p>

          <h3>Why Use the AOS Actor?</h3>
          <ul>
            <li>Combine multiple effects in one organized location</li>
            <li>Control effect intensity individually or as groups</li>
            <li>Switch between effect presets at runtime</li>
            <li>Apply effects to specific objects or screen regions</li>
            <li>Animate effect parameters smoothly</li>
            <li>Organize effects by purpose (background vs foreground, etc.)</li>
          </ul>

          <h3>Basic Setup</h3>
          <ol>
            <li>Place an AOS Blueprint Actor in your level</li>
            <li>Select the actor and open its details panel</li>
            <li>Add material instances to the appropriate effect arrays</li>
            <li>Adjust master intensity and individual effect weights</li>
          </ol>

          <h3>Effect Organization</h3>
          <p>The AOS Actor organizes effects into groups:</p>

          <h4>Main Effects</h4>
          <p>Primary visual effects that apply to the main scene objects.</p>
          <ul>
            <li>Use for character and environment effects</li>
            <li>Controlled by scene depth</li>
            <li>Can exclude background</li>
          </ul>

          <h4>Background Effects</h4>
          <p>Effects that only apply to distant background elements.</p>
          <ul>
            <li>Useful for atmospheric effects</li>
            <li>Based on depth threshold</li>
            <li>Independent from main effects</li>
          </ul>

          <h4>Screen Effects</h4>
          <p>Full-screen effects that apply to everything.</p>
          <ul>
            <li>Camera lens effects</li>
            <li>Overall color grading</li>
            <li>Screen-space distortions</li>
          </ul>

          <h3>Blend Modes</h3>
          <p>Control how multiple effects combine:</p>
          <ul>
            <li><strong>Additive</strong> - Effects add together (can become very bright)</li>
            <li><strong>Multiply</strong> - Effects multiply (darkens the result)</li>
            <li><strong>Overlay</strong> - Balanced blend of both</li>
            <li><strong>Screen</strong> - Brightening blend mode</li>
            <li><strong>Linear Burn</strong> - Darkening blend mode</li>
          </ul>

          <h3>Example Combinations</h3>

          <h4>Cyberpunk Hacker Vision</h4>
          <pre><code>Main Effects:
  - Chromatic Aberration (Low intensity)
  - Scanlines (Medium intensity)
Background Effects:
  - Color Shift (Blue/Cyan tint)
  - Digital Noise
Screen Effects:
  - Vignette
  - Film Grain</code></pre>

          <h4>Horror Atmosphere</h4>
          <pre><code>Main Effects:
  - Desaturate (reduce color)
  - VCR Glitch (subtle, occasional spikes)
Background Effects:
  - Fog/Depth blur
Screen Effects:
  - Heavy Vignette
  - Film Grain (heavy)
  - Color Grading (green/gray tint)</code></pre>

          <h4>Stylized Cartoon</h4>
          <pre><code>Main Effects:
  - Cel Shader
  - Outlines
Background Effects:
  - Watercolor texture
Screen Effects:
  - Color Palette Reduction
  - Slight halftone</code></pre>

          <h3>Performance Considerations</h3>
          <ul>
            <li>Each effect adds rendering cost</li>
            <li>Limit to 3-5 active effects for best performance</li>
            <li>Disable effects that aren't visually contributing</li>
            <li>Use LOD systems to reduce effects at distance</li>
            <li>Profile on target hardware</li>
          </ul>

          <h3>Runtime Control</h3>
          <p>Control effects dynamically during gameplay:</p>
          <pre><code>// Blueprint pseudocode
On Event (e.g., Low Health):
  - Increase Glitch Intensity
  - Add Desaturation
  - Pulse Vignette

On Event (e.g., Power Up):
  - Add Chromatic Aberration
  - Increase Bloom
  - Add Color Shift</code></pre>

          <h3>Best Practices</h3>
          <ol>
            <li><strong>Start Simple</strong> - Begin with one or two effects and add more</li>
            <li><strong>Group Related Effects</strong> - Organize by purpose, not just visuals</li>
            <li><strong>Use Reference Images</strong> - Know what you're aiming for</li>
            <li><strong>Test in Motion</strong> - Effects look different when camera moves</li>
            <li><strong>Get Feedback</strong> - Effects can cause motion sickness if overdone</li>
            <li><strong>Save Presets</strong> - Create material instance collections for reusability</li>
          </ol>
        `,
        prev: {
          slug: "effect-categories",
          title: "Effect Categories"
        },
        next: {
          slug: "localization",
          title: "Effect Localization"
        }
      },
      {
        slug: "localization",
        title: "Effect Localization",
        description: "Apply effects to specific objects or screen regions",
        content: `
          <h2>What is Effect Localization?</h2>
          <p>Localization allows you to apply post-process effects to specific parts of your scene rather than the entire view. This enables creative effects like:</p>
          <ul>
            <li>Making only certain objects glitchy while the rest is normal</li>
            <li>Applying stylized effects to characters but not environment</li>
            <li>Creating split-screen effects with different looks</li>
            <li>Isolating effects to UI elements</li>
          </ul>

          <h3>Object Space Localization</h3>
          <p>Apply effects only to specific objects using the Custom Depth Stencil buffer.</p>

          <h4>Setup</h4>
          <ol>
            <li>Select the actor(s) you want to affect</li>
            <li>In Details panel, search for "Custom Depth"</li>
            <li>Enable "Render CustomDepth Pass"</li>
            <li>Set a Custom Depth Stencil Value (1-255)</li>
            <li>In your AOS material instance, enable "Use Object Localization"</li>
            <li>Set the "Stencil Value" to match your actor's value</li>
          </ol>

          <h4>Stencil Values</h4>
          <p>Organize your stencil values:</p>
          <ul>
            <li><strong>1-50:</strong> Main characters</li>
            <li><strong>51-100:</strong> Enemies/NPCs</li>
            <li><strong>101-150:</strong> Interactive objects</li>
            <li><strong>151-200:</strong> Environmental effects</li>
            <li><strong>201-255:</strong> UI/Special effects</li>
          </ul>

          <h4>Include vs Exclude Mode</h4>
          <ul>
            <li><strong>Include:</strong> Effect ONLY applies to marked objects</li>
            <li><strong>Exclude:</strong> Effect applies to EVERYTHING EXCEPT marked objects</li>
          </ul>

          <h4>Use Cases</h4>
          <ul>
            <li><strong>Damaged Enemies:</strong> Glitch effect on low-health enemies</li>
            <li><strong>Hacked Objects:</strong> Chromatic aberration on hacked items</li>
            <li><strong>Spectral Characters:</strong> Ethereal effects on ghosts</li>
            <li><strong>Shield Effects:</strong> Distortion on shielded characters</li>
          </ul>

          <h3>Screen Space Localization</h3>
          <p>Divide the screen into regions with different effects.</p>

          <h4>Setup</h4>
          <ol>
            <li>Enable "Use Screen Space Localization" in material instance</li>
            <li>Define region using UV coordinates (0-1 range)</li>
            <li>Set shape: Rectangle, Circle, or custom mask</li>
            <li>Adjust feather/softness of the edge</li>
          </ol>

          <h4>Region Parameters</h4>
          <ul>
            <li><strong>Center:</strong> UV coordinates of region center (X, Y)</li>
            <li><strong>Size:</strong> Width and height of region (0-1)</li>
            <li><strong>Feather:</strong> Edge softness (0 = hard edge, 1 = very soft)</li>
            <li><strong>Invert:</strong> Apply effect outside the region instead</li>
          </ul>

          <h4>Example Configurations</h4>

          <p><strong>Top-Left Quarter:</strong></p>
          <pre><code>Center: (0.25, 0.25)
Size: (0.5, 0.5)
Shape: Rectangle</code></pre>

          <p><strong>Center Circle:</strong></p>
          <pre><code>Center: (0.5, 0.5)
Size: (0.3, 0.3)
Shape: Circle
Feather: 0.2</code></pre>

          <p><strong>Right Half:</strong></p>
          <pre><code>Center: (0.75, 0.5)
Size: (0.5, 1.0)
Shape: Rectangle</code></pre>

          <h4>Use Cases</h4>
          <ul>
            <li><strong>Binoculars/Scope:</strong> Circular region in center</li>
            <li><strong>Damaged Screen:</strong> Effect in corners only</li>
            <li><strong>Split Screen:</strong> Different effect on each half</li>
            <li><strong>Vignette Alternative:</strong> Inverted circle for edge effects</li>
            <li><strong>UI Separation:</strong> Different treatment for UI regions</li>
          </ul>

          <h3>Depth-Based Localization</h3>
          <p>Separate foreground from background using scene depth.</p>

          <h4>How It Works</h4>
          <ul>
            <li>Uses scene depth buffer to determine distance</li>
            <li>Define a depth threshold value</li>
            <li>Objects closer than threshold = foreground</li>
            <li>Objects farther = background</li>
          </ul>

          <h4>Setup</h4>
          <ol>
            <li>Enable "Separate Background" in material instance</li>
            <li>Adjust "Depth Threshold" slider</li>
            <li>Preview to ensure correct separation</li>
            <li>Apply different effects to each layer</li>
          </ol>

          <h4>Use Cases</h4>
          <ul>
            <li><strong>Atmospheric Fog:</strong> Effect increases with distance</li>
            <li><strong>Focus Effects:</strong> Blur background, keep foreground sharp</li>
            <li><strong>Cinematic Depth:</strong> Film effects on background, clean foreground</li>
            <li><strong>Weather Effects:</strong> Fog/haze on distant objects only</li>
          </ul>

          <h3>Niagara-Based Localization</h3>
          <p>Use Niagara particle systems to control where effects appear.</p>

          <h4>How It Works</h4>
          <ol>
            <li>Place Niagara particle system in scene</li>
            <li>Particles define effect locations</li>
            <li>Effect renders only where particles exist</li>
            <li>Animate particles to move effects around</li>
          </ol>

          <h4>Setup</h4>
          <ol>
            <li>Use provided AOS Niagara systems</li>
            <li>Configure emitter spawn location</li>
            <li>Link to corresponding effect material</li>
            <li>Adjust particle lifetime and behavior</li>
          </ol>

          <h4>Use Cases</h4>
          <ul>
            <li><strong>Moving Glitches:</strong> Glitch travels across screen</li>
            <li><strong>Impact Effects:</strong> Distortion at projectile hit points</li>
            <li><strong>Energy Fields:</strong> Effect follows energy sphere</li>
            <li><strong>Temporal Rifts:</strong> Growing/shrinking effect regions</li>
          </ul>

          <h3>Combining Localization Types</h3>
          <p>You can combine multiple localization methods:</p>

          <h4>Example: Damaged Robot Enemy</h4>
          <pre><code>1. Object Space: Target the robot with stencil value 50
2. Screen Space: Add screen shake effect to center region
3. Niagara: Emit sparks particles from damaged areas
4. Result: Glitch effect only on robot, intensifying
   near damage points, with screen distortion when close</code></pre>

          <h3>Performance Impact</h3>
          <p>Localization affects performance differently:</p>
          <ul>
            <li><strong>Object Space:</strong> Minimal cost, uses existing stencil buffer</li>
            <li><strong>Screen Space:</strong> Low cost, simple UV math</li>
            <li><strong>Depth-Based:</strong> Very low cost, uses existing depth buffer</li>
            <li><strong>Niagara:</strong> Moderate cost, depends on particle count</li>
          </ul>

          <h3>Best Practices</h3>
          <ol>
            <li><strong>Plan Your Stencil Values:</strong> Create a chart of what values mean what</li>
            <li><strong>Use Feathering:</strong> Hard edges can look unnatural</li>
            <li><strong>Test Edge Cases:</strong> What happens at borders between regions?</li>
            <li><strong>Consider Camera Movement:</strong> Effects move with screen space, not world</li>
            <li><strong>Document Your Setup:</strong> Complex localization needs good notes</li>
          </ol>
        `,
        prev: {
          slug: "combining-effects",
          title: "Combining Effects"
        },
        next: {
          slug: "runtime-control",
          title: "Runtime Control"
        }
      },
      {
        slug: "runtime-control",
        title: "Runtime Control",
        description: "Control and animate effects during gameplay",
        content: `
          <h2>Dynamic Effect Control</h2>
          <p>Art of Shader effects can be controlled and animated at runtime, enabling reactive visuals that respond to gameplay events.</p>

          <h3>AOSRuntime Blueprint</h3>
          <p>The AOSRuntime blueprint provides ready-to-use functions for controlling effects dynamically.</p>

          <h4>Key Functions</h4>
          <ul>
            <li><strong>Set Effect Intensity:</strong> Change overall effect strength</li>
            <li><strong>Interpolate Parameters:</strong> Smoothly transition between values</li>
            <li><strong>Toggle Effect:</strong> Enable/disable effects instantly</li>
            <li><strong>Pulse Effect:</strong> Create pulsing intensity variations</li>
            <li><strong>Random Variation:</strong> Add randomness to parameters</li>
          </ul>

          <h3>Basic Blueprint Control</h3>

          <h4>Changing Effect Intensity</h4>
          <pre><code>Event BeginPlay
→ Get AOS Actor Reference
→ Set Scalar Parameter Value
  - Parameter Name: "Intensity"
  - Value: 0.5</code></pre>

          <h4>Smooth Parameter Transition</h4>
          <pre><code>Timeline → Update
→ Lerp (A: Start Value, B: End Value, Alpha: Timeline Alpha)
→ Set Scalar Parameter Value
  - Parameter Name: "EffectStrength"
  - Value: Lerp Result</code></pre>

          <h4>Responding to Events</h4>
          <pre><code>Event PlayerDamaged
→ Set Scalar Parameter Value
  - Parameter Name: "GlitchIntensity"
  - Value: 1.0
→ Delay (0.5 seconds)
→ Set Scalar Parameter Value
  - Parameter Name: "GlitchIntensity"
  - Value: 0.0</code></pre>

          <h3>UMG Widget Controls</h3>
          <p>The included UMG widgets provide user-friendly interfaces for effect customization.</p>

          <h4>Color Wheel Widget</h4>
          <p>Dynamic color picker for adjusting color-based parameters:</p>
          <ul>
            <li>Real-time color selection</li>
            <li>Hue, saturation, value controls</li>
            <li>RGB output for material parameters</li>
            <li>Preset color swatches</li>
          </ul>

          <h4>Slider Widget</h4>
          <p>Precise control over scalar parameters:</p>
          <ul>
            <li>Min/max range configuration</li>
            <li>Step increments</li>
            <li>Real-time preview</li>
            <li>Value display</li>
          </ul>

          <h4>Preset Switcher</h4>
          <p>Toggle between saved effect configurations:</p>
          <ul>
            <li>Store multiple material instance presets</li>
            <li>Instant switching between looks</li>
            <li>Blend between presets</li>
            <li>User-customizable slots</li>
          </ul>

          <h3>Common Gameplay Integrations</h3>

          <h4>Health-Based Effects</h4>
          <pre><code>Event HealthChanged
→ Get Health Percentage (0-1)
→ Invert (1 - Health %)
→ Set Scalar Parameter Value
  - Parameter Name: "DamageGlitch"
  - Value: Inverted Health

Result: More damage = more glitch</code></pre>

          <h4>Speed-Based Motion Blur</h4>
          <pre><code>Event Tick
→ Get Velocity
→ Vector Length
→ Map Range (0, MaxSpeed) to (0, 1)
→ Set Scalar Parameter Value
  - Parameter Name: "MotionBlur"
  - Value: Mapped Speed

Result: Faster movement = more blur</code></pre>

          <h4>Power-Up Visual Feedback</h4>
          <pre><code>Event PowerUpActivated
→ Sequence
  ├→ Set Vector Parameter Value
  │   - Parameter Name: "GlowColor"
  │   - Value: PowerUp Color
  ├→ Timeline (0 to 1 over 0.2 seconds)
  │   → Set Scalar Parameter Value
  │       - Parameter Name: "GlowIntensity"
  │       - Value: Timeline Value
  └→ Wait 5 seconds
      → Timeline (1 to 0 over 0.5 seconds)
          → Set Scalar Parameter Value
              - Parameter Name: "GlowIntensity"
              - Value: Timeline Value

Result: Flash effect that fades out</code></pre>

          <h4>Environmental Response</h4>
          <pre><code>Event EnterWater
→ Set Vector Parameter Value
  - Parameter Name: "DistortionColor"
  - Value: (0, 0.3, 0.5) // Blue-green
→ Set Scalar Parameter Value
  - Parameter Name: "DistortionAmount"
  - Value: 0.8

Event ExitWater
→ Set Scalar Parameter Value
  - Parameter Name: "DistortionAmount"
  - Value: 0.0

Result: Underwater distortion effect</code></pre>

          <h3>Advanced Techniques</h3>

          <h4>Pulsing Effects</h4>
          <pre><code>Create Curve Float asset with sine wave
→ Timeline using that curve
→ Loop timeline
→ Set Parameter Value to curve output

Result: Rhythmic pulsing effect</code></pre>

          <h4>Random Glitch Spikes</h4>
          <pre><code>Set Timer by Function Name
  - Function: "TriggerGlitch"
  - Time: Random Float (1.0, 5.0)
  - Looping: False

Function TriggerGlitch:
→ Set Scalar Parameter Value
  - Parameter Name: "Glitch"
  - Value: Random Float (0.5, 1.0)
→ Delay (Random Float 0.1, 0.3)
→ Set Scalar Parameter Value
  - Parameter Name: "Glitch"
  - Value: 0.0
→ Set Timer (restart the cycle)

Result: Unpredictable glitch spikes</code></pre>

          <h4>Camera Shake Integration</h4>
          <pre><code>On Impact:
→ Play Camera Shake
→ Sequence
  ├→ Set Scalar Parameter "ImpactDistortion" to 1.0
  └→ Timeline (Ease Out curve)
      → Set Scalar Parameter to Timeline Value

Result: Visual effect synced with camera shake</code></pre>

          <h3>Performance Optimization</h3>

          <h4>Dynamic Effect Enabling</h4>
          <pre><code>Based on graphics settings:
If (Graphics Quality == Low)
  → Disable expensive effects
  → Keep only essential effects

If (Graphics Quality == High)
  → Enable all effects
  → Increase quality parameters</code></pre>

          <h4>Distance-Based LOD</h4>
          <pre><code>Event Tick
→ Get Distance to Player Camera
→ If distance > Threshold
  ├→ True: Reduce effect intensity
  └→ False: Full intensity

Result: Save performance on distant effects</code></pre>

          <h3>Saving/Loading Configurations</h3>

          <h4>Save Effect Settings</h4>
          <pre><code>1. Create a struct with all effect parameters
2. Get current values from material instances
3. Save struct to SaveGame object
4. Write to disk</code></pre>

          <h4>Load Effect Settings</h4>
          <pre><code>1. Load SaveGame object
2. Extract effect parameter struct
3. Apply values to material instances
4. Update UI widgets if present</code></pre>

          <h3>Debugging Runtime Effects</h3>

          <h4>Print Parameter Values</h4>
          <pre><code>Get Scalar Parameter Value
→ Print String (for debugging)
→ Verify values are updating correctly</code></pre>

          <h4>Visual Debug Mode</h4>
          <pre><code>Create debug widget showing:
- Current effect names
- Parameter values
- Active/inactive status
- Performance metrics</code></pre>

          <h3>Best Practices</h3>
          <ol>
            <li><strong>Use Timelines:</strong> For smooth transitions, always use timeline interpolation</li>
            <li><strong>Clamp Values:</strong> Ensure parameter values stay within valid ranges</li>
            <li><strong>Test Edge Cases:</strong> What happens at 0% health? 100% speed?</li>
            <li><strong>Provide User Control:</strong> Let players adjust effect intensity</li>
            <li><strong>Consider Accessibility:</strong> Some effects can cause motion sickness</li>
            <li><strong>Profile Performance:</strong> Monitor frame rate when effects change</li>
            <li><strong>Use Events Wisely:</strong> Don't update every tick if not necessary</li>
          </ol>
        `,
        prev: {
          slug: "localization",
          title: "Effect Localization"
        },
        next: {
          slug: "troubleshooting",
          title: "Troubleshooting"
        }
      },
      {
        slug: "troubleshooting",
        title: "Troubleshooting",
        description: "Common issues and their solutions",
        content: `
          <h2>Common Issues & Solutions</h2>

          <h3>Effect Not Visible</h3>

          <h4>Problem:</h4>
          <p>Material instance is added but no visual effect appears.</p>

          <h4>Solutions:</h4>
          <ul>
            <li><strong>Check Post Process Volume:</strong> Ensure it's set to "Unbound" or you're inside its bounds</li>
            <li><strong>Verify Blendables:</strong> Confirm material instance is in the Blendables array</li>
            <li><strong>Check Intensity:</strong> Parameter might be set to 0 or very low value</li>
            <li><strong>Material Domain:</strong> Ensure material domain is "Post Process"</li>
            <li><strong>Blend Weight:</strong> Check the blend weight is set to 1.0</li>
          </ul>

          <h3>Performance Issues</h3>

          <h4>Problem:</h4>
          <p>Frame rate drops significantly when effects are active.</p>

          <h4>Solutions:</h4>
          <ul>
            <li><strong>Reduce Effect Count:</strong> Too many simultaneous effects</li>
            <li><strong>Lower Quality Settings:</strong> Reduce sample counts in material parameters</li>
            <li><strong>Check Overdraw:</strong> Multiple translucent effects can stack badly</li>
            <li><strong>Simplify Complexity:</strong> Some effects are more expensive than others</li>
            <li><strong>Profile GPU:</strong> Use Unreal's GPU profiler to identify bottlenecks</li>
            <li><strong>LOD System:</strong> Disable effects when far from camera</li>
          </ul>

          <h3>Effect Looks Different in Packaged Build</h3>

          <h4>Problem:</h4>
          <p>Effects look correct in editor but different in packaged game.</p>

          <h4>Solutions:</h4>
          <ul>
            <li><strong>Check Project Settings:</strong> Post-process quality settings in scalability</li>
            <li><strong>Shader Model:</strong> Ensure target platform supports required shader model</li>
            <li><strong>Mobile Rendering:</strong> Some effects need mobile-specific versions</li>
            <li><strong>Texture Streaming:</strong> Verify textures aren't being downsampled</li>
            <li><strong>Compile Shaders:</strong> Ensure all shaders compiled during packaging</li>
          </ul>

          <h3>Localization Not Working</h3>

          <h4>Problem:</h4>
          <p>Effect doesn't localize to specific objects despite correct setup.</p>

          <h4>Solutions:</h4>
          <ul>
            <li><strong>Custom Depth Enabled:</strong> Verify "Render CustomDepth Pass" is checked</li>
            <li><strong>Stencil Values Match:</strong> Actor's stencil value matches material parameter</li>
            <li><strong>Visualization Mode:</strong> Enable "Custom Depth" view mode to debug</li>
            <li><strong>Include/Exclude Mode:</strong> Check if mode is set correctly</li>
            <li><strong>Post-Process Priority:</strong> Ensure effect has correct rendering order</li>
          </ul>

          <h3>Runtime Parameter Changes Not Working</h3>

          <h4>Problem:</h4>
          <p>Changing parameters via Blueprint doesn't affect the visual.</p>

          <h4>Solutions:</h4>
          <ul>
            <li><strong>Dynamic Material Instance:</strong> Must create dynamic instance, not use asset directly</li>
            <li><strong>Parameter Names:</strong> Ensure exact name match (case-sensitive)</li>
            <li><strong>Reference Check:</strong> Verify you're referencing the correct material instance</li>
            <li><strong>Parameter Type:</strong> Using Set Scalar for scalar, Set Vector for colors</li>
            <li><strong>Timing:</strong> Setting parameters before materials are initialized</li>
          </ul>

          <h3>Effects Flickering or Unstable</h3>

          <h4>Problem:</h4>
          <p>Effects flicker, pop in/out, or look unstable.</p>

          <h4>Solutions:</h4>
          <ul>
            <li><strong>Z-Fighting:</strong> Multiple post-process volumes with same priority</li>
            <li><strong>Priority Settings:</strong> Adjust post-process volume priorities</li>
            <li><strong>Temporal Anti-Aliasing:</strong> TAA can interact badly with some effects</li>
            <li><strong>Parameter Clamping:</strong> Values might be exceeding valid ranges</li>
            <li><strong>Precision Issues:</strong> Try increasing parameter precision</li>
          </ul>

          <h3>Niagara Effects Not Rendering</h3>

          <h4>Problem:</h4>
          <p>Niagara-based effects aren't appearing.</p>

          <h4>Solutions:</h4>
          <ul>
            <li><strong>Particle Spawning:</strong> Verify particles are actually spawning</li>
            <li><strong>Emitter Enabled:</strong> Check emitter is enabled in system</li>
            <li><strong>Render State:</strong> Ensure renderer module is present and enabled</li>
            <li><strong>Bounds:</strong> Particle system bounds might be too small</li>
            <li><strong>Material Assignment:</strong> Correct material assigned to particles</li>
          </ul>

          <h3>Color Looks Wrong</h3>

          <h4>Problem:</h4>
          <p>Colors appear different than expected.</p>

          <h4>Solutions:</h4>
          <ul>
            <li><strong>Color Space:</strong> Check if working in linear vs sRGB color space</li>
            <li><strong>Tone Mapping:</strong> Post-process tone mapping affects final colors</li>
            <li><strong>Exposure:</strong> Auto-exposure can change apparent colors</li>
            <li><strong>Color Grading:</strong> Other post-process effects interfering</li>
            <li><strong>Monitor Calibration:</strong> Display settings can affect perception</li>
          </ul>

          <h3>Memory Issues</h3>

          <h4>Problem:</h4>
          <p>Running out of memory or hitting texture limits.</p>

          <h4>Solutions:</h4>
          <ul>
            <li><strong>Texture Sizes:</strong> Some noise textures might be unnecessarily large</li>
            <li><strong>Streaming:</strong> Enable texture streaming for larger textures</li>
            <li><strong>Material Instances:</strong> Creating too many dynamic instances</li>
            <li><strong>Cleanup:</strong> Destroy unused dynamic material instances</li>
            <li><strong>Pooling:</strong> Reuse material instances instead of creating new ones</li>
          </ul>

          <h3>VR/AR Specific Issues</h3>

          <h4>Problem:</h4>
          <p>Effects cause discomfort or don't render correctly in VR.</p>

          <h4>Solutions:</h4>
          <ul>
            <li><strong>Reduce Intensity:</strong> VR requires more subtle effects</li>
            <li><strong>Per-Eye Rendering:</strong> Ensure effects render correctly per eye</li>
            <li><strong>Motion Sickness:</strong> Avoid screen-space distortions</li>
            <li><strong>Performance Critical:</strong> VR needs 90+ FPS, reduce effect count</li>
            <li><strong>Forward Rendering:</strong> Some effects need adjustments for forward renderer</li>
          </ul>

          <h3>Getting Help</h3>

          <h4>Before Asking for Support:</h4>
          <ol>
            <li>Check the example maps included with the pack</li>
            <li>Review this troubleshooting guide</li>
            <li>Search the official forums</li>
            <li>Test with a fresh, minimal project</li>
            <li>Check Unreal Engine version compatibility</li>
          </ol>

          <h4>When Reporting Issues:</h4>
          <p>Include:</p>
          <ul>
            <li>Unreal Engine version</li>
            <li>Art of Shader pack version</li>
            <li>Platform (PC, Console, Mobile)</li>
            <li>Steps to reproduce</li>
            <li>Screenshots or video of the issue</li>
            <li>Error messages from output log</li>
            <li>Project settings that might be relevant</li>
          </ul>

          <h4>Support Channels:</h4>
          <ul>
            <li>Marketplace product page Q&A section</li>
            <li>Official Discord server</li>
            <li>Email: support@athiangames.com</li>
            <li>Unreal Engine forums</li>
          </ul>

          <h3>Known Limitations</h3>
          <ul>
            <li>Some effects require shader model 5.0 or higher</li>
            <li>Mobile platforms may need effect-specific optimizations</li>
            <li>Maximum of 128 blendable materials per post-process volume</li>
            <li>Custom depth stencil limited to 256 unique values</li>
            <li>Heavy effects may not hit performance targets on lower-end hardware</li>
          </ul>
        `,
        prev: {
          slug: "runtime-control",
          title: "Runtime Control"
        }
      }
    ]
  },
  "dynamic-mesh-occluder": {
    productSlug: "dynamic-mesh-occluder",
    sections: [
      {
        slug: "overview",
        title: "Overview",
        description: "What Dynamic Mesh Occluder does and why you need it",
        content: `
          <section>
            <h3>What is Dynamic Mesh Occluder?</h3>
            <p><strong>Dynamic Mesh Occluder</strong> is an editor tool that removes body geometry hidden inside clothing — improving rendering performance without any complicated setup at runtime.</p>
            <p>When a character wears clothing, the body underneath is still rendered by the GPU even though the player never sees it. This plugin lets you detect and bake away those hidden triangles in the editor, then automatically swap the body mesh at runtime to the trimmed version — so the GPU never has to render what isn't visible.</p>
          </section>

          <section>
            <h3>Key Features</h3>
            <div class="feature-grid">
              <div class="feature-card">
                <div class="fc-icon">⚡</div>
                <h4>Auto Detect Occlusion</h4>
                <p>Automatically detect and remove triangles from the base skeletal mesh, based on clothing assets.</p>
              </div>
              <div class="feature-card">
                <div class="fc-icon">🎨</div>
                <h4>Manual Paint Override</h4>
                <p>Paint individual triangles as hidden or visible to fine-tune the result with Brush, Select, or Lasso tools.</p>
              </div>
              <div class="feature-card">
                <div class="fc-icon">👗</div>
                <h4>Multiple Outfits</h4>
                <p>Store different clothing combinations in one mapping table — one asset covers your whole character.</p>
              </div>
              <div class="feature-card">
                <div class="fc-icon">🔷</div>
                <h4>Runtime Mesh Swap</h4>
                <p>A lightweight data asset maps clothing to pre-baked meshes — swap the body at runtime with a single Blueprint call.</p>
              </div>
            </div>
          </section>

          <section>
            <h3>How It Works</h3>
            <p>There are two phases — what you do in the editor once, and what happens automatically in your game.</p>
            <div class="workflow">
              <div class="wf-step"><div class="wf-num">1</div><p>Load body &amp; clothing meshes</p></div>
              <div class="wf-arrow">›</div>
              <div class="wf-step"><div class="wf-num">2</div><p>Run occlusion detection</p></div>
              <div class="wf-arrow">›</div>
              <div class="wf-step"><div class="wf-num">3</div><p>Paint-correct if needed</p></div>
              <div class="wf-arrow">›</div>
              <div class="wf-step"><div class="wf-num">4</div><p>Save trimmed mesh &amp; mapping table</p></div>
              <div class="wf-arrow">›</div>
              <div class="wf-step"><div class="wf-num">5</div><p>Runtime: plugin swaps body automatically</p></div>
            </div>
          </section>

          <section>
            <h3>What Gets Saved</h3>
            <table>
              <thead><tr><th>Asset</th><th>Purpose</th></tr></thead>
              <tbody>
                <tr><td><code>SK_OccludedBody</code></td><td>The body skeletal mesh with hidden triangles removed. Used by the runtime component instead of the original.</td></tr>
                <tr><td><code>DA_BodyOcclusionMap</code></td><td>Lookup table that maps a set of clothing meshes to their corresponding occluded body mesh. Used by the runtime component to find the right mesh automatically.</td></tr>
              </tbody>
            </table>
            <div class="callout-tip">
              <strong>💡 One table, many outfits:</strong> Each time you run detection with a different clothing set and save, a new row is appended to the same <code>DA_BodyOcclusionMap</code>. You never need more than one mapping table per character.
            </div>
          </section>
        `,
        next: { slug: "installation", title: "Installation & Quick Start" }
      },
      {
        slug: "installation",
        title: "Installation & Quick Start",
        description: "Enable the plugin and get up and running in 7 steps",
        content: `
          <section>
            <h3>Enabling the Plugin</h3>
            <ol>
              <li><strong>Open Plugins window</strong> — In Unreal Editor go to <strong>Edit → Plugins</strong>, search for <em>Dynamic Mesh Occluder</em> and tick <strong>Enabled</strong>. Restart when prompted.</li>
              <li><strong>Verify</strong> — After restart, right-click any <strong>Skeletal Mesh</strong> in the Content Browser and look for <strong>Character Tools → Create Body Occlusion Mapping Data…</strong>. If the menu item appears, the plugin is active.</li>
            </ol>
          </section>

          <section>
            <h3>Quick Start — 7 Steps</h3>

            <h4>Step 1 — Create a Data Asset</h4>
            <p>The fastest way: in the Content Browser, right-click your <strong>body skeletal mesh</strong> and choose <strong>Character Tools → Create Body Occlusion Mapping Data…</strong>. This creates a <code>DynamicMeshOccluderData</code> asset pre-seeded with your body mesh and opens the tool immediately.</p>
            <p>Alternatively, in the Content Browser right-click → <strong>Miscellaneous → Data Asset → DynamicMeshOccluderData</strong>. Name it something like <code>DMO_CharacterBody</code> and double-click to open.</p>

            <h4>Step 2 — Open the Tool</h4>
            <p>If you used the right-click shortcut, the tool opens automatically. Otherwise, double-click the <code>DynamicMeshOccluderData</code> asset in the Content Browser.</p>

            <h4>Step 3 — Assign Your Meshes</h4>
            <p>In the Settings panel on the left, drag your body skeletal mesh into <strong>Body Skeletal Mesh</strong> and add your clothing skeletal mesh(es) to the <strong>Clothing Meshes</strong> list.</p>
            <div class="callout-tip">
              <strong>💡 Skeleton requirement:</strong> All clothing meshes must share the same skeleton as the body mesh for correct pose matching in the viewport and at runtime.
            </div>

            <h4>Step 4 — Run Detection</h4>
            <p>Click <strong>Detect Occlusion</strong>. The tool scans the body mesh against the clothing and marks hidden triangles. The viewport updates automatically when done.</p>

            <h4>Step 5 — Review &amp; Paint</h4>
            <p>Click <strong>Toggle Preview</strong> to see hidden vs visible areas. If anything looks wrong, use <strong>Paint Mode</strong> to manually fix individual triangles.</p>

            <h4>Step 6 — Save</h4>
            <p>Set an <strong>Output Path</strong> (e.g. <code>/Game/OcclusionMaps</code>), give the assets names, then click <strong>Save Occluded Mesh</strong>. Two assets are created:</p>
            <ul>
              <li><strong>SK_OccludedBody</strong> — the body mesh with hidden triangles removed.</li>
              <li><strong>DA_BodyOcclusionMap</strong> — the lookup table used at runtime.</li>
            </ul>

            <h4>Step 7 — Wire Up Your Character</h4>
            <p>Add the <strong>Dynamic Mesh Occluder</strong> component to your character Blueprint, assign the mapping table, and call the Blueprint nodes when clothing is equipped or removed. See the <a href="/docs/dynamic-mesh-occluder/runtime-setup">Runtime Setup</a> section for details.</p>

            <div class="callout-info">
              <strong>ℹ️ Repeat for each outfit:</strong> For each clothing combination, load the clothing meshes, run detection, and save again. The new entry is appended to the same mapping table automatically.
            </div>
          </section>
        `,
        prev: { slug: "overview", title: "Overview" },
        next: { slug: "editor-tool", title: "Editor Tool Reference" }
      },
      {
        slug: "editor-tool",
        title: "Editor Tool Reference",
        description: "Settings panel, action buttons, preview animation, and viewport controls",
        content: `
          <section>
            <h3>Opening the Tool</h3>
            <div class="feature-grid">
              <div class="feature-card">
                <div class="fc-icon">🖱️</div>
                <h4>Right-click a Skeletal Mesh</h4>
                <p>Content Browser → right-click any skeletal mesh → <strong>Character Tools → Create Body Occlusion Mapping Data…</strong>. Creates a data asset pre-seeded with that mesh and opens the tool.</p>
              </div>
              <div class="feature-card">
                <div class="fc-icon">📂</div>
                <h4>Double-click a Data Asset</h4>
                <p>Double-click any <code>DynamicMeshOccluderData</code> asset in the Content Browser to open it in the standalone editor.</p>
              </div>
            </div>
            <div class="callout-info">
              <strong>ℹ️ Manual creation:</strong> Content Browser → right-click → <strong>Miscellaneous → Data Asset → DynamicMeshOccluderData</strong>, then double-click to open.
            </div>
          </section>

          <section>
            <h3>Settings Panel</h3>
            <p>The left panel holds all configuration for the current session.</p>
            <table>
              <thead><tr><th>Setting</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td><strong>Body Skeletal Mesh</strong></td><td>The body mesh to process. Hidden triangles will be removed from this mesh.</td></tr>
                <tr><td><strong>Target Occlusion Mapping Data</strong></td><td>Read-only. Automatically linked when you open a <code>DynamicMeshOccluderData</code> asset.</td></tr>
                <tr><td><strong>Clothing Meshes</strong></td><td>One or more clothing meshes worn over the body. These define what counts as "covered".</td></tr>
                <tr><td><strong>Preview Animation</strong></td><td>Optional animation sequence to preview on the body and clothing meshes.</td></tr>
                <tr><td><strong>Output Path</strong></td><td>Content Browser folder where the generated assets will be saved.</td></tr>
                <tr><td><strong>Occluded Mesh Asset Name</strong></td><td>Name of the trimmed skeletal mesh asset that will be created.</td></tr>
                <tr><td><strong>Mapping Asset Name</strong></td><td>Name of the runtime lookup table asset that will be created or updated.</td></tr>
                <tr><td><strong>Occlusion Detected</strong> <span class="pill pill-blue">Info</span></td><td>Shows whether detection has been run in this session.</td></tr>
                <tr><td><strong>Hidden / Total Triangles</strong> <span class="pill pill-blue">Info</span></td><td>How many triangles were marked hidden vs the total count.</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h3>Action Buttons</h3>
            <div class="feature-grid">
              <div class="feature-card">
                <div class="fc-icon">🔍</div>
                <h4>Detect Occlusion</h4>
                <p>Runs the full detection pass and updates the viewport. Can also refresh the baseline during Paint Mode without losing paint strokes.</p>
              </div>
              <div class="feature-card">
                <div class="fc-icon">🧹</div>
                <h4>Clear Detection</h4>
                <p>Resets the detection baseline to fully visible. Manually painted strokes are preserved.</p>
              </div>
              <div class="feature-card">
                <div class="fc-icon">👁️</div>
                <h4>Toggle Preview</h4>
                <p>Hides clothing meshes in the viewport to inspect the body with occluded regions highlighted.</p>
              </div>
              <div class="feature-card">
                <div class="fc-icon">💾</div>
                <h4>Save Occluded Mesh</h4>
                <p>Saves the trimmed mesh, updates the runtime mapping table, and saves the editor data asset.</p>
              </div>
            </div>
          </section>

          <section>
            <h3>Preview Animation</h3>
            <p>Assign an animation sequence in the <strong>Preview Animation</strong> category to see how meshes move together in different poses. This verifies the occlusion boundary looks correct throughout the character's motion range.</p>
            <table>
              <thead><tr><th>Control</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td><strong>Animation Sequence</strong></td><td>Drag an <code>AnimSequence</code> into this slot. The body and all clothing meshes will play the same animation.</td></tr>
                <tr><td><strong>Play / Pause</strong></td><td>Start or stop animation playback in the viewport.</td></tr>
                <tr><td><strong>Timeline Scrub</strong></td><td>Drag the slider to scrub to a specific frame for checking specific poses.</td></tr>
              </tbody>
            </table>
            <div class="callout-tip">
              <strong>💡 Check problem poses:</strong> Scrub to extreme poses (arms raised, legs spread) to verify the hidden boundary doesn't reveal gaps. Use Paint Mode to fix any issues found.
            </div>
          </section>

          <section>
            <h3>Viewport Controls</h3>
            <p>The 3D viewport shows your body and clothing meshes together. Clothing automatically matches the body's skeletal pose.</p>
            <table>
              <thead><tr><th>Input</th><th>Action</th></tr></thead>
              <tbody>
                <tr><td><kbd>LMB</kbd> drag</td><td>Orbit / rotate the camera (when not in paint mode)</td></tr>
                <tr><td><kbd>RMB</kbd> drag</td><td>Pan the camera</td></tr>
                <tr><td>Scroll wheel</td><td>Zoom in / out</td></tr>
              </tbody>
            </table>
          </section>
        `,
        prev: { slug: "installation", title: "Installation & Quick Start" },
        next: { slug: "detection-settings", title: "Detection Settings" }
      },
      {
        slug: "detection-settings",
        title: "Detection Settings",
        description: "All occlusion detection parameters explained",
        content: `
          <section>
            <h3>Occlusion Settings</h3>
            <p>Found under <strong>Occlusion Settings</strong> in the Settings panel. These control how the tool detects hidden geometry. The defaults work well for most characters — only adjust if you get unexpected results.</p>

            <div class="callout-tip">
              <strong>💡 Start with defaults:</strong> The defaults handle most body + clothing combinations well. Only tweak settings if the result looks wrong after running detection.
            </div>
          </section>

          <section>
            <h3>Core Ray Settings</h3>
            <table>
              <thead><tr><th>Setting</th><th>Default</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td><strong>Ray Count</strong></td><td>128</td><td>Test directions checked per triangle. Higher = more accurate but slower. Raise to 256–512 for complex clothing.</td></tr>
                <tr><td><strong>Occlusion Threshold</strong></td><td>0.75</td><td>How much of the triangle must be covered to be hidden. 0.75 = 75% covered. Lower hides more, higher hides less.</td></tr>
                <tr><td><strong>Ray Offset</strong></td><td>0.5</td><td>Push away from the surface so rays don't self-intersect. Leave at default unless you get strange results.</td></tr>
                <tr><td><strong>Max Ray Distance</strong></td><td>100</td><td>How far each test ray travels (cm). Increase for very thick clothing.</td></tr>
                <tr><td><strong>Cone Half Angle</strong></td><td>45°</td><td>Angle of the test cone around each triangle's normal. 30–45° for tight clothing, 60–75° for loose garments.</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h3>Boundary &amp; Post-Processing</h3>
            <table>
              <thead><tr><th>Setting</th><th>Default</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td><strong>Dilation Rings</strong></td><td>0</td><td>Expands the hidden region outward by this many triangle rows. Non-zero values hide extra triangles at cloth edges.</td></tr>
                <tr><td><strong>Max Hidden Island Size</strong></td><td>8</td><td>Removes isolated hidden patches smaller than this — prevents stray hidden spots on exposed skin.</td></tr>
                <tr><td><strong>Max Visible Island Size</strong></td><td>8</td><td>Fills small visible "holes" inside hidden regions. Increase if you see floating visible patches under clothing.</td></tr>
                <tr><td><strong>Smoothing Iterations</strong></td><td>1</td><td>Blends the hidden/visible boundary for cleaner edges. Increase for smoother boundaries (0 = disabled).</td></tr>
                <tr><td><strong>Hidden Neighbor Ratio</strong></td><td>0.85</td><td>Threshold used during smoothing. Higher preserves more visible area near edges; lower smooths more aggressively.</td></tr>
                <tr><td><strong>Edge Erosion Rings</strong></td><td>1</td><td>Erodes the hidden boundary inward. Removes edge spikes and excludes clothing edges from occlusion.</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h3>Advanced Settings</h3>
            <table>
              <thead><tr><th>Setting</th><th>Default</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td><strong>Clothing Proximity Threshold</strong></td><td>8</td><td>Body triangles farther than this (cm) from any clothing are always kept visible.</td></tr>
                <tr><td><strong>Vertex Occlusion Min Count</strong></td><td>2</td><td>How many of a triangle's 3 corners must be hidden before the whole triangle is hidden.</td></tr>
                <tr><td><strong>Direct Normal Threshold</strong></td><td>0.40</td><td>Relaxed threshold when the direct normal ray confirmed clothing overhead. Catches interior vertices near hems/necklines.</td></tr>
                <tr><td><strong>Min Informative Ray Fraction</strong></td><td>0.15</td><td>Minimum ray fraction surviving self-occlusion filter before the relaxed threshold applies. Prevents false occlusion near — but not under — clothing.</td></tr>
                <tr><td><strong>Use Bidirectional Containment</strong></td><td><span class="pill pill-green">On</span></td><td>Also checks inward rays to catch body geometry sandwiched between two clothing layers.</td></tr>
                <tr><td><strong>Close Enclosed Regions</strong></td><td><span class="pill pill-green">On</span></td><td>Flood-fill that hides any remaining visible area fully surrounded by hidden geometry. Catches patches island removal may miss.</td></tr>
              </tbody>
            </table>
          </section>
        `,
        prev: { slug: "editor-tool", title: "Editor Tool Reference" },
        next: { slug: "paint-mode", title: "Paint Mode" }
      },
      {
        slug: "paint-mode",
        title: "Paint Mode",
        description: "Manually correct individual triangles after automatic detection",
        content: `
          <section>
            <h3>When to Use Paint Mode</h3>
            <p>If the automatic detection marks something incorrectly — for example hiding fingers near a cuff opening or leaving a small visible patch inside a jacket — you can fix it manually with Paint Mode.</p>
            <p>Click <strong>Paint Occlusion</strong> to enter Paint Mode (button turns blue). Click again to exit. Your paint strokes are always preserved alongside automatic detection results.</p>
          </section>

          <section>
            <h3>Paint Tool Modes</h3>
            <p>A dropdown next to the Paint button lets you choose the input method:</p>
            <div class="feature-grid">
              <div class="feature-card">
                <div class="fc-icon">🖌️</div>
                <h4>Brush</h4>
                <p>Classic sphere brush — <kbd>LMB</kbd> drag to hide, <kbd>Shift</kbd>+<kbd>LMB</kbd> to restore. Adjust radius with the <strong>Radius</strong> spinbox.</p>
              </div>
              <div class="feature-card">
                <div class="fc-icon">⬜</div>
                <h4>Select</h4>
                <p>Drag a rectangle on screen. All triangles whose centroids fall inside are painted. <kbd>Shift</kbd>+drag to restore.</p>
              </div>
              <div class="feature-card">
                <div class="fc-icon">✏️</div>
                <h4>Lasso</h4>
                <p>Draw a freehand polygon on screen. Triangles inside are painted. <kbd>Shift</kbd>+drag to restore.</p>
              </div>
              <div class="feature-card">
                <div class="fc-icon">🔄</div>
                <h4>Hit BackFace</h4>
                <p>Checkbox in Brush mode. Paints opposite-facing triangles in the same region — essential for MetaHuman inner-skin faces.</p>
              </div>
            </div>
          </section>

          <section>
            <h3>Keyboard Shortcuts</h3>
            <table>
              <thead><tr><th>Action</th><th>Control</th></tr></thead>
              <tbody>
                <tr><td>Mark triangles as hidden</td><td><kbd>LMB</kbd> drag (Brush) or <kbd>LMB</kbd> drag a region (Select / Lasso)</td></tr>
                <tr><td>Mark triangles as visible</td><td><kbd>Shift</kbd> + <kbd>LMB</kbd> drag</td></tr>
                <tr><td>Undo</td><td><kbd>Ctrl</kbd> + <kbd>Z</kbd></td></tr>
                <tr><td>Redo</td><td><kbd>Ctrl</kbd> + <kbd>Y</kbd></td></tr>
                <tr><td>Flip all values</td><td>Invert button in the toolbar</td></tr>
                <tr><td>Remove all paint</td><td>Clear button in the toolbar</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h3>Understanding the Preview</h3>
            <div class="callout-info">
              <strong>ℹ️ Colour guide:</strong> <strong>White</strong> = triangle will be hidden in the saved mesh. <strong>Black</strong> = triangle will be kept visible. The preview shows the <em>combined</em> result of auto-detection + paint mask. Paint overrides always take priority: force-hidden (mask = 1) or force-visible (mask = 2) overrule whatever the detection decided.
            </div>
          </section>
        `,
        prev: { slug: "detection-settings", title: "Detection Settings" },
        next: { slug: "runtime-setup", title: "Runtime Setup" }
      },
      {
        slug: "runtime-setup",
        title: "Runtime Setup",
        description: "Adding the component to your character and calling Blueprint nodes",
        content: `
          <section>
            <h3>Adding the Component</h3>
            <p>Once you've saved your occluded mesh and mapping table, a few Blueprint steps are all that's needed.</p>
            <ol>
              <li><strong>Add the component</strong> — Open your character Blueprint, click <strong>+ Add</strong> and search for <strong>Dynamic Mesh Occluder</strong>.</li>
              <li><strong>Assign the Mapping Table</strong> — In the Details panel set <strong>Mapping Table</strong> to your <code>DA_BodyOcclusionMap</code> asset.</li>
              <li><strong>Call Blueprint nodes</strong> — When clothing is equipped or removed, call the appropriate node (see table below).</li>
            </ol>
            <div class="callout-tip">
              <strong>💡 Body Component Name:</strong> If your character has more than one Skeletal Mesh Component, type the body component's name into <strong>Body Component Name</strong>. Leave blank to auto-detect the first <code>USkeletalMeshComponent</code>. You can also call <strong>Set Body Component</strong> at runtime.
            </div>
          </section>

          <section>
            <h3>Blueprint Nodes</h3>

            <h4>Primary Actions</h4>
            <table>
              <thead><tr><th>Node</th><th>When to call</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td><strong>Apply Occlusion For Clothing Components</strong></td><td>Player equips clothing</td><td>Pass in active clothing mesh components. Finds the matching occluded body and swaps it in. Returns true on match.</td></tr>
                <tr><td><strong>Apply Occlusion For Clothing</strong></td><td>Player equips clothing (mesh assets)</td><td>Same as above but accepts Skeletal Mesh assets directly.</td></tr>
                <tr><td><strong>Restore Original Body Mesh</strong></td><td>All clothing removed</td><td>Swaps the body back to the original full mesh.</td></tr>
                <tr><td><strong>Apply Occlusion By Mapping Index</strong></td><td>Managing clothing by index/slot</td><td>Applies the occluded mesh at a specific index without passing clothing meshes.</td></tr>
              </tbody>
            </table>

            <h4>Component Management</h4>
            <table>
              <thead><tr><th>Node</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td><strong>Set Body Component</strong></td><td>Explicitly assigns which skeletal mesh component to manage. Also refreshes the cached original mesh.</td></tr>
                <tr><td><strong>Get Body Component</strong> <span class="pill pill-blue">Pure</span></td><td>Returns the skeletal mesh component currently being managed.</td></tr>
                <tr><td><strong>Get Original Body Mesh</strong> <span class="pill pill-blue">Pure</span></td><td>Returns the original (un-occluded) body mesh recorded at BeginPlay.</td></tr>
              </tbody>
            </table>

            <h4>Query &amp; Inspection</h4>
            <table>
              <thead><tr><th>Node</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td><strong>Find Occluded Mesh For Clothing</strong> <span class="pill pill-blue">Pure</span></td><td>Returns which occluded mesh would be used — without actually swapping. For previewing or validation.</td></tr>
                <tr><td><strong>Find Occluded Mesh For Clothing Components</strong> <span class="pill pill-blue">Pure</span></td><td>Same as above but accepts Skeletal Mesh Components.</td></tr>
                <tr><td><strong>Get Mesh Mapping Count</strong> <span class="pill pill-blue">Pure</span></td><td>Returns how many clothing combinations are stored in the mapping table.</td></tr>
                <tr><td><strong>Get Clothing Meshes At Mapping Index</strong></td><td>Returns the clothing meshes at a given mapping index. Returns false if out of range.</td></tr>
                <tr><td><strong>Get Occluded Mesh At Mapping Index</strong> <span class="pill pill-blue">Pure</span></td><td>Returns the occluded body mesh at a specific index without applying it.</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h3>Multiple Outfits</h3>
            <p>You can store as many clothing combinations as you need in a single <code>DA_BodyOcclusionMap</code> asset. Each time you run detection with a different set of clothing and save, a new entry is added — no separate assets needed.</p>
            <div class="callout-tip">
              <strong>💡 One entry per combination, not per piece:</strong> If you have <em>shirt + pants</em> and <em>shirt only</em>, generate and save each as a separate detection run. The plugin picks the right one automatically at runtime based on what the character is wearing.
            </div>
          </section>
        `,
        prev: { slug: "paint-mode", title: "Paint Mode" },
        next: { slug: "tips", title: "Tips & Best Practices" }
      },
      {
        slug: "tips",
        title: "Tips & Best Practices",
        description: "Recommendations for getting the best results",
        content: `
          <section>
            <h3>Getting Better Results</h3>
            <div class="feature-grid">
              <div class="feature-card">
                <div class="fc-icon">🎯</div>
                <h4>Start with Defaults</h4>
                <p>The defaults handle most body + clothing combinations well. Only adjust if the result looks wrong.</p>
              </div>
              <div class="feature-card">
                <div class="fc-icon">📡</div>
                <h4>More Rays for Complex Clothing</h4>
                <p>Try bumping Ray Count to <strong>256</strong> or <strong>512</strong> if you see missed hidden patches or stray spots.</p>
              </div>
              <div class="feature-card">
                <div class="fc-icon">🏝️</div>
                <h4>Fix Floating Patches</h4>
                <p>Increase <strong>Max Visible Island Size</strong> and ensure <strong>Close Enclosed Regions</strong> is on.</p>
              </div>
              <div class="feature-card">
                <div class="fc-icon">✂️</div>
                <h4>Smooth Jagged Edges</h4>
                <p>Raise <strong>Smoothing Iterations</strong> to 3–5 and <strong>Edge Erosion Rings</strong> to 1–2.</p>
              </div>
            </div>
          </section>

          <section>
            <h3>Pro Tips</h3>

            <div class="callout-tip">
              <strong>💡 Fingers or neckline incorrectly hidden?</strong><br/>
              Use Paint Mode to manually restore those triangles. With <strong>Select</strong> or <strong>Lasso</strong> you can fix large areas in seconds.
            </div>

            <div class="callout-tip">
              <strong>💡 MetaHuman bodies: use Hit BackFace</strong><br/>
              MetaHuman body meshes have inner-skin faces facing the opposite direction. Enable <strong>Hit BackFace</strong> in Brush mode to paint both sides simultaneously.
            </div>

            <div class="callout-tip">
              <strong>💡 Paint-only mode</strong><br/>
              You can use Paint Mode without any clothing meshes. Assign a body mesh, paint the triangles you want hidden, and save. The runtime mapping table is only created when clothing meshes are assigned.
            </div>

            <div class="callout-tip">
              <strong>💡 Preview animations</strong><br/>
              Assign an animation in the <strong>Preview Animation</strong> settings. Scrub through key poses to verify the hidden boundary doesn't reveal gaps during motion.
            </div>

            <div class="callout-tip">
              <strong>💡 Same skeleton required</strong><br/>
              All clothing meshes must share the same skeleton as the body. This is required for correct pose matching in the viewport and at runtime.
            </div>

            <div class="callout-warning">
              <strong>⚠️ Re-run detection after re-importing meshes</strong><br/>
              If you update a clothing mesh in your DCC tool and re-import it, always re-run Detect Occlusion before saving again.
            </div>
          </section>
        `,
        prev: { slug: "runtime-setup", title: "Runtime Setup" },
        next: { slug: "troubleshooting", title: "Troubleshooting" }
      },
      {
        slug: "troubleshooting",
        title: "Troubleshooting",
        description: "Solutions to common problems",
        content: `
          <section>
            <h3>Common Issues</h3>
            <table>
              <thead><tr><th>Problem</th><th>Likely Cause</th><th>Solution</th></tr></thead>
              <tbody>
                <tr>
                  <td><strong>Detect Occlusion button is greyed out</strong></td>
                  <td>Body/clothing meshes not assigned, or Paint Mode active</td>
                  <td>Ensure Body Skeletal Mesh and at least one Clothing Mesh are set. Exit Paint Mode if active.</td>
                </tr>
                <tr>
                  <td><strong>Nothing is hidden after detection</strong></td>
                  <td>Meshes don't overlap, or Proximity Threshold too low</td>
                  <td>Check that both meshes share the same origin and skeleton. Increase Clothing Proximity Threshold.</td>
                </tr>
                <tr>
                  <td><strong>Too much is hidden — skin shows through clothing</strong></td>
                  <td>Threshold too low or cone angle too wide</td>
                  <td>Raise <strong>Occlusion Threshold</strong> (e.g. 0.85), lower <strong>Cone Half Angle</strong>, or increase <strong>Edge Erosion Rings</strong>.</td>
                </tr>
                <tr>
                  <td><strong>Floating visible patches inside clothing</strong></td>
                  <td>Island removal not catching all patches</td>
                  <td>Increase <strong>Max Visible Island Size</strong> and enable <strong>Close Enclosed Regions</strong>.</td>
                </tr>
                <tr>
                  <td><strong>Noisy or jagged boundary</strong></td>
                  <td>Not enough post-processing</td>
                  <td>Increase <strong>Smoothing Iterations</strong> (2–5), <strong>Dilation Rings</strong> (1–2), and <strong>Edge Erosion Rings</strong> (1–2).</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h3>Runtime &amp; Blueprint Issues</h3>
            <table>
              <thead><tr><th>Problem</th><th>Likely Cause</th><th>Solution</th></tr></thead>
              <tbody>
                <tr>
                  <td><strong>Clothing doesn't match body pose</strong></td>
                  <td>Different skeleton</td>
                  <td>All clothing meshes must use the same skeleton as the body mesh.</td>
                </tr>
                <tr>
                  <td><strong>Blueprint node returns false / no swap</strong></td>
                  <td>Mismatched clothing meshes</td>
                  <td>Use the same mesh assets in your Blueprint logic as you used during detection. Matching is order-independent.</td>
                </tr>
                <tr>
                  <td><strong>Save button greyed out</strong></td>
                  <td>Output Path empty, no detection/paint data, or Paint Mode active</td>
                  <td>Fill in Output Path. Run detection or paint some triangles. Exit Paint Mode before saving.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h3>Editor Issues</h3>
            <table>
              <thead><tr><th>Problem</th><th>Solution</th></tr></thead>
              <tbody>
                <tr>
                  <td><strong>Paint strokes lost after closing</strong></td>
                  <td>Open the <code>_Data</code> asset (e.g. <code>DA_BodyOcclusionMap_Data</code>) to reopen the tool with your saved session including paint strokes.</td>
                </tr>
                <tr>
                  <td><strong>Animation preview won't play</strong></td>
                  <td>Assign an <code>AnimSequence</code> in the Preview Animation settings. It must use the same skeleton as the body mesh.</td>
                </tr>
                <tr>
                  <td><strong>Want to hide geometry without clothing</strong></td>
                  <td>Assign a body mesh only, enter Paint Occlusion, paint the triangles you want hidden, then Save. Clothing meshes are optional.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h3>Need More Help?</h3>
            <p>If your issue isn't covered above, raise a support ticket and our team will investigate.</p>
            <p><a href="/support">→ Open the Support Center</a> to submit a new ticket or track existing ones.</p>
            <div class="callout-tip">
              <strong>💡 Faster resolution:</strong> Include steps to reproduce and any relevant screenshots or error messages when submitting your ticket.
            </div>
          </section>
        `,
        prev: { slug: "tips", title: "Tips & Best Practices" }
      }
    ]
  }
};

// Helper function to get documentation by product slug
export function getDocumentation(productSlug: string): ProductDocumentation | null {
  // All Art of Shader products redirect to unified docs
  const aosProducts = [
    "art-of-shader-distortion-and-glitches",
    "art-of-shader-advanced-distortion",
    "art-of-shader-film-and-special-effects",
    "art-of-shader-stylized-post-process",
    "aos-toons",
    "art-of-shader-megapack"
  ];

  if (aosProducts.includes(productSlug)) {
    return documentationData["art-of-shader"];
  }

  return documentationData[productSlug] || null;
}

// Helper function to get all documentation
export function getAllDocumentation(): ProductDocumentation[] {
  return Object.values(documentationData);
}
