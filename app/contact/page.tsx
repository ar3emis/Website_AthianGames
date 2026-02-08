import { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card, CardContent } from "@/components/ui/Card";
import { Mail, MessageSquare, Briefcase, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Athian Games for support, business inquiries, or custom development",
};

const inquiryTypes = [
  {
    icon: Briefcase,
    title: "Business Inquiries",
    description:
      "Custom development, licensing, partnerships, and commercial projects",
  },
  {
    icon: HelpCircle,
    title: "Product Support",
    description:
      "Technical support for purchased products, integration help, bug reports",
  },
  {
    icon: MessageSquare,
    title: "General Questions",
    description:
      "Questions about products, licensing, compatibility, or general inquiries",
  },
  {
    icon: Mail,
    title: "Custom Work",
    description:
      "Bespoke plugin development, consultation, or technical services",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              Have a question or want to work together? Fill out the form below
              or email directly at{" "}
              <a
                href="mailto:sameek.kundu@athiangames.com"
                className="text-primary hover:underline"
              >
                sameek.kundu@athiangames.com
              </a>
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Inquiry types */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-4">How can we help?</h2>
                <div className="space-y-3">
                  {inquiryTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <Card key={type.title}>
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-sm mb-1">
                                {type.title}
                              </h3>
                              <p className="text-xs text-muted-foreground">
                                {type.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Response time */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Response Time</h3>
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 24-48 hours. Business inquiries
                    are prioritized.
                  </p>
                </CardContent>
              </Card>

              {/* Alternative contact */}
              <div>
                <h3 className="font-semibold mb-3">Other Ways to Connect</h3>
                <div className="space-y-2 text-sm">
                  <a
                    href="https://discord.gg/athiangames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    → Join our Discord community
                  </a>
                  <a
                    href="https://twitter.com/athiangames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    → Follow on Twitter
                  </a>
                  <a
                    href="https://youtube.com/@athiangames2417"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    → YouTube channel
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
