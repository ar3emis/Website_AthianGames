import type { ProductDocumentation } from "../types";

const proceduralSkyboxDocs: ProductDocumentation = {
  productSlug: "procedural-skybox",
  sections: [
    {
      slug: "overview",
      title: "Overview",
      description: "What Procedural Skybox adds to your project",
      content: `
        <section>
          <h3>What It Does</h3>
          <p><strong>Procedural Skybox</strong> gives you a ready-to-place sky actor for dynamic skies, time of day, sun and moon lighting, atmosphere, fog, skylight capture, post process exposure, and procedural sky materials. It is designed to be controlled from the Details panel and from Blueprint.</p>
          <p>The plugin includes the <strong>SkyBox Time of Day Actor</strong>, demo maps, procedural sky materials, panning cloud materials, layered noise material presets, a procedural moon material, sky sphere meshes, color curves, and reusable material functions.</p>
        </section>
        <section>
          <h3>Main Capabilities</h3>
          <div class="feature-grid">
            <div class="feature-card"><div class="fc-icon">DAY</div><h4>Time Of Day Actor</h4><p>Drive the sun, sky colors, stars, moon, fog, exposure, and skylight from one placed actor.</p></div>
            <div class="feature-card"><div class="fc-icon">BP</div><h4>Blueprint Control</h4><p>Set time, read sun and moon direction, switch planet presets, update the sky, and tune performance at runtime.</p></div>
            <div class="feature-card"><div class="fc-icon">SKY</div><h4>Procedural Sky Materials</h4><p>Use included sky materials for panning clouds, stars, layered noise skies, nebula-like patterns, and simple procedural sky looks.</p></div>
            <div class="feature-card"><div class="fc-icon">MOON</div><h4>Moon Rendering</h4><p>Enable a moon mesh with phase, brightness, color, visible size, surface detail, and a separate moon light for night scenes.</p></div>
            <div class="feature-card"><div class="fc-icon">ATM</div><h4>Atmosphere And Fog</h4><p>Customize Rayleigh color, haze, ozone absorption, atmosphere height, horizon haze, height fog, and volumetric fog.</p></div>
            <div class="feature-card"><div class="fc-icon">OPT</div><h4>Performance Options</h4><p>Control visual update frequency, skylight recapture interval, and aggressive update reduction for runtime scenes.</p></div>
          </div>
        </section>
        <section>
          <h3>Included Content</h3>
          <table>
            <thead><tr><th>Content Area</th><th>Included Assets</th><th>Use</th></tr></thead>
            <tbody>
              <tr><td><strong>Maps</strong></td><td>DemoScene, PanningClouds, TimeOfDay, trailer scratch maps</td><td>Open these first to inspect finished setups and lighting transitions.</td></tr>
              <tr><td><strong>Materials</strong></td><td>M_LayeredProceduralSky, M_ProceduralSkySimple, M_PanningClouds, M_Moon</td><td>Main editable materials for sky sphere, clouds, stars, and moon visuals.</td></tr>
              <tr><td><strong>Material Instances</strong></td><td>Moon, panning cloud, simple sky, nebula, Musgrave, Perlin-Worley, and Simplex presets</td><td>Duplicate a preset, adjust parameters, and assign it to the sky actor.</td></tr>
              <tr><td><strong>Material Layers</strong></td><td>Star field, layered Musgrave, layered nebula, layered Perlin-Worley, layered Simplex, northern lights</td><td>Build custom layered sky looks without starting from an empty material.</td></tr>
              <tr><td><strong>Meshes</strong></td><td>GeoSphere, SM_GeoSphere, SM_MoonMesh</td><td>Sphere meshes used by the sky and moon setup.</td></tr>
              <tr><td><strong>Color Curves</strong></td><td>SkyBox curve atlas and four sky color curves</td><td>Curve-driven color variation for procedural sky materials.</td></tr>
            </tbody>
          </table>
        </section>
      `,
      next: { slug: "quick-start", title: "Quick Start" },
    },
    {
      slug: "quick-start",
      title: "Quick Start",
      description: "Place the actor and create your first dynamic sky",
      content: `
        <section>
          <h3>Open An Example First</h3>
          <ol>
            <li>Enable the plugin in your project.</li>
            <li>Enable <strong>Show Plugin Content</strong> in the Content Browser if the SkyBoxGenerator folder is hidden.</li>
            <li>Open <strong>Content / Maps / TimeOfDay</strong> to inspect a configured day and night setup.</li>
            <li>Open <strong>Content / Maps / PanningClouds</strong> to inspect the cloud material setup.</li>
          </ol>
        </section>
        <section>
          <h3>Create A Sky In Your Level</h3>
          <ol>
            <li>Place <strong>SkyBox Time of Day Actor</strong> in the level.</li>
            <li>Select the actor and set <strong>Time Of Day</strong> to preview the sun position.</li>
            <li>Make sure <strong>Enable Sky Sphere</strong>, <strong>Enable Sky Light</strong>, <strong>Enable Height Fog</strong>, and <strong>Enable Post Process</strong> are set the way your scene needs.</li>
            <li>Assign a sky material or material instance to <strong>Sky Sphere Material</strong>. Start with <strong>MI_PanningClouds</strong> or <strong>MI_ProceduralSkySimple</strong>.</li>
            <li>Set <strong>Enable Time Of Day Cycle</strong> if the sky should move during play.</li>
            <li>Set <strong>Time Speed</strong>. Higher values make the day progress faster.</li>
            <li>Click Play and confirm the sun, sky color, stars, moon, fog, and exposure update as expected.</li>
          </ol>
        </section>
        <section>
          <h3>Recommended First Tweaks</h3>
          <table>
            <thead><tr><th>Goal</th><th>Change These Settings</th></tr></thead>
            <tbody>
              <tr><td><strong>Make the day move faster</strong></td><td>Enable Time Of Day Cycle, then raise Time Speed.</td></tr>
              <tr><td><strong>Change sunrise direction</strong></td><td>Adjust North Offset.</td></tr>
              <tr><td><strong>Make stars stronger at night</strong></td><td>Raise Star Brightness Max.</td></tr>
              <tr><td><strong>Make clouds softer at night</strong></td><td>Lower Cloud Opacity Night or Cloud Opacity Max.</td></tr>
              <tr><td><strong>Make sunset warmer</strong></td><td>Adjust Horizon Color Sunrise, Cloud Color Sunrise, Sun Color Sunrise, and Aerial Perspective View Distance Scale.</td></tr>
              <tr><td><strong>Improve runtime performance</strong></td><td>Raise Visual Update Frequency, raise Sky Light Recapture Interval, or enable Aggressive Optimization.</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "overview", title: "Overview" },
      next: { slug: "actor-settings", title: "Actor Settings" },
    },
    {
      slug: "actor-settings",
      title: "Actor Settings",
      description: "Every main Details panel group on the SkyBox Time of Day Actor",
      content: `
        <section>
          <h3>Time And Planet Setup</h3>
          <table>
            <thead><tr><th>Setting</th><th>What It Controls</th><th>Typical Use</th></tr></thead>
            <tbody>
              <tr><td><strong>Enable Generic Celestial System</strong></td><td>Uses a planet profile instead of the normal Earth-style time controls.</td><td>Turn this on for alien worlds, stylized planets, or unusual day lengths.</td></tr>
              <tr><td><strong>Planet Preset</strong></td><td>Quick presets: Custom, Earth, Mars, Venus, Mercury, Jupiter, Proxima Centauri b, Kepler-442b.</td><td>Pick a base sky behavior, then tune the planet settings if needed.</td></tr>
              <tr><td><strong>Planet Config</strong></td><td>Axial tilt, rotation period, orbit period, orbit distance, orbit eccentricity, atmosphere density, scattering colors, and primary star values.</td><td>Create custom planets and star systems from Blueprint-editable values.</td></tr>
              <tr><td><strong>Enable Time Of Day Cycle</strong></td><td>Allows the actor to tick and advance time during play.</td><td>Use for dynamic day and night cycles.</td></tr>
              <tr><td><strong>Time Of Day</strong></td><td>The current time. The editor slider adapts to the active planet day length.</td><td>Preview or set a specific time from the Details panel or Blueprint.</td></tr>
              <tr><td><strong>Time Speed</strong></td><td>How quickly time advances during play.</td><td>Use a high value for visible day and night transitions.</td></tr>
              <tr><td><strong>North Offset</strong></td><td>Rotates the sun path around the scene.</td><td>Align sunrise and sunset with your level composition.</td></tr>
              <tr><td><strong>Latitude / Day Of Year</strong></td><td>Seasonal sun angle for the normal Earth-style setup.</td><td>Change the height of the sun path and seasonal feel.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Sky Sphere Settings</h3>
          <table>
            <thead><tr><th>Setting</th><th>What It Controls</th></tr></thead>
            <tbody>
              <tr><td><strong>Enable Sky Sphere</strong></td><td>Shows or hides the procedural sky sphere mesh.</td></tr>
              <tr><td><strong>Sky Sphere Material</strong></td><td>The sky material or material instance applied to the sphere.</td></tr>
              <tr><td><strong>Sky Sphere Radius</strong></td><td>How large the sky sphere is around the actor.</td></tr>
              <tr><td><strong>Sky Sphere Segments</strong></td><td>Sphere mesh resolution.</td></tr>
              <tr><td><strong>Sky Sphere Cast Shadows</strong></td><td>Whether the sky sphere casts shadows.</td></tr>
              <tr><td><strong>Affect Distance Field Lighting</strong></td><td>Whether the sky sphere participates in distance field lighting.</td></tr>
              <tr><td><strong>Cloud Opacity Min / Max</strong></td><td>Clamps the cloud opacity that the time-of-day system sends to the material.</td></tr>
              <tr><td><strong>Star Brightness Min / Max</strong></td><td>Controls how stars fade between day and night.</td></tr>
              <tr><td><strong>Horizon / Zenith Colors</strong></td><td>Separate day, night, and sunrise colors for the lower and upper sky.</td></tr>
              <tr><td><strong>Cloud Colors</strong></td><td>Separate day, night, and sunrise colors plus day/night opacity for clouds.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Sun, Moon, Atmosphere, Fog, And Exposure</h3>
          <table>
            <thead><tr><th>Group</th><th>Important Settings</th><th>Use</th></tr></thead>
            <tbody>
              <tr><td><strong>Sun</strong></td><td>Sun Intensity, Sun Min Intensity, Sun Disk Scale, noon/sunrise/night colors, temperature influence, atmospheric shadows, shadow cascades, dynamic shadow distance.</td><td>Control the main directional light and how it colors the sky.</td></tr>
              <tr><td><strong>Moon</strong></td><td>Enable Moon, Enable Moon Light, Moon Intensity, Moon Scale, angular diameter, max visual elevation, brightness, detail level, color, material, phase, mesh segments.</td><td>Add a readable night-sky moon with optional moonlight.</td></tr>
              <tr><td><strong>Atmosphere</strong></td><td>Rayleigh scale/color/distribution, Mie scale/color/absorption/anisotropy/distribution, atmosphere height, aerial perspective distance, ozone absorption, ground albedo, multi-scattering.</td><td>Shape blue sky, haze, sunset bands, dense atmospheres, and alien looks.</td></tr>
              <tr><td><strong>Sky Light</strong></td><td>Enable Sky Light, intensity, cubemap resolution, real-time capture, lower hemisphere color.</td><td>Control ambient lighting contribution from the sky.</td></tr>
              <tr><td><strong>Height Fog</strong></td><td>Fog density, height falloff, inscattering color, max opacity, start distance, directional inscattering, volumetric fog settings.</td><td>Add horizon depth, sunrise fog, moonlit fog, and volumetric atmosphere.</td></tr>
              <tr><td><strong>Post Process</strong></td><td>Exposure override, exposure method, bias, min/max brightness, unbound mode, priority, blend weight, lens flare, bloom.</td><td>Keep day/night exposure readable and add optional sun glow.</td></tr>
              <tr><td><strong>Performance</strong></td><td>Visual Update Frequency, Aggressive Optimization, Min Time Change Threshold, Sky Light Recapture Interval.</td><td>Reduce update cost in runtime scenes.</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "quick-start", title: "Quick Start" },
      next: { slug: "materials-and-presets", title: "Materials And Presets" },
    },
    {
      slug: "materials-and-presets",
      title: "Materials And Presets",
      description: "How to use the included sky materials and preset library",
      content: `
        <section>
          <h3>Best Workflow</h3>
          <ol>
            <li>Choose an included material instance that is close to the look you want.</li>
            <li>Duplicate it into your project folder.</li>
            <li>Rename the duplicate for your level, biome, or sky style.</li>
            <li>Adjust the exposed material parameters.</li>
            <li>Assign the duplicate to <strong>Sky Sphere Material</strong> on the SkyBox Time of Day Actor.</li>
            <li>Use the actor's sky color, cloud opacity, star brightness, and time settings for the day/night transition.</li>
          </ol>
        </section>
        <section>
          <h3>Main Materials</h3>
          <table>
            <thead><tr><th>Material</th><th>Best For</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td><strong>M_PanningClouds</strong></td><td>Readable skies with moving cloud color, sun glow, horizon color, and stars.</td><td>Good default choice for time-of-day scenes.</td></tr>
              <tr><td><strong>M_ProceduralSkySimple</strong></td><td>Procedural color bands, noise variation, star field, and curl/Worley variation.</td><td>Best when you want direct material-instance tweaking.</td></tr>
              <tr><td><strong>M_LayeredProceduralSky</strong></td><td>Layered material workflows using the included material layers.</td><td>Use with layered sky, nebula, Musgrave, Perlin-Worley, Simplex, star field, and northern lights layers.</td></tr>
              <tr><td><strong>M_Moon</strong></td><td>Procedural moon surface and phase rendering.</td><td>The actor drives moon phase, brightness, direction, and visibility during play.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Preset Groups</h3>
          <table>
            <thead><tr><th>Preset Group</th><th>Included Presets</th><th>Use</th></tr></thead>
            <tbody>
              <tr><td><strong>Perlin-Worley</strong></td><td>12 single presets plus 2 multi-layered presets</td><td>Cloudy, cellular, stormy, and layered procedural sky shapes.</td></tr>
              <tr><td><strong>Simplex</strong></td><td>5 single presets plus 5 multi-layered presets</td><td>Smoother procedural patterns and broad cloud/nebula forms.</td></tr>
              <tr><td><strong>Musgrave</strong></td><td>4 single presets plus 1 layered preset</td><td>Organic, ridged, fractal sky structures.</td></tr>
              <tr><td><strong>Nebula</strong></td><td>Advanced nebula preset</td><td>Space, sci-fi, and stylized cosmic skies.</td></tr>
              <tr><td><strong>Layered Material</strong></td><td>Layered sky preset</td><td>Starting point for stacking multiple sky layers.</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "actor-settings", title: "Actor Settings" },
      next: { slug: "material-parameters", title: "Material Parameters" },
    },
    {
      slug: "material-parameters",
      title: "Material Parameters",
      description: "Material instance parameters you can customize",
      content: `
        <section>
          <h3>Actor-Driven Sky Parameters</h3>
          <p>When the time-of-day actor creates a dynamic sky material, it updates these named parameters automatically. You normally change the matching actor settings instead of keyframing these manually.</p>
          <table>
            <thead><tr><th>Parameter</th><th>Type</th><th>Driven By</th><th>What It Changes</th></tr></thead>
            <tbody>
              <tr><td><strong>CloudOpacity</strong></td><td>Scalar</td><td>Cloud opacity settings and sun elevation</td><td>Cloud visibility across day, sunrise, and night.</td></tr>
              <tr><td><strong>StarBrightness</strong></td><td>Scalar</td><td>Star brightness min/max and sun elevation</td><td>How strongly stars appear at night and fade at dawn.</td></tr>
              <tr><td><strong>SunElevation</strong></td><td>Scalar</td><td>Current sun position</td><td>Lets the material react to sun height.</td></tr>
              <tr><td><strong>TimeOfDay</strong></td><td>Scalar</td><td>Time Of Day</td><td>Lets the material react to the current hour.</td></tr>
              <tr><td><strong>SkyOpacity</strong></td><td>Scalar</td><td>Day/night blend</td><td>Controls night sky visibility during daylight transitions.</td></tr>
              <tr><td><strong>SunColor</strong></td><td>Vector</td><td>Sun color and temperature settings</td><td>Sun tint sent into the sky material.</td></tr>
              <tr><td><strong>NightColor</strong></td><td>Vector</td><td>Day/night blend</td><td>Night layer multiplier.</td></tr>
              <tr><td><strong>HorizonColor</strong></td><td>Vector</td><td>Horizon day/night/sunrise colors</td><td>Lower sky color.</td></tr>
              <tr><td><strong>ZenithColor</strong></td><td>Vector</td><td>Zenith day/night/sunrise colors</td><td>Upper sky color.</td></tr>
              <tr><td><strong>CloudColor</strong></td><td>Vector</td><td>Cloud day/night/sunrise colors</td><td>Cloud tint.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>M_ProceduralSkySimple Parameters</h3>
          <table>
            <thead><tr><th>Parameter</th><th>Type</th><th>Default</th><th>What It Changes</th></tr></thead>
            <tbody>
              <tr><td><strong>Tiling</strong></td><td>Scalar</td><td>1</td><td>Overall pattern scale across the sky.</td></tr>
              <tr><td><strong>Frequency</strong></td><td>Scalar</td><td>2</td><td>Base noise frequency.</td></tr>
              <tr><td><strong>Amplitude</strong></td><td>Scalar</td><td>1</td><td>Noise strength.</td></tr>
              <tr><td><strong>FrequencyScale</strong></td><td>Scalar</td><td>2</td><td>How quickly detail frequency increases between octaves.</td></tr>
              <tr><td><strong>GradientScale</strong></td><td>Scalar</td><td>0.5</td><td>Gradient contribution inside the procedural pattern.</td></tr>
              <tr><td><strong>BCoefficient</strong></td><td>Scalar</td><td>2</td><td>Pattern shaping value for the noise result.</td></tr>
              <tr><td><strong>BFallOff</strong></td><td>Scalar</td><td>1</td><td>Falloff shaping value for the noise result.</td></tr>
              <tr><td><strong>RemapMin</strong></td><td>Scalar</td><td>0</td><td>Lower remap value for the noise range.</td></tr>
              <tr><td><strong>RemapMax</strong></td><td>Scalar</td><td>1</td><td>Upper remap value for the noise range.</td></tr>
              <tr><td><strong>Octaves</strong></td><td>Scalar</td><td>8</td><td>Number of noise detail layers.</td></tr>
              <tr><td><strong>Seed</strong></td><td>Scalar</td><td>0</td><td>Changes the generated pattern layout.</td></tr>
              <tr><td><strong>NoiseContrast</strong></td><td>Scalar</td><td>1</td><td>Contrast of the procedural noise.</td></tr>
              <tr><td><strong>SmoothMinDark</strong></td><td>Scalar</td><td>0.2</td><td>Start of the dark color blend range.</td></tr>
              <tr><td><strong>SmoothMaxDark</strong></td><td>Scalar</td><td>0.4</td><td>End of the dark color blend range.</td></tr>
              <tr><td><strong>SmoothMinLight</strong></td><td>Scalar</td><td>0.4</td><td>Start of the light color blend range.</td></tr>
              <tr><td><strong>SmoothMaxLight</strong></td><td>Scalar</td><td>0.7</td><td>End of the light color blend range.</td></tr>
              <tr><td><strong>Persistence</strong></td><td>Scalar</td><td>0.5</td><td>How strongly higher noise octaves remain visible.</td></tr>
              <tr><td><strong>NoiseVariation</strong></td><td>Scalar</td><td>0</td><td>Variation blend for the generated noise.</td></tr>
              <tr><td><strong>WorleyInfluence</strong></td><td>Scalar</td><td>0</td><td>Amount of Worley-style cellular influence.</td></tr>
              <tr><td><strong>CurlCoefficient</strong></td><td>Scalar</td><td>0.2</td><td>Strength of curl distortion.</td></tr>
              <tr><td><strong>CurlNoiseSeed</strong></td><td>Scalar</td><td>0</td><td>Changes the curl distortion layout.</td></tr>
              <tr><td><strong>SkyColorCurve</strong></td><td>Scalar</td><td>0</td><td>Selects or offsets curve-based sky color behavior.</td></tr>
              <tr><td><strong>ColorCurveBlend</strong></td><td>Scalar</td><td>0.2</td><td>Blend amount for curve-based colors.</td></tr>
              <tr><td><strong>StarSize</strong></td><td>Scalar</td><td>0.5</td><td>Visual size of generated stars.</td></tr>
              <tr><td><strong>StarFieldSeed</strong></td><td>Scalar</td><td>0</td><td>Changes the star placement.</td></tr>
              <tr><td><strong>StarFalloff</strong></td><td>Scalar</td><td>10</td><td>Sharpness of star edges.</td></tr>
              <tr><td><strong>StarIntensity</strong></td><td>Scalar</td><td>2</td><td>Brightness of generated stars.</td></tr>
              <tr><td><strong>StarDensity</strong></td><td>Scalar</td><td>0.02</td><td>Number of visible stars.</td></tr>
              <tr><td><strong>CurlBlend</strong></td><td>Scalar</td><td>0</td><td>Blend amount for curl distortion.</td></tr>
              <tr><td><strong>CurlTiling</strong></td><td>Scalar</td><td>1</td><td>Scale of the curl distortion pattern.</td></tr>
              <tr><td><strong>WorleySize</strong></td><td>Scalar</td><td>1</td><td>Cell size for Worley-style patterning.</td></tr>
              <tr><td><strong>DarkColor</strong></td><td>Vector</td><td>Dark blue</td><td>Low-value color in the sky gradient.</td></tr>
              <tr><td><strong>MidColor</strong></td><td>Vector</td><td>Blue</td><td>Middle color in the sky gradient.</td></tr>
              <tr><td><strong>LightColor</strong></td><td>Vector</td><td>Cyan</td><td>High-value color in the sky gradient.</td></tr>
              <tr><td><strong>StarColor</strong></td><td>Vector</td><td>White</td><td>Generated star color.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>M_PanningClouds Parameters</h3>
          <table>
            <thead><tr><th>Parameter</th><th>Type</th><th>Default</th><th>What It Changes</th></tr></thead>
            <tbody>
              <tr><td><strong>Sun Radius</strong></td><td>Scalar</td><td>0.0003</td><td>Visual radius of the material sun disk.</td></tr>
              <tr><td><strong>Horizon Falloff</strong></td><td>Scalar</td><td>3</td><td>How quickly horizon color fades upward.</td></tr>
              <tr><td><strong>Sun brightness</strong></td><td>Scalar</td><td>50</td><td>Brightness of the material sun glow.</td></tr>
              <tr><td><strong>Sun height</strong></td><td>Scalar</td><td>1</td><td>Vertical placement of the material sun effect.</td></tr>
              <tr><td><strong>CloudOpacity</strong></td><td>Scalar</td><td>1</td><td>Opacity of the cloud layer.</td></tr>
              <tr><td><strong>StarBrightness</strong></td><td>Scalar</td><td>0.1</td><td>Brightness of the star texture layer.</td></tr>
              <tr><td><strong>GlobalTiling</strong></td><td>Scalar</td><td>1</td><td>Overall cloud pattern tiling.</td></tr>
              <tr><td><strong>HorizonMinDensity</strong></td><td>Scalar</td><td>0.3</td><td>Minimum density near the horizon blend.</td></tr>
              <tr><td><strong>HorizonMaxDensity</strong></td><td>Scalar</td><td>0.8</td><td>Maximum density near the horizon blend.</td></tr>
              <tr><td><strong>CloudColor</strong></td><td>Vector</td><td>Light blue-gray</td><td>Cloud tint.</td></tr>
              <tr><td><strong>Sun color</strong></td><td>Vector</td><td>Warm yellow</td><td>Sun glow color.</td></tr>
              <tr><td><strong>Zenith Color</strong></td><td>Vector</td><td>Deep blue</td><td>Upper sky color.</td></tr>
              <tr><td><strong>Horizon color</strong></td><td>Vector</td><td>Near white cyan</td><td>Horizon color.</td></tr>
              <tr><td><strong>HorizonDirection</strong></td><td>Vector</td><td>0, 0, -1</td><td>Direction used for the horizon blend.</td></tr>
              <tr><td><strong>Star texture</strong></td><td>Texture</td><td>Engine sky stars</td><td>Texture sampled for the star layer.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>M_Moon Parameters</h3>
          <p>The actor updates the runtime moon material during play. For most projects, adjust the moon settings on the actor first, then edit the material instance only for surface style.</p>
          <table>
            <thead><tr><th>Parameter</th><th>Type</th><th>Default</th><th>What It Changes</th></tr></thead>
            <tbody>
              <tr><td><strong>Opacity</strong></td><td>Scalar</td><td>1</td><td>Moon disc visibility.</td></tr>
              <tr><td><strong>DetailLevel</strong></td><td>Scalar</td><td>1</td><td>Surface detail quality for the moon shader.</td></tr>
              <tr><td><strong>Brightness</strong></td><td>Scalar</td><td>1</td><td>Moon emissive brightness.</td></tr>
              <tr><td><strong>MoonPhase</strong></td><td>Scalar</td><td>0</td><td>Visible lunar phase offset.</td></tr>
              <tr><td><strong>TerrainScale</strong></td><td>Scalar</td><td>0.95 / 2</td><td>Large surface terrain pattern scale.</td></tr>
              <tr><td><strong>TerrainOctaves</strong></td><td>Scalar</td><td>3 / 4</td><td>Number of terrain noise detail layers.</td></tr>
              <tr><td><strong>MareScale</strong></td><td>Scalar</td><td>0.85 / 1.5</td><td>Scale of darker lunar mare shapes.</td></tr>
              <tr><td><strong>MareLow</strong></td><td>Scalar</td><td>0.4 / 0.52</td><td>Lower threshold for mare blending.</td></tr>
              <tr><td><strong>MareHigh</strong></td><td>Scalar</td><td>0.68</td><td>Upper threshold for mare blending.</td></tr>
              <tr><td><strong>CraterDepth</strong></td><td>Scalar</td><td>0.4</td><td>Strength of crater depressions.</td></tr>
              <tr><td><strong>CraterRimBrightness</strong></td><td>Scalar</td><td>0.25</td><td>Brightness around crater rims.</td></tr>
              <tr><td><strong>BigCraterCount</strong></td><td>Scalar</td><td>4</td><td>Number of large crater samples.</td></tr>
              <tr><td><strong>BigCraterRadius</strong></td><td>Scalar</td><td>0.09 / 0.32</td><td>Large crater radius.</td></tr>
              <tr><td><strong>MedCraterCount</strong></td><td>Scalar</td><td>24</td><td>Number of medium crater samples.</td></tr>
              <tr><td><strong>MedCraterRadius</strong></td><td>Scalar</td><td>0.044 / 0.14</td><td>Medium crater radius.</td></tr>
              <tr><td><strong>SmallCraterCount</strong></td><td>Scalar</td><td>96 / 32</td><td>Number of small crater samples.</td></tr>
              <tr><td><strong>SmallCraterRadius</strong></td><td>Scalar</td><td>0.014 / 0.055</td><td>Small crater radius.</td></tr>
              <tr><td><strong>RegolithScale</strong></td><td>Scalar</td><td>72 / 28</td><td>Fine surface grain scale.</td></tr>
              <tr><td><strong>RegolithStrength</strong></td><td>Scalar</td><td>0.07 / 0.18</td><td>Fine surface grain strength.</td></tr>
              <tr><td><strong>ColourVariation</strong></td><td>Scalar</td><td>0.15 / 0.12</td><td>Color variation across the moon surface.</td></tr>
              <tr><td><strong>NormalStrength</strong></td><td>Scalar</td><td>0.18 / 0.55</td><td>Strength of surface normal detail.</td></tr>
              <tr><td><strong>TerminatorSoftness</strong></td><td>Scalar</td><td>0.5</td><td>Softness of the shadow edge across the moon.</td></tr>
              <tr><td><strong>AmbientFill</strong></td><td>Scalar</td><td>0.18 / 0.12</td><td>Amount of fill light on the dark side.</td></tr>
              <tr><td><strong>SunDirection</strong></td><td>Vector</td><td>0, 0, 1</td><td>Lighting direction for phase and shading.</td></tr>
              <tr><td><strong>ViewDirection</strong></td><td>Vector</td><td>0, 0, 1</td><td>View direction for the shader.</td></tr>
              <tr><td><strong>HighlandColor</strong></td><td>Vector</td><td>Gray beige</td><td>Bright lunar highland color.</td></tr>
              <tr><td><strong>MareColor</strong></td><td>Vector</td><td>Dark gray</td><td>Darker lunar mare color.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>M_LayeredProceduralSky Parameter</h3>
          <table>
            <thead><tr><th>Parameter</th><th>Type</th><th>Default</th><th>What It Changes</th></tr></thead>
            <tbody>
              <tr><td><strong>GlobalTiling</strong></td><td>Scalar</td><td>1</td><td>Overall tiling for the layered procedural sky material.</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "materials-and-presets", title: "Materials And Presets" },
      next: { slug: "blueprint-control", title: "Blueprint Control" },
    },
    {
      slug: "blueprint-control",
      title: "Blueprint Control",
      description: "Use the sky actor from Blueprint without touching code",
      content: `
        <section>
          <h3>Common Blueprint Setup</h3>
          <ol>
            <li>Place <strong>SkyBox Time of Day Actor</strong> in the level.</li>
            <li>In your Level Blueprint, Game Mode, or manager Blueprint, create a variable that references the placed sky actor.</li>
            <li>Use the Blueprint functions below to change time, query sun/moon direction, or force visual updates.</li>
            <li>If you drive time yourself, call <strong>Set Time Of Day</strong> instead of directly setting the variable.</li>
          </ol>
        </section>
        <section>
          <h3>Blueprint Functions</h3>
          <table>
            <thead><tr><th>Function</th><th>Use It For</th></tr></thead>
            <tbody>
              <tr><td><strong>Set Time Of Day</strong></td><td>Set the current time directly. Useful for clocks, sleep systems, menu sliders, or scripted scenes.</td></tr>
              <tr><td><strong>Get Sun Direction</strong></td><td>Read the sun direction vector for gameplay, material effects, AI, or VFX.</td></tr>
              <tr><td><strong>Get Sun Elevation</strong></td><td>Read how high the sun is above or below the horizon.</td></tr>
              <tr><td><strong>Get Sun Azimuth</strong></td><td>Read the horizontal direction of the sun around the level.</td></tr>
              <tr><td><strong>Get Moon Direction</strong></td><td>Read the moon direction vector.</td></tr>
              <tr><td><strong>Get Moon Elevation</strong></td><td>Read how high the moon is above or below the horizon.</td></tr>
              <tr><td><strong>Is Moon Visible</strong></td><td>Check whether the moon should currently be visible in the sky.</td></tr>
              <tr><td><strong>Update Sky</strong></td><td>Force all sky, lighting, fog, post process, and material values to refresh.</td></tr>
              <tr><td><strong>Recapture Sky Light</strong></td><td>Manually refresh the sky light capture.</td></tr>
              <tr><td><strong>Apply Planet Preset</strong></td><td>Switch to a planet preset from Blueprint.</td></tr>
              <tr><td><strong>Get Active Planet Config</strong></td><td>Read the currently active planet settings.</td></tr>
              <tr><td><strong>Set Aggressive Optimization</strong></td><td>Turn reduced material updating on or off at runtime.</td></tr>
              <tr><td><strong>Set Update Frequency</strong></td><td>Change how often visual updates are applied.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Example: Time Slider In A Widget</h3>
          <ol>
            <li>Create a Widget Blueprint with a slider.</li>
            <li>Set the slider range to match your day length. For the default setup, use 0 to 24.</li>
            <li>On slider value changed, call <strong>Set Time Of Day</strong> on your sky actor reference.</li>
            <li>After big changes, call <strong>Update Sky</strong> if you need an immediate refresh.</li>
          </ol>
        </section>
        <section>
          <h3>Example: Different Planet At Runtime</h3>
          <ol>
            <li>Enable <strong>Generic Celestial System</strong> on the sky actor.</li>
            <li>Call <strong>Apply Planet Preset</strong> and choose the preset you want.</li>
            <li>Set <strong>Time Of Day</strong> to a valid hour for that planet day length.</li>
            <li>Call <strong>Update Sky</strong> to refresh the scene.</li>
          </ol>
        </section>
      `,
      prev: { slug: "material-parameters", title: "Material Parameters" },
      next: { slug: "performance-and-troubleshooting", title: "Performance And Troubleshooting" },
    },
    {
      slug: "performance-and-troubleshooting",
      title: "Performance And Troubleshooting",
      description: "Keep the sky readable, responsive, and efficient",
      content: `
        <section>
          <h3>Performance Controls</h3>
          <table>
            <thead><tr><th>Setting</th><th>Higher Value Does</th><th>Lower Value Does</th></tr></thead>
            <tbody>
              <tr><td><strong>Visual Update Frequency</strong></td><td>Updates visuals less often for better performance.</td><td>Smoother transitions.</td></tr>
              <tr><td><strong>Min Time Change Threshold</strong></td><td>Skips very small visual changes.</td><td>Updates more subtle time changes.</td></tr>
              <tr><td><strong>Sky Light Recapture Interval</strong></td><td>Recaptures skylight less frequently.</td><td>More responsive ambient lighting changes.</td></tr>
              <tr><td><strong>Aggressive Optimization</strong></td><td>Reduces material parameter updates further.</td><td>Keeps the most responsive visual updates.</td></tr>
              <tr><td><strong>Sky Light Cubemap Resolution</strong></td><td>Sharper captured lighting, more cost.</td><td>Lower cost, softer captured lighting.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Common Fixes</h3>
          <table>
            <thead><tr><th>Issue</th><th>What To Check</th></tr></thead>
            <tbody>
              <tr><td><strong>Sky does not move during Play</strong></td><td>Enable Time Of Day Cycle and raise Time Speed above 0.</td></tr>
              <tr><td><strong>Stars visible during day</strong></td><td>Lower Star Brightness Min, check SkyOpacity behavior on your custom material, and use the actor-driven parameters listed in this guide.</td></tr>
              <tr><td><strong>Clouds too strong at night</strong></td><td>Lower Cloud Opacity Night, Cloud Opacity Max, or the material's CloudOpacity value.</td></tr>
              <tr><td><strong>Moon is not visible</strong></td><td>Enable Moon, check Time Of Day, make sure the moon is above the horizon, and verify Moon Scale and Moon Brightness are not too low.</td></tr>
              <tr><td><strong>Scene is too dark at night</strong></td><td>Raise Moon Intensity, Sky Light Intensity, Auto Exposure Min Brightness, or Ambient Fill on the moon material.</td></tr>
              <tr><td><strong>Sun glow looks too harsh</strong></td><td>Lower Lens Flare settings or prefer Bloom for a smoother glow.</td></tr>
              <tr><td><strong>Sky light feels delayed</strong></td><td>Lower Sky Light Recapture Interval or call Recapture Sky Light after a large time jump.</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "blueprint-control", title: "Blueprint Control" },
    },
  ],
};

export default proceduralSkyboxDocs;
