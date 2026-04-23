import Link from "next/link";
import { FiArrowRight, FiClock, FiUsers } from "react-icons/fi";

export default function CourseCard({ course }: { course: any }) {
  return (
    <div className="card border border-gray-100 flex flex-col">
      <div className={`bg-gradient-to-r ${course.color} text-white p-6`}>
        <span className="text-4xl mb-2 block">{course.icon}</span>
        <h3 className="font-heading font-bold text-lg leading-snug">{course.title}</h3>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex gap-4 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1"><FiClock /> {course.duration}</span>
          <span className="flex items-center gap-1"><FiUsers /> {course.intake}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{course.description.slice(0, 150)}...</p>
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Key Highlights</p>
          <ul className="space-y-1">
            {course.highlights.slice(0, 3).map((h: string) => (
              <li key={h} className="text-xs text-gray-600 flex items-start gap-2">
                <span className="text-green-500 font-bold mt-0.5">✓</span> {h}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={`/courses/${course.slug}`}
          className={`mt-auto text-sm font-semibold inline-flex items-center gap-1 ${course.textColor} hover:underline`}
        >
          <span className="flex items-center gap-1">Full Course Details <FiArrowRight size={14} /></span>
        </Link>
      </div>
    </div>
  );
}