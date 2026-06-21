"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ManagementQuotaButton() {
  const [visible, setVisible] = useState(true);

  // Blink effect via state toggle
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(v => !v);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Link
      href="/admissions"
      className="fixed left-4 bottom-24 z-50 flex flex-col items-center gap-1 cursor-pointer"
      aria-label="Management Quota Admission"
    >
      <div
        className="bg-[#8B0000] text-white rounded-full shadow-2xl flex flex-col items-center justify-center px-3 py-2 text-center border-2 border-yellow-400 transition-opacity duration-500"
        style={{ opacity: visible ? 1 : 0.2, maxWidth: "90px" }}
      >
        <span className="text-lg">🎓</span>
        <span className="text-[9px] font-bold uppercase leading-tight mt-0.5">Management Quota</span>
        <span className="text-[8px] font-semibold text-yellow-300 leading-tight">Admission</span>
      </div>
    </Link>
  );
}
