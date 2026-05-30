"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Save,
  X,
  Plus,
  Trash2,
  Upload,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { ImageUpload } from "@/components/admin/ImageUpload";
import { GoogleDrivePicker } from "@/components/admin/GoogleDrivePicker";

interface ProductFeature {
  title: string;
  description: string;
  image?: string;
  learnMoreUrl?: string;
}

interface DownloadFile {
  id: string;
  name: string;
  downloadUrl: string;
  mimeType: string;
}

interface ProductFormData {
  name: string;
  slug: string;
  topText: string;
  bottomText: string;
  summary: string;
  description: string;
  category: string;
  price?: number;
  downloadUrl?: string;
  downloadUrls?: DownloadFile[];
  engineVersions: string[];
  externalUrl?: string;
  documentationUrl?: string;

  videoTutorialUrl?: string;
  videoId?: string;
  bannerImage?: string;
  thumbnail?: string;
  videoThumbnail?: string;
  features: ProductFeature[];
  isExternal: boolean;
  isFeatured: boolean;
}

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams();
  const productId = params?.id as string;

  console.log("EditProductPage - productId from params:", productId, "params:", params);

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
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [showGooglePicker, setShowGooglePicker] = useState(false);

  useEffect(() => {
    if (productId && productId !== "new") {
      fetchProduct();
    } else {
      setLoading(false);
    }
  }, [productId]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`/api/admin/products/${productId}`);
      const data = await response.json();
      if (data.success && data.product) {
        setFormData(data.product);
      }
    } catch (error) {
      console.error("Failed to fetch product:", error);
    } finally {
      setLoading(false);
    }
  };

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
      const url =
        productId === "new"
          ? "/api/admin/products"
          : `/api/admin/products/${productId}`;
      const method = productId === "new" ? "POST" : "PUT";

      const response = await fetch(url, {
        method,
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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

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
          <h1 className="text-3xl font-bold">
            {productId === "new" ? "Add New Product" : "Edit Product"}
          </h1>
          <p className="text-muted-foreground">
            {productId === "new"
              ? "Create a new product listing"
              : "Update product details"}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
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

            <div>
              <label className="block text-sm font-medium mb-2">
                Price (USD)
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={formData.price || ""}
                onChange={(e) =>
                  setFormData({ 
                    ...formData, 
                    price: e.target.value ? parseFloat(e.target.value) : undefined 
                  })
                }
                className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
                placeholder="29.99"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Leave empty for marketplace-only products. Set a price to enable direct purchase.
              </p>
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
                Top Text
              </label>
              <input
                type="text"
                value={formData.topText}
                onChange={(e) =>
                  setFormData({ ...formData, topText: e.target.value })
                }
                className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
                placeholder="Short heading text"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Bottom Text
              </label>
              <input
                type="text"
                value={formData.bottomText}
                onChange={(e) =>
                  setFormData({ ...formData, bottomText: e.target.value })
                }
                className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
                placeholder="Subtitle or tagline"
              />
            </div>

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

        {/* External Links & Downloads */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">External Links & Downloads</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Download URL
              </label>
              <input
                type="text"
                value={formData.downloadUrl || ""}
                onChange={(e) =>
                  setFormData({ ...formData, downloadUrl: e.target.value })
                }
                className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
                placeholder="https://drive.google.com/file/d/.../view or https://yourdomain.com/files/product.zip"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Provide a direct download link for purchasers. Can be Google Drive, Dropbox, or your own server.
              </p>
            </div>

            {/* Google Drive File Picker */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Multiple Download Files (Google Drive)
              </label>
              {!showGooglePicker ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowGooglePicker(true)}
                  className="w-full"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Files from Google Drive
                </Button>
              ) : (
                <div className="space-y-4">
                  <GoogleDrivePicker
                    onFilesSelected={(files) => {
                      setFormData({
                        ...formData,
                        downloadUrls: files,
                      });
                      setShowGooglePicker(false);
                    }}
                    selectedFiles={formData.downloadUrls || []}
                    defaultFolderId="1EjjZTlg8f8KkPjS8QnMXXxal8waqXk4O"
                    defaultFolderName="Product Downloads"
                  />
                </div>
              )}

              {/* Display selected files */}
              {formData.downloadUrls && formData.downloadUrls.length > 0 && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">
                    Selected Download Files ({formData.downloadUrls.length})
                  </h4>
                  <div className="space-y-2">
                    {formData.downloadUrls.map((file, idx) => (
                      <div
                        key={file.id}
                        className="flex items-center justify-between p-2 bg-white rounded border border-green-200"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm">{file.name}</p>
                          <p className="text-xs text-muted-foreground truncate">
                            {file.downloadUrl}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const updated = formData.downloadUrls?.filter(
                              (_, i) => i !== idx
                            );
                            setFormData({ ...formData, downloadUrls: updated });
                          }}
                          className="ml-2 text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                External URL (Marketplace)
              </label>
              <input
                type="text"
                value={formData.externalUrl || ""}
                onChange={(e) =>
                  setFormData({ ...formData, externalUrl: e.target.value })
                }
                className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
                placeholder="https://www.unrealengine.com/marketplace/..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Documentation URL
              </label>
              <input
                type="text"
                value={formData.documentationUrl || ""}
                onChange={(e) =>
                  setFormData({ ...formData, documentationUrl: e.target.value })
                }
                className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
                placeholder="/docs/product-slug"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Video Walkthrough URL
              </label>
              <input
                type="text"
                value={formData.videoTutorialUrl || ""}
                onChange={(e) =>
                  setFormData({ ...formData, videoTutorialUrl: e.target.value })
                }
                className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
                placeholder="https://youtube.com/watch?v=..."
              />
              <p className="text-xs text-muted-foreground mt-1">
                Link to video walkthrough or product demo.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Features</h2>
              <Button type="button" onClick={addFeature}>
                <Plus className="w-4 h-4 mr-2" />
                Add Feature
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {formData.features.map((feature, idx) => (
              <div key={idx} className="p-4 bg-muted rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Feature {idx + 1}</h3>
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => removeFeature(idx)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <input
                  type="text"
                  value={feature.title}
                  onChange={(e) => updateFeature(idx, "title", e.target.value)}
                  className="w-full px-4 py-2 bg-background rounded-lg border border-border focus:border-primary focus:outline-none"
                  placeholder="Feature title"
                />

                <textarea
                  value={feature.description}
                  onChange={(e) => updateFeature(idx, "description", e.target.value)}
                  className="w-full px-4 py-2 bg-background rounded-lg border border-border focus:border-primary focus:outline-none"
                  rows={3}
                  placeholder="Feature description"
                />

                <div className="mt-2">
                  <ImageUpload
                    label={`Feature ${idx + 1} Image`}
                    value={feature.image}
                    onChange={(url) => updateFeature(idx, "image", url)}
                    aspectRatio="video"
                  />
                </div>

                <input
                  type="text"
                  value={feature.learnMoreUrl || ""}
                  onChange={(e) => updateFeature(idx, "learnMoreUrl", e.target.value)}
                  className="w-full px-4 py-2 bg-background rounded-lg border border-border focus:border-primary focus:outline-none"
                  placeholder="Learn more URL (optional)"
                />
              </div>
            ))}

            {formData.features.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                No features added yet. Click "Add Feature" to get started.
              </p>
            )}
          </CardContent>
        </Card>

        {/* Media - Compact Size */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-bold">Media</h2>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-2">
                YouTube Video ID
              </label>
              <input
                type="text"
                value={formData.videoId || ""}
                onChange={(e) =>
                  setFormData({ ...formData, videoId: e.target.value })
                }
                className="w-full px-3 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none text-sm"
                placeholder="zTLjtnlbFjU"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <ImageUpload
                label="Thumbnail"
                value={formData.thumbnail}
                onChange={(url) => setFormData({ ...formData, thumbnail: url })}
                aspectRatio="video"
              />

              <ImageUpload
                label="Banner"
                value={formData.bannerImage}
                onChange={(url) => setFormData({ ...formData, bannerImage: url })}
                aspectRatio="video"
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
