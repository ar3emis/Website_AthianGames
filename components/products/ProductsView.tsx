"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

// Product categories
const categories = [
  { id: "all", name: "All Products" },
  { id: "plugins", name: "Plugins" },
  { id: "assets", name: "Assets" },
  { id: "tools", name: "Tools" },
  { id: "vfx", name: "VFX" },
  { id: "materials", name: "Materials" },
  { id: "blueprints", name: "Blueprints" },
];

// Athian Games Products - from your marketplace
const allProducts = [
  {
    id: "1",
    slug: "minimap-map-and-navigation-system",
    name: "Minimap, Map and Navigation System",
    shortDescription: "Build a fully customized and texture based Minimap, Map and Navigation System for your next big title",
    price: null, // Check Fab/Marketplace for current price
    category: "plugins",
    engineVersions: ["UE 4.27", "UE 5.0+"],
    isExternal: true,
    externalUrl: "https://www.unrealengine.com/marketplace/en-US/product/minimap-map-and-navigation-system",
    platform: "unreal-marketplace",
    isFeatured: true,
    thumbnail: "/images/products/minimap/minimap_thumb.jpg",
  },
  {
    id: "2",
    slug: "procedural-vortex-tunnel",
    name: "Procedural Vortex Tunnel",
    shortDescription: "Redefine your imagination with this highly customizable Material Driven Vortex System along a given spline path",
    price: null,
    category: "tools",
    engineVersions: ["UE 4.27", "UE 5.0+"],
    isExternal: true,
    externalUrl: "https://www.unrealengine.com/marketplace/en-US/product/a35f1131e36843f28df349d8f63b6660",
    platform: "unreal-marketplace",
    isFeatured: true,
    thumbnail: "/images/products/procedural-vortex-tunnel/pvt_thumb.jpg",
  },
  {
    id: "3",
    slug: "art-of-shader-distortion-and-glitches",
    name: "Art Of Shader - Distortion And Glitches",
    shortDescription: "A series of customizable Shaders and Niagara FX that gives distorted and glitched effects to your actors and scenes",
    price: null,
    category: "vfx",
    engineVersions: ["UE 4.27", "UE 5.0+"],
    isExternal: true,
    externalUrl: "https://www.unrealengine.com/marketplace/en-US/product/art-of-shader-stylized-post-process-pack",
    platform: "unreal-marketplace",
    isFeatured: true,
    thumbnail: "/images/products/art-of-shader-distortion-glitches/aos_dg_thumb.jpg",
  },
  {
    id: "4",
    slug: "art-of-shader-advanced-distortion",
    name: "Art Of Shader - Advanced Distortion",
    shortDescription: "Advanced distortion effects and post-process shaders for stunning visual effects",
    price: null,
    category: "vfx",
    engineVersions: ["UE 4.27", "UE 5.0+"],
    isExternal: true,
    externalUrl: "https://www.unrealengine.com/marketplace/en-US/product/art-of-shader-advanced-distortion",
    platform: "unreal-marketplace",
    thumbnail: "/images/products/art-of-shader-advanced-distortion/aos_ad_thumbnail.png",
  },
  {
    id: "5",
    slug: "art-of-shader-film-and-special-effects",
    name: "Art Of Shader - Film And Special Effects",
    shortDescription: "Professional film-grade post-process effects and shaders",
    price: null,
    category: "vfx",
    engineVersions: ["UE 4.27", "UE 5.0+"],
    isExternal: true,
    externalUrl: "https://www.unrealengine.com/marketplace/en-US/product/art-of-shader-film-and-special-effects",
    platform: "unreal-marketplace",
    thumbnail: "/images/products/art-of-shader-film-special-effects/aos_fse_thumb.png",
  },
  {
    id: "6",
    slug: "art-of-shader-stylized-post-process",
    name: "Art Of Shader - Stylized Post Process",
    shortDescription: "Stylized post-process effects for artistic game visuals",
    price: null,
    category: "vfx",
    engineVersions: ["UE 4.27", "UE 5.0+"],
    isExternal: true,
    externalUrl: "https://www.unrealengine.com/marketplace/en-US/product/art-of-shader-stylized-post-process",
    platform: "unreal-marketplace",
    thumbnail: "/images/products/art-of-shader-stylized-post-process/aos_stylizedpostprocess_thumb.png",
  },
  {
    id: "7",
    slug: "niagara-curves-and-surfaces",
    name: "Niagara Curves and Surfaces",
    shortDescription: "Elevate your VFX to the next level with this pack of customizable geometrical shapes",
    price: null,
    category: "vfx",
    engineVersions: ["UE 5.0+"],
    isExternal: true,
    externalUrl: "https://www.unrealengine.com/marketplace/en-US/product/d967bdcc8ff94010acb5b84e9b82cce5",
    platform: "unreal-marketplace",
    thumbnail: "/images/products/niagara-curves-surfaces/curvesandsurfaces_thumb.jpg",
  },
  {
    id: "8",
    slug: "runtime-fbx-import",
    name: "Runtime FBX Import for Unreal Engine",
    shortDescription: "Asynchronously Import FBX files in your Unreal projects, in runtime",
    price: null,
    category: "tools",
    engineVersions: ["UE 4.27", "UE 5.0+"],
    isExternal: true,
    externalUrl: "https://www.unrealengine.com/marketplace/en-US/slug/runtime-fbx-import-asynchronous",
    platform: "unreal-marketplace",
    thumbnail: "/images/products/runtime-fbx-import/fbximport.png",
  },
  {
    id: "9",
    slug: "volumetric-clouds-and-nebula",
    name: "Volumetric Clouds and Nebula",
    shortDescription: "Create stunning volumetric clouds and nebula effects with this highly customizable system",
    price: 39.99,
    category: "vfx",
    engineVersions: ["UE 5.0+"],
    isExternal: true,
    externalUrl: "https://www.fab.com/sellers/Athian%20Games",
    platform: "fab",
    thumbnail: "/images/products/volumetric-clouds-nebula/cs_screenshot01.jpg",
  },
  {
    id: "12",
    slug: "procedural-skybox",
    name: "Procedural Skybox",
    shortDescription: "Fully procedural and customizable skybox system with day/night cycle support",
    price: 29.99,
    category: "vfx",
    engineVersions: ["UE 5.0+"],
    isExternal: true,
    externalUrl: "https://www.fab.com/sellers/Athian%20Games",
    platform: "fab",
    thumbnail: "/images/products/procedural-skybox/cs_screenshot02.jpg",
  },
  {
    id: "13",
    slug: "volumetric-black-hole",
    name: "Volumetric Black Hole",
    shortDescription: "Realistic volumetric black hole effect with accretion disk, gravitational lensing and distortion",
    price: 34.99,
    category: "vfx",
    engineVersions: ["UE 5.0+"],
    isExternal: true,
    externalUrl: "https://www.fab.com/sellers/Athian%20Games",
    platform: "fab",
    thumbnail: "/images/products/volumetric-black-hole/HighresScreenshot00006.png",
  },
  {
    id: "14",
    slug: "procedural-galaxy-system",
    name: "Procedural Galaxy System",
    shortDescription: "Generate stunning procedural galaxies with spiral arms, star clusters and cosmic dust",
    price: 49.99,
    category: "vfx",
    engineVersions: ["UE 5.0+"],
    isExternal: true,
    externalUrl: "https://www.fab.com/sellers/Athian%20Games",
    platform: "fab",
    isFeatured: true,
    thumbnail: "/images/products/procedural-galaxy-system/cs_screenshot05.jpg",
  },
  {
    id: "10",
    slug: "aos-toons",
    name: "AOS Toons",
    shortDescription: "Stylized toon shading and cel-shaded effects",
    price: null,
    category: "materials",
    engineVersions: ["UE 4.27", "UE 5.0+"],
    isExternal: true,
    externalUrl: "https://www.unrealengine.com/marketplace/en-US/product/aos-toons",
    platform: "unreal-marketplace",
    thumbnail: "/images/products/aos-toons/aos_toons_thumb.png",
  },
  {
    id: "11",
    slug: "art-of-shader-megapack",
    name: "Art Of Shader - Megapack",
    shortDescription: "Complete collection of all Art of Shader packs - over 150 post-process materials and VFX",
    price: null,
    category: "vfx",
    engineVersions: ["UE 4.27", "UE 5.0+"],
    isExternal: false,
    externalUrl: "",
    platform: "unreal-marketplace",
    isFeatured: true,
    thumbnail: "/images/products/art-of-shader-megapack/aos_dg_thumb.jpg",
  },
];

