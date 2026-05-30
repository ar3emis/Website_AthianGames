import { getSiteUrl } from "@/lib/site";
import { creatorSameAs, organizationSameAs } from "@/lib/config/socialLinks";

export interface ProductStructuredData {
  '@context': string;
  '@type': string;
  '@id'?: string;
  additionalType?: string;
  name: string;
  description: string;
  url?: string;
  category?: string;
  keywords?: string[];
  applicationCategory?: string;
  operatingSystem?: string;
  image?: string[];
  mainEntityOfPage?: string;
  brand?: {
    '@type': string;
    name: string;
    url?: string;
    sameAs?: string[];
  };
  audience?: {
    '@type': string;
    audienceType: string;
  };
  isRelatedTo?: Array<{
    '@type': string;
    name: string;
    text?: string;
  }>;
  additionalProperty?: Array<{
    '@type': string;
    name: string;
    value: string;
  }>;
  offers?: {
    '@type': string;
    price?: string;
    priceCurrency?: string;
    availability?: string;
    url?: string;
  };
  aggregateRating?: {
    '@type': string;
    ratingValue: string;
    reviewCount: string;
  };
}

export function generateProductStructuredData(product: {
  name: string;
  description: string;
  summary?: string;
  url?: string;
  category?: string;
  thumbnail?: string;
  gallery?: string[];
  price?: number;
  externalUrl?: string;
  documentationUrl?: string;
  supportUrl?: string;
  videoUrl?: string;
  features?: Array<{ title?: string; description?: string }>;
}): ProductStructuredData {
  const baseUrl = getSiteUrl();
  
  const images = product.gallery?.map(img => `${baseUrl}${img}`) || 
                 (product.thumbnail ? [`${baseUrl}${product.thumbnail}`] : []);

  const structuredData: ProductStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': product.url ? `${product.url}#product` : undefined,
    additionalType: 'https://schema.org/SoftwareApplication',
    name: product.name,
    description: product.summary || product.description,
    url: product.url,
    category: product.category,
    keywords: [
      product.name,
      "Athian Games",
      "Unreal Engine",
      "Fab marketplace",
      product.category || "",
      ...(product.features?.map((feature) => feature.title || "").filter(Boolean) || []),
    ].filter(Boolean),
    applicationCategory: "Game development software",
    operatingSystem: "Unreal Engine",
    image: images,
    mainEntityOfPage: product.url,
    brand: {
      '@type': 'Brand',
      name: 'Athian Games',
      url: baseUrl,
      sameAs: organizationSameAs,
    },
    audience: {
      '@type': 'Audience',
      audienceType:
        'Unreal Engine developers, Blueprint users, technical artists, game studios, and marketplace buyers',
    },
  };

  const additionalProperty = [
    product.documentationUrl
      ? {
          '@type': 'PropertyValue',
          name: 'Documentation',
          value: product.documentationUrl,
        }
      : null,
    product.supportUrl
      ? {
          '@type': 'PropertyValue',
          name: 'Support',
          value: product.supportUrl,
        }
      : null,
    product.videoUrl
      ? {
          '@type': 'PropertyValue',
          name: 'Video',
          value: product.videoUrl,
        }
      : null,
  ].filter(Boolean) as ProductStructuredData["additionalProperty"];

  if (additionalProperty?.length) {
    structuredData.additionalProperty = additionalProperty;
  }

  if (product.features?.length) {
    structuredData.isRelatedTo = product.features.slice(0, 8).map((feature) => ({
      '@type': 'Thing',
      name: feature.title || 'Feature',
      text: feature.description,
    }));
  }

  if (product.price) {
    structuredData.offers = {
      '@type': 'Offer',
      price: product.price.toString(),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: product.externalUrl || baseUrl,
    };
  }

  return structuredData;
}

export interface OrganizationStructuredData {
  '@context': string;
  '@type': string;
  '@id'?: string;
  name: string;
  description: string;
  url: string;
  logo: string;
  sameAs: string[];
  founder?: {
    '@type': string;
    name: string;
    url: string;
    sameAs: string[];
  };
  knowsAbout?: string[];
  contactPoint?: {
    '@type': string;
    contactType: string;
    email?: string;
  };
}

export function generateOrganizationStructuredData(): OrganizationStructuredData {
  const baseUrl = getSiteUrl();
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Athian Games',
    description:
      'Athian Games creates Unreal Engine plugins, Blueprint systems, shaders, VFX, MetaHuman characters, UMG tools, volumetric products, and runtime workflow tools for game developers.',
    url: baseUrl,
    logo: `${baseUrl}/images/companylogowithname.png`,
    sameAs: organizationSameAs,
    founder: {
      '@type': 'Person',
      name: 'Sameek Kundu',
      url: `${baseUrl}/personal`,
      sameAs: creatorSameAs,
    },
    knowsAbout: [
      'Unreal Engine plugins',
      'Blueprint systems',
      'Fab marketplace products',
      'Niagara VFX',
      'post-process shaders',
      'MetaHuman characters',
      'UMG widgets',
      'runtime database plugins',
      'runtime FBX import',
      'game development tools',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'sameek.kundu@athiangames.com',
    },
  };
}

export interface WebsiteStructuredData {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  potentialAction: {
    '@type': string;
    target: {
      '@type': string;
      urlTemplate: string;
    };
    'query-input': string;
  };
}

export function generateWebsiteStructuredData(): WebsiteStructuredData {
  const baseUrl = getSiteUrl();
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Athian Games',
    description:
      'Professional Unreal Engine game development tools, plugins, shaders, VFX, Blueprint systems, MetaHuman assets, and runtime products from Athian Games.',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/products?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateFounderStructuredData() {
  const baseUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sameek Kundu',
    url: `${baseUrl}/personal`,
    jobTitle: 'Founder and Unreal Engine Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Athian Games',
      url: baseUrl,
    },
    sameAs: creatorSameAs,
  };
}

export function generateBreadcrumbStructuredData(
  items: Array<{ name: string; url?: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

export function generateCollectionPageStructuredData(input: {
  name: string;
  description: string;
  url: string;
  items: Array<{ name: string; url: string; image?: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input.name,
    description: input.description,
    url: input.url,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: input.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: item.url,
        item: {
          "@type": "Product",
          name: item.name,
          url: item.url,
          ...(item.image ? { image: item.image } : {}),
        },
      })),
    },
  };
}
