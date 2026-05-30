"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { productCategoriesWithAll } from "@/lib/products/categories";

const priceRanges = [
  { id: "free", name: "Free", min: 0, max: 0 },
  { id: "under-25", name: "Under $25", min: 0, max: 25 },
  { id: "25-50", name: "$25 - $50", min: 25, max: 50 },
  { id: "50-100", name: "$50 - $100", min: 50, max: 100 },
  { id: "over-100", name: "$100+", min: 100, max: Infinity },
];

export function ProductFilters() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Product Type</h3>
        </CardHeader>
        <CardContent className="space-y-2">
          {productCategoriesWithAll.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary text-muted-foreground"
              }`}
            >
              {category.name}
            </button>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Price Range</h3>
        </CardHeader>
        <CardContent className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() =>
                setSelectedPriceRange(
                  selectedPriceRange === range.id ? null : range.id
                )
              }
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                selectedPriceRange === range.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary text-muted-foreground"
              }`}
            >
              {range.name}
            </button>
          ))}
        </CardContent>
      </Card>

      {selectedPriceRange && (
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Active Filters</h3>
          </CardHeader>
          <CardContent>
            <button
              className="rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground"
              onClick={() => setSelectedPriceRange(null)}
            >
              {priceRanges.find((r) => r.id === selectedPriceRange)?.name} x
            </button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
