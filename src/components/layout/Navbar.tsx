"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiPhone, FiMail, FiChevronDown } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Admissions", href: "/admissions" },
  { label: "Faculty", href: "/faculty" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary-dark text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span>Affiliated to University of Calicut | Under Kondotty Cooperative Educational Society Ltd.</span>
          <div className="flex gap-6 items-center">
            <a href="tel:+919605448905" className="flex items-center gap-1 hover:text-accent transition-colors">
              <FiPhone size={12} /> +91 9605448905
            </a>
            <a href="mailto:coopcollegekondotty@gmail.com" className="flex items-center gap-1 hover:text-accent transition-colors">
              <FiMail size={12} /> coopcollegekondotty@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="CCET Logo" width={60} height={60} className="rounded-full" loading="eager" style={{ height: "auto" }}/>
              <div className="hidden sm:block">
                <p className="font-heading font-bold text-primary text-sm leading-tight">
                  Co-Operative College of
                </p>
                <p className="font-heading font-bold text-primary text-sm leading-tight">
                  Education & Technology
                </p>
                <p className="text-accent text-xs font-semibold">CCET, Kondotty</p>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-150 ${
                    pathname === link.href
                      ? "text-primary-light font-bold border-b-2 border-accent"
                      : "text-gray-700 hover:text-primary hover:bg-blue-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Admin/Careers Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="px-3 py-2 text-sm font-medium rounded-md transition-all duration-150 text-gray-700 hover:text-primary hover:bg-blue-50 flex items-center gap-1"
                >
                  More <FiChevronDown className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <Link
                      href="/careers"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Careers
                    </Link>
                    <Link
                      href="/admin/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Admin Login
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/admissions" className="ml-3 btn-primary text-sm py-2! px-4!">
                Apply Now
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded-md text-primary"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-md text-sm font-medium ${
                    pathname === link.href ? "bg-blue-50 text-primary font-bold" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/careers"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Careers
              </Link>
              <Link
                href="/admin/login"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Admin Login
              </Link>
              <Link
                href="/admissions"
                onClick={() => setIsOpen(false)}
                className="block mt-2 btn-primary text-center text-sm"
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}