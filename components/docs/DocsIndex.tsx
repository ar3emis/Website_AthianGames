import Link from "next/link";
import { Book, ArrowRight } from "lucide-react";

const PRODUCTS_WITH_DOCS = [
  {
    slug: "minimap-map-and-navigation-system",
    name: "Minimap, Map and Navigation System",
    description: "Texture-based minimaps, POI system, interactive map, and navigation waypoints.",
    icon: "🗺️",
  },
  {
    slug: "art-of-shader-distortion-and-glitches",
    name: "Art Of Shader — Distortion & Glitches",
    description: "40 customizable distortion and glitch post-process shaders.",
    icon: "📺",
  },
  {
    slug: "procedural-vortex-tunnel",
    name: "Procedural Vortex Tunnel",
    description: "Spline-based vortex tunnels with displacement materials, Niagara FX, and pawn movement.",
    icon: "🌀",
  },
  {
    slug: "runtime-fbx-import",
    name: "Runtime FBX Import",
    description: "Async FBX import at runtime with auto textures, custom collisions, and save/load.",
    icon: "📦",
  },
  {
    slug: "dynamic-mesh-occluder",
    name: "Dynamic Mesh Occluder",
    description: "Strip hidden body geometry under clothing in the editor — zero GPU overdraw at runtime.",
    icon: "👗",
  },
];

export default function DocsIndex() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
              <Book className="h-6 w-6 text-primary" />
              <span>Athian Games</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/docs" className="text-foreground font-medium">Documentation</Link>
              <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">Products</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-20">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Book className="h-4 w-4" />
            Developer Resources
          </div>
          <h1 className="text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive guides and references for every Athian Games plugin.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {PRODUCTS_WITH_DOCS.map((product) => (
            <Link
              key={product.slug}
              href={`/docs/${product.slug}`}
              className="group p-6 rounded-xl border border-border/50 hover:border-primary/50 bg-gradient-to-br from-muted/30 to-transparent hover:from-primary/5 hover:to-transparent transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shrink-0">
                  {product.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-1 shrink-0" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20">
          <h2 className="text-2xl font-bold mb-3">Can&apos;t find what you&apos;re looking for?</h2>
          <p className="text-muted-foreground mb-6">Browse all products or join our Discord community for support.</p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Browse Products
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="https://discord.com/invite/BJTZSs3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
            >
              Join Discord
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

