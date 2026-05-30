import type { ProductDocumentation } from "../types";

const treeViewForUmgDocs: ProductDocumentation = {
  productSlug: "treeview-for-umg",
  sections: [
    {
      slug: "overview",
      title: "Overview",
      description: "What TreeView for UMG adds to Widget Blueprints",
      content: `
        <section>
          <h3>What It Does</h3>
          <p><strong>TreeView for UMG</strong> adds a Blueprint-ready tree view widget for nested UI lists. Use it when your interface needs expandable folders, grouped options, quest steps, inventories, settings sections, file-like browsers, or any parent-child menu.</p>
          <p>You can build the tree directly in the Widget Designer, or fill the tree from Blueprint at runtime and refresh it when your data changes.</p>
        </section>
        <section>
          <h3>Main Capabilities</h3>
          <div class="feature-grid">
            <div class="feature-card"><div class="fc-icon">UI</div><h4>Nested Tree Rows</h4><p>Create root rows, child rows, and deeper nested rows with a simple parent id setup.</p></div>
            <div class="feature-card"><div class="fc-icon">BP</div><h4>Blueprint Setup</h4><p>Fill the Tree Nodes array in Designer or build it in Blueprint, then call Create Tree.</p></div>
            <div class="feature-card"><div class="fc-icon">RW</div><h4>Custom Row Widgets</h4><p>Use your own row widget Blueprint for all rows, specific parent groups, or specific node ids.</p></div>
            <div class="feature-card"><div class="fc-icon">EV</div><h4>Useful Events</h4><p>React to row generation, selection changes, expansion changes, and children lookup.</p></div>
            <div class="feature-card"><div class="fc-icon">ST</div><h4>Styling Controls</h4><p>Adjust row style, text style, tree padding, row padding, scrollbar style, and expander visibility.</p></div>
            <div class="feature-card"><div class="fc-icon">CT</div><h4>Runtime Control</h4><p>Expand, collapse, toggle, or select a node from Blueprint whenever your UI flow needs it.</p></div>
          </div>
        </section>
        <section>
          <h3>Blueprint Terms Used In This Guide</h3>
          <table>
            <thead><tr><th>Name</th><th>Meaning</th></tr></thead>
            <tbody>
              <tr><td><strong>Tree Nodes</strong></td><td>The list of rows that make up your tree.</td></tr>
              <tr><td><strong>Node Name</strong></td><td>The display name or identifier for a row.</td></tr>
              <tr><td><strong>Parent ID</strong></td><td>0 means the row is a root row. Any other value points to the parent row by its 1-based position in Tree Nodes.</td></tr>
              <tr><td><strong>Node ID</strong></td><td>The runtime id assigned after Create Tree. It follows the zero-based order of Tree Nodes.</td></tr>
              <tr><td><strong>Extra Strings</strong></td><td>Optional extra values you can use to pass labels, ids, icons, or state into your row widget.</td></tr>
            </tbody>
          </table>
        </section>
      `,
      next: { slug: "designer-setup", title: "Designer Setup" },
    },
    {
      slug: "designer-setup",
      title: "Designer Setup",
      description: "Create a tree manually inside a Widget Blueprint",
      content: `
        <section>
          <h3>Add The Widget</h3>
          <ol>
            <li>Open the Widget Blueprint where the tree should appear.</li>
            <li>Go to the <strong>Designer</strong> tab.</li>
            <li>In the Palette, look under <strong>Views</strong> and add the custom tree view widget to your layout.</li>
            <li>Select the tree view in the Hierarchy.</li>
            <li>If you want to call its Blueprint functions later, enable <strong>Is Variable</strong> in the Details panel.</li>
          </ol>
        </section>
        <section>
          <h3>Add Tree Nodes</h3>
          <ol>
            <li>With the tree selected, find <strong>Tree Nodes</strong> in Details.</li>
            <li>Add one entry for each row you want in the tree.</li>
            <li>Set <strong>Node Name</strong> for each row.</li>
            <li>Set <strong>Parent ID</strong> to <strong>0</strong> for root rows.</li>
            <li>For a child row, set <strong>Parent ID</strong> to the parent row position, counting from 1.</li>
            <li>Compile the widget, then preview it.</li>
          </ol>
          <div class="callout-info">
            <strong>Example:</strong> If row 1 is <code>Weapons</code>, children under Weapons use <code>Parent ID = 1</code>. If row 4 is <code>Consumables</code>, children under Consumables use <code>Parent ID = 4</code>.
          </div>
        </section>
        <section>
          <h3>Important Ordering Rule</h3>
          <p>Always place a parent row before its children in the Tree Nodes array. The widget builds the tree from top to bottom, so a child needs its parent to already exist.</p>
        </section>
      `,
      prev: { slug: "overview", title: "Overview" },
      next: { slug: "blueprint-runtime", title: "Blueprint Runtime Setup" },
    },
    {
      slug: "blueprint-runtime",
      title: "Blueprint Runtime Setup",
      description: "Build and refresh a tree from Blueprint",
      content: `
        <section>
          <h3>Build The Tree From Blueprint</h3>
          <ol>
            <li>Open your Widget Blueprint graph.</li>
            <li>Get a reference to the tree view widget.</li>
            <li>Create an array of Tree Node entries.</li>
            <li>For every entry, set <strong>Node Name</strong>, <strong>Parent ID</strong>, optional <strong>Node Padding</strong>, and optional <strong>Extra Strings</strong>.</li>
            <li>Set the tree view's <strong>Tree Nodes</strong> array to your new array.</li>
            <li>Call <strong>Create Tree</strong>.</li>
          </ol>
        </section>
        <section>
          <h3>Refresh After Data Changes</h3>
          <p>When your inventory, quest list, settings list, or other data changes, rebuild the Tree Nodes array and call <strong>Create Tree</strong> again. This clears the old tree and creates the new hierarchy.</p>
        </section>
        <section>
          <h3>Control Nodes From Blueprint</h3>
          <table>
            <thead><tr><th>Blueprint Function</th><th>Use It For</th></tr></thead>
            <tbody>
              <tr><td><strong>Create Tree</strong></td><td>Build or rebuild the visible tree from Tree Nodes.</td></tr>
              <tr><td><strong>Expand Tree Item</strong></td><td>Open a specific node by Node ID.</td></tr>
              <tr><td><strong>Collapse Tree Item</strong></td><td>Close a specific node by Node ID.</td></tr>
              <tr><td><strong>Toggle Node Expansion</strong></td><td>Switch a node between expanded and collapsed.</td></tr>
              <tr><td><strong>Select Tree Item</strong></td><td>Select a specific node by Node ID.</td></tr>
            </tbody>
          </table>
          <div class="callout-warning">
            <strong>Node ID reminder:</strong> Node IDs are zero-based and follow the order of Tree Nodes after Create Tree. The first entry is Node ID 0, the second is Node ID 1, and so on.
          </div>
        </section>
      `,
      prev: { slug: "designer-setup", title: "Designer Setup" },
      next: { slug: "custom-row-widgets", title: "Custom Row Widgets" },
    },
    {
      slug: "custom-row-widgets",
      title: "Custom Row Widgets",
      description: "Use your own Widget Blueprints as tree rows",
      content: `
        <section>
          <h3>Create A Row Widget</h3>
          <ol>
            <li>Create a new Widget Blueprint for one row of your tree.</li>
            <li>Add the visuals you need: text, icon, status marker, button, progress bar, or any other UMG controls.</li>
            <li>Add variables for the values you want to display, such as Row Name, Icon, Count, Description, or State.</li>
            <li>Compile the row widget.</li>
          </ol>
        </section>
        <section>
          <h3>Assign Row Widgets</h3>
          <table>
            <thead><tr><th>Setting</th><th>What It Does</th></tr></thead>
            <tbody>
              <tr><td><strong>Default Row Content</strong></td><td>Uses one row widget Blueprint for every row.</td></tr>
              <tr><td><strong>Row Contents By Parent</strong></td><td>Uses a row widget Blueprint for rows under a specific parent.</td></tr>
              <tr><td><strong>Row Contents By Id</strong></td><td>Uses a row widget Blueprint for one specific node id.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Fill Row Data</h3>
          <ol>
            <li>Bind the tree view's <strong>On Generate Row</strong> event.</li>
            <li>Use the returned <strong>Row</strong> value to read Node Name, Node ID, Parent ID, and Extra Strings.</li>
            <li>Cast the returned <strong>Row Widget</strong> to your custom row widget Blueprint.</li>
            <li>Set the row widget variables from the Row data.</li>
            <li>Update icons, labels, colors, buttons, or states as needed.</li>
          </ol>
        </section>
      `,
      prev: { slug: "blueprint-runtime", title: "Blueprint Runtime Setup" },
      next: { slug: "events", title: "Events" },
    },
    {
      slug: "events",
      title: "Events",
      description: "Handle tree interaction from Widget Blueprints",
      content: `
        <section>
          <h3>Available Events</h3>
          <table>
            <thead><tr><th>Event</th><th>When It Runs</th><th>Typical Use</th></tr></thead>
            <tbody>
              <tr><td><strong>On Generate Row</strong></td><td>When the tree creates a visible row.</td><td>Fill your custom row widget with text, icons, and state.</td></tr>
              <tr><td><strong>On Selection Changed</strong></td><td>When the selected row changes.</td><td>Show details for the selected item, open a panel, or update controls.</td></tr>
              <tr><td><strong>On Expansion Changed</strong></td><td>When a node opens or closes.</td><td>Save expanded state or change the row visuals.</td></tr>
              <tr><td><strong>On Get Children</strong></td><td>When the tree asks for a row's children.</td><td>Inspect parent-child relationships while debugging or updating dynamic trees.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Selection Example</h3>
          <ol>
            <li>Bind <strong>On Selection Changed</strong>.</li>
            <li>Break the Row value.</li>
            <li>Read Node Name or Extra Strings.</li>
            <li>Update a details panel in the same Widget Blueprint.</li>
          </ol>
        </section>
        <section>
          <h3>Expansion Example</h3>
          <ol>
            <li>Bind <strong>On Expansion Changed</strong>.</li>
            <li>Read the Expansion State boolean.</li>
            <li>If true, set your row icon to an open folder look.</li>
            <li>If false, set your row icon to a closed folder look.</li>
          </ol>
        </section>
      `,
      prev: { slug: "custom-row-widgets", title: "Custom Row Widgets" },
      next: { slug: "styling", title: "Styling" },
    },
    {
      slug: "styling",
      title: "Styling",
      description: "Tune visual style and spacing",
      content: `
        <section>
          <h3>Common Style Settings</h3>
          <table>
            <thead><tr><th>Setting</th><th>What It Changes</th></tr></thead>
            <tbody>
              <tr><td><strong>Expander Visibility</strong></td><td>Shows or hides the expand/collapse arrow area.</td></tr>
              <tr><td><strong>Row Default Padding</strong></td><td>Adds spacing for nested row indentation.</td></tr>
              <tr><td><strong>Node Padding</strong></td><td>Adds extra spacing on individual nodes.</td></tr>
              <tr><td><strong>Tree View Padding</strong></td><td>Adds padding around the full tree widget.</td></tr>
              <tr><td><strong>Text Padding</strong></td><td>Controls spacing around default row text.</td></tr>
              <tr><td><strong>Table Row Style</strong></td><td>Controls selected, hovered, and normal row visuals.</td></tr>
              <tr><td><strong>Vertical Scrollbar Style</strong></td><td>Controls the look and thickness of the scrollbar.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Recommended Workflow</h3>
          <ol>
            <li>Start with a simple tree using the default row style.</li>
            <li>Confirm that your node hierarchy expands and collapses correctly.</li>
            <li>Add your custom row widget.</li>
            <li>Bind On Generate Row and fill labels/icons from Row data.</li>
            <li>Adjust padding and scrollbar style once the row content is final.</li>
          </ol>
        </section>
      `,
      prev: { slug: "events", title: "Events" },
      next: { slug: "troubleshooting", title: "Troubleshooting" },
    },
    {
      slug: "troubleshooting",
      title: "Troubleshooting",
      description: "Fix common setup issues",
      content: `
        <section>
          <h3>Rows Do Not Appear</h3>
          <ul>
            <li>Make sure the Tree Nodes array has entries.</li>
            <li>Call <strong>Create Tree</strong> after setting Tree Nodes from Blueprint.</li>
            <li>Make sure parent rows are listed before child rows.</li>
            <li>Use <strong>Parent ID = 0</strong> for root rows.</li>
          </ul>
        </section>
        <section>
          <h3>Child Rows Are Missing</h3>
          <ul>
            <li>Check that each child's Parent ID points to the parent's 1-based position in Tree Nodes.</li>
            <li>Confirm the parent row is above the child row in the array.</li>
            <li>Expand the parent node or call <strong>Expand Tree Item</strong> from Blueprint.</li>
          </ul>
        </section>
        <section>
          <h3>Blueprint Functions Are Hard To Access</h3>
          <ul>
            <li>Select the tree widget in the Designer.</li>
            <li>Enable <strong>Is Variable</strong> in Details.</li>
            <li>Compile the Widget Blueprint.</li>
            <li>Use the tree variable in the Graph to call Create Tree, Expand Tree Item, Collapse Tree Item, Toggle Node Expansion, or Select Tree Item.</li>
          </ul>
        </section>
        <section>
          <h3>Custom Row Widget Is Empty</h3>
          <ul>
            <li>Assign your widget to <strong>Default Row Content</strong>, <strong>Row Contents By Parent</strong>, or <strong>Row Contents By Id</strong>.</li>
            <li>Bind <strong>On Generate Row</strong>.</li>
            <li>Cast the Row Widget output to your custom row widget Blueprint.</li>
            <li>Set your row widget's variables from the Row value.</li>
          </ul>
        </section>
      `,
      prev: { slug: "styling", title: "Styling" },
    },
  ],
};

export default treeViewForUmgDocs;
