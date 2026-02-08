import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Helper to check if request is from localhost
function isLocalhost(req: NextRequest) {
  const hostname = req.headers.get("host") || "";
  return (
    hostname.includes("localhost") ||
    hostname.includes("127.0.0.1") ||
    hostname.startsWith("192.168.")
  );
}

// GET - List all beta signups
export async function GET(req: NextRequest) {
  if (!isLocalhost(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const productSlug = searchParams.get("productSlug");
    const status = searchParams.get("status");

    const where: any = {};
    if (productSlug) where.productSlug = productSlug;
    if (status) where.status = status;

    const signups = await prisma.betaSignup.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
    });

    // Group by product
    const byProduct: Record<string, any> = {};
    signups.forEach((signup: any) => {
      if (!byProduct[signup.productSlug]) {
        byProduct[signup.productSlug] = {
          productSlug: signup.productSlug,
          productName: signup.productName,
          signups: [],
          stats: {
            total: 0,
            pending: 0,
            invited: 0,
            accepted: 0,
          },
        };
      }
      byProduct[signup.productSlug].signups.push(signup);
      byProduct[signup.productSlug].stats.total++;
      byProduct[signup.productSlug].stats[signup.status as keyof typeof byProduct[string]["stats"]]++;
    });

    return NextResponse.json({
      success: true,
      signups,
      byProduct: Object.values(byProduct),
      totalSignups: signups.length,
    });
  } catch (error) {
    console.error("Failed to fetch beta signups:", error);
    return NextResponse.json(
      { error: "Failed to fetch beta signups" },
      { status: 500 }
    );
  }
}

// PUT - Update beta signup status
export async function PUT(req: NextRequest) {
  if (!isLocalhost(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { id, status } = await req.json();

    if (!id || !status) {
      return NextResponse.json(
        { error: "ID and status are required" },
        { status: 400 }
      );
    }

    const validStatuses = ["pending", "invited", "accepted", "declined"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: "Invalid status" },
        { status: 400 }
      );
    }

    const data: any = { status };
    if (status === "invited") {
      data.invitedAt = new Date();
    } else if (status === "accepted") {
      data.acceptedAt = new Date();
    }

    const updated = await prisma.betaSignup.update({
      where: { id },
      data,
    });

    console.log(`✅ Beta signup ${id} updated to: ${status}`);

    return NextResponse.json({
      success: true,
      signup: updated,
    });
  } catch (error) {
    console.error("Failed to update beta signup:", error);
    return NextResponse.json(
      { error: "Failed to update beta signup" },
      { status: 500 }
    );
  }
}

// DELETE - Remove beta signup
export async function DELETE(req: NextRequest) {
  if (!isLocalhost(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID is required" },
        { status: 400 }
      );
    }

    await prisma.betaSignup.delete({
      where: { id },
    });

    console.log(`✅ Beta signup ${id} deleted`);

    return NextResponse.json({
      success: true,
      message: "Beta signup deleted",
    });
  } catch (error) {
    console.error("Failed to delete beta signup:", error);
    return NextResponse.json(
      { error: "Failed to delete beta signup" },
      { status: 500 }
    );
  }
}
