export interface User {
  id: string;
  phone: string;
  name: string | null;
  email: string | null;
  createdAt: string;
}

export interface OtpRequest {
  requestId: string;
  expiresInSec: number;
  resendAfterSec: number;
}

export interface AuthResponse {
  token: string;
  expiresAt: string;
  user: User;
}

export interface EventLocation {
  venue: string;
  address?: string;
  city: string;
  country: string;
  lat?: number;
  lng?: number;
}

export interface Price {
  amount: number;
  currency: string;
}

export interface AgendaItem {
  time: string;
  title: string;
}

export interface Instructor {
  name: string;
  role: string;
  avatarUrl: string;
}

export type EventStatus = "upcoming" | "past" | "sold_out";
export type EventCategory = "training" | "consulting" | "integration" | "events";

export interface Event {
  id: string;
  slug: string;
  title: string;
  summary: string;
  startAt: string;
  endAt: string;
  timezone: string;
  location: EventLocation;
  coverImageUrl: string;
  price: Price;
  capacity: number;
  seatsRemaining: number;
  status: EventStatus;
  category: EventCategory;
}

export interface EventDetail extends Event {
  description: string;
  agenda: AgendaItem[];
  instructors: Instructor[];
  gallery: string[];
  tags: string[];
}

export interface Registration {
  id: string;
  eventId?: string;
  userId?: string;
  status: "pending_payment" | "confirmed" | "cancelled";
  ticketNumber?: string;
  createdAt?: string;
  refundStatus?: string;
  event?: Pick<Event, "id" | "slug" | "title" | "startAt" | "coverImageUrl">;
  amountPaid?: Price;
}

export interface PaymentOrder {
  razorpayOrderId: string;
  razorpayKeyId: string;
  amount: number;
  currency: string;
  receipt: string;
}

export interface RegisterResponse {
  registration: Registration;
  payment: PaymentOrder;
}

export interface PaymentVerifyResponse {
  registration: {
    id: string;
    status: "confirmed";
    ticketNumber: string;
  };
  payment: {
    id: string;
    status: "captured";
    amount: number;
    currency: string;
    paidAt: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body?: string;
  coverImageUrl: string;
  author: { name: string; avatarUrl: string };
  publishedAt: string;
  tags: string[];
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
