import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Animate from "@/components/ui/Animate";
import { FiCheckCircle } from "react-icons/fi";

const semesters = [
  { sem: "Semester 1", courses: ["Fundamentals of Computers & Computational Thinking", "Ability Enhancement Course 1 (English)", "Ability Enhancement Course 2", "Minor / Foundation Course 1", "Minor / Foundation Course 2"] },
  { sem: "Semester 2", courses: ["Programming in Python", "Ability Enhancement Course 3 (English)", "Ability Enhancement Course 4", "Minor / Foundation Course 3", "Minor / Foundation Course 4"] },
  { sem: "Semester 3", courses: ["Data Structures & Algorithms", "Database Management Systems", "Computer Networks", "Discrete Mathematics", "Skill Enhancement Course 1"] },
  { sem: "Semester 4", courses: ["Artificial Intelligence Foundations", "Machine Learning", "Operating Systems", "Statistics for AI", "Skill Enhancement Course 2"] },
  { sem: "Semester 5", courses: ["Deep Learning & Neural Networks", "Natural Language Processing", "Computer Vision", "Elective Course 1", "Elective Course 2"] },
  { sem: "Semester 6", courses: ["Reinforcement Learning", "AI Ethics & Responsible AI", "Mini Project (SEC 3)", "Elective Course 3", "Internship / Viva"] },
];

const careers = [
  "AI Engineer", "Machine Learning Developer", "Data Scientist", "Natural Language Processing Specialist",
  "Computer Vision Engineer", "Robotics Developer", "AI Research Analyst", "Software Developer",
];

const programOutcomes = [
  "Understand theoretical and mathematical foundations of Artificial Intelligence",
  "Design, analyse and develop code-based solutions for AI algorithms",
  "Acquire logical thinking and problem-solving skills in the software domain",
  "Address industry demands with technical, logical and ethical skills",
  "Adapt to emerging trends and tackle challenges in the field of AI",
  "Demonstrate proficiency in digital tools to process complex information",
];

export default function AICoursePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-blue-900 to-primary text-white section-padding py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <Animate animation="fade-up">
            <span className="text-5xl mb-4 block">🤖</span>
            <span className="inline-block bg-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">B.Sc Honours Programme</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Artificial Intelligence</h1>
            <p className="text-blue-200 text-lg mb-6">4-Year FYUGP · University of Calicut · CUFYUGP Regulations 2024</p>
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
            { label: "Eligibility", value: "Plus Two (Sci/Comm+Computer)" },
          ].map((s, i) => (
            <Animate key={s.label} animation="zoom-in" delay={i * 80}>
              <div>
                <p className="font-heading text-xl font-bold text-primary">{s.value}</p>
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
              <SectionHeading badge="About the Course" title="B.Sc Artificial Intelligence (Honours)" center={false} />
              <p className="text-gray-600 leading-relaxed mb-4">
                The B.Sc Artificial Intelligence Honours programme at CCET focuses on the development of intelligent systems capable of performing tasks that normally require human intelligence — such as learning, reasoning, and decision-making.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Following the CUFYUGP Regulations 2024 of the University of Calicut, this four-year programme provides students with a deep understanding of AI fundamentals, machine learning, data science, natural language processing, and computer vision, combined with strong mathematical and programming foundations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Students are trained in modern AI tools and frameworks, with hands-on projects and an industry internship, ensuring they are job-ready from day one.
              </p>
            </div>
          </Animate>
          <Animate animation="slide-right">
            <div className="bg-blue-50 rounded-2xl p-7">
              <h4 className="font-heading font-bold text-primary mb-4">Eligibility Criteria</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><FiCheckCircle className="text-green-500 mt-0.5 shrink-0" /> Plus Two (Science) with Mathematics or Computer Science</li>
                <li className="flex gap-2"><FiCheckCircle className="text-green-500 mt-0.5 shrink-0" /> Plus Two (Commerce / Humanities) with any Computer Course</li>
                <li className="flex gap-2"><FiCheckCircle className="text-green-500 mt-0.5 shrink-0" /> Minimum 45% aggregate marks recommended</li>
                <li className="flex gap-2"><FiCheckCircle className="text-green-500 mt-0.5 shrink-0" /> University merit seat via CAP or Management Quota</li>
              </ul>
              <div className="mt-6 bg-white rounded-xl p-4 border border-blue-100">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-2">Pathway Options (CUFYUGP)</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Single Major in AI</li>
                  <li>• Major (AI) + Minor (Data Science / Web Technology)</li>
                  <li>• Major (AI) + Minor (Electronics)</li>
                  <li>• Major (AI) with Multiple Disciplines</li>
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
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0">PSO{i + 1}</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{po}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section id="syllabus" className="bg-white section-padding scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <Animate animation="fade-up">
            <SectionHeading badge="Curriculum" title="Semester-wise Syllabus" subtitle="Based on CUFYUGP Regulations 2024, University of Calicut." />
          </Animate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {semesters.map((s, i) => (
              <Animate key={s.sem} animation="fade-up" delay={i * 80}>
                <div className="card border border-gray-100 p-6">
                  <h4 className="font-heading font-bold text-primary mb-3 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">{i + 1}</span>
                    {s.sem}
                  </h4>
                  <ul className="space-y-1">
                    {s.courses.map(c => (
                      <li key={c} className="flex gap-2 text-sm text-gray-600">
                        <span className="text-blue-400 mt-1">›</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Animate>
            ))}
          </div>
          <Animate animation="fade-up" delay={200}>
            <p className="text-xs text-gray-400 text-center mt-6">* Semesters 7 & 8 available for students who proceed to the 4th year of the FYUGP programme. Elective and minor courses vary by pathway chosen.</p>
          </Animate>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-5xl mx-auto">
          <Animate animation="fade-up">
            <SectionHeading badge="Career Opportunities" title="Where Will This Take You?" subtitle="AI graduates are among the highest in demand globally. Here are some career paths:" />
          </Animate>
          <div className="flex flex-wrap gap-3 justify-center">
            {careers.map((c, i) => (
              <Animate key={c} animation="zoom-in" delay={i * 60}>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">{c}</span>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white section-padding py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <Animate animation="fade-up">
            <h3 className="font-heading text-2xl font-bold mb-3">Ready to Build the Future with AI?</h3>
            <p className="text-blue-200 mb-6">Limited seats available for the 2026–2027 batch. Apply today or contact our admissions team.</p>
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