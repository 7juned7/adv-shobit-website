"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black text-white overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            A Legacy of Justice <br />
            <span className="text-blue-400">Since 1934</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-lg">
            The Narains are a generational family of lawyers devoted to the pursuit of justice for nearly a century. At Anurag Narain & Associates, law is not just a profession — it is a legacy.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold">
              Book Consultation
            </button>

            <button className="px-6 py-3 border border-gray-500 hover:border-white rounded-xl">
              Explore Our Practice
            </button>
          </div>

          {/* TRUST BADGE */}
          <div className="mt-10 text-sm text-gray-400">
            1934 — Present • Generational Legacy
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="/law-hero.png"
            alt="Law Firm"
            className="w-full max-w-md rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
  <svg
    viewBox="0 0 1440 200"
    className="w-full h-[120px]"
    preserveAspectRatio="none"
  >
    <path
      d="M0,100 C300,200 1100,0 1440,100 L1440,200 L0,200 Z"
      fill="#ffffff" // match next section bg
    />
  </svg>
</div>
    </section>
  );
}