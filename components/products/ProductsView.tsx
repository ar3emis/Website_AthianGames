"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getCategoryHref, productCategoriesWithAll } from "@/lib/products/categories";

// Athian Games Products - from your marketplace
const allProducts = [
	{
		id: "1",
		slug: "minimap-map-and-navigation-system",
		name: "Minimap, Map and Navigation System",
		shortDescription:
			"Build a fully customized and texture based Minimap, Map and Navigation System for your next big title",
		price: null,
		category: "plugins",
		engineVersions: [],
		isExternal: true,
		externalUrl:
			"https://www.unrealengine.com/marketplace/en-US/product/minimap-map-and-navigation-system",
		platform: "unreal-marketplace",
		isFeatured: true,
		thumbnail: "/images/products/minimap/thumbnail_recreated.png",
	},
	{
		id: "2",
		slug: "procedural-vortex-tunnel",
		name: "Procedural Vortex Tunnel",
		shortDescription:
			"Redefine your imagination with this highly customizable Material Driven Vortex System along a given spline path",
		price: null,
		category: "shaders",
		engineVersions: [],
		isExternal: true,
		externalUrl:
			"https://www.unrealengine.com/marketplace/en-US/product/a35f1131e36843f28df349d8f63b6660",
		platform: "unreal-marketplace",
		isFeatured: true,
		thumbnail: "/images/products/procedural-vortex-tunnel/pvt_thumb.jpg",
	},
	{
		id: "23",
		slug: "radar-system-with-minimap",
		name: "Radar System with Minimap",
		shortDescription:
			"Blueprint radar and minimap system for tracking actors, markers, and navigation targets",
		price: null,
		category: "blueprints",
		engineVersions: [],
		isExternal: true,
		externalUrl:
			"https://www.fab.com/listings/77159867-e5d9-43c0-b7d2-4fa78ffdca81",
		platform: "fab",
		thumbnail: "/images/products/radar-system-with-minimap/thumbnail_refined.png",
	},
	{
		id: "24",
		slug: "treeview-for-umg",
		name: "TreeView for UMG",
		shortDescription:
			"Blueprint-ready tree view widget with custom rows, nested nodes, selection, and expansion events",
		price: null,
		category: "umg",
		engineVersions: [],
		isExternal: true,
		externalUrl:
			"https://www.fab.com/listings/86b5e8eb-03a6-4b56-84b7-5853e2d8f16e",
		platform: "fab",
		thumbnail: "/images/products/treeview-for-umg/thumbnail.png",
	},
	{
		id: "3",
		slug: "art-of-shader-distortion-and-glitches",
		name: "Art Of Shader - Distortion And Glitches",
		shortDescription:
			"A series of customizable Shaders and Niagara FX that gives distorted and glitched effects to your actors and scenes",
		price: null,
		category: "shaders",
		engineVersions: [],
		isExternal: true,
		externalUrl:
			"https://www.fab.com/listings/0223faf6-76e1-4049-ae3a-82ea1daa296f",
		platform: "fab",
		isFeatured: true,
		thumbnail: "/images/products/art-of-shader-distortion-glitches/aos_dg_thumbnail_clean.png",
	},
	{
		id: "4",
		slug: "art-of-shader-advanced-distortion",
		name: "Art Of Shader - Advanced Distortion",
		shortDescription:
			"Advanced distortion effects and post-process shaders for stunning visual effects",
		price: null,
		category: "shaders",
		engineVersions: [],
		isExternal: true,
		externalUrl:
			"https://www.fab.com/listings/3546d4b0-84f7-494d-9f21-867ca5cea3e9",
		platform: "fab",
		thumbnail: "/images/products/art-of-shader-advanced-distortion/aos_ad_thumbnail_clean.png",
	},
	{
		id: "5",
		slug: "art-of-shader-film-and-special-effects",
		name: "Art Of Shader - Film And Special Effects",
		shortDescription: "Professional film-grade post-process effects and shaders",
		price: null,
		category: "shaders",
		engineVersions: [],
		isExternal: true,
		externalUrl:
			"https://www.fab.com/listings/a494f18d-6db0-4b51-8525-bfeaf6efb749",
		platform: "fab",
		thumbnail: "/images/products/art-of-shader-film-special-effects/aos_fse_thumbnail_clean.png",
	},
	{
		id: "6",
		slug: "art-of-shader-stylized-post-process",
		name: "Art Of Shader - Stylized Post Process",
		shortDescription: "Stylized post-process effects for artistic game visuals",
		price: null,
		category: "shaders",
		engineVersions: [],
		isExternal: true,
		externalUrl:
			"https://www.fab.com/listings/2a90a4b2-44d1-4150-be68-2b4cd53b869d",
		platform: "fab",
		thumbnail: "/images/products/art-of-shader-stylized-post-process/aos_spp_thumbnail_recreated.png",
	},
	{
		id: "7",
		slug: "niagara-curves-and-surfaces",
		name: "Niagara Curves and Surfaces",
		shortDescription:
			"Elevate your VFX to the next level with this pack of customizable geometrical shapes",
		price: null,
		category: "vfx",
		engineVersions: [],
		isExternal: true,
		externalUrl:
			"https://www.fab.com/listings/51e915a1-7046-4737-8fde-3cf98d777401",
		platform: "fab",
		thumbnail: "/images/products/niagara-curves-surfaces/thumbnail_refined.png",
	},
	{
		id: "8",
		slug: "runtime-fbx-import",
		name: "Runtime FBX Import for Unreal Engine",
		shortDescription: "Asynchronously Import FBX files in your Unreal projects, in runtime",
		price: null,
		category: "plugins",
		engineVersions: [],
		isExternal: true,
		externalUrl:
			"https://www.fab.com/listings/45f2d0d9-ecdf-45ff-871d-85b16bc14ca7",
		platform: "fab",
		thumbnail: "/images/products/runtime-fbx-import/thumbnail_recreated.png",
	},
	{
		id: "9",
		slug: "volumetric-clouds-and-nebula",
		name: "Volumetric Clouds and Nebula",
		shortDescription:
			"Create stunning volumetric clouds and nebula effects with this highly customizable system",
		price: 39.99,
		category: "volumetric",
		engineVersions: [],
		isExternal: true,
		externalUrl:
			"https://www.fab.com/listings/3c902769-c907-4901-bb98-dfd9e1c5cf53",
		platform: "fab",
		thumbnail: "/images/products/volumetric-clouds-nebula/thumbnail_refined.png",
	},
	{
		id: "12",
		slug: "procedural-skybox",
		name: "Procedural Skybox",
		shortDescription:
			"Fully procedural and customizable skybox system with day/night cycle support",
		price: 29.99,
		category: "shaders",
		engineVersions: [],
		isExternal: true,
		externalUrl:
			"https://www.fab.com/listings/a232fdfe-f5d0-4527-8ea1-21994d4500ff",
		platform: "fab",
		thumbnail: "/images/products/procedural-skybox/thumbnail.jpg",
	},
	{
		id: "13",
		slug: "volumetric-black-hole",
		name: "Volumetric Black Hole",
		shortDescription:
			"Realistic volumetric black hole effect with accretion disk, gravitational lensing and distortion",
		price: 34.99,
		category: "volumetric",
		engineVersions: [],
		isExternal: true,
		externalUrl:
			"https://www.fab.com/listings/5696e48e-ad7f-4455-9679-187dfaff62d0",
		platform: "fab",
		thumbnail: "/images/products/volumetric-black-hole/thumbnail_recreated.png",
	},
	{
		id: "14",
		slug: "procedural-galaxy-system",
		name: "Procedural Galaxy System",
		shortDescription:
			"Generate stunning procedural galaxies with spiral arms, star clusters and cosmic dust",
		price: 49.99,
		category: "vfx",
		engineVersions: [],
		isExternal: true,
		externalUrl:
			"https://www.fab.com/listings/fc525aa7-eb3d-4e69-8d85-30eca12988d9",
		platform: "fab",
		isFeatured: true,
		thumbnail: "/images/products/procedural-galaxy-system/thumbnail_recreated.png",
	},
	{
		id: "10",
		slug: "aos-toons",
		name: "AOS Toons",
		shortDescription: "Stylized toon shading and cel-shaded effects",
		price: null,
		category: "shaders",
		engineVersions: [],
		isExternal: true,
		externalUrl: "https://www.fab.com/listings/328c9a79-1d07-4f91-b961-21e8b990fc46",
		platform: "fab",
		thumbnail: "/images/products/aos-toons/aos_toons_thumbnail_clean.png",
	},
	{
		id: "11",
		slug: "art-of-shader-megapack",
		name: "Art Of Shader - Megapack",
		shortDescription:
			"Complete collection of all Art of Shader packs - over 150 post-process materials and VFX",
		price: null,
		category: "shaders",
		engineVersions: [],
		isExternal: true,
		externalUrl: "https://www.fab.com/listings/9ff6c455-fd2a-44fc-a9b3-f55660ed90ad",
		platform: "fab",
		isFeatured: true,
		thumbnail: "/images/products/art-of-shader-megapack/aos_megapack_thumbnail_clean.png",
	},
	{
		id: "17",
		slug: "fabric-ai",
		name: "FabricAI",
		shortDescription: "Cross-language runtime asset generation and automation for Unreal Engine",
		price: 79.99,
		category: "wip",
		engineVersions: [],
		isExternal: false,
		externalUrl: "",
		platform: "athian-games",
		isFeatured: true,
		thumbnail: "/images/products/fabric-ai/thumbnail.jpg",
	},
];

