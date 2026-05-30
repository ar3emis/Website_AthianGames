import { NextResponse } from "next/server";
import { getAiCatalog } from "@/lib/ai/catalog";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(getAiCatalog(), {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
