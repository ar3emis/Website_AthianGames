import type { ProductDocumentation } from "../types";

// Shared documentation used by all Art of Shader packs
const artOfShaderDocs: ProductDocumentation = {
  productSlug: "art-of-shader",
  sections: [
    {
      slug: "overview",
      title: "Overview",
      description: "Introduction to the Art of Shader suite of post-process effects",
      content: `
        <section>
          <h2>Welcome to Art of Shader</h2>
          <p>Art of Shader is a comprehensive suite of post-process effect packs for Unreal Engine, designed to give your projects unique and stunning visual styles — distorted glitch effects, cinematic film looks, stylized cartoon aesthetics, and more.</p>
        </section>
        <section>
          <h3>The Complete Collection</h3>
          <div class="feature-grid">
            <div class="feature-card"><div class="fc-icon">📺</div><h4>Distortion &amp; Glitches</h4><p>40 customizable digital distortion and glitch effects.</p></div>
            <div class="feature-card"><div class="fc-icon">✨</div><h4>Advanced Distortion</h4><p>40 dynamic distortion shaders with enhanced capabilities and noise algorithms.</p></div>
            <div class="feature-card"><div class="fc-icon">🎬</div><h4>Film &amp; Special Effects</h4><p>47 cinematic and special effect materials.</p></div>
            <div class="feature-card"><div class="fc-icon">🎨</div><h4>Stylized Post Process</h4><p>40 materials for unique artistic looks — watercolour, oil paint, sketch, halftone.</p></div>
            <div class="feature-card"><div class="fc-icon">🖌️</div><h4>Toons</h4><p>16 toon-style cel-shaded effects with customizable outlines and shadow quantization.</p></div>
          </div>
        </section>
        <section>
          <h3>Core Capabilities</h3>
          <ul>
            <li>Over <strong>180 parameterised</strong> post-process materials across the suite</li>
            <li><strong>AOS Blueprint Actor</strong> for combining and grouping effects without extra volumes</li>
            <li><strong>Object space and screen space localization</strong> — apply effects to specific objects or regions</li>
            <li><strong>Niagara FX integration</strong> for particle-driven effects</li>
            <li><strong>Runtime UMG controls</strong> — colour wheels, sliders, preset switchers</li>
            <li>Compatible with Unreal Engine and 5.0+</li>
          </ul>
        </section>
        <section>
          <h3>What Makes It Unique</h3>
          <p>Unlike simple shader packs, Art of Shader provides a <strong>complete framework</strong> for managing, combining, and localizing post-process effects. The AOS Blueprint Actor lets you layer effects, control intensity, and localize them — all without writing code.</p>
        </section>
      `,
      next: { slug: "getting-started", title: "Getting Started" },
    },
    {
      slug: "getting-started",
      title: "Getting Started",
      description: "Install any AOS pack and apply your first effect",
      content: `
        <section>
          <h3>Installation</h3>
          <p>Each Art of Shader pack is available separately on the Marketplace, or as part of the complete Megapack bundle.</p>
          <ol>
            <li>Purchase your desired pack(s) from the Unreal Engine Marketplace</li>
            <li>Open the Epic Games Launcher and navigate to your Library</li>
            <li>Click <strong>"Install to Engine"</strong> and select your Unreal Engine version</li>
            <li>Open your Unreal project — the AOS content folder appears in the Content Browser automatically</li>
          </ol>
        </section>
        <section>
          <h3>Applying Your First Effect</h3>
          <ol>
            <li>Create or select a <strong>Post Process Volume</strong>; tick <strong>Infinite Extent (Unbound)</strong> for global coverage</li>
            <li>In Details → <strong>Rendering Features → Post Process Materials → Blendables</strong>, click <strong>+</strong></li>
            <li>Select any AOS material instance (e.g. <code>MI_VCRGlitch</code>)</li>
            <li>The effect appears immediately in the viewport</li>
            <li>Double-click the material instance to adjust its parameters</li>
          </ol>
          <div class="callout-tip">
            <strong>💡 Start with Examples:</strong> Open a demo map in the <strong>Examples</strong> folder to see every effect in context before building your setup.
          </div>
        </section>
        <section>
          <h3>Content Organisation</h3>
          <table>
            <thead><tr><th>Folder</th><th>Contents</th></tr></thead>
            <tbody>
              <tr><td><code>Materials</code></td><td>Base shader materials — usually don't edit these</td></tr>
              <tr><td><code>MaterialInstances</code></td><td>Parameterised presets ready to use</td></tr>
              <tr><td><code>Blueprints</code></td><td>AOS actors and helper blueprints</td></tr>
              <tr><td><code>Niagara</code></td><td>Particle system effects and module scripts</td></tr>
              <tr><td><code>Textures</code></td><td>Noise textures and lookup tables</td></tr>
              <tr><td><code>Examples</code></td><td>Demo maps showing each effect category</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "overview", title: "Overview" },
      next: { slug: "effect-categories", title: "Effect Categories" },
    },
    {
      slug: "effect-categories",
      title: "Effect Categories",
      description: "All available effect categories and when to use each",
      content: `
        <section>
          <h3>Distortion &amp; Glitch Effects</h3>
          <p>Perfect for sci-fi, cyberpunk, horror, or any project needing digital corruption effects.</p>
          <ul>
            <li><strong>VCR Glitch</strong> — Retro VHS tape artifacts, scanlines, tracking errors</li>
            <li><strong>Chromatic Aberration</strong> — RGB colour split for digital glitch aesthetics</li>
            <li><strong>Digital Artifacts</strong> — Compression artifacts and pixelation</li>
            <li><strong>Interlaced Glitch</strong> — Scanline effects from old CRT displays</li>
            <li><strong>Block Distortion</strong> — Chunky pixel blocks and mosaic effects</li>
          </ul>
        </section>
        <section>
          <h3>Film &amp; Cinematic Effects</h3>
          <p>Professional-grade effects for cinematic looks and special visual treatments.</p>
          <ul>
            <li><strong>Film Grain</strong> — Authentic film grain simulation</li>
            <li><strong>Vignette</strong> — Lens vignetting</li>
            <li><strong>Rain Shader</strong> — Realistic rain on the camera lens</li>
            <li><strong>Night Vision</strong> — Military-style night vision goggles</li>
            <li><strong>Thermal Vision</strong> — Heat signature visualisation</li>
          </ul>
        </section>
        <section>
          <h3>Stylized &amp; Artistic Effects</h3>
          <p>Transform realistic scenes into stylized art.</p>
          <ul>
            <li><strong>Watercolour</strong> — Paint-like watercolour rendering</li>
            <li><strong>Oil Paint</strong> — Impressionist oil painting style</li>
            <li><strong>Sketch</strong> — Hand-drawn pencil look</li>
            <li><strong>Halftone</strong> — Comic book dot patterns</li>
          </ul>
        </section>
        <section>
          <h3>Toon Effects</h3>
          <p>Dedicated cel-shading for anime and cartoon styles — customizable outline thickness, shadow quantization, rim lighting, and colour palette reduction.</p>
        </section>
        <section>
          <h3>Choosing the Right Effect</h3>
          <ol>
            <li><strong>Match your genre</strong> — Glitch for cyberpunk, film effects for realism, toon for anime</li>
            <li><strong>Consider performance</strong> — More complex effects cost more GPU time</li>
            <li><strong>Test in context</strong> — Effects look different with different lighting and scene content</li>
            <li><strong>Stay subtle</strong> — Often less is more for professional results</li>
          </ol>
        </section>
      `,
      prev: { slug: "getting-started", title: "Getting Started" },
      next: { slug: "combining-effects", title: "Combining Effects" },
    },
    {
      slug: "combining-effects",
      title: "Combining Effects",
      description: "Layer and blend multiple effects using the AOS Blueprint Actor",
      content: `
        <section>
          <h2>The AOS Blueprint Actor</h2>
          <p>The central tool for combining, grouping, and managing multiple post-process effects. Place one actor to control many effects — no need for multiple Post Process Volumes.</p>
        </section>
        <section>
          <h3>Effect Groups</h3>
          <table>
            <thead><tr><th>Group</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td><strong>Main Effects</strong></td><td>Primary visuals applied to main scene objects, controlled by scene depth</td></tr>
              <tr><td><strong>Background Effects</strong></td><td>Effects only on distant background elements, depth-threshold controlled</td></tr>
              <tr><td><strong>Screen Effects</strong></td><td>Full-screen effects — camera lens, overall colour grading, screen-space distortions</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Blend Modes</h3>
          <table>
            <thead><tr><th>Mode</th><th>Behaviour</th></tr></thead>
            <tbody>
              <tr><td><strong>Additive</strong></td><td>Effects add together (can become bright)</td></tr>
              <tr><td><strong>Multiply</strong></td><td>Effects multiply (darkens)</td></tr>
              <tr><td><strong>Overlay</strong></td><td>Balanced blend of both</td></tr>
              <tr><td><strong>Screen</strong></td><td>Brightening blend</td></tr>
              <tr><td><strong>Linear Burn</strong></td><td>Darkening blend</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Example Presets</h3>
          <h4>Cyberpunk Hacker Vision</h4>
          <pre><code>Main:       Chromatic Aberration (low), Scanlines (medium)
Background: Color Shift (blue/cyan), Digital Noise
Screen:     Vignette, Film Grain</code></pre>
          <h4>Horror Atmosphere</h4>
          <pre><code>Main:       Desaturate, VCR Glitch (subtle)
Background: Fog / Depth Blur
Screen:     Heavy Vignette, Film Grain (heavy), Color Grade (green/gray)</code></pre>
          <h4>Stylized Cartoon</h4>
          <pre><code>Main:       Cel Shader, Outlines
Background: Watercolor texture
Screen:     Color Palette Reduction, Slight Halftone</code></pre>
        </section>
        <section>
          <h3>Performance Guidelines</h3>
          <ul>
            <li>Aim for 3–5 active effects for best performance</li>
            <li>Disable effects that aren't visually contributing</li>
            <li>Profile on target hardware, not just the editor</li>
          </ul>
        </section>
      `,
      prev: { slug: "effect-categories", title: "Effect Categories" },
      next: { slug: "localization", title: "Effect Localization" },
    },
    {
      slug: "localization",
      title: "Effect Localization",
      description: "Apply effects to specific objects or screen regions",
      content: `
        <section>
          <h2>What is Effect Localization?</h2>
          <p>Localization lets you apply post-process effects to <em>specific parts</em> of your scene — certain objects, screen regions, depth layers, or particle-defined areas.</p>
        </section>
        <section>
          <h3>Object Space — Custom Depth Stencil</h3>
          <ol>
            <li>Select actor(s) → enable <strong>Render CustomDepth Pass</strong></li>
            <li>Set a <strong>Custom Depth Stencil Value</strong> (1–255)</li>
            <li>In the material instance, enable <strong>Use Object Localization</strong> and match the value</li>
          </ol>
          <p>Use <strong>Include</strong> mode to affect only marked objects, or <strong>Exclude</strong> to affect everything else.</p>
        </section>
        <section>
          <h3>Screen Space — Region Masking</h3>
          <table>
            <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Center</strong></td><td>UV coordinate of the region center (0–1)</td></tr>
              <tr><td><strong>Size</strong></td><td>Width and height of the region (0–1)</td></tr>
              <tr><td><strong>Feather</strong></td><td>Edge softness — 0 = hard, 1 = very soft</td></tr>
              <tr><td><strong>Invert</strong></td><td>Apply outside the region instead of inside</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Depth-Based Separation</h3>
          <p>Enable <strong>Separate Background</strong> and set a <strong>Depth Threshold</strong> to apply different effects to foreground vs. background objects.</p>
        </section>
        <section>
          <h3>Niagara-Based Localization</h3>
          <p>Use AOS Niagara systems to render effects only where particles spawn — move the emitter to animate the effect's position dynamically.</p>
        </section>
      `,
      prev: { slug: "combining-effects", title: "Combining Effects" },
      next: { slug: "runtime-control", title: "Runtime Control" },
    },
    {
      slug: "runtime-control",
      title: "Runtime Control",
      description: "Control and animate effects during gameplay via Blueprint",
      content: `
        <section>
          <h2>Dynamic Effect Control</h2>
          <p>AOS effects can be driven by gameplay events — health, speed, environment, power-ups — using the <strong>AOSRuntime</strong> blueprint functions.</p>
        </section>
        <section>
          <h3>Common Patterns</h3>
          <h4>Damage Feedback</h4>
          <pre><code>Event PlayerDamaged
→ Set Scalar Parameter Value "GlitchIntensity" = 1.0
→ Delay 0.5s
→ Set Scalar Parameter Value "GlitchIntensity" = 0.0</code></pre>
          <h4>Speed-Based Motion Blur</h4>
          <pre><code>Event Tick
→ Get Velocity → Vector Length
→ Map Range (0, MaxSpeed) → (0, 1)
→ Set Scalar Parameter Value "MotionBlur" = mapped value</code></pre>
          <h4>Underwater Distortion</h4>
          <pre><code>Event EnterWater
→ Set Vector Parameter Value "DistortionColor" = (0, 0.3, 0.5)
→ Set Scalar Parameter Value "DistortionAmount" = 0.8

Event ExitWater
→ Set Scalar Parameter Value "DistortionAmount" = 0.0</code></pre>
        </section>
        <section>
          <h3>UMG Widget Controls</h3>
          <ul>
            <li><strong>Colour Wheel Widget</strong> — Real-time colour picker with hue/saturation/value</li>
            <li><strong>Slider Widget</strong> — Precise scalar parameter control with live preview</li>
            <li><strong>Preset Switcher</strong> — Toggle between saved configurations with optional blending</li>
          </ul>
        </section>
        <section>
          <h3>Best Practices</h3>
          <ul>
            <li>Use Timeline nodes for smooth parameter transitions</li>
            <li>Clamp values to valid ranges to avoid unexpected results</li>
            <li>Provide a player-facing intensity slider for accessibility</li>
            <li>Don't update parameters every Tick if an event-driven approach works instead</li>
          </ul>
        </section>
      `,
      prev: { slug: "localization", title: "Effect Localization" },
      next: { slug: "troubleshooting", title: "Troubleshooting" },
    },
    {
      slug: "troubleshooting",
      title: "Troubleshooting",
      description: "Common issues and their solutions",
      content: `
        <section>
          <h3>Common Issues</h3>
          <table>
            <thead><tr><th>Problem</th><th>Solution</th></tr></thead>
            <tbody>
              <tr><td><strong>Effect not visible</strong></td><td>Check Post Process Volume is Unbound or player is inside it; verify Blendables array contains the material; check Intensity > 0 and Blend Weight = 1.0.</td></tr>
              <tr><td><strong>Performance drops</strong></td><td>Reduce active effect count; lower sample counts in parameters; use Unreal's GPU profiler to find bottlenecks; disable effects based on scalability settings.</td></tr>
              <tr><td><strong>Looks different in packaged build</strong></td><td>Check post-process scalability settings; verify shader model compatibility for target platform; ensure all shaders compiled during packaging.</td></tr>
              <tr><td><strong>Localization not working</strong></td><td>Verify Render CustomDepth Pass is enabled; confirm stencil values match between actor and material; use the Custom Depth visualization mode to debug.</td></tr>
              <tr><td><strong>Runtime parameter changes have no effect</strong></td><td>Must use a <em>Dynamic Material Instance</em> — not the material asset directly. Parameter names are case-sensitive.</td></tr>
              <tr><td><strong>Effects flickering</strong></td><td>Check for two Post Process Volumes with the same priority; TAA can interact badly with some effects — try adjusting TAA settings.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Known Limitations</h3>
          <ul>
            <li>Some effects require shader model 5.0 or higher</li>
            <li>Mobile platforms may need effect-specific optimisations</li>
            <li>Maximum 128 blendable materials per Post Process Volume</li>
            <li>Custom depth stencil limited to 256 unique values</li>
          </ul>
        </section>
        <section>
          <h3>Getting Help</h3>
          <p>If your issue isn't covered above, <a href="/support">open a support ticket</a> or reach us on Discord. Include your Unreal Engine version, AOS pack version, platform, steps to reproduce, and any relevant screenshots.</p>
        </section>
      `,
      prev: { slug: "runtime-control", title: "Runtime Control" },
    },
  ],
};

export default artOfShaderDocs;

