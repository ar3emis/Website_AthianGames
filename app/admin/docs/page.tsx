"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { 
  Save, 
  Plus, 
  Trash2, 
  ChevronDown, 
  ChevronRight,
  FileText,
  Eye
} from "lucide-react";
import Link from "next/link";

interface DocSection {
  slug: string;
  title: string;
  description?: string;
  content: string;
}

interface ProductDoc {
  productSlug: string;
  productName: string;
  sections: DocSection[];
}

export default function AdminDocsPage() {
  const [docs, setDocs] = useState<ProductDoc[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [editingContent, setEditingContent] = useState<string>("");
  const [editingTitle, setEditingTitle] = useState<string>("");
  const [editingDescription, setEditingDescription] = useState<string>("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [expandedProducts, setExpandedProducts] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchDocs();
  }, []);

  const fetchDocs = async () => {
    try {
      const response = await fetch("/api/admin/docs");
      const data = await response.json();
      if (data.success) {
        setDocs(data.docs);
        // Expand all products by default
        setExpandedProducts(new Set(data.docs.map((d: ProductDoc) => d.productSlug)));
      }
    } catch (error) {
      console.error("Failed to fetch docs:", error);
    }
  };

  const toggleProduct = (productSlug: string) => {
    const newExpanded = new Set(expandedProducts);
    if (newExpanded.has(productSlug)) {
      newExpanded.delete(productSlug);
    } else {
      newExpanded.add(productSlug);
    }
    setExpandedProducts(newExpanded);
  };

  const selectSection = (productSlug: string, sectionSlug: string) => {
    const product = docs.find(d => d.productSlug === productSlug);
    const section = product?.sections.find(s => s.slug === sectionSlug);
    if (section) {
      setSelectedProduct(productSlug);
      setSelectedSection(sectionSlug);
      setEditingTitle(section.title);
      setEditingDescription(section.description || "");
      setEditingContent(section.content);
    }
  };

  const handleSave = async () => {
    if (!selectedProduct || !selectedSection) return;
    
    setSaving(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/docs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productSlug: selectedProduct,
          sectionSlug: selectedSection,
          title: editingTitle,
          description: editingDescription,
          content: editingContent,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage("Documentation saved successfully!");
        fetchDocs();
      } else {
        setMessage("Error: " + data.error);
      }
    } catch (error) {
      setMessage("Error saving documentation");
    } finally {
      setSaving(false);
    }
  };

  const addSection = async (productSlug: string) => {
    const sectionName = prompt("Enter section name:");
    if (!sectionName) return;

    const slug = sectionName.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    try {
      const response = await fetch("/api/admin/docs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productSlug,
          section: {
            slug,
            title: sectionName,
            description: "",
            content: "<section>\n  <h3>Section Title</h3>\n  <p>Add your content here...</p>\n</section>",
          },
        }),
      });

      const data = await response.json();
      if (data.success) {
        fetchDocs();
        selectSection(productSlug, slug);
      }
    } catch (error) {
      console.error("Failed to add section:", error);
    }
  };

  const deleteSection = async (productSlug: string, sectionSlug: string) => {
    if (!confirm("Are you sure you want to delete this section?")) return;

    try {
      const response = await fetch("/api/admin/docs", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productSlug, sectionSlug }),
      });

      const data = await response.json();
      if (data.success) {
        if (selectedSection === sectionSlug) {
          setSelectedProduct(null);
          setSelectedSection(null);
          setEditingContent("");
        }
        fetchDocs();
      }
    } catch (error) {
      console.error("Failed to delete section:", error);
    }
  };

  const insertTemplate = (template: string) => {
    const templates: Record<string, string> = {
      section: `\n<section>\n  <h3>Section Title</h3>\n  <p>Your content here...</p>\n</section>\n`,
      list: `\n<ul>\n  <li>Item one</li>\n  <li>Item two</li>\n  <li>Item three</li>\n</ul>\n`,
      orderedList: `\n<ol>\n  <li>Step one</li>\n  <li>Step two</li>\n  <li>Step three</li>\n</ol>\n`,
      table: `\n<table>\n  <thead>\n    <tr>\n      <th>Header 1</th>\n      <th>Header 2</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Cell 1</td>\n      <td>Cell 2</td>\n    </tr>\n  </tbody>\n</table>\n`,
      calloutInfo: `\n<div class="callout-info">\n  <strong>ℹ️ Note:</strong> Your info message here.\n</div>\n`,
      calloutWarning: `\n<div class="callout-warning">\n  <strong>⚠️ Warning:</strong> Your warning message here.\n</div>\n`,
      calloutTip: `\n<div class="callout-tip">\n  <strong>💡 Pro Tip:</strong> Your tip here.\n</div>\n`,
      code: `\n<pre><code>// Your code here\nconst example = "Hello World";</code></pre>\n`,
      image: `\n<img src="/images/your-image.jpg" alt="Description" />\n`,
    };

    setEditingContent(prev => prev + templates[template]);
  };

  return (
    <div className="max-w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Documentation Editor</h1>
          <p className="text-muted-foreground">
            Edit documentation content with rich text formatting
          </p>
        </div>
        {selectedProduct && selectedSection && (
          <Link href={`/docs/${selectedProduct}/${selectedSection}`} target="_blank">
            <Button variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
          </Link>
        )}
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar - Documentation Tree */}
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <h2 className="text-lg font-bold">Documentation</h2>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-[70vh] overflow-y-auto">
                {docs.map((product) => (
                  <div key={product.productSlug} className="border-b border-border last:border-0">
                    <button
                      onClick={() => toggleProduct(product.productSlug)}
                      className="w-full flex items-center gap-2 px-4 py-3 hover:bg-muted/50 transition-colors text-left"
                    >
                      {expandedProducts.has(product.productSlug) ? (
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      )}
                      <span className="font-medium text-sm truncate">{product.productName}</span>
                    </button>
                    
                    {expandedProducts.has(product.productSlug) && (
                      <div className="bg-muted/30">
                        {product.sections.map((section) => (
                          <div
                            key={section.slug}
                            className={`flex items-center gap-2 pl-8 pr-2 py-2 cursor-pointer hover:bg-muted transition-colors group ${
                              selectedProduct === product.productSlug && selectedSection === section.slug
                                ? "bg-primary/10 border-l-2 border-primary"
                                : ""
                            }`}
                          >
                            <FileText className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                            <span
                              onClick={() => selectSection(product.productSlug, section.slug)}
                              className="flex-1 text-sm truncate"
                            >
                              {section.title}
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteSection(product.productSlug, section.slug);
                              }}
                              className="opacity-0 group-hover:opacity-100 p-1 hover:text-destructive transition-all"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                        <button
                          onClick={() => addSection(product.productSlug)}
                          className="w-full flex items-center gap-2 pl-8 pr-4 py-2 text-sm text-primary hover:bg-primary/10 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                          Add Section
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Editor */}
        <div className="col-span-9">
          {selectedProduct && selectedSection ? (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Edit Section</h2>
                  <div className="flex items-center gap-2">
                    {message && (
                      <span className={`text-sm ${message.includes("Error") ? "text-destructive" : "text-green-500"}`}>
                        {message}
                      </span>
                    )}
                    <Button onClick={handleSave} disabled={saving}>
                      <Save className="w-4 h-4 mr-2" />
                      {saving ? "Saving..." : "Save Changes"}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Section Metadata */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Section Title</label>
                    <input
                      type="text"
                      value={editingTitle}
                      onChange={(e) => setEditingTitle(e.target.value)}
                      className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Description (optional)</label>
                    <input
                      type="text"
                      value={editingDescription}
                      onChange={(e) => setEditingDescription(e.target.value)}
                      className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
                      placeholder="Brief description of this section"
                    />
                  </div>
                </div>

                {/* Template Buttons */}
                <div>
                  <label className="block text-sm font-medium mb-2">Insert Template</label>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" variant="outline" onClick={() => insertTemplate("section")}>
                      Section
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => insertTemplate("list")}>
                      Bullet List
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => insertTemplate("orderedList")}>
                      Numbered List
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => insertTemplate("table")}>
                      Table
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => insertTemplate("code")}>
                      Code Block
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => insertTemplate("image")}>
                      Image
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => insertTemplate("calloutInfo")}>
                      ℹ️ Info Box
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => insertTemplate("calloutWarning")}>
                      ⚠️ Warning Box
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => insertTemplate("calloutTip")}>
                      💡 Tip Box
                    </Button>
                  </div>
                </div>

                {/* Content Editor */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Content (HTML)
                    <span className="text-muted-foreground font-normal ml-2">
                      Use the templates above or write custom HTML
                    </span>
                  </label>
                  <textarea
                    value={editingContent}
                    onChange={(e) => setEditingContent(e.target.value)}
                    className="w-full h-[500px] px-4 py-3 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none font-mono text-sm"
                    placeholder="Enter documentation content..."
                  />
                </div>

                {/* Formatting Reference */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Quick Reference</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div>
                      <p><code>&lt;section&gt;</code> - Wrap content in styled sections</p>
                      <p><code>&lt;h3&gt;</code> - Section headings</p>
                      <p><code>&lt;h4&gt;</code> - Sub-headings</p>
                      <p><code>&lt;p&gt;</code> - Paragraphs</p>
                      <p><code>&lt;strong&gt;</code> - Bold text</p>
                    </div>
                    <div>
                      <p><code>&lt;ul&gt;&lt;li&gt;</code> - Bullet lists</p>
                      <p><code>&lt;ol&gt;&lt;li&gt;</code> - Numbered lists</p>
                      <p><code>&lt;code&gt;</code> - Inline code</p>
                      <p><code>&lt;table&gt;</code> - Data tables</p>
                      <p><code>class="callout-*"</code> - Info/Warning/Tip boxes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="py-20 text-center">
                <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-medium mb-2">Select a Section</h3>
                <p className="text-muted-foreground">
                  Choose a documentation section from the sidebar to start editing
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
