import { NextRequest, NextResponse } from "next/server";
import { bookings } from "@/lib/services/bookingStore";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const booking = bookings.get(id);
    
    if (!booking) {
      return NextResponse.json(
        { success: false, error: "Booking not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      booking: {
        id: booking.id,
        sessionName: booking.sessionName,
        duration: booking.duration,
        date: booking.date,
        time: booking.time,
        email: booking.email,
        status: booking.status,
        meetLink: booking.meetLink,
      },
    });
  } catch (error) {
    console.error("Error fetching booking:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch booking" },
      { status: 500 }
    );
  }
}
