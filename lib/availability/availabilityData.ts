// Availability configuration for booking system
// This will be managed via the admin panel

export interface AvailabilityConfig {
  // Default available days (0 = Sunday, 1 = Monday, etc.)
  availableDays: number[];
  // Default available time slots (in admin's timezone - IST)
  availableTimeSlots: string[];
  // How many weeks in advance users can book
  maxAdvanceWeeks: number;
  // Minimum hours notice required for booking
  minNoticeHours: number;
  // Specific dates that are unavailable (ISO date strings: "2026-02-10")
  unavailableDates: string[];
  // Specific date overrides with custom time slots
  dateOverrides: Record<string, string[]>;
  // Admin's timezone (times are stored in this timezone)
  timezone: string;
}

// IST is UTC+5:30
export const ADMIN_TIMEZONE = "Asia/Kolkata";
export const ADMIN_TIMEZONE_OFFSET_MINUTES = 330; // +5:30 in minutes

// Default configuration
export const defaultAvailabilityConfig: AvailabilityConfig = {
  // Monday through Friday by default
  availableDays: [1, 2, 3, 4, 5],
  // Default time slots in IST (10:00 AM to 9:00 PM IST)
  availableTimeSlots: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"],
  // Users can book up to 2 weeks in advance
  maxAdvanceWeeks: 2,
  // Minimum 24 hours notice
  minNoticeHours: 24,
  // No unavailable dates by default
  unavailableDates: [],
  // No date overrides by default
  dateOverrides: {},
  // Admin timezone is IST
  timezone: ADMIN_TIMEZONE,
};

// In-memory store (in production, use a database)
let currentConfig: AvailabilityConfig = { ...defaultAvailabilityConfig };

export function getAvailabilityConfig(): AvailabilityConfig {
  return { ...currentConfig };
}

export function updateAvailabilityConfig(updates: Partial<AvailabilityConfig>): AvailabilityConfig {
  currentConfig = { ...currentConfig, ...updates };
  return { ...currentConfig };
}

export function addUnavailableDate(date: string): void {
  if (!currentConfig.unavailableDates.includes(date)) {
    currentConfig.unavailableDates.push(date);
  }
}

export function removeUnavailableDate(date: string): void {
  currentConfig.unavailableDates = currentConfig.unavailableDates.filter(d => d !== date);
}

export function setDateOverride(date: string, timeSlots: string[]): void {
  currentConfig.dateOverrides[date] = timeSlots;
}

export function removeDateOverride(date: string): void {
  delete currentConfig.dateOverrides[date];
}

// Generate available slots for booking
// Returns slots with IST times - frontend will convert to local time
export function generateAvailableSlots(): { date: string; times: string[]; timesIST: string[]; timezone: string }[] {
  const slots: { date: string; times: string[]; timesIST: string[]; timezone: string }[] = [];
  const today = new Date();
  const minNoticeDate = new Date(today.getTime() + currentConfig.minNoticeHours * 60 * 60 * 1000);
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + currentConfig.maxAdvanceWeeks * 7);

  for (let d = new Date(minNoticeDate); d <= maxDate; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split("T")[0];
    const dayOfWeek = d.getDay();

    // Skip if day is not in available days
    if (!currentConfig.availableDays.includes(dayOfWeek)) continue;

    // Skip if date is in unavailable dates
    if (currentConfig.unavailableDates.includes(dateStr)) continue;

    // Get time slots (use override if exists, otherwise default)
    const timesIST = currentConfig.dateOverrides[dateStr] || currentConfig.availableTimeSlots;

    if (timesIST.length > 0) {
      slots.push({ 
        date: dateStr, 
        times: [...timesIST], // Will be converted to local time on frontend
        timesIST: [...timesIST],
        timezone: currentConfig.timezone 
      });
    }
  }

  return slots;
}

// Day names for display
export const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Convert IST time to UTC Date object for a given date
export function istTimeToUTC(dateStr: string, timeIST: string): Date {
  const [hours, minutes] = timeIST.split(":").map(Number);
  // Create date in IST
  const istDate = new Date(`${dateStr}T${timeIST}:00+05:30`);
  return istDate;
}

// Format time for display based on timezone
export function formatTimeForTimezone(dateStr: string, timeIST: string, targetTimezone: string): string {
  const utcDate = istTimeToUTC(dateStr, timeIST);
  return utcDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: targetTimezone,
  });
}

