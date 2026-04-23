import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-3">
            <Image src="/logo.png" alt="CCET Logo" width={44} height={44} className="rounded-full" loading="eager" style={{ height: "auto" }} />
            <div>
              <p className="font-heading font-bold text-white text-sm leading-tight">CCET Kondotty</p>
              <p className="text-accent text-xs">Education & Technology</p>
            </div>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed mb-4">
            Co-Operative College of Education and Technology — affiliated to the
            University of Calicut. Nurturing talent through co-operation and knowledge.
          </p>
          <div className="flex gap-3">
            <a href="https://facebook.com" aria-label="Follow CCET on Facebook" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors">
              <FaFacebook size={18} />
            </a>
            <a href="https://instagram.com" aria-label="Follow CCET on Instagram" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors">
              <FaInstagram size={18} />
            </a>
            <a href="https://youtube.com" aria-label="CCET YouTube Channel" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors">
              <FaYoutube size={18} />
            </a>
            <a href="https://wa.me/919605448905" aria-label="Chat with CCET on WhatsApp" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors">
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-white mb-3 text-sm">Quick Links</h4>
          <ul className="space-y-1.5 text-xs text-gray-400">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Courses", "/courses"],
              ["Admissions", "/admissions"],
              ["Faculty", "/faculty"],
              ["Facilities", "/facilities"],
              ["Gallery", "/gallery"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-accent transition-colors">
                  → {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programmes */}
        <div>
          <h4 className="font-heading font-bold text-white mb-3 text-sm">Programmes</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>
              <Link href="/courses/bsc-artificial-intelligence" className="hover:text-accent transition-colors">
                B.Sc Artificial Intelligence
              </Link>
            </li>
            <li>
              <Link href="/courses/bsc-nutrition-dietetics" className="hover:text-accent transition-colors">
                B.Sc Nutrition & Dietetics
              </Link>
            </li>
            <li>
              <Link href="/courses/bsc-hotel-management" className="hover:text-accent transition-colors">
                B.Sc Hotel Management & Catering Science
              </Link>
            </li>
            <li className="text-gray-500 pt-1">
              Academic Year 2026–2027<br />Admissions Open
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-2 md:col-span-1">
          <h4 className="font-heading font-bold text-white mb-3 text-sm">Contact Us</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li className="flex gap-2 items-start">
              <FiMapPin className="mt-0.5 text-accent shrink-0" />
              <span>CCET Campus, Kondotty, Malappuram District, Kerala – 673 638</span>
            </li>
            <li className="flex gap-2 items-center">
              <FiPhone className="text-accent shrink-0" />
              <a href="tel:+919605448905" className="hover:text-accent transition-colors">
                +91 9605448905
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FiPhone className="text-accent shrink-0" />
              <a href="tel:+919497588562" className="hover:text-accent transition-colors">
                +91 9497588562
              </a>
            </li>
            <li className="flex gap-2 items-start">
              <FiMail className="text-accent shrink-0 mt-0.5" />
              <a href="mailto:coopcollegekondotty@gmail.com" className="hover:text-accent transition-colors break-all">
                coopcollegekondotty@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-3 text-center text-gray-500 text-xs px-4">
        © {year} CCET Kondotty — Co-Operative College of Education & Technology. All rights reserved.
        <span className="mx-1.5">|</span>
        Affiliated to University of Calicut
      </div>
    </footer>
  );
}