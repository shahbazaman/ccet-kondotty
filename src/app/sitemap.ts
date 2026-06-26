import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.kondottycc.edu.in"; // ← change to your actual domain

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/courses`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/courses/artificial-intelligence`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/courses/nutrition-dietetics`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/courses/hotel-management`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/admissions`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/faculty`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/gallery`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
