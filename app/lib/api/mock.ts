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
} from "./types";

const delay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

// ─── Fixtures ────────────────────────────────────────────────────────────────

const MOCK_USER: User = {
  id: "usr_mock_001",
  phone: "+919999999999",
  name: "Demo User",
  email: "demo@productionbrew.com",
  createdAt: "2026-01-01T00:00:00Z",
};

const MOCK_EVENTS: Event[] = [
  {
    id: "evt_001",
    slug: "audio-training-singapore-may-2026",
    title: "Audio Fundamentals for Worship Teams",
    summary:
      "One-day hands-on training covering mixing consoles, gain staging, and monitoring.",
    startAt: "2026-05-15T09:00:00+08:00",
    endAt: "2026-05-15T17:00:00+08:00",
    timezone: "Asia/Singapore",
    location: { venue: "Grace Assembly", city: "Singapore", country: "SG" },
    coverImageUrl: "https://cdn.productionbrew.com/events/evt_001/cover.jpg",
    price: { amount: 15000, currency: "INR" },
    capacity: 40,
    seatsRemaining: 12,
    status: "upcoming",
    category: "training",
  },
  {
    id: "evt_002",
    slug: "live-sound-workshop-mumbai-march-2026",
    title: "Live Sound Workshop – Mumbai",
    summary: "A comprehensive look at PA system design and crowd noise management.",
    startAt: "2026-03-10T10:00:00+05:30",
    endAt: "2026-03-10T18:00:00+05:30",
    timezone: "Asia/Kolkata",
    location: { venue: "Bandra Community Hall", city: "Mumbai", country: "IN" },
    coverImageUrl: "https://cdn.productionbrew.com/events/evt_002/cover.jpg",
    price: { amount: 8000, currency: "INR" },
    capacity: 60,
    seatsRemaining: 0,
    status: "past",
    category: "events",
  },
  {
    id: "evt_003",
    slug: "avl-integration-masterclass-bangalore-june-2026",
    title: "AVL Integration Masterclass",
    summary:
      "Deep-dive into audio-video-lighting integration for large venues — sold out.",
    startAt: "2026-06-20T09:00:00+05:30",
    endAt: "2026-06-21T18:00:00+05:30",
    timezone: "Asia/Kolkata",
    location: { venue: "Christ University Auditorium", city: "Bangalore", country: "IN" },
    coverImageUrl: "https://cdn.productionbrew.com/events/evt_003/cover.jpg",
    price: { amount: 25000, currency: "INR" },
    capacity: 30,
    seatsRemaining: 0,
    status: "sold_out",
    category: "integration",
  },
];

const MOCK_EVENT_DETAILS: Record<string, EventDetail> = {
  "evt_001": {
    ...MOCK_EVENTS[0],
    description: "<p>This one-day intensive training is designed for worship team sound engineers...</p>",
    agenda: [
      { time: "09:00", title: "Registration & coffee" },
      { time: "09:30", title: "Intro to signal flow" },
      { time: "11:00", title: "Hands-on console time" },
      { time: "13:00", title: "Lunch break" },
      { time: "14:00", title: "Monitoring strategies" },
      { time: "15:30", title: "Gain staging deep dive" },
      { time: "17:00", title: "Q&A and close" },
    ],
    instructors: [
      { name: "Jane Doe", role: "Lead Trainer", avatarUrl: "https://cdn.productionbrew.com/team/jane.jpg" },
    ],
    gallery: [
      "https://cdn.productionbrew.com/events/evt_001/gallery-1.jpg",
      "https://cdn.productionbrew.com/events/evt_001/gallery-2.jpg",
    ],
    tags: ["audio", "training", "worship"],
  },
  "evt_002": {
    ...MOCK_EVENTS[1],
    description: "<p>Join us for a full-day workshop on live sound for large gatherings...</p>",
    agenda: [
      { time: "10:00", title: "PA design fundamentals" },
      { time: "12:00", title: "Hands-on setup" },
      { time: "13:00", title: "Lunch" },
      { time: "14:00", title: "Crowd noise management" },
      { time: "18:00", title: "Close" },
    ],
    instructors: [
      { name: "Raj Sharma", role: "Senior Engineer", avatarUrl: "https://cdn.productionbrew.com/team/raj.jpg" },
    ],
    gallery: [],
    tags: ["live-sound", "PA", "events"],
  },
  "evt_003": {
    ...MOCK_EVENTS[2],
    description: "<p>A two-day masterclass covering end-to-end AVL integration for large venues...</p>",
    agenda: [
      { time: "09:00", title: "System design overview" },
      { time: "11:00", title: "Dante networking" },
      { time: "14:00", title: "Video switching" },
      { time: "16:00", title: "Lighting control" },
    ],
    instructors: [
      { name: "Sam Cherian", role: "AVL Consultant", avatarUrl: "https://cdn.productionbrew.com/team/sam.jpg" },
    ],
    gallery: [
      "https://cdn.productionbrew.com/events/evt_003/gallery-1.jpg",
    ],
    tags: ["AVL", "integration", "venues"],
  },
};

