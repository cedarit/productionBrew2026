# Production Brew — API Contract v1

**Base URL:** `https://api.productionbrew.com/v1`
**Auth header:** `Authorization: Bearer <session-token>` on protected endpoints
**Content-Type:** `application/json` on all requests

### Uniform error shape
```json
{ "error": { "code": "INVALID_OTP", "message": "Human-readable message", "details": {} } }
```

### Pagination (all list endpoints)
Query params: `?page=1&limit=20`
Response includes:
```json
"meta": { "page": 1, "limit": 20, "total": 57, "totalPages": 3 }
```

---

## P0 — Auth (Phone + SMS OTP)

### POST /auth/otp/request
```json
// Request
{ "phone": "+919999999999" }

// 200 OK
{ "requestId": "otp_abc123", "expiresInSec": 300, "resendAfterSec": 30 }

// 429 Too Many Requests
{ "error": { "code": "RATE_LIMITED", "message": "Try again in 60 seconds" } }
```

### POST /auth/otp/verify
```json
// Request
{ "requestId": "otp_abc123", "otp": "123456" }

// 200 OK
{
  "token": "eyJhbGc...",
  "expiresAt": "2026-04-23T10:00:00Z",
  "user": {
    "id": "usr_123",
    "phone": "+919999999999",
    "name": null,
    "email": null,
    "createdAt": "2026-04-22T10:00:00Z"
  }
}

// 401
{ "error": { "code": "INVALID_OTP", "message": "OTP is incorrect or expired" } }
```

### GET /auth/me *(auth required)*
```json
// 200 OK
{ "id": "usr_123", "phone": "+919999999999", "name": "Pankaj Bhagat", "email": "p@x.com", "createdAt": "..." }

// 401
{ "error": { "code": "UNAUTHORIZED", "message": "Invalid or expired token" } }
```

### PATCH /auth/me *(auth required)*
```json
// Request
{ "name": "Pankaj Bhagat", "email": "pbhagat@example.com" }

// 200 OK — returns updated user object (same shape as GET /auth/me)
```

### POST /auth/logout *(auth required)*
```
204 No Content
```

---

## P0 — Events

### GET /events
Query params: `?status=upcoming|past|all&category=training|consulting|integration|events&location=singapore|india&search=<text>&page=1&limit=20`

```json
// 200 OK
{
  "data": [
    {
      "id": "evt_001",
      "slug": "audio-training-singapore-may-2026",
      "title": "Audio Fundamentals for Worship Teams",
      "summary": "One-day hands-on training covering mixing consoles, gain staging, and monitoring.",
      "startAt": "2026-05-15T09:00:00+08:00",
      "endAt": "2026-05-15T17:00:00+08:00",
      "timezone": "Asia/Singapore",
      "location": { "venue": "Grace Assembly", "city": "Singapore", "country": "SG" },
      "coverImageUrl": "https://cdn.productionbrew.com/events/evt_001/cover.jpg",
      "price": { "amount": 15000, "currency": "INR" },
      "capacity": 40,
      "seatsRemaining": 12,
      "status": "upcoming",
      "category": "training"
    }
  ],
  "meta": { "page": 1, "limit": 20, "total": 1, "totalPages": 1 }
}
```

### GET /events/:slug
```json
// 200 OK
{
  "id": "evt_001",
  "slug": "audio-training-singapore-may-2026",
  "title": "Audio Fundamentals for Worship Teams",
  "description": "<p>Full HTML/markdown body content...</p>",
  "agenda": [
    { "time": "09:00", "title": "Registration & coffee" },
    { "time": "09:30", "title": "Intro to signal flow" },
    { "time": "11:00", "title": "Hands-on console time" },
    { "time": "17:00", "title": "Q&A and close" }
  ],
  "instructors": [
    { "name": "Jane Doe", "role": "Lead Trainer", "avatarUrl": "https://..." }
  ],
  "startAt": "2026-05-15T09:00:00+08:00",
  "endAt": "2026-05-15T17:00:00+08:00",
  "timezone": "Asia/Singapore",
  "location": {
    "venue": "Grace Assembly",
    "address": "355 Tanglin Rd",
    "city": "Singapore",
    "country": "SG",
    "lat": 1.3,
    "lng": 103.8
  },
  "coverImageUrl": "https://...",
  "gallery": ["https://...", "https://..."],
  "price": { "amount": 15000, "currency": "INR" },
  "capacity": 40,
  "seatsRemaining": 12,
  "status": "upcoming",
  "category": "training",
  "tags": ["audio", "training", "worship"]
}

// 404
{ "error": { "code": "EVENT_NOT_FOUND", "message": "No event found for that slug" } }
```

---

## P0 — Registration & Payment

> Razorpay flow: create order → user pays in Razorpay Checkout → verify signature → confirmed.

