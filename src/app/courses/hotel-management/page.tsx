import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Animate from "@/components/ui/Animate";
import { FiCheckCircle } from "react-icons/fi";

const semesters = [
  {
    sem: "Semester 1",
    courses: [
      "Core Course 1 – Basics in Food Production",
      "Ability Enhancement Course 1 (English)",
      "Ability Enhancement Course 2",
      "Minor / Foundation Course 1",
      "Minor / Foundation Course 2",
    ],
  },
  {
    sem: "Semester 2",
    courses: [
      "Core Course 2 – Advanced Food Production",
      "Ability Enhancement Course 3 (English)",
      "Ability Enhancement Course 4",
      "Minor / Foundation Course 3",
      "Minor / Foundation Course 4",
    ],
  },
  {
    sem: "Semester 3",
    courses: [
      "Core Course 3 – Basics of Food & Beverage Service",
      "Core Course 4 – Basic Accommodation Operations",
      "Skill Enhancement Course 1",
      "Value Added Course 1",
      "Minor / Foundation Course 5",
    ],
  },
  {
    sem: "Semester 4",
    courses: [
      "Core Course 5 – Advanced Food & Beverage Service",
      "Core Course 6 – Advanced Accommodation Operations",
      "Core Course 7 – Front Office Management",
      "Value Added Course 2 (English)",
      "Minor / Foundation Course 6",
    ],
  },
  {
    sem: "Semester 5",
    courses: [
      "Core Course 8 – Rooms Division Management",
      "Core Course 9 – Bakery and Confectionery",
      "Core Course 10 – Hygiene and Sanitation",
      "Core Course 11 – Facility Planning",
      "Elective Course 1 & 2",
    ],
  },
  {
    sem: "Semester 6",
    courses: [
      "Core Course 12 – Food Science and Nutrition",
      "Core Course 13 – Food Safety and Quality",
      "Core Course 14 – Management Concepts",
      "Core Course 15 – Consumer Behaviour",
      "Skill Enhancement Course – Mini Project / Internship",
    ],
  },
];

const careers = [
  "Hotel Manager",
  "Executive Chef",
  "Food & Beverage Manager",
  "Front Office Manager",
  "Housekeeping Manager",
  "Restaurant Manager",
  "Hospitality Consultant",
  "Resort Manager",
  "Catering Manager",
  "Tourism Officer",
  "Event Manager",
  "Food Quality Analyst",
];

const programOutcomes = [
  "Demonstrate advanced proficiency in food production techniques and culinary operations",
  "Manage front office, accommodation, and rooms division operations effectively",
  "Apply food safety, hygiene and sanitation standards in hospitality settings",
  "Lead teams and manage hospitality operations with management and consumer behaviour insights",
  "Plan and execute food & beverage service across various hospitality formats",
  "Develop entrepreneurial skills for hospitality business setup and management",
];

const facilities = [
  { icon: "🍳", label: "Professional Kitchen Lab" },
  { icon: "🛎️", label: "Front Office Training Room" },
  { icon: "🛏️", label: "Housekeeping Lab" },
  { icon: "🥐", label: "Bakery & Confectionery Lab" },
  { icon: "🍽️", label: "Restaurant Training Area" },
  { icon: "🤝", label: "Industry Placement Partners" },
];

export default function HotelManagementCoursePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-amber-900 to-amber-700 text-white section-padding py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <Animate animation="fade-up">
            <span className="text-5xl mb-4 block">🏨</span>
            <span className="inline-block bg-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              B.Sc Honours Programme
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Hotel Management & Catering Science Honours</h1>
            <p className="text-amber-200 text-lg mb-6">4-Year FYUGP · University of Calicut · CUFYUGP Regulations 2024</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/admissions" className="btn-primary">Apply Now</Link>
              <Link href="#syllabus" className="btn-outline">View Syllabus</Link>
            </div>
          </Animate>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 text-center">
          {[
            { label: "Duration", value: "4 Years" },
            { label: "Semesters", value: "8" },
            { label: "Total Credits", value: "133" },
            { label: "Eligibility", value: "Plus Two (Any Stream, Min 50%)" },
          ].map((s, i) => (
            <Animate key={s.label} animation="zoom-in" delay={i * 80}>
              <div>
                <p className="font-heading text-xl font-bold text-amber-700">{s.value}</p>
                <p className="text-gray-500 text-sm">{s.label}</p>
              </div>
            </Animate>
          ))}
        </div>
      </section>

      {/* About Course */}
      <section className="bg-white section-padding">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Animate animation="slide-left">
            <div>
              <SectionHeading badge="About the Course" title="B.Sc Hotel Management & Catering Science Honours" center={false} />
              <p className="text-gray-600 leading-relaxed mb-4">
                The B.Sc Hotel Management and Catering Science Honours programme at CCET is a comprehensive
                four-year undergraduate programme offered under CUFYUGP Regulations 2024 of the University of
                Calicut. It is designed to equip students with essential skills and knowledge needed to excel in
                the dynamic hospitality industry.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                This programme combines theoretical knowledge with extensive practical training — covering food
                production, food & beverage service, accommodation operations, front office management, bakery
                and confectionery, and hospitality management concepts.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With India's hospitality and tourism sector growing rapidly, hotel management graduates from
                CCET are well-prepared for careers in starred hotels, resorts, cruise lines, airlines,
                restaurants, and event management.
              </p>
            </div>
          </Animate>
          <Animate animation="slide-right">
            <div className="bg-amber-50 rounded-2xl p-7">
              <h4 className="font-heading font-bold text-amber-800 mb-4">Eligibility Criteria</h4>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Candidates who have passed (Eligible for Higher Studies) the HSE of the Kerala State Board of Higher Secondary Examination or any other examination recognised as equivalent thereto, with <strong>not less than 50%</strong> are eligible for admission.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li className="flex gap-2">
                  <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                  A concession of 5% will be given to OBC/OEC candidates
                </li>
                <li className="flex gap-2">
                  <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                  SC/ST candidates need get only a pass
                </li>
              </ul>
              <p className="text-xs text-gray-500 italic mb-4">
                (U.O.No.GAI/J2/2907/2003 dated concerned)
              </p>
              <div className="bg-white rounded-xl p-4 border border-amber-100">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-2">Index Mark</p>
                <p className="text-xs text-gray-600">Total Plus Two marks only.</p>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mt-3 mb-2">Industry Exposure</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Professional kitchen & bakery lab training</li>
                  <li>• Front office & housekeeping simulations</li>
                  <li>• Industry internship with hospitality partners</li>
                  <li>• Food safety & quality management workshops</li>
                </ul>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* Programme Outcomes */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-5xl mx-auto">
          <Animate animation="fade-up">
            <SectionHeading badge="Programme Outcomes" title="What You Will Achieve" />
          </Animate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {programOutcomes.map((po, i) => (
              <Animate key={i} animation="fade-up" delay={i * 80}>
                <div className="flex gap-3 items-start p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <span className="w-7 h-7 rounded-full bg-amber-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    PSO{i + 1}
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">{po}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-white section-padding">
        <div className="max-w-5xl mx-auto">
          <Animate animation="fade-up">
            <SectionHeading
              badge="Facilities"
              title="Kitchen & Training Facilities"
              subtitle="State-of-the-art labs and training areas for hands-on hospitality education."
            />
          </Animate>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {facilities.map((f, i) => (
              <Animate key={f.label} animation="zoom-in" delay={i * 80}>
                <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-100 bg-gray-50 text-center hover:shadow-md transition-shadow">
                  <span className="text-3xl">{f.icon}</span>
                  <p className="text-sm font-medium text-gray-700">{f.label}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section id="syllabus" className="bg-gray-50 section-padding scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <Animate animation="fade-up">
            <SectionHeading
              badge="Curriculum"
              title="Semester-wise Syllabus"
              subtitle="Based on CUFYUGP Regulations 2024, University of Calicut. Approved by the Board of Studies in Catering Science & Hotel Management."
            />
          </Animate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {semesters.map((s, i) => (
              <Animate key={s.sem} animation="fade-up" delay={i * 80}>
                <div className="card border border-gray-100 p-6 bg-white">
                  <h4 className="font-heading font-bold text-amber-800 mb-3 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
                    {s.sem}
                  </h4>
                  <ul className="space-y-1">
                    {s.courses.map(c => (
                      <li key={c} className="flex gap-2 text-sm text-gray-600">
                        <span className="text-amber-400 mt-1 shrink-0">›</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Animate>
            ))}
          </div>
          <Animate animation="fade-up" delay={200}>
            <p className="text-xs text-gray-400 text-center mt-6">
              * Semesters 7 & 8 for students proceeding to the 4th year of FYUGP. Includes advanced management, entrepreneurship, and dissertation components.
            </p>
          </Animate>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="bg-white section-padding">
        <div className="max-w-5xl mx-auto">
          <Animate animation="fade-up">
            <SectionHeading
              badge="Career Opportunities"
              title="Your Career in Hospitality"
              subtitle="Hotel management graduates are in demand globally across hotels, airlines, cruise lines, and event companies."
            />
          </Animate>
          <div className="flex flex-wrap gap-3 justify-center">
            {careers.map((c, i) => (
              <Animate key={c} animation="zoom-in" delay={i * 50}>
                <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">{c}</span>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-800 text-white section-padding py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <Animate animation="fade-up">
            <h3 className="font-heading text-2xl font-bold mb-3">Launch Your Hospitality Career at CCET</h3>
            <p className="text-amber-200 mb-6">
              Limited seats for 2026–2027. Apply now or walk into our admissions office for guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions" className="btn-primary">Apply Now</Link>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
}
