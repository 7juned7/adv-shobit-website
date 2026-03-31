"use client";

import { motion } from "framer-motion";
import HowItWorks from "./HowItWorks";

const SERVICES = [
  {
    title: "Corporate Law",
    desc: "Business formation, contracts, compliance, and dispute resolution.",
    icon: "🏢",
  },
  {
    title: "Commercial Litigation",
    desc: "Strategic representation in complex disputes and litigation.",
    icon: "⚖️",
  },
  {
    title: "Property Law",
    desc: "Handling real estate transactions and property disputes.",
    icon: "🏠",
  },
  {
    title: "Asset Protection",
    desc: "Wills, trusts, and estate planning to secure your future.",
    icon: "🛡️",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#f8fafc] text-[#0f172a]">

      {/* 🔝 HERO */}
      <section className="pt-[120px] pb-16 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Legal <span className="text-yellow-500">Services</span>
        </h1>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Delivering strategic legal solutions with precision, integrity, and trust.
        </p>
      </section>

      {/* 🏛 ABOUT */}
      <section className="max-w-5xl mx-auto px-6 pb-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          About <span className="text-yellow-500">Us</span>
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Founded in 1934, the Narain family has upheld a legacy of justice,
          integrity, and intellect across generations. Under Advocate Anurag Narain,
          a Civil Law expert with over 31 years of experience, the firm has evolved
          into a multidisciplinary practice delivering trusted legal excellence.
        </p>
      </section>

      {/* 💼 SERVICES */}
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

      {/* 🏢 INDUSTRIES */}
      <section className="relative py-16 overflow-hidden bg-[#020617] text-white">

  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-semibold">
      Industries <span className="text-yellow-400">We Serve</span>
    </h2>
  </div>

  {/* SCROLLER */}
  <div className="relative w-full overflow-hidden">

    <div className="flex gap-6 animate-scroll whitespace-nowrap">

      {[
        "Corporate & Startups",
        "Real Estate & Property",
        "Healthcare & Medical",
        "Finance & Banking",
        "E-commerce",
        "Entertainment & Media",
        "Education & Institutions",
        "Hospitality & Tourism",
        "Manufacturing",
        "Energy & Environment",
        "Public Sector",
        "Intellectual Property",
      ]
        .concat([
          "Corporate & Startups",
          "Real Estate & Property",
          "Healthcare & Medical",
          "Finance & Banking",
          "E-commerce",
          "Entertainment & Media",
        ]) // duplicate for smooth loop
        .map((item, i) => (
          <div
            key={i}
            className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg text-sm hover:border-yellow-400/40 transition"
          >
            {item}
          </div>
        ))}
    </div>

  </div>
</section>

      {/* 📊 STATS */}
      <section className="py-20 text-center bg-[#020617] text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            ["1k+", "Satisfied Clients"],
            ["900+", "Successful Cases"],
            ["700+", "Legal Solutions"],
            ["220+", "Trusted Partnerships"],
          ].map(([num, label], i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-yellow-400">{num}</h3>
              <p className="text-gray-400 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⚙️ PROCESS */}
      <HowItWorks/>

      {/* ⚖️ CTA */}
      <section className="text-center pb-24 px-6">
        <h2 className="text-3xl font-semibold">
          Need Legal Assistance?
        </h2>

        <p className="mt-4 text-gray-500">
          Speak with our experts today.
        </p>

        <button className="mt-8 px-8 py-3 bg-yellow-500 text-black rounded-xl font-semibold hover:bg-yellow-600 transition">
          Book Consultation
        </button>
      </section>

    </main>
  );
}