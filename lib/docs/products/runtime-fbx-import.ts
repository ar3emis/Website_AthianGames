import type { ProductDocumentation } from "../types";

const runtimeFbxImportDocs: ProductDocumentation = {
  productSlug: "runtime-fbx-import",
  sections: [
    {
      slug: "overview",
      title: "Overview",
      description: "Asynchronously import FBX files with textures and materials at runtime",
      content: `
        <section>
          <h3>What is Runtime FBX Import?</h3>
          <p>A plugin that lets you load <strong>FBX files directly at runtime</strong> — asynchronously, without blocking gameplay. Textures are auto-discovered, materials are generated, custom collisions are applied, and the imported actor can be saved to disk for instant reload on the next session.</p>
        </section>
        <section>
          <h3>Key Features</h3>
          <div class="feature-grid">
            <div class="feature-card"><div class="fc-icon">⚡</div><h4>Async Import</h4><p>FBX parsing runs off the game thread — show a loading screen and keep gameplay running.</p></div>
            <div class="feature-card"><div class="fc-icon">🖼️</div><h4>Auto Texture Import</h4><p>Automatically finds and imports Diffuse, Normal, Specular, and Opacity maps from the FBX directory.</p></div>
            <div class="feature-card"><div class="fc-icon">🔷</div><h4>Custom Collision</h4><p>UCX_-prefixed collision meshes in the FBX are detected and applied automatically.</p></div>
            <div class="feature-card"><div class="fc-icon">🎨</div><h4>Changeable Materials</h4><p>Dynamic material instances let you modify colours, roughness, metallic, and emission at runtime.</p></div>
            <div class="feature-card"><div class="fc-icon">💾</div><h4>Save &amp; Load</h4><p>Serialise imported mesh data to disk — reloading is instant, no re-import required.</p></div>
            <div class="feature-card"><div class="fc-icon">🗂️</div><h4>Node-Based Scenes</h4><p>Hierarchical node organisation mirrors the FBX scene structure for complex multi-mesh imports.</p></div>
          </div>
        </section>
        <section>
          <h3>Typical Use Cases</h3>
          <ul>
            <li><strong>User-Generated Content</strong> — Let players import their own 3D models</li>
            <li><strong>In-game Level Editors</strong> — Import and place props at runtime</li>
            <li><strong>Configurators</strong> — Swap product models dynamically</li>
            <li><strong>Mod Support</strong> — Load community-created 3D content</li>
          </ul>
        </section>
        <section>
          <h3>System Requirements</h3>
          <ul>
            <li>Unreal Engine 4.27 or 5.0+</li>
            <li>Basic knowledge of Procedural Mesh components</li>
            <li>FBX files in the standard Unreal-compatible format</li>
          </ul>
        </section>
      `,
      next: { slug: "getting-started", title: "Getting Started" },
    },
    {
      slug: "getting-started",
      title: "Getting Started",
      description: "Install the plugin and run your first import",
      content: `
        <section>
          <h3>Installation</h3>
          <ol>
            <li>Purchase from the Unreal Engine Marketplace</li>
            <li>Install through the Epic Games Launcher Library</li>
            <li>Enable the plugin — <strong>Edit → Plugins → Runtime FBX Import → Enabled</strong></li>
            <li>Restart the editor</li>
          </ol>
        </section>
        <section>
          <h3>Your First Import</h3>
          <ol>
            <li>Create a Blueprint actor</li>
            <li>Call the <strong>Import FBX File</strong> function node</li>
            <li>Set the <strong>File Path</strong> to your FBX on disk</li>
            <li>Bind the <strong>On Import Success</strong> event — the FBX Actor reference is passed here</li>
            <li>Trigger the Blueprint (e.g. from a button press or UI)</li>
            <li>The actor spawns in your level when the async import completes</li>
          </ol>
          <div class="callout-tip">
            <strong>💡 Check the examples:</strong> The plugin ships with sample FBX files and demo blueprints in the <code>Examples</code> folder — a great starting point.
          </div>
        </section>
        <section>
          <h3>Content Structure</h3>
          <table>
            <thead><tr><th>Folder</th><th>Contents</th></tr></thead>
            <tbody>
              <tr><td><code>Blueprints</code></td><td>Import functions, FBX Actor base class, helper blueprints</td></tr>
              <tr><td><code>Materials</code></td><td>Default material templates used for auto-generated materials</td></tr>
              <tr><td><code>Examples</code></td><td>Sample FBX files and demo import blueprints</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "overview", title: "Overview" },
      next: { slug: "import-function", title: "Import Function" },
    },
    {
      slug: "import-function",
      title: "Import Function",
      description: "Parameters, events, and async behaviour of the core import node",
      content: `
        <section>
          <h3>Import FBX File — Parameters</h3>
          <table>
            <thead><tr><th>Input</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>File Path</strong></td><td>String</td><td>Full absolute path to the FBX file on disk</td></tr>
              <tr><td><strong>Import Settings</strong></td><td>Struct</td><td>Controls texture import, collision, mesh combining, and scale</td></tr>
              <tr><td><strong>Spawn Transform</strong></td><td>Transform</td><td>World transform where the imported actor will be placed</td></tr>
              <tr><td><strong>Auto Generate Materials</strong></td><td>Boolean</td><td>Create material instances automatically from discovered textures</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Import Settings Reference</h3>
          <table>
            <thead><tr><th>Setting</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Import Textures</strong></td><td>Auto-search for and import texture files alongside the FBX</td></tr>
              <tr><td><strong>Import Collisions</strong></td><td>Look for UCX_ prefixed collision meshes in the FBX</td></tr>
              <tr><td><strong>Combine Meshes</strong></td><td>Merge all meshes into a single Procedural Mesh Component</td></tr>
              <tr><td><strong>Scale Factor</strong></td><td>Uniform scale applied to the imported mesh</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Events</h3>
          <table>
            <thead><tr><th>Event</th><th>When it fires</th></tr></thead>
            <tbody>
              <tr><td><strong>On Import Success</strong></td><td>Import finished — receives the spawned FBX Actor reference</td></tr>
              <tr><td><strong>On Import Failed</strong></td><td>Import failed — receives an error description string</td></tr>
              <tr><td><strong>On Progress Update</strong></td><td>Periodic updates during import — use for progress bars (0.0–1.0)</td></tr>
            </tbody>
          </table>
          <div class="callout-tip">
            <strong>💡 Non-blocking:</strong> The import runs on a background thread. You can display a loading UI, keep gameplay running, or import multiple files in parallel.
          </div>
        </section>
      `,
      prev: { slug: "getting-started", title: "Getting Started" },
      next: { slug: "textures", title: "Texture Import" },
    },
    {
      slug: "textures",
      title: "Texture Import",
      description: "Automatic texture discovery and material generation",
      content: `
        <section>
          <h3>Supported Texture Slots</h3>
          <table>
            <thead><tr><th>Slot</th><th>Naming Conventions Recognised</th></tr></thead>
            <tbody>
              <tr><td><strong>Diffuse / Base Color</strong></td><td><code>_Diffuse</code>, <code>_BaseColor</code>, <code>_D</code>, <code>_BC</code></td></tr>
              <tr><td><strong>Normal Map</strong></td><td><code>_Normal</code>, <code>_N</code>, <code>_NRM</code></td></tr>
              <tr><td><strong>Specular</strong></td><td><code>_Specular</code>, <code>_Spec</code>, <code>_S</code></td></tr>
              <tr><td><strong>Opacity</strong></td><td><code>_Opacity</code>, <code>_Alpha</code>, <code>_O</code></td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Search Order</h3>
          <p>The plugin looks for texture files in this order:</p>
          <ol>
            <li>Same directory as the FBX file</li>
            <li><code>Textures</code> subdirectory</li>
            <li>Parent directory</li>
            <li>Paths explicitly referenced inside the FBX</li>
          </ol>
        </section>
        <section>
          <h3>Material Generation</h3>
          <p>When Auto Generate Materials is enabled, the plugin creates a material instance per material slot, assigns discovered textures to the correct parameters, and applies it to the Procedural Mesh Component.</p>
        </section>
      `,
      prev: { slug: "import-function", title: "Import Function" },
      next: { slug: "collisions", title: "Collisions" },
    },
    {
      slug: "collisions",
      title: "Collisions",
      description: "Custom collision meshes using the UCX_ naming convention",
      content: `
        <section>
          <h3>UCX_ Naming Convention</h3>
          <p>Add simplified collision geometry to your FBX file by naming meshes with the <code>UCX_</code> prefix followed by the target mesh name (e.g. <code>UCX_Table_01</code> for collision on <code>Table_01</code>). The plugin detects these automatically and hides them from rendering.</p>
        </section>
        <section>
          <h3>Supported Prefixes</h3>
          <table>
            <thead><tr><th>Prefix</th><th>Collision Type</th></tr></thead>
            <tbody>
              <tr><td><code>UCX_</code></td><td>Convex hull collision</td></tr>
              <tr><td><code>UBX_</code></td><td>Box collision (exporter dependent)</td></tr>
              <tr><td><code>USP_</code></td><td>Sphere collision (exporter dependent)</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Multiple Collision Hulls</h3>
          <p>For complex objects, create multiple UCX_ meshes and suffix them with an index: <code>UCX_Chair_01</code>, <code>UCX_Chair_02</code>, etc. The plugin combines all hulls into the final collision for that mesh.</p>
        </section>
      `,
      prev: { slug: "textures", title: "Texture Import" },
      next: { slug: "materials", title: "Material Properties" },
    },
    {
      slug: "materials",
      title: "Material Properties",
      description: "Dynamic material instances and runtime colour/property changes",
      content: `
        <section>
          <h3>Changing Material Properties at Runtime</h3>
          <p>Every imported mesh component exposes dynamic material instances you can modify via Blueprint:</p>
          <pre><code>// Get material from FBX Actor
Dynamic Material = FBX Actor → Get Material (Index: 0)

// Change colour
Dynamic Material → Set Vector Parameter Value
  - Parameter Name: "BaseColor"
  - Value: (R=1, G=0, B=0, A=1)

// Adjust roughness
Dynamic Material → Set Scalar Parameter Value
  - Parameter Name: "Roughness"
  - Value: 0.2</code></pre>
        </section>
        <section>
          <h3>Changeable Properties</h3>
          <table>
            <thead><tr><th>Property</th><th>Node</th></tr></thead>
            <tbody>
              <tr><td><strong>Base Color</strong></td><td>Set Vector Parameter Value — <code>BaseColor</code></td></tr>
              <tr><td><strong>Roughness</strong></td><td>Set Scalar Parameter Value — <code>Roughness</code></td></tr>
              <tr><td><strong>Metallic</strong></td><td>Set Scalar Parameter Value — <code>Metallic</code></td></tr>
              <tr><td><strong>Emissive Color</strong></td><td>Set Vector Parameter Value — <code>EmissiveColor</code></td></tr>
              <tr><td><strong>Opacity</strong></td><td>Set Scalar Parameter Value — <code>Opacity</code></td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "collisions", title: "Collisions" },
      next: { slug: "save-load", title: "Save & Load System" },
    },
    {
      slug: "save-load",
      title: "Save & Load System",
      description: "Persist imported mesh data for instant reload",
      content: `
        <section>
          <h3>How It Works</h3>
          <p>Import once, save the result to disk, then reload instantly on future sessions — no FBX parsing required the second time.</p>
          <div class="workflow">
            <div class="wf-step"><div class="wf-num">1</div><p>Import FBX (first run)</p></div>
            <div class="wf-arrow">›</div>
            <div class="wf-step"><div class="wf-num">2</div><p>Call Save FBX Data</p></div>
            <div class="wf-arrow">›</div>
            <div class="wf-step"><div class="wf-num">3</div><p>Data serialised to disk</p></div>
            <div class="wf-arrow">›</div>
            <div class="wf-step"><div class="wf-num">4</div><p>Next session: Load FBX Data</p></div>
            <div class="wf-arrow">›</div>
            <div class="wf-step"><div class="wf-num">5</div><p>Instant mesh spawn</p></div>
          </div>
        </section>
        <section>
          <h3>Save Function Parameters</h3>
          <table>
            <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Save Name</strong></td><td>Unique identifier for this save slot</td></tr>
              <tr><td><strong>Save Directory</strong></td><td>Folder path where the save file will be written</td></tr>
              <tr><td><strong>Include Textures</strong></td><td>Whether to embed texture data in the save</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Best Practices</h3>
          <ul>
            <li>Use unique save names per FBX file</li>
            <li>Add versioning to save file names when meshes change</li>
            <li>Provide a UI for users to manage saved imports</li>
            <li>Handle missing texture files gracefully in your load logic</li>
          </ul>
        </section>
      `,
      prev: { slug: "materials", title: "Material Properties" },
    },
  ],
};

export default runtimeFbxImportDocs;

