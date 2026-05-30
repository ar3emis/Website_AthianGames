import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Athian Games website.",
};

const sections = [
  {
    title: "Information you provide",
    body: "When you contact Athian Games or request services, you may provide your name, email, project details, and other information needed to respond to your request.",
  },
  {
    title: "Website analytics",
    body: "The site may use basic analytics, hosting logs, and security tools to understand traffic, diagnose issues, and protect the website.",
  },
  {
    title: "Marketplace links",
    body: "When you open Fab, Unreal Marketplace, YouTube, LinkedIn, Discord, or other external links, those platforms handle data under their own privacy policies.",
  },
  {
    title: "Data handling",
    body: "Contact details are used for support, business replies, and service communication. Athian Games does not sell personal contact information.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom max-w-4xl">
        <div className="mb-10">
          <h1 className="mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            How Athian Games handles information connected to this website, support requests, and service inquiries.
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
          For privacy questions, use the <Link href="/contact" className="text-primary hover:underline">contact page</Link>.
        </p>
      </div>
    </div>
  );
}