const MOCK_POSTS: BlogPost[] = [
  {
    id: "post_001",
    slug: "smaart-training-recap",
    title: "What We Learned at the SMAART Training Session",
    excerpt: "A recap of our two-day deep dive into Rational Acoustics SMAART measurement software.",
    body: "<p>Last month, a group of twelve engineers gathered for an intensive SMAART training...</p>",
    coverImageUrl: "https://cdn.productionbrew.com/blog/post_001/cover.jpg",
    author: { name: "Production Brew Team", avatarUrl: "https://cdn.productionbrew.com/team/pb-logo.jpg" },
    publishedAt: "2026-03-10T09:00:00Z",
    tags: ["training", "audio", "smaart"],
  },
  {
    id: "post_002",
    slug: "choosing-your-first-digital-console",
    title: "How to Choose Your First Digital Console",
    excerpt: "Overwhelmed by the options? We break down the key criteria for worship teams on a budget.",
    body: "<p>Digital consoles have never been more accessible, but the choices can be paralyzing...</p>",
    coverImageUrl: "https://cdn.productionbrew.com/blog/post_002/cover.jpg",
    author: { name: "Production Brew Team", avatarUrl: "https://cdn.productionbrew.com/team/pb-logo.jpg" },
    publishedAt: "2026-04-01T09:00:00Z",
    tags: ["consoles", "buying-guide", "worship"],
  },
];

// ─── In-memory state ──────────────────────────────────────────────────────────

let mockToken: string | null = null;
let mockUser: User = { ...MOCK_USER };
const otpStore: Record<string, { phone: string; expires: number }> = {};
const registrations: Registration[] = [];

// ─── Mock API surface ─────────────────────────────────────────────────────────

