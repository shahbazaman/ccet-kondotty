"use client";
import Link from "next/link";
import { FiCheckCircle, FiAlertCircle, FiArrowDown, FiExternalLink } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryForm from "@/components/admissions/InquiryForm";
import Animate from "@/components/ui/Animate";
import { useEffect, useState } from "react";

const MGMT_FORM_LINK = "https://form.svhrt.com/6a16a958682986fcc0d14779";

const steps = [
  {
    step: "01",
    title: "Choose Your Course",
    desc: "Select from B.Sc AI, B.Sc Nutrition & Dietetics, or B.Sc Hotel Management & Catering Science — all under CUFYUGP Regulations 2024.",
  },
  {
    step: "02",
    title: "Apply via University of Calicut Portal",
    desc: "University Merit Seat admissions are conducted through the Centralised Admission Process (CAP). Register online at the official university portal.",
    actionButton: (
      <a
        href="https://admission.uoc.ac.in"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 btn-primary text-sm"
      >
        Go to Admission Portal →
      </a>
    ),
  },
  {
    step: "03",
    title: "Submit Documents",
    desc: (
      <>
        Submit all required documents (
        <a
          href="#documents-required"
          className="text-accent font-semibold underline underline-offset-2 inline-flex items-center gap-1"
        >
          listed below <FiArrowDown className="inline" />
        </a>
        ) at the college office or upload as required.
      </>
    ),
  },
  {
    step: "04",
    title: "Fee Payment & Enrolment",
    desc: "Selected students pay fees as per University of Calicut norms. Management Quota students may apply directly using the form above.",
  },
];

const documents = [
  "SSLC / 10th Standard Certificate & Mark Sheet (Original + Copy)",
  "Plus Two / Equivalent Exam Mark Sheet (Original + Copy)",
  "Transfer Certificate (TC) from previous institution",
  "Conduct Certificate from previous institution",
  "Aadhaar Card (Original + Copy)",
  "4 Recent Passport-Size Photographs (white background)",
  "Community / Caste Certificate (if applicable)",
  "Income Certificate (if applicable for fee concession)",
  "Medical Fitness Certificate (for Nutrition & Hotel Management)",
  "Migration Certificate (only for inter-state students)",
];

const managementQuotaDocs = [
  "Application Form (fill online using the button above)",
  "Copy of Plus Two Certificate",
  "Transfer Certificate",
  "Conduct Certificate",
  "Passport Size Photos",
];

