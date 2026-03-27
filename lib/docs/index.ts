import type { ProductDocumentation } from "./types";
import minimapDocs from "./products/minimap";
import artOfShaderDistortionDocs from "./products/art-of-shader-distortion-and-glitches";
import proceduralVortexTunnelDocs from "./products/procedural-vortex-tunnel";
import runtimeFbxImportDocs from "./products/runtime-fbx-import";
import artOfShaderDocs from "./products/art-of-shader";
import dynamicMeshOccluderDocs from "./products/dynamic-mesh-occluder";

export type { DocSection, ProductDocumentation } from "./types";

// Registry: product slug → documentation
const registry: Record<string, ProductDocumentation> = {
  "minimap-map-and-navigation-system": minimapDocs,
  "art-of-shader-distortion-and-glitches": artOfShaderDistortionDocs,
  "procedural-vortex-tunnel": proceduralVortexTunnelDocs,
  "runtime-fbx-import": runtimeFbxImportDocs,
  "art-of-shader": artOfShaderDocs,
  "dynamic-mesh-occluder": dynamicMeshOccluderDocs,
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

