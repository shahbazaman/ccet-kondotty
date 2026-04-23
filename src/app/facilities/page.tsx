import SectionHeading from "@/components/ui/SectionHeading";
import { FiMonitor, FiBook, FiBriefcase, FiHome, FiSun, FiWifi } from "react-icons/fi";
import { FaFlask, FaUtensils, FaBus } from "react-icons/fa";

const facilities = [
  { icon: <FiMonitor size={32} className="text-primary" />, title: "AI & Computing Labs", desc: "High-performance computing labs with the latest hardware and software environments including Python, TensorFlow, PyTorch, Jupyter Notebooks, and cloud computing access. Students benefit from a 1:1 computer-to-student ratio during practical sessions." },
  { icon: <FaFlask size={32} className="text-primary" />, title: "Food Science & Nutrition Lab", desc: "A fully equipped food science and dietetics laboratory with advanced analytical instruments for nutritional composition analysis, food safety testing, and therapeutic diet preparation — aligned with university curriculum requirements." },
  { icon: <FaUtensils size={32} className="text-primary" />, title: "Training Kitchen", desc: "An industry-standard culinary training kitchen with professional-grade ovens, ranges, and workstations. Students in Hotel Management practice food production, baking, patisserie, and cuisine of various culinary traditions." },
  { icon: <FiBook size={32} className="text-primary" />, title: "Library & Digital Resources", desc: "A comprehensive library housing 10,000+ physical books, journals, and reference materials across all three disciplines. Digital access to e-journals, academic databases, and NPTEL courses is available to all enrolled students." },
  { icon: <FiBriefcase size={32} className="text-primary" />, title: "Placement & Career Cell", desc: "A dedicated placement and career development cell that connects students with leading employers, organises campus recruitment drives, hosts industry expert talks, and provides career counselling and CV-building workshops." },
  { icon: <FiHome size={32} className="text-primary" />, title: "Seminar & Conference Hall", desc: "A fully equipped seminar hall with audio-visual facilities, accommodating 200+ participants, regularly used for guest lectures, student presentations, symposia and inter-college events." },
  { icon: <FiSun size={32} className="text-primary" />, title: "Sports & Recreation", desc: "Well-maintained outdoor sports ground and indoor games facilities including badminton, table tennis and carom, encouraging students to maintain a healthy, active lifestyle alongside academics." },
  { icon: <FaUtensils size={32} className="text-primary" />, title: "Canteen & Dining", desc: "A clean, hygienic campus canteen offering nutritious meals, snacks and beverages at subsidised rates. The canteen supports the practical learning of Nutrition and Hotel Management students." },
   { icon: <FiHome size={32} className="text-primary" />, title: "Hostel Facilities", desc: "Modern, comfortable hostels providing a safe and conducive living environment for inter state students, with essential amenities and facilities." },
  { icon: <FiWifi size={32} className="text-primary" />, title: "Wi-Fi Campus", desc: "The entire CCET campus is covered by high-speed wireless internet, enabling seamless access to digital learning resources, research databases, and online academic portals." },
];

export default function FacilitiesPage() {
  return (
    <>
      <section className="bg-linear-to-br from-primary-dark to-primary text-white section-padding py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Campus</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">World-Class Facilities</h1>
          <p className="text-blue-200 text-lg">State-of-the-art infrastructure and resources to support outstanding academic and personal development.</p>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading badge="Infrastructure" title="Campus Facilities" subtitle="Every facility at CCET is designed with one purpose: to help students learn, grow and excel." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map(f => (
              <div key={f.title} className="card border border-gray-100 p-7">
                <div className="p-3 bg-blue-50 rounded-xl w-fit mb-4">{f.icon}</div>
                <h3 className="font-heading font-bold text-primary mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-white section-padding py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="font-heading text-2xl font-bold mb-3">Visit Our Campus</h3>
          <p className="text-blue-200 mb-6">We welcome prospective students and parents to visit the CCET campus and experience our facilities in person. Contact us to schedule a campus tour.</p>
          <a href="/contact" className="btn-primary inline-block">Schedule a Visit</a>
        </div>
      </section>
    </>
  );
}