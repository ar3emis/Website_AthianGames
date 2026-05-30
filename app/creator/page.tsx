import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Youtube,
  Heart,
  Play,
  TrendingUp,
  Code,
  Sparkles,
  Linkedin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sameek Kundu - Creator Hub",
  description:
    "Unreal Engine game developer and founder of Athian Games. Studio updates, product showcases, and technical production notes.",
};

const stats = [
  { label: "YouTube Subscribers", value: "5.2K+", icon: Youtube },
  { label: "Patreon Supporters", value: "200+", icon: Heart },
  { label: "Product Videos", value: "80+", icon: Play },
  { label: "Products Released", value: "15+", icon: Code },
];

const recentVideos = [
  {
    id: "1",
    title: "Volumetric Nebula System Showcase",
    description: "Procedural volumetric rendering product preview",
    thumbnail: "/images/videos/nebula-showcase.jpg",
    duration: "28:45",
    views: "12K",
  },
  {
    id: "2",
    title: "Blueprint Workflow Breakdown",
    description: "Production-focused Blueprint tooling and workflow notes",
    thumbnail: "/images/videos/blueprint-opt.jpg",
    duration: "35:12",
    views: "8.5K",
  },
  {
    id: "3",
    title: "Production-Ready Plugin Showcase",
    description: "C++ plugin development workflow and product overview",
    thumbnail: "/images/videos/plugin-dev.jpg",
    duration: "42:30",
    views: "15K",
  },
];

export default function CreatorHubPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background" />

        <div className="container-custom relative z-10 pt-24 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Avatar placeholder */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold">
              SK
            </div>

            <h1 className="mb-4">Sameek Kundu</h1>

            <p className="text-xl text-muted-foreground mb-4">
              Unreal Engine Game Developer - Studio Founder - Athian Games
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="primary">
                <Code className="w-3 h-3 mr-1" />
                C++ & Blueprints
              </Badge>
              <Badge variant="primary">
                <Sparkles className="w-3 h-3 mr-1" />
                Procedural Systems
              </Badge>
              <Badge variant="primary">VFX & Rendering</Badge>
              <Badge variant="primary">Plugin Development</Badge>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Building original games, cinematic worlds, Unreal Engine plugins,
              and product workflows through Athian Games. Production-tested
              development, without fluff.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://youtube.com/@athiangames2417"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">
                  <Youtube className="w-5 h-5 mr-2" />
                  Watch on YouTube
                </Button>
              </Link>
              <Link
                href="https://www.patreon.com/c/SameekKundu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Support on Patreon
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Videos */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="mb-4">Recent Product Videos</h2>
            <p className="text-lg text-muted-foreground">
              Product showcases, technical breakdowns, and production workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {recentVideos.map((video) => (
              <Card key={video.id} hover>
                <div className="aspect-video bg-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Play className="w-16 h-16 text-foreground/50" />
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-background/90 rounded text-xs font-medium">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <TrendingUp className="w-3 h-3" />
                    {video.views} views
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="https://youtube.com/@athiangames2417"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg">
                View All Videos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About / Bio */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6">About</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Sameek Kundu, an Unreal Engine developer and the founder of
                Athian Games. I build original games, Unreal Engine products,
                and production workflows for developers and technical artists.
              </p>
              <p>
                My focus is on production-ready solutions: procedural generation
                systems, VFX pipelines, performance optimization, and plugin
                development. I've shipped 15+ commercial products for Unreal
                Engine developers and production teams.
              </p>
              <p>
                This isn't a hobby. It's a sustainable, creator-funded studio
                creating games and products that solve real production problems.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xl font-bold mb-4">Work With Me</h3>
              <p className="text-muted-foreground mb-6">
                Available for custom Unreal Engine development, technical
                consultation, and plugin commissions.
              </p>
              <Link href="/contact?type=business">
                <Button>Get in Touch</Button>
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="https://youtube.com/@athiangames2417"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    <Youtube className="w-5 h-5 mr-2" />
                    YouTube
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/sameekkundu-unrealdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Support the Work</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Patreon supporters get early access to products, studio updates,
                direct Discord access, and priority support. Help fund independent
                development.
              </p>
              <Link
                href="https://www.patreon.com/c/SameekKundu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Become a Supporter
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer link to main site */}
      <footer className="py-8 border-t border-border">
        <div className="container-custom text-center">
          <p className="text-sm text-muted-foreground">
            Looking for Athian Games products and studio updates?{" "}
            <Link href="/" className="text-primary hover:underline">
              Visit the main site
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
