import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Heart, Youtube } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-accent/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Primary CTA */}
          <div className="text-center mb-16">
            <h2 className="mb-6">Play, Build, or Both</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Step into the worlds of Athian Games, or pick up the same tools and
              systems we use to build them and bring them into your own projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/games">
                <Button size="lg">Explore Our Games</Button>
              </Link>
              <Link href="/products">
                <Button variant="secondary" size="lg">
                  Browse Tools &amp; Products
                </Button>
              </Link>
            </div>
          </div>

          {/* Support CTAs */}
          <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
            {/* YouTube */}
            <div className="p-8 rounded-xl bg-card border border-border hover:border-accent/50 transition-all group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Youtube className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Watch Product Videos</h3>
                  <p className="text-muted-foreground mb-4">
                    Studio updates, Unreal Engine product showcases, plugin
                    breakdowns, and technical notes.
                  </p>
                  <Link
                    href="https://youtube.com/@athiangames2417"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      Visit Channel
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
