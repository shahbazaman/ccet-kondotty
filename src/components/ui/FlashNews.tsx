"use client";
import { useEffect, useState } from "react";

const defaultItems = [
  "Schedule for FYUG-CAP 2026 Admission",
  "2026-27 AY – Schedule for Inter-College Transfer of Students",
  "Admissions Open for B.Sc AI, Nutrition & Dietetics, Hotel Management 2026–2027",
  "Management Quota Seats Available – Apply Now",
];

export default function FlashNews() {
  const [items, setItems] = useState<string[]>(defaultItems);

  useEffect(() => {
    fetch("/api/flash-news")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.items) && data.items.length > 0) {
          setItems(data.items);
        }
      })
      .catch(() => {});
  }, []);

  const marqueeText = items.join("   |   ");

  return (
    <div
      className="flex items-stretch overflow-hidden"
      style={{ minHeight: "44px", background: "#1a1a2e" }}
    >
      {/* Label */}
      <div
        className="shrink-0 flex items-center px-5 z-10"
        style={{ background: "#8B0000", minWidth: "120px" }}
      >
        <span className="text-white text-xs font-bold uppercase tracking-widest whitespace-nowrap">
          📢 Flash News
        </span>
      </div>

      {/* Scrolling area */}
      <div className="relative flex-1 overflow-hidden flex items-center">
        <div
          className="flash-ticker whitespace-nowrap text-sm font-semibold"
          style={{ color: "#f5a623" }}
        >
          {marqueeText}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{marqueeText}
        </div>
      </div>

      <style jsx>{`
        .flash-ticker {
          display: inline-block;
          animation: tickerScroll 45s linear infinite;
        }
        .flash-ticker:hover {
          animation-play-state: paused;
        }
        @keyframes tickerScroll {
          0%   { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
