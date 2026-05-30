"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Save,
  X,
  Plus,
  Trash2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

interface ProductFeature {
  title: string;
  description: string;
  image?: string;
  learnMoreUrl?: string;
}

interface ProductFormData {
  name: string;
  slug: string;
  topText: string;
  bottomText: string;
  summary: string;
  description: string;
  category: string;
  engineVersions: string[];
  externalUrl?: string;
  documentationUrl?: string;
  videoId?: string;
  bannerImage?: string;
  thumbnail?: string;
  videoThumbnail?: string;
  features: ProductFeature[];
  isExternal: boolean;
  isFeatured: boolean;
}

export default function NewProductPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    slug: "",
    topText: "",
    bottomText: "",
    summary: "",
    description: "",
    category: "plugins",
    engineVersions: [],
    features: [],
    isExternal: false,
    isFeatured: false,
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleNameChange = (name: string) => {
    setFormData({
      ...formData,
      name,
      slug: generateSlug(name),
    });
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [
        ...formData.features,
        { title: "", description: "", image: "" },
      ],
    });
  };

  const updateFeature = (index: number, field: keyof ProductFeature, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = { ...newFeatures[index], [field]: value };
    setFormData({ ...formData, features: newFeatures });
  };

  const removeFeature = (index: number) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Product saved successfully!");
        setTimeout(() => {
          router.push("/admin/products");
        }, 1500);
      } else {
        setMessage(`Error: ${data.error || "Failed to save product"}`);
      }
    } catch (error) {
      setMessage(`Error: ${error instanceof Error ? error.message : "Failed to save"}`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-5xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/products">
          <Button variant="secondary" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Add New Product</h1>
          <p className="text-muted-foreground">
            Create a new product listing
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">Basic Information</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Product Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleNameChange(e.target.value)}
                className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
                placeholder="Minimap, Map and Navigation System"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                URL Slug *
              </label>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) =>
                  setFormData({ ...formData, slug: e.target.value })
                }
                className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none font-mono"
                placeholder="minimap-map-and-navigation-system"
              />
              <p className="text-xs text-muted-foreground mt-1">
                URL: /products/{formData.slug}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Product Type *
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
              >
                <option value="plugins">Code Plugins</option>
                <option value="volumetric">Volumetric</option>
                <option value="umg">UMG</option>
                <option value="metahuman">Metahuman</option>
                <option value="vfx">VFX</option>
                <option value="shaders">Shaders</option>
                <option value="blueprints">Blueprints</option>
                <option value="wip">Work In Progress</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isExternal}
                  onChange={(e) =>
                    setFormData({ ...formData, isExternal: e.target.checked })
                  }
                  className="w-4 h-4"
                />
                <span className="text-sm font-medium">External Product</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isFeatured}
                  onChange={(e) =>
                    setFormData({ ...formData, isFeatured: e.target.checked })
                  }
                  className="w-4 h-4"
                />
                <span className="text-sm font-medium">Featured</span>
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Descriptions */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">Descriptions</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Summary *
              </label>
              <textarea
                required
                value={formData.summary}
                onChange={(e) =>
                  setFormData({ ...formData, summary: e.target.value })
                }
                className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
                rows={3}
                placeholder="Brief one-line summary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Description *
              </label>
              <textarea
                required
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
                rows={6}
                placeholder="Detailed product description"
              />
            </div>
          </CardContent>
        </Card>

        {/* Submit */}
        <div className="flex items-center gap-4">
          <Button
            type="submit"
            disabled={saving}
            size="lg"
            className="flex items-center gap-2"
          >
            <Save className="w-5 h-5" />
            {saving ? "Saving..." : "Save Product"}
          </Button>

          <Link href="/admin/products">
            <Button type="button" variant="secondary" size="lg">
              Cancel
            </Button>
          </Link>

          {message && (
            <p
              className={`text-sm ${
                message.startsWith("Error") ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
