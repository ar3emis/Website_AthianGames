import { Youtube, Download, Users, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const stats = [
  {
    icon: Youtube,
    value: "5.2K",
    label: "YouTube Subscribers",
    description: "Learning from professional tutorials",
  },
  {
    icon: Download,
    value: "10K+",
    label: "Total Downloads",
    description: "Assets deployed in production",
  },
  {
    icon: Users,
    value: "200+",
    label: "Patreon Supporters",
    description: "Funding independent development",
  },
  {
    icon: Code,
    value: "15+",
    label: "Published Tools",
    description: "Production-ready plugins & assets",
  },
];

export function SocialProof() {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">Trusted by Creators</h2>
          <p className="text-lg text-muted-foreground">
            Independent studio building tools that ship. No marketing hype.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="bg-background/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Testimonial quote */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="text-4xl text-primary mb-4">"</div>
              <blockquote className="text-lg md:text-xl text-foreground mb-6">
                Built by developers who understand production pipelines.
                These aren't hobby projects—they're tools designed to solve
                real problems in professional workflows.
              </blockquote>
              <div className="text-sm text-muted-foreground">
                — Athian Games Philosophy
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
