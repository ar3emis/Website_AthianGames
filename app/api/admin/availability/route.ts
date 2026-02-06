import { NextRequest, NextResponse } from "next/server";
import {
  getAvailabilityConfig,
  updateAvailabilityConfig,
  addUnavailableDate,
  removeUnavailableDate,
  setDateOverride,
  removeDateOverride,
  generateAvailableSlots,
  AvailabilityConfig,
} from "@/lib/availability/availabilityData";

export const dynamic = 'force-dynamic';

// GET - Fetch current availability config and available slots
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const action = searchParams.get("action");

  if (action === "slots") {
    // Return available slots for users to book
    const slots = generateAvailableSlots();
    return NextResponse.json({ success: true, slots });
  }

  // Return full config (admin only in production)
  const config = getAvailabilityConfig();
  return NextResponse.json({ success: true, config });
}

// POST - Update availability settings (admin only)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, ...data } = body;

    switch (action) {
      case "updateConfig":
        const updatedConfig = updateAvailabilityConfig(data as Partial<AvailabilityConfig>);
        return NextResponse.json({ success: true, config: updatedConfig });

      case "addUnavailableDate":
        if (!data.date) {
          return NextResponse.json({ error: "Date is required" }, { status: 400 });
        }
        addUnavailableDate(data.date);
        return NextResponse.json({ success: true, message: `Added ${data.date} to unavailable dates` });

      case "removeUnavailableDate":
        if (!data.date) {
          return NextResponse.json({ error: "Date is required" }, { status: 400 });
        }
        removeUnavailableDate(data.date);
        return NextResponse.json({ success: true, message: `Removed ${data.date} from unavailable dates` });

      case "setDateOverride":
        if (!data.date || !Array.isArray(data.timeSlots)) {
          return NextResponse.json({ error: "Date and timeSlots are required" }, { status: 400 });
        }
        setDateOverride(data.date, data.timeSlots);
        return NextResponse.json({ success: true, message: `Set override for ${data.date}` });

      case "removeDateOverride":
        if (!data.date) {
          return NextResponse.json({ error: "Date is required" }, { status: 400 });
        }
        removeDateOverride(data.date);
        return NextResponse.json({ success: true, message: `Removed override for ${data.date}` });

      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }
  } catch (error) {
    console.error("Availability API error:", error);
    return NextResponse.json({ error: "Failed to update availability" }, { status: 500 });
  }
}
