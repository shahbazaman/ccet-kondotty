import SectionHeading from "@/components/ui/SectionHeading";
import Animate from "@/components/ui/Animate";

const facultyData = [
  {
    name: "Dr. Bindu Sheena",
    designation: "Assistant Professor & Head, Department of English",
    department: "English",
    qualification: "M.A. (English), M.A. (Sociology), M.Ed., SET, NET, Ph.D (ELT) – Kannur University, PGDELT – RIE Bengaluru",
    bio: "Academician in English Language Teaching with extensive experience. Areas of interest include ELT, Educational Research, and Communication Skills. Has presented research papers at numerous National and International Seminars and published in reputed academic journals.",
    icon: "👩‍🏫",
  },
  {
    name: "Mr. P. E. Firozkhan",
    designation: "Assistant Professor, Department of English",
    department: "English",
    qualification: "M.A. (English Literature), M.A. (Sociology), B.Ed. (English & History), SET",
    bio: "Highly experienced educator with nearly three decades of service. Has held leadership positions including Principal, Vice Principal, and Head of Departments. Expertise in English Language & Literature, Sociology, and educational leadership.",
    icon: "👨‍🏫",
  },
  {
    name: "Mrs. Priyanka Govind",
    designation: "Assistant Professor & Head, Department of Nutrition & Dietetics",
    department: "Nutrition & Dietetics",
    qualification: "M.Phil (Food & Nutrition), M.Sc Nutrition & Dietetics – First Rank, Bharathiar University, NET",
    bio: "Over 10 years of experience in higher education, clinical nutrition, and hospital management. Life Member of IDA. Active member of IAPEN (India) and CNF Kerala. Has coordinated international conferences and contributed significantly to curriculum design.",
    icon: "👩‍🔬",
  },
  {
    name: "Mr. Navas P",
    designation: "Assistant Professor & Head, Department of Hotel Management & Catering Science",
    department: "Hotel Management & Catering Science",
    qualification: "MBA (Tourism & Travel Management) – Central University of Jammu, B.Tourism & Hotel Management – University of Calicut, UGC-NET",
    bio: "UGC-NET Qualified with a blend of teaching, industry, and public-sector experience. Previously served as Tourism Information Assistant, Ministry of Tourism, Govt. of Kerala, at Calicut International Airport. Professional training at Taj Green Cove Resort & Spa.",
    icon: "👨‍💼",
  },
  {
    name: "Mrs. Rinya C V",
    designation: "Assistant Professor & Head, Department of Artificial Intelligence",
    department: "Artificial Intelligence",
    qualification: "M.Sc Computer Science – Central University of Kerala, B.Sc Computer Science – Kannur University, UGC-NET",
    bio: "Over five years of teaching experience at Higher Secondary and Vocational Higher Secondary levels. Research contributions include Periodic Pattern Mining in Time Series and Time Series Forecasting Using Wavelet Decomposition. Areas of interest: Networking, OS, Data Structures, DBMS, Digital Electronics, Information Security.",
    icon: "👩‍💻",
  },
  {
    name: "Mr. Jubair K",
    designation: "Librarian",
    department: "Library & Information Science",
    qualification: "M.Sc Mathematics, B.L.I.Sc., M.L.I.Sc., B.Ed., B.P.Ed., PGDLAN (University of Hyderabad), PGDCA, PGPCA (NIT Calicut / IHRD)",
    bio: "Over two decades of experience in education, academic support, and information management. Expertise in library administration, automation, digital documentation, and educational technology. Committed to a modern, technology-driven learning environment.",
    icon: "📚",
  },
];

export default function FacultyPage() {
  return (
    <>
      <section className="bg-linear-to-br from-primary-dark to-primary text-white section-padding py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <Animate animation="fade-up">
            <span className="inline-block bg-[#f5a623] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Our Team</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Meet Our Faculty</h1>
            <p className="text-blue-200 text-lg">Experienced educators and industry professionals dedicated to student success.</p>
          </Animate>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <Animate animation="fade-up">
            <SectionHeading badge="Our Team" title="Faculty Profiles" />
          </Animate>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyData.map((member, i) => (
              <Animate key={member.name} animation="fade-up" delay={i * 80}>
                <div className="card p-6 h-full flex flex-col">
                  <div className="w-20 h-20 rounded-full bg-blue-50 border-2 border-primary/20 mx-auto mb-4 flex items-center justify-center text-4xl">
                    {member.icon}
                  </div>
                  <h3 className="font-heading font-bold text-primary text-center mb-1">{member.name}</h3>
                  <p className="text-xs text-gray-600 text-center mb-1 leading-snug">{member.designation}</p>
                  <p className="text-xs text-accent font-semibold text-center mb-3">{member.department}</p>
                  <p className="text-xs text-gray-500 text-center mb-3 italic leading-relaxed">{member.qualification}</p>
                  <p className="text-xs text-gray-600 leading-relaxed mt-auto">{member.bio}</p>
                </div>
              </Animate>
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
