import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/authOptions";
import { prisma } from "@/lib/prisma";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;

    // Find the purchase
    const purchase = await prisma.purchase.findUnique({
      where: { id },
    });

    if (!purchase) {
      return NextResponse.json(
        { error: "Purchase not found" },
        { status: 404 }
      );
    }

    // Verify purchase belongs to user
    if (purchase.userId !== session.user.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 403 }
      );
    }

    // Check if download URL exists
    if (!purchase.downloadUrl) {
      return NextResponse.json(
        { error: "No download URL available for this product" },
        { status: 400 }
      );
    }

    // Check download limit
    if (purchase.downloadCount >= purchase.maxDownloads) {
      return NextResponse.json(
        { error: "Download limit reached. Please contact support for assistance." },
        { status: 400 }
      );
    }

    // Increment download count
    const updatedPurchase = await prisma.purchase.update({
      where: { id },
      data: {
        downloadCount: purchase.downloadCount + 1,
      },
    });

    return NextResponse.json({
      success: true,
      downloadUrl: purchase.downloadUrl,
      downloadCount: updatedPurchase.downloadCount,
      maxDownloads: updatedPurchase.maxDownloads,
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Failed to process download" },
      { status: 500 }
    );
  }
}
