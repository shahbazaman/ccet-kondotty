"use client";
import { useState, useEffect } from "react";
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
  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("/api/gallery")
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(console.error);
  }, []);

  const categories = ["All", ...new Set(images.map((img: any) => img.category))];
  const filtered = filter === "All" ? images : images.filter((img: any) => img.category === filter);

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
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat: string) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.length > 0 ? filtered.map((img: any, i: number) => (
              <Animate key={img._id} animation="fade-up" delay={i * 50}>
                <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                </div>
              </Animate>
            )) : (
              <p className="text-gray-400 col-span-4 text-center py-12">Loading gallery...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}