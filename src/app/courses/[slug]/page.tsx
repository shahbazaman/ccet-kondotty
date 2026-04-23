import { courses } from "@/data/courses";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowLeft,
  FiClock,
  FiUsers,
  FiBook,
  FiCheckCircle,
} from "react-icons/fi";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: `${course.title} | CCET Kondotty`,
    description: course.description.slice(0, 155),
  };
}

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) notFound();

  return (
    <>
      {/* Hero */}
      <section
        className={`bg-linear-to-br ${course.color} text-white section-padding py-20`}
      >
        <div className="max-w-4xl mx-auto">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
          >
            <FiArrowLeft /> Back to All Courses
          </Link>

          <div className="text-7xl mb-6">{course.icon}</div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5">
            {course.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-white/80 text-sm">
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <FiClock /> {course.duration}
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <FiUsers /> {course.intake}
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <FiBook /> {course.affiliation}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white section-padding">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Overview */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">
              Course Overview
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              {course.description}
            </p>
          </div>

          {/* Eligibility */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">
              Eligibility Criteria
            </h2>
            <div
              className={`inline-flex items-center gap-3 px-6 py-4 rounded-xl text-sm font-medium ${course.bgLight} ${course.textColor}`}
            >
              <FiCheckCircle size={18} />
              {course.eligibility}
            </div>
          </div>

          {/* Syllabus */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">
              Syllabus Overview
            </h2>
            <div className="space-y-3">
              {course.syllabusSummary.map((s, i) => (
                <div
                  key={s}
                  className={`p-4 rounded-xl text-sm ${course.bgLight} ${course.textColor} flex items-start gap-3`}
                >
                  <span className="font-bold shrink-0">Sem {i * 2 + 1}–{i * 2 + 2}</span>
                  <span>{s.split(":")[1]?.trim() || s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">
              Programme Highlights
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 text-gray-700 text-sm bg-gray-50 rounded-xl p-4 border border-gray-100"
                >
                  <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" size={16} />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Career Prospects */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary mb-4">
              Career Prospects
            </h2>
            <div className="flex flex-wrap gap-3">
              {course.careerProspects.map((c) => (
                <span
                  key={c}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${course.bgLight} ${course.textColor}`}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
            <Link href="/admissions" className="btn-primary text-center">
              Apply for This Course
            </Link>
            <Link
              href="/contact"
              className="border-2 border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-all text-center"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>

      {/* Other Courses */}
      <section className="bg-gray-50 section-padding py-14">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl font-bold text-primary mb-8 text-center">
            Explore Other Programmes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {courses
              .filter((c) => c.slug !== course.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/courses/${c.slug}`}
                  className={`bg-linear-to-br ${c.color} text-white rounded-2xl p-6 hover:scale-105 transition-transform`}
                >
                  <div className="text-4xl mb-3">{c.icon}</div>
                  <h4 className="font-heading font-bold text-sm leading-snug">
                    {c.title}
                  </h4>
                  <p className="text-white/70 text-xs mt-2">{c.duration}</p>
                </Link>
              ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/courses" className="btn-primary inline-block">
              View All Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}