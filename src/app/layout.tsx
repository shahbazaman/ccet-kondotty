import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import FlashNews from "@/components/ui/FlashNews";
import ManagementQuotaButton from "@/components/ui/ManagementQuotaButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SessionProvider from "@/components/SessionProvider";

const BASE_URL = "https://www.kondottycc.edu.in"; // ← change to your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "CCET Kondotty | Co-Operative College of Education & Technology",
    template: "%s | CCET Kondotty",
  },
  description:
    "Co-Operative College of Education & Technology, Kondotty — Affiliated to University of Calicut. Offering B.Sc Honours in Artificial Intelligence, Nutrition & Dietetics, and Hotel Management under CUFYUGP 2024. Admissions open for 2026–2027.",
  keywords: [
    "CCET Kondotty",
    "Co-Operative College Kondotty",
    "B.Sc Artificial Intelligence Kerala",
    "B.Sc Nutrition Dietetics Kondotty",
    "Hotel Management College Malappuram",
    "University of Calicut affiliated college",
    "FYUGP college Kerala",
    "CUFYUGP 2024",
    "Management quota admission Kerala",
    "Kondotty college admission 2026",
  ],
  authors: [{ name: "CCET Kondotty" }],
  creator: "CCET Kondotty",
  publisher: "Co-Operative College of Education & Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "CCET Kondotty | Co-Operative College of Education & Technology",
    description:
      "Affiliated to University of Calicut. B.Sc AI, Nutrition & Dietetics, Hotel Management. Admissions open 2026–2027.",
    url: BASE_URL,
    siteName: "CCET Kondotty",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/college-building.jpg",
        width: 1200,
        height: 630,
        alt: "CCET Kondotty Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CCET Kondotty",
    description: "Co-Operative College of Education & Technology, Kondotty, Kerala.",
    images: ["/college-building.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    // Add your Google Search Console verification code here after you verify
    google: "946f6f5f718b5f2b",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Structured data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollegeOrUniversity",
              "name": "Co-Operative College of Education & Technology",
              "alternateName": "CCET Kondotty",
              "url": BASE_URL,
              "logo": `${BASE_URL}/logo.png`,
              "image": `${BASE_URL}/college-building.jpg`,
              "description": "CCET Kondotty offers B.Sc Honours programmes in Artificial Intelligence, Nutrition & Dietetics, and Hotel Management, affiliated to University of Calicut.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kondotty",
                "addressLocality": "Malappuram",
                "addressRegion": "Kerala",
                "postalCode": "673638",
                "addressCountry": "IN",
              },
              "telephone": "+91-9497588562",
              "email": "coopcollegekondotty@gmail.com",
              "sameAs": [],
            }),
          }}
        />
      </head>
      <body>
        <SessionProvider>
          <Navbar />
          <FlashNews />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
          <ManagementQuotaButton />
          <ToastContainer position="top-center" autoClose={3000} />
        </SessionProvider>
      </body>
    </html>
  );
}
