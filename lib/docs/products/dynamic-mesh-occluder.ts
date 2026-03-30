import type { ProductDocumentation } from "../types";

const dynamicMeshOccluderDocs: ProductDocumentation = {
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
            <div class="feature-card"><div class="fc-icon">⚡</div><h4>Auto Detect Occlusion</h4><p>Automatically detect and remove triangles from the base skeletal mesh, based on clothing assets.</p></div>
            <div class="feature-card"><div class="fc-icon">🎨</div><h4>Manual Paint Override</h4><p>Paint individual triangles as hidden or visible to fine-tune the result with Brush, Select, or Lasso tools.</p></div>
            <div class="feature-card"><div class="fc-icon">👗</div><h4>Multiple Outfits</h4><p>Store different clothing combinations in one mapping table — one asset covers your whole character.</p></div>
            <div class="feature-card"><div class="fc-icon">🔷</div><h4>Runtime Mesh Swap</h4><p>A lightweight mapping table maps clothing to pre-baked meshes — swap the body at runtime with a single Blueprint call.</p></div>
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
              <tr><td><code>SK_OccludedBody</code></td><td>Body skeletal mesh with hidden triangles removed. Used by the runtime component instead of the original.</td></tr>
              <tr><td><code>DA_BodyOcclusionMap</code></td><td>Lookup table that maps a set of clothing meshes to their corresponding occluded body mesh.</td></tr>
            </tbody>
          </table>
          <div class="callout-tip">
            <strong>💡 One table, many outfits:</strong> Each time you run detection with a different clothing set and save, a new row is appended to the same <code>DA_BodyOcclusionMap</code>. You never need more than one mapping table per character.
          </div>
        </section>
      `,
      next: { slug: "installation", title: "Installation & Quick Start" },
    },
    {
      slug: "installation",
      title: "Installation & Quick Start",
      description: "Enable the plugin and get up and running in 6 steps",
      content: `
        <section>
          <h3>Enabling the Plugin</h3>
          <ol>
            <li><strong>Open Plugins window</strong> — In Unreal Editor go to <strong>Edit → Plugins</strong>, search for <em>Dynamic Mesh Occluder</em> and tick <strong>Enabled</strong>. Restart when prompted.</li>
            <li><strong>Verify</strong> — After restart, right-click any <strong>Skeletal Mesh</strong> in the Content Browser and look for <strong>Character Tools → Create Body Occlusion Mapping Data…</strong>. If the menu item appears, the plugin is active.</li>
          </ol>
        </section>
        <section>
          <h3>Quick Start — 6 Steps</h3>
          <h4>Step 1 — Open the Tool</h4>
          <p>In the Content Browser, right-click your <strong>body skeletal mesh</strong> and choose <strong>Character Tools → Create Body Occlusion Mapping Data…</strong>. This opens the standalone editor and pre-seeds it with your body mesh.</p>

          <h4>Step 2 — Assign Your Meshes</h4>
          <p>In the Settings panel on the left, drag your body skeletal mesh into <strong>Body Skeletal Mesh</strong> and add your clothing skeletal mesh(es) to the <strong>Clothing Meshes</strong> list.</p>
          <div class="callout-tip">
            <strong>💡 Skeleton requirement:</strong> All clothing meshes must share the same skeleton as the body mesh for correct pose matching in the viewport and at runtime.
          </div>

          <h4>Step 3 — Run Detection</h4>
          <p>Click <strong>Detect Occlusion</strong>. The tool scans the body mesh against the clothing and marks hidden triangles. The viewport updates automatically when done.</p>

          <h4>Step 4 — Review &amp; Paint</h4>
          <p>Click <strong>Toggle Preview</strong> to see hidden vs visible areas. If anything looks wrong, use <strong>Paint Mode</strong> to manually fix individual triangles.</p>

          <h4>Step 5 — Save</h4>
          <p>Set an <strong>Output Path</strong> (e.g. <code>/Game/OcclusionMaps</code>), give the assets names, then click <strong>Save Occluded Mesh</strong>. Two assets are created:</p>
          <ul>
            <li><strong>SK_OccludedBody</strong> — the body mesh with hidden triangles removed.</li>
            <li><strong>DA_BodyOcclusionMap</strong> — the lookup table used at runtime.</li>
          </ul>

          <h4>Step 6 — Wire Up Your Character</h4>
          <p>Add the <strong>Dynamic Mesh Occluder</strong> component to your character Blueprint, assign the mapping table, and call the Blueprint nodes when clothing is equipped or removed. See the <a href="/docs/dynamic-mesh-occluder/runtime-setup">Runtime Setup</a> section for details.</p>

          <div class="callout-info">
            <strong>ℹ️ Repeat for each outfit:</strong> For each clothing combination, load the clothing meshes, run detection, and save again. The new entry is appended to the same mapping table automatically.
          </div>
        </section>
      `,
      prev: { slug: "overview", title: "Overview" },
      next: { slug: "editor-tool", title: "Editor Tool Reference" },
    },
    {
      slug: "editor-tool",
      title: "Editor Tool Reference",
      description: "Settings panel, action buttons, preview animation, and viewport controls",
      content: `
        <section>
          <h3>Opening the Tool</h3>
          <div class="callout-info">
            <strong>ℹ️ How to open:</strong> Content Browser → right-click any <strong>Skeletal Mesh</strong> → <strong>Character Tools → Create Body Occlusion Mapping Data…</strong>. This is the only way to open the editor — the tool is not a data asset and cannot be launched by double-clicking an asset.
          </div>
        </section>
        <section>
          <h3>Settings Panel</h3>
          <p>The left panel holds all configuration for the current session.</p>
          <table>
            <thead><tr><th>Setting</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Body Skeletal Mesh</strong></td><td>The body mesh to process. Hidden triangles will be removed from this mesh.</td></tr>
              <tr><td><strong>Target Occlusion Mapping Data</strong></td><td>Read-only. Automatically set when the tool is opened via the right-click shortcut.</td></tr>
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
            <div class="feature-card"><div class="fc-icon">🔍</div><h4>Detect Occlusion</h4><p>Runs the full detection pass and updates the viewport. Can also refresh the baseline during Paint Mode without losing paint strokes.</p></div>
            <div class="feature-card"><div class="fc-icon">🧹</div><h4>Clear Detection</h4><p>Resets the detection baseline to fully visible. Manually painted strokes are preserved.</p></div>
            <div class="feature-card"><div class="fc-icon">👁️</div><h4>Toggle Preview</h4><p>Hides clothing meshes in the viewport to inspect the body with occluded regions highlighted.</p></div>
            <div class="feature-card"><div class="fc-icon">💾</div><h4>Save Occluded Mesh</h4><p>Saves the trimmed mesh and updates the runtime mapping table.</p></div>
          </div>
        </section>
        <section>
          <h3>Preview Animation</h3>
          <p>Assign an animation sequence in the <strong>Preview Animation</strong> category to see how meshes move together in different poses.</p>
          <table>
            <thead><tr><th>Control</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Animation Sequence</strong></td><td>Drag an <code>AnimSequence</code> here. Both body and clothing meshes play the same animation.</td></tr>
              <tr><td><strong>Play / Pause</strong></td><td>Start or stop playback in the viewport.</td></tr>
              <tr><td><strong>Timeline Scrub</strong></td><td>Drag to a specific frame to check a particular pose.</td></tr>
            </tbody>
          </table>
          <div class="callout-tip">
            <strong>💡 Check problem poses:</strong> Scrub to extreme poses (arms raised, legs spread) to verify the hidden boundary doesn't reveal gaps. Use Paint Mode to fix any issues found.
          </div>
        </section>
        <section>
          <h3>Viewport Controls</h3>
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
      next: { slug: "detection-settings", title: "Detection Settings" },
    },
    {
      slug: "detection-settings",
      title: "Detection Settings",
      description: "All occlusion detection parameters explained",
      content: `
        <section>
          <h3>Occlusion Settings</h3>
          <p>Found under <strong>Occlusion Settings</strong> in the Settings panel. The defaults work well for most characters — only adjust if you get unexpected results.</p>
          <div class="callout-tip">
            <strong>💡 Start with defaults:</strong> Only tweak settings if the result looks wrong after running detection.
          </div>
        </section>
        <section>
          <h3>Core Ray Settings</h3>
          <table>
            <thead><tr><th>Setting</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Ray Count</strong></td><td>128</td><td>Test directions per triangle. Higher = more accurate but slower. Raise to 256–512 for complex clothing.</td></tr>
              <tr><td><strong>Occlusion Threshold</strong></td><td>0.75</td><td>Fraction of the triangle that must be covered to mark it hidden. Lower hides more, higher hides less.</td></tr>
              <tr><td><strong>Ray Offset</strong></td><td>0.5</td><td>Push away from the surface to avoid self-intersection. Leave at default unless you see strange results.</td></tr>
              <tr><td><strong>Max Ray Distance</strong></td><td>100</td><td>How far each ray travels (cm). Increase for very thick clothing.</td></tr>
              <tr><td><strong>Cone Half Angle</strong></td><td>45°</td><td>Test cone angle around each triangle's normal. 30–45° for tight clothing, 60–75° for loose garments.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Boundary &amp; Post-Processing</h3>
          <table>
            <thead><tr><th>Setting</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Dilation Rings</strong></td><td>0</td><td>Expands the hidden region outward by this many triangle rows.</td></tr>
              <tr><td><strong>Max Hidden Island Size</strong></td><td>8</td><td>Removes isolated hidden patches smaller than this — prevents stray hidden spots on exposed skin.</td></tr>
              <tr><td><strong>Max Visible Island Size</strong></td><td>8</td><td>Fills small visible "holes" inside hidden regions.</td></tr>
              <tr><td><strong>Smoothing Iterations</strong></td><td>1</td><td>Blends the hidden/visible boundary for cleaner edges. Increase for smoother boundaries.</td></tr>
              <tr><td><strong>Hidden Neighbor Ratio</strong></td><td>0.85</td><td>Smoothing threshold. Higher preserves more visible area near edges.</td></tr>
              <tr><td><strong>Edge Erosion Rings</strong></td><td>1</td><td>Erodes the hidden boundary inward. Removes edge spikes.</td></tr>
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
              <tr><td><strong>Direct Normal Threshold</strong></td><td>0.40</td><td>Relaxed threshold when the direct normal ray confirmed clothing overhead.</td></tr>
              <tr><td><strong>Min Informative Ray Fraction</strong></td><td>0.15</td><td>Minimum ray fraction surviving self-occlusion filter before the relaxed threshold applies.</td></tr>
              <tr><td><strong>Use Bidirectional Containment</strong></td><td><span class="pill pill-green">On</span></td><td>Also checks inward rays to catch body geometry between two clothing layers.</td></tr>
              <tr><td><strong>Close Enclosed Regions</strong></td><td><span class="pill pill-green">On</span></td><td>Flood-fill that hides visible area fully surrounded by hidden geometry.</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "editor-tool", title: "Editor Tool Reference" },
      next: { slug: "paint-mode", title: "Paint Mode" },
    },
    {
      slug: "paint-mode",
      title: "Paint Mode",
      description: "Manually correct individual triangles after automatic detection",
      content: `
        <section>
          <h3>When to Use Paint Mode</h3>
          <p>If automatic detection marks something incorrectly — hiding fingers near a cuff, or leaving a patch visible inside a jacket — fix it manually with Paint Mode. Click <strong>Paint Occlusion</strong> to enter (button turns blue); click again to exit. Paint strokes are always preserved alongside automatic detection results.</p>
        </section>
        <section>
          <h3>Paint Tool Modes</h3>
          <div class="feature-grid">
            <div class="feature-card"><div class="fc-icon">🖌️</div><h4>Brush</h4><p>Classic sphere brush — <kbd>LMB</kbd> drag to hide, <kbd>Shift</kbd>+<kbd>LMB</kbd> to restore. Adjust radius with the <strong>Radius</strong> spinbox.</p></div>
            <div class="feature-card"><div class="fc-icon">⬜</div><h4>Select</h4><p>Drag a rectangle on screen. All triangles whose centroids fall inside are painted. <kbd>Shift</kbd>+drag to restore.</p></div>
            <div class="feature-card"><div class="fc-icon">✏️</div><h4>Lasso</h4><p>Draw a freehand polygon on screen. Triangles inside are painted. <kbd>Shift</kbd>+drag to restore.</p></div>
            <div class="feature-card"><div class="fc-icon">🔄</div><h4>Hit BackFace</h4><p>Checkbox in Brush mode. Paints opposite-facing triangles simultaneously — essential for MetaHuman inner-skin faces.</p></div>
          </div>
        </section>
        <section>
          <h3>Keyboard Shortcuts</h3>
          <table>
            <thead><tr><th>Action</th><th>Control</th></tr></thead>
            <tbody>
              <tr><td>Mark triangles as hidden</td><td><kbd>LMB</kbd> drag (Brush) or drag a region (Select / Lasso)</td></tr>
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
            <strong>ℹ️ Colour guide:</strong> <strong>White</strong> = triangle will be hidden in the saved mesh. <strong>Black</strong> = triangle will be kept visible. The preview shows the <em>combined</em> result of auto-detection + paint mask. Paint overrides always take priority.
          </div>
        </section>
      `,
      prev: { slug: "detection-settings", title: "Detection Settings" },
      next: { slug: "runtime-setup", title: "Runtime Setup" },
    },
    {
      slug: "runtime-setup",
      title: "Runtime Setup",
      description: "Adding the component to your character and calling Blueprint nodes",
      content: `
        <section>
          <h3>Adding the Component</h3>
          <ol>
            <li><strong>Add the component</strong> — Open your character Blueprint, click <strong>+ Add</strong> and search for <strong>Dynamic Mesh Occluder</strong>.</li>
            <li><strong>Assign the Mapping Table</strong> — In the Details panel set <strong>Mapping Table</strong> to your <code>DA_BodyOcclusionMap</code> asset.</li>
            <li><strong>Call Blueprint nodes</strong> — When clothing is equipped or removed, call the appropriate node (see table below).</li>
          </ol>
          <div class="callout-tip">
            <strong>💡 Body Component Name:</strong> If your character has more than one Skeletal Mesh Component, type the body component's name into <strong>Body Component Name</strong>. Leave blank to auto-detect the first <code>USkeletalMeshComponent</code>.
          </div>
        </section>
        <section>
          <h3>Blueprint Nodes</h3>
          <h4>Primary Actions</h4>
          <table>
            <thead><tr><th>Node</th><th>When to call</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Apply Occlusion For Clothing Components</strong></td><td>Player equips clothing</td><td>Pass in active clothing mesh components. Finds the matching occluded body and swaps it in.</td></tr>
              <tr><td><strong>Apply Occlusion For Clothing</strong></td><td>Player equips clothing (mesh assets)</td><td>Same as above but accepts Skeletal Mesh assets directly.</td></tr>
              <tr><td><strong>Restore Original Body Mesh</strong></td><td>All clothing removed</td><td>Swaps the body back to the original full mesh.</td></tr>
              <tr><td><strong>Apply Occlusion By Mapping Index</strong></td><td>Clothing managed by index/slot</td><td>Applies the occluded mesh at a specific index without passing clothing meshes.</td></tr>
            </tbody>
          </table>
          <h4>Component Management</h4>
          <table>
            <thead><tr><th>Node</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Set Body Component</strong></td><td>Explicitly assigns which skeletal mesh component to manage.</td></tr>
              <tr><td><strong>Get Body Component</strong> <span class="pill pill-blue">Pure</span></td><td>Returns the currently managed skeletal mesh component.</td></tr>
              <tr><td><strong>Get Original Body Mesh</strong> <span class="pill pill-blue">Pure</span></td><td>Returns the original un-occluded body mesh recorded at BeginPlay.</td></tr>
            </tbody>
          </table>
          <h4>Query &amp; Inspection</h4>
          <table>
            <thead><tr><th>Node</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Find Occluded Mesh For Clothing</strong> <span class="pill pill-blue">Pure</span></td><td>Returns which occluded mesh would be used — without swapping. For previewing or validation.</td></tr>
              <tr><td><strong>Find Occluded Mesh For Clothing Components</strong> <span class="pill pill-blue">Pure</span></td><td>Same as above but accepts Skeletal Mesh Components.</td></tr>
              <tr><td><strong>Get Mesh Mapping Count</strong> <span class="pill pill-blue">Pure</span></td><td>Returns how many clothing combinations are stored in the mapping table.</td></tr>
              <tr><td><strong>Get Clothing Meshes At Mapping Index</strong></td><td>Returns the clothing meshes at a given mapping index.</td></tr>
              <tr><td><strong>Get Occluded Mesh At Mapping Index</strong> <span class="pill pill-blue">Pure</span></td><td>Returns the occluded body mesh at a specific index without applying it.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Multiple Outfits</h3>
          <p>Store as many clothing combinations as you need in a single <code>DA_BodyOcclusionMap</code>. Each time you run detection with a different clothing set and save, a new entry is added.</p>
          <div class="callout-tip">
            <strong>💡 One entry per combination, not per piece:</strong> If you have <em>shirt + pants</em> and <em>shirt only</em>, generate and save each as a separate detection run. The plugin picks the right one automatically at runtime.
          </div>
        </section>
      `,
      prev: { slug: "paint-mode", title: "Paint Mode" },
      next: { slug: "tips", title: "Tips & Best Practices" },
    },
    {
      slug: "tips",
      title: "Tips & Best Practices",
      description: "Recommendations for getting the best results",
      content: `
        <section>
          <h3>Getting Better Results</h3>
          <div class="feature-grid">
            <div class="feature-card"><div class="fc-icon">🎯</div><h4>Start with Defaults</h4><p>The defaults handle most body + clothing combinations. Only adjust if the result looks wrong.</p></div>
            <div class="feature-card"><div class="fc-icon">📡</div><h4>More Rays for Complex Clothing</h4><p>Bump Ray Count to <strong>256</strong> or <strong>512</strong> if you see missed hidden patches or stray spots.</p></div>
            <div class="feature-card"><div class="fc-icon">🏝️</div><h4>Fix Floating Patches</h4><p>Increase <strong>Max Visible Island Size</strong> and ensure <strong>Close Enclosed Regions</strong> is on.</p></div>
            <div class="feature-card"><div class="fc-icon">✂️</div><h4>Smooth Jagged Edges</h4><p>Raise <strong>Smoothing Iterations</strong> to 3–5 and <strong>Edge Erosion Rings</strong> to 1–2.</p></div>
          </div>
        </section>
        <section>
          <h3>Pro Tips</h3>
          <div class="callout-tip">
            <strong>💡 Fingers or neckline incorrectly hidden?</strong><br/>
            Use Paint Mode with <strong>Select</strong> or <strong>Lasso</strong> to restore large areas in seconds.
          </div>
          <div class="callout-tip">
            <strong>💡 MetaHuman bodies: use Hit BackFace</strong><br/>
            MetaHuman body meshes have inner-skin faces. Enable <strong>Hit BackFace</strong> in Brush mode to paint both sides simultaneously.
          </div>
          <div class="callout-tip">
            <strong>💡 Paint-only mode</strong><br/>
            You can use Paint Mode without clothing meshes — assign a body mesh, paint the triangles you want hidden, and save.
          </div>
          <div class="callout-tip">
            <strong>💡 Preview animations</strong><br/>
            Assign an animation in <strong>Preview Animation</strong> and scrub through key poses to verify no gaps appear during motion.
          </div>
          <div class="callout-tip">
            <strong>💡 Same skeleton required</strong><br/>
            All clothing meshes must share the same skeleton as the body. Required for correct pose matching.
          </div>
          <div class="callout-warning">
            <strong>⚠️ Re-run detection after re-importing meshes</strong><br/>
            If you update a clothing mesh in your DCC tool and re-import, always re-run Detect Occlusion before saving.
          </div>
        </section>
      `,
      prev: { slug: "runtime-setup", title: "Runtime Setup" },
      next: { slug: "troubleshooting", title: "Troubleshooting" },
    },
    {
      slug: "troubleshooting",
      title: "Troubleshooting",
      description: "Solutions to common problems",
      content: `
        <section>
          <h3>Detection Issues</h3>
          <table>
            <thead><tr><th>Problem</th><th>Likely Cause</th><th>Solution</th></tr></thead>
            <tbody>
              <tr><td><strong>Detect Occlusion greyed out</strong></td><td>Body/clothing meshes not assigned, or Paint Mode active</td><td>Assign Body Skeletal Mesh and at least one Clothing Mesh. Exit Paint Mode.</td></tr>
              <tr><td><strong>Nothing is hidden after detection</strong></td><td>Meshes don't overlap, or Proximity Threshold too low</td><td>Check both meshes share the same origin and skeleton. Increase Clothing Proximity Threshold.</td></tr>
              <tr><td><strong>Too much is hidden — skin shows through clothing</strong></td><td>Threshold too low or cone angle too wide</td><td>Raise <strong>Occlusion Threshold</strong> (e.g. 0.85), lower <strong>Cone Half Angle</strong>, or increase <strong>Edge Erosion Rings</strong>.</td></tr>
              <tr><td><strong>Floating visible patches inside clothing</strong></td><td>Island removal not catching all patches</td><td>Increase <strong>Max Visible Island Size</strong> and enable <strong>Close Enclosed Regions</strong>.</td></tr>
              <tr><td><strong>Noisy or jagged boundary</strong></td><td>Not enough post-processing</td><td>Increase <strong>Smoothing Iterations</strong> (2–5), <strong>Dilation Rings</strong> (1–2), and <strong>Edge Erosion Rings</strong> (1–2).</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Runtime &amp; Blueprint Issues</h3>
          <table>
            <thead><tr><th>Problem</th><th>Likely Cause</th><th>Solution</th></tr></thead>
            <tbody>
              <tr><td><strong>Clothing doesn't match body pose</strong></td><td>Different skeleton</td><td>All clothing meshes must use the same skeleton as the body.</td></tr>
              <tr><td><strong>Blueprint node returns false / no swap</strong></td><td>Mismatched clothing meshes</td><td>Use the exact same mesh assets in Blueprint as used during detection. Matching is order-independent.</td></tr>
              <tr><td><strong>Save button greyed out</strong></td><td>Output Path empty, no detection/paint data, or Paint Mode active</td><td>Fill in Output Path. Run detection or paint triangles. Exit Paint Mode before saving.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Editor Issues</h3>
          <table>
            <thead><tr><th>Problem</th><th>Solution</th></tr></thead>
            <tbody>
              <tr><td><strong>Animation preview won't play</strong></td><td>Assign an <code>AnimSequence</code> in Preview Animation settings. Must use the same skeleton as the body mesh.</td></tr>
              <tr><td><strong>Want to hide geometry without clothing</strong></td><td>Assign body mesh only, enter Paint Occlusion, paint the triangles you want hidden, then Save.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Need More Help?</h3>
          <p><a href="/support">→ Open the Support Center</a> to submit a new ticket or track existing ones.</p>
          <div class="callout-tip">
            <strong>💡 Faster resolution:</strong> Include steps to reproduce and any relevant screenshots or error messages when submitting your ticket.
          </div>
        </section>
      `,
      prev: { slug: "tips", title: "Tips & Best Practices" },
    },
  ],
};

export default dynamicMeshOccluderDocs;

