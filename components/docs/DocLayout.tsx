import Link from "next/link";
import { Book, ExternalLink, Home, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import type { ProductDocumentation, DocSection } from "@/lib/docs/types";

// All doc prose + component styles in one place — shared by every product
const ARTICLE_CLASSNAME = [
  "prose prose-slate dark:prose-invert max-w-none text-foreground/90",
  "[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h2]:border-b [&_h2]:border-border [&_h2]:pb-4 [&_h2]:mb-8 [&_h2]:mt-14 [&_h2]:scroll-mt-24",
  "[&_h3]:text-2xl [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:text-foreground [&_h3]:mb-5 [&_h3]:mt-10 [&_h3]:flex [&_h3]:items-center [&_h3]:gap-3 [&_h3]:scroll-mt-24",
  "[&_h3]:before:content-[''] [&_h3]:before:w-1 [&_h3]:before:h-7 [&_h3]:before:bg-primary [&_h3]:before:rounded-full",
  "[&_h4]:text-xl [&_h4]:font-semibold [&_h4]:tracking-tight [&_h4]:text-foreground [&_h4]:mb-4 [&_h4]:mt-8 [&_h4]:scroll-mt-24",
  "[&_p]:text-base [&_p]:leading-[1.9] [&_p]:text-foreground/85 [&_p]:mb-6",
  "[&_ul]:mb-8 [&_ul]:space-y-2 [&_ul]:text-foreground/85 [&_ul]:pl-0 [&_ul]:list-none",
  "[&_ul>li]:relative [&_ul>li]:pl-7 [&_ul>li]:before:content-['▸'] [&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:text-primary [&_ul>li]:before:font-bold",
  "[&_ol]:mb-8 [&_ol]:space-y-3 [&_ol]:text-foreground/85 [&_ol]:pl-0 [&_ol]:list-none [&_ol]:counter-reset-[item]",
  "[&_ol>li]:relative [&_ol>li]:pl-10 [&_ol>li]:counter-increment-[item]",
  "[&_ol>li]:before:content-[counter(item)] [&_ol>li]:before:absolute [&_ol>li]:before:left-0 [&_ol>li]:before:w-7 [&_ol>li]:before:h-7 [&_ol>li]:before:bg-primary/10 [&_ol>li]:before:text-primary [&_ol>li]:before:rounded-full [&_ol>li]:before:flex [&_ol>li]:before:items-center [&_ol>li]:before:justify-center [&_ol>li]:before:text-sm [&_ol>li]:before:font-semibold",
  "[&_li]:leading-[1.9] [&_li]:py-1.5",
  "[&_section]:mb-16 [&_section]:p-6 [&_section]:rounded-xl [&_section]:bg-gradient-to-br [&_section]:from-muted/30 [&_section]:to-transparent [&_section]:border [&_section]:border-border/50",
  "[&_a]:text-primary [&_a]:font-medium [&_a]:no-underline [&_a]:border-b [&_a]:border-primary/30 hover:[&_a]:border-primary [&_a]:transition-colors [&_a]:pb-0.5",
  "[&_strong]:font-semibold [&_strong]:text-foreground",
  "[&_code]:px-2.5 [&_code]:py-1 [&_code]:rounded-md [&_code]:bg-primary/10 [&_code]:text-sm [&_code]:font-mono [&_code]:text-primary [&_code]:border [&_code]:border-primary/20",
  "[&_pre]:my-10 [&_pre]:bg-slate-950 [&_pre]:border [&_pre]:border-slate-800 [&_pre]:rounded-xl [&_pre]:p-6 [&_pre]:overflow-x-auto [&_pre]:shadow-lg",
  "[&_pre_code]:p-0 [&_pre_code]:bg-transparent [&_pre_code]:border-0 [&_pre_code]:text-slate-50 [&_pre_code]:text-sm",
  "[&_blockquote]:my-10 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-6 [&_blockquote]:py-4 [&_blockquote]:bg-primary/5 [&_blockquote]:rounded-r-lg [&_blockquote]:italic [&_blockquote]:text-foreground/80",
  "[&_hr]:my-12 [&_hr]:border-border",
  "[&_table]:my-10 [&_table]:w-full [&_table]:border-collapse [&_table]:rounded-xl [&_table]:overflow-hidden [&_table]:shadow-sm [&_table]:border [&_table]:border-border",
  "[&_th]:bg-muted [&_th]:p-4 [&_th]:text-left [&_th]:font-semibold [&_th]:text-foreground [&_th]:border-b [&_th]:border-border",
  "[&_td]:p-4 [&_td]:border-b [&_td]:border-border/50 [&_td]:text-foreground/85",
  "[&_tr:last-child_td]:border-b-0 [&_tr:hover]:bg-muted/30 [&_tr]:transition-colors",
  "[&_img]:rounded-xl [&_img]:border [&_img]:border-border [&_img]:shadow-lg [&_img]:my-10",
  "[&_.callout-info]:bg-blue-500/10 [&_.callout-info]:border-l-4 [&_.callout-info]:border-blue-500 [&_.callout-info]:p-4 [&_.callout-info]:rounded-r-lg [&_.callout-info]:my-6",
  "[&_.callout-warning]:bg-yellow-500/10 [&_.callout-warning]:border-l-4 [&_.callout-warning]:border-yellow-500 [&_.callout-warning]:p-4 [&_.callout-warning]:rounded-r-lg [&_.callout-warning]:my-6",
  "[&_.callout-tip]:bg-green-500/10 [&_.callout-tip]:border-l-4 [&_.callout-tip]:border-green-500 [&_.callout-tip]:p-4 [&_.callout-tip]:rounded-r-lg [&_.callout-tip]:my-6",
  "[&_.feature-grid]:grid [&_.feature-grid]:md:grid-cols-2 [&_.feature-grid]:gap-4 [&_.feature-grid]:my-8",
  "[&_.feature-card]:bg-muted/50 [&_.feature-card]:p-4 [&_.feature-card]:rounded-lg [&_.feature-card]:border [&_.feature-card]:border-border/50",
  "[&_.feature-card_.fc-icon]:text-2xl [&_.feature-card_.fc-icon]:mb-2",
  "[&_.feature-card_h4]:text-base [&_.feature-card_h4]:font-semibold [&_.feature-card_h4]:text-primary [&_.feature-card_h4]:mt-0 [&_.feature-card_h4]:mb-1",
  "[&_.feature-card_p]:text-sm [&_.feature-card_p]:text-foreground/60 [&_.feature-card_p]:mb-0",
  "[&_.workflow]:flex [&_.workflow]:items-center [&_.workflow]:gap-0 [&_.workflow]:my-8 [&_.workflow]:overflow-x-auto [&_.workflow]:pb-2",
  "[&_.wf-step]:bg-muted/50 [&_.wf-step]:border [&_.wf-step]:border-border/50 [&_.wf-step]:rounded-lg [&_.wf-step]:p-4 [&_.wf-step]:min-w-[130px] [&_.wf-step]:text-center [&_.wf-step]:shrink-0",
  "[&_.wf-num]:w-7 [&_.wf-num]:h-7 [&_.wf-num]:bg-primary [&_.wf-num]:rounded-full [&_.wf-num]:text-xs [&_.wf-num]:font-bold [&_.wf-num]:text-primary-foreground [&_.wf-num]:flex [&_.wf-num]:items-center [&_.wf-num]:justify-center [&_.wf-num]:mx-auto [&_.wf-num]:mb-2",
  "[&_.wf-step_p]:text-xs [&_.wf-step_p]:text-foreground/60 [&_.wf-step_p]:mb-0 [&_.wf-step_p]:leading-snug",
  "[&_.wf-arrow]:text-foreground/20 [&_.wf-arrow]:text-xl [&_.wf-arrow]:px-1 [&_.wf-arrow]:shrink-0",
  "[&_.pill]:inline-block [&_.pill]:text-[11px] [&_.pill]:font-bold [&_.pill]:px-2.5 [&_.pill]:py-0.5 [&_.pill]:rounded-full [&_.pill]:uppercase [&_.pill]:tracking-wide",
  "[&_.pill-green]:bg-green-500/15 [&_.pill-green]:text-green-400",
  "[&_.pill-orange]:bg-orange-500/15 [&_.pill-orange]:text-orange-400",
  "[&_.pill-blue]:bg-blue-500/15 [&_.pill-blue]:text-blue-400",
  "[&_kbd]:px-2 [&_kbd]:py-0.5 [&_kbd]:rounded [&_kbd]:bg-muted [&_kbd]:border [&_kbd]:border-border [&_kbd]:text-xs [&_kbd]:font-mono [&_kbd]:text-foreground/80 [&_kbd]:shadow-sm",
].join(" ");

interface DocLayoutProps {
  product: { name: string; slug: string; externalUrl?: string };
  docs: ProductDocumentation;
  currentSection: DocSection;
}

export default function DocLayout({ product, docs, currentSection }: DocLayoutProps) {
  const productSlug = product.slug;

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
                <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">Docs</Link>
                <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">Products</Link>
              </nav>
            </div>
            {product.externalUrl && (
              <Link href={product.externalUrl} target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-md hover:bg-accent transition-colors">
                  <ExternalLink className="h-4 w-4" />
                  <span className="hidden sm:inline">Marketplace</span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex gap-8 py-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-6">
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
                        currentSection.slug === sec.slug ? "bg-primary-foreground/20" : "bg-muted"
                      }`}>{String(idx + 1).padStart(2, "0")}</span>
                      <span className="flex-1 truncate">{sec.title}</span>
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Quick Actions</h4>
                <div className="space-y-2">
                  {product.externalUrl && (
                    <Link
                      href={product.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View on Marketplace</span>
                    </Link>
                  )}
                  <Link
                    href="/support"
                    className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  >
                    <Book className="h-4 w-4" />
                    <span>Support Center</span>
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
                <div className="w-1.5 h-10 bg-gradient-to-b from-primary to-accent rounded-full" />
                <h1 className="text-4xl font-bold tracking-tight">{currentSection.title}</h1>
              </div>
              {currentSection.description && (
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  {currentSection.description}
                </p>
              )}
            </div>

            {/* Article */}
            <article
              className={ARTICLE_CLASSNAME}
              dangerouslySetInnerHTML={{ __html: currentSection.content }}
            />

            {/* Prev / Next Navigation */}
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

