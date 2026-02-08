import { Metadata } from "next";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Common questions about Athian Games products, licensing, support, and services for Unreal Engine developers.",
  keywords: ["FAQ", "support", "Unreal Engine", "licensing", "Athian Games", "questions"],
};

const faqs = [
  {
    category: "Products & Licensing",
    questions: [
      {
        q: "What engine versions do your products support?",
        a: "Most of our products support UE 4.27 and UE 5.0+. Specific version compatibility is listed on each product page.",
      },
      {
        q: "Can I use these products in commercial projects?",
        a: "Yes! All our products include commercial licensing. You can use them in both personal and commercial projects without additional fees.",
      },
      {
        q: "Do you offer refunds?",
        a: "Refund policies vary by marketplace. For products on FAB or Unreal Marketplace, please refer to their respective refund policies. For direct purchases, contact us at sameek.kundu@athiangames.com.",
      },
      {
        q: "How do I access product documentation?",
        a: "Comprehensive documentation is available at docs.athiangames.com for all our products. Each product page also links to its specific documentation.",
      },
    ],
  },
  {
    category: "Technical Support",
    questions: [
      {
        q: "Where can I get technical support?",
        a: "You can reach our support team at sameek.kundu@athiangames.com. We typically respond within 24-48 hours on business days.",
      },
      {
        q: "Do you provide custom development services?",
        a: "Yes! We offer custom plugin development, technical consultation, and project support. Visit our Services page or contact us for more information.",
      },
      {
        q: "Are your products Blueprint-friendly?",
        a: "Absolutely! All our products are designed with both Blueprint and C++ users in mind, with extensive Blueprint node support.",
      },
      {
        q: "How often do you update your products?",
        a: "We regularly update our products to support new Unreal Engine versions and add features based on user feedback.",
      },
    ],
  },
  {
    category: "Installation & Setup",
    questions: [
      {
        q: "How do I install your plugins?",
        a: "Installation instructions are provided with each product. Generally, you'll download the plugin, place it in your project's Plugins folder, and enable it in the project settings.",
      },
      {
        q: "Do I need programming knowledge to use your products?",
        a: "Not necessarily. While some products benefit from programming knowledge, most are designed to be user-friendly with Blueprint support and visual editors.",
      },
      {
        q: "What platforms do your products work on?",
        a: "Our products support all platforms that Unreal Engine supports, including Windows, Mac, Linux, PlayStation, Xbox, Nintendo Switch, iOS, and Android.",
      },
    ],
  },
  {
    category: "Performance & Optimization",
    questions: [
      {
        q: "Are your products optimized for performance?",
        a: "Yes! Performance is a top priority. All our products are optimized for production use and include performance best practices.",
      },
      {
        q: "Can I use multiple Athian Games products together?",
        a: "Absolutely! Our products are designed to work seamlessly together without conflicts.",
      },
      {
        q: "Do your VFX products impact frame rate?",
        a: "Our VFX products are highly optimized. Performance impact depends on usage scale, but they're designed for real-time rendering with minimal overhead.",
      },
    ],
  },
  {
    category: "About Athian Games",
    questions: [
      {
        q: "Who is Athian Games?",
        a: "Athian Games is an independent studio specializing in professional-grade Unreal Engine tools, plugins, and assets for game developers worldwide.",
      },
      {
        q: "Where can I find your products?",
        a: "Our products are available on the FAB Marketplace, Unreal Marketplace, and directly through our website.",
      },
      {
        q: "Do you have tutorial videos?",
        a: "Yes! Visit our YouTube channel @athiangames for tutorials, showcases, and development updates.",
      },
      {
        q: "How can I stay updated on new releases?",
        a: "Follow us on YouTube, check our website regularly, or subscribe to marketplace updates where our products are listed.",
      },
    ],
  },
];

export default function FAQPage() {
  // Generate FAQ structured data for SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((category) =>
      category.questions.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      }))
    ),
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our products and services
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <Card key={faqIndex}>
                      <CardHeader>
                        <h3 className="text-lg font-semibold">{faq.q}</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{faq.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-4">
                Can't find the answer you're looking for? We're here to help!
              </p>
              <a
                href="mailto:sameek.kundu@athiangames.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Contact Support
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
