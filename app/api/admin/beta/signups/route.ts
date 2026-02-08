import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { jsonStorage } from "@/lib/storage/jsonStorage";

// GET - List all beta signups
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const productSlug = searchParams.get("productSlug");
    const status = searchParams.get("status");

    const where: any = {};
    if (productSlug) where.productSlug = productSlug;
    if (status) where.status = status;

    let signups;
    let source = "prisma";
    try {
      // Try Prisma first
      console.log("🔍 Trying to fetch from Prisma...");
      signups = await prisma.betaSignup.findMany({
        where,
        orderBy: {
          createdAt: "desc",
        },
      });
      console.log(`✅ Prisma returned ${signups.length} signups`);
    } catch (dbError) {
      // Fallback to JSON storage
      console.warn("❌ Prisma failed, using JSON storage fallback:", dbError);
      source = "json";
      signups = await jsonStorage.findMany(where);
      console.log(`✅ JSON storage returned ${signups.length} signups`);
    }

    console.log(`📊 Total signups: ${signups.length} (source: ${source})`);

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
      data.invitedAt = new Date().toISOString();
    } else if (status === "accepted") {
      data.acceptedAt = new Date().toISOString();
    }

    let updated;
    try {
      // Try Prisma first
      updated = await prisma.betaSignup.update({
        where: { id },
        data,
      });
    } catch (dbError) {
      // Fallback to JSON storage
      console.warn("Prisma failed, using JSON storage fallback:", dbError);
      updated = await jsonStorage.update({
        where: { id },
        data,
      });
      
      if (!updated) {
        return NextResponse.json(
          { error: "Signup not found" },
          { status: 404 }
        );
      }
    }

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

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID is required" },
        { status: 400 }
      );
    }

    try {
      // Try Prisma first
      await prisma.betaSignup.delete({
        where: { id },
      });
    } catch (dbError) {
      // Fallback to JSON storage
      console.warn("Prisma failed, using JSON storage fallback:", dbError);
      const deleted = await jsonStorage.delete({ id });
      
      if (!deleted) {
        return NextResponse.json(
          { error: "Signup not found" },
          { status: 404 }
        );
      }
    }

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
