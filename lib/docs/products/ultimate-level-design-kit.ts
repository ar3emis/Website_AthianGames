import type { ProductDocumentation } from "../types";

const ultimateLevelDesignKitDocs: ProductDocumentation = {
  productSlug: "ultimate-level-design-kit",
  sections: [
    {
      slug: "overview",
      title: "Overview",
      description: "What the toolkit includes",
      content: `
        <section>
          <h3>What it does</h3>
          <p><strong>Ultimate Level Design Kit</strong> helps you build playable greybox spaces directly in the editor. You place procedural shapes, adjust dimensions from the Details panel, color-code areas, snap pieces together, measure distances, and add gameplay planning markers before final art is ready.</p>
          <p>The workflow is visual: choose a tool, place it in the viewport, then keep changing size, material, UV, collision, and helper settings without going to an external modeling tool.</p>
        </section>
        <section>
          <h3>Main tool groups</h3>
          <table>
            <thead><tr><th>Group</th><th>Included tools</th><th>Use for</th></tr></thead>
            <tbody>
              <tr><td>Greybox shapes</td><td>Box, wall, floor, wedge/ramp, arch, stairs, cylinder, sphere, pipe, column, cone, polygon, door, ladder, barrel form, L-shape</td><td>Rooms, corridors, cover, ramps, tunnels, stairs, props, blockout structures</td></tr>
              <tr><td>Layout utilities</td><td>Measure tool, snap grid, text label, copy tool</td><td>Scale checks, grid reference, notes, repeated layout pieces</td></tr>
              <tr><td>Gameplay markers</td><td>Trigger volume, spawn point, cover point, navigation link</td><td>Planning player starts, AI cover, interactions, movement routes</td></tr>
              <tr><td>Path tools</td><td>Spline path, actor placement</td><td>Roads, fences, prop lines, random placement, repeated placement along paths</td></tr>
            </tbody>
          </table>
        </section>
      `,
      next: { slug: "getting-started", title: "Getting Started" },
    },
    {
      slug: "getting-started",
      title: "Getting Started",
      description: "Place your first shape",
      content: `
        <section>
          <h3>Enable and open the tools</h3>
          <ol>
            <li>Open <strong>Edit > Plugins</strong>.</li>
            <li>Search for <strong>Ultimate Level Design Kit</strong> and enable it.</li>
            <li>Restart the editor if it asks.</li>
            <li>Open <strong>Window > Place Actors</strong> or press <kbd>Shift</kbd> + <kbd>1</kbd>.</li>
            <li>Search for <strong>ULDK</strong> to find the shape and helper actors.</li>
          </ol>
        </section>
        <section>
          <h3>Place a basic blockout piece</h3>
          <ol>
            <li>Drag <strong>ULDK Box</strong>, <strong>ULDK Wall</strong>, or <strong>ULDK Floor</strong> into the viewport.</li>
            <li>Select the placed actor.</li>
            <li>In the Details panel, change <strong>Dimensions</strong> to set exact size in centimeters.</li>
            <li>Set <strong>Greybox Color</strong> to mark gameplay meaning, such as safe area, danger, objective, or blocked path.</li>
            <li>Use <strong>Material Slot 0</strong> and <strong>Material Slot 1</strong> when you want separate side and cap materials.</li>
          </ol>
        </section>
        <section>
          <h3>Recommended first workflow</h3>
          <ol>
            <li>Lay down floor pieces for playable space.</li>
            <li>Add walls and ramps to define paths.</li>
            <li>Add stairs, arches, doors, or pipes where the level needs verticality or passages.</li>
            <li>Use the Measure Tool to check travel distances and room scale.</li>
            <li>Add trigger, spawn, cover, and navigation markers once the space starts to play correctly.</li>
          </ol>
        </section>
      `,
      prev: { slug: "overview", title: "Overview" },
      next: { slug: "shape-reference", title: "Shape Reference" },
    },
    {
      slug: "shape-reference",
      title: "Shape Reference",
      description: "What each shape is best for",
      content: `
        <section>
          <h3>Common shape settings</h3>
          <table>
            <thead><tr><th>Setting</th><th>What it controls</th></tr></thead>
            <tbody>
              <tr><td>Dimensions</td><td>Width, depth, and height for most blockout shapes.</td></tr>
              <tr><td>Greybox Color</td><td>Color tint for fast visual planning.</td></tr>
              <tr><td>Material Slot 0 / 1</td><td>Main material and optional cap/top material.</td></tr>
              <tr><td>UV Scale, Tiling, Offset, Rotation</td><td>How checker, grid, or custom materials align on the generated mesh.</td></tr>
              <tr><td>Collision Preset</td><td>How the generated mesh blocks or overlaps gameplay objects.</td></tr>
              <tr><td>Snap</td><td>Whether this actor should align to nearby compatible ULDK actors.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Shape usage table</h3>
          <table>
            <thead><tr><th>Tool</th><th>Best use</th><th>Important options</th></tr></thead>
            <tbody>
              <tr><td>Box</td><td>Blocks, covers, platforms, rooms</td><td>Dimensions, hollow option, open/closed top, face editing</td></tr>
              <tr><td>Wall</td><td>Vertical partitions and room walls</td><td>Length, height, thickness, door/window style openings</td></tr>
              <tr><td>Floor</td><td>Flat platforms and walkable tiles</td><td>Width, depth, thickness, snap points</td></tr>
              <tr><td>Wedge / Ramp</td><td>Slopes, ramps, roof forms</td><td>Width, length, rise height</td></tr>
              <tr><td>Stairs</td><td>Vertical traversal</td><td>Linear, spiral, and circular platform styles, step count, width, rail options</td></tr>
              <tr><td>Arch / Pipe</td><td>Door arches, tunnels, sewers, curved passages</td><td>Radius, thickness, depth, arc, segments</td></tr>
              <tr><td>Cylinder / Column / Cone / Sphere</td><td>Pillars, markers, round cover, domes</td><td>Radius, height, side count, smoothness</td></tr>
              <tr><td>L-Shape / Polygon</td><td>Corner blocks and custom footprint shapes</td><td>Arm lengths, thickness, point layout</td></tr>
              <tr><td>Door / Ladder / Barrel form</td><td>Common level placeholders</td><td>Size controls and material settings</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "getting-started", title: "Getting Started" },
      next: { slug: "materials-snapping", title: "Materials and Snapping" },
    },
    {
      slug: "materials-snapping",
      title: "Materials and Snapping",
      description: "Control visual alignment and layout precision",
      content: `
        <section>
          <h3>Material and UV workflow</h3>
          <ol>
            <li>Select a ULDK shape.</li>
            <li>Use <strong>Greybox Color</strong> for quick zone tinting.</li>
            <li>Assign a custom material in <strong>Material Slot 0</strong> if needed.</li>
            <li>Assign <strong>Material Slot 1</strong> when top/cap faces need a different look.</li>
            <li>Adjust <strong>UV Scale</strong>, <strong>UV Tiling</strong>, <strong>UV Offset</strong>, and <strong>UV Rotation</strong> until the material lines up.</li>
          </ol>
        </section>
        <section>
          <h3>UV projection modes</h3>
          <table>
            <thead><tr><th>Mode</th><th>Use it for</th></tr></thead>
            <tbody>
              <tr><td>Orthogonal</td><td>Boxes, walls, floors, and most flat-sided pieces.</td></tr>
              <tr><td>Cylindrical</td><td>Cylinders, columns, and pipe sides.</td></tr>
              <tr><td>Polar</td><td>Round caps and circular top surfaces.</td></tr>
              <tr><td>Planar XY / XZ / YZ</td><td>Forcing one projection direction on floors or walls.</td></tr>
              <tr><td>Spherical</td><td>Spheres and dome-like forms.</td></tr>
              <tr><td>Automatic / Radial</td><td>Round shapes that need cleaner caps and wrapped sides.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Snapping workflow</h3>
          <ol>
            <li>Keep <strong>Snap</strong> enabled on pieces you want to align.</li>
            <li>Move a shape near another compatible shape.</li>
            <li>When snap points are close enough, the moving actor aligns to the nearby point.</li>
            <li>Increase <strong>Snap Size</strong> if you want easier alignment from farther away.</li>
            <li>Disable <strong>Snap</strong> on one actor when you need free placement.</li>
          </ol>
        </section>
      `,
      prev: { slug: "shape-reference", title: "Shape Reference" },
      next: { slug: "helpers", title: "Helpers" },
    },
    {
      slug: "helpers",
      title: "Helpers",
      description: "Measurement, markers, spline paths, and placement",
      content: `
        <section>
          <h3>Measurement and notes</h3>
          <table>
            <thead><tr><th>Tool</th><th>Workflow</th></tr></thead>
            <tbody>
              <tr><td>Measure Tool</td><td>Place it, move the start/end handles, and read distance, axis deltas, angle, and unit display.</td></tr>
              <tr><td>Snap Grid</td><td>Place it as a visual construction grid when planning spacing and modular dimensions.</td></tr>
              <tr><td>Text Label</td><td>Add readable level notes for zones, encounters, doors, or designer reminders.</td></tr>
              <tr><td>Copy Tool</td><td>Create repeated offset copies of selected ULDK actors while previewing the result.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Gameplay markers</h3>
          <table>
            <thead><tr><th>Marker</th><th>Use it for</th></tr></thead>
            <tbody>
              <tr><td>Trigger Volume</td><td>Block out interaction or overlap zones and bind Blueprint overlap events.</td></tr>
              <tr><td>Spawn Point</td><td>Mark player, enemy, or team start positions during layout planning.</td></tr>
              <tr><td>Cover Point</td><td>Mark AI cover positions and posture intent such as standing or crouching cover.</td></tr>
              <tr><td>Navigation Link</td><td>Mark special traversal links such as jump, drop, ladder, vault, or custom navigation routes.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Spline and actor placement</h3>
          <ol>
            <li>Place a <strong>Spline Path</strong> actor.</li>
            <li>Choose whether the path should behave like a road, fence, spline mesh, or placement path.</li>
            <li>Add or move spline points in the viewport.</li>
            <li>For actor placement, choose the actor or mesh source.</li>
            <li>Pick fixed spacing, even count, random distribution, or area fill depending on the layout.</li>
          </ol>
        </section>
      `,
      prev: { slug: "materials-snapping", title: "Materials and Snapping" },
      next: { slug: "tips", title: "Tips" },
    },
    {
      slug: "tips",
      title: "Tips",
      description: "Practical production notes",
      content: `
        <section>
          <h3>Best practices</h3>
          <ul>
            <li>Use actual shape dimensions instead of actor scale when you want measurable blockouts.</li>
            <li>Color-code with a simple meaning system so designers and testers understand the map at a glance.</li>
            <li>Use lower segment counts for early greyboxing and increase them only when a round shape must read clearly.</li>
            <li>Keep trigger, spawn, cover, and navigation markers in the prototype so gameplay review does not depend on memory.</li>
            <li>Replace or hide greybox actors later as final art arrives; the blockout remains a reference for gameplay scale.</li>
          </ul>
        </section>
      `,
      prev: { slug: "helpers", title: "Helpers" },
    },
  ],
};

export default ultimateLevelDesignKitDocs;
