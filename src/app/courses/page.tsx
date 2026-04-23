import Link from "next/link";
import { FiArrowRight, FiClock, FiUsers, FiBook } from "react-icons/fi";
import { courses } from "@/data/courses";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-primary-dark to-primary text-white section-padding py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Programmes</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-blue-200 text-lg">Three career-focused B.Sc programmes affiliated to the University of Calicut — designed for the industries of the future.</p>
        </div>
      </section>

      {/* Courses Detail */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto space-y-16">
          {courses.map((course, i) => (
            <div key={course.slug} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              {/* Course Info Panel */}
              <div className={`bg-linear-to-br ${course.color} text-white rounded-3xl p-8 md:p-10`}>
                <div className="text-6xl mb-4">{course.icon}</div>
                <h2 className="font-heading text-2xl font-bold mb-3">{course.title}</h2>
                <div className="flex flex-wrap gap-4 text-sm text-white/80 mb-6">
                  <span className="flex items-center gap-1"><FiClock /> {course.duration}</span>
                  <span className="flex items-center gap-1"><FiUsers /> {course.intake}</span>
                  <span className="flex items-center gap-1"><FiBook /> {course.affiliation}</span>
                </div>
                <div className="bg-white/10 rounded-xl p-4 mb-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Eligibility</p>
                  <p className="text-white text-sm">{course.eligibility}</p>
                </div>
                <h4 className="font-bold mb-3 text-white/80 text-sm uppercase tracking-widest">Key Highlights</h4>
                <ul className="space-y-2">
                  {course.highlights.map(h => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <span className="text-white font-bold">✓</span> {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Course Details */}
              <div>
                <p className="text-gray-600 leading-relaxed mb-6">{course.description}</p>

                <div className="mb-6">
                  <h4 className="font-heading font-bold text-primary mb-3">Syllabus Overview</h4>
                  <ul className="space-y-2">
                    {course.syllabusSummary.map(s => (
                      <li key={s} className={`text-sm p-3 rounded-lg ${course.bgLight} ${course.textColor}`}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-heading font-bold text-primary mb-3">Career Prospects</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.careerProspects.map(c => (
                      <span key={c} className={`text-xs font-medium px-3 py-1.5 rounded-full ${course.bgLight} ${course.textColor} border border-current/20`}>{c}</span>
                    ))}
                  </div>
                </div>

                <Link href={`/courses/${course.slug}`} className="btn-primary inline-flex items-center justify-center gap-2 text-sm">
                  <span className="flex items-center gap-2">Full Course Details <FiArrowRight size={16} /></span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 section-padding py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">Ready to Enrol?</h2>
          <p className="text-gray-500 mb-8">Applications for Academic Year 2026–2027 are now open. Limited seats available under Management Quota.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="btn-primary">Apply Now</Link>
            <Link href="/contact" className="border-2 border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-all">Contact Admissions</Link>
          </div>
        </div>
      </section>
    </>
  );
}