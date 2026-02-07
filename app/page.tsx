import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CTASection } from "@/components/home/CTASection";
import { generateOrganizationStructuredData, generateWebsiteStructuredData } from "@/lib/utils/structuredData";

export default function HomePage() {
  const organizationData = generateOrganizationStructuredData();
  const websiteData = generateWebsiteStructuredData();

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
      
      <HeroSection />
      <FeaturedProducts />
      <CTASection />
    </>
  );
}
