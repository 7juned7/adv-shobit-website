"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-start md:items-center pt-[140px] md:pt-[60px] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black text-white overflow-hidden">
      
      {/* 🔥 MOBILE BACKGROUND IMAGE */}
      <div className="absolute inset-0 md:hidden z-0">
        <Image
        width={150}
        height={150}
          src="/images/herosection/justice-statue.png"
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        {/* overlay for readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-yellow-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-yellow-400/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            A Legacy of Justice <br />
            <span className="text-yellow-400">Since 1934</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-lg">
            The Narains are a generational family of lawyers devoted to the pursuit of justice for nearly a century. At Anurag Narain & Associates, law is not just a profession — it is a legacy.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl font-semibold transition">
              Book Consultation
            </button>

            <button className="px-6 py-3 border border-gray-500 hover:border-yellow-400 rounded-xl transition">
              Explore Our Practice
            </button>
          </div>

          {/* TRUST BADGE */}
          <div className="mt-10 text-sm text-gray-400">
            1934 — Present • Generational Legacy
          </div>
        </motion.div>

        {/* RIGHT IMAGE (DESKTOP ONLY) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex justify-center"
        >
          <Image
          width={250}
          height={250}
            src="/images/herosection/justice-statue.png"
            alt="Law Firm"
            className="w-full max-w-md "
          />
        </motion.div>
      </div>

      {/* 🔥 CURVE (MATCH NEXT SECTION BG) */}
     <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
  <svg
    viewBox="0 0 1440 320"
    className="w-full h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px]"
    preserveAspectRatio="none"
  >
    <path
      d="M0,160 C360,280 1080,40 1440,160 L1440,320 L0,320 Z"
      className="fill-[#f8fafc]"
    />
  </svg>
</div>
    </section>
  );
}