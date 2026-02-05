import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Book, ExternalLink, Home, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { getProductBySlug } from "@/lib/products/productData";
import { getDocumentation } from "@/lib/docs/docsData";

interface DocsPageProps {
  params: {
    slug?: string[];
  };
}

export async function generateMetadata({
  params,
}: DocsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const productSlug = slug?.[0];

  if (!productSlug) {
    return {
      title: "Documentation - Athian Games",
      description: "Browse documentation for all Athian Games products",
    };
  }

  const product = getProductBySlug(productSlug);

  if (!product) {
    return {
      title: "Documentation Not Found",
    };
  }

  return {
    title: `${product.name} - Documentation`,
    description: `Complete documentation for ${product.name}`,
  };
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params;
  const productSlug = slug?.[0];
  const section = slug?.[1];

  // If no product slug, show documentation index
  if (!productSlug) {
    return <DocsIndex />;
  }

  const product = getProductBySlug(productSlug);

  if (!product) {
    notFound();
  }

  const docs = getDocumentation(productSlug);

  if (!docs) {
    notFound();
  }

  // Find current section or use overview
  const currentSection = section
    ? docs.sections.find(s => s.slug === section) || docs.sections[0]
    : docs.sections[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                <Book className="h-6 w-6" />
                <span className="hidden sm:inline">Athian Games</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Docs
                </Link>
                <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  Products
                </Link>
              </nav>
            </div>
            <Link href={product.externalUrl} target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-md hover:bg-accent transition-colors">
                <ExternalLink className="h-4 w-4" />
                <span className="hidden sm:inline">Marketplace</span>
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex gap-8 py-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Back to Product */}
              <Link
                href={`/products/${productSlug}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Home className="h-4 w-4 group-hover:text-primary transition-colors" />
                </div>
                <span>Back to Product</span>
              </Link>

              <div className="border-t pt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                  <Book className="h-3.5 w-3.5" />
                  {product.name}
                </h4>

                <nav className="space-y-1">
                  {docs.sections.map((sec, idx) => (
                    <Link
                      key={sec.slug}
                      href={`/docs/${productSlug}/${sec.slug}`}
                      className={`flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-all ${
                        currentSection.slug === sec.slug
                          ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium shadow-md shadow-primary/20"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                      }`}
                    >
                      <span className={`text-xs w-5 h-5 rounded-md flex items-center justify-center ${
                        currentSection.slug === sec.slug 
                          ? "bg-primary-foreground/20" 
                          : "bg-muted"
                      }`}>{String(idx + 1).padStart(2, '0')}</span>
                      <span className="flex-1 truncate">{sec.title}</span>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Quick Actions */}
              <div className="border-t pt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Quick Actions
                </h4>
                <div className="space-y-2">
                  <Link
                    href={product.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>View on Marketplace</span>
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/docs" className="hover:text-foreground transition-colors">Docs</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href={`/docs/${productSlug}`} className="hover:text-foreground transition-colors truncate">
                {product.name}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground truncate">{currentSection.title}</span>
            </div>

            {/* Page Header */}
            <div className="mb-10 pb-8 border-b border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1.5 h-10 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                <h1 className="text-4xl font-bold tracking-tight">{currentSection.title}</h1>
              </div>
              {currentSection.description && (
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  {currentSection.description}
                </p>
              )}
            </div>

            {/* Content */}
            <article
              className="prose prose-slate dark:prose-invert max-w-none text-foreground/90
                [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h2]:border-b [&_h2]:border-border [&_h2]:pb-4 [&_h2]:mb-8 [&_h2]:mt-14 [&_h2]:scroll-mt-24
                [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:text-foreground [&_h3]:mb-5 [&_h3]:mt-10 [&_h3]:flex [&_h3]:items-center [&_h3]:gap-3 [&_h3]:scroll-mt-24
                [&_h3]:before:content-[''] [&_h3]:before:w-1 [&_h3]:before:h-7 [&_h3]:before:bg-primary [&_h3]:before:rounded-full
                [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:tracking-tight [&_h4]:text-foreground [&_h4]:mb-4 [&_h4]:mt-8 [&_h4]:scroll-mt-24
                [&_p]:text-base [&_p]:leading-[1.9] [&_p]:text-foreground/85 [&_p]:mb-6
                [&_ul]:mb-8 [&_ul]:space-y-2 [&_ul]:text-foreground/85 [&_ul]:pl-0 [&_ul]:list-none
                [&_ul>li]:relative [&_ul>li]:pl-7 [&_ul>li]:before:content-['▸'] [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:text-primary [&_ul>li]:before:font-bold
                [&_ol]:mb-8 [&_ol]:space-y-3 [&_ol]:text-foreground/85 [&_ol]:pl-0 [&_ol]:list-none [&_ol]:counter-reset-[item]
                [&_ol>li]:relative [&_ol>li]:pl-10 [&_ol>li]:counter-increment-[item]
                [&_ol>li]:before:content-[counter(item)] [&_ol>li]:before:absolute [&_ol>li]:before:left-0 [&_ol>li]:before:w-7 [&_ol>li]:before:h-7 [&_ol>li]:before:bg-primary/10 [&_ol>li]:before:text-primary [&_ol>li]:before:rounded-full [&_ol>li]:before:flex [&_ol>li]:before:items-center [&_ol>li]:before:justify-center [&_ol>li]:before:text-sm [&_ol>li]:before:font-semibold
                [&_li]:leading-[1.9] [&_li]:py-1.5
                [&_section]:mb-16 [&_section]:p-6 [&_section]:rounded-xl [&_section]:bg-gradient-to-br [&_section]:from-muted/30 [&_section]:to-transparent [&_section]:border [&_section]:border-border/50
                [&_a]:text-primary [&_a]:font-medium [&_a]:no-underline [&_a]:border-b [&_a]:border-primary/30 hover:[&_a]:border-primary [&_a]:transition-colors [&_a]:pb-0.5
                [&_strong]:font-semibold [&_strong]:text-foreground
                [&_code]:px-2.5 [&_code]:py-1 [&_code]:rounded-md [&_code]:bg-primary/10 [&_code]:text-sm [&_code]:font-mono [&_code]:text-primary [&_code]:border [&_code]:border-primary/20
                [&_pre]:my-10 [&_pre]:bg-slate-950 [&_pre]:border [&_pre]:border-slate-800 [&_pre]:rounded-xl [&_pre]:p-6 [&_pre]:overflow-x-auto [&_pre]:shadow-lg
                [&_pre_code]:p-0 [&_pre_code]:bg-transparent [&_pre_code]:border-0 [&_pre_code]:text-slate-50 [&_pre_code]:text-sm
                [&_blockquote]:my-10 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-6 [&_blockquote]:py-4 [&_blockquote]:bg-primary/5 [&_blockquote]:rounded-r-lg [&_blockquote]:italic [&_blockquote]:text-foreground/80
                [&_hr]:my-12 [&_hr]:border-border
                [&_table]:my-10 [&_table]:w-full [&_table]:border-collapse [&_table]:rounded-xl [&_table]:overflow-hidden [&_table]:shadow-sm [&_table]:border [&_table]:border-border
                [&_th]:bg-muted [&_th]:p-4 [&_th]:text-left [&_th]:font-semibold [&_th]:text-foreground [&_th]:border-b [&_th]:border-border
                [&_td]:p-4 [&_td]:border-b [&_td]:border-border/50 [&_td]:text-foreground/85
                [&_tr:last-child_td]:border-b-0
                [&_tr:hover]:bg-muted/30 [&_tr]:transition-colors
                [&_img]:rounded-xl [&_img]:border [&_img]:border-border [&_img]:shadow-lg [&_img]:my-10
                [&_.callout-info]:bg-blue-500/10 [&_.callout-info]:border-l-4 [&_.callout-info]:border-blue-500 [&_.callout-info]:p-4 [&_.callout-info]:rounded-r-lg [&_.callout-info]:my-6
                [&_.callout-warning]:bg-yellow-500/10 [&_.callout-warning]:border-l-4 [&_.callout-warning]:border-yellow-500 [&_.callout-warning]:p-4 [&_.callout-warning]:rounded-r-lg [&_.callout-warning]:my-6
                [&_.callout-tip]:bg-green-500/10 [&_.callout-tip]:border-l-4 [&_.callout-tip]:border-green-500 [&_.callout-tip]:p-4 [&_.callout-tip]:rounded-r-lg [&_.callout-tip]:my-6
                [&_.feature-grid]:grid [&_.feature-grid]:md:grid-cols-2 [&_.feature-grid]:gap-4 [&_.feature-grid]:my-8
                [&_.feature-card]:bg-muted/50 [&_.feature-card]:p-4 [&_.feature-card]:rounded-lg [&_.feature-card]:border [&_.feature-card]:border-border/50"
              dangerouslySetInnerHTML={{ __html: currentSection.content }}
            />

            {/* Navigation */}
            <div className="flex items-center justify-between mt-16 pt-8 border-t gap-4">
              {currentSection.prev ? (
                <Link
                  href={`/docs/${productSlug}/${currentSection.prev.slug}`}
                  className="flex items-center gap-4 px-5 py-4 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all group flex-1 max-w-xs"
                >
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-0.5 transition-all" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Previous</div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{currentSection.prev.title}</div>
                  </div>
                </Link>
              ) : <div />}

              {currentSection.next && (
                <Link
                  href={`/docs/${productSlug}/${currentSection.next.slug}`}
                  className="flex items-center gap-4 px-5 py-4 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all group ml-auto flex-1 max-w-xs justify-end"
                >
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Next</div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{currentSection.next.title}</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function DocsIndex() {
  // Get all products that have documentation
  const productsWithDocs = [
    { slug: "minimap-map-and-navigation-system", name: "Minimap, Map and Navigation System", description: "Complete guide for the minimap plugin", icon: "🗺️" },
    { slug: "art-of-shader-distortion-and-glitches", name: "Art Of Shader - Distortion And Glitches", description: "Shader effects and post-process materials", icon: "✨" },
  ];

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
              <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                Products
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Book className="h-4 w-4" />
            Developer Resources
          </div>
          <h1 className="text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive guides, tutorials, and API references for all Athian Games products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {productsWithDocs.map((product) => (
            <Link
              key={product.slug}
              href={`/docs/${product.slug}`}
              className="group p-6 rounded-xl border border-border/50 hover:border-primary/50 bg-gradient-to-br from-muted/30 to-transparent hover:from-primary/5 hover:to-transparent transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {product.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20">
          <h2 className="text-2xl font-bold mb-3">Can&apos;t find what you&apos;re looking for?</h2>
          <p className="text-muted-foreground mb-6">
            Browse all our products or join our Discord community for support
          </p>
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
