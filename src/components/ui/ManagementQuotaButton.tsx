"use client";
import { useEffect, useState } from "react";

const FORM_LINK = "https://form.svhrt.com/6a16a958682986fcc0d14779";

export default function ManagementQuotaButton() {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(v => !v);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href={FORM_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-20 right-0 z-50 flex flex-col items-center cursor-pointer group"
      aria-label="Management Quota Admission Form"
      style={{ textDecoration: "none" }}
    >
      <div
        className="flex flex-col items-center justify-center rounded-l-xl shadow-2xl border-2 border-yellow-400 px-2 py-3 transition-all group-hover:scale-105"
        style={{
          background: "#8B0000",
          opacity: blink ? 1 : 0.35,
          transition: "opacity 0.6s ease",
          maxWidth: "72px",
        }}
      >
        <span className="text-xl mb-1">🎓</span>
        <span
          className="text-white font-bold text-center leading-tight"
          style={{ fontSize: "8px", letterSpacing: "0.03em" }}
        >
          Management
        </span>
        <span
          className="text-white font-bold text-center leading-tight"
          style={{ fontSize: "8px" }}
        >
          Quota
        </span>
        <span
          className="text-yellow-300 font-bold text-center leading-tight mt-0.5"
          style={{ fontSize: "7px" }}
        >
          Apply Now
        </span>
      </div>
    </a>
  );
}