export const mockApi = {
  // Auth
  async requestOtp(phone: string): Promise<OtpRequest> {
    await delay();
    const requestId = `otp_mock_${Date.now()}`;
    otpStore[requestId] = { phone, expires: Date.now() + 300_000 };
    return { requestId, expiresInSec: 300, resendAfterSec: 30 };
  },

  async verifyOtp(requestId: string, otp: string): Promise<AuthResponse> {
    await delay();
    const entry = otpStore[requestId];
    if (!entry) {
      throw { code: "INVALID_OTP", message: "OTP request not found" };
    }
    if (Date.now() > entry.expires) {
      throw { code: "INVALID_OTP", message: "OTP has expired" };
    }
    // Any 6-digit code is valid in mock mode
    if (!/^\d{6}$/.test(otp)) {
      throw { code: "INVALID_OTP", message: "OTP must be 6 digits" };
    }
    mockToken = `mock_token_${Date.now()}`;
    mockUser = { ...MOCK_USER, phone: entry.phone };
    delete otpStore[requestId];
    return {
      token: mockToken,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      user: { ...mockUser },
    };
  },

  async getMe(): Promise<User> {
    await delay();
    return { ...mockUser };
  },

  async updateMe(data: Partial<Pick<User, "name" | "email">>): Promise<User> {
    await delay();
    mockUser = { ...mockUser, ...data };
    return { ...mockUser };
  },

  async logout(): Promise<void> {
    await delay();
    mockToken = null;
  },

  // Events
  async getEvents(params?: {
    status?: string;
    category?: string;
    page?: number;
    limit?: number;
  }): Promise<PaginatedResponse<Event>> {
    await delay();
    let filtered = [...MOCK_EVENTS];
    if (params?.status && params.status !== "all") {
      filtered = filtered.filter((e) => e.status === params.status);
    }
    if (params?.category) {
      filtered = filtered.filter((e) => e.category === params.category);
    }
    const page = params?.page ?? 1;
    const limit = params?.limit ?? 20;
    const total = filtered.length;
    const data = filtered.slice((page - 1) * limit, page * limit);
    return { data, meta: { page, limit, total, totalPages: Math.ceil(total / limit) } };
  },

  async getEvent(slug: string): Promise<EventDetail> {
    await delay();
    const event = MOCK_EVENTS.find((e) => e.slug === slug);
    if (!event) {
      throw { code: "EVENT_NOT_FOUND", message: "No event found for that slug" };
    }
    return { ...MOCK_EVENT_DETAILS[event.id] };
  },

  // Registration & Payment
  async registerForEvent(
    eventId: string,
    body: { attendee: { name: string; email: string; phone: string }; notes?: string }
  ): Promise<RegisterResponse> {
    await delay();
    const event = MOCK_EVENTS.find((e) => e.id === eventId);
    if (!event) {
      throw { code: "EVENT_NOT_FOUND", message: "Event not found" };
    }
    if (event.seatsRemaining === 0) {
      throw { code: "SEATS_SOLD_OUT", message: "No seats remaining for this event" };
    }
    const alreadyRegistered = registrations.some(
      (r) => r.eventId === eventId && r.status !== "cancelled"
    );
    if (alreadyRegistered) {
      throw { code: "ALREADY_REGISTERED", message: "You are already registered for this event" };
    }
    const regId = `reg_mock_${Date.now()}`;
    const registration: Registration = {
      id: regId,
      eventId,
      userId: mockUser.id,
      status: "pending_payment",
      createdAt: new Date().toISOString(),
    };
    registrations.push(registration);
    return {
      registration,
      payment: {
        razorpayOrderId: `order_mock_${Date.now()}`,
        razorpayKeyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? "rzp_test_XXXX",
        amount: event.price.amount,
        currency: event.price.currency,
        receipt: regId,
      },
    };
  },

  async verifyPayment(data: {
    razorpayOrderId: string;
    razorpayPaymentId: string;
    razorpaySignature: string;
    registrationId: string;
  }): Promise<PaymentVerifyResponse> {
    await delay();
    const reg = registrations.find((r) => r.id === data.registrationId);
    if (!reg) {
      throw { code: "SIGNATURE_MISMATCH", message: "Registration not found" };
    }
    reg.status = "confirmed";
    reg.ticketNumber = `PB-2026-${String(registrations.length).padStart(4, "0")}`;
    return {
      registration: {
        id: reg.id,
        status: "confirmed",
        ticketNumber: reg.ticketNumber!,
      },
      payment: {
        id: data.razorpayPaymentId,
        status: "captured",
        amount: 15000,
        currency: "INR",
        paidAt: new Date().toISOString(),
      },
    };
  },

  async getMyRegistrations(params?: { status?: string }): Promise<PaginatedResponse<Registration>> {
    await delay();
    let data = [...registrations];
    if (params?.status) {
      data = data.filter((r) => r.status === params.status);
    }
    // Hydrate with event data
    data = data.map((r) => {
      const event = MOCK_EVENTS.find((e) => e.id === r.eventId);
      return {
        ...r,
        event: event
          ? { id: event.id, slug: event.slug, title: event.title, startAt: event.startAt, coverImageUrl: event.coverImageUrl }
          : undefined,
        amountPaid: event ? event.price : undefined,
      };
    });
    return { data, meta: { page: 1, limit: 20, total: data.length, totalPages: 1 } };
  },

  async cancelRegistration(registrationId: string): Promise<{ registration: Registration }> {
    await delay();
    const reg = registrations.find((r) => r.id === registrationId);
    if (!reg) {
      throw { code: "NOT_FOUND", message: "Registration not found" };
    }
    reg.status = "cancelled";
    reg.refundStatus = "pending";
    return { registration: { ...reg } };
  },

  // Blog
  async getPosts(params?: { page?: number; limit?: number }): Promise<PaginatedResponse<BlogPost>> {
    await delay();
    const page = params?.page ?? 1;
    const limit = params?.limit ?? 10;
    const total = MOCK_POSTS.length;
    const data = MOCK_POSTS.slice((page - 1) * limit, page * limit).map(({ body: _, ...rest }) => rest as BlogPost);
    return { data, meta: { page, limit, total, totalPages: Math.ceil(total / limit) } };
  },

  async getPost(slug: string): Promise<BlogPost> {
    await delay();
    const post = MOCK_POSTS.find((p) => p.slug === slug);
    if (!post) {
      throw { code: "POST_NOT_FOUND", message: "No post found for that slug" };
    }
    return { ...post };
  },

  // Contact
  async submitContact(_data: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }): Promise<{ status: "received" }> {
    await delay();
    return { status: "received" };
  },
};