export function ProductsView() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Category tabs */}
      <div className="mb-8 border-b border-border overflow-x-auto">
        <div className="flex space-x-1 min-w-max">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-3 font-medium text-sm transition-colors border-b-2 ${
                selectedCategory === category.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product count */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span>{" "}
          {selectedCategory === "all" ? "products" : categories.find(c => c.id === selectedCategory)?.name.toLowerCase()}
        </p>
      </div>

      {/* Products grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.slug}`}>
            <Card hover className="h-full group cursor-pointer">
              <div className="aspect-video relative bg-muted overflow-hidden">
                {product.thumbnail ? (
                  <>
                    <Image
                      src={product.thumbnail}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Hover crosshair effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-white/60 flex items-center justify-center">
                        <div className="absolute w-0.5 h-6 bg-white/60" />
                        <div className="absolute w-6 h-0.5 bg-white/60" />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">
                      Product Preview
                    </span>
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <Badge variant="primary" className="text-xs">
                    {categories.find(c => c.id === product.category)?.name || product.category}
                  </Badge>
                </div>
                {/* Price badge on thumbnail */}
                <div className="absolute bottom-3 right-3">
                  <span className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-sm font-bold shadow-lg">
                    {product.price ? `$${product.price}` : "View Price"}
                  </span>
                </div>
              </div>

              <CardHeader className="pb-3">
                <h3 className="text-base font-bold mb-1 group-hover:text-primary transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {product.shortDescription}
                </p>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      {/* Empty state */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">
            No products found in this category yet.
          </p>
        </div>
      )}
    </div>
  );
}
