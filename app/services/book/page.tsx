"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Calendar,
  Clock,
  ArrowLeft,
  CheckCircle,
  Loader2,
  Mail,
  User,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import PayPal button to avoid SSR issues
const PayPalButton = dynamic(() => import("@/components/payment/PayPalButton"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-6">
      <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const consultationTypes: Record<string, {
  name: string;
  duration: string;
  price: number;
  description: string;
}> = {
  "quick-consultation": {
    name: "Quick Consultation",
    duration: "30 minutes",
    price: 30,
    description: "30-minute 1-on-1 video call for quick questions and problem solving.",
  },
  "standard-consultation": {
    name: "Standard Consultation",
    duration: "1 hour",
    price: 50,
    description: "60-minute in-depth discussion for architecture planning or complex debugging.",
  },
  "extended-consultation": {
    name: "Extended Session",
    duration: "2 hours",
    price: 90,
    description: "2-hour comprehensive session for project planning or multiple topics.",
  },
};

export default function BookingPage() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type") || "standard-consultation";

  const [consultationType, setConsultationType] = useState(typeParam);
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedTimeIST, setSelectedTimeIST] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [timeSlots, setTimeSlots] = useState<{ date: string; times: string[]; timesIST: string[]; timezone: string }[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(true);
  const [userTimezone, setUserTimezone] = useState<string>("UTC");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [bookingComplete, setBookingComplete] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [calendarMonth, setCalendarMonth] = useState(new Date());

  // Day names for calendar header
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    setIsClient(true);
    // Get user's timezone
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setUserTimezone(tz);
    fetchAvailableSlots();
  }, []);

  const fetchAvailableSlots = async () => {
    try {
      const res = await fetch("/api/admin/availability?action=slots");
      const data = await res.json();
      if (data.success && data.slots) {
        setTimeSlots(data.slots);
      }
    } catch (error) {
      console.error("Failed to fetch slots:", error);
    } finally {
      setLoadingSlots(false);
    }
  };

  // Convert IST time to user's local time for display
  const convertISTToLocal = (dateStr: string, timeIST: string): string => {
    if (!isClient) return timeIST;
    try {
      const [hours, minutes] = timeIST.split(":").map(Number);
      // Create a date object in IST (UTC+5:30)
      const istDate = new Date(`${dateStr}T${timeIST}:00+05:30`);
      return istDate.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: userTimezone,
      });
    } catch {
      return timeIST;
    }
  };

  // Get the local date for a given IST date and time (may differ due to timezone)
  const getLocalDateForIST = (dateStr: string, timeIST: string): string => {
    if (!isClient) return dateStr;
    try {
      const istDate = new Date(`${dateStr}T${timeIST}:00+05:30`);
      return istDate.toLocaleDateString("en-CA", { timeZone: userTimezone }); // en-CA gives YYYY-MM-DD format
    } catch {
      return dateStr;
    }
  };

  // Generate calendar days for the current month view
  const generateCalendarDays = () => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startPadding = firstDay.getDay();
    const days: (Date | null)[] = [];

    // Add empty slots for days before the 1st
    for (let i = 0; i < startPadding; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(new Date(year, month, d));
    }

    return days;
  };

  // Format date to YYYY-MM-DD for comparison
  const formatDateKey = (date: Date) => date.toISOString().split("T")[0];

  // Check if a date has available slots
  const isDateAvailable = (date: Date) => {
    const dateKey = formatDateKey(date);
    return timeSlots.some(slot => slot.date === dateKey);
  };

  // Check if date is in the past
  const isDatePast = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  // Check if date is today
  const isToday = (date: Date) => {
    const today = new Date();
    return formatDateKey(date) === formatDateKey(today);
  };

  // Navigate calendar months
  const goToPreviousMonth = () => {
    setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1));
  };

  const selectedConsultation = consultationTypes[consultationType];

  const formatDate = (dateStr: string) => {
    if (!isClient) return dateStr;
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  if (bookingComplete) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container-custom max-w-2xl">
          <Card className="text-center">
            <CardContent className="p-12">
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
              <p className="text-muted-foreground mb-8">
                Thank you for booking a consultation. You will receive a
                confirmation email with your Google Meet link shortly.
              </p>

              {bookingDetails && (
                <div className="bg-muted rounded-lg p-6 text-left mb-8">
                  <h3 className="font-bold mb-4">Booking Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Session:</span>
                      <span className="font-medium">{bookingDetails.sessionType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-medium">{bookingDetails.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time:</span>
                      <span className="font-medium">{bookingDetails.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Meet Link:</span>
                      <a
                        href={bookingDetails.meetLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary hover:underline"
                      >
                        Join Meeting
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <Link href="/services">
                <Button variant="secondary">Back to Services</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom max-w-4xl">
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step 1: Select Date & Time */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    1
                  </div>
                  <h2 className="text-xl font-bold">Select Date & Time</h2>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Consultation Type Selector */}
                <div>
                  <label className="block text-sm font-medium mb-2">Session Type</label>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(consultationTypes).map(([key, type]) => (
                      <button
                        key={key}
                        onClick={() => setConsultationType(key)}
                        className={`p-3 rounded-lg border text-sm text-left transition-all ${
                          consultationType === key
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="font-medium">{type.name}</div>
                        <div className="text-muted-foreground text-xs">{type.duration}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date Selection - Calendar View */}
                <div>
                  <label className="block text-sm font-medium mb-3">Select Date</label>
                  {loadingSlots ? (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="w-6 h-6 animate-spin text-primary" />
                    </div>
                  ) : timeSlots.length === 0 ? (
                    <p className="text-sm text-muted-foreground py-4">
                      No available dates at the moment. Please check back later.
                    </p>
                  ) : (
                    <div className="bg-muted/30 rounded-xl p-4 border border-border">
                      {/* Calendar Header */}
                      <div className="flex items-center justify-between mb-4">
                        <button
                          onClick={goToPreviousMonth}
                          className="p-2 hover:bg-muted rounded-lg transition-colors"
                          aria-label="Previous month"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <h3 className="text-lg font-semibold">
                          {isClient ? calendarMonth.toLocaleDateString("en-US", { 
                            month: "long", 
                            year: "numeric" 
                          }) : ""}
                        </h3>
                        <button
                          onClick={goToNextMonth}
                          className="p-2 hover:bg-muted rounded-lg transition-colors"
                          aria-label="Next month"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Day Names Header */}
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {dayNames.map(day => (
                          <div 
                            key={day} 
                            className="text-center text-xs font-medium text-muted-foreground py-2"
                          >
                            {day}
                          </div>
                        ))}
                      </div>

                      {/* Calendar Days Grid */}
                      <div className="grid grid-cols-7 gap-1">
                        {generateCalendarDays().map((date, index) => {
                          if (!date) {
                            return <div key={`empty-${index}`} className="aspect-square" />;
                          }

                          const dateKey = formatDateKey(date);
                          const available = isDateAvailable(date);
                          const past = isDatePast(date);
                          const today = isToday(date);
                          const selected = selectedDate === dateKey;

                          return (
                            <button
                              key={dateKey}
                              onClick={() => {
                                if (available && !past) {
                                  setSelectedDate(dateKey);
                                  setSelectedTime(null);
                                  setSelectedTimeIST(null);
                                }
                              }}
                              disabled={!available || past}
                              className={`
                                aspect-square rounded-lg text-sm font-medium transition-all
                                flex items-center justify-center relative
                                ${past ? "text-muted-foreground/30 cursor-not-allowed" : ""}
                                ${!available && !past ? "text-muted-foreground/50 cursor-not-allowed" : ""}
                                ${available && !past && !selected ? "hover:bg-primary/10 hover:border-primary/50 cursor-pointer text-foreground" : ""}
                                ${selected ? "bg-primary text-primary-foreground shadow-lg scale-105" : ""}
                                ${today && !selected ? "ring-2 ring-primary/50" : ""}
                                ${available && !past && !selected ? "bg-primary/5 border border-primary/20" : ""}
                              `}
                            >
                              {date.getDate()}
                              {available && !past && !selected && (
                                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Legend */}
                      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded bg-primary/5 border border-primary/20" />
                          <span>Available</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded bg-primary" />
                          <span>Selected</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded ring-2 ring-primary/50" />
                          <span>Today</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Selected Date Display */}
                  {selectedDate && (
                    <div className="mt-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="font-medium">Selected: {formatDate(selectedDate)}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Time Selection */}
                {selectedDate && (
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Select Time 
                      <span className="text-muted-foreground font-normal ml-1">
                        (showing in your local time: {isClient ? userTimezone.replace(/_/g, " ") : ""})
                      </span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {timeSlots
                        .find((s) => s.date === selectedDate)
                        ?.timesIST?.map((timeIST, index) => {
                          const localTime = convertISTToLocal(selectedDate, timeIST);
                          return (
                            <button
                              key={timeIST}
                              onClick={() => {
                                setSelectedTime(localTime);
                                setSelectedTimeIST(timeIST);
                                setStep(2);
                              }}
                              className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                                selectedTimeIST === timeIST
                                  ? "border-primary bg-primary text-primary-foreground"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              {localTime}
                            </button>
                          );
                        })}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      All sessions are conducted online via Google Meet
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Step 2: Your Details */}
            <Card className={step < 2 ? "opacity-50 pointer-events-none" : ""}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    2
                  </div>
                  <h2 className="text-xl font-bold">Your Details</h2>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-1" />
                    What would you like to discuss?
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
                    rows={4}
                    placeholder="Briefly describe your project or questions..."
                  />
                </div>

                {error && (
                  <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                    {error}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <h3 className="font-bold">Order Summary</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-medium">{selectedConsultation.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {selectedConsultation.duration}
                    </div>
                  </div>

                  {selectedDate && (
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{formatDate(selectedDate)}</span>
                    </div>
                  )}

                  {selectedTime && (
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{selectedTime}</span>
                    </div>
                  )}

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total</span>
                      <span>${selectedConsultation.price}</span>
                    </div>
                  </div>

                  {error && (
                    <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                      {error}
                    </div>
                  )}

                  {/* PayPal Button */}
                  {formData.name && formData.email && selectedDate && selectedTime && selectedTimeIST ? (
                    <PayPalButton
                      amount={selectedConsultation.price}
                      description={`${selectedConsultation.name} - ${formatDate(selectedDate)} at ${selectedTime}`}
                      bookingData={{
                        consultationType,
                        date: selectedDate,
                        time: selectedTime,
                        timeIST: selectedTimeIST,
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                      }}
                      onSuccess={(details) => {
                        setBookingDetails({
                          ...details,
                          sessionType: selectedConsultation.name,
                          date: formatDate(selectedDate),
                          time: selectedTime,
                        });
                        setBookingComplete(true);
                      }}
                      onError={(err) => {
                        console.error("Payment error:", err);
                        setError("Payment failed. Please try again.");
                      }}
                      onCancel={() => {
                        setError("Payment was cancelled.");
                      }}
                    />
                  ) : (
                    <div className="p-4 bg-muted rounded-lg text-center text-sm text-muted-foreground">
                      Please select a date, time, and fill in your details to proceed with payment.
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground text-center">
                    Secure payment via PayPal. You'll receive a confirmation
                    email with your Google Meet link.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
