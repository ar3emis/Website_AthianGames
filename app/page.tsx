import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { SearchIntentSection } from "@/components/home/SearchIntentSection";
import { CTASection } from "@/components/home/CTASection";
import {
  generateFounderStructuredData,
  generateOrganizationStructuredData,
  generateWebsiteStructuredData,
} from "@/lib/utils/structuredData";

export default function HomePage() {
  const organizationData = generateOrganizationStructuredData();
  const websiteData = generateWebsiteStructuredData();
  const founderData = generateFounderStructuredData();

  return (
    <>
      {/* JSON-LD Structured Data for SEO and AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(founderData),
        }}
      />
      
      <HeroSection />
      <FeaturedProducts />
      <SearchIntentSection />
      <CTASection />
    </>
  );
}
