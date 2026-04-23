import { FiMail, FiBook, FiAward } from "react-icons/fi";
import { faculty } from "@/data/faculty";
import SectionHeading from "@/components/ui/SectionHeading";

const departments = ["All", "AI", "Nutrition", "Hotel"];

export default function FacultyPage() {
  return (
    <>
      <section className="bg-linear-to-br from-primary-dark to-primary text-white section-padding py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-[#f5a623] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Our Team</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Meet Our Faculty</h1>
          <p className="text-blue-200 text-lg">Experienced educators and industry professionals dedicated to student success.</p>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          {["AI", "Nutrition", "Hotel"].map(dept => (
            <div key={dept} className="mb-16">
              <div className="mb-8">
                <span className="inline-block bg-[#f5a623]/10 text-[#f5a623] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-2">Department</span>
                <h2 className="font-heading text-2xl font-bold text-primary">
                  {dept === "AI" ? "Artificial Intelligence" : dept === "Nutrition" ? "Nutrition and Dietetics" : "Hotel Management & Catering Science"}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {faculty.filter(f => f.department === dept).map(f => (
                  <div key={f.name} className="card border border-gray-100 p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-linear-to-br from-primary to-primary-light flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                      {f.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                    </div>
                    <h3 className="font-heading font-bold text-primary">{f.name}</h3>
                    <p className="text-[#f5a623] text-sm font-medium mt-1">{f.designation}</p>
                    <div className="mt-4 space-y-2 text-xs text-gray-500 text-left">
                      <p className="flex items-start gap-2"><FiBook className="mt-0.5 text-primary flex-shrink-0" /> {f.qualification}</p>
                      <p className="flex items-start gap-2"><FiAward className="mt-0.5 text-primary flex-shrink-0" /> {f.experience} Experience</p>
                      <p className="flex items-start gap-2"><FiMail className="mt-0.5 text-primary flex-shrink-0" /> {f.specialization}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 section-padding py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="font-heading text-2xl font-bold text-primary mb-3">Join Our Academic Team</h3>
          <p className="text-gray-500 mb-6">CCET welcomes passionate educators and industry professionals to contribute to our growing academic community.</p>
          <a href="mailto:coopcollegekondotty@gmail.com" className="btn-primary inline-block">Send Your CV</a>
        </div>
      </section>
    </>
  );
}