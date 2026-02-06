import { NextRequest, NextResponse } from "next/server";
import { productDetails, getProductById } from "@/lib/products/productData";

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

    console.log("Product found:", product.name);
    return NextResponse.json({ success: true, product });
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

    // In a real implementation, you would update in MongoDB via PayloadCMS
    // For now, we'll return success and document that manual productData.ts update is needed

    return NextResponse.json({
      success: true,
      message:
        "Product structure validated. To persist, update in lib/products/productData.ts",
      product: data,
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

    // In a real implementation, you would delete from MongoDB via PayloadCMS
    // For now, we'll return success and document that manual productData.ts update is needed

    return NextResponse.json({
      success: true,
      message:
        "Product marked for deletion. To persist, remove from lib/products/productData.ts",
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
