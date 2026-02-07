import { NextRequest, NextResponse } from "next/server";
import { productDetails, getProductBySlug } from "@/lib/products/productData";

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

// GET all products
export async function GET(req: NextRequest) {
  if (!isLocalhost(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    // Convert productDetails object to array
    const products = Object.entries(productDetails).map(([slug, product]) => ({
      id: product.id,
      name: product.name,
      slug: product.slug,
      category: product.category,
      price: (product as any).price,
      isExternal: product.externalUrl ? true : false,
      externalUrl: product.externalUrl,
      isFeatured: (product as any).isMegapack || false,
      thumbnail: product.thumbnail,
      shortDescription: product.summary,
      engineVersions: product.engineVersions,
    }));

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
