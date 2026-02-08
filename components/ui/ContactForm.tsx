"use client";

import { useState } from "react";
import { Button } from "./Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      budget: (form.elements.namedItem("budget") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Something went wrong.");
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to send. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-surface border border-border rounded-2xl p-8 md:p-12 text-center animate-scale-in">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-text-primary mb-2">Thanks for reaching out!</h3>
        <p className="text-text-secondary">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-2xl p-6 md:p-8 space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 bg-background border border-border rounded-xl text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-background border border-border rounded-xl text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary transition-colors"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-4 py-3 bg-background border border-border rounded-xl text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary transition-colors"
          placeholder="Your company"
        />
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-text-primary mb-2">
          Monthly Budget Range
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full px-4 py-3 bg-background border border-border rounded-xl text-text-primary focus:outline-none focus:border-primary transition-colors"
        >
          <option value="">Select a range</option>
          <option value="$2,000 – $5,000">$2,000 – $5,000</option>
          <option value="$5,000 – $10,000">$5,000 – $10,000</option>
          <option value="$10,000 – $25,000">$10,000 – $25,000</option>
          <option value="$25,000+">$25,000+</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-3 bg-background border border-border rounded-xl text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="Tell us about your goals..."
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full">
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
