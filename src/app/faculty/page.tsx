"use client";
import { FiMail, FiBook, FiAward } from "react-icons/fi";
import { faculty } from "@/data/faculty";
import SectionHeading from "@/components/ui/SectionHeading";
import { useEffect, useState } from "react";
import Animate from "@/components/ui/Animate";

const departments = ["All", "AI", "Nutrition", "Hotel"];

export default function FacultyPage() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    fetch("/api/faculty")
      .then(res => res.json())
      .then(data => setFaculty(data))
      .catch(console.error);
  }, []);
  return (
    <>
      <section className="bg-linear-to-br from-primary-dark to-primary text-white section-padding py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-[#f5a623] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Our Team</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Meet Our Faculty</h1>
          <p className="text-blue-200 text-lg">Experienced educators and industry professionals dedicated to student success.</p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <Animate animation="fade-up">
            <SectionHeading badge="Our Team" title="Meet Our Faculty" />
          </Animate>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {faculty.length > 0 ? faculty.map((member: any, i: number) => (
              <Animate key={member._id} animation="fade-up" delay={i * 80}>
                <div className="card p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden flex items-center justify-center">
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-3xl text-gray-400">👤</span>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-xs text-gray-600 mb-1">{member.designation}</p>
                  <p className="text-xs text-accent font-medium mb-2">{member.department}</p>
                  <p className="text-xs text-gray-500">{member.qualification}</p>
                  {member.email && <p className="text-xs text-gray-500 mt-2">{member.email}</p>}
                  {member.phone && <p className="text-xs text-gray-500">{member.phone}</p>}
                </div>
              </Animate>
            )) : (
              <p className="text-gray-400 col-span-4 text-center py-12">Loading faculty...</p>
            )}
          </div>
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