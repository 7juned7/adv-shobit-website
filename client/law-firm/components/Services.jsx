"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Corporate Law",
    desc: "Advising businesses on legal structures, compliance, and corporate governance.",
    icon: "🏢",
  },
  {
    title: "Commercial Litigation",
    desc: "Strategic representation in high-stakes disputes and litigation matters.",
    icon: "⚖️",
  },
  {
    title: "Property Law",
    desc: "Expert guidance on real estate transactions and property disputes.",
    icon: "🏠",
  },
  {
    title: "Asset Protection",
    desc: "Safeguarding wealth through structured legal planning and advisory.",
    icon: "🛡️",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#f8fafc] text-[#0f172a] relative overflow-hidden">
      
      {/* 🔥 subtle gradient glow */}
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(234,179,8,0.08),transparent_70%)]"></div>
      {/* 🔝 HERO */}
      <section className="relative pt-[120px] pb-20 text-center px-6">
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent mb-12"></div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Our Legal <span className="text-yellow-500">Services</span>
        </motion.h1>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Delivering strategic legal solutions across a wide range of practice areas with precision, integrity, and nearly a century of trust.
        </p>
      </section>

      {/* 💼 SERVICES GRID */}
      <section className="relative max-w-7xl mx-auto px-6 pb-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group p-6 rounded-2xl bg-white/70 backdrop-blur-lg border border-black/5 shadow-sm hover:shadow-lg hover:shadow-yellow-500/10 transition duration-300 hover:-translate-y-2"
          >
            {/* icon */}
            <div className="text-3xl mb-4 group-hover:scale-110 transition">
              {service.icon}
            </div>

            {/* title */}
            <h3 className="text-xl font-semibold group-hover:text-yellow-500 transition">
              {service.title}
            </h3>

            {/* desc */}
            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
              {service.desc}
            </p>

            {/* hover line */}
            <div className="mt-6 h-[2px] w-0 bg-yellow-500 group-hover:w-full transition-all duration-300"></div>
          </motion.div>
        ))}
      </section>

      {/* ⚖️ CTA */}
      <section className="relative text-center pb-28 px-6">
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent mb-12"></div>

        <h2 className="text-3xl md:text-4xl font-semibold">
          Need Legal Assistance?
        </h2>

        <p className="mt-4 text-gray-500">
          Speak with our experts today and receive tailored legal guidance.
        </p>

        <button className="mt-8 px-8 py-3 bg-yellow-500 text-black rounded-xl font-semibold hover:bg-yellow-600 transition shadow-lg shadow-yellow-500/20">
          Book Consultation
        </button>
      </section>
    </main>
  );
}