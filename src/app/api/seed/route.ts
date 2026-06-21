import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const defaultFaculty = [
  {
    name: "Dr. Sudheeran C",
    designation: "Principal",
    department: "Administration",
    qualification: "",
    experience: "",
    expertise: "",
    photo: "/faculty/principal.png",
    email: "",
    phone: "",
    order: 0,
  },
  {
    name: "Dr. Bindu Sheena",
    designation: "Assistant Professor & Head",
    department: "Department of English",
    qualification: "M.A. English Language & Literature, M.A. Sociology, M.Ed., PGDELT, NET, SET, Ph.D. (English Language Teaching)",
    experience: "Over 30 years of teaching experience in English Language Teaching (ELT)",
    expertise: "English Language Teaching (ELT), Communication Skills, Educational Research",
    photo: "",
    email: "",
    phone: "",
    order: 1,
  },
  {
    name: "Mr. P. E. Firozkhan",
    designation: "Assistant Professor",
    department: "Department of English",
    qualification: "M.A. English Literature, M.A. Sociology, B.Ed. (English & History), SET",
    experience: "28 Years of Teaching and Academic Leadership Experience",
    expertise: "English Language & Literature, Sociology, Educational Leadership, Student Development",
    photo: "",
    email: "",
    phone: "",
    order: 2,
  },
  {
    name: "Mrs. Priyanka Govind",
    designation: "Assistant Professor & Head",
    department: "Department of Nutrition & Dietetics",
    qualification: "M.Phil. Food & Nutrition, M.Sc. Nutrition & Dietetics (First Rank), NET",
    experience: "10+ Years of Academic, Clinical Nutrition, and Administrative Experience",
    expertise: "Clinical Nutrition, Dietetics, Food Science, Research Methodology, Curriculum Development",
    photo: "",
    email: "",
    phone: "",
    order: 3,
  },
  {
    name: "Mr. Navas P",
    designation: "Assistant Professor & Head",
    department: "Department of Hotel Management & Catering Science",
    qualification: "MBA Tourism & Travel Management, UGC-NET, Bachelor of Tourism & Hotel Management",
    experience: "Academic, Hospitality Industry, and Tourism Administration Experience",
    expertise: "Tourism Management, Hospitality Operations, Food & Beverage Service, Student Development, Career Readiness",
    photo: "",
    email: "",
    phone: "",
    order: 4,
  },
  {
    name: "Mrs. Rinya C. V.",
    designation: "Assistant Professor & Head",
    department: "Department of Artificial Intelligence",
    qualification: "M.Sc. Computer Science, UGC-NET, B.Sc. Computer Science",
    experience: "5+ Years of Teaching Experience in Computer Science and Vocational Education",
    expertise: "Computer Networking, Data Structures, DBMS, Information Security, Artificial Intelligence & Emerging Technologies",
    photo: "",
    email: "",
    phone: "",
    order: 5,
  },
  {
    name: "Mr. Jubair K",
    designation: "Librarian",
    department: "Library",
    qualification: "M.Sc. Mathematics, M.L.I.Sc., B.Ed., B.P.Ed., PGDLAN, PGDCA, PGPCA",
    experience: "20+ Years of Experience in Education, Library Management, Academic Support Services, and Information Technology Integration",
    expertise: "Library & Information Science, Educational Technology, Digital Resource Management, Academic Documentation",
    photo: "",
    email: "",
    phone: "",
    order: 6,
  },
];

const defaultMilestones = [
  { year: "1995", event: "CCET established under Kondotty Cooperative Educational Society Ltd. (Reg. No. M 497).", order: 1 },
  { year: "1995", event: "Started with Arts & Science Courses, serving students from the Malabar region.", order: 2 },
  { year: "2024", event: "Affiliation renewed with University of Calicut under CUFYUGP Regulations 2024.", order: 3 },
  { year: "2026", event: "B.Sc Artificial Intelligence, Nutrition & Dietetics, and Hotel Management launched under FYUGP. New AI lab and Food Science lab inaugurated.", order: 4 },
  { year: "2026", event: "MoUs signed with leading hospitals and industry partners. Admissions open for 2026–2027.", order: 5 },
];

const defaultCalendar = [
  { month: "June 2026", event: "Admissions Open – Management Quota", order: 1 },
  { month: "July 2026", event: "CAP Allotment – University Merit Seats", order: 2 },
  { month: "August 2026", event: "Classes Commence – Odd Semester", order: 3 },
  { month: "October 2026", event: "Internal Assessment – Mid Semester", order: 4 },
  { month: "November 2026", event: "Semester End Examinations", order: 5 },
  { month: "December 2026", event: "Even Semester Begins", order: 6 },
  { month: "March 2027", event: "Internal Assessment – Even Semester", order: 7 },
  { month: "April 2027", event: "Semester End Examinations", order: 8 },
];

const defaultFlashNews = {
  type: "flashnews",
  items: [
    "Schedule for FYUG-CAP 2026 Admission",
    "2026-27 AY – Schedule for Inter-College Transfer of Students",
    "Admissions Open – B.Sc AI, Nutrition & Dietetics, Hotel Management 2026–2027",
    "Management Quota Seats Available – Apply Now at form.svhrt.com",
  ],
};

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("ccet");

    // Seed faculty only if empty
    const facultyCount = await db.collection("faculty").countDocuments();
    if (facultyCount === 0) {
      await db.collection("faculty").insertMany(defaultFaculty);
    }

    // Seed milestones only if empty
    const milestonesCount = await db.collection("milestones").countDocuments();
    if (milestonesCount === 0) {
      await db.collection("milestones").insertMany(defaultMilestones);
    }

    // Seed calendar only if empty
    const calendarCount = await db.collection("calendar").countDocuments();
    if (calendarCount === 0) {
      await db.collection("calendar").insertMany(defaultCalendar);
    }

    // Seed flash news if missing
    const flashNews = await db.collection("settings").findOne({ type: "flashnews" });
    if (!flashNews) {
      await db.collection("settings").insertOne(defaultFlashNews);
    }

    return NextResponse.json({
      success: true,
      seeded: { faculty: facultyCount === 0, milestones: milestonesCount === 0, calendar: calendarCount === 0, flashNews: !flashNews },
    });
  } catch (error) {
    return NextResponse.json({ error: "Seed failed", detail: String(error) }, { status: 500 });
  }
}
