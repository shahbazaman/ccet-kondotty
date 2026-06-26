import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Animate from "@/components/ui/Animate";
import { FiCheckCircle } from "react-icons/fi";

const semesters = [
  {
    sem: "Semester 1",
    courses: [
      "Major – Basics in Food Production (BHC1CJ101)",
      "Minor Course 1 & 2",
      "Ability Enhancement Course 1 – English (ENG1FA101)",
      "Ability Enhancement Course 2 – Additional Language",
      "Multi-Disciplinary Course 1",
    ],
  },
  {
    sem: "Semester 2",
    courses: [
      "Major – Advanced Food Production (BHC2CJ101)",
      "Minor Course 3 & 4",
      "Ability Enhancement Course 3 – English (ENG2FA103)",
      "Ability Enhancement Course 4 – Additional Language",
      "Multi-Disciplinary Course 2",
    ],
  },
  {
    sem: "Semester 3",
    courses: [
      "Major – Basics of Food & Beverage Service (BHC3CJ201)",
      "Major – Basic Accommodation Operation (BHC3CJ202)",
      "Minor Course 5 & 6",
      "Multi-Disciplinary Course 3 – Kerala Knowledge System",
      "Value-Added Course 1 – English (ENG3FV108)",
    ],
  },
  {
    sem: "Semester 4",
    courses: [
      "Major – Advanced Food & Beverage Service (BHC4CJ203)",
      "Major – Advanced Accommodation Operation (BHC4CJ204)",
      "Major – Front Office Management (BHC4CJ205)",
      "Value-Added Course 2 – English (ENG4FV109)",
      "Value-Added Course 3 – Additional Language",
      "Skill Enhancement Course 1 – English (ENG4FS111)",
    ],
  },
  {
    sem: "Semester 5",
    courses: [
      "Major – Rooms Division Management (BHC5CJ301)",
      "Major – Bakery and Confectionery (BHC5CJ302)",
      "Major – Hygiene and Sanitation (BHC5CJ303)",
      "Elective Course 1 in Major",
      "Elective Course 2 in Major",
      "Skill Enhancement Course 2",
    ],
  },
  {
    sem: "Semester 6",
    courses: [
      "Major – Facility Planning (BHC6CJ304)",
      "Major – Food Science and Nutrition (BHC6CJ305)",
      "Major – Food Safety and Quality (BHC6CJ306)",
      "Elective Course 3 in Major",
      "Elective Course 4 in Major",
      "Skill Enhancement Course 3 (BHC6FS113)",
      "Internship (BHC6CJ349)",
    ],
  },
];

const programOutcomes = [
  "Proficient Food Production Skills: Graduates will demonstrate advanced proficiency in food production techniques, including both basic and advanced methods, ensuring they can effectively contribute to culinary operations in various hospitality settings.",
  "Comprehensive Service Management: Students will acquire comprehensive understanding of food and beverage (F&B) service, accommodation operations, and front office management, enabling them to oversee and manage diverse service aspects within the hospitality industry.",
  "Hygiene and Safety Standards Adherence: Graduates will exhibit a thorough knowledge of hygiene and sanitation practices, as well as food safety and quality standards, ensuring compliance with regulatory requirements and maintaining high standards in hospitality operations.",
  "Strategic Management Competence: Students will possess the necessary skills to analyse management concepts, consumer behaviour, and the hospitality business environment, enabling them to make informed strategic decisions and effectively manage hospitality businesses.",
  "Financial Acumen: Graduates will demonstrate proficiency in hotel accounting principles, ensuring they can effectively manage financial aspects of hospitality operations, including budgeting, cost control, and revenue management.",
  "Professional Exposure and Research Aptitude: Through industrial exposure training or research projects, students will gain practical experience in real-world hospitality settings or develop research skills in hotel management, preparing them for successful careers or further academic pursuits.",
];

const pathways = [
  { title: "Single Major", desc: "The 6 courses in Bands C can be from different disciplines." },
  { title: "Major with Multiple Disciplines", desc: "Bands C represent two different disciplines." },
  { title: "Major with Minor", desc: "Bands C represent the same Minor discipline." },
  { title: "Major with Vocational Minor", desc: "Bands C represent the same Vocational Minor discipline." },
];

const careers = [
  "Hotel Manager", "Executive Chef", "Food & Beverage Manager",
  "Front Office Manager", "Housekeeping Manager", "Restaurant Manager",
  "Hospitality Consultant", "Resort Manager", "Catering Manager",
  "Event Manager", "Food Quality Analyst",
];

