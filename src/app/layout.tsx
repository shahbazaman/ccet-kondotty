import type { Metadata } from "next";
import "./globals.css"; // adjust path if needed — this assumes globals.css is in app/
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SessionProvider from "@/components/SessionProvider";
export const metadata: Metadata = {
  title: "CCET Kondotty | Co-Operative College of Education & Technology",
  description:
    "Affiliated to University of Calicut. Offering B.Sc in Artificial Intelligence, Nutrition & Dietetics, and Hotel Management. Admissions open for 2026–2027.",
  keywords: "CCET Kondotty, Cooperative College, B.Sc AI, Nutrition Dietetics, Hotel Management, University of Calicut",
  openGraph: {
    title: "CCET Kondotty",
    description: "Co-Operative College of Education and Technology, Kondotty",
    url: "https://ccet-kondotty.ac.in",
    siteName: "CCET Kondotty",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>          
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
          {children}
          <ToastContainer position="top-center" autoClose={3000} />
        </SessionProvider>
      </body>
    </html>
  );
}
