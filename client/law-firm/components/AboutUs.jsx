"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative bg-[#f8fafc] py-44 overflow-hidden">
      
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
            “Founded in 1934 by Late Shri Awadhesh Narayan, the Narain family has upheld a distinguished legacy of justice, integrity, and legal excellence across generations. This enduring tradition was carried forward with dedication by Late Shri Kamlesh Narayan, further strengthening the firm’s foundation. What began as a single lawyer’s chamber has today evolved into a multidisciplinary practice under the leadership of Mr. Anurag Narain, a Civil Law expert with over 31 years of experience. Upholding the values of discipline, diligence, and dignity, he continues to carry forward the legacy with distinction, delivering trusted, client-focused legal solutions in Lucknow across diverse and complex matters.”
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
            src="/images/team/adv-anuragv2.jpeg"
            alt="Law Firm"
            className="w-full max-w-md rounded-full shadow-xl border border-black/10"
          />
        </motion.div>
      </div>
    </section>
  );
}