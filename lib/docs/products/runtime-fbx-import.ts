import type { ProductDocumentation } from "../types";

const runtimeFbxImportDocs: ProductDocumentation = {
  productSlug: "runtime-fbx-import",
  sections: [
    {
      slug: "overview",
      title: "Overview",
      description: "What Runtime FBX Import does and how it works",
      content: `
        <section>
          <h3>What is Runtime FBX Import?</h3>
          <p><strong>Runtime FBX Import</strong> is a plugin for Unreal Engine that lets players or users load any <code>.fbx</code> file from disk while your game or app is running. No editor required. The plugin reads the FBX scene, builds Procedural Mesh Components for every node, auto-imports textures, sets up materials, handles skeletal mesh skinning, imports animations, and spawns a Blueprint-ready <strong>FBX Mesh Actor</strong> in your level — all without blocking the game thread.</p>
          <p>Supported platforms: <strong>Win64, Mac</strong>. Compatible with supported <strong>Unreal Engine</strong> projects.</p>
        </section>
        <section>
          <h3>Key Features</h3>
          <div class="feature-grid">
            <div class="feature-card"><div class="fc-icon">⚡</div><h4>Fully Asynchronous</h4><p>Import runs on a background thread. Your game stays responsive. Show a progress bar using the built-in progress events.</p></div>
            <div class="feature-card"><div class="fc-icon">🦴</div><h4>Skeletal Mesh Import</h4><p>Meshes with bones are automatically detected and built as a Procedural Skeletal Mesh Component with full skinning support.</p></div>
            <div class="feature-card"><div class="fc-icon">🎬</div><h4>Animation Import</h4><p>Import a separate FBX animation file onto any imported character. Play, pause, stop, and scrub with Blueprint nodes.</p></div>
            <div class="feature-card"><div class="fc-icon">🖼️</div><h4>Auto Texture Discovery</h4><p>Diffuse, Normal, Specular, Opacity, Emissive and more are auto-located from the FBX directory and applied to generated materials.</p></div>
            <div class="feature-card"><div class="fc-icon">🔷</div><h4>Custom Collisions</h4><p>UCX-prefixed collision meshes inside the FBX are detected and applied as convex collision at runtime.</p></div>
            <div class="feature-card"><div class="fc-icon">🎨</div><h4>Runtime Material Library</h4><p>Assign a Material Library data asset so users can switch materials and textures from a picker UI at runtime.</p></div>
            <div class="feature-card"><div class="fc-icon">💾</div><h4>Save &amp; Load</h4><p>Save all imported actors to a slot and restore them in a later session — no re-import needed.</p></div>
            <div class="feature-card"><div class="fc-icon">📐</div><h4>Pivot Gizmos</h4><p>Built-in translate/rotate/scale gizmos let users reposition imported objects in your scene.</p></div>
          </div>
        </section>
        <section>
          <h3>Typical Use Cases</h3>
          <ul>
            <li><strong>User-Generated Content</strong> — players import their own 3D models into your game</li>
            <li><strong>Product Configurators</strong> — load external CAD/product models on demand</li>
            <li><strong>In-Game Level Editors</strong> — import and place props during a live session</li>
            <li><strong>Character Viewers</strong> — load characters with skeletons and animations at runtime</li>
          </ul>
        </section>
        <section>
          <h3>How the Plugin Is Structured</h3>
          <table>
            <thead><tr><th>Class</th><th>What it is</th></tr></thead>
            <tbody>
              <tr><td><code>AFBXImportManager</code> / <code>BP_FBXMeshActor</code></td><td>The main controller you place in your level. Drives all import operations.</td></tr>
              <tr><td><code>AFBXMeshActor</code></td><td>Spawned for each imported FBX. Contains all Procedural Mesh Components and node data.</td></tr>
              <tr><td><code>UProceduralSkeletalMeshComponent</code></td><td>Handles skinned mesh rendering and animation playback for skeletal meshes.</td></tr>
              <tr><td><code>URuntimeSkeletalMeshAnimationComponent</code></td><td>Animation controller that can drive any existing Skeletal Mesh Component in your scene.</td></tr>
              <tr><td><code>UMaterialImportSettings</code></td><td>Data asset that maps FBX material channels to your Unreal material parameters.</td></tr>
              <tr><td><code>UMaterialLibraryAsset</code></td><td>Data asset containing grouped materials and textures for runtime picker UI.</td></tr>
            </tbody>
          </table>
        </section>
      `,
      next: { slug: "installation", title: "Installation & Setup" },
    },
    {
      slug: "installation",
      title: "Installation & Setup",
      description: "Enable the plugin and place the FBX Import Manager in your level",
      content: `
        <section>
          <h3>Step 1 — Enable the Plugin</h3>
          <ol>
            <li>Install the plugin from the Fab Marketplace via the Epic Games Launcher.</li>
            <li>Open your project in Unreal Editor and go to <strong>Edit → Plugins</strong>.</li>
            <li>Search for <strong>Runtime FBX Import</strong>, tick <strong>Enabled</strong>, and restart the editor when prompted.</li>
          </ol>
          <div class="callout-tip">
            <strong>💡 Verify install:</strong> After restart you should see the plugin content folder <code>RuntimeFBXImport</code> appear in the Content Browser (enable <em>Show Plugin Content</em> in the filter dropdown).
          </div>
        </section>
        <section>
          <h3>Step 2 — Place the FBX Import Manager</h3>
          <p>The plugin works through a single manager actor you place in your level. In the Content Browser, open <code>RuntimeFBXImport/Blueprints</code> and drag <strong>BP_FBXMeshActor</strong> (the default import manager Blueprint) into your level.</p>
          <p>In the Details panel, configure these properties:</p>
          <table>
            <thead><tr><th>Property</th><th>What to set</th></tr></thead>
            <tbody>
              <tr><td><strong>FBX Actor Class</strong></td><td>The Blueprint class to spawn for each imported mesh. Use <code>BP_FBXMeshActor</code> by default, or your own subclass if you need custom logic per imported object.</td></tr>
              <tr><td><strong>Material Import Settings</strong></td><td>Assign your <code>DA_MaterialImportSettings</code> data asset. Controls how FBX material channels map to Unreal material parameters and which base materials to use.</td></tr>
              <tr><td><strong>Material Library</strong></td><td>Optional. Assign a <code>DA_MaterialLibrary</code> data asset to power a runtime material picker UI.</td></tr>
              <tr><td><strong>Show Pivot</strong></td><td>Enable to show translate/rotate/scale gizmos when a user selects an imported object.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Step 3 — Set Up Your Game Mode</h3>
          <p>The demo scene uses <code>BP_FlyCamGameMode</code> and <code>BP_FlyCamCharacter</code> — a free-flying camera with click-to-select. You can use your own Game Mode; just ensure mouse interaction is enabled so users can select and interact with imported actors.</p>
          <div class="callout-info">
            <strong>ℹ️ Demo scene:</strong> Open <code>Content/Maps/DemoScene.umap</code> for a fully wired example with the manager, camera, UI, and a sample character already connected. Study those Blueprints first.
          </div>
        </section>
      `,
      prev: { slug: "overview", title: "Overview" },
      next: { slug: "getting-started", title: "Importing Your First FBX" },
    },
    {
      slug: "getting-started",
      title: "Importing Your First FBX",
      description: "Step-by-step guide from file picker to spawned mesh actor",
      content: `
        <section>
          <h3>The Full Import Flow</h3>
          <div class="workflow">
            <div class="wf-step"><div class="wf-num">1</div><p>Open file picker</p></div>
            <div class="wf-arrow">›</div>
            <div class="wf-step"><div class="wf-num">2</div><p>Initialize FBX Load</p></div>
            <div class="wf-arrow">›</div>
            <div class="wf-step"><div class="wf-num">3</div><p>Call Import FBX File</p></div>
            <div class="wf-arrow">›</div>
            <div class="wf-step"><div class="wf-num">4</div><p>Handle events / UI</p></div>
            <div class="wf-arrow">›</div>
            <div class="wf-step"><div class="wf-num">5</div><p>Actor spawns in world</p></div>
          </div>
        </section>
        <section>
          <h3>Step 1 — Open the File Picker</h3>
          <p>Call <strong>Open FBX File Dialogue</strong> (from <code>RuntimeMeshFunctionLibrary</code>, Blueprint callable) to open the native Windows/Mac file dialog. It returns the full file path as a String. Store it in a variable.</p>
          <pre><code>// Blueprint
Open FBX File Dialogue → Out File Path (String)
Store → File Path Variable</code></pre>
        </section>
        <section>
          <h3>Step 2 — Initialize FBX Load</h3>
          <p>Before importing, call <strong>Initialize FBX Load</strong> on your FBX Import Manager actor reference. This sets the coordinate system, scale, collision mode, and skeletal mesh detection for the upcoming import.</p>
          <table>
            <thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Collision Type</strong></td><td>Enum</td><td><code>No Collision</code> — no physics; <code>Mesh Collision</code> — auto complex collision; <code>Mesh Collision From Source</code> — use mesh geometry; <code>Custom Collision From Source</code> — use UCX_ meshes from FBX</td></tr>
              <tr><td><strong>Scale</strong></td><td>Vector</td><td>Uniform scale applied to the imported mesh. Default <code>(1, 1, 1)</code>.</td></tr>
              <tr><td><strong>Transform Vertex To Absolute</strong></td><td>Boolean</td><td>When true, vertices are placed at their original world position from the FBX file. Leave true for most imports.</td></tr>
              <tr><td><strong>Coordinate</strong></td><td>Enum</td><td><code>Right Handed</code> (standard for Blender/Maya/3ds Max) or <code>Left Handed</code>.</td></tr>
              <tr><td><strong>Front Vector / Up Vector</strong></td><td>Enum</td><td>Match the axis convention of the software that exported the file. Use <code>Front</code> / <code>Up</code> for most tools.</td></tr>
              <tr><td><strong>Auto Detect Skeletal Mesh</strong></td><td>Boolean</td><td>When true, any mesh node that has bone data is automatically treated as a skeletal mesh. Leave enabled unless you want to force everything as static.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Step 3 — Call Import FBX File</h3>
          <p>Call <strong>Import FBX File</strong> on your FBX Import Manager, passing:</p>
          <ul>
            <li><strong>File Path</strong> — the string returned by the file dialogue</li>
            <li><strong>Location</strong> — world position where the mesh should appear</li>
            <li><strong>Spawn FBX Actor</strong> — leave <code>true</code> (set to <code>false</code> only if you want to manually control spawning)</li>
          </ul>
          <div class="callout-tip">
            <strong>💡</strong> Call <strong>Initialize FBX Load</strong> first, then <strong>Import FBX File</strong> immediately after. Both are on the same actor reference.
          </div>
          <img src="/images/products/runtime-fbx-import/rfbxi_features_asynchronousimport.jpg" alt="Imported FBX meshes in the scene — a large building and a character with the node list visible in the UI" />
        </section>
        <section>
          <h3>Step 4 — Handle Import Events</h3>
          <p>Override these events in your FBX Import Manager Blueprint to drive your UI:</p>
          <table>
            <thead><tr><th>Event</th><th>When it fires</th><th>Typical use</th></tr></thead>
            <tbody>
              <tr><td><strong>On Import Started</strong></td><td>Immediately when import begins</td><td>Show a loading screen or spinner</td></tr>
              <tr><td><strong>On Import Progress Changed</strong></td><td>Repeatedly during import, passes a 0.0–1.0 float</td><td>Drive a progress bar</td></tr>
              <tr><td><strong>On Node Processing Changed</strong></td><td>Each time a new mesh node starts processing, passes the node name</td><td>Show status text like "Importing Chair_01…"</td></tr>
              <tr><td><strong>On Mesh Processing Progress Changed</strong></td><td>Per-mesh geometry progress during large files</td><td>More granular progress display</td></tr>
              <tr><td><strong>On FBX Actor Created</strong></td><td>When the FBX Mesh Actor is first spawned in the world</td><td>Store a reference to the actor</td></tr>
              <tr><td><strong>On Import Completed</strong></td><td>When everything is fully finished</td><td>Hide loading screen, enable UI</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "installation", title: "Installation & Setup" },
      next: { slug: "fbx-mesh-actor", title: "FBX Mesh Actor" },
    },
    {
      slug: "fbx-mesh-actor",
      title: "FBX Mesh Actor",
      description: "How to select, query, and modify imported mesh actors and their components",
      content: `
        <section>
          <h3>What Is an FBX Mesh Actor?</h3>
          <p>When an FBX is imported with <em>Spawn FBX Actor</em> enabled, the plugin creates one <strong>AFBXMeshActor</strong> (or your own subclass) in the world. This actor holds all generated <code>ProceduralMeshComponent</code>s organized under a node hierarchy that mirrors the FBX scene structure.</p>
          <p>You can query, select, and modify this actor using Blueprint nodes at runtime.</p>
        </section>
        <section>
          <h3>Selection and Hover</h3>
          <p>Call these on the <strong>FBX Import Manager</strong> actor reference (not on the mesh actor directly):</p>
          <table>
            <thead><tr><th>Node</th><th>What it does</th></tr></thead>
            <tbody>
              <tr><td><strong>Select Actor</strong></td><td>Marks an FBX Mesh Actor as selected and triggers <code>On Actor Selected</code> on that actor, where you can implement a highlight or outline effect.</td></tr>
              <tr><td><strong>Hover At Actor</strong></td><td>Triggers hover highlight on the actor and a specific component under the cursor.</td></tr>
              <tr><td><strong>Reset Hovered Actor</strong></td><td>Clears the hover state.</td></tr>
              <tr><td><strong>Reset Actor Selection</strong></td><td>Deselects all currently selected actors and components.</td></tr>
            </tbody>
          </table>
          <p>Call these on the <strong>FBX Mesh Actor</strong> reference itself to work at the sub-component level:</p>
          <table>
            <thead><tr><th>Node</th><th>What it does</th></tr></thead>
            <tbody>
              <tr><td><strong>Select Component</strong></td><td>Selects an individual mesh section (e.g. from a hit result). Triggers <code>On Component Selected</code>. Pass <code>bDeselectRest = true</code> to auto-clear previous selection.</td></tr>
              <tr><td><strong>Deselect Current Components</strong></td><td>Clears the current component selection.</td></tr>
              <tr><td><strong>Select Component From Mesh Node</strong></td><td>Select a component by passing its <code>UMeshNode</code> reference instead of a hit component.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Querying Nodes</h3>
          <table>
            <thead><tr><th>Node</th><th>Returns</th></tr></thead>
            <tbody>
              <tr><td><strong>Get Root Nodes</strong></td><td>Array of all top-level <code>UMeshNode</code> objects in the hierarchy</td></tr>
              <tr><td><strong>Get Mesh Node From Component</strong></td><td>The <code>UMeshNode</code> associated with a given <code>ProceduralMeshComponent</code></td></tr>
              <tr><td><strong>Get Skeletal Mesh Nodes</strong></td><td>Array of all <code>USkeletalMeshNode</code> objects — the bone-based meshes in this actor</td></tr>
            </tbody>
          </table>
          <div class="callout-info">
            <strong>ℹ️ Mesh Node hierarchy:</strong> <code>UMeshNode</code> is the base class. Geometry meshes are <code>UMeshNode_Geometry</code>. Collision meshes are <code>UMeshNode_Collision</code>. Skeletal meshes are <code>USkeletalMeshNode</code> (extends Geometry). Light nodes are <code>URuntimeLightNode</code>.
          </div>
        </section>
        <section>
          <h3>Changing Materials at Runtime</h3>
          <p>Call these on the <strong>FBX Mesh Actor</strong> reference:</p>
          <table>
            <thead><tr><th>Node</th><th>Parameters</th><th>What it does</th></tr></thead>
            <tbody>
              <tr><td><strong>Update Section Material</strong></td><td>Section ID, Material Interface, Mesh Component</td><td>Replaces the material on a specific section by index</td></tr>
              <tr><td><strong>Update Texture Parameter</strong></td><td>Section ID, Parameter Name, Texture, Mesh Component</td><td>Swaps a texture inside a dynamic material by parameter name</td></tr>
              <tr><td><strong>Update Scalar Parameter</strong></td><td>Section ID, Parameter Name, Float, Mesh Component</td><td>Changes a float property (e.g. roughness, metallic) inside a material</td></tr>
              <tr><td><strong>Update Vector Parameter</strong></td><td>Section ID, Parameter Name, LinearColor, Mesh Component</td><td>Changes a color or vector value (e.g. tint) inside a material</td></tr>
            </tbody>
          </table>
          <div class="callout-tip">
            <strong>💡 Section ID:</strong> Each material slot in the imported mesh corresponds to a section index starting from 0. If your FBX mesh has 3 materials, Section IDs are 0, 1, and 2.
          </div>
          <img src="/images/products/runtime-fbx-import/rfbxi_features_changeablematerial.jpg" alt="Blueprint nodes: Update Section Color Parameter, Update Section Texture, and Update Section Material wired to custom events" />
        </section>
        <section>
          <h3>Implementable Events on the FBX Mesh Actor</h3>
          <p>Override these in your own Blueprint subclass of <code>AFBXMeshActor</code> to add custom feedback:</p>
          <table>
            <thead><tr><th>Event</th><th>When it fires</th></tr></thead>
            <tbody>
              <tr><td><strong>On Actor Selected</strong></td><td>When this actor is selected via <code>Select Actor</code></td></tr>
              <tr><td><strong>On Actor Selection Reset</strong></td><td>When selection is cleared</td></tr>
              <tr><td><strong>On Component Hovered</strong></td><td>When the cursor moves over a specific mesh component</td></tr>
              <tr><td><strong>On Component Selected</strong></td><td>When a specific mesh section is selected</td></tr>
              <tr><td><strong>On Section Received</strong></td><td>Called with full section data, material info, and texture info — useful for populating a properties panel</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "getting-started", title: "Importing Your First FBX" },
      next: { slug: "materials", title: "Material Import Settings" },
    },
    {
      slug: "materials",
      title: "Material Import Settings",
      description: "Configure how FBX material channels map to your Unreal materials",
      content: `
        <section>
          <h3>Material Import Settings Data Asset</h3>
          <p>Create a <strong>Material Import Settings</strong> Data Asset (<code>UMaterialImportSettings</code>) in the Content Browser and assign it to your FBX Import Manager's <strong>Material Import Settings</strong> slot. This asset controls how the plugin translates FBX material data into Unreal material instances.</p>
        </section>
        <section>
          <h3>Base Materials</h3>
          <p>The plugin creates dynamic material instances from three base materials you provide:</p>
          <table>
            <thead><tr><th>Property</th><th>When it's used</th></tr></thead>
            <tbody>
              <tr><td><strong>Base Material Opaque</strong></td><td>Used for meshes with no transparency</td></tr>
              <tr><td><strong>Base Material Masked</strong></td><td>Used when an Opacity texture is detected (cutout transparency)</td></tr>
              <tr><td><strong>Base Material Translucent</strong></td><td>Used when a semi-transparent material is detected in the FBX</td></tr>
            </tbody>
          </table>
          <div class="callout-tip">
            <strong>💡</strong> The plugin ships with default base materials in <code>RuntimeFBXImport/Materials</code>. Use those as a starting point or duplicate and customize them.
          </div>
        </section>
        <section>
          <h3>Texture Type Mappings</h3>
          <p>The FBX SDK reads texture types (Diffuse, Normal, Specular, etc.) and the plugin needs to know which parameter name inside your base material corresponds to each type. Fill in the <strong>Texture Type Mappings</strong> array:</p>
          <table>
            <thead><tr><th>FBX Texture Type</th><th>Example Material Parameter Name</th></tr></thead>
            <tbody>
              <tr><td><code>Diffuse</code></td><td><code>BaseColor</code></td></tr>
              <tr><td><code>Normal</code></td><td><code>Normal</code></td></tr>
              <tr><td><code>Specular</code></td><td><code>Specular</code></td></tr>
              <tr><td><code>Opacity</code></td><td><code>Opacity</code></td></tr>
              <tr><td><code>Emissive</code></td><td><code>Emissive</code></td></tr>
              <tr><td><code>Height</code></td><td><code>Height</code></td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Color and Scalar Mappings</h3>
          <p>FBX materials also carry color values and scalar factors. Map those to your material parameters using the <strong>Color Type Mappings</strong> and <strong>Scalar Type Mappings</strong> arrays. Common examples:</p>
          <table>
            <thead><tr><th>Type</th><th>FBX Value</th><th>Material Parameter</th></tr></thead>
            <tbody>
              <tr><td>Color</td><td>Color Diffuse</td><td><code>BaseColor</code></td></tr>
              <tr><td>Color</td><td>Color Emissive</td><td><code>EmissiveColor</code></td></tr>
              <tr><td>Scalar</td><td>Shininess</td><td><code>Roughness</code></td></tr>
              <tr><td>Scalar</td><td>Opacity</td><td><code>Opacity</code></td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Per-Node Material Override</h3>
          <p>Use the <strong>Node Material Mappings</strong> array to force a specific material onto a named FBX node, bypassing auto-generated materials entirely. Add entries with the exact node name from the FBX scene and the <code>UMaterialInterface</code> to apply.</p>
        </section>
        <section>
          <h3>Material Library (Runtime Picker UI)</h3>
          <p>The <strong>Material Library Asset</strong> (<code>UMaterialLibraryAsset</code>) is a separate data asset that stores grouped materials and textures for your runtime UI. Assign it to the <strong>Material Library</strong> slot on the FBX Import Manager.</p>
          <p>At runtime, call these nodes on the manager:</p>
          <table>
            <thead><tr><th>Node</th><th>Returns</th><th>Use</th></tr></thead>
            <tbody>
              <tr><td><strong>Load Materials From Type</strong></td><td>Array of <code>FMaterialInfo</code> (name, thumbnail, material)</td><td>Populate a material picker scrollbox</td></tr>
              <tr><td><strong>Load Textures From Type</strong></td><td>Array of <code>FTextureInfo</code> (name, texture)</td><td>Populate a texture picker list</td></tr>
            </tbody>
          </table>
          <p>On each FBX Mesh Actor, set <strong>Material Library Type Name</strong> to filter which group from the library applies to that actor.</p>
          <img src="/images/products/runtime-fbx-import/rfbxi_features_importtextures.jpg" alt="Imported mesh shown without textures (left) and with auto-discovered textures applied (right), alongside the runtime material and texture picker UI" />
        </section>
      `,
      prev: { slug: "fbx-mesh-actor", title: "FBX Mesh Actor" },
      next: { slug: "skeletal-mesh", title: "Skeletal Mesh Import" },
    },
    {
      slug: "skeletal-mesh",
      title: "Skeletal Mesh Import",
      description: "Automatically import bone-based meshes with full skinning",
      content: `
        <section>
          <h3>Auto Detection</h3>
          <p>When <strong>Auto Detect Skeletal Mesh</strong> is enabled in <code>Initialize FBX Load</code>, the plugin inspects every mesh node in the FBX. If a node contains bone data (skin weights + a skeleton hierarchy), it is automatically imported as a <strong>USkeletalMeshNode</strong> rather than a standard geometry node.</p>
          <p>The generated component is a <code>UProceduralSkeletalMeshComponent</code> — a subclass of <code>ProceduralMeshComponent</code> that handles CPU-side skinning each frame by applying bone transforms to the vertex positions in real time.</p>
        </section>
        <section>
          <h3>What Gets Created</h3>
          <table>
            <thead><tr><th>Data</th><th>Where it lives</th></tr></thead>
            <tbody>
              <tr><td><strong>Bone hierarchy</strong></td><td><code>USkeletalMeshNode.BoneInfos</code> — array of bone names, parent indices, and transforms</td></tr>
              <tr><td><strong>Skin weights</strong></td><td>Stored per-vertex inside <code>FProceduralMeshData.SkinWeights</code></td></tr>
              <tr><td><strong>Procedural skeletal component</strong></td><td><code>USkeletalMeshNode.ProcMeshComponent</code> — the rendered skinned mesh in the actor</td></tr>
              <tr><td><strong>Reference pose transforms</strong></td><td>Stored internally for skinning math</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Querying Skeletal Mesh Nodes</h3>
          <p>After import completes, call <strong>Get Skeletal Mesh Nodes</strong> on the spawned FBX Mesh Actor to retrieve all bone-based mesh nodes. If a character has multiple skinned parts (head, body, outfit), each is a separate <code>USkeletalMeshNode</code>.</p>
          <p>You can also call <strong>Get Skeletal Mesh Node From Actor</strong> on the FBX Import Manager, passing the actor reference and a skeletal mesh index (0 for the first one), as a shortcut.</p>
        </section>
        <section>
          <h3>Bone Visualization (Debug)</h3>
          <p>Enable a visual overlay of the skeleton for debugging. Call these on the FBX Import Manager:</p>
          <table>
            <thead><tr><th>Node</th><th>Parameters</th></tr></thead>
            <tbody>
              <tr><td><strong>Toggle Bone Visualization</strong></td><td>Skeletal Mesh Node reference, boolean to show/hide</td></tr>
              <tr><td><strong>Set Bone Visualization Settings</strong></td><td>Bone size (float), bone color (FColor), line thickness (float)</td></tr>
            </tbody>
          </table>
          <div class="callout-tip">
            <strong>💡</strong> Bone visualization draws in screen space each tick via the <code>UProceduralSkeletalMeshComponent</code>. Disable it before shipping.
          </div>
        </section>
      `,
      prev: { slug: "materials", title: "Material Import Settings" },
      next: { slug: "animations", title: "Animation Import & Playback" },
    },
    {
      slug: "animations",
      title: "Animation Import & Playback",
      description: "Import FBX animation files and play them on imported characters",
      content: `
        <section>
          <h3>Overview</h3>
          <p>Animation data (keyframe tracks per bone) is stored inside FBX files. The plugin can read a separate animation FBX file and apply it to any already-imported skeletal mesh, or to an existing Skeletal Mesh Component in your scene.</p>
          <p>There are two animation controller types: <code>UProceduralSkeletalMeshComponent</code> (for FBX-imported skeletal meshes) and <code>URuntimeSkeletalMeshAnimationComponent</code> (for driving a native Unreal <code>USkeletalMeshComponent</code>).</p>
        </section>
        <section>
          <h3>Importing an Animation</h3>
          <p>Call one of these on the <strong>FBX Import Manager</strong>:</p>
          <table>
            <thead><tr><th>Node</th><th>Use when…</th><th>Key parameters</th></tr></thead>
            <tbody>
              <tr><td><strong>Import FBX Animation To Actor</strong></td><td>You want to import an animation onto an FBX-imported character (the most common case)</td><td>Animation File Path, FBX Mesh Actor reference, Skeletal Mesh Index (0 = first)</td></tr>
              <tr><td><strong>Import FBX Animation</strong></td><td>You have a direct <code>USkeletalMeshNode</code> reference</td><td>Animation File Path, Skeletal Mesh Node reference</td></tr>
              <tr><td><strong>Import FBX Animation To Skeletal Mesh Component</strong></td><td>You want to drive a native Unreal Skeletal Mesh Component (not an FBX-imported one)</td><td>Animation File Path, Skeletal Mesh Component reference</td></tr>
            </tbody>
          </table>
          <div class="callout-tip">
            <strong>💡 Multiple animations:</strong> You can import multiple animation files onto the same character — each is stored under its animation name. Then play them by name.
          </div>
        </section>
        <section>
          <h3>Animation Events on the Import Manager</h3>
          <table>
            <thead><tr><th>Event</th><th>When it fires</th></tr></thead>
            <tbody>
              <tr><td><strong>On Animation Imported</strong></td><td>After each individual animation track is loaded — receives Import ID, animation name, and track count</td></tr>
              <tr><td><strong>On Animation Import Complete</strong></td><td>After all animations in a file are ready — receives file name and total animation count</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Playback Controls — FBX-Imported Skeletal Mesh</h3>
          <p>After import, get the <code>UProceduralSkeletalMeshComponent</code> from the node (<code>USkeletalMeshNode.ProcMeshComponent</code>) and call these Blueprint nodes on it:</p>
          <table>
            <thead><tr><th>Node</th><th>Parameters</th><th>What it does</th></tr></thead>
            <tbody>
              <tr><td><strong>Play Animation</strong></td><td>Animation Name (String), Loop (bool)</td><td>Start playback by animation name</td></tr>
              <tr><td><strong>Stop Animation</strong></td><td>—</td><td>Stop and reset to rest pose</td></tr>
              <tr><td><strong>Pause Animation</strong></td><td>—</td><td>Freeze at current frame</td></tr>
              <tr><td><strong>Resume Animation</strong></td><td>—</td><td>Continue from paused position</td></tr>
              <tr><td><strong>Set Animation Play Rate</strong></td><td>Float (1.0 = normal speed)</td><td>Speed up or slow down</td></tr>
              <tr><td><strong>Get Animation Duration</strong></td><td>Animation Name (String)</td><td>Returns total length in seconds</td></tr>
              <tr><td><strong>Get Current Animation Time</strong></td><td>—</td><td>Returns current playback position in seconds</td></tr>
              <tr><td><strong>Is Playing Animation</strong></td><td>—</td><td>Returns true/false</td></tr>
              <tr><td><strong>Get Animation Names</strong></td><td>—</td><td>Returns array of all imported animation name strings</td></tr>
              <tr><td><strong>Has Animation</strong></td><td>Animation Name (String)</td><td>Check if a given animation was imported</td></tr>
              <tr><td><strong>Get Num Animations</strong></td><td>—</td><td>Returns number of animations imported onto this component</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Playback Controls — Native Skeletal Mesh Component</h3>
          <p>To drive animation on a native <code>USkeletalMeshComponent</code> (e.g. your own character Blueprint's mesh), use the <strong>Runtime Skeletal Mesh Animation Component</strong>.</p>
          <ol>
            <li>Call <strong>Import FBX Animation To Skeletal Mesh Component</strong> on the manager to load the animation.</li>
            <li>Call <strong>Get Or Create Native Animation Controller</strong> on the manager, passing your Skeletal Mesh Component — this returns a <code>URuntimeSkeletalMeshAnimationComponent</code>.</li>
            <li>Use that component's <strong>Play Animation</strong>, <strong>Stop Animation</strong>, <strong>Pause Animation</strong>, <strong>Resume Animation</strong>, <strong>Set Animation Play Rate</strong>, <strong>Get Animation Duration</strong>, and other nodes (identical API to above).</li>
          </ol>
          <div class="callout-info">
            <strong>ℹ️</strong> The native controller captures the original animation state of your Skeletal Mesh Component before playback begins, and restores it when stopped — so you don't permanently break your character's animation.
          </div>
        </section>
      `,
      prev: { slug: "skeletal-mesh", title: "Skeletal Mesh Import" },
      next: { slug: "collisions", title: "Collisions" },
    },
    {
      slug: "collisions",
      title: "Collisions",
      description: "Custom collision meshes from UCX_ naming conventions and collision modes",
      content: `
        <section>
          <h3>Collision Types</h3>
          <p>Set in <strong>Initialize FBX Load → Collision Type</strong>:</p>
          <table>
            <thead><tr><th>Value</th><th>Behavior</th></tr></thead>
            <tbody>
              <tr><td><strong>No Collision</strong></td><td>Imported mesh has no physics collision at all</td></tr>
              <tr><td><strong>Mesh Collision</strong></td><td>Collision is generated from the visible mesh geometry (complex/expensive)</td></tr>
              <tr><td><strong>Mesh Collision From Source</strong></td><td>Uses the raw mesh vertex data as collision geometry</td></tr>
              <tr><td><strong>Custom Collision From Source</strong></td><td>Uses only meshes prefixed with <code>UCX_</code> inside the FBX as convex collision hulls — recommended for most use cases</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>UCX_ Workflow</h3>
          <p>In your 3D tool (Blender, Maya, 3ds Max), create simplified collision geometry alongside your visible mesh. Name collision objects with the prefix <code>UCX_</code> followed by the name of the target mesh — for example <code>UCX_Chair</code> for the mesh named <code>Chair</code>. When the FBX is exported and imported, the plugin assigns those hulls as collision and hides them from rendering.</p>
          <ul>
            <li>For complex objects, add multiple hulls with indexed suffixes: <code>UCX_Chair_01</code>, <code>UCX_Chair_02</code></li>
            <li>Keep each hull convex — concave shapes need to be split into multiple convex pieces</li>
            <li>Low-poly hulls (8–20 triangles) perform much better than dense collision meshes</li>
          </ul>
          <img src="/images/products/runtime-fbx-import/rfbxi_features_customcollisions.jpg" alt="3ds Max wireframe view showing UCX_Col1 through UCX_Col4 convex collision hulls surrounding a complex building mesh" />
        </section>
        <section>
          <h3>Supported Prefixes</h3>
          <table>
            <thead><tr><th>Prefix</th><th>Collision shape</th></tr></thead>
            <tbody>
              <tr><td><code>UCX_</code></td><td>Convex hull — most reliable at runtime</td></tr>
              <tr><td><code>UBX_</code></td><td>Box (when exported by your toolchain)</td></tr>
              <tr><td><code>USP_</code></td><td>Sphere (when exported by your toolchain)</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "animations", title: "Animation Import & Playback" },
      next: { slug: "save-load", title: "Save & Load" },
    },
    {
      slug: "save-load",
      title: "Save & Load",
      description: "Persist imported scenes and reload without re-importing",
      content: `
        <section>
          <h3>How It Works</h3>
          <p>After a successful import, call <strong>Save Mesh Actors</strong> on your FBX Import Manager. This serializes all spawned FBX Mesh Actor data (mesh geometry, transforms, material runtime info, skeletal data) to a Unreal save slot. On the next session, call <strong>Load Mesh Actors</strong> with the same slot name — all actors are re-created instantly without re-parsing the FBX file.</p>
          <div class="workflow">
            <div class="wf-step"><div class="wf-num">1</div><p>Import FBX</p></div>
            <div class="wf-arrow">›</div>
            <div class="wf-step"><div class="wf-num">2</div><p>Place / configure actors</p></div>
            <div class="wf-arrow">›</div>
            <div class="wf-step"><div class="wf-num">3</div><p>Save Mesh Actors</p></div>
            <div class="wf-arrow">›</div>
            <div class="wf-step"><div class="wf-num">4</div><p>Next session</p></div>
            <div class="wf-arrow">›</div>
            <div class="wf-step"><div class="wf-num">5</div><p>Load Mesh Actors → instant spawn</p></div>
          </div>
        </section>
        <section>
          <h3>Blueprint Nodes</h3>
          <table>
            <thead><tr><th>Node</th><th>Parameters</th><th>What it does</th></tr></thead>
            <tbody>
              <tr><td><strong>Save Mesh Actors</strong></td><td>Save Slot Name (String), Save Game Index (int32)</td><td>Serializes all current FBX Mesh Actors to a save slot</td></tr>
              <tr><td><strong>Load Mesh Actors</strong></td><td>Save Slot Name (String), Save Game Index (int32)</td><td>Restores all actors from the save slot, spawning them in their saved positions</td></tr>
            </tbody>
          </table>
          <div class="callout-tip">
            <strong>💡</strong> Use the same <strong>Save Slot Name</strong> and <strong>Save Game Index</strong> pair for save and load. You can maintain multiple independent slots for different scenes or users.
          </div>
        </section>
        <section>
          <h3>What Is Saved</h3>
          <ul>
            <li>All mesh geometry (vertices, triangles, normals, UVs, tangents, vertex colors)</li>
            <li>Skeletal mesh bone data and skin weights</li>
            <li>Material runtime info (textures, colors, scalars)</li>
            <li>Node hierarchy and relative transforms</li>
            <li>Actor world transform</li>
          </ul>
          <div class="callout-info">
            <strong>ℹ️</strong> Animations are not saved in the save slot — you will need to re-import animation files after loading.
          </div>
          <img src="/images/products/runtime-fbx-import/rfbxi_features_loadingandsaving.jpg" alt="Blueprint graphs showing Save FBX Actors (top) and Load Saved FBX Actors (bottom) node setups" />
        </section>
      `,
      prev: { slug: "collisions", title: "Collisions" },
      next: { slug: "pivot-gizmos", title: "Pivot Gizmos" },
    },
    {
      slug: "pivot-gizmos",
      title: "Pivot Gizmos",
      description: "Built-in translate, rotate, and scale gizmos for repositioning imported objects",
      content: `
        <section>
          <h3>Enabling Pivot Gizmos</h3>
          <p>On your FBX Import Manager actor, enable <strong>Show Pivot</strong> in the Details panel. Also assign the three Pivot Actor classes:</p>
          <table>
            <thead><tr><th>Property</th><th>Class to assign</th></tr></thead>
            <tbody>
              <tr><td><strong>Pivot Translation Class</strong></td><td><code>APivotActorTranslation</code> (or your subclass)</td></tr>
              <tr><td><strong>Pivot Rotation Class</strong></td><td><code>APivotActorRotation</code></td></tr>
              <tr><td><strong>Pivot Scale Class</strong></td><td><code>APivotActorScale</code></td></tr>
            </tbody>
          </table>
          <p>When the user selects an FBX Mesh Actor (via <strong>Select Actor</strong>), the plugin automatically spawns the appropriate pivot gizmo at the actor's location. The gizmo supports click-and-drag along each axis, with configurable sensitivity and interpolation speed.</p>
        </section>
        <section>
          <h3>Pivot Settings</h3>
          <table>
            <thead><tr><th>Property on Pivot Actor</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Pivot Size</strong></td><td>Scale of the gizmo in world units</td></tr>
              <tr><td><strong>Handle Scale Ratio</strong></td><td>Relative size of the multi-axis plane handles</td></tr>
              <tr><td><strong>Sensitivity</strong></td><td>How much mouse movement translates to world movement</td></tr>
              <tr><td><strong>Interp Speed</strong></td><td>Smoothing speed when the gizmo snaps to the selected actor</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "save-load", title: "Save & Load" },
      next: { slug: "blueprint-reference", title: "Blueprint Node Quick Reference" },
    },
    {
      slug: "blueprint-reference",
      title: "Blueprint Node Quick Reference",
      description: "All Blueprint-callable nodes at a glance",
      content: `
        <section>
          <h3>RuntimeMeshFunctionLibrary (Global Utility Nodes)</h3>
          <table>
            <thead><tr><th>Node</th><th>What it does</th></tr></thead>
            <tbody>
              <tr><td><strong>Open FBX File Dialogue</strong></td><td>Opens the OS file picker for <code>.fbx</code> files. Returns the selected path as a String.</td></tr>
              <tr><td><strong>Load Texture Data From Path</strong></td><td>Loads raw image data from a file path into an <code>FTextureData</code> struct.</td></tr>
              <tr><td><strong>Create Texture 2D From Texture Data</strong></td><td>Converts raw texture data into a transient <code>UTexture2D</code> usable at runtime.</td></tr>
              <tr><td><strong>Create Material Instance From Runtime Info</strong></td><td>Creates a dynamic material instance from a base material and applies texture/color/scalar maps.</td></tr>
              <tr><td><strong>Apply Materials To Mesh Component</strong></td><td>Bulk-applies an array of materials by index to a Mesh Component.</td></tr>
              <tr><td><strong>Make Transform / Combine Transforms</strong></td><td>Utility helpers for building transforms in Blueprint.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>FBX Import Manager (Place in Level)</h3>
          <table>
            <thead><tr><th>Node</th><th>Category</th><th>What it does</th></tr></thead>
            <tbody>
              <tr><td><strong>Initialize FBX Load</strong></td><td>Import</td><td>Set collision type, scale, axis convention, and skeletal mesh auto-detect before importing</td></tr>
              <tr><td><strong>Import FBX File</strong></td><td>Import</td><td>Start the async import at a world location</td></tr>
              <tr><td><strong>Import FBX Animation To Actor</strong></td><td>Import</td><td>Load an animation FBX onto an imported character actor</td></tr>
              <tr><td><strong>Import FBX Animation</strong></td><td>Import</td><td>Load an animation FBX onto a specific <code>USkeletalMeshNode</code></td></tr>
              <tr><td><strong>Import FBX Animation To Skeletal Mesh Component</strong></td><td>Import</td><td>Load an animation FBX onto a native Skeletal Mesh Component</td></tr>
              <tr><td><strong>Get Skeletal Mesh Node From Actor</strong></td><td>Animation</td><td>Returns <code>USkeletalMeshNode</code> from an FBX actor by index</td></tr>
              <tr><td><strong>Get Or Create Native Animation Controller</strong></td><td>Animation</td><td>Returns (or creates) a <code>URuntimeSkeletalMeshAnimationComponent</code> for a native Skeletal Mesh Component</td></tr>
              <tr><td><strong>Get Native Animation Controller</strong></td><td>Animation</td><td>Returns an existing native animation controller (null if none)</td></tr>
              <tr><td><strong>Toggle Bone Visualization</strong></td><td>Animation</td><td>Show or hide bone debug draw on a Skeletal Mesh Node</td></tr>
              <tr><td><strong>Set Bone Visualization Settings</strong></td><td>Animation</td><td>Adjust bone size, color, line thickness</td></tr>
              <tr><td><strong>Select Actor</strong></td><td>Actor</td><td>Mark an FBX actor as selected, spawns pivot gizmo</td></tr>
              <tr><td><strong>Hover At Actor</strong></td><td>Actor</td><td>Trigger hover feedback on an actor and component</td></tr>
              <tr><td><strong>Reset Hovered Actor</strong></td><td>Actor</td><td>Clear hover state</td></tr>
              <tr><td><strong>Reset Actor Selection</strong></td><td>Actor</td><td>Deselect all actors</td></tr>
              <tr><td><strong>Load Materials From Type</strong></td><td>Library</td><td>Returns material list for a named group from the Material Library</td></tr>
              <tr><td><strong>Load Textures From Type</strong></td><td>Library</td><td>Returns texture list for a named group from the Material Library</td></tr>
              <tr><td><strong>Save Mesh Actors</strong></td><td>Save</td><td>Serialize all imported actors to a save slot</td></tr>
              <tr><td><strong>Load Mesh Actors</strong></td><td>Save</td><td>Restore all actors from a save slot</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>FBX Mesh Actor (Spawned per Import)</h3>
          <table>
            <thead><tr><th>Node</th><th>What it does</th></tr></thead>
            <tbody>
              <tr><td><strong>Get Root Nodes</strong></td><td>Returns all top-level <code>UMeshNode</code> objects in the FBX scene hierarchy</td></tr>
              <tr><td><strong>Get Mesh Node From Component</strong></td><td>Find the <code>UMeshNode</code> for a given Procedural Mesh Component</td></tr>
              <tr><td><strong>Get Skeletal Mesh Nodes</strong></td><td>Returns all <code>USkeletalMeshNode</code> objects in this actor</td></tr>
              <tr><td><strong>Select Component</strong></td><td>Select a mesh section by component reference</td></tr>
              <tr><td><strong>Select Component From Mesh Node</strong></td><td>Select a mesh section by node reference</td></tr>
              <tr><td><strong>Deselect Current Components</strong></td><td>Clear sub-component selection</td></tr>
              <tr><td><strong>Hover At Component / Reset Actor Hover</strong></td><td>Hover highlight state management</td></tr>
              <tr><td><strong>Update Section Material</strong></td><td>Replace material on a section by index</td></tr>
              <tr><td><strong>Update Texture Parameter</strong></td><td>Swap a texture inside a section's dynamic material</td></tr>
              <tr><td><strong>Update Scalar Parameter</strong></td><td>Change a float property inside a section's material</td></tr>
              <tr><td><strong>Update Vector Parameter</strong></td><td>Change a color/vector inside a section's material</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>ProceduralSkeletalMeshComponent / RuntimeSkeletalMeshAnimationComponent</h3>
          <table>
            <thead><tr><th>Node</th><th>What it does</th></tr></thead>
            <tbody>
              <tr><td><strong>Play Animation</strong></td><td>Play by name, optional loop</td></tr>
              <tr><td><strong>Stop Animation</strong></td><td>Stop and reset to rest pose</td></tr>
              <tr><td><strong>Pause Animation</strong></td><td>Freeze at current frame</td></tr>
              <tr><td><strong>Resume Animation</strong></td><td>Continue from paused time</td></tr>
              <tr><td><strong>Set Animation Play Rate</strong></td><td>Speed multiplier (1.0 = normal)</td></tr>
              <tr><td><strong>Get Animation Duration</strong></td><td>Total length in seconds for a named animation</td></tr>
              <tr><td><strong>Get Current Animation Time</strong></td><td>Current playback position in seconds</td></tr>
              <tr><td><strong>Is Playing Animation</strong></td><td>Returns true if playing</td></tr>
              <tr><td><strong>Get Animation Names</strong></td><td>Returns all imported animation name strings</td></tr>
              <tr><td><strong>Has Animation</strong></td><td>Check if an animation name exists</td></tr>
              <tr><td><strong>Get Num Animations</strong></td><td>Count of imported animations</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "pivot-gizmos", title: "Pivot Gizmos" },
    },
  ],
};

export default runtimeFbxImportDocs;

