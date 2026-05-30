import type { ProductCategory } from "@/types";

export type ProductCategoryId = ProductCategory | "all";

export interface ProductCategoryConfig {
  id: ProductCategory;
  name: string;
  shortName: string;
  description: string;
  badge?: boolean;
}

export const productCategories: ProductCategoryConfig[] = [
  {
    id: "plugins",
    name: "Code Plugins",
    shortName: "plugins",
    description:
      "C++ and Blueprint-friendly Unreal Engine plugins for gameplay systems, runtime tools, capture workflows, and editor extensions.",
  },
  {
    id: "volumetric",
    name: "Volumetric",
    shortName: "volumetric products",
    description:
      "Volumetric space and atmosphere products including nebula, cloud, and black hole visuals built for cinematic scenes and game worlds.",
  },
  {
    id: "umg",
    name: "UMG",
    shortName: "UMG products",
    description:
      "UMG-focused products for building cleaner, more interactive interfaces with Blueprint-friendly UI workflows.",
  },
  {
    id: "metahuman",
    name: "Metahuman",
    shortName: "Metahuman assets",
    description:
      "MetaHuman-ready character packs for cinematic, horror, fantasy, and story-driven Unreal Engine projects.",
  },
  {
    id: "vfx",
    name: "VFX",
    shortName: "VFX products",
    description:
      "Niagara and real-time visual effects products for stylized, procedural, and cinematic Unreal Engine scenes.",
  },
  {
    id: "shaders",
    name: "Shaders",
    shortName: "shader products",
    description:
      "Shader and post-process products for stylized looks, distortion, film treatments, and scene rendering control.",
  },
  {
    id: "blueprints",
    name: "Blueprints",
    shortName: "Blueprint systems",
    description:
      "Blueprint-first gameplay systems, templates, and interaction frameworks designed for fast integration in Unreal projects.",
  },
  {
    id: "wip",
    name: "Work In Progress",
    shortName: "work in progress products",
    description:
      "Upcoming products in active development, previews, and early-access product pages from Athian Games.",
    badge: true,
  },
];

export const productCategoriesWithAll = [
  {
    id: "all" as const,
    name: "All Products",
    shortName: "products",
    description: "All Athian Games products.",
    badge: false,
  },
  ...productCategories,
];

export function getProductCategory(category: string) {
  return productCategories.find((entry) => entry.id === category) ?? null;
}

export function getCategoryHref(category: ProductCategory) {
  return `/products/category/${category}`;
}
