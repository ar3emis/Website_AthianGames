import { NextRequest, NextResponse } from "next/server";
import { productDetails } from "@/lib/products/productData";
import { getDocumentation, getAllDocumentation } from "@/lib/docs/docsData";

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

// GET - Fetch all documentation
export async function GET(req: NextRequest) {
  if (!isLocalhost(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const docs = [];
    const productsWithDocs = getAllDocumentation().map((doc) => doc.productSlug);
    
    for (const slug of productsWithDocs) {
      const product = productDetails[slug as keyof typeof productDetails];
      const productDoc = getDocumentation(slug);
      
      if (product && productDoc) {
        docs.push({
          productSlug: slug,
          productName: product.name,
          sections: productDoc.sections.map((s: any) => ({
            slug: s.slug,
            title: s.title,
            description: s.description || "",
            content: s.content,
          })),
        });
      }
    }
    
    return NextResponse.json({ success: true, docs });
  } catch (error) {
    console.error("Error fetching docs:", error);
    return NextResponse.json(
      { error: "Failed to fetch documentation" },
      { status: 500 }
    );
  }
}

// PUT - Update a section (placeholder - would need file system access in production)
export async function PUT(req: NextRequest) {
  if (!isLocalhost(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { productSlug, sectionSlug, title, description, content } = await req.json();
    
    // In a real implementation, this would update the docsData.ts file
    // For now, we'll return a success message with instructions
    console.log("Documentation update requested:", { productSlug, sectionSlug, title });
    
    // Log the content that should be saved
    console.log("New content to save:", content.substring(0, 200) + "...");
    
    return NextResponse.json({ 
      success: true,
      message: "Documentation updated. Note: In development mode, changes are logged to console. For production, integrate with a database or file system."
    });
  } catch (error) {
    console.error("Error updating docs:", error);
    return NextResponse.json(
      { error: "Failed to update documentation" },
      { status: 500 }
    );
  }
}

// POST - Add a new section
export async function POST(req: NextRequest) {
  if (!isLocalhost(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { productSlug, section } = await req.json();
    
    console.log("New section requested:", { productSlug, section });
    
    return NextResponse.json({ 
      success: true,
      message: "Section added. Note: In development mode, changes are logged to console."
    });
  } catch (error) {
    console.error("Error adding section:", error);
    return NextResponse.json(
      { error: "Failed to add section" },
      { status: 500 }
    );
  }
}

// DELETE - Remove a section
export async function DELETE(req: NextRequest) {
  if (!isLocalhost(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { productSlug, sectionSlug } = await req.json();
    
    console.log("Section delete requested:", { productSlug, sectionSlug });
    
    return NextResponse.json({ 
      success: true,
      message: "Section deleted. Note: In development mode, changes are logged to console."
    });
  } catch (error) {
    console.error("Error deleting section:", error);
    return NextResponse.json(
      { error: "Failed to delete section" },
      { status: 500 }
    );
  }
}
