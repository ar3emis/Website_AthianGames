import type { ProductDocumentation } from "../types";

const proceduralVortexTunnelDocs: ProductDocumentation = {
  productSlug: "procedural-vortex-tunnel",
  sections: [
    {
      slug: "overview",
      title: "Overview",
      description: "Spline-based procedural vortex tunnels with displacement materials and Niagara FX",
      content: `
        <section>
          <h3>What is Procedural Vortex Tunnel?</h3>
          <p>A plugin that lets you create highly customizable, material-driven vortex tunnels along spline paths in Unreal Engine — complete with procedural noise displacement, particle FX, static mesh scattering, pawn movement, and gravity pull.</p>
        </section>
        <section>
          <h3>Key Features</h3>
          <div class="feature-grid">
            <div class="feature-card"><div class="fc-icon">🌀</div><h4>Spline-Based Generation</h4><p>Define any tunnel path using Unreal's spline component. Add, move, and curve points freely.</p></div>
            <div class="feature-card"><div class="fc-icon">🎨</div><h4>Displacement Materials</h4><p>Procedural noise shaders drive dynamic surface displacement with material blending zones along the path.</p></div>
            <div class="feature-card"><div class="fc-icon">✨</div><h4>Niagara FX</h4><p>Particle systems spawn and orient along the vortex spline — synchronised with rotation and movement.</p></div>
            <div class="feature-card"><div class="fc-icon">🪨</div><h4>Mesh Scattering</h4><p>Procedurally scatter static meshes along the tunnel with spacing, rotation, and scale variation.</p></div>
            <div class="feature-card"><div class="fc-icon">🕹️</div><h4>Pawn Movement</h4><p>Built-in movement component for smooth spline-following with speed, acceleration, and camera controls.</p></div>
            <div class="feature-card"><div class="fc-icon">🌐</div><h4>Gravity Pull</h4><p>Attract actors toward any point on the spline — objects, enemies, collectibles, or particles.</p></div>
          </div>
        </section>
        <section>
          <h3>System Requirements</h3>
          <ul>
            <li>Unreal Engine or 5.0+</li>
            <li>Understanding of spline components</li>
            <li>Basic material knowledge</li>
            <li>Niagara system familiarity (optional — pre-built systems included)</li>
          </ul>
        </section>
      `,
      next: { slug: "getting-started", title: "Getting Started" },
    },
    {
      slug: "getting-started",
      title: "Getting Started",
      description: "Install the plugin and build your first vortex tunnel",
      content: `
        <section>
          <h3>Installation</h3>
          <ol>
            <li>Install from the Epic Games Launcher Library</li>
            <li>Enable the plugin — <strong>Edit → Plugins → Procedural Vortex Tunnel → Enabled</strong></li>
            <li>Restart Unreal Engine</li>
            <li>Browse the plugin content folder for example maps and pre-built setups</li>
          </ol>
        </section>
        <section>
          <h3>Creating Your First Vortex</h3>
          <ol>
            <li>Place a <strong>VortexTunnel</strong> actor in your level</li>
            <li>Select it and view the spline component in the viewport</li>
            <li>Add or move spline points to define your tunnel path</li>
            <li>Set a <strong>Vortex Mesh</strong> and assign a displacement <strong>Material Instance</strong></li>
            <li>Adjust <strong>Mesh Spacing</strong> and <strong>Rotation Offset</strong></li>
            <li>The tunnel generates and updates in real-time as you edit the spline</li>
          </ol>
          <div class="callout-tip">
            <strong>💡 Start with the examples:</strong> The plugin ships with pre-built example levels. Open one to see a fully configured tunnel before creating your own.
          </div>
        </section>
        <section>
          <h3>Basic Configuration</h3>
          <table>
            <thead><tr><th>Property</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Vortex Mesh</strong></td><td>Select from the included meshes or supply a custom one</td></tr>
              <tr><td><strong>Material Instance</strong></td><td>The displacement material applied to each mesh segment</td></tr>
              <tr><td><strong>Mesh Spacing</strong></td><td>Distance between vortex mesh segments along the spline</td></tr>
              <tr><td><strong>Rotation Offset</strong></td><td>Twist amount added per segment to create the spiral effect</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "overview", title: "Overview" },
      next: { slug: "vortex-materials", title: "Vortex Materials" },
    },
    {
      slug: "vortex-materials",
      title: "Vortex Materials",
      description: "Displacement material parameters and blending zones",
      content: `
        <section>
          <h3>Displacement Materials</h3>
          <p>The vortex materials use procedural noise shaders to deform mesh vertices in real-time, creating the swirling, organic surface of the tunnel. All parameters are exposed on material instances for easy tweaking.</p>
        </section>
        <section>
          <h3>Material Parameters</h3>
          <table>
            <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Noise Scale</strong></td><td>Size of the displacement pattern</td></tr>
              <tr><td><strong>Displacement Amount</strong></td><td>How far vertices are pushed outward</td></tr>
              <tr><td><strong>Animation Speed</strong></td><td>How fast the noise animates</td></tr>
              <tr><td><strong>Color Scheme</strong></td><td>Base colours and gradients applied to the surface</td></tr>
              <tr><td><strong>Emissive Intensity</strong></td><td>Glow strength for the tunnel walls</td></tr>
              <tr><td><strong>Noise Type</strong></td><td>Switch between different procedural noise algorithms</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Material Blending Along the Path</h3>
          <p>You can blend different material instances across zones of the spline:</p>
          <ol>
            <li>Define blend zones in the Vortex Data asset</li>
            <li>Assign a different material instance to each zone</li>
            <li>Set the blend transition distance</li>
            <li>Materials interpolate smoothly between zones</li>
          </ol>
          <div class="callout-tip">
            <strong>💡 Creating custom materials:</strong> Duplicate a provided material instance, adjust its displacement and colour parameters, and assign it to your VortexTunnel actor.
          </div>
        </section>
      `,
      prev: { slug: "getting-started", title: "Getting Started" },
      next: { slug: "niagara-fx", title: "Niagara FX" },
    },
    {
      slug: "niagara-fx",
      title: "Niagara FX",
      description: "Particle systems along the vortex path",
      content: `
        <section>
          <h3>VortexFX Actor</h3>
          <p>The <strong>VortexFX Actor</strong> spawns Niagara particle systems distributed along the vortex spline. Particles are automatically oriented to face the tunnel direction and synchronised with the vortex rotation.</p>
        </section>
        <section>
          <h3>Setup</h3>
          <ol>
            <li>Place a <strong>VortexFX</strong> actor in your level</li>
            <li>Reference the VortexTunnel actor's spline component</li>
            <li>Select your Niagara system in the details panel</li>
            <li>Adjust <strong>Spacing</strong> and <strong>Rotation</strong> parameters</li>
          </ol>
        </section>
        <section>
          <h3>Included Module Scripts</h3>
          <ul>
            <li>Calculate spawn points along the spline</li>
            <li>Orient particles to face the vortex direction</li>
            <li>Synchronise with vortex rotation</li>
            <li>Handle velocity along the tunnel axis</li>
          </ul>
        </section>
        <section>
          <h3>Runtime FX with Pawn Movement</h3>
          <p>Attach the Pawn Movement Component to your pawn Blueprint. Configure the FX spawn rate and lifetime — particles will trail behind the pawn as it travels through the tunnel.</p>
        </section>
      `,
      prev: { slug: "vortex-materials", title: "Vortex Materials" },
      next: { slug: "mesh-scattering", title: "Mesh Scattering" },
    },
    {
      slug: "mesh-scattering",
      title: "Mesh Scattering",
      description: "Procedurally scatter static meshes along the tunnel",
      content: `
        <section>
          <h3>VortexRepeater Actor</h3>
          <p>The <strong>VortexRepeater</strong> scatters static meshes procedurally along the vortex. Instances are spread, rotated, and scaled based on your configuration — all instanced for optimal rendering performance.</p>
        </section>
        <section>
          <h3>Configuration</h3>
          <table>
            <thead><tr><th>Property</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Mesh Array</strong></td><td>List of meshes to scatter (picked randomly or in sequence)</td></tr>
              <tr><td><strong>Spacing</strong></td><td>Distance between instances along the spline</td></tr>
              <tr><td><strong>Random Offset</strong></td><td>Positional variation to break up regularity</td></tr>
              <tr><td><strong>Rotation</strong></td><td>How each instance is oriented relative to the tunnel</td></tr>
              <tr><td><strong>Scale Variation</strong></td><td>Random size range applied to each instance</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Use Cases</h3>
          <ul>
            <li>Debris floating in the vortex</li>
            <li>Crystal formations along tunnel walls</li>
            <li>Architectural elements and structural details</li>
            <li>Collectible pickups distributed along the path</li>
          </ul>
        </section>
      `,
      prev: { slug: "niagara-fx", title: "Niagara FX" },
      next: { slug: "pawn-movement", title: "Pawn Movement" },
    },
    {
      slug: "pawn-movement",
      title: "Pawn Movement",
      description: "Smooth spline-following movement for your character",
      content: `
        <section>
          <h3>Pawn Movement Component</h3>
          <p>The <strong>PawnMovementComponent</strong> blueprint provides smooth movement along the vortex spline with configurable speed, acceleration, and camera controls.</p>
        </section>
        <section>
          <h3>Setup</h3>
          <ol>
            <li>Add the component to your pawn Blueprint</li>
            <li>Reference the VortexTunnel actor</li>
            <li>Configure movement parameters in the Details panel</li>
            <li>Bind input actions (forward, strafe, boost)</li>
          </ol>
        </section>
        <section>
          <h3>Movement Parameters</h3>
          <table>
            <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Movement Speed</strong></td><td>Base travel speed along the spline</td></tr>
              <tr><td><strong>Acceleration</strong></td><td>Rate of speed change</td></tr>
              <tr><td><strong>Max Speed</strong></td><td>Speed cap</td></tr>
              <tr><td><strong>Rotation Speed</strong></td><td>How fast the pawn rotates to follow the tunnel</td></tr>
              <tr><td><strong>Follow Spline</strong></td><td>Toggle strict path following vs. free-movement mode</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Camera Tips</h3>
          <ul>
            <li>Use a spring arm with rotation lag for a cinematic feel</li>
            <li>Adjust FOV dynamically based on speed for a sense of velocity</li>
            <li>Add a camera shake to reinforce intensity in tight curves</li>
          </ul>
        </section>
      `,
      prev: { slug: "mesh-scattering", title: "Mesh Scattering" },
      next: { slug: "gravity-pull", title: "Gravity Pull" },
    },
    {
      slug: "gravity-pull",
      title: "Gravity Pull",
      description: "Attract actors toward the vortex",
      content: `
        <section>
          <h3>GravityPull System</h3>
          <p>The <strong>GravityPull</strong> blueprint applies a configurable attraction force to actors within range, pulling them toward a target point on the vortex spline. Great for creating dynamic environments that react to the player's presence.</p>
        </section>
        <section>
          <h3>Configuration</h3>
          <table>
            <thead><tr><th>Property</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Pull Strength</strong></td><td>Force applied to affected actors per tick</td></tr>
              <tr><td><strong>Pull Radius</strong></td><td>Distance at which attraction begins</td></tr>
              <tr><td><strong>Target Point</strong></td><td>World location actors are drawn toward</td></tr>
              <tr><td><strong>Affected Actors</strong></td><td>Actor class filter for which objects respond</td></tr>
              <tr><td><strong>Falloff Curve</strong></td><td>How pull strength decreases with distance</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Combining with Pawn Movement</h3>
          <p>Attach the target point to the pawn so it moves along the spline. Objects near the pawn's path will appear to be sucked into the vortex as the player advances, creating a dynamic, reactive tunnel environment.</p>
        </section>
        <section>
          <h3>Use Cases</h3>
          <ul>
            <li>Environmental objects swept into the vortex</li>
            <li>Enemy AI drawn toward the player path</li>
            <li>Collectibles attracted as the player approaches</li>
            <li>Particle systems following vortex flow</li>
          </ul>
        </section>
      `,
      prev: { slug: "pawn-movement", title: "Pawn Movement" },
    },
  ],
};

export default proceduralVortexTunnelDocs;

