import { MetadataRoute } from 'next';
import { generateSitemapUrls } from '@/lib/utils/sitemap';

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = generateSitemapUrls();
  
  return urls.map((url) => ({
    url: url.url,
    lastModified: url.lastModified,
    changeFrequency: url.changeFrequency,
    priority: url.priority,
  }));
}
