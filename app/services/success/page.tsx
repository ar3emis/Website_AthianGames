"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Calendar, Clock, Video, Mail, Download } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");
  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (bookingId) {
      // Fetch booking details
      fetch(`/api/services/booking/${bookingId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setBooking(data.booking);
          }
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [bookingId]);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Generate calendar link (Google Calendar)
  const generateCalendarLink = () => {
    if (!booking) return "#";
    
    const startDate = new Date(`${booking.date}T${booking.time}:00`);
    const endDate = new Date(startDate.getTime() + booking.duration * 60000);
    
    const formatCalDate = (date: Date) => date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      `Consultation with Athian Games - ${booking.sessionName}`
    )}&dates=${formatCalDate(startDate)}/${formatCalDate(endDate)}&details=${encodeURIComponent(
      `Join the meeting: ${booking.meetLink}\n\nBooking ID: ${booking.id}`
    )}&location=${encodeURIComponent(booking.meetLink)}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom max-w-2xl">
        <Card className="overflow-hidden">
          {/* Success Header */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 text-white text-center">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
            <p className="text-white/90">
              Your consultation has been scheduled successfully
            </p>
          </div>

          <CardContent className="p-8">
            {booking ? (
              <>
                {/* Booking Details */}
                <div className="bg-muted rounded-lg p-6 mb-8">
                  <h2 className="font-bold text-lg mb-4">Booking Details</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Video className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Session</div>
                        <div className="font-medium">{booking.sessionName}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Date</div>
                        <div className="font-medium">{formatDate(booking.date)}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Time</div>
                        <div className="font-medium">{booking.time} EST ({booking.duration} minutes)</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Confirmation sent to</div>
                        <div className="font-medium">{booking.email}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Meet Link */}
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-8 text-center">
                  <Video className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Google Meet Link</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Join this link at your scheduled time
                  </p>
                  <a
                    href={booking.meetLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                  >
                    <Video className="w-5 h-5" />
                    Join Meeting
                  </a>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={generateCalendarLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="secondary" className="w-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      Add to Calendar
                    </Button>
                  </a>
                  <Link href="/services" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Back to Services
                    </Button>
                  </Link>
                </div>

                {/* Reference */}
                <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
                  <p>Booking Reference: <span className="font-mono font-medium">{booking.id}</span></p>
                  <p className="mt-2">
                    Need to reschedule? Contact us at{" "}
                    <a href="mailto:support@athiangames.com" className="text-primary hover:underline">
                      support@athiangames.com
                    </a>
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">
                  Your booking has been confirmed! Check your email for details.
                </p>
                <Link href="/services">
                  <Button>Back to Services</Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
