"use client";
import { useState } from "react";

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const name    = (form.elements.namedItem("name")    as HTMLInputElement).value;
    const phone   = (form.elements.namedItem("phone")   as HTMLInputElement).value;
    const email   = (form.elements.namedItem("email")   as HTMLInputElement).value;
    const course  = (form.elements.namedItem("course")  as HTMLSelectElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const text = `
🎓 *New Admission Enquiry – CCET Kondotty*

👤 *Name:* ${name}
📞 *Phone:* ${phone}
📧 *Email:* ${email}
📚 *Course:* ${course}
💬 *Message:* ${message || "—"}
    `.trim();

    const adminNumber = "919497588562";
    const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
    setStatus("success");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
        <input name="name" required placeholder="Your full name"
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
        <input name="phone" required type="tel" placeholder="+91 XXXXX XXXXX"
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
        <input name="email" required type="email" placeholder="you@email.com"
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
      </div>

      <div>
  <label
    htmlFor="course"
    className="block text-sm font-medium text-gray-700 mb-1"
  >
    Course Interested In *
  </label>
  <select
    id="course"
    name="course"
    required
    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
  >
    <option value="">Select a course</option>
    <option value="B.Sc Artificial Intelligence">
      B.Sc Artificial Intelligence
    </option>
    <option value="B.Sc Nutrition and Dietetics">
      B.Sc Nutrition and Dietetics
    </option>
    <option value="B.Sc Hotel Management & Catering Science">
      B.Sc Hotel Management & Catering Science
    </option>
  </select>
</div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
        <textarea name="message" rows={3} placeholder="Any specific questions or details..."
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
      </div>

      <button type="submit" className="btn-primary w-full">
        💬 Submit Enquiry via WhatsApp
      </button>

      {status === "success" && (
        <p className="text-green-600 text-sm text-center mt-2">
          ✅ WhatsApp opened! Please press <strong>Send</strong> to complete your enquiry.
        </p>
      )}
    </form>
  );
}