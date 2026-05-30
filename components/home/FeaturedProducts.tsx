import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/Card";
import { productDetails } from "@/lib/products/productData";
import { cn } from "@/lib/utils/cn";

const featuredProductSlugs = [
  "minimap-map-and-navigation-system",
  "radar-system-with-minimap",
  "databases",
  "procedural-galaxy-system",
  "volumetric-black-hole",
  "art-of-shader-megapack",
];

const metahumanSlugs = [
  "metahuman-children",
  "metahuman-ghost-children",
  "metahuman-aerin-toddler",
  "metahuman-arya-creepy-doll",
  "metahuman-grace-little-girl",
  "metahuman-ghoul",
];

type ShowcaseProduct = {
  id: string;
  slug: string;
  name: string;
  summary?: string;
  thumbnail?: string;
  bannerImage?: string;
};

function getProducts(slugs: string[]) {
  return slugs
    .map((slug) => productDetails[slug as keyof typeof productDetails])
    .filter(Boolean)
    .slice(0, 6) as ShowcaseProduct[];
}

function ShowcaseCard({
  product,
  index,
}: {
  product: ShowcaseProduct;
  index: number;
}) {
  const isLarge = index === 0 || index === 5;
  const image = product.thumbnail || product.bannerImage;

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn("group block", isLarge && "lg:col-span-2")}
    >
      <Card hover className="h-full bg-card/90">
        <div
          className={cn(
            "relative overflow-hidden bg-muted",
            isLarge ? "min-h-[320px] lg:min-h-[430px]" : "min-h-[220px] lg:min-h-[260px]"
          )}
        >
          {image ? (
            <img
              src={image}
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
          )}
          {isLarge ? (
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          ) : null}
          {isLarge ? (
            <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
              <h3 className="max-w-2xl text-2xl font-bold text-white lg:text-3xl">
                {product.name}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/78 line-clamp-2">
                {product.summary}
              </p>
              <span className="mt-5 inline-flex items-center text-sm font-semibold text-primary">
                View product
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          ) : null}
        </div>

        {!isLarge ? (
          <CardHeader className="min-h-[150px]">
            <h3 className="text-lg font-bold line-clamp-1">{product.name}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground line-clamp-2">
              {product.summary}
            </p>
            <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
              View product
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </CardHeader>
        ) : null}
      </Card>
    </Link>
  );
}

function ProductShowcase({
  eyebrow,
  title,
  description,
  products,
  ctaHref,
  ctaLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  products: ShowcaseProduct[];
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <div className="mb-24 last:mb-0">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </p>
          <h2 className="mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
        <Link
          href={ctaHref}
          className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          {ctaLabel}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <ShowcaseCard key={product.slug} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}

export function FeaturedProducts() {
  const featuredProducts = getProducts(featuredProductSlugs);
  const metahumans = getProducts(metahumanSlugs);

  return (
    <section className="section-padding bg-background relative">
      <div className="container-custom">
        <ProductShowcase
          eyebrow="Featured"
          title="Featured Products"
          description="Six production-focused Athian Games products with a stronger visual layout for quick browsing."
          products={featuredProducts}
          ctaHref="/products"
          ctaLabel="Browse all products"
        />

        <ProductShowcase
          eyebrow="Characters"
          title="Featured MetaHumans"
          description="Six character packs with thumbnail-safe previews, built for fast visual comparison."
          products={metahumans}
          ctaHref="/products/category/metahuman"
          ctaLabel="Browse MetaHumans"
        />
      </div>
    </section>
  );
}
