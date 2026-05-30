import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Code, Sparkles, Zap, Target, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Athian Games - an independent Unreal Engine studio building professional tools for serious creators",
};

const principles = [
  {
    icon: Code,
    title: "Production-First",
    description:
      "Every tool is built with production pipelines in mind. No hobby projects. No prototypes shipped as products.",
  },
  {
    icon: Target,
    title: "Technically Credible",
    description:
      "Solutions grounded in real engine knowledge. No marketing hype. No selling problems as features.",
  },
  {
    icon: Zap,
    title: "Performance Matters",
    description:
      "Optimized for real-world use. Profiled, tested, and validated in actual game projects.",
  },
  {
    icon: Sparkles,
    title: "Independent",
    description:
      "Founder-driven development. No corporate committees. Direct access to the developer.",
  },
];

const timeline = [
  {
    year: "2020",
    title: "Foundation",
    description:
      "Started building Unreal Engine tools and open-source utilities while working on commercial projects.",
  },
  {
    year: "2021",
    title: "First Releases",
    description:
      "Released initial plugins on Unreal Marketplace. Community response validated the demand for production-focused tools.",
  },
  {
    year: "2023",
    title: "Studio Formation",
    description:
      "Established Athian Games as an independent studio focused on Unreal Engine tooling and marketplace products.",
  },
  {
    year: "2024",
    title: "Expansion",
    description:
      "Launched direct sales platform. Expanded to multiple marketplaces. Built sustainable creator-funded model.",
  },
  {
    year: "2025",
    title: "Current Focus",
    description:
      "15+ professional tools shipped. Active product development, YouTube showcases, and support for 200+ Patreon members.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero section */}
      <section className="container-custom mb-24">
        <div className="max-w-4xl">
          <h1 className="mb-6">About Athian Games</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Independent Unreal Engine studio building professional tools for
            serious creators. Founded by developers who understand production
            pipelines. No corporate fluff. No marketing hype.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Athian Games exists to solve real problems in game development and
            real-time 3D production. Every plugin, every asset, every product update
            comes from hands-on experience with Unreal Engine in professional
            settings.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="container-custom mb-24">
        <div className="mb-12">
          <h2 className="mb-4">Core Principles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            What drives development at Athian Games
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <Card key={principle.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="container-custom mb-24">
        <div className="mb-12">
          <h2 className="mb-4">Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            From experiments to professional tooling
          </p>
        </div>

        <div className="max-w-3xl">
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6 group">
                {/* Year marker */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {item.year.slice(2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="text-sm text-primary font-semibold mb-1">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="container-custom mb-24">
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6">Development Philosophy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Quality over quantity.</strong>{" "}
                One well-engineered plugin beats ten half-finished prototypes.
              </p>
              <p>
                <strong className="text-foreground">Documentation matters.</strong>{" "}
                If it's not documented, it's not done. Every tool ships with
                complete technical documentation.
              </p>
              <p>
                <strong className="text-foreground">Support the community.</strong>{" "}
                Open-source utilities, product updates, and direct developer access.
                Success is measured by creators shipping projects.
              </p>
              <p>
                <strong className="text-foreground">Stay independent.</strong>{" "}
                No investors. No corporate oversight. Just sustainable,
                creator-funded development of tools that solve real problems.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tech Stack */}
      <section className="container-custom mb-24">
        <div className="mb-12">
          <h2 className="mb-4">Technical Focus</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Specialized expertise in Unreal Engine development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "C++ Plugin Development",
            "Blueprint Frameworks",
            "Procedural Generation",
            "VFX Systems",
            "Runtime Optimization",
            "Editor Extensions",
            "Gameplay Systems",
            "Asset Pipeline Tools",
          ].map((skill) => (
            <Card key={skill}>
              <CardContent className="p-4 text-center">
                <p className="font-medium">{skill}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-custom">
        <div className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/5 rounded-xl border border-primary/20 text-center">
          <h2 className="text-3xl font-bold mb-4">Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Need custom Unreal Engine development? Looking for technical
            consultation? Let's discuss your project.
          </p>
          <Link href="/contact?type=business">
            <Button size="lg">
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
