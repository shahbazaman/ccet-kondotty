"use client";
import { useEffect, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const staticFaculty = [
  {
    _id: "0",
    name: "Dr. Sudheeran C",
    designation: "Principal",
    department: "Administration",
    qualification: "",
    experience: "",
    expertise: "",
    photo: "/faculty/principal.png",
  },
  {
    _id: "1",
    name: "Dr. Bindu Sheena",
    designation: "Assistant Professor & Head",
    department: "Department of English",
    qualification: "M.A. English Language & Literature, M.A. Sociology, M.Ed., PGDELT, NET, SET, Ph.D. (ELT)",
    experience: "Over 30 years of teaching experience",
    expertise: "English Language Teaching (ELT), Communication Skills, Educational Research",
    photo: "/faculty/bindu-sheena.png",
  },
  {
    _id: "2",
    name: "Mr. P. E. Firozkhan",
    designation: "Assistant Professor",
    department: "Department of English",
    qualification: "M.A. English Literature, M.A. Sociology, B.Ed. (English & History), SET",
    experience: "28 Years of Teaching and Academic Leadership Experience",
    expertise: "English Language & Literature, Sociology, Educational Leadership",
    photo: "/faculty/firozkhan.png",
  },
  {
    _id: "3",
    name: "Mrs. Priyanka Govind",
    designation: "Assistant Professor & Head",
    department: "Department of Nutrition & Dietetics",
    qualification: "M.Phil. Food & Nutrition, M.Sc. Nutrition & Dietetics (First Rank), NET",
    experience: "10+ Years of Academic, Clinical, and Administrative Experience",
    expertise: "Clinical Nutrition, Dietetics, Food Science, Research Methodology",
    photo: "/faculty/priyanka-govind.png",
  },
  {
    _id: "4",
    name: "Mr. Navas P",
    designation: "Assistant Professor & Head",
    department: "Department of Hotel Management & Catering Science",
    qualification: "MBA Tourism & Travel Management, UGC-NET, B.Tourism & Hotel Management",
    experience: "Academic, Hospitality Industry, and Tourism Administration Experience",
    expertise: "Tourism Management, Hospitality Operations, F&B Service, Career Readiness",
    photo: "/faculty/navas-p.png",
  },
  {
    _id: "5",
    name: "Mrs. Rinya C. V.",
    designation: "Assistant Professor & Head",
    department: "Department of Artificial Intelligence",
    qualification: "M.Sc. Computer Science, UGC-NET, B.Sc. Computer Science",
    experience: "5+ Years of Teaching Experience in Computer Science",
    expertise: "Computer Networking, Data Structures, DBMS, Information Security, AI",
    photo: "/faculty/rinya-cv.png",
  },
  {
    _id: "6",
    name: "Mr. Jubair K",
    designation: "Librarian",
    department: "Library",
    qualification: "M.Sc. Mathematics, M.L.I.Sc., B.Ed., B.P.Ed., PGDLAN, PGDCA, PGPCA",
    experience: "20+ Years of Experience in Education, Academic and Library Management",
    expertise: "Library & Information Science, Educational Technology, Digital Resource Management",
    photo: "/faculty/jubair-k.png",
  },
];

const deptColors: Record<string, string> = {
  "Administration": "bg-red-100 text-red-800",       // ← add this line
  "Department of English": "bg-blue-100 text-blue-800",
  "Department of Nutrition & Dietetics": "bg-green-100 text-green-800",
  "Department of Hotel Management & Catering Science": "bg-amber-100 text-amber-800",
  "Department of Artificial Intelligence": "bg-indigo-100 text-indigo-800",
  "Library": "bg-gray-100 text-gray-700",
};

export default function FacultyPage() {
  const [facultyList, setFacultyList] = useState<any[]>(staticFaculty);

  useEffect(() => {
    fetch("/api/faculty")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) setFacultyList(data);
      })
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

      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading badge="Our Team" title="Faculty & Staff" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyList.map((member: any) => (
              <div key={member._id} className="rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 bg-white flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-light mx-auto mb-4 overflow-hidden flex items-center justify-center text-3xl">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span>👤</span>
                  )}
                </div>
                <h3 className="font-heading font-bold text-primary text-base mb-1">{member.name}</h3>
                <p className="text-xs text-gray-600 mb-1">{member.designation}</p>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full mb-3 ${deptColors[member.department] || "bg-gray-100 text-gray-700"}`}>
                  {member.department}
                </span>
                <p className="text-xs text-gray-500 mb-2 leading-relaxed">{member.qualification}</p>
                {(member.experience || member.expertise) && (
                  <div className="mt-2 pt-2 border-t border-gray-100 w-full text-left space-y-1">
                    {member.experience && <p className="text-xs text-gray-500"><span className="font-semibold text-gray-600">Experience:</span> {member.experience}</p>}
                    {member.expertise && <p className="text-xs text-gray-500"><span className="font-semibold text-gray-600">Expertise:</span> {member.expertise}</p>}
                  </div>
                )}
                {member.email && <p className="text-xs text-gray-400 mt-2">{member.email}</p>}
              </div>
            ))}
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
