"use client";
import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";
import { FaUniversity, FaHandshake, FaLeaf, FaLightbulb, FaUserTie, FaUsers, FaFlask } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import Animate from "@/components/ui/Animate";
import { useEffect,useState } from "react";

const values = [
  { icon: <FaHandshake size={28} className="text-primary" />, title: "Co-operation", desc: "Every member of our community works together — students, faculty, staff, and management — towards a shared vision of excellence." },
  { icon: <FaLightbulb size={28} className="text-primary" />, title: "Innovation", desc: "We encourage curiosity, creativity and the courage to think differently. Our curriculum evolves with the industry." },
  { icon: <FaUniversity size={28} className="text-primary" />, title: "Knowledge", desc: "Academic rigor combined with practical learning creates graduates who are both knowledgeable and job-ready." },
  { icon: <FaLeaf size={28} className="text-primary" />, title: "Sustainability", desc: "From cooperative governance to environmentally conscious campus practices, we believe in responsible growth." },
];

// const milestones = [
//   { year: "1995", event: "CCET established under Kondotty Cooperative Educational Society Ltd. (Reg. No. M 497)." },
//   { year: "1995", event: "Started with Arts & Science Courses, serving students from the Malabar region." },
//   {
//     year: "2026",
//     bullets: [
//       "B.Sc Nutrition and Dietetics programme launched under CUFYUGP Regulations 2024.",
//       "B.Sc Artificial Intelligence introduced, reflecting global tech demand.",
//       "B.Sc Hotel Management & Catering Science expanded with modern kitchen and training labs.",
//       "New AI lab and Food Science lab inaugurated; MoUs signed with leading hospitals and industry partners.",
//       "Admissions open for the 2026–2027 academic year across all three FYUGP programmes.",
//     ],
//   },
// ];

const stats = [
  { label: "Years of Excellence", value: "30+" },
  { label: "Programmes Offered", value: "3" },
  { label: "Affiliated University", value: "Calicut" },
  { label: "Students Enrolled", value: "200+" },
];

const governingBody = [
  { role: "President", name: "VK SREEDHARAN", icon: <FaUserTie size={22} className="text-primary" /> },
  { role: "Secretry", name: "ABOOBACKER PAMBODAN", icon: <FaUserTie size={22} className="text-primary" /> },
  { role: "Principal", name: "Dr. SUDHEERAN CHEERAKKODA", icon: <FaUserTie size={22} className="text-primary" /> },
  { role: "Faculty Members", name: "Qualified Academicians & Industry Practitioners", icon: <FaUsers size={22} className="text-primary" /> },
  { role: "Lab Coordinators", name: "AI Lab, Food Science Lab, Kitchen Lab", icon: <FaFlask size={22} className="text-primary" /> },
];

