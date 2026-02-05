"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const categories = [
  { id: "all", name: "All Products" },
  { id: "plugins", name: "Plugins" },
  { id: "assets", name: "Assets" },
  { id: "tools", name: "Tools" },
  { id: "vfx", name: "VFX" },
  { id: "materials", name: "Materials" },
  { id: "blueprints", name: "Blueprints" },
];

const engineVersions = [
  "UE 5.3",
  "UE 5.2",
  "UE 5.1",
  "UE 5.0",
  "UE 4.27",
];

const priceRanges = [
  { id: "free", name: "Free", min: 0, max: 0 },
  { id: "under-25", name: "Under $25", min: 0, max: 25 },
  { id: "25-50", name: "$25 - $50", min: 25, max: 50 },
  { id: "50-100", name: "$50 - $100", min: 50, max: 100 },
  { id: "over-100", name: "$100+", min: 100, max: Infinity },
];

export function ProductFilters() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedVersions, setSelectedVersions] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);

  const toggleVersion = (version: string) => {
    setSelectedVersions((prev) =>
      prev.includes(version)
        ? prev.filter((v) => v !== version)
        : [...prev, version]
    );
  };

  return (
    <div className="space-y-6">
      {/* Category filter */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Category</h3>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
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

      {/* Engine version filter */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Engine Version</h3>
        </CardHeader>
        <CardContent className="space-y-2">
          {engineVersions.map((version) => (
            <label
              key={version}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedVersions.includes(version)}
                onChange={() => toggleVersion(version)}
                className="w-4 h-4 rounded border-border bg-background text-primary focus:ring-2 focus:ring-primary"
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground">
                {version}
              </span>
            </label>
          ))}
        </CardContent>
      </Card>

      {/* Price range filter */}
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

      {/* Active filters */}
      {(selectedVersions.length > 0 || selectedPriceRange) && (
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Active Filters</h3>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {selectedVersions.map((version) => (
                <Badge
                  key={version}
                  variant="primary"
                  className="cursor-pointer"
                  onClick={() => toggleVersion(version)}
                >
                  {version} ×
                </Badge>
              ))}
              {selectedPriceRange && (
                <Badge
                  variant="primary"
                  className="cursor-pointer"
                  onClick={() => setSelectedPriceRange(null)}
                >
                  {priceRanges.find((r) => r.id === selectedPriceRange)?.name} ×
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
