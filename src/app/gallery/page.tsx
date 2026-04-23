import SectionHeading from "@/components/ui/SectionHeading";

const galleryItems = [
  { label: "AI Lab – Students in action", bg: "from-blue-400 to-indigo-600" },
  { label: "Training Kitchen – Culinary session", bg: "from-amber-400 to-orange-600" },
  { label: "Nutrition Lab – Food analysis", bg: "from-green-400 to-emerald-600" },
  { label: "Campus – Aerial view", bg: "from-sky-400 to-blue-600" },
  { label: "Annual Day Celebrations", bg: "from-pink-400 to-rose-600" },
  { label: "Sports Day – Athletics Meet", bg: "from-teal-400 to-cyan-600" },
  { label: "Seminar – Industry Expert Talk", bg: "from-violet-400 to-purple-600" },
  { label: "Student Cultural Fest", bg: "from-yellow-400 to-amber-600" },
  { label: "Library – Reading Room", bg: "from-slate-400 to-gray-600" },
  { label: "Graduation Day 2024", bg: "from-red-400 to-rose-600" },
  { label: "Community Nutrition Outreach", bg: "from-lime-400 to-green-600" },
  { label: "Hotel Management – Service Training", bg: "from-orange-400 to-amber-700" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-linear-to-br from-primary-dark to-primary text-white section-padding py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Gallery</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Campus Life at CCET</h1>
          <p className="text-blue-200 text-lg">A glimpse into the vibrant academic and co-curricular life at Co-Operative College of Education & Technology.</p>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading badge="Photo Gallery" title="Moments from CCET" subtitle="Academic events, campus life, cultural fests, sports and more." />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`bg-linear-to-br ${item.bg} rounded-2xl aspect-square flex items-end p-4 cursor-pointer hover:scale-105 transition-transform duration-200 shadow-md`}
              >
                <span className="text-white text-xs font-semibold bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">{item.label}</span>
              </div>
            ))}
          </div>
          {/* <p className="text-center text-sm text-gray-400 mt-8">
            📸 Replace gradient placeholders with actual campus photos in <code className="bg-gray-100 px-1 rounded">public/images/gallery/</code>
          </p> */}
        </div>
      </section>
    </>
  );
}