export default function AboutPage() {
  const [milestones, setMilestones] = useState([
    { _id: "1", year: "1995", event: "CCET established under Kondotty Cooperative Educational Society Ltd. (Reg. No. M 497)." },
    { _id: "2", year: "1995", event: "Started with Arts & Science Courses, serving students from the Malabar region." },
    { _id: "3", year: "2024", event: "Affiliation renewed with University of Calicut under CUFYUGP Regulations 2024." },
    { _id: "4", year: "2026", event: "B.Sc AI, Nutrition & Dietetics, and Hotel Management launched. New AI lab and Food Science lab inaugurated." },
    { _id: "5", year: "2026", event: "MoUs signed with leading hospitals and industry partners. Admissions open for 2026–2027." },
  ]);

  useEffect(() => {
    fetch("/api/milestones")
      .then(res => res.json())
      .then(data => { if (Array.isArray(data) && data.length > 0) setMilestones(data); })
      .catch(console.error);
  }, []);
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-primary-dark to-primary text-white section-padding py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <Animate animation="fade-up">
            <span className="inline-block bg-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">About CCET</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Story, Our Mission</h1>
            <p className="text-blue-200 text-lg">Grounded in cooperative values, driven by educational excellence — CCET Kondotty has been shaping futures since 1995.</p>
          </Animate>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-accent text-white py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-6">
          {stats.map((s, i) => (
            <Animate key={s.label} animation="zoom-in" delay={i * 100}>
              <div>
                <p className="font-heading text-3xl font-bold">{s.value}</p>
                <p className="text-white/80 text-sm mt-1">{s.label}</p>
              </div>
            </Animate>
          ))}
        </div>
      </section>

      {/* About Overview */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <Animate animation="slide-left">
            <div>
              <span className="inline-block bg-accent/10 text-accent font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Who We Are</span>
              <h2 className="font-heading text-3xl font-bold text-primary mb-5">Co-Operative College of Education and Technology</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Co-Operative College of Education and Technology (CCET), located in Kondotty, Malappuram, Kerala, is a premier institution functioning under the Kondotty Cooperative Educational Society Ltd. (Reg. No. M 497). Affiliated to the University of Calicut, CCET offers undergraduate programmes that merge academic rigour with practical skill development.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                CCET was established with a clear vision: to make quality professional education accessible to students from all backgrounds in the Malabar region and beyond. The cooperative model ensures that the institution remains democratic, transparent and community-driven — placing students at the heart of every decision.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With three vibrant B.Sc FYUGP programmes — Artificial Intelligence, Nutrition & Dietetics, and Hotel Management & Catering Science — CCET prepares graduates for the industries of tomorrow, guided by a faculty of accomplished academics and seasoned industry practitioners.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "University of Calicut Affiliated",
                  "UGC Recognised Degrees",
                  "CUFYUGP 2024 Curriculum",
                  "Cooperative Governance Model",
                  "Modern Labs & Facilities",
                  "Dedicated Placement Cell",
                  "Student-First Environment",
                  "Industry MoUs Signed",
                ].map(f => (
                  <div key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" /> {f}
                  </div>
                ))}
              </div>
            </div>
          </Animate>
          <Animate animation="slide-right">
            <div className="flex justify-center">
              <div className="bg-linear-to-br from-primary to-primary-light rounded-3xl p-10 text-white text-center shadow-2xl max-w-sm w-full">
                <Image src="/logo.png" alt="CCET Logo" width={200} height={200} className="mx-auto mb-6" loading="eager" style={{ height: "auto" }}/>
                <h3 className="font-heading text-xl font-bold mb-1">CCET Kondotty</h3>
                <p className="text-blue-200 text-sm mb-4">Co-operation · Innovation · Knowledge</p>
                <div className="text-xs text-blue-300 space-y-1">
                  <p>Under: Kondotty Cooperative Educational Society Ltd.</p>
                  <p>Reg. No. M 497</p>
                  <p>Affiliated: University of Calicut</p>
                  <p>CUFYUGP Regulations 2024</p>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-5xl mx-auto">
          <Animate animation="fade-up">
            <SectionHeading badge="Principal's Message" title="A Word from the Principal" />
          </Animate>
          <Animate animation="fade-up" delay={100}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0 flex flex-col items-center gap-2">
                <div className="w-24 h-24 rounded-full bg-primary/10 overflow-hidden border-2 border-primary/20">
                  <img
                    src="/ccet-website/public/faculty/principal.png"
                    alt="Principal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-heading font-bold text-primary text-sm text-center">Principal</p>
                <p className="text-gray-400 text-xs text-center">CCET Kondotty</p>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-4 italic text-lg">"Education is not merely the acquisition of knowledge but the development of character, discipline, and responsibility."</p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Welcome to Co-operative College of Education & Technology, Kondotty. At CCET we strive to create an academic atmosphere where students can discover their talents and prepare themselves for professional excellence.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our courses are carefully designed under the CUFYUGP Regulations 2024 to provide both theoretical knowledge and practical training so that our students become capable professionals in their respective fields. I encourage every student to make full use of the opportunities available and maintain discipline, commitment, and respect for learning.
                </p>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Animate animation="slide-left">
            <div className="bg-primary text-white p-8 rounded-2xl h-full">
              <h3 className="font-heading text-2xl font-bold mb-4">🎯 Our Vision</h3>
              <p className="text-blue-100 leading-relaxed">
                To be a leading institution of higher education in Kerala, recognised for innovative programmes,
                inclusive growth, and producing graduates who contribute meaningfully to society, industry and
                the global knowledge economy — rooted in the cooperative tradition.
              </p>
            </div>
          </Animate>
          <Animate animation="slide-right">
            <div className="bg-accent text-white p-8 rounded-2xl h-full">
              <h3 className="font-heading text-2xl font-bold mb-4">🚀 Our Mission</h3>
              <ul className="text-white/90 space-y-2 text-sm leading-relaxed">
                <li>✓ Provide affordable, high-quality professional education</li>
                <li>✓ Foster critical thinking, creativity and ethical values</li>
                <li>✓ Build industry connections and ensure graduate employability</li>
                <li>✓ Promote research, innovation and community service</li>
                <li>✓ Uphold the democratic and inclusive spirit of cooperative education</li>
                <li>✓ Implement CUFYUGP 2024 curriculum with modern pedagogy</li>
              </ul>
            </div>
          </Animate>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto">
          <Animate animation="fade-up">
            <SectionHeading badge="Core Values" title="What We Stand For" subtitle="The four pillars that define the CCET experience and guide everything we do." />
          </Animate>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <Animate key={v.title} animation="zoom-in" delay={i * 100}>
                <div className="card border border-gray-100 p-7 text-center h-full">
                  <div className="flex justify-center mb-4 p-3 bg-blue-50 rounded-full w-fit mx-auto">{v.icon}</div>
                  <h4 className="font-heading font-bold text-primary mb-2">{v.title}</h4>
                  <p className="text-gray-500 text-sm">{v.desc}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Governing Body */}
      <section className="bg-white section-padding">
        <div className="max-w-5xl mx-auto">
          <Animate animation="fade-up">
            <SectionHeading badge="Governance" title="Management & Governing Body" subtitle="CCET is governed by a democratic, community-driven cooperative structure." />
          </Animate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {governingBody.map((g, i) => (
              <Animate key={g.role} animation="fade-up" delay={i * 80}>
                <div className="flex items-center gap-4 p-6 rounded-2xl border border-gray-100 bg-gray-50 shadow-sm">
                  <div className="p-3 bg-blue-50 rounded-full shrink-0">{g.icon}</div>
                  <div>
                    <p className="font-heading font-bold text-primary text-sm">{g.role}</p>
                    <p className="text-gray-500 text-sm">{g.name}</p>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
<section className="bg-gray-50 section-padding">
  <div className="max-w-4xl mx-auto">
    <Animate animation="fade-up">
      <SectionHeading badge="Our Journey" title="Milestones & History" subtitle="A timeline of growth, achievement and commitment." />
    </Animate>
    <div className="relative border-l-4 border-primary/20 ml-6 space-y-8">
      {milestones.length > 0 ? milestones.map((m: any, i: number) => (
        <Animate key={m._id} animation="slide-left" delay={i * 100}>
          <div className="relative pl-8">
            <div className="absolute -left-5 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shadow-md">
              {i + 1}
            </div>
            <span className="text-accent font-bold text-sm block mb-1">{m.year}</span>
            <p className="text-gray-700 text-sm leading-relaxed">{m.event}</p>
          </div>
        </Animate>
      )) : (
        <p className="text-gray-400 text-center py-8">Loading milestones...</p>
      )}
    </div>
  </div>
</section>

      {/* Facilities Quick Overview */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <Animate animation="fade-up">
            <SectionHeading badge="Campus" title="Facilities at CCET" subtitle="Modern infrastructure designed to support quality learning and practical training." />
          </Animate>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "🖥️", label: "AI & Computer Lab" },
              { icon: "🧪", label: "Food Science Lab" },
              { icon: "🍳", label: "Kitchen & Catering Lab" },
              { icon: "📚", label: "Library & Reading Room" },
              { icon: "🎓", label: "Seminar Hall" },
              { icon: "🌿", label: "Hygienic Campus" },
            ].map((f, i) => (
              <Animate key={f.label} animation="zoom-in" delay={i * 80}>
                <div className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-gray-100 bg-gray-50 text-center hover:shadow-md transition-shadow">
                  <span className="text-3xl">{f.icon}</span>
                  <p className="text-xs font-medium text-gray-700">{f.label}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliation */}
      <section className="bg-primary text-white section-padding text-center">
        <div className="max-w-3xl mx-auto">
          <Animate animation="fade-up">
            <h3 className="font-heading text-2xl font-bold mb-3">Affiliated to University of Calicut</h3>
            <p className="text-blue-200 mb-6">
              The University of Calicut, established in 1968, is the largest university in Kerala and one of the most prestigious in India.
              CCET's affiliation ensures our degrees are fully recognised by UGC and accepted nationally and internationally. Our programmes follow CUFYUGP Regulations 2024.
            </p>
            <Link href="/admissions" className="btn-primary">Explore Admissions</Link>
          </Animate>
        </div>
      </section>
    </>
  );
}