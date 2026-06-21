"use client";
import { useState, useEffect } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Animate from "@/components/ui/Animate";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  const [settings, setSettings] = useState({
    phone1: "+91 9605448905",
    phone2: "+91 9497588562",
    email: "coopcollegekondotty@gmail.com",
    address: "CCET Kondotty, Malappuram District, Kerala – 673638",
    whatsapp: "919497588562",
  });

  useEffect(() => {
    fetch("/api/settings")
      .then(res => res.json())
      .then(data => {
        if (data.phone1) setSettings(data);
      })
      .catch(console.error);
  }, []);

  const contactInfo = [
    {
      icon: <FiMapPin size={22} className="text-primary" />,
      label: "Address",
      value: settings.address,
      href: "https://maps.google.com/?q=Kondotty,Malappuram,Kerala",
    },
    {
      icon: <FiPhone size={22} className="text-primary" />,
      label: "Phone",
      value: `${settings.phone1} / ${settings.phone2}`,
      href: `tel:${settings.phone1}`,
    },
    {
      icon: <FiMail size={22} className="text-primary" />,
      label: "Email",
      value: settings.email,
      href: `mailto:${settings.email}`,
    },
    {
      icon: <FiClock size={22} className="text-primary" />,
      label: "Office Hours",
      value: "Monday – Saturday: 9:00 AM – 5:00 PM",
      href: null,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-primary-dark to-primary text-white section-padding py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <Animate animation="fade-up">
            <span className="inline-block bg-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Get In Touch</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-blue-200 text-lg">We're here to help. Reach out for admissions, course queries, or any other information about CCET Kondotty.</p>
          </Animate>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Contact Details */}
          <Animate animation="slide-left">
            <div>
              <SectionHeading badge="Contact Information" title="Reach Out to Us" center={false} />
              <div className="space-y-5 mb-8">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex gap-4 items-start p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="p-2 bg-blue-50 rounded-lg shrink-0">{c.icon}</div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-0.5">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-gray-700 text-sm hover:text-primary transition-colors">
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-gray-700 text-sm">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social & WhatsApp */}
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">Connect With Us</p>
                <div className="flex gap-3 flex-wrap">
                  
                  <a
                    href={`https://wa.me/${settings.whatsapp}?text=${encodeURIComponent("Hello! I would like to know more about CCET Kondotty.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-100 text-green-700 font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-green-200 transition-colors"
                  >
                    <FaWhatsapp size={18} /> WhatsApp Us
                  </a>
                  
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-100 text-blue-700 font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-blue-200 transition-colors"
                  >
                    <FaFacebook size={18} /> Facebook
                  </a>
                  
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-pink-100 text-pink-700 font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-pink-200 transition-colors"
                  >
                    <FaInstagram size={18} /> Instagram
                  </a>
                </div>
              </div>
            </div>
          </Animate>

          {/* Quick Enquiry Form */}
          <Animate animation="slide-right">
            <div>
              <SectionHeading badge="Quick Enquiry" title="Send Us a Message" center={false} />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                  const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
                  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                  const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
                  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

                  const text = `📩 *Contact Enquiry – CCET*\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n📧 *Email:* ${email}\n📌 *Subject:* ${subject}\n💬 *Message:* ${message}`;
                  window.open(`https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
                  form.reset();
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input name="name" required placeholder="Your full name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input name="phone" required type="tel" placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input name="email" required type="email" placeholder="you@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input name="subject" placeholder="e.g. Admission Enquiry, Course Details"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea name="message" required rows={4} placeholder="Your message here..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full">
                  💬 Send via WhatsApp
                </button>
              </form>
            </div>
          </Animate>
        </div>
      </section>

      {/* Google Map Embed */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <Animate animation="fade-up">
            <SectionHeading badge="Location" title="Find Us on the Map" subtitle="CCET is located in Kondotty, Malappuram district, Kerala — easily accessible by road." />
          </Animate>
          <Animate animation="zoom-in" delay={100}>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.4967!2d76.0011!3d11.1201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64f000000001%3A0x1!2sKondotty%2C%20Malappuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CCET Kondotty Location"
              />
            </div>
          </Animate>
          <Animate animation="fade-up" delay={150}>
            <div className="text-center mt-6">
              <a
                href="https://maps.google.com/?q=Kondotty,Malappuram,Kerala"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                📍 Open in Google Maps
              </a>
            </div>
          </Animate>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="bg-primary text-white section-padding py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <Animate animation="fade-up">
            <h3 className="font-heading text-2xl font-bold mb-3">Ready to Join CCET?</h3>
            <p className="text-blue-200 mb-6">Admissions for 2026–2027 are now open. Apply online or visit us in person.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/admissions" className="btn-primary">Apply Now</a>
              <a href={`tel:${settings.phone2}`} className="btn-outline">📞 Call Us</a>
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
}