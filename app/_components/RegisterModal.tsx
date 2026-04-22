"use client";

import { useState, useEffect, useRef } from "react";
import { X, Phone, KeyRound, User, CreditCard, CheckCircle2, Loader2 } from "lucide-react";
import { api } from "../lib/api";
import { saveToken, getToken } from "../lib/auth";

type Step = "phone" | "otp" | "details" | "payment" | "success";

interface RegisterModalProps {
  eventId: string;
  eventTitle: string;
  price: { amount: number; currency: string };
}

function formatPrice(amount: number, currency: string) {
  if (amount === 0) return "Free";
  return new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount / 100);
}

const PROGRESS_STEPS: Step[] = ["phone", "otp", "details", "payment"];

export default function RegisterModal({ eventId, eventTitle, price }: RegisterModalProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("phone");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [phone, setPhone] = useState("+91 ");
  const [requestId, setRequestId] = useState("");
  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [registrationId, setRegistrationId] = useState("");
  const [orderId, setOrderId] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(price.amount);
  const [ticketNumber, setTicketNumber] = useState("");

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (resendTimer <= 0) return;
    timerRef.current = setInterval(() => {
      setResendTimer((t) => {
        if (t <= 1) { clearInterval(timerRef.current!); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resendTimer]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function openModal() {
    setError(null);
    setStep(getToken() ? "details" : "phone");
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    setError(null);
  }

  async function handlePhoneSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const result = await api.auth.requestOtp(phone.trim());
      setRequestId(result.requestId);
      setResendTimer(result.resendAfterSec);
      setOtp("");
      setStep("otp");
    } catch (err: unknown) {
      setError((err as { message?: string })?.message ?? "Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleOtpSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const result = await api.auth.verifyOtp(requestId, otp);
      saveToken(result.token);
      if (result.user.name) setName(result.user.name);
      if (result.user.email) setEmail(result.user.email ?? "");
      setStep("details");
    } catch (err: unknown) {
      setError((err as { message?: string })?.message ?? "Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDetailsSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const result = await api.events.register(eventId, {
        attendee: { name, email, phone: phone.trim() },
      });
      setRegistrationId(result.registration.id);
      setOrderId(result.payment.razorpayOrderId);
      setPaymentAmount(result.payment.amount);
      setStep("payment");
    } catch (err: unknown) {
      setError((err as { message?: string })?.message ?? "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handlePayment() {
    setError(null);
    setLoading(true);
    try {
      const result = await api.payments.verify({
        razorpayOrderId: orderId,
        razorpayPaymentId: `pay_mock_${Date.now()}`,
        razorpaySignature: "mock_signature",
        registrationId,
      });
      setTicketNumber(result.registration.ticketNumber);
      setStep("success");
    } catch (err: unknown) {
      setError((err as { message?: string })?.message ?? "Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const stepIndex = PROGRESS_STEPS.indexOf(step);

  return (
    <>
      <button
        onClick={openModal}
        className="w-full rounded-full bg-[var(--accent)] px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
      >
        Register now
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="Event registration"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Dialog panel */}
          <div className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] px-6 py-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-[var(--accent)]">Register</p>
                <h2 className="mt-0.5 font-semibold leading-snug">{eventTitle}</h2>
                <p className="mt-0.5 text-sm text-[var(--muted)]">{formatPrice(price.amount, price.currency)} per person</p>
              </div>
              <button
                onClick={closeModal}
                className="rounded-lg p-1.5 text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Progress bar */}
            {step !== "success" && (
              <div className="flex gap-1 px-6 pt-5">
                {PROGRESS_STEPS.map((s, i) => (
                  <div
                    key={s}
                    className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                      i <= stepIndex ? "bg-[var(--accent)]" : "bg-[var(--border)]"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Step content */}
            <div className="px-6 pb-6 pt-5">

              {/* ── Step 1: Phone ─────────────────────────────────── */}
              {step === "phone" && (
                <form onSubmit={handlePhoneSubmit} className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)]">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Verify your phone</h3>
                      <p className="text-sm text-[var(--muted)]">We'll send a one-time code to confirm.</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium uppercase tracking-widest text-[var(--muted-2)]">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      required
                      autoFocus
                      className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-2)] focus:border-[var(--accent)] focus:outline-none"
                    />
                  </div>
                  {error && <p className="text-sm text-red-400">{error}</p>}
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] disabled:opacity-60"
                  >
                    {loading && <Loader2 size={14} className="animate-spin" />}
                    Send OTP
                  </button>
                </form>
              )}

              {/* ── Step 2: OTP ───────────────────────────────────── */}
              {step === "otp" && (
                <form onSubmit={handleOtpSubmit} className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)]">
                      <KeyRound size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Enter the OTP</h3>
                      <p className="text-sm text-[var(--muted)]">Sent to {phone.trim()}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium uppercase tracking-widest text-[var(--muted-2)]">
                      6-digit code
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                      placeholder="——————"
                      maxLength={6}
                      required
                      autoFocus
                      className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-center font-mono text-2xl tracking-[0.6em] text-[var(--foreground)] placeholder:tracking-normal placeholder:text-[var(--muted-2)] focus:border-[var(--accent)] focus:outline-none"
                    />
                    <p className="text-center text-xs text-[var(--muted-2)]">
                      Any 6-digit code works in demo mode
                    </p>
                  </div>
                  {error && <p className="text-sm text-red-400">{error}</p>}
                  <button
                    type="submit"
                    disabled={loading || otp.length !== 6}
                    className="flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] disabled:opacity-60"
                  >
                    {loading && <Loader2 size={14} className="animate-spin" />}
                    Verify OTP
                  </button>
                  <div className="flex items-center justify-between text-xs">
                    <button
                      type="button"
                      onClick={() => setStep("phone")}
                      className="text-[var(--muted)] hover:text-[var(--foreground)]"
                    >
                      Change number
                    </button>
                    {resendTimer > 0 ? (
                      <span className="text-[var(--muted-2)]">Resend in {resendTimer}s</span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handlePhoneSubmit({ preventDefault: () => {} } as React.FormEvent)}
                        className="text-[var(--accent)] hover:underline"
                      >
                        Resend OTP
                      </button>
                    )}
                  </div>
                </form>
              )}

              {/* ── Step 3: Details ───────────────────────────────── */}
              {step === "details" && (
                <form onSubmit={handleDetailsSubmit} className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)]">
                      <User size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Your details</h3>
                      <p className="text-sm text-[var(--muted)]">We'll use these for your ticket.</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium uppercase tracking-widest text-[var(--muted-2)]">
                        Full name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        required
                        autoFocus
                        className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-2)] focus:border-[var(--accent)] focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium uppercase tracking-widest text-[var(--muted-2)]">
                        Email address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                        className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-2)] focus:border-[var(--accent)] focus:outline-none"
                      />
                    </div>
                  </div>
                  {error && <p className="text-sm text-red-400">{error}</p>}
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] disabled:opacity-60"
                  >
                    {loading && <Loader2 size={14} className="animate-spin" />}
                    Continue to payment
                  </button>
                </form>
              )}

              {/* ── Step 4: Payment ───────────────────────────────── */}
              {step === "payment" && (
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)]">
                      <CreditCard size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Complete payment</h3>
                      <p className="text-sm text-[var(--muted)]">Secure checkout via Razorpay</p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-2)] p-4">
                    <div className="flex items-start justify-between gap-3 text-sm">
                      <span className="text-[var(--muted)]">{eventTitle}</span>
                      <span className="shrink-0 font-medium">{formatPrice(paymentAmount, price.currency)}</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between border-t border-[var(--border)] pt-3">
                      <span className="text-sm font-semibold">Total due</span>
                      <span className="font-bold text-[var(--accent)]">{formatPrice(paymentAmount, price.currency)}</span>
                    </div>
                  </div>
                  <div className="rounded-xl border border-dashed border-[var(--border)] px-4 py-3 text-center text-xs text-[var(--muted-2)]">
                    Demo mode — no real payment will be processed
                  </div>
                  {error && <p className="text-sm text-red-400">{error}</p>}
                  <button
                    onClick={handlePayment}
                    disabled={loading}
                    className="flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] disabled:opacity-60"
                  >
                    {loading && <Loader2 size={14} className="animate-spin" />}
                    Pay {formatPrice(paymentAmount, price.currency)}
                  </button>
                </div>
              )}

              {/* ── Step 5: Success ───────────────────────────────── */}
              {step === "success" && (
                <div className="flex flex-col items-center gap-5 py-2 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent-subtle)] text-[var(--accent)]">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">You&apos;re registered!</h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      Confirmation sent to <span className="text-[var(--foreground)]">{email}</span>
                    </p>
                  </div>
                  <div className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-4">
                    <p className="text-xs font-medium uppercase tracking-widest text-[var(--muted-2)]">Ticket number</p>
                    <p className="mt-1.5 font-mono text-xl font-bold tracking-wider text-[var(--accent)]">
                      {ticketNumber}
                    </p>
                  </div>
                  <p className="text-xs text-[var(--muted-2)]">Save this number — you&apos;ll need it at the door.</p>
                  <button
                    onClick={closeModal}
                    className="w-full rounded-full border border-[var(--border)] px-5 py-3 text-sm font-semibold transition-colors hover:bg-[var(--surface-2)]"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