export default function HotelManagementCoursePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-amber-900 to-amber-700 text-white section-padding py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <Animate animation="fade-up">
            <span className="text-5xl mb-4 block">🏨</span>
            <span className="inline-block bg-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">B.Sc Honours Programme</span>
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
            { label: "Total Credits", value: "177" },
            { label: "Eligibility", value: "B.Sc./B.T. or Plus Two" },
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

      {/* About + Eligibility */}
      <section className="bg-white section-padding">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Animate animation="slide-left">
            <div>
              <SectionHeading badge="About the Course" title="B.Sc Hotel Management & Catering Science Honours" center={false} />
              <p className="text-gray-600 leading-relaxed mb-4">
                The B.Sc Hotel Management and Catering Science Honours programme at CCET is a comprehensive four-year undergraduate programme offered under CUFYUGP Regulations 2024 of the University of Calicut. It equips students with essential skills and knowledge needed to excel in the dynamic hospitality industry.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                This programme combines theoretical knowledge with extensive practical training — covering food production, food & beverage service, accommodation operations, front office management, bakery and confectionery, and hospitality management concepts.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With India's hospitality and tourism sector growing rapidly, hotel management graduates from CCET are well-prepared for careers in starred hotels, resorts, cruise lines, airlines, restaurants, and event management.
              </p>
            </div>
          </Animate>
          <Animate animation="slide-right">
            <div className="bg-amber-50 rounded-2xl p-7">
              <h4 className="font-heading font-bold text-amber-800 mb-4">Eligibility Criteria</h4>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                <strong>B.Sc. / B.T. students</strong> who have passed the qualifying examination are eligible to apply.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Also eligible: Candidates who have passed (Eligible for Higher Studies) the HSE of the Kerala State Board of Higher Secondary Examination or any other examination recognised as equivalent thereto, with <strong>not less than 50%</strong>.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li className="flex gap-2 items-start">
                  <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                  A concession of 5% will be given to OBC/OEC candidates
                </li>
                <li className="flex gap-2 items-start">
                  <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                  SC/ST candidates need get only a pass
                </li>
              </ul>
              <p className="text-xs text-gray-500 italic">(U.O.No.GAI/J2/2907/2003)</p>
              <div className="mt-4 bg-white rounded-xl p-4 border border-amber-100">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Index Mark</p>
                <p className="text-xs text-gray-600">Total Plus Two marks only.</p>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* Pathway Options */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-5xl mx-auto">
          <Animate animation="fade-up">
            <SectionHeading badge="CUFYUGP Pathways" title="Course Distribution Pathways" subtitle="Students in Semesters I–VI can choose from 4 pathway options." />
          </Animate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pathways.map((p, i) => (
              <Animate key={i} animation="fade-up" delay={i * 80}>
                <div className="flex gap-3 items-start p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <span className="w-7 h-7 rounded-full bg-amber-700 text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-amber-800 text-sm">{p.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{p.desc}</p>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Outcomes */}
      <section className="bg-white section-padding">
        <div className="max-w-5xl mx-auto">
          <Animate animation="fade-up">
            <SectionHeading badge="Programme Specific Outcomes" title="What You Will Achieve" />
          </Animate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {programOutcomes.map((po, i) => (
              <Animate key={i} animation="fade-up" delay={i * 80}>
                <div className="flex gap-3 items-start p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                  <span className="w-7 h-7 rounded-full bg-amber-600 text-white text-xs font-bold flex items-center justify-center shrink-0">PSO{i + 1}</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{po}</p>
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
            <SectionHeading badge="Curriculum" title="Semester-wise Syllabus" subtitle="Based on CUFYUGP Regulations 2024, University of Calicut. Total Credits: 177 over 8 Semesters." />
          </Animate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {semesters.map((s, i) => (
              <Animate key={s.sem} animation="fade-up" delay={i * 80}>
                <div className="card border border-gray-100 p-6 bg-white">
                  <h4 className="font-heading font-bold text-amber-800 mb-3 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center font-bold">{i + 1}</span>
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
            <p className="text-xs text-gray-400 text-center mt-6">* Semesters 7 & 8 available for students who proceed to the 4th year of the FYUGP programme.</p>
          </Animate>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="bg-white section-padding">
        <div className="max-w-5xl mx-auto">
          <Animate animation="fade-up">
            <SectionHeading badge="Career Opportunities" title="Your Career in Hospitality" subtitle="Hotel management graduates are in demand globally across hotels, airlines, cruise lines, and event companies." />
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
            <p className="text-amber-200 mb-6">Limited seats for 2026–2027. Apply now or walk into our admissions office for guidance.</p>
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
