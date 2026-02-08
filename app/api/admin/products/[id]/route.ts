import { NextRequest, NextResponse } from "next/server";
import { productDetails, getProductById } from "@/lib/products/productData";
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

    // Save only the fields that can be edited in admin
    // This creates/updates an override entry for this product
    overrides.products[productSlug] = {
      ...(overrides.products[productSlug] || {}),
      downloadUrl: data.downloadUrl,
      downloadUrls: data.downloadUrls, // Save Google Drive selected files
      price: data.price,
      externalUrl: data.externalUrl,
      documentationUrl: data.documentationUrl,
      discordUrl: data.discordUrl,
      videoTutorialUrl: data.videoTutorialUrl,
      // Add any other fields you want to be editable
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
