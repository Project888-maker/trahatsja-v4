"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section
      id="newsletter"
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Background texture lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(201,168,76,0.03) 0px, rgba(201,168,76,0.03) 1px, transparent 1px, transparent 80px)",
        }}
      />

      <div className="relative max-w-2xl mx-auto flex flex-col items-center text-center">
        <p
          className="text-xs tracking-[0.4em] uppercase mb-5"
          style={{ color: "#c9a84c", fontFamily: "var(--font-cormorant), serif" }}
        >
          Inner Circle
        </p>
        <h2
          className="text-4xl lg:text-5xl uppercase tracking-[0.12em] text-foreground mb-5"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Join the Intimacy
        </h2>
        <div
          className="mb-6"
          style={{ width: "50px", height: "1px", background: "#c9a84c" }}
        />
        <p
          className="text-base text-foreground/60 leading-relaxed mb-10 max-w-md"
          style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.1rem" }}
        >
          Be the first to receive new arrivals, exclusive member offers, and invitations
          to private events. No noise — only what matters.
        </p>

        {submitted ? (
          <div
            className="flex flex-col items-center gap-3 py-6 px-10"
            style={{ border: "1px solid rgba(201,168,76,0.3)" }}
          >
            <p
              className="text-sm tracking-[0.2em] uppercase"
              style={{ color: "#c9a84c", fontFamily: "var(--font-playfair), serif" }}
            >
              Welcome to the circle
            </p>
            <p
              className="text-sm text-foreground/60"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              You&apos;ll hear from us soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="w-full max-w-md flex flex-col sm:flex-row gap-0"
            aria-label="Newsletter signup"
          >
            <div className="flex-1 relative">
              <label htmlFor="email-input" className="sr-only">
                Email address
              </label>
              <input
                id="email-input"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Your email address"
                className="w-full h-12 px-5 text-sm text-foreground placeholder:text-foreground/30 outline-none transition-all duration-300"
                style={{
                  background: "#111",
                  border: "1px solid #2a2a2a",
                  borderRight: "none",
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "1rem",
                }}
                onFocus={(e) => {
                  (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(201,168,76,0.5)";
                }}
                onBlur={(e) => {
                  (e.currentTarget as HTMLInputElement).style.borderColor = "#2a2a2a";
                }}
                aria-invalid={!!error}
                aria-describedby={error ? "email-error" : undefined}
              />
            </div>
            <button
              type="submit"
              className="h-12 px-6 flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-background transition-all duration-300 hover:opacity-90 flex-shrink-0"
              style={{
                background: "#c9a84c",
                fontFamily: "var(--font-cormorant), serif",
              }}
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>
        )}

        {error && (
          <p
            id="email-error"
            role="alert"
            className="mt-3 text-xs tracking-wide"
            style={{ color: "#e07070", fontFamily: "var(--font-cormorant), serif" }}
          >
            {error}
          </p>
        )}

        <p
          className="mt-6 text-xs text-foreground/30 tracking-wide"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