interface ProductsViewProps {
	initialProducts?: typeof allProducts;
	initialCategory?: string;
}

export function ProductsView({ initialProducts, initialCategory = "all" }: ProductsViewProps) {
	const [selectedCategory, setSelectedCategory] = useState(initialCategory);
	// Use initialProducts if provided (server-filtered), otherwise use hardcoded list
	type ProductCardItem = (typeof allProducts)[number] & { href?: string };
	const products = (initialProducts || allProducts) as ProductCardItem[];
	const metahumanCollectionCard: ProductCardItem = {
		id: "metahuman-category-card",
		slug: "metahuman",
		name: "Metahumans",
		shortDescription:
			"Browse all Athian Games MetaHuman character packs from a single entry point.",
		price: null,
		category: "metahuman",
		engineVersions: [],
		isExternal: false,
		externalUrl: "",
		platform: "athian-games",
		isFeatured: false,
		thumbnail: "/images/products/metahuman-category/thumbnail_ai.webp",
		href: getCategoryHref("metahuman"),
	};

	const filteredProducts =
		selectedCategory === "all"
			? products.filter((p) => p.category !== "wip")
			: products.filter((p) => p.category === selectedCategory);

	const displayedProducts: ProductCardItem[] =
		selectedCategory === "all"
			? (() => {
					let metahumanInserted = false;

					return filteredProducts.flatMap((product) => {
						if (product.category !== "metahuman") {
							return [product];
						}

						if (metahumanInserted) {
							return [];
						}

						metahumanInserted = true;
						return [metahumanCollectionCard];
					});
				})()
			: filteredProducts;

	return (
		<div>
			{/* Category tabs */}
			<div className="mb-8 border-b border-border overflow-x-auto">
				<div className="flex space-x-1 min-w-max">
					{productCategoriesWithAll.map((category) => (
						<button
							key={category.id}
							onClick={() => setSelectedCategory(category.id)}
							className={`px-4 py-3 font-medium text-sm transition-colors border-b-2 flex items-center gap-2 ${
								selectedCategory === category.id
									? "border-primary text-primary"
									: "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
							}`}
						>
							{category.name}
							{category.badge && (
								<Badge variant="secondary" className="text-xs">
									WIP
								</Badge>
							)}
						</button>
					))}
				</div>
			</div>

			{/* Product count */}
			<div className="mb-6">
				<p className="text-muted-foreground">
					Showing{" "}
					<span className="font-semibold text-foreground">
						{displayedProducts.length}
					</span>{" "}
					{selectedCategory === "all"
						? "products"
						: productCategoriesWithAll.find((c) => c.id === selectedCategory)?.name.toLowerCase()}
				</p>
			</div>

			{/* Products grid */}
			<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{displayedProducts.map((product) => (
					<Link key={product.id} href={product.href || `/products/${product.slug}`}>
						<Card hover className="h-full group cursor-pointer">
							<div className="aspect-video relative bg-muted overflow-hidden">
								{product.thumbnail ? (
									<>
										<img
											src={product.thumbnail}
											alt={product.name}
											className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
											onError={(event) => {
												event.currentTarget.onerror = null;
												event.currentTarget.src = "/images/companylogo.png";
												event.currentTarget.className =
													"h-full w-full object-contain bg-muted p-8 transition-transform duration-300 group-hover:scale-105";
											}}
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
			{displayedProducts.length === 0 && (
				<div className="text-center py-16">
					<p className="text-muted-foreground text-lg">
						No products found in this category yet.
					</p>
				</div>
			)}
		</div>
	);
}

