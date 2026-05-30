import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms for using the Athian Games website and product resources.",
};

const sections = [
  {
    title: "Website use",
    body: "Use this website for browsing Athian Games products, documentation, services, and support resources. Do not attempt to misuse, scrape aggressively, attack, or interrupt the site.",
  },
  {
    title: "Product purchases",
    body: "Purchases made through external marketplaces are completed under that platform's checkout, refund, and license terms. Product pages on this site are informational unless a checkout flow is explicitly provided.",
  },
  {
    title: "Documentation",
    body: "Documentation is provided to help users set up and use products. Product behavior can change through updates, so always check the product page and release notes for current details.",
  },
  {
    title: "Services",
    body: "Custom development, consultation, and project support are scoped separately. A service discussion does not create a delivery obligation until both sides agree to the scope and payment terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom max-w-4xl">
        <div className="mb-10">
          <h1 className="mb-4">Terms of Service</h1>
          <p className="text-lg text-muted-foreground">
            Simple terms for using the Athian Games website, product pages, documentation, and service inquiry flows.
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <Card key={section.title}>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-2">{section.title}</h2>
                <p className="text-muted-foreground">{section.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Questions about these terms can be sent through the <Link href="/contact" className="text-primary hover:underline">contact page</Link>.
        </p>
      </div>
    </div>
  );
}
