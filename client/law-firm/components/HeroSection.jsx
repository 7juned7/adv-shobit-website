"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl w-full px-6 grid md:grid-cols-2 gap-10 items-center z-10">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Trusted Legal Solutions <br />
            <span className="text-blue-400">For Your Future</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-lg">
            We provide expert legal services with integrity, precision, and a commitment to protecting your rights.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold transition">
              Get Consultation
            </button>

            <button className="px-6 py-3 border border-gray-500 hover:border-white rounded-xl transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
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
    </section>
  );
}