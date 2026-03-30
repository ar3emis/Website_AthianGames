import { NextRequest, NextResponse } from "next/server";
import { productDetails, getProductBySlug } from "@/lib/products/productData";
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

// GET all products
export async function GET(req: NextRequest) {
  if (!isLocalhost(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    // Load overrides to check for deleted products
    const overrides = loadOverrides();

    // Convert productDetails object to array and filter out deleted products
    const products = Object.entries(productDetails)
      .filter(([slug, product]) => {
        // Check if product is marked as deleted in overrides
        const override = overrides.products?.[slug];
        return !override?.isDeleted;
      })
      .map(([slug, product]) => {
        // Merge overrides so admin-edited fields (thumbnail, name, etc.) appear
        const merged = { ...product, ...(overrides.products?.[slug] || {}) };
        return {
          id: merged.id,
          name: merged.name,
          slug: merged.slug,
          category: merged.category,
          price: (merged as any).price,
          isExternal: merged.externalUrl ? true : false,
          externalUrl: merged.externalUrl,
          isFeatured: (merged as any).isFeatured || (merged as any).isMegapack || false,
          thumbnail: merged.thumbnail,
          shortDescription: merged.summary,
          engineVersions: merged.engineVersions,
        };
      });

    return NextResponse.json({ success: true, products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// POST create new product
export async function POST(req: NextRequest) {
  if (!isLocalhost(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const data = await req.json();

    // In a real implementation, you would save to MongoDB via PayloadCMS
    // For now, we'll return success and document that manual productData.ts update is needed

    return NextResponse.json({
      success: true,
      message:
        "Product structure validated. To persist, add to lib/products/productData.ts",
      product: data,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
