"use client";
import { useEffect, useState } from "react";

const defaultNews = [
  "Schedule for FYUG-CAP 2026 Admission",
  "2026-27 AY – Schedule for Inter-College Transfer of Students",
  "Admissions Open for B.Sc AI, Nutrition & Dietetics, Hotel Management 2026–2027",
  "Management Quota Seats Available – Apply Now",
];

export default function FlashNews() {
  const [newsItems, setNewsItems] = useState<string[]>(defaultNews);

  useEffect(() => {
    fetch("/api/news")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setNewsItems(data.map((n: any) => n.title));
        }
      })
      .catch(() => {}); // fallback to default
  }, []);

  const marqueeText = newsItems.join("   |   ");

  return (
    <div className="flex items-stretch bg-gray-900 text-white overflow-hidden" style={{ minHeight: "36px" }}>
      {/* Heading badge */}
      <div className="shrink-0 bg-[#8B0000] px-4 flex items-center z-10">
        <span className="text-white text-xs font-bold uppercase tracking-widest whitespace-nowrap">
          Flash News
        </span>
      </div>

      {/* Scrolling text */}
      <div className="relative flex-1 overflow-hidden flex items-center">
        <div className="flash-news-marquee whitespace-nowrap text-[#c0392b] text-sm font-semibold">
          {marqueeText}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{marqueeText}
        </div>
      </div>

      <style jsx>{`
        .flash-news-marquee {
          display: inline-block;
          animation: flashScroll 30s linear infinite;
        }
        @keyframes flashScroll {
          0%   { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
        .flash-news-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
