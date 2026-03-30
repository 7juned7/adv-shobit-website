"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative bg-[#f8fafc] py-24 overflow-hidden">
      
      {/* subtle gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(234,179,8,0.06),transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] leading-tight">
            A Legacy of <br />
            <span className="text-yellow-500">Integrity & Excellence</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Founded in 1934, the Narain family has upheld a legacy of justice, integrity, and intellect across generations. What began as a single lawyer’s chamber has evolved into a multidisciplinary firm under Advocate Anurag Narain — a Civil Law expert with over 31 years of experience.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Guided by discipline, diligence, and dignity, the firm continues to deliver trusted, client-focused legal excellence across diverse and complex matters.
          </p>

          {/* VALUE BLOCK */}
          <div className="mt-8 p-5 rounded-xl border border-yellow-500/30 bg-yellow-50/40 backdrop-blur-sm">
            <h3 className="font-semibold text-[#0f172a]">
              Integrity & Ethics
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              We uphold the highest standards of honesty, confidentiality, and professionalism in every matter we undertake.
            </p>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="/images/team/adv-narain.jpeg"
            alt="Law Firm"
            className="w-full max-w-md rounded-2xl shadow-xl border border-black/10"
          />
        </motion.div>
      </div>
    </section>
  );
}