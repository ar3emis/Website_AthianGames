"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Calendar,
  Clock,
  Save,
  Plus,
  X,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Check,
} from "lucide-react";

interface AvailabilityConfig {
  availableDays: number[];
  availableTimeSlots: string[];
  maxAdvanceWeeks: number;
  minNoticeHours: number;
  unavailableDates: string[];
  dateOverrides: Record<string, string[]>;
  timezone: string;
}

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const fullDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Time slots in IST (10:00 AM to 9:00 PM)
const defaultTimeSlots = [
  "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"
];

// Format 24h time to 12h with AM/PM for display
const formatTime12h = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${minutes.toString().padStart(2, "0")} ${period}`;
};

export default function AvailabilityAdminPage() {
  const [config, setConfig] = useState<AvailabilityConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [newTimeSlot, setNewTimeSlot] = useState("");

  useEffect(() => {
    fetchConfig();
  }, []);

  const fetchConfig = async () => {
    try {
      const res = await fetch("/api/admin/availability");
      const data = await res.json();
      if (data.success) {
        setConfig(data.config);
      }
    } catch (error) {
      console.error("Failed to fetch config:", error);
    } finally {
      setLoading(false);
    }
  };

  const saveConfig = async (updates: Partial<AvailabilityConfig>) => {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "updateConfig", ...updates }),
      });
      const data = await res.json();
      if (data.success) {
        setConfig(data.config);
        setMessage({ type: "success", text: "Settings saved successfully!" });
      } else {
        setMessage({ type: "error", text: data.error || "Failed to save" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Failed to save settings" });
    } finally {
      setSaving(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const toggleDay = (day: number) => {
    if (!config) return;
    const newDays = config.availableDays.includes(day)
      ? config.availableDays.filter(d => d !== day)
      : [...config.availableDays, day].sort();
    saveConfig({ availableDays: newDays });
  };

  const toggleUnavailableDate = async (dateStr: string) => {
    if (!config) return;
    const action = config.unavailableDates.includes(dateStr)
      ? "removeUnavailableDate"
      : "addUnavailableDate";
    
    try {
      const res = await fetch("/api/admin/availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, date: dateStr }),
      });
      if (res.ok) {
        fetchConfig();
      }
    } catch (error) {
      console.error("Failed to toggle date:", error);
    }
  };

  const addTimeSlot = () => {
    if (!config || !newTimeSlot) return;
    if (config.availableTimeSlots.includes(newTimeSlot)) return;
    const newSlots = [...config.availableTimeSlots, newTimeSlot].sort();
    saveConfig({ availableTimeSlots: newSlots });
    setNewTimeSlot("");
  };

  const removeTimeSlot = (slot: string) => {
    if (!config) return;
    const newSlots = config.availableTimeSlots.filter(s => s !== slot);
    saveConfig({ availableTimeSlots: newSlots });
  };

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startPadding = firstDay.getDay();
    const days: (Date | null)[] = [];

    for (let i = 0; i < startPadding; i++) {
      days.push(null);
    }

    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(new Date(year, month, d));
    }

    return days;
  };

  const formatDateStr = (date: Date) => date.toISOString().split("T")[0];

  const isDateUnavailable = (date: Date) => {
    if (!config) return false;
    const dateStr = formatDateStr(date);
    return config.unavailableDates.includes(dateStr);
  };

  const isDateAvailable = (date: Date) => {
    if (!config) return false;
    return config.availableDays.includes(date.getDay());
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!config) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <p className="text-muted-foreground">Failed to load configuration</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Availability Settings</h1>
          <p className="text-muted-foreground">
            Configure your booking availability. Users can only book during your available times.
          </p>
        </div>

        {message && (
          <div className={`mb-6 p-4 rounded-lg ${
            message.type === "success" 
              ? "bg-green-500/10 border border-green-500/20 text-green-500" 
              : "bg-destructive/10 border border-destructive/20 text-destructive"
          }`}>
            {message.text}
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Settings */}
          <div className="space-y-6">
            {/* Available Days */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Available Days
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Select which days of the week you're available for bookings.
                </p>
                <div className="flex flex-wrap gap-2">
                  {fullDayNames.map((name, index) => (
                    <button
                      key={index}
                      onClick={() => toggleDay(index)}
                      className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                        config.availableDays.includes(index)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-muted border-border hover:border-primary/50"
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Time Slots */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Available Time Slots (IST)
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Define the time slots available for booking each day. Times are in IST (Indian Standard Time) and will be displayed to users in their local timezone.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {config.availableTimeSlots.map(slot => (
                    <div
                      key={slot}
                      className="flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-lg"
                    >
                      <span className="text-sm">{formatTime12h(slot)} IST</span>
                      <button
                        onClick={() => removeTimeSlot(slot)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <select
                    value={newTimeSlot}
                    onChange={(e) => setNewTimeSlot(e.target.value)}
                    className="flex-1 px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
                  >
                    <option value="">Select time to add (IST)</option>
                    {defaultTimeSlots
                      .filter(t => !config.availableTimeSlots.includes(t))
                      .map(t => (
                        <option key={t} value={t}>{formatTime12h(t)} IST</option>
                      ))}
                  </select>
                  <Button onClick={addTimeSlot} disabled={!newTimeSlot}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Booking Rules */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-bold">Booking Rules</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Maximum advance booking (weeks)
                  </label>
                  <select
                    value={config.maxAdvanceWeeks}
                    onChange={(e) => saveConfig({ maxAdvanceWeeks: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
                  >
                    <option value={1}>1 week</option>
                    <option value={2}>2 weeks</option>
                    <option value={3}>3 weeks</option>
                    <option value={4}>4 weeks</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Minimum notice (hours)
                  </label>
                  <select
                    value={config.minNoticeHours}
                    onChange={(e) => saveConfig({ minNoticeHours: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 bg-muted rounded-lg border border-border focus:border-primary focus:outline-none"
                  >
                    <option value={12}>12 hours</option>
                    <option value={24}>24 hours</option>
                    <option value={48}>48 hours</option>
                    <option value={72}>72 hours</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Calendar */}
          <div>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Calendar</h2>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                      className="p-2 hover:bg-muted rounded-lg"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="font-medium min-w-[140px] text-center">
                      {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                    </span>
                    <button
                      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                      className="p-2 hover:bg-muted rounded-lg"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Click on dates to mark them as unavailable (blocked).
                </p>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {dayNames.map(day => (
                    <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                      {day}
                    </div>
                  ))}
                  {generateCalendarDays().map((date, index) => {
                    if (!date) {
                      return <div key={`empty-${index}`} className="p-2" />;
                    }

                    const dateStr = formatDateStr(date);
                    const isToday = formatDateStr(new Date()) === dateStr;
                    const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
                    const isUnavailable = isDateUnavailable(date);
                    const isDayAvailable = isDateAvailable(date);

                    return (
                      <button
                        key={dateStr}
                        onClick={() => !isPast && toggleUnavailableDate(dateStr)}
                        disabled={isPast}
                        className={`
                          p-2 text-sm rounded-lg transition-all relative
                          ${isPast ? "text-muted-foreground/50 cursor-not-allowed" : "cursor-pointer hover:ring-2 hover:ring-primary/50"}
                          ${isToday ? "ring-2 ring-primary" : ""}
                          ${isUnavailable ? "bg-destructive/20 text-destructive line-through" : ""}
                          ${!isDayAvailable && !isUnavailable ? "bg-muted/50 text-muted-foreground" : ""}
                          ${isDayAvailable && !isUnavailable && !isPast ? "bg-primary/10" : ""}
                        `}
                      >
                        {date.getDate()}
                        {isUnavailable && (
                          <X className="w-3 h-3 absolute top-0 right-0 text-destructive" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-primary/10 rounded" />
                    <span>Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-muted/50 rounded" />
                    <span>Day Off</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-destructive/20 rounded" />
                    <span>Blocked</span>
                  </div>
                </div>

                {/* Blocked Dates List */}
                {config.unavailableDates.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h3 className="font-medium mb-3">Blocked Dates</h3>
                    <div className="flex flex-wrap gap-2">
                      {config.unavailableDates.sort().map(date => (
                        <Badge key={date} variant="secondary" className="flex items-center gap-1">
                          {new Date(date + "T00:00:00").toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                          <button
                            onClick={() => toggleUnavailableDate(date)}
                            className="ml-1 hover:text-destructive"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
