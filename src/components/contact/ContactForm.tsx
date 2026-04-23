"use client";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "contact" }),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const inputClass = "w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Full Name *" required className={inputClass} />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Mobile Number" className={inputClass} />
      </div>
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address *" required type="email" className={inputClass} />
      <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject *" required className={inputClass} />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message..." rows={5} required className={inputClass} />
      <button type="submit" disabled={status === "loading"} className="btn-primary w-full flex items-center justify-center gap-2">
        {status === "loading" ? "Sending..." : (
          <span className="flex items-center justify-center gap-2">
            <FiSend size={16} /> Send Message
          </span>
        )}
      </button>
      {status === "success" && <p className="text-green-600 text-sm text-center">✓ Message sent! We will get back to you within 24 hours.</p>}
      {status === "error" && <p className="text-red-500 text-sm text-center">Something went wrong. Please email us directly.</p>}
    </form>
  );
}