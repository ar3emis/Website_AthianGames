import { NextRequest, NextResponse } from "next/server";
import { getProductById } from "@/lib/products/productData";
import fs from "fs";
import path from "path";

export const dynamic = 'force-dynamic';

// Helper to check if request is from localhost
function isLocalhost(req: NextRequest) {
  const hostname = req.headers.get("host") || "";
  return (
    hostname.includes("localhost") ||
    hostname.includes("127.0.0.1") ||
    hostname.startsWith("192.168.")
  );
}

// Path to product overrides JSON file
const OVERRIDES_PATH = path.join(process.cwd(), "data", "product-overrides.json");

// Load product overrides
function loadOverrides() {
  try {
    if (fs.existsSync(OVERRIDES_PATH)) {
      const data = fs.readFileSync(OVERRIDES_PATH, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Failed to load product overrides:", error);
  }
  return { products: {} };
}

// Save product overrides
function saveOverrides(overrides: any) {
  try {
    const dir = path.dirname(OVERRIDES_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(OVERRIDES_PATH, JSON.stringify(overrides, null, 2));
    return true;
  } catch (error) {
    console.error("Failed to save product overrides:", error);
    return false;
  }
}

// GET single product
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isLocalhost(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { id } = await params;
    console.log("API GET /api/admin/products/[id] - Requested ID:", id);

    // Find product by ID
    const product = getProductById(id);

    if (!product) {
      console.log("Product not found for ID:", id);
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Load overrides and merge with base product data
    const overrides = loadOverrides();
    const productSlug = product.slug;
    const mergedProduct = {
      ...product,
      ...(overrides.products[productSlug] || {}),
    };

    console.log("Product found:", mergedProduct.name);
    return NextResponse.json({ success: true, product: mergedProduct });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}

// PUT update product
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isLocalhost(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { id } = await params;
    const data = await req.json();

    // Find product by ID
    const product = getProductById(id);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Load current overrides
    const overrides = loadOverrides();
    const productSlug = product.slug;

    // Helper: only include key in override when value is not undefined
    const defined = (v: any) => v !== undefined;

    // Build the override entry — all fields editable via the admin form
    const incoming: Record<string, any> = {};

    // Text / identity fields
    if (defined(data.name))             incoming.name             = data.name;
    if (defined(data.topText))          incoming.topText          = data.topText;
    if (defined(data.bottomText))       incoming.bottomText       = data.bottomText;
    if (defined(data.summary))          incoming.summary          = data.summary;
    if (defined(data.description))      incoming.description      = data.description;
    if (defined(data.category))         incoming.category         = data.category;

    // Media
    if (defined(data.thumbnail))        incoming.thumbnail        = data.thumbnail;
    if (defined(data.bannerImage))      incoming.bannerImage      = data.bannerImage;
    if (defined(data.videoThumbnail))   incoming.videoThumbnail   = data.videoThumbnail;
    if (defined(data.videoId))          incoming.videoId          = data.videoId;

    // Links
    if (defined(data.externalUrl))      incoming.externalUrl      = data.externalUrl;
    if (defined(data.documentationUrl)) incoming.documentationUrl = data.documentationUrl;
    if (defined(data.videoTutorialUrl)) incoming.videoTutorialUrl = data.videoTutorialUrl;
    if (defined(data.downloadUrl))      incoming.downloadUrl      = data.downloadUrl;
    if (defined(data.downloadUrls))     incoming.downloadUrls     = data.downloadUrls;

    // Pricing / flags
    if (defined(data.price))            incoming.price            = data.price;
    if (defined(data.isExternal))       incoming.isExternal       = data.isExternal;
    if (defined(data.isFeatured))       incoming.isFeatured       = data.isFeatured;

    // Engine versions & features
    if (defined(data.engineVersions))   incoming.engineVersions   = data.engineVersions;
    if (defined(data.features))         incoming.features         = data.features;

    // Merge with any existing override (preserving isDeleted etc.)
    overrides.products[productSlug] = {
      ...(overrides.products[productSlug] || {}),
      ...incoming,
    };

    // Save to file
    const saved = saveOverrides(overrides);

    if (!saved) {
      return NextResponse.json(
        { error: "Failed to save changes" },
        { status: 500 }
      );
    }

    console.log(`✅ Product updated: ${productSlug}`, overrides.products[productSlug]);

    return NextResponse.json({
      success: true,
      message: "Product updated successfully! Changes are now live.",
      product: { ...product, ...overrides.products[productSlug] },
    });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}

// DELETE product
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isLocalhost(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { id } = await params;

    // Find product by ID
    const product = getProductById(id);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Load current overrides
    const overrides = loadOverrides();
    const productSlug = product.slug;

    // Mark product as deleted in overrides
    overrides.products[productSlug] = {
      ...(overrides.products[productSlug] || {}),
      isDeleted: true,
    };

    // Save to file
    const saved = saveOverrides(overrides);

    if (!saved) {
      return NextResponse.json(
        { error: "Failed to delete product" },
        { status: 500 }
      );
    }

    console.log(`✅ Product deleted: ${productSlug}`);

    return NextResponse.json({
      success: true,
      message: "Product deleted successfully!",
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
