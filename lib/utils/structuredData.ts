export interface ProductStructuredData {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  image?: string[];
  brand?: {
    '@type': string;
    name: string;
  };
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
  thumbnail?: string;
  gallery?: string[];
  price?: number;
  externalUrl?: string;
}): ProductStructuredData {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://athiangames.com';
  
  const images = product.gallery?.map(img => `${baseUrl}${img}`) || 
                 (product.thumbnail ? [`${baseUrl}${product.thumbnail}`] : []);

  const structuredData: ProductStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: images,
    brand: {
      '@type': 'Brand',
      name: 'Athian Games',
    },
  };

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
  name: string;
  description: string;
  url: string;
  logo: string;
  sameAs: string[];
  contactPoint?: {
    '@type': string;
    contactType: string;
    email?: string;
  };
}

export function generateOrganizationStructuredData(): OrganizationStructuredData {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://athiangames.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Athian Games',
    description: 'Professional Unreal Engine Tools, Assets, Plugins & VFX for Game Development',
    url: baseUrl,
    logo: `${baseUrl}/images/companylogowithname.png`,
    sameAs: [
      'https://youtube.com/@athiangames',
      'https://www.fab.com/sellers/Athian%20Games',
      'https://www.unrealengine.com/marketplace/en-US/profile/Athian+Games',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'business@athiangames.com',
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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://athiangames.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Athian Games',
    description: 'Professional Unreal Engine Tools & Assets',
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
