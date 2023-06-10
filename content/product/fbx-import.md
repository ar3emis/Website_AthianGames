---
date: 2018-10-01T17:00:00.000+05:30
title: Runtime FBX Import for Unreal Engine
topText: Runtime FBX Import for Unreal Engine
bottomText: Asynchronously Import FBX files in your Unreal projects, in runtime.
summary: Asynchronously Import FBX files in your Unreal projects, in runtime
product_categories:
- Miscellaneous
image: "/images/fbximport.png"
buttons:
- buttonLink: https://www.unrealengine.com/marketplace/en-US/slug/runtime-fbx-import-asynchronous
  buttonText: Get It Here
- buttonLink: https://docs.athiangames.com/doc_fbximport
  buttonText: Documentation
- buttonLink: https://discord.com/invite/hsejuTW
  buttonText: Join Discord
seotitle: ''
seodescription: ''
canonical: ''
private: false
bannerImage: ''
contentVideoId: qrB7rDunSrM
contentVideoThumbnail: "/images/assetimportcover.jpg"
features:
- image: "/images/rfbxi_features_asynchronousimport.jpg"
  title: Asynchronously Import FBX files in runtime
  description: Import FBX Files from your hard drive to your Unreal Project in Runtime.
    The process is fully asynchronous, ensuring the game thread is not blocked, so
    that you can perfrom other operations, like displaying a progress bar, while the
    FBX is being loaded.
  buttons:
  - buttonText: Learn More
    buttonLink: https://docs.athiangames.com/doc_fbximport#TheImportFunction
- image: "/images/rfbxi_features_importtextures.jpg"
  title: Auto Import Textures
  description: Relevant Textures(Diffuse, Normal, Specular, Opacity) are auto imported
    with the mesh and can be applied to the generated Procedural Mesh Components,
    each unique to a material index and is a child of a specific node, as read from
    the source file .
  buttons: []
- image: "/images/rfbxi_features_customcollisions.jpg"
  title: Custom collisions
  description: Custom collisions can be applied in the generated mesh component via
    UCX_ prefix as read from the source file.
  buttons:
  - buttonText: Learn More
    buttonLink: https://docs.athiangames.com/doc_fbximport#CreatingCollisions
- description: Built in support for designing changeable material property layout
    for every Mesh Component.
  title: Changeable Material Property
  image: "/images/rfbxi_features_changeablematerial.jpg"
- title: Custom FBX Actor
  description: 'Every FBX scene imported is represented by a custom actor which hosts
    all the Procedural Mesh Components generated from the nodes read from the source
    file. Hence every FBX scene can have its own set of custom logic, allowing user
    to implement this plugin in number of various scenarios, from importing larger
    scenes, to interactive smaller props like weapons , barrels, etc. You can also
    use the custom actor to select specific fbx node section hide/isolate or update
    materials for that section accordingly. '
  image: "/images/rfbxi_features_customfbxactor.jpg"
- title: Load and Save System
  description: Load and Save System implemented for storing the Imported FBX Meshes
    in desired location in hard drive, and loading it without importing it all over
    again, in the next session.
  image: "/images/rfbxi_features_loadingandsaving.jpg"
  buttons:
  - buttonText: Learn More
    buttonLink: https://docs.athiangames.com/doc_fbximport#LoadingAndSaving
description: 'With this plugin, you can import FBX files along with all the textures  and
  color values. Highly detailed FBX scenes can be loaded very fast, and grouping of
  a single file into Nodes and Material sections further allows you to generate an
  entire scene comprising of various interactive actors, from a single FBX file.
  '
<<<<<<< HEAD
<<<<<<< HEAD
fontFamily: Brutal
contentFontSize: 18px
=======
fontFamily: Courier New
contentFontSize: 16px
>>>>>>> parent of 9d1ffc0 (Product page enhancement)
=======
fontFamily: Source Sans Pro
contentFontSize: 20px
>>>>>>> parent of 64412d1 (product page enhancement)
featureTitleFontSize: 18px
featureTextFontSize: 16px
_template: product
---
