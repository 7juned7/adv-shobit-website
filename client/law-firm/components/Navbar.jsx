"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SERVICES = [
  { name: "Corporate Law", slug: "corporate-law" },
  { name: "Commercial Litigation", slug: "commercial-litigation" },
  { name: "Property Law", slug: "property-law" },
  { name: "Asset Protection", slug: "asset-protection" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // 🔥 Scroll detection
 useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 60);
  };

  handleScroll(); // ✅ THIS LINE FIXES REFRESH ISSUE

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // 🔥 Close dropdown on outside click
  useEffect(() => {
    const handleClick = () => setOpen(false);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center">
        
        {/* NAV */}
        <nav
          className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            scrolled
              ? "mt-4 w-[90%] px-4 py-2 rounded-2xl bg-gradient-to-br from-[#0f172a]/80 via-[#1e293b]/80 to-black/80 backdrop-blur-xl border border-white/10 shadow-xl"
              : "w-full px-8 py-2 bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between">
            
            {/* LOGO */}
         <Link href="/" className="flex items-center">
  <Image
  src="/images/logo/logo.png"
  alt="Anurag Narain & Associates"
  width={100}
  height={100}
  priority
  className={`object-contain w-auto transition-all duration-500 ${
    scrolled ? " h-18 md:h-24" : " h-24 md:h-40"
  }`}
/>
</Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex flex-col items-start text-sm font-medium text-[color:var(--color-gold)]">
              
              {/* TOP NAV ROW */}
              <div className="flex items-center gap-10">
                <a href="about" className="nav-link">About</a>

               <div
                className="relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <button className="nav-link flex items-center gap-1">
                  <a href="services" className="nav-link">Service</a>
 <span className="text-xs">▾</span>
                </button>

                <div
                  className={`absolute top-12 left-0 w-72 bg-navy rounded-xl shadow-2xl border border-white/10 transition-all duration-300 ${
                    open
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="p-2">
                    {SERVICES.map((s, i) => (
  <Link
    key={i}
    href={`/services/${s.slug}`}
    className="block px-4 py-3 text-sm text-white hover:bg-white/10 hover:text-[color:var(--color-gold)] rounded-lg transition"
  >
    {s.name}   {/* ✅ FIX */}
  </Link>
))}
                  </div>
                </div>
              </div>

                <a href="/team" className="nav-link">Team</a>
                <a href="/contact" className="nav-link">Contact</a>
              </div>

             
            </div>

            {/* CTA */}
          <a
  href="https://wa.me/918009099837"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden lg:inline-block bg-gold text-black px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition"
>
  Book Consultation
</a>

            {/* HAMBURGER */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
             className="lg:hidden flex flex-col flex-col gap-1.5 z-50"
              aria-label="Toggle Menu"
            >
              <span className={`w-6 h-[2px] bg-[color:var(--color-gold)] transition-all ${mobileMenu ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-[2px] bg-[color:var(--color-gold)] transition-all ${mobileMenu ? "opacity-0" : ""}`} />
              <span className={`w-6 h-[2px] bg-[color:var(--color-gold)] transition-all ${mobileMenu ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* 📱 MOBILE MENU (CONNECTED DROPDOWN STYLE) */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 z-40 overflow-hidden transition-all duration-500 ${
          mobileMenu ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
        } ${
          scrolled ? "w-[90%] top-[70px]" : "w-full top-[0px]"
        }`}
      >
        <div className="bg-gradient-to-br pt-30 from-[#0f172a]/95 via-[#1e293b]/95 to-black/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-b-2xl">
          
          <div className="flex flex-col p-6 text-[color:var(--color-gold)] gap-5 text-base">
            
            <a href="about" onClick={() => setMobileMenu(false)}>About</a>

            {/* SERVICES */}
            <details className="group">
              <summary className="cursor-pointer flex justify-between">
                 <a href="services" className="nav-link">Services</a>

                <span className="group-open:rotate-180 transition">▾</span>
              </summary>

              <div className="mt-3 ml-2 flex flex-col gap-2 text-sm text-gray-300">
                {SERVICES.map((s, i) => (
  <Link
    key={i}
    href={`/services/${s.slug}`}
    className="block px-4 py-3 text-sm text-[color:var(--color-gold)] hover:bg-white/10 hover:text-[color:var(--color-gold)] rounded-lg transition"
  >
    {s.name}   {/* ✅ FIX */}
  </Link>
))}
              </div>
            </details>

            <a href="/team" onClick={() => setMobileMenu(false)}>Team</a>
            <a href="/contact" onClick={() => setMobileMenu(false)}>Contact</a>

           <a
  href="https://wa.me/918009099837"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden lg:inline-block bg-gold text-black px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition"
>
  Book Consultation
</a>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {mobileMenu && (
        <div
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 bg-black/40 z-30"
        />
      )}
    </>
  );
}