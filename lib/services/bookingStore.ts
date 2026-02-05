// Store bookings in memory (in production, use a database)
// This is a shared module that can be imported by multiple API routes

export interface Booking {
  id: string;
  consultationType?: string;
  sessionName?: string;
  duration?: number;
  price?: number;
  date?: string;
  time?: string;
  name?: string;
  email?: string;
  message?: string;
  status: string;
  createdAt?: string;
  meetLink?: string;
  paypalOrderId?: string;
  paypalTransactionId?: string;
  payerEmail?: string;
  payerName?: string;
  amount?: string;
  currency?: string;
  paidAt?: string;
  [key: string]: any; // Allow additional properties from bookingData spread
}

export const bookings = new Map<string, Booking>();
