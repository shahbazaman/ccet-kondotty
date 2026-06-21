// Run this once: npx tsx src/scripts/seedData.ts

import clientPromise from "@/lib/mongodb";

async function seedData() {
  const client = await clientPromise;
  const db = client.db("ccet");

  // Clear existing data
  await db.collection("gallery").deleteMany({});
  await db.collection("news").deleteMany({});
  await db.collection("clubs").deleteMany({});
  await db.collection("milestones").deleteMany({});
  await db.collection("calendar").deleteMany({});
  await db.collection("faculty").deleteMany({});
  await db.collection("jobs").deleteMany({});
  await db.collection("settings").deleteMany({});

  // Seed Gallery (from your existing page)
  await db.collection("gallery").insertMany([
    { url: "https://placehold.co/600x400", title: "Campus Building", category: "Campus", order: 1 },
    { url: "https://placehold.co/600x400", title: "AI Lab", category: "Labs", order: 2 },
    { url: "https://placehold.co/600x400", title: "Kitchen Lab", category: "Labs", order: 3 },
    { url: "https://placehold.co/600x400", title: "Library", category: "Campus", order: 4 },
    { url: "https://placehold.co/600x400", title: "Annual Fest", category: "Events", order: 5 },
    { url: "https://placehold.co/600x400", title: "Students", category: "Students", order: 6 },
  ]);

  // Seed News (from homepage)
  await db.collection("news").insertMany([
    { date: "April 2026", title: "Admissions Open for 2026–2027 Academic Year", desc: "Apply now for all three B.Sc FYUGP programmes at CCET Kondotty." },
    { date: "March 2026", title: "New AI Lab Inaugurated at CCET", desc: "State-of-the-art Artificial Intelligence laboratory opened for student use." },
    { date: "February 2026", title: "MoU Signed with Leading Hospitals", desc: "CCET signs MoUs with healthcare partners for Nutrition student internships." },
    { date: "January 2026", title: "CCET Futura — Annual Tech & Cultural Fest", desc: "Students showcased innovations, culinary arts, and research at CCET Futura 2026." },
  ]);

  // Seed Clubs (from homepage)
  await db.collection("clubs").insertMany([
    { icon: "🤖", name: "AI & Coding Club" },
    { icon: "🥗", name: "Nutrition & Wellness Club" },
    { icon: "🍳", name: "Culinary Arts Club" },
    { icon: "📚", name: "Literary Forum" },
    { icon: "🌿", name: "Eco & Nature Club" },
    { icon: "🎭", name: "Cultural & Arts Forum" },
  ]);

  // Seed Milestones (from about page)
  await db.collection("milestones").insertMany([
    { year: "1995", event: "CCET established under Kondotty Cooperative Educational Society Ltd. (Reg. No. M 497)." },
    { year: "1995", event: "Started with Arts & Science Courses, serving students from the Malabar region." },
    { year: "2026", event: "B.Sc Nutrition and Dietetics programme launched under CUFYUGP Regulations 2024." },
    { year: "2026", event: "B.Sc Artificial Intelligence introduced, reflecting global tech demand." },
    { year: "2026", event: "B.Sc Hotel Management & Catering Science expanded with modern kitchen and training labs." },
    { year: "2026", event: "New AI lab and Food Science lab inaugurated; MoUs signed with leading hospitals and industry partners." },
  ]);

  // Seed Academic Calendar (from admissions page)
  await db.collection("calendar").insertMany([
    { month: "June 2026", event: "Academic Year Begins" },
    { month: "August 2026", event: "Internal Assessment" },
    { month: "September 2026", event: "Mid Semester Exams" },
    { month: "November 2026", event: "Internal Exams" },
    { month: "February 2027", event: "Model Exams" },
    { month: "March 2027", event: "Practical Exams" },
    { month: "April 2027", event: "University Examinations" },
    { month: "May 2027", event: "Summer Vacation" },
  ]);

  // Seed Faculty (placeholder)
  await db.collection("faculty").insertMany([
    { name: "Dr. John Doe", designation: "Assistant Professor", department: "Artificial Intelligence", qualification: "PhD in AI", email: "john@ccet.edu.in", phone: "+91 98765 43210", photo: "", order: 1 },
    { name: "Dr. Jane Smith", designation: "Assistant Professor", department: "Nutrition & Dietetics", qualification: "PhD in Nutrition Science", email: "jane@ccet.edu.in", phone: "+91 98765 43211", photo: "", order: 2 },
    { name: "Chef Kumar", designation: "Head Chef", department: "Hotel Management", qualification: "Diploma in Culinary Arts", email: "kumar@ccet.edu.in", phone: "+91 98765 43212", photo: "", order: 3 },
  ]);

  // Seed Contact Settings
  await db.collection("settings").insertOne({
    type: "contact",
    phone1: "+91 9605448905",
    phone2: "+91 9497588562",
    email: "coopcollegekondotty@gmail.com",
    address: "CCET Kondotty, Malappuram District, Kerala – 673638",
    whatsapp: "919497588562",
  });

  console.log("✅ Database seeded successfully!");
  process.exit(0);
}

seedData().catch(console.error);