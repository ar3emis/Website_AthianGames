import type { ProductDocumentation } from "../types";

const ultimateAIMeshGeneratorDocs: ProductDocumentation = {
  productSlug: "ultimate-ai-mesh-generator",
  sections: [
    {
      slug: "overview",
      title: "Overview",
      description: "What the editor tool does",
      content: `
        <section>
          <h3>What it does</h3>
          <p><strong>Ultimate AI Mesh Generator</strong> lets you submit mesh generation jobs from inside the editor, monitor them, import completed results, and place them into your level as regular Static Mesh assets.</p>
          <p>You can use text prompts, a single reference image, multiple reference images, or retexture workflows depending on the selected provider. The tool also keeps local task history so past generations can be refreshed or imported later.</p>
        </section>
        <section>
          <h3>Supported workflows</h3>
          <table>
            <thead><tr><th>Workflow</th><th>What you provide</th><th>Result</th></tr></thead>
            <tbody>
              <tr><td>Text to 3D</td><td>A written prompt</td><td>A generated mesh based on the description</td></tr>
              <tr><td>Image to 3D</td><td>One reference image</td><td>A generated mesh based on the image</td></tr>
              <tr><td>Multi-image to 3D</td><td>Front, back, left, and right references where supported</td><td>A more guided mesh result for complex subjects</td></tr>
              <tr><td>Retexture</td><td>A previous supported mesh or selected project mesh plus a new style prompt/image</td><td>New texture/material results for the existing shape</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Provider support</h3>
          <table>
            <thead><tr><th>Provider</th><th>Text</th><th>Image</th><th>Multi-image</th><th>Retexture</th></tr></thead>
            <tbody>
              <tr><td>Hitem3D</td><td>No</td><td>Yes</td><td>Yes</td><td>No</td></tr>
              <tr><td>Meshy</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
              <tr><td>Tripo3D</td><td>Yes</td><td>Yes</td><td>Yes</td><td>No</td></tr>
              <tr><td>Triverse</td><td>Yes</td><td>Yes</td><td>No</td><td>No</td></tr>
              <tr><td>Rodin</td><td>Yes</td><td>Yes</td><td>Yes</td><td>No</td></tr>
            </tbody>
          </table>
          <p>The tool disables unsupported modes automatically after you choose a provider.</p>
        </section>
      `,
      next: { slug: "setup", title: "Setup" },
    },
    {
      slug: "setup",
      title: "Setup",
      description: "Credentials and output settings",
      content: `
        <section>
          <h3>Enable the plugin</h3>
          <ol>
            <li>Open <strong>Edit > Plugins</strong>.</li>
            <li>Search for <strong>Ultimate AI Mesh Generator</strong>.</li>
            <li>Enable the plugin and restart the editor if prompted.</li>
            <li>Open the tool from the toolbar or window menu entry for the AI Mesh Generator panel.</li>
          </ol>
        </section>
        <section>
          <h3>Add provider credentials</h3>
          <ol>
            <li>Open <strong>Edit > Project Settings</strong>.</li>
            <li>Find <strong>Ultimate AI Mesh Generator</strong>.</li>
            <li>Fill in only the providers you plan to use.</li>
            <li>Save settings, then return to the AI Mesh Generator panel.</li>
          </ol>
          <table>
            <thead><tr><th>Provider</th><th>Required fields</th></tr></thead>
            <tbody>
              <tr><td>Hitem3D</td><td>Client ID, Client Secret, optional API Base URL</td></tr>
              <tr><td>Meshy</td><td>API Key, optional API Base URL, default model and texture settings</td></tr>
              <tr><td>Tripo3D</td><td>API Key, optional API Base URL, default model version</td></tr>
              <tr><td>Triverse</td><td>API Key, optional API Base URL, default model version, polygon limit, texture size</td></tr>
              <tr><td>Rodin</td><td>API Key, optional API Base URL, default tier</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>General settings</h3>
          <table>
            <thead><tr><th>Setting</th><th>What it does</th></tr></thead>
            <tbody>
              <tr><td>Output Content Path</td><td>Root Content Browser folder where imported meshes, textures, and materials are created. Default: <code>/Game/AI_Meshes</code>.</td></tr>
              <tr><td>Poll Interval</td><td>How often the editor checks active task progress.</td></tr>
            </tbody>
          </table>
          <p>Credentials are stored per project user, so they are not meant to be shared through source control.</p>
        </section>
      `,
      prev: { slug: "overview", title: "Overview" },
      next: { slug: "generate", title: "Generate Meshes" },
    },
    {
      slug: "generate",
      title: "Generate Meshes",
      description: "Text, image, and multi-image steps",
      content: `
        <section>
          <h3>Open the Generate tab</h3>
          <ol>
            <li>Open the AI Mesh Generator panel.</li>
            <li>Select a provider from the provider dropdown.</li>
            <li>Pick the mode you want: <strong>Text to 3D</strong>, <strong>Image to 3D</strong>, <strong>Multi-Image</strong>, or <strong>Retexture</strong>.</li>
            <li>If a mode is disabled, switch to a provider that supports it.</li>
          </ol>
        </section>
        <section>
          <h3>Text to 3D</h3>
          <ol>
            <li>Choose a provider that supports text generation.</li>
            <li>Enter a clear prompt describing the object, material, style, and scale.</li>
            <li>Add a negative prompt if the selected provider exposes one.</li>
            <li>Choose quality, topology, texture, or model options shown for that provider.</li>
            <li>Click <strong>Generate</strong> and watch the progress log.</li>
          </ol>
        </section>
        <section>
          <h3>Image to 3D</h3>
          <ol>
            <li>Choose <strong>Image to 3D</strong>.</li>
            <li>Add one image by browsing, dragging from Explorer, or pasting from the clipboard.</li>
            <li>Use a clean image with the object visible and minimal background clutter.</li>
            <li>Adjust provider options, then click <strong>Generate</strong>.</li>
          </ol>
        </section>
        <section>
          <h3>Multi-image to 3D</h3>
          <ol>
            <li>Choose <strong>Multi-Image</strong> with a provider that supports it.</li>
            <li>Add front, back, left, and right views when available.</li>
            <li>Keep all images of the same subject, with consistent lighting and scale.</li>
            <li>Generate and monitor the task until it finishes.</li>
          </ol>
        </section>
      `,
      prev: { slug: "setup", title: "Setup" },
      next: { slug: "import-placement", title: "Import and Placement" },
    },
    {
      slug: "import-placement",
      title: "Import and Placement",
      description: "Turn completed results into project assets",
      content: `
        <section>
          <h3>Automatic import</h3>
          <p>When a task completes, the tool can download the mesh and any separate texture maps returned by the provider. The result is organized into Content Browser folders for meshes, textures, and materials under the configured output path.</p>
          <table>
            <thead><tr><th>Imported item</th><th>How it is used</th></tr></thead>
            <tbody>
              <tr><td>Static Mesh</td><td>The generated object you can place, duplicate, and use like a normal mesh asset.</td></tr>
              <tr><td>Textures</td><td>Base color, normal, roughness, metallic, or other maps when the provider returns them.</td></tr>
              <tr><td>Material assets</td><td>Automatically created or updated so the mesh can display with its generated texture set.</td></tr>
              <tr><td>Preview thumbnail</td><td>Saved locally for task and history display when available.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Use a spawn target</h3>
          <ol>
            <li>Search for <strong>AI Mesh Spawn Target</strong> in the Place Actors panel.</li>
            <li>Drag it into the level and position it where the generated mesh should appear.</li>
            <li>Select the spawn target before starting a generation or import.</li>
            <li>When the result imports, the mesh can be placed at that target location.</li>
          </ol>
        </section>
        <section>
          <h3>Tasks and history</h3>
          <table>
            <thead><tr><th>Area</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td>Tasks</td><td>Shows active and recent local tasks with progress, errors, and import actions.</td></tr>
              <tr><td>History</td><td>Shows saved task records, thumbnails, re-import buttons, refresh actions, and file save options.</td></tr>
              <tr><td>Account sync</td><td>Where supported, the tool can pull past provider task history into the local history view.</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "generate", title: "Generate Meshes" },
      next: { slug: "provider-options", title: "Provider Options" },
    },
    {
      slug: "provider-options",
      title: "Provider Options",
      description: "Common controls shown in the panel",
      content: `
        <section>
          <h3>Common controls</h3>
          <table>
            <thead><tr><th>Control</th><th>What it changes</th></tr></thead>
            <tbody>
              <tr><td>Model / version</td><td>Which provider model is used for generation.</td></tr>
              <tr><td>Output format</td><td>The downloaded mesh format when the provider exposes a choice.</td></tr>
              <tr><td>Optimize for real-time use</td><td>Uses lower or cleaner mesh settings where supported.</td></tr>
              <tr><td>Generate Texture</td><td>Requests textures when the provider supports textured output.</td></tr>
              <tr><td>PBR maps</td><td>Requests additional maps such as normal, roughness, and metallic where available.</td></tr>
              <tr><td>HD / 4K Texture</td><td>Requests higher-resolution texture output where supported.</td></tr>
              <tr><td>Auto-size</td><td>Lets supported providers estimate an appropriate object scale.</td></tr>
              <tr><td>Balance and estimated cost</td><td>Shows account balance or approximate cost when the provider supports it.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Retexture workflow</h3>
          <ol>
            <li>Choose <strong>Retexture</strong> with a provider that supports it.</li>
            <li>Select a past supported task or a project Static Mesh source when available.</li>
            <li>Add a style image, a style prompt, or both.</li>
            <li>Generate the new texture result.</li>
            <li>Import the result and review the updated material on the mesh.</li>
          </ol>
        </section>
      `,
      prev: { slug: "import-placement", title: "Import and Placement" },
      next: { slug: "troubleshooting", title: "Troubleshooting" },
    },
    {
      slug: "troubleshooting",
      title: "Troubleshooting",
      description: "Common issues",
      content: `
        <section>
          <h3>Checks before regenerating</h3>
          <table>
            <thead><tr><th>Problem</th><th>What to check</th></tr></thead>
            <tbody>
              <tr><td>Generate button disabled</td><td>Provider credentials are missing, the selected mode is unsupported, or required prompt/image input is empty.</td></tr>
              <tr><td>Task fails quickly</td><td>Check API key, account balance, provider service status, and whether the image meets the provider's input rules.</td></tr>
              <tr><td>Import finishes but mesh looks untextured</td><td>Confirm texture generation was enabled and the provider returned separate texture maps or embedded texture data.</td></tr>
              <tr><td>History item will not import</td><td>Refresh the task first so the tool can request a fresh download URL from the provider.</td></tr>
              <tr><td>Mesh is not placed in the level</td><td>Select or place an AI Mesh Spawn Target before importing if you want automatic placement.</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "provider-options", title: "Provider Options" },
    },
  ],
};

export default ultimateAIMeshGeneratorDocs;
