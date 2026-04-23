import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Animate from "@/components/ui/Animate";
import { FiCheckCircle } from "react-icons/fi";

const semesters = [
  {
    sem: "Semester 1",
    courses: [
      "Core Course 1 – Fundamentals in Nutrition Science",
      "Ability Enhancement Course 1 (English)",
      "Ability Enhancement Course 2",
      "Minor / Foundation Course 1",
      "Minor / Foundation Course 2",
    ],
  },
  {
    sem: "Semester 2",
    courses: [
      "Core Course 2 – Fundamentals of Food Science",
      "Ability Enhancement Course 3 (English)",
      "Ability Enhancement Course 4",
      "Minor / Foundation Course 3",
      "Minor / Foundation Course 4",
    ],
  },
  {
    sem: "Semester 3",
    courses: [
      "Core Course 3 – Human Physiology",
      "Core Course 4 – Food Microbiology",
      "Skill Enhancement Course 1",
      "Value Added Course 1",
      "Minor / Foundation Course 5",
    ],
  },
  {
    sem: "Semester 4",
    courses: [
      "Core Course 5 – Nutrition Through Life Cycle",
      "Core Course 6 – Fundamentals of Biochemistry",
      "Value Added Course 2 (English)",
      "Value Added Course 3 (Additional Language)",
      "Minor / Foundation Course 6",
    ],
  },
  {
    sem: "Semester 5",
    courses: [
      "Core Course 7 – Principles of Diet Therapy",
      "Core Course 8 – Community Nutrition",
      "Core Course 9 – Clinical Nutrition",
      "Core Course 10 – Geriatric Nutrition",
      "Elective Course 1 & 2",
      "Skill Enhancement Course 2 – Nutrition Education & Counselling",
    ],
  },
  {
    sem: "Semester 6",
    courses: [
      "Core Course 11 – Advanced Clinical Dietetics",
      "Core Course 12 – Food Safety & Quality Control",
      "Elective Course 3",
      "Skill Enhancement Course 3 – Mini Project",
      "Internship / Field Training (Hospital / Community)",
    ],
  },
];

const careers = [
  "Clinical Dietitian",
  "Public Health Nutritionist",
  "Hospital Nutritionist",
  "Food Analyst",
  "Diet Counsellor",
  "Nutrition Researcher",
  "Wellness Coach",
  "Food Product Developer",
  "Community Health Worker",
  "Sports Nutritionist",
];

const programOutcomes = [
  "Understand the concepts of nutrition and dietetics and communicate dietary advice effectively",
  "Apply the principles of Nutrition and Dietetics to assess and address individual needs",
  "Develop, implement and monitor therapeutic diets for various medical conditions",
  "Improve public health by educating communities about healthy eating habits",
  "Conduct food analysis and quality assessment using modern lab techniques",
  "Perform nutritional assessment and counselling for diverse population groups",
];

const facilities = [
  { icon: "🧪", label: "Food Science & Nutrition Lab" },
  { icon: "🏥", label: "Hospital Internship Tie-ups" },
  { icon: "🔬", label: "Biochemistry Lab Access" },
  { icon: "📊", label: "Dietary Analysis Software" },
  { icon: "🍱", label: "Diet Planning Practical Sessions" },
  { icon: "🤝", label: "MoUs with Leading Hospitals" },
];

export default function NutritionCoursePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-green-900 to-green-700 text-white section-padding py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <Animate animation="fade-up">
            <span className="text-5xl mb-4 block">🥗</span>
            <span className="inline-block bg-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              B.Sc Honours Programme
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Nutrition and Dietetics</h1>
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
            { label: "Total Credits", value: "133" },
            { label: "Eligibility", value: "Plus Two (Science + Bio/Chem)" },
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

      {/* About Course */}
      <section className="bg-white section-padding">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Animate animation="slide-left">
            <div>
              <SectionHeading badge="About the Course" title="B.Sc Nutrition & Dietetics (Honours)" center={false} />
              <p className="text-gray-600 leading-relaxed mb-4">
                The B.Sc Nutrition and Dietetics Honours programme at CCET is a comprehensive four-year course designed
                under the CUFYUGP Regulations 2024 of the University of Calicut. It focuses on human nutrition, food
                science, diet planning, and health management.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Students gain in-depth knowledge of clinical nutrition, community health, food microbiology,
                biochemistry, and therapeutic dietetics. Practical training is conducted through food science labs
                and internships with leading hospitals and healthcare institutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With growing awareness of lifestyle diseases and preventive healthcare, qualified nutritionists and
                dietitians are in high demand across hospitals, wellness centres, fitness industry, and public health
                organisations.
              </p>
            </div>
          </Animate>
          <Animate animation="slide-right">
            <div className="bg-green-50 rounded-2xl p-7">
              <h4 className="font-heading font-bold text-green-800 mb-4">Eligibility Criteria</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                  Plus Two (Science) with Biology / Chemistry / Home Science
                </li>
                <li className="flex gap-2">
                  <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                  Related subjects in Life Sciences accepted
                </li>
                <li className="flex gap-2">
                  <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                  Minimum 45% aggregate marks recommended
                </li>
                <li className="flex gap-2">
                  <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                  Medical Fitness Certificate required at admission
                </li>
                <li className="flex gap-2">
                  <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                  University merit seat via CAP or Management Quota
                </li>
              </ul>
              <div className="mt-6 bg-white rounded-xl p-4 border border-green-100">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-2">Pathway Options (CUFYUGP)</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Single Major in Nutrition & Dietetics</li>
                  <li>• Major (Nutrition) + Minor (Biochemistry & Microbiology)</li>
                  <li>• Major (Nutrition) + Minor (Food Processing)</li>
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
                  <span className="w-7 h-7 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
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
            <SectionHeading badge="Facilities" title="Lab & Training Facilities" subtitle="Hands-on training is central to the Nutrition & Dietetics programme at CCET." />
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
              subtitle="Based on CUFYUGP Regulations 2024, University of Calicut. Approved by the Board of Studies in Home Science."
            />
          </Animate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {semesters.map((s, i) => (
              <Animate key={s.sem} animation="fade-up" delay={i * 80}>
                <div className="card border border-gray-100 p-6 bg-white">
                  <h4 className="font-heading font-bold text-green-800 mb-3 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-green-700 text-white text-xs flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
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
            <p className="text-xs text-gray-400 text-center mt-6">
              * Semesters 7 & 8 available for students who proceed to the 4th year of the FYUGP. Elective and minor courses vary by pathway chosen.
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
              title="Your Career After Graduation"
              subtitle="Nutrition graduates are in high demand across healthcare, wellness, food industry, and public health sectors."
            />
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
            <p className="text-green-200 mb-6">
              Limited seats available for 2026–2027. Apply today or contact our admissions office for more details.
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