import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Github, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Plugins & Tools",
  description:
    "Professional Unreal Engine plugins and development tools from Athian Games",
};

// Mock plugins data
const plugins = [
  {
    id: "1",
    slug: "dynamic-mesh-occluder",
    name: "Dynamic Mesh Occluder",
    tagline: "Strip hidden body geometry under clothing — zero overdraw, zero runtime cost",
    description:
      "Automatically detect and bake away body mesh triangles hidden under clothing. An editor tool with a live 3D viewport, 13 tunable detection parameters, paint-override mode, and a Blueprint runtime component that swaps the occluded mesh automatically.",
    thumbnail: "/images/products/dynamic-mesh-occluder/thumbnail.jpg",
    category: "Character Tools",
    engineVersions: ["UE 5.7"],
    features: [
      "Auto occlusion detection (raycasting)",
      "Manual paint override mode",
      "Multiple outfits in one mapping table",
      "Blueprint runtime component",
    ],
    hasStore: false,
    storeSlug: null,
    githubUrl: null,
    docsUrl: "/docs/dynamic-mesh-occluder",
    productUrl: "/products/dynamic-mesh-occluder",
  },
  {
    id: "2",
    slug: "volumetric-nebula",
    name: "Volumetric Nebula System",
    tagline: "Production-ready space environment generation",
    description:
      "Create stunning volumetric nebulae with real-time procedural generation. Full Blueprint and C++ API with performance-optimized rendering.",
    thumbnail: "/images/plugins/nebula.jpg",
    category: "VFX",
    engineVersions: ["UE 5.1+"],
    features: [
      "Real-time procedural generation",
      "Blueprint & C++ API",
      "Performance-optimized LOD",
      "20+ included presets",
    ],
    hasStore: true,
    storeSlug: "volumetric-nebula",
    githubUrl: null,
    docsUrl: "/docs/volumetric-nebula",
  },
  {
    id: "2",
    slug: "dynamic-menu-controls",
    name: "Dynamic Menu Controls",
    tagline: "Adaptive UI system for modern games",
    description:
      "Intelligent menu system that automatically adapts to controller and keyboard inputs. Production-tested UI framework.",
    thumbnail: "/images/plugins/menu-controls.jpg",
    category: "UI",
    engineVersions: ["UE 5.0+"],
    features: [
      "Auto-detect input device",
      "Smooth input transitions",
      "Fully customizable",
      "Gamepad & KB/M support",
    ],
    hasStore: true,
    storeSlug: "dynamic-menu-controls",
    githubUrl: null,
    docsUrl: "/docs/dynamic-menu-controls",
  },
  {
    id: "3",
    slug: "procedural-terrain-pro",
    name: "Procedural Terrain Pro",
    tagline: "Advanced terrain generation system",
    description:
      "Professional terrain generation with multi-biome blending, erosion simulation, and runtime modification support.",
    thumbnail: "/images/plugins/terrain.jpg",
    category: "Tools",
    engineVersions: ["UE 5.1+"],
    features: [
      "Multi-biome blending",
      "Erosion simulation",
      "Runtime modification",
      "Splat map generation",
    ],
    hasStore: true,
    storeSlug: "procedural-terrain-pro",
    githubUrl: null,
    docsUrl: "/docs/procedural-terrain",
  },
  {
    id: "4",
    slug: "debug-draw-plus",
    name: "Debug Draw Plus",
    tagline: "Enhanced debugging visualization tools",
    description:
      "Extended debug drawing utilities for Unreal Engine. Open-source and free for all developers.",
    thumbnail: "/images/plugins/debug-draw.jpg",
    category: "Tools",
    engineVersions: ["UE 4.27", "UE 5.0+"],
    features: [
      "Enhanced debug shapes",
      "Persistent visualization",
      "Blueprint & C++ support",
      "Performance tracking",
    ],
    hasStore: false,
    storeSlug: null,
    githubUrl: "https://github.com/athiangames/debug-draw-plus",
    docsUrl: "https://github.com/athiangames/debug-draw-plus/wiki",
  },
];

export default function PluginsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Page header */}
        <div className="mb-12">
          <h1 className="mb-4">Plugins & Tools</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Production-ready plugins built for professional workflows.
            No bloat, no compromise. Just tools that solve real problems.
          </p>
        </div>

        {/* Plugins grid */}
        <div className="space-y-8">
          {plugins.map((plugin) => (
            <Card key={plugin.id} className="overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Thumbnail */}
                <div className="aspect-video lg:aspect-auto lg:col-span-1 bg-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">
                      Plugin Preview
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="primary">{plugin.category}</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 p-6 lg:p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">
                        {plugin.name}
                      </h2>
                      <p className="text-muted-foreground">
                        {plugin.tagline}
                      </p>
                    </div>
                    {!plugin.hasStore && (
                      <Badge variant="accent">Free & Open Source</Badge>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {plugin.description}
                  </p>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {plugin.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Engine versions */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {plugin.engineVersions.map((version) => (
                      <Badge key={version} variant="outline">
                        {version}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    {(plugin as any).productUrl && (
                      <Link href={(plugin as any).productUrl}>
                        <Button>
                          View Product
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    )}

                    {plugin.hasStore && (
                      <Link href={`/store/${plugin.storeSlug}`}>
                        <Button variant={(plugin as any).productUrl ? "secondary" : "primary"}>
                          View in Store
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    )}

                    {plugin.githubUrl && (
                      <Link
                        href={plugin.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant={plugin.hasStore || (plugin as any).productUrl ? "secondary" : "primary"}>
                          <Github className="w-4 h-4 mr-2" />
                          View on GitHub
                        </Button>
                      </Link>
                    )}

                    <Link
                      href={plugin.docsUrl}
                      target={plugin.docsUrl.startsWith("http") ? "_blank" : undefined}
                      rel={plugin.docsUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <Button variant="secondary">
                        <FileText className="w-4 h-4 mr-2" />
                        Documentation
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-accent/5 rounded-xl border border-primary/20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">
              Building something specific?
            </h2>
            <p className="text-muted-foreground mb-6">
              Need a custom plugin or tool for your project? Athian Games
              offers bespoke Unreal Engine development services.
            </p>
            <Link href="/contact?type=custom-work">
              <Button>
                Request Custom Development
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
