---
title: Runtime FBX Import for Unreal Engine 4
topText: ''
bottomText: Asynchronously Import FBX files in your Unreal projects, in runtime. Highly
  detailed FBX scenes can be loaded very fast, and grouping of a single file into
  Nodes and Material sections further allows you to generate an entire scene comprising
  of various interactive actors, from a single FBX file.
seotitle: ''
seodescription: ''
image: "/uploads/fbximport.webp"
canonical: ''
private: ''
buttons:
- buttonLink: https://www.unrealengine.com/marketplace/en-US/slug/runtime-fbx-import-asynchronous
  buttonText: Get It Here
- buttonLink: https://docs.athiangames.com/doc_fbximport
  buttonText: Documentation
- buttonLink: https://discord.com/invite/hsejuTW
  buttonText: Join Discord
date: 2018-10-01T17:00:00.000+05:30
product_categories:
- Miscellaneous

---
{{<html>}}
<div class="col-xl-6 col-lg-12">
{{</html>}}

### Features
1. Asynchronously Import FBX files in runtime.
2. Relevant Textures(Diffuse, Normal, Specular, Opacity) are auto imported with the mesh and can be applied to the generated Procedural Mesh Components, each unique to a material index and is a child of a specific node, as read from the source file .
3. Custom collisions can be applied in the generated mesh component via UCX_ prefix as read from the source file.
4. Built in support for designing changeable material property layout for every Mesh Component.
5. Every FBX scene imported is represented by a custom actor which hosts all the Procedural Mesh Components generated from the nodes read from the source file. Hence every FBX scene can have its own set of custom logic, allowing user to implement this plugin in number of various scenarios, from importing larger scenes, to interactive smaller props like weapons , barrels, etc.
6. Load and Save System implemented for storing the Imported FBX Meshes in desired location in hard drive, and loading it without importing it all over again, in the next session.
{{<html>}}
</div>
{{</html>}}

{{<html>}}
<div class="col-xl-6 m-auto">
<video id="FeaturedVideo" style="display: block;" width="100%" controls="">

                        <source id="mp4" src="https://athiangames.com/videos/fbximport_demo.mp4" type="video/mp4">

                    </video>
</div>
{{</html>}}