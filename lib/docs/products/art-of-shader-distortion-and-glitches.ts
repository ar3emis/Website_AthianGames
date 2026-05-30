import type { ProductDocumentation } from "../types";

const artOfShaderDistortionDocs: ProductDocumentation = {
  productSlug: "art-of-shader-distortion-and-glitches",
  sections: [
    {
      slug: "overview",
      title: "Overview",
      description: "40 customizable distortion and glitch shaders for Unreal Engine",
      content: `
        <section>
          <h3>What is Art of Shader — Distortion and Glitches?</h3>
          <p>A pack of <strong>40 customizable shaders</strong> designed to create stunning distortion and glitch effects in your Unreal Engine projects — from retro VHS tape artifacts to chromatic aberration, blocky pixelation, and scanline interlacing.</p>
          <div class="callout-info">
            <strong>ℹ️ Part of a suite:</strong> This pack is one of five in the Art of Shader collection. For the full library — including Film Effects, Stylized Post Process, and Toons — see the <a href="/docs/art-of-shader">unified AOS documentation</a>.
          </div>
        </section>
        <section>
          <h3>What's Included</h3>
          <div class="feature-grid">
            <div class="feature-card"><div class="fc-icon">📺</div><h4>VCR Glitch</h4><p>Retro VHS tape-style glitches with scanlines and tracking errors.</p></div>
            <div class="feature-card"><div class="fc-icon">🌈</div><h4>Chromatic Aberration</h4><p>RGB colour-split effects for digital glitch aesthetics.</p></div>
            <div class="feature-card"><div class="fc-icon">🟦</div><h4>Blocky Surface</h4><p>Pixelation and mosaic effects for low-res or censored looks.</p></div>
            <div class="feature-card"><div class="fc-icon">〰️</div><h4>Wavy Distortion</h4><p>Fluid wave-based distortions for underwater or heat-haze effects.</p></div>
            <div class="feature-card"><div class="fc-icon">📡</div><h4>Interlaced Glitch</h4><p>Scanline and interlacing effects from old CRT displays.</p></div>
            <div class="feature-card"><div class="fc-icon">💀</div><h4>Broken Pixels</h4><p>Dead pixel and screen damage simulation.</p></div>
          </div>
        </section>
        <section>
          <h3>Key Capabilities</h3>
          <ul>
            <li>Post-process blendable materials — drop into any Post Process Volume</li>
            <li>Niagara FX integration for particle-driven localization</li>
            <li>Mesh material support with world displacement</li>
            <li>AOS Blueprint Actor for combining and grouping effects</li>
            <li>Object space and screen space effect localization</li>
            <li>Runtime customization via Blueprint and UMG widgets</li>
          </ul>
        </section>
        <section>
          <h3>System Requirements</h3>
          <ul>
            <li>Unreal Engine or 5.0+</li>
            <li>Basic knowledge of post-process materials and material instances</li>
          </ul>
        </section>
      `,
      next: { slug: "getting-started", title: "Getting Started" },
    },
    {
      slug: "getting-started",
      title: "Getting Started",
      description: "Install the pack and apply your first effect",
      content: `
        <section>
          <h3>Installation</h3>
          <ol>
            <li>Purchase from the Unreal Engine Marketplace</li>
            <li>Install through the Epic Games Launcher Library</li>
            <li>Open your Unreal project — content appears in the Content Browser automatically (no plugin enable step required)</li>
          </ol>
        </section>
        <section>
          <h3>Applying Your First Effect</h3>
          <ol>
            <li>Place or select a <strong>Post Process Volume</strong> in your level; tick <strong>Infinite Extent (Unbound)</strong> for a global effect</li>
            <li>In its Details, expand <strong>Rendering Features → Post Process Materials</strong></li>
            <li>Click <strong>+</strong> next to <strong>Blendables</strong></li>
            <li>Pick any Art of Shader material instance (e.g. <code>MI_VCRGlitch</code>)</li>
            <li>The effect applies immediately in the viewport</li>
            <li>Double-click the material instance to tweak parameters</li>
          </ol>
          <div class="callout-tip">
            <strong>💡 Browse examples first:</strong> Open one of the demo maps in the <strong>Examples</strong> folder to see every effect in context before building your own setup.
          </div>
        </section>
        <section>
          <h3>Content Folder Structure</h3>
          <table>
            <thead><tr><th>Folder</th><th>Contents</th></tr></thead>
            <tbody>
              <tr><td><code>Materials</code></td><td>Base shader materials — usually don't edit these</td></tr>
              <tr><td><code>MaterialInstances</code></td><td>Parameterised presets ready to drop in</td></tr>
              <tr><td><code>Blueprints</code></td><td>AOS actor for combining effects</td></tr>
              <tr><td><code>Niagara</code></td><td>Particle systems for localised effects</td></tr>
              <tr><td><code>Examples</code></td><td>Demo maps showing each effect category</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "overview", title: "Overview" },
      next: { slug: "shader-types", title: "Shader Types" },
    },
    {
      slug: "shader-types",
      title: "Shader Types",
      description: "The 7 effect categories and when to use each",
      content: `
        <section>
          <h3>Effect Categories</h3>
          <div class="feature-grid">
            <div class="feature-card"><div class="fc-icon">📼</div><h4>VCR Glitch</h4><p>Retro VHS tape artifacts — tracking errors, colour bleed, scanline density. Perfect for horror or retro aesthetics.</p></div>
            <div class="feature-card"><div class="fc-icon">🌈</div><h4>Glitchy Spectrum</h4><p>Chromatic aberration and RGB split. Great for cyberpunk, hacking sequences, or digital damage.</p></div>
            <div class="feature-card"><div class="fc-icon">💾</div><h4>Artifacts</h4><p>Compression artifacts and pixelation — simulates a corrupted or damaged digital signal.</p></div>
            <div class="feature-card"><div class="fc-icon">〰️</div><h4>Wavy Distortion</h4><p>Fluid wave displacement — underwater environments, heat haze, psychedelic effects.</p></div>
            <div class="feature-card"><div class="fc-icon">📡</div><h4>Interlaced Glitch</h4><p>Old CRT interlacing and scanlines. Works well for surveillance cameras or retro screen aesthetics.</p></div>
            <div class="feature-card"><div class="fc-icon">🔲</div><h4>Blocky Surface</h4><p>Mosaic and pixelation blocks. Useful for censoring, low-res simulation, or stylised transitions.</p></div>
            <div class="feature-card"><div class="fc-icon">💀</div><h4>Broken Pixels</h4><p>Dead pixels and screen damage. Ideal for damaged HUD elements or device failure scenarios.</p></div>
          </div>
        </section>
        <section>
          <h3>Combining Effects</h3>
          <p>Place an <strong>AOS Blueprint Actor</strong> in your level to layer multiple effects with individual intensity controls and blend modes — all without managing multiple Post Process Volumes.</p>
          <div class="callout-tip">
            <strong>💡 Full combining guide:</strong> See the unified <a href="/docs/art-of-shader/combining-effects">AOS Combining Effects</a> page for the complete workflow, blend mode reference, and example presets.
          </div>
        </section>
      `,
      prev: { slug: "getting-started", title: "Getting Started" },
      next: { slug: "localization", title: "Localization" },
    },
    {
      slug: "localization",
      title: "Effect Localization",
      description: "Apply effects to specific objects or screen regions",
      content: `
        <section>
          <h3>Object Space — Custom Depth Stencil</h3>
          <p>Apply an effect to specific actors only:</p>
          <ol>
            <li>Select the actor(s) you want to affect</li>
            <li>In the Details panel, enable <strong>Render CustomDepth Pass</strong></li>
            <li>Set a unique <strong>Custom Depth Stencil Value</strong> (1–255)</li>
            <li>In the material instance, enable <strong>Use Object Localization</strong> and match the stencil value</li>
          </ol>
          <div class="callout-info">
            <strong>ℹ️ Include vs Exclude:</strong> <strong>Include</strong> — effect only on marked objects. <strong>Exclude</strong> — effect on everything except marked objects.
          </div>
        </section>
        <section>
          <h3>Screen Space — Region Masking</h3>
          <p>Divide the screen into regions with different effects. Define the region using UV coordinates (0–1 range), shape (Rectangle or Circle), and feather amount. Useful for binoculars/scope views, edge vignettes, or split-screen setups.</p>
        </section>
        <section>
          <h3>Niagara-Based Localization</h3>
          <p>Use provided AOS Niagara systems to place effects only where particles spawn. Combine with moving emitters for dynamic travelling glitches or impact distortions.</p>
        </section>
        <section>
          <h3>Depth-Based Separation</h3>
          <p>Enable <strong>Separate Background</strong> in the material instance and adjust the <strong>Depth Threshold</strong> slider to apply different effects to foreground vs. background objects.</p>
        </section>
      `,
      prev: { slug: "shader-types", title: "Shader Types" },
      next: { slug: "customization", title: "Customization" },
    },
    {
      slug: "customization",
      title: "Customization",
      description: "Parameters, custom presets, and runtime control",
      content: `
        <section>
          <h3>Common Material Parameters</h3>
          <table>
            <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Intensity</strong></td><td>Overall effect strength (0 = off, 1 = full)</td></tr>
              <tr><td><strong>Speed</strong></td><td>Animation playback speed for animated effects</td></tr>
              <tr><td><strong>Scale</strong></td><td>Size of the effect pattern</td></tr>
              <tr><td><strong>Color Tint</strong></td><td>Colour overlay applied on top of the effect</td></tr>
              <tr><td><strong>Blend Mode</strong></td><td>How the effect composites with the scene</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Effect-Specific Parameters</h3>
          <ul>
            <li><strong>VCR Glitch:</strong> Scanline density, tracking offset, colour bleed</li>
            <li><strong>Wavy:</strong> Wave amplitude, frequency, direction vector</li>
            <li><strong>Blocky Surface:</strong> Pixel block size, mosaic pattern type</li>
            <li><strong>Interlaced:</strong> Line thickness, interlace offset, flicker speed</li>
          </ul>
        </section>
        <section>
          <h3>Creating Custom Presets</h3>
          <ol>
            <li>Right-click a material in the Content Browser → <strong>Create Material Instance</strong></li>
            <li>Adjust parameters to create your custom look</li>
            <li>Save and reuse across your project</li>
          </ol>
        </section>
        <section>
          <h3>Runtime Control</h3>
          <p>Use the <strong>AOSRuntime</strong> blueprints to change effect parameters during gameplay — smooth transitions via timelines, event-driven spikes, health-based intensity, and more. See the unified <a href="/docs/art-of-shader/runtime-control">AOS Runtime Control</a> page for the full Blueprint reference.</p>
        </section>
      `,
      prev: { slug: "localization", title: "Localization" },
    },
  ],
};

export default artOfShaderDistortionDocs;

