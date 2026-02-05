export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  images: ProductImage[];
  videos?: ProductVideo[];
  features: string[];
  engineCompatibility: string[];
  license: LicenseType;
  category: ProductCategory;
  tags: string[];
  downloadUrl?: string;
  externalUrl?: string;
  isExternal: boolean;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProductVideo {
  url: string;
  thumbnail: string;
  title: string;
}

export type ProductCategory =
  | 'assets'
  | 'plugins'
  | 'tools'
  | 'blueprints'
  | 'materials'
  | 'vfx';

export type LicenseType =
  | 'single-project'
  | 'multi-project'
  | 'commercial'
  | 'enterprise';

export interface MarketplaceListing {
  id: string;
  name: string;
  platform: 'fab' | 'unreal-marketplace' | 'gumroad';
  url: string;
  thumbnail: string;
  description: string;
  price?: number;
}

export interface Plugin {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  thumbnail: string;
  screenshots: ProductImage[];
  videos?: ProductVideo[];
  features: string[];
  engineVersions: string[];
  documentation?: string;
  githubUrl?: string;
  productId?: string; // Link to store product if available
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  inquiryType: 'general' | 'business' | 'support' | 'custom-work';
}

export interface SocialLinks {
  youtube?: string;
  patreon?: string;
  twitter?: string;
  discord?: string;
  github?: string;
}

export interface CreatorProfile {
  name: string;
  bio: string;
  avatar: string;
  role: string;
  socialLinks: SocialLinks;
  stats: {
    youtubeSubscribers?: number;
    totalDownloads?: number;
    projectsCompleted?: number;
  };
}

export interface CheckoutSession {
  sessionId: string;
  productId: string;
  amount: number;
  currency: string;
}