export default function AdmissionsPage() {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    fetch("/api/calendar")
      .then(res => res.json())
      .then(data => setCalendar(data))
      .catch(console.error);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-primary-dark to-primary text-white section-padding py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <Animate animation="fade-up">
            <span className="inline-block bg-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Admissions 2026–2027</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Join CCET Kondotty</h1>
            <p className="text-blue-200 text-lg">Admissions are now open. Limited seats available. Begin your journey towards a rewarding career.</p>
          </Animate>
        </div>
      </section>

      {/* ── MANAGEMENT QUOTA HIGHLIGHT ── */}
      <section className="bg-gradient-to-r from-[#8B0000] to-[#c0392b] text-white py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Animate animation="fade-up">
            <span className="inline-block bg-yellow-400 text-[#8B0000] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              🔥 Priority — Limited Seats
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              Management Quota Admissions Open!
            </h2>
            <p className="text-red-100 text-lg mb-6 max-w-2xl mx-auto">
              Apply directly for a Management Seat in B.Sc AI, Nutrition & Dietetics, or Hotel Management. Fill the official online application form now — seats fill up fast!
            </p>
            <a
              href={MGMT_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-400 text-[#8B0000] font-black text-base px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors shadow-lg"
            >
              <FiExternalLink size={20} />
              FOUR YEAR UG PROGRAMME (FYUGP) — Apply for Management Seat
            </a>
            <p className="text-red-200 text-xs mt-4">
              Form link: form.svhrt.com · Direct online application · No college visit required to apply
            </p>
          </Animate>
        </div>
      </section>

      {/* Admission Type Cards */}
      <section className="bg-white section-padding py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <Animate animation="slide-left">
            <div className="border-l-4 border-accent bg-orange-50 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-accent text-lg mb-2">🏢 Management Quota</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">Apply directly to CCET. Limited seats. Fill the online form — selection based on eligibility and interview. Fast and simple process.</p>
              <a
                href={MGMT_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#8B0000] text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-red-900 transition-colors"
              >
                <FiExternalLink size={14} /> Apply Online Now
              </a>
            </div>
          </Animate>
          <Animate animation="slide-right">
            <div className="border-l-4 border-primary bg-blue-50 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-primary text-lg mb-2">🎓 University Merit Seat</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Admissions conducted through the Centralised Admission Process (CAP) of the University of Calicut. Register at <strong>www.uoc.ac.in</strong>. Selection based on merit as per university norms.</p>
            </div>
          </Animate>
        </div>
      </section>

      {/* Admission Process */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-5xl mx-auto">
          <Animate animation="fade-up">
            <SectionHeading badge="How to Apply" title="Admission Process" subtitle="A simple, transparent 4-step process to secure your seat at CCET." />
          </Animate>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <Animate key={s.step} animation="fade-up" delay={i * 80}>
                <div className="flex gap-6 items-start p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-4xl font-heading font-bold text-accent/30 shrink-0">{s.step}</span>
                  <div>
                    <h4 className="font-heading font-bold text-primary text-lg mb-1">{s.title}</h4>
                    <p className="text-gray-500 text-sm">{s.desc}</p>
                    {s.actionButton && s.actionButton}
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Courses */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <Animate animation="fade-up">
            <SectionHeading badge="Eligibility" title="Course-wise Eligibility Criteria" subtitle="All programmes follow CUFYUGP Regulations 2024, University of Calicut." />
          </Animate>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "B.Sc Artificial Intelligence",
                color: "border-blue-400",
                eligibility: "Plus Two (Science) with Mathematics / Computer Science. OR Plus Two (Commerce/Humanities) with any Computer Course.",
                duration: "4 Years (8 Semesters) — FYUGP",
                icon: "🤖",
                career: "AI Engineer, Data Scientist, ML Developer, Software Analyst",
              },
              {
                title: "B.Sc Home Science – Nutrition & Dietetics",
                color: "border-green-400",
                eligibility: "B.Sc Degree with Home Science / Nutrition & Dietetics / related degree. Minimum 50% aggregate. OBC/OEC: 5% relaxation. SC/ST: pass only.",
                duration: "4 Years (8 Semesters) — FYUGP",
                icon: "🥗",
                career: "Dietitian, Clinical Nutritionist, Public Health Nutritionist, Food Analyst",
              },
              {
                title: "B.Sc Hotel Management & Catering Science Honours",
                color: "border-amber-400",
                eligibility: "Plus Two (any stream) with minimum 50%. OBC/OEC: 5% relaxation. SC/ST: pass only.",
                duration: "4 Years (8 Semesters) — FYUGP",
                icon: "🏨",
                career: "Hotel Manager, Chef, Food & Beverage Manager, Hospitality Consultant",
              },
            ].map((c, i) => (
              <Animate key={c.title} animation="zoom-in" delay={i * 120}>
                <div className={`card border-t-4 ${c.color} p-7 h-full`}>
                  <div className="text-4xl mb-3">{c.icon}</div>
                  <h4 className="font-heading font-bold text-primary mb-3">{c.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3"><strong>Eligibility:</strong> {c.eligibility}</p>
                  <p className="text-xs text-gray-400 mb-2"><strong>Duration:</strong> {c.duration}</p>
                  <p className="text-xs text-gray-500"><strong>Careers:</strong> {c.career}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-5xl mx-auto">
          <Animate animation="fade-up">
            <SectionHeading badge="Academic Calendar" title="2026–2027 Key Dates" subtitle="Important academic events for the upcoming year (subject to University of Calicut notifications)." />
          </Animate>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {calendar.length > 0 ? calendar.map((item: any, i: number) => (
              <Animate key={item._id} animation="fade-up" delay={i * 60}>
                <div className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
                  <p className="text-accent font-bold text-xs mb-1">{item.month}</p>
                  <p className="text-gray-700 text-xs leading-snug">{item.event}</p>
                </div>
              </Animate>
            )) : (
              <p className="text-gray-400 col-span-4 text-center py-8">Loading calendar...</p>
            )}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section id="documents-required" className="bg-white section-padding scroll-mt-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Animate animation="slide-left">
              <div>
                <SectionHeading badge="Documents" title="Documents Required" center={false} />
                <p className="text-sm font-semibold text-primary mb-3">For University Merit Seat (CAP):</p>
                <ul className="space-y-3 mb-6">
                  {documents.map(d => (
                    <li key={d} className="flex items-start gap-3 text-sm text-gray-700">
                      <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" /> {d}
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-[#8B0000] mb-3">For Management Quota (Direct):</p>
                <ul className="space-y-2 mb-4">
                  {managementQuotaDocs.map(d => (
                    <li key={d} className="flex items-start gap-3 text-sm text-gray-700">
                      <FiCheckCircle className="text-orange-400 mt-0.5 shrink-0" /> {d}
                    </li>
                  ))}
                </ul>
                <a
                  href={MGMT_FORM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#8B0000] text-white font-bold text-sm px-5 py-3 rounded-xl hover:bg-red-900 transition-colors mb-4"
                >
                  <FiExternalLink size={14} /> Fill Management Quota Form Online
                </a>
                <div className="mt-2 p-4 bg-amber-50 border border-amber-200 rounded-xl flex gap-3">
                  <FiAlertCircle className="text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-700">Please bring both originals and self-attested photocopies of all documents at the time of submission. Incomplete applications will not be processed.</p>
                </div>
              </div>
            </Animate>
          </div>
          <Animate animation="slide-right">
            <div>
              <SectionHeading badge="Quick Inquiry" title="Admission Enquiry Form" center={false} />
              <InquiryForm />
            </div>
          </Animate>
        </div>
      </section>

      {/* Contact for Admissions */}
      <section className="bg-primary text-white section-padding py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <Animate animation="fade-up">
            <h3 className="font-heading text-2xl font-bold mb-3">Need Help with Admissions?</h3>
            <p className="text-blue-200 mb-6">Our admissions team is available Monday to Saturday, 9 AM – 5 PM. Reach out for any queries regarding courses, eligibility, or the application process.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919605448905" className="btn-primary">📞 Call Admissions</a>
              <a href="mailto:coopcollegekondotty@gmail.com" className="btn-outline">✉️ Email Us</a>
              <a
                href={`https://wa.me/919497588562?text=${encodeURIComponent("Hello, I need information about admissions at CCET Kondotty.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
}
