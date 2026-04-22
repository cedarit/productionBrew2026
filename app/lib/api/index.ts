import { client, ApiResponseError } from "./client";
import { mockApi } from "./mock";
import {
  OtpRequest,
  AuthResponse,
  User,
  Event,
  EventDetail,
  RegisterResponse,
  PaymentVerifyResponse,
  Registration,
  BlogPost,
  PaginatedResponse,
  ContactRequest,
} from "./types";

const isMock =
  !process.env.NEXT_PUBLIC_API_MODE ||
  process.env.NEXT_PUBLIC_API_MODE === "mock";

function buildQueryString(params?: Record<string, string | number | undefined>): string {
  if (!params) return "";
  const qs = Object.entries(params)
    .filter(([, v]) => v !== undefined)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
    .join("&");
  return qs ? `?${qs}` : "";
}

export const api = {
  auth: {
    requestOtp(phone: string): Promise<OtpRequest> {
      if (isMock) return mockApi.requestOtp(phone);
      return client.post<OtpRequest>("/auth/otp/request", { phone });
    },

    verifyOtp(requestId: string, otp: string): Promise<AuthResponse> {
      if (isMock) return mockApi.verifyOtp(requestId, otp);
      return client.post<AuthResponse>("/auth/otp/verify", { requestId, otp });
    },

    getMe(): Promise<User> {
      if (isMock) return mockApi.getMe();
      return client.get<User>("/auth/me");
    },

    updateMe(data: Partial<Pick<User, "name" | "email">>): Promise<User> {
      if (isMock) return mockApi.updateMe(data);
      return client.patch<User>("/auth/me", data);
    },

    logout(): Promise<void> {
      if (isMock) return mockApi.logout();
      return client.post<void>("/auth/logout");
    },
  },

  events: {
    list(params?: {
      status?: string;
      category?: string;
      location?: string;
      search?: string;
      page?: number;
      limit?: number;
    }): Promise<PaginatedResponse<Event>> {
      if (isMock) return mockApi.getEvents(params);
      return client.get<PaginatedResponse<Event>>(`/events${buildQueryString(params)}`);
    },

    get(slug: string): Promise<EventDetail> {
      if (isMock) return mockApi.getEvent(slug);
      return client.get<EventDetail>(`/events/${slug}`);
    },

    register(
      eventId: string,
      body: { attendee: { name: string; email: string; phone: string }; notes?: string }
    ): Promise<RegisterResponse> {
      if (isMock) return mockApi.registerForEvent(eventId, body);
      return client.post<RegisterResponse>(`/events/${eventId}/register`, body);
    },
  },

  payments: {
    verify(data: {
      razorpayOrderId: string;
      razorpayPaymentId: string;
      razorpaySignature: string;
      registrationId: string;
    }): Promise<PaymentVerifyResponse> {
      if (isMock) return mockApi.verifyPayment(data);
      return client.post<PaymentVerifyResponse>("/payments/verify", data);
    },
  },

  registrations: {
    list(params?: { status?: string; page?: number; limit?: number }): Promise<PaginatedResponse<Registration>> {
      if (isMock) return mockApi.getMyRegistrations(params);
      return client.get<PaginatedResponse<Registration>>(`/me/registrations${buildQueryString(params)}`);
    },

    cancel(registrationId: string): Promise<{ registration: Registration }> {
      if (isMock) return mockApi.cancelRegistration(registrationId);
      return client.post<{ registration: Registration }>(`/registrations/${registrationId}/cancel`);
    },
  },

  blog: {
    list(params?: { page?: number; limit?: number }): Promise<PaginatedResponse<BlogPost>> {
      if (isMock) return mockApi.getPosts(params);
      return client.get<PaginatedResponse<BlogPost>>(`/posts${buildQueryString(params)}`);
    },

    get(slug: string): Promise<BlogPost> {
      if (isMock) return mockApi.getPost(slug);
      return client.get<BlogPost>(`/posts/${slug}`);
    },
  },

  contact: {
    submit(data: ContactRequest): Promise<{ status: "received" }> {
      if (isMock) return mockApi.submitContact(data);
      return client.post<{ status: "received" }>("/contact", data);
    },
  },
};

export { ApiResponseError };
export type {
  OtpRequest,
  AuthResponse,
  User,
  Event,
  EventDetail,
  RegisterResponse,
  PaymentVerifyResponse,
  Registration,
  BlogPost,
  PaginatedResponse,
  ContactRequest,
} from "./types";
