import { NextRequest, NextResponse } from "next/server";
import { productDetails } from "@/lib/products/productData";

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

export async function GET(req: NextRequest) {
  if (!isLocalhost(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const products = Object.values(productDetails);

    const stats = {
      totalProducts: products.length,
      featuredProducts: products.filter((p) => (p as any).isMegapack).length,
      externalProducts: products.filter((p) => p.externalUrl).length,
      categories: new Set(products.map((p) => p.category)).size,
    };

    return NextResponse.json({ success: true, stats });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
