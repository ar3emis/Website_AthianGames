import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "License Information",
  description: "License information for Athian Games products.",
};

const sections = [
  {
    title: "Marketplace purchases",
    body: "Products bought through Fab or Unreal Marketplace follow the license terms of that marketplace. Use the marketplace order page for invoices, refunds, and license access.",
  },
  {
    title: "Commercial projects",
    body: "Unless a product page states otherwise, Athian Games products can be used in personal and commercial Unreal Engine projects by the buyer or licensed team.",
  },
  {
    title: "Redistribution",
    body: "Do not resell, redistribute, sublicense, or upload the raw product files as a standalone asset pack, template, plugin, or source package.",
  },
  {
    title: "Support",
    body: "Support is provided for the product as shipped. Custom integration, project debugging, or new feature work can be handled as a separate service request.",
  },
];

export default function LicensePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom max-w-4xl">
        <div className="mb-10">
          <h1 className="mb-4">License Information</h1>
          <p className="text-lg text-muted-foreground">
            Practical licensing notes for Athian Games products. Marketplace terms remain the authority for purchases made on those platforms.
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
          Need clarification for a specific project? <Link href="/contact" className="text-primary hover:underline">Contact Athian Games</Link>.
        </p>
      </div>
    </div>
  );
}
