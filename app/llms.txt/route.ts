import { getLlmsText } from "@/lib/ai/catalog";

export const dynamic = "force-dynamic";

export function GET() {
  return new Response(getLlmsText(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
