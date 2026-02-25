import { NextRequest, NextResponse } from "next/server";
import { jsonStorage } from "@/lib/storage/jsonStorage";
import { requireLocalhost } from "@/lib/auth/adminAuth";

// GET - List all beta signups
export async function GET(req: NextRequest) {
  const localhostCheck = requireLocalhost(req);
  if (localhostCheck) return localhostCheck;

  try {
    const { searchParams } = new URL(req.url);
    const productSlug = searchParams.get("productSlug") ?? undefined;
    const status = searchParams.get("status") ?? undefined;

    const signups = await jsonStorage.findMany(
      productSlug || status ? { productSlug, status } : undefined
    );

    const byProductMap: Record<string, any> = {};
    for (const signup of signups) {
      if (!byProductMap[signup.productSlug]) {
        byProductMap[signup.productSlug] = {
          productSlug: signup.productSlug,
          productName: signup.productName,
          signups: [],
          stats: { total: 0, pending: 0, invited: 0, accepted: 0 },
        };
      }
      byProductMap[signup.productSlug].signups.push(signup);
      byProductMap[signup.productSlug].stats.total++;
      const s = signup.status;
      if (s in byProductMap[signup.productSlug].stats) {
        byProductMap[signup.productSlug].stats[s]++;
      }
    }

    return NextResponse.json({
      success: true,
      signups,
      byProduct: Object.values(byProductMap),
      totalSignups: signups.length,
    });
  } catch (error) {
    console.error("Failed to fetch beta signups:", error);
    return NextResponse.json(
      { error: "Failed to fetch beta signups", detail: String(error) },
      { status: 500 }
    );
  }
}

// PUT - Update beta signup status
export async function PUT(req: NextRequest) {
  const localhostCheck = requireLocalhost(req);
  if (localhostCheck) return localhostCheck;

  try {
    const { id, status } = await req.json();
    if (!id || !status) {
      return NextResponse.json({ error: "ID and status are required" }, { status: 400 });
    }
    const validStatuses = ["pending", "invited", "accepted", "declined"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }
    const data: Record<string, string> = { status };
    if (status === "invited") data.invitedAt = new Date().toISOString();
    else if (status === "accepted") data.acceptedAt = new Date().toISOString();

    const updated = await jsonStorage.update({ where: { id }, data });
    if (!updated) {
      return NextResponse.json({ error: "Signup not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, signup: updated });
  } catch (error) {
    console.error("Failed to update beta signup:", error);
    return NextResponse.json(
      { error: "Failed to update beta signup", detail: String(error) },
      { status: 500 }
    );
  }
}

// DELETE - Remove beta signup
export async function DELETE(req: NextRequest) {
  const localhostCheck = requireLocalhost(req);
  if (localhostCheck) return localhostCheck;

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }
    const deleted = await jsonStorage.delete({ id });
    if (!deleted) {
      return NextResponse.json({ error: "Signup not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: "Beta signup deleted" });
  } catch (error) {
    console.error("Failed to delete beta signup:", error);
    return NextResponse.json(
      { error: "Failed to delete beta signup", detail: String(error) },
      { status: 500 }
    );
  }
}