### POST /events/:id/register *(auth required)*
```json
// Request
{
  "attendee": { "name": "Pankaj Bhagat", "email": "p@x.com", "phone": "+919999999999" },
  "notes": "Dietary: vegetarian"
}

// 201 Created
{
  "registration": {
    "id": "reg_789",
    "eventId": "evt_001",
    "userId": "usr_123",
    "status": "pending_payment",
    "createdAt": "2026-04-22T..."
  },
  "payment": {
    "razorpayOrderId": "order_L1a2b3c4",
    "razorpayKeyId": "rzp_test_XXXX",
    "amount": 15000,
    "currency": "INR",
    "receipt": "reg_789"
  }
}

// 409 — sold out
{ "error": { "code": "SEATS_SOLD_OUT", "message": "No seats remaining for this event" } }

// 409 — duplicate
{ "error": { "code": "ALREADY_REGISTERED", "message": "You are already registered for this event" } }
```

### POST /payments/verify *(auth required)*
Called by frontend after Razorpay Checkout succeeds. Backend verifies HMAC-SHA256 signature.

```json
// Request
{
  "razorpayOrderId": "order_L1a2b3c4",
  "razorpayPaymentId": "pay_M5n6o7p8",
  "razorpaySignature": "abcd1234...",
  "registrationId": "reg_789"
}

// 200 OK
{
  "registration": {
    "id": "reg_789",
    "status": "confirmed",
    "ticketNumber": "PB-2026-0042"
  },
  "payment": {
    "id": "pay_M5n6o7p8",
    "status": "captured",
    "amount": 15000,
    "currency": "INR",
    "paidAt": "2026-04-22T..."
  }
}

// 400
{ "error": { "code": "SIGNATURE_MISMATCH", "message": "Payment verification failed" } }
```

### POST /payments/webhook — BACKEND ONLY
Razorpay server-to-server. Register this URL in the Razorpay dashboard. Backend verifies `X-Razorpay-Signature` header, then updates registration + CiviCRM participant. Frontend never calls this.

Events to handle: `payment.captured`, `payment.failed`, `refund.processed`

### GET /me/registrations *(auth required)*
Query: `?status=confirmed|pending_payment|cancelled`

```json
// 200 OK
{
  "data": [
    {
      "id": "reg_789",
      "status": "confirmed",
      "ticketNumber": "PB-2026-0042",
      "event": {
        "id": "evt_001",
        "slug": "audio-training-singapore-may-2026",
        "title": "Audio Fundamentals for Worship Teams",
        "startAt": "2026-05-15T09:00:00+08:00",
        "coverImageUrl": "https://..."
      },
      "amountPaid": { "amount": 15000, "currency": "INR" },
      "createdAt": "2026-04-22T..."
    }
  ],
  "meta": { "page": 1, "limit": 20, "total": 1, "totalPages": 1 }
}
```

### POST /registrations/:id/cancel *(auth required)*
```json
// 200 OK
{ "registration": { "id": "reg_789", "status": "cancelled", "refundStatus": "pending" } }

// 409 — past cancellation deadline
{ "error": { "code": "CANCELLATION_WINDOW_CLOSED", "message": "..." } }
```

---

## P1 — Blog / Content

### GET /posts?page=1&limit=10
### GET /posts/:slug

Shape:
```json
{
  "id": "post_001",
  "slug": "smaart-training-recap",
  "title": "What We Learned at the SMAART Training Session",
  "excerpt": "Short summary...",
  "body": "<p>Full HTML body...</p>",
  "coverImageUrl": "https://...",
  "author": { "name": "Production Brew Team", "avatarUrl": "..." },
  "publishedAt": "2026-03-10T...",
  "tags": ["training", "audio", "smaart"]
}
```

---

## P1 — Contact Form

### POST /contact *(public, rate-limited: 10/hour/IP)*
```json
// Request
{ "name": "Jane", "email": "j@x.com", "phone": "+65...", "subject": "training enquiry", "message": "..." }

// 202 Accepted
{ "status": "received" }

// 429
{ "error": { "code": "RATE_LIMITED", "message": "Too many requests" } }
```

---

## Backend requirements checklist

- [ ] **CORS**: allow `https://<project>.vercel.app` + `https://productionbrew.com`
- [ ] **Rate limits**: OTP request 5/hr/phone, OTP verify 5/requestId, contact 10/hr/IP
- [ ] **Razorpay webhook**: register `/v1/payments/webhook` in Razorpay dashboard; verify `X-Razorpay-Signature`
- [ ] **HMAC signature verification**: `sha256(orderId + "|" + paymentId, razorpaySecret)`
- [ ] **CiviCRM sync**: on `registration.confirmed` → create/update Contact + Contribution + Event Participant in CiviCRM
- [ ] **Tokens**: JWT preferred; 30-day expiry with optional refresh
- [ ] **Phone format**: store in E.164 (`+919999999999`)

---

## Frontend environment variables

```env
NEXT_PUBLIC_API_URL=https://api.productionbrew.com/v1
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_XXXX
NEXT_PUBLIC_API_MODE=mock   # set to "live" to hit real Drupal API
```
