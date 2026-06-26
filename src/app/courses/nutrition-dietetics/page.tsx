import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Animate from "@/components/ui/Animate";
import { FiCheckCircle } from "react-icons/fi";

const semesters = [
  {
    sem: "Semester 1",
    courses: [
      "Major – Fundamentals in Nutrition Science (NAD1CJ101)",
      "Minor Course 1 & 2",
      "Ability Enhancement Course 1 – English (ENG1FA101)",
      "Ability Enhancement Course 2 – Additional Language",
      "Multi-Disciplinary Course 1 – Other than Major",
    ],
  },
  {
    sem: "Semester 2",
    courses: [
      "Major – Fundamentals in Nutrition Science (NAD1CJ101)",
      "Minor Course 3 & 4",
      "Ability Enhancement Course 3 – English (ENG1FA103)",
      "Ability Enhancement Course 4 – Additional Language",
      "Multi-Disciplinary Course 2",
    ],
  },
  {
    sem: "Semester 3",
    courses: [
      "Major – Human Physiology (NAD3CJ201)",
      "Major – Food Microbiology (NAD3CJ202)",
      "Minor Course 5 & 6",
      "Multi-Disciplinary Course 3 – Kerala Knowledge System",
      "Value-Added Course 1 – English (ENG3FV108)",
    ],
  },
  {
    sem: "Semester 4",
    courses: [
      "Major – Nutrition Through Life Cycle (NAD4CJ203)",
      "Major – Fundamentals of Biochemistry (NAD4CJ204)",
      "Major – Principles of Diet Therapy (NAD4CJ205)",
      "Value-Added Course 2 – English (ENG4FV109)",
      "Value-Added Course 3 – Additional Language",
      "Skill Enhancement Course 1 – English (ENG4FS111)",
    ],
  },
  {
    sem: "Semester 5",
    courses: [
      "Major – Community Nutrition (NAD5CJ301)",
      "Major – Clinical Nutrition (NAD5CJ302)",
      "Major – Geriatric Nutrition (NAD5CJ303)",
      "Elective Course 1 in Major",
      "Elective Course 2 in Major",
      "Skill Enhancement Course 2 – Nutrition Education and Counselling (NAD5FS113)",
    ],
  },
  {
    sem: "Semester 6",
    courses: [
      "Major – Management of Special Diets (NAD6CJ304)",
      "Major – Nutrition in Critical Care (NAD6CJ305)",
      "Major – Nutrigenomics (NAD6CJ306)",
      "Elective Course 3 in Major",
      "Elective Course 4 in Major",
      "Skill Enhancement Course 3 – Food Product Development (NAD6FS113)",
      "Internship (NAD6CJ349)",
    ],
  },
];

const programOutcomes = [
  "Understand the concepts of nutrition and dietetics and communicate dietary advice effectively",
  "Apply the principles of Nutrition and Dietetics to assess and address individual needs",
  "Develop, implement and monitor therapeutic diets for various medical conditions",
  "Improve public health by educating communities about healthy eating habits and importance of nutrition",
  "Critically evaluate and interpret scientific research in the field of nutrition",
  "Demonstrate professionalism and ethical conduct in the field of nutrition and dietetics",
];

const pathways = [
  { title: "Single Major", desc: "The 6 courses in Bands C can be from different disciplines." },
  { title: "Major with Multiple Disciplines", desc: "Bands C represent two different disciplines." },
  { title: "Major with Minor", desc: "Bands C represent the same Minor discipline." },
  { title: "Major with Vocational Minor", desc: "Bands C represent the same Vocational Minor discipline." },
];

const careers = [
  "Clinical Dietitian", "Public Health Nutritionist", "Hospital Nutritionist",
  "Food Analyst", "Diet Counsellor", "Nutrition Researcher",
  "Wellness Coach", "Food Product Developer", "Sports Nutritionist",
];

export default function NutritionCoursePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-green-900 to-green-700 text-white section-padding py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <Animate animation="fade-up">
            <span className="text-5xl mb-4 block">🥗</span>
            <span className="inline-block bg-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">B.Sc Honours Programme</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Home Science – Nutrition and Dietetics</h1>
            <p className="text-green-200 text-lg mb-6">4-Year FYUGP · University of Calicut · CUFYUGP Regulations 2024</p>
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
            { label: "Eligibility", value: "B.Sc Degree (Related Fields)" },
          ].map((s, i) => (
            <Animate key={s.label} animation="zoom-in" delay={i * 80}>
              <div>
                <p className="font-heading text-xl font-bold text-green-700">{s.value}</p>
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
              <SectionHeading badge="About the Course" title="B.Sc Home Science – Nutrition & Dietetics (Honours)" center={false} />
              <p className="text-gray-600 leading-relaxed mb-4">
                The B.Sc Nutrition and Dietetics Honours programme at CCET is a comprehensive four-year course designed under the CUFYUGP Regulations 2024 of the University of Calicut. It focuses on human nutrition, food science, diet planning, and health management.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Students gain in-depth knowledge of clinical nutrition, community health, food microbiology, biochemistry, and therapeutic dietetics. Practical training is conducted through food science labs and internships with leading hospitals and healthcare institutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With growing awareness of lifestyle diseases and preventive healthcare, qualified nutritionists and dietitians are in high demand across hospitals, wellness centres, and public health organisations.
              </p>
            </div>
          </Animate>
          <Animate animation="slide-right">
            <div className="bg-green-50 rounded-2xl p-7">
              <h4 className="font-heading font-bold text-green-800 mb-4">Eligibility Criteria</h4>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                B.Sc Degree with <strong>Home Science / Family & Community Science / Dietetics / Clinical Nutrition / Nutrition and Dietetics / Food Science with Quality Control / Food Science and Nutrition / Food Service Management and Dietetics</strong> or other Nutrition related degree programmes in Life Science subjects (undertaking required), and BVoc Nutrition Science and Dietetics of this University or an equivalent degree.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li className="flex gap-2 items-start">
                  <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                  Minimum <strong>45% aggregate marks</strong> or equivalent overall CGPA
                </li>
                <li className="flex gap-2 items-start">
                  <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                  OBC/OEC candidates eligible for relaxation up to 5%
                </li>
                <li className="flex gap-2 items-start">
                  <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                  SC/ST candidates need only to get a pass
                </li>
              </ul>
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
                  <span className="w-7 h-7 rounded-full bg-green-700 text-white text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-green-800 text-sm">{p.title}</p>
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
                  <span className="w-7 h-7 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center shrink-0">PSO{i + 1}</span>
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
                  <h4 className="font-heading font-bold text-green-800 mb-3 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-green-700 text-white text-xs flex items-center justify-center font-bold">{i + 1}</span>
                    {s.sem}
                  </h4>
                  <ul className="space-y-1">
                    {s.courses.map(c => (
                      <li key={c} className="flex gap-2 text-sm text-gray-600">
                        <span className="text-green-400 mt-1 shrink-0">›</span> {c}
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
            <SectionHeading badge="Career Opportunities" title="Your Career After Graduation" subtitle="Nutrition graduates are in demand across healthcare, wellness, food industry, and public health sectors." />
          </Animate>
          <div className="flex flex-wrap gap-3 justify-center">
            {careers.map((c, i) => (
              <Animate key={c} animation="zoom-in" delay={i * 60}>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">{c}</span>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-800 text-white section-padding py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <Animate animation="fade-up">
            <h3 className="font-heading text-2xl font-bold mb-3">Start Your Journey in Nutrition Science</h3>
            <p className="text-green-200 mb-6">Limited seats available for 2026–2027. Apply today or contact our admissions office.</p>
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
