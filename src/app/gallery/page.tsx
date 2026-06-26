"use client";
import { useState, useEffect } from "react";
import Animate from "@/components/ui/Animate";
import { FiX, FiPlay, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const isVideo = (url: string) =>
  url?.match(/\.(mp4|webm|ogg|mov|avi)$/i) || url?.includes("/video/upload/");

export default function GalleryPage() {
  const [items, setItems] = useState<any[]>([]);
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<{ index: number } | null>(null);

  useEffect(() => {
    fetch("/api/gallery")
      .then(res => res.json())
      .then(data => { if (Array.isArray(data) && data.length > 0) setItems(data); })
      .catch(console.error);
  }, []);

  const categories = ["All", ...Array.from(new Set(items.map((img: any) => img.category).filter(Boolean)))];
  const filtered = filter === "All" ? items : items.filter((img: any) => img.category === filter);

  const openLightbox = (index: number) => setLightbox({ index });
  const closeLightbox = () => setLightbox(null);

  const prev = () => {
    if (!lightbox) return;
    setLightbox({ index: (lightbox.index - 1 + filtered.length) % filtered.length });
  };

  const next = () => {
    if (!lightbox) return;
    setLightbox({ index: (lightbox.index + 1) % filtered.length });
  };

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, filtered]);

  const currentItem = lightbox !== null ? filtered[lightbox.index] : null;

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
          {categories.length > 1 && (
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((cat: string) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filter === cat ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.length > 0 ? filtered.map((item: any, i: number) => (
              <Animate key={item._id} animation="fade-up" delay={i * 50}>
                <div
                  className="aspect-square bg-gray-100 rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer relative group"
                  onClick={() => openLightbox(i)}
                >
                  {isVideo(item.url) ? (
                    <>
                      {/* Video thumbnail — show first frame via video element */}
                      <video
                        src={item.url}
                        className="w-full h-full object-cover"
                        muted
                        preload="metadata"
                      />
                      {/* Play icon overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                          <FiPlay size={20} className="text-primary ml-1" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <img src={item.url} alt={item.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end">
                        {item.title && (
                          <p className="text-white text-xs font-medium px-3 py-2 bg-linear-to-t from-black/60 to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.title}
                          </p>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </Animate>
            )) : (
              <p className="text-gray-400 col-span-4 text-center py-12">No gallery items yet. Admin can add photos and videos from the dashboard.</p>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && currentItem && (
        <div
          className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            aria-label="Close lightbox"
            title="Close"
          >
            <FiX size={20} />
          </button>

          {/* Prev */}
          {filtered.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Previous item"
              title="Previous"
            >
              <FiChevronLeft size={24} />
            </button>
          )}

          {/* Media */}
          <div
            className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {isVideo(currentItem.url) ? (
              <video
                src={currentItem.url}
                controls
                autoPlay
                className="max-h-[75vh] max-w-full rounded-xl shadow-2xl"
              />
            ) : (
              <img
                src={currentItem.url}
                alt={currentItem.title}
                className="max-h-[75vh] max-w-full rounded-xl shadow-2xl object-contain"
              />
            )}
            {currentItem.title && (
              <p className="text-white text-sm mt-4 text-center font-medium">{currentItem.title}</p>
            )}
            {currentItem.category && (
              <span className="text-gray-400 text-xs mt-1">{currentItem.category}</span>
            )}
            <p className="text-gray-500 text-xs mt-3">
              {lightbox.index + 1} / {filtered.length}
            </p>
          </div>

          {/* Next */}
          {filtered.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Next item"
              title="Next"
            >
              <FiChevronRight size={24} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
