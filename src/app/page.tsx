"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Animate from "@/components/ui/Animate";

/* ── Typed Interfaces for State ── */
interface NewsItem {
  _id: string;
  date: string;
  title: string;
  desc: string;
}

interface ClubItem {
  _id: string;
  icon: string;
  name: string;
}

/* ── Animated counter ── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = Math.ceil(target / 60);
      const timer = setInterval(() => {
        start += step;
        if (start >= target) { setCount(target); clearInterval(timer); }
        else setCount(start);
      }, 25);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const courses = [
  { title: "B.Sc Artificial Intelligence", icon: "🤖", color: "border-blue-400 hover:bg-blue-50", tag: "bg-blue-100 text-blue-800", href: "/courses/artificial-intelligence", desc: "Machine Learning, Deep Learning, NLP, Computer Vision & more." },
  { title: "B.Sc Nutrition & Dietetics", icon: "🥗", color: "border-green-400 hover:bg-green-50", tag: "bg-green-100 text-green-800", href: "/courses/nutrition-dietetics", desc: "Clinical Nutrition, Dietetics, Food Science & Community Health." },
  { title: "B.Sc Hotel Management & Catering Science", icon: "🏨", color: "border-amber-400 hover:bg-amber-50", tag: "bg-amber-100 text-amber-800", href: "/courses/hotel-management", desc: "Food Production, F&B Service, Front Office & Hospitality Mgmt." },
];

// const news = [
//   { date: "April 2026", title: "Admissions Open for 2026–2027 Academic Year", desc: "Apply now for all three B.Sc FYUGP programmes at CCET Kondotty." },
//   { date: "March 2026", title: "New AI Lab Inaugurated at CCET", desc: "State-of-the-art Artificial Intelligence laboratory opened for student use." },
//   { date: "February 2026", title: "MoU Signed with Leading Hospitals", desc: "CCET signs MoUs with healthcare partners for Nutrition student internships." },
//   { date: "January 2026", title: "CCET Futura — Annual Tech & Cultural Fest", desc: "Students showcased innovations, culinary arts, and research at CCET Futura 2026." },
// ];

const partners = [
  "Healthcare Partner 1", "Hospital Partner 2", "Industry MoU Partner 3",
  "Hospitality Group 4", "Food Company 5", "Tech Company 6",
  "Research Partner 7", "Placement Partner 8",
];

// const clubs = [
//   { icon: "🤖", name: "AI & Coding Club" },
//   { icon: "🥗", name: "Nutrition & Wellness Club" },
//   { icon: "🍳", name: "Culinary Arts Club" },
//   { icon: "📚", name: "Literary Forum" },
//   { icon: "🌿", name: "Eco & Nature Club" },
//   { icon: "🎭", name: "Cultural & Arts Forum" },
// ];

const facilities = [
  { icon: "🖥️", title: "AI & Computer Lab", desc: "Modern workstations with GPU-enabled systems for AI/ML training." },
  { icon: "🧪", title: "Food Science Lab", desc: "Fully equipped laboratory for nutrition and food analysis." },
  { icon: "🍳", title: "Kitchen & Catering Lab", desc: "Professional kitchen with industry-grade equipment for culinary training." },
  { icon: "📚", title: "Library & Reading Room", desc: "Comprehensive collection of academic and reference materials." },
  { icon: "🎓", title: "Seminar Hall", desc: "Modern hall for seminars, guest lectures, and events." },
  { icon: "🌿", title: "Hygienic Campus", desc: "Clean, safe and student-friendly campus environment in Kondotty." },
];

export default function HomePage() {
  /* Added proper TypeScript types here to prevent never[] errors */
  const [news, setNews] = useState<NewsItem[]>([]);
  const [clubs, setClubs] = useState<ClubItem[]>([]);

  useEffect(() => {
    // Fetch news
    fetch("/api/news")
      .then(res => res.json())
      .then(data => setNews(data.slice(0, 4))) // Show latest 4
      .catch(console.error);

    // Fetch clubs
    fetch("/api/clubs")
      .then(res => res.json())
      .then(data => setClubs(data))
      .catch(console.error);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-linear-to-br from-primary-dark to-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,white,transparent_60%)]" />
        <div className="max-w-7xl mx-auto section-padding py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <Animate animation="slide-left" className="lg:col-span-5">
            <div>
              <span className="inline-block bg-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                Admissions Open 2026–2027
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Shape Your Future at <span className="text-accent">CCET</span> Kondotty
              </h1>
              <p className="text-blue-200 text-lg leading-relaxed mb-8">
                Co-Operative College of Education & Technology — offering industry-aligned B.Sc Four Year Under Graduate Programme (FYUGP) programmes in Artificial Intelligence, Nutrition & Dietetics, and Hotel Management under University of Calicut.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/admissions" className="btn-primary text-base px-7 py-3">Apply Now →</Link>
                <Link href="/courses" className="btn-outline text-base px-7 py-3">Explore Courses</Link>
              </div>
            </div>
          </Animate>
          {/* <Animate animation="slide-right">
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20 max-w-sm w-full">
                <Image src="/logo.png" alt="CCET Logo" width={160} height={160} className="mx-auto mb-5" loading="eager" style={{ height: "auto" }} />
                <h2 className="font-heading text-xl font-bold mb-1">CCET Kondotty</h2>
                <p className="text-blue-200 text-sm mb-4">Co-operation · Innovation · Knowledge</p>
                <p className="text-xs text-blue-300">Affiliated to University of Calicut</p>
                <p className="text-xs text-blue-300">Reg. No. M 497 · CUFYUGP 2024</p>
              </div>
            </div>
          </Animate> */}
          <Animate animation="slide-right" className="w-full h-full lg:col-span-7">
            <div className="flex justify-center lg:justify-end w-full h-full">
              {/* Changed container sizing to a structural 4:5 aspect ratio framework while ensuring full layout width matching */}
              <div className="relative rounded-3xl overflow-hidden border-0 border-white/20 shadow-none w-full aspect-[4/5] lg:max-w-3xl">
                <img
                  src="/college-building.jpg"
                  alt="CCET Kondotty Campus"
                  className="w-full h-full object-fill transform hover:scale-103 transition-transform duration-700 ease-out"
                />
                {/* <div className="absolute bottom-0 left-0 right-0 px-6 py-6 z-10">
                  <p className="text-white font-heading font-bold text-lg md:text-xl">CCET Kondotty Campus</p>
                  <p className="text-blue-200 text-xs md:text-sm mt-0.5">Kondotty, Malappuram, Kerala</p>
                </div> */}
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* ── Stats Counter ── */}
      <section className="bg-accent text-white py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-6">
          {[
            { label: "Years of Excellence", target: 30, suffix: "+", text: null },
            { label: "Programmes Offered", target: 3, suffix: "", text: null },
            { label: "University Affiliated", target: 0, suffix: "", text: "Calicut" },
            { label: "Expert Faculties", target: 6, suffix: "+", text: null },
          ].map((s, i) => (
            <Animate key={s.label} animation="zoom-in" delay={i * 100}>
              <div>
                <p className="font-heading text-4xl font-bold">
                  {s.text ? s.text : <Counter target={s.target} suffix={s.suffix} />}
                </p>
                <p className="text-white/80 text-sm mt-1">{s.label}</p>
              </div>
            </Animate>
          ))}
        </div>
      </section>

      {/* ── Admission Alert Banner ── */}

      {/* ── Courses ── */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <Animate animation="fade-up">
            <div className="text-center mb-10">
              <span className="inline-block bg-accent/10 text-accent font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">Our Programmes</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">3 Industry-Ready B.Sc Programmes</h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">All programmes follow CUFYUGP Regulations 2024 — 4-year Honours degrees affiliated to University of Calicut.</p>
            </div>
          </Animate>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((c, i) => (
              <Animate key={c.title} animation="fade-up" delay={i * 120}>
                <Link href={c.href} className={`card border-t-4 ${c.color} p-7 block group transition-all hover:shadow-xl`}>
                  <div className="text-4xl mb-4">{c.icon}</div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.tag} mb-3 inline-block`}>4-Year FYUGP</span>
                  <h3 className="font-heading font-bold text-primary text-lg mb-2 group-hover:text-accent transition-colors">{c.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{c.desc}</p>
                  <span className="text-accent text-sm font-semibold flex items-center gap-1">Learn More <FiArrowRight /></span>
                </Link>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ── Principal's Message ── */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-5xl mx-auto">
          <Animate animation="fade-up">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0 flex flex-col items-center gap-2">
                <div className="w-24 h-24 rounded-full bg-primary/10 overflow-hidden border-2 border-primary/20">
                  <img
                    src="/faculty/principal.png"
                    alt="Principal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-heading font-bold text-primary text-sm text-center">Principal</p>
                <p className="text-gray-400 text-xs text-center">CCET Kondotty</p>
              </div>
              <div>
                <span className="inline-block bg-accent/10 text-accent font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">Principal's Message</span>
                <p className="text-gray-700 italic text-lg leading-relaxed mb-3">
                  "Education is not merely the acquisition of knowledge but the development of character, discipline, and responsibility."
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Welcome to CCET Kondotty. Our courses are designed under CUFYUGP Regulations 2024 to provide both theoretical knowledge and practical training — making our graduates capable professionals ready for tomorrow's industry. I invite every student to make full use of the opportunities here and grow with purpose.
                </p>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* ── Facilities ── */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <Animate animation="fade-up">
            <div className="text-center mb-10">
              <span className="inline-block bg-accent/10 text-accent font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">Campus</span>
              <h2 className="font-heading text-3xl font-bold text-primary">World-Class Facilities</h2>
              <p className="text-gray-500 mt-3">Modern infrastructure designed to support quality learning and practical training.</p>
            </div>
          </Animate>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => (
              <Animate key={f.title} animation="fade-up" delay={i * 80}>
                <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-md transition-shadow">
                  <span className="text-3xl block mb-3">{f.icon}</span>
                  <h4 className="font-heading font-bold text-primary mb-1">{f.title}</h4>
                  <p className="text-gray-500 text-sm">{f.desc}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ── News & Events ── */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <Animate animation="fade-up">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="inline-block bg-accent/10 text-accent font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-2">Updates</span>
                <h2 className="font-heading text-3xl font-bold text-primary">Latest News & Events</h2>
              </div>
              <Link href="/news" className="text-accent text-sm font-semibold hidden md:flex items-center gap-1 hover:underline">View All <FiArrowRight /></Link>
            </div>
          </Animate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {news.length > 0 ? news.map((n, i) => (
              <Animate key={n._id} animation="fade-up" delay={i * 80}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <span className="text-xs text-accent font-bold uppercase tracking-wide mb-2 block">{n.date}</span>
                  <h4 className="font-heading font-bold text-primary mb-2">{n.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{n.desc}</p>
                </div>
              </Animate>
            )) : (
              <p className="text-gray-400 col-span-2 text-center py-8">Loading news...</p>
            )}
          </div>
          <div className="flex justify-center mt-6 md:hidden">
            <Link href="/news" className="text-accent text-sm font-semibold flex items-center gap-1 hover:underline">View All News <FiArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* Student Clubs */}
      <section className="bg-white section-padding">
        <div className="max-w-5xl mx-auto">
          <Animate animation="fade-up">
            <div className="text-center mb-10">
              <span className="inline-block bg-accent/10 text-accent font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">Student Life</span>
              <h2 className="font-heading text-3xl font-bold text-primary">Clubs & Forums</h2>
              <p className="text-gray-500 mt-3">Life at CCET goes beyond classrooms — join communities that match your passions.</p>
            </div>
          </Animate>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {clubs.length > 0 ? clubs.map((c, i) => (
              <Animate key={c._id} animation="zoom-in" delay={i * 80}>
                <div className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-gray-100 bg-gray-50 text-center hover:shadow-md transition-shadow">
                  <span className="text-3xl">{c.icon}</span>
                  <p className="text-xs font-medium text-gray-700 leading-snug">{c.name}</p>
                </div>
              </Animate>
            )) : (
              <p className="text-gray-400 col-span-6 text-center py-8">Loading clubs...</p>
            )}
          </div>
        </div>
      </section>

      {/* ── Placement Partners Marquee ── */}
      <section className="bg-gray-50 section-padding py-10">
        <div className="max-w-7xl mx-auto">
          <Animate animation="fade-up">
            <div className="text-center mb-8">
              <span className="inline-block bg-accent/10 text-accent font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">Placement & Internship</span>
              <h2 className="font-heading text-2xl font-bold text-primary">Our Industry Partners</h2>
            </div>
          </Animate>
          <div className="overflow-hidden relative">
            <div className="flex gap-8 animate-marquee whitespace-nowrap">
              {[...partners, ...partners].map((p, i) => (
                <div key={i} className="inline-flex items-center justify-center px-8 py-4 bg-white rounded-xl border border-gray-100 shadow-sm min-w-45 shrink-0">
                  <span className="text-sm font-medium text-gray-600">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Strip ── */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-6">
          {[
            { icon: <FiPhone />, label: "Call Us", value: "+91 9497588562", href: "tel:+919497588562" },
            { icon: <FiMail />, label: "Email Us", value: "coopcollegekondotty@gmail.com", href: "mailto:coopcollegekondotty@gmail.com" },
            { icon: <FiMapPin />, label: "Visit Us", value: "Kondotty, Malappuram, Kerala", href: "/contact" },
          ].map((c, i) => (
            <Animate key={c.label} animation="fade-up" delay={i * 100}>
              <a href={c.href} className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">{c.icon}</div>
                <p className="text-blue-200 text-xs uppercase tracking-wide">{c.label}</p>
                <p className="text-white text-sm font-medium">{c.value}</p>
              </a>
            </Animate>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-accent text-white section-padding py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <Animate animation="fade-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-white/80 text-lg mb-8">Join CCET Kondotty and become part of a cooperative education tradition that has been building careers since 1995.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/admissions" className="bg-white text-accent font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">Apply for Admission</Link>
              <Link href="/about" className="border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors">Learn About CCET</Link>
            </div>
          </Animate>
        </div>
      </section>

      <a
        href={`https://wa.me/919497588562?text=${encodeURIComponent("Hello! I would like to know more about admissions at CCET Kondotty.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-4 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </>
  );
}