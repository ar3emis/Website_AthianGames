import type { ProductDocumentation } from "./types";
import minimapDocs from "./products/minimap";
import artOfShaderDistortionDocs from "./products/art-of-shader-distortion-and-glitches";
import proceduralVortexTunnelDocs from "./products/procedural-vortex-tunnel";
import runtimeFbxImportDocs from "./products/runtime-fbx-import";
import artOfShaderDocs from "./products/art-of-shader";
import dynamicMeshOccluderDocs from "./products/dynamic-mesh-occluder";
import ultimateLevelDesignKitDocs from "./products/ultimate-level-design-kit";
import elevenLabsVoiceStudioDocs from "./products/elevenlabs-voice-studio";
import ultimateAIMeshGeneratorDocs from "./products/ultimate-ai-mesh-generator";
import databasesDocs from "./products/databases";
import treeViewForUmgDocs from "./products/treeview-for-umg";
import proceduralSkyboxDocs from "./products/procedural-skybox";

export type { DocSection, ProductDocumentation } from "./types";

// Registry: product slug → documentation
const registry: Record<string, ProductDocumentation> = {
  "minimap-map-and-navigation-system": minimapDocs,
  "art-of-shader-distortion-and-glitches": artOfShaderDistortionDocs,
  "procedural-vortex-tunnel": proceduralVortexTunnelDocs,
  "runtime-fbx-import": runtimeFbxImportDocs,
  "art-of-shader": artOfShaderDocs,
  "dynamic-mesh-occluder": dynamicMeshOccluderDocs,
  "ultimate-level-design-kit": ultimateLevelDesignKitDocs,
  "elevenlabs-voice-studio": elevenLabsVoiceStudioDocs,
  "ultimate-ai-mesh-generator": ultimateAIMeshGeneratorDocs,
  "databases": databasesDocs,
  "treeview-for-umg": treeViewForUmgDocs,
  "procedural-skybox": proceduralSkyboxDocs,
};

// AOS product family — all route to the shared AOS docs
const AOS_PRODUCTS = [
  "art-of-shader-distortion-and-glitches",
  "art-of-shader-advanced-distortion",
  "art-of-shader-film-and-special-effects",
  "art-of-shader-stylized-post-process",
  "aos-toons",
  "art-of-shader-megapack",
];

export function getDocumentation(productSlug: string): ProductDocumentation | null {
  if (AOS_PRODUCTS.includes(productSlug)) {
    return registry["art-of-shader"] ?? null;
  }
  return registry[productSlug] ?? null;
}

export function getAllDocumentation(): ProductDocumentation[] {
  return Object.values(registry);
}

