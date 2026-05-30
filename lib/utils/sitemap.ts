import { getDocumentation } from "@/lib/docs";
import { productCategories } from "@/lib/products/categories";
import { databaseProducts } from "@/lib/products/databaseProducts";
import { getAllProducts } from "@/lib/products/productData";
import { seoLandingPages } from "@/lib/seo/landingPages";
import { getSiteUrl } from "@/lib/site";

export interface SitemapUrl {
  url: string;
  lastModified?: Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

const baseUrl = getSiteUrl();

export function generateSitemapUrls(): SitemapUrl[] {
  const now = new Date();
  const products = getAllProducts();
  const urls: SitemapUrl[] = [
    // Static pages
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/games`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/games/a-tale-of-miss-valentina`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.86,
    },
    {
      url: `${baseUrl}/unreal-engine`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/llms-full.txt`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/ai-products.json`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/personal`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.55,
    },
    {
      url: `${baseUrl}/license`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.45,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.45,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.45,
    },
  ];

  for (const category of productCategories) {
    urls.push({
      url: `${baseUrl}/products/category/${category.id}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: category.id === "plugins" || category.id === "blueprints" || category.id === "shaders" ? 0.8 : 0.75,
    });
  }

  urls.push(
    ...databaseProducts.map((product) => ({
      url: `${baseUrl}/products/databases/${product.key}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    }))
  );

  urls.push(
    ...seoLandingPages.map((page) => ({
      url: `${baseUrl}/unreal-engine/${page.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.82,
    }))
  );

  for (const product of products) {
    urls.push({
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  }

  for (const product of products) {
    const docs = getDocumentation(product.slug);
    if (!docs) continue;

    urls.push({
      url: `${baseUrl}/docs/${product.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.78,
    });

    for (const section of docs.sections) {
      urls.push({
        url: `${baseUrl}/docs/${product.slug}/${section.slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.72,
      });
    }
  }

  return urls;
}
