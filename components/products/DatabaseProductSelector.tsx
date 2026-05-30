"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, PlugZap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { databaseCommonFeatures, databaseProducts } from "@/lib/products/databaseProducts";

export function DatabaseProductSelector() {
  return (
    <div className="mb-16 space-y-14">
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-3">Select a Database</h2>
          <p className="text-muted-foreground max-w-3xl">
            Choose a database to open its dedicated product page with setup flow, exclusive features, and documentation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {databaseProducts.map((option) => (
            <Link
              key={option.key}
              href={`/products/databases/${option.key}`}
              className={`group overflow-hidden rounded-xl border bg-card transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 bg-gradient-to-br ${option.accent}`}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={option.thumbnail}
                  alt={`${option.name} thumbnail`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex min-w-0 items-center justify-between gap-3">
                  <h3 className="min-w-0 text-xl font-bold">{option.name}</h3>
                  <Badge variant="outline">{option.badge}</Badge>
                </div>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{option.summary}</p>
                <ul className="space-y-2">
                  {option.coreList.map((item) => (
                    <li key={item} className="flex min-w-0 gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="min-w-0 break-words">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                  Open Product Page
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-3">Common Features</h2>
          <p className="text-muted-foreground max-w-3xl">
            These Blueprint-facing features are shared by PostgreSQL, MySQL, and Microsoft SQL Server.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {databaseCommonFeatures.map((feature) => (
            <Card key={feature.title} className="h-full">
              <CardContent className="p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                  <PlugZap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
