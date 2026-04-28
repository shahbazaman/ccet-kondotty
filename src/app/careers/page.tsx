"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { FiMapPin, FiBriefcase, FiClock, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import Animate from "@/components/ui/Animate";

type Job = {
  _id: string;
  title: string;
  department: string;
  type: string; // Full-time, Part-time, Contract
  location: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  qualifications: string;
  experience: string;
  salary: string;
  deadline: string;
  isActive: boolean;
  postedDate: string;
};

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  // Fetch jobs from API
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      setJobs(data.filter((job: Job) => job.isActive));
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-primary-dark to-primary text-white section-padding py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <Animate animation="fade-up">
            <span className="inline-block bg-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Join Our Team
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Careers at CCET</h1>
            <p className="text-blue-200 text-lg">
              Be part of a cooperative institution shaping the future of education in AI, Nutrition & Dietetics, and Hospitality.
            </p>
          </Animate>
        </div>
      </section>

      {/* Why Join CCET */}
      <section className="bg-white section-padding">
        <div className="max-w-5xl mx-auto">
          <Animate animation="fade-up">
            <SectionHeading badge="Why CCET?" title="Why Work With Us?" />
          </Animate>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎓", title: "Academic Excellence", desc: "Work in a UGC-recognized institution affiliated to University of Calicut" },
              { icon: "🤝", title: "Cooperative Culture", desc: "Democratic, transparent governance under Kondotty Cooperative Society" },
              { icon: "💡", title: "Innovation Focus", desc: "CUFYUGP curriculum with modern AI, nutrition, and hospitality programmes" },
              { icon: "🌱", title: "Growth Opportunities", desc: "Professional development and career advancement in a growing institution" },
            ].map((item, i) => (
              <Animate key={item.title} animation="fade-up" delay={i * 80}>
                <div className="text-center p-6 rounded-xl border border-gray-100 bg-gray-50">
                  <span className="text-4xl block mb-3">{item.icon}</span>
                  <h3 className="font-heading font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-6xl mx-auto">
          <Animate animation="fade-up">
            <SectionHeading
              badge="Open Positions"
              title="Current Job Openings"
              subtitle={jobs.length > 0 ? `${jobs.length} position(s) available` : "No openings at the moment"}
            />
          </Animate>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-500 mt-4">Loading positions...</p>
            </div>
          ) : jobs.length === 0 ? (
            <Animate animation="fade-up">
              <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiBriefcase size={40} className="text-gray-400" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-700 mb-2">No Openings Currently</h3>
                <p className="text-gray-500 mb-6">
                  We don't have any open positions right now, but we're always looking for talented individuals. Send us your CV and we'll keep you in mind for future opportunities.
                </p>
                <a
                href={`https://wa.me/919497588562?text=${encodeURIComponent(
                    "Hello! I'm interested in career opportunities at CCET Kondotty. Please find my CV attached."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
                >
                <FaWhatsapp size={18} /> Send CV via WhatsApp
                </a>
              </div>
            </Animate>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {jobs.map((job, i) => (
                <Animate key={job._id} animation="fade-up" delay={i * 80}>
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-primary mb-1">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <FiBriefcase size={14} /> {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <FiClock size={14} /> {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <FiMapPin size={14} /> {job.location}
                          </span>
                        </div>
                      </div>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full shrink-0">
                        OPEN
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{job.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                            {job.qualifications}
                        </span>
                        <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">
                            {job.experience}
                        </span>
                        {job.salary && (
                            <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">
                            {job.salary}
                            </span>
                        )}
                        </div>

                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => handleApplyClick(job)}
                        className="btn-primary text-sm px-6"
                      >
                        Apply Now
                      </button>
                      <button
                        onClick={() => setSelectedJob(selectedJob?._id === job._id ? null : job)}
                        className="px-6 py-2 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-colors text-sm"
                      >
                        {selectedJob?._id === job._id ? "Hide Details" : "View Details"}
                      </button>
                    </div>

                    {/* Job Details Accordion */}
                    {selectedJob?._id === job._id && (
                      <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Key Responsibilities:</h4>
                          <ul className="space-y-1">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex gap-2 text-sm text-gray-600">
                                <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" size={16} />
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Requirements:</h4>
                          <ul className="space-y-1">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex gap-2 text-sm text-gray-600">
                                <FiCheckCircle className="text-blue-500 mt-0.5 shrink-0" size={16} />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {job.deadline && (
                          <p className="text-sm text-red-600 font-medium">
                            Application Deadline: {new Date(job.deadline).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </Animate>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <ApplicationFormModal
          job={selectedJob}
          onClose={() => {
            setShowApplicationForm(false);
            setSelectedJob(null);
          }}
        />
      )}

      {/* Contact CTA */}
      <section className="bg-primary text-white section-padding py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <Animate animation="fade-up">
            <h3 className="font-heading text-2xl font-bold mb-3">Don't See a Perfect Fit?</h3>
            <p className="text-blue-200 mb-6">
              Send us your CV anyway. We're always interested in talented individuals who share our vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <a
                href={`https://wa.me/919497588562?text=${encodeURIComponent("Hello! I'm interested in career opportunities at CCET Kondotty.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 justify-center"
              >
                <FaWhatsapp size={18} /> WhatsApp Us
              </a>
              <a href="mailto:coopcollegekondotty@gmail.com" className="btn-outline">
                📧 Email Us
              </a>
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
}

// Application Form Modal Component
function ApplicationFormModal({ job, onClose }: { job: Job; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    experience: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const applicationText = `
🎓 *Job Application - CCET Kondotty*

*Position:* ${job.title}
*Department:* ${job.department}

👤 *Applicant Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Qualification: ${formData.qualification}
Experience: ${formData.experience}

💬 *Cover Message:*
${formData.message}

_Note: Please send your CV as a separate document to this number._
    `.trim();

    const whatsappURL = `https://wa.me/919497588562?text=${encodeURIComponent(applicationText)}`;

    // Show reminder toast
    toast.info("📎 Please send your CV document separately via WhatsApp after clicking OK!", {
      position: "top-center",
      autoClose: 5000,
    });

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      toast.success("Application details sent! Don't forget to attach your CV.", {
        position: "top-center",
      });
      setSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full my-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          ✕
        </button>

        <div className="p-8">
          <h2 className="font-heading text-2xl font-bold text-primary mb-2">Apply for {job.title}</h2>
          <p className="text-gray-600 text-sm mb-6">Fill in your details below. You'll be redirected to WhatsApp to complete your application.</p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex gap-3">
            <span className="text-2xl">📎</span>
            <div className="text-sm">
              <p className="font-semibold text-amber-900 mb-1">Important: CV Submission</p>
              <p className="text-amber-800">
                After submitting this form, you'll be redirected to WhatsApp. <strong>Please attach your CV document</strong> separately in the chat.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="you@email.com"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Highest Qualification *</label>
                <input
                  type="text"
                  required
                  value={formData.qualification}
                  onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="e.g., M.Sc, PhD, B.Tech"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience *</label>
                <input
                  type="text"
                  required
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="e.g., 5 years"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cover Message *</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                placeholder="Tell us why you're a great fit for this position..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full btn-primary py-3 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {submitting ? (
                "Submitting..."
              ) : (
                <>
                  <FaWhatsapp size={18} /> Submit Application via WhatsApp
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}