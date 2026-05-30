import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { seoLandingPages } from "@/lib/seo/landingPages";

export function SearchIntentSection() {
  return (
    <section className="section-padding bg-card/40 border-y border-border">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <h2 className="mb-4">Popular Unreal Engine Solutions</h2>
          <p className="text-lg text-muted-foreground">
            Focused landing pages for the product searches people make most often
            when evaluating Athian Games tools.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {seoLandingPages.map((page) => (
            <Link key={page.slug} href={`/unreal-engine/${page.slug}`}>
              <Card hover className="h-full group cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary">
                    {page.shortTitle}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {page.description}
                  </p>
                  <div className="inline-flex items-center text-sm text-primary">
                    Explore page
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
