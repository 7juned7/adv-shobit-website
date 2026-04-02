"use client";

import { motion } from "framer-motion";
import HowItWorks from "./HowItWorks";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
function Counter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value);
    const duration = 1200;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}
const SERVICES = [
  {
    title: "Corporate Law",
    desc: "Business formation, contracts, compliance, and dispute resolution.",
    icon: "/images/service/corporate.png",
  },
  {
    title: "Commercial Litigation",
    desc: "Strategic representation in complex disputes and litigation.",
    icon: "/images/service/commercial.png",
  },
  {
    title: "Property Law",
    desc: "Handling real estate transactions and property disputes.",
    icon: "/images/service/prop-law.png",
  },
  {
    title: "Asset Protection",
    desc: "Wills, trusts, and estate planning to secure your future.",
    icon: "/images/service/asset-icon.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#f8fafc] text-[#0f172a]">

      {/* 🔝 HERO */}
      <section className="pt-[120px] pb-16 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Legal <span style={{ color: "var(--color-gold)" }}>Services</span>
        </h1>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Delivering strategic legal solutions with precision, integrity, and trust.
        </p>
      </section>

      {/* 💼 SERVICES */}
      <section className="relative w-full overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 pb-24 pt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-white/70 backdrop-blur-lg border border-black/5 shadow-sm hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] transition duration-300 hover:-translate-y-2"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition">
             <Image
  src={service.icon}
  alt={service.title}
  width={58}
  height={58}
/>
              </div>

              <h3 className="text-xl font-semibold group-hover:text-[color:var(--color-gold)] transition">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>

              <div
                className="mt-6 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                style={{ background: "var(--color-gold)" }}
              />
            </motion.div>
          ))}

        </div>
      </section>

      {/* 🏢 INDUSTRIES */}
      <section className="relative py-16 overflow-hidden bg-[#020617] text-white">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Industries <span style={{ color: "var(--color-gold)" }}>We Serve</span>
          </h2>
        </div>

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
              "Corporate & Startups",
              "Real Estate & Property",
              "Healthcare & Medical",
              "Finance & Banking",
              "E-commerce",
              "Entertainment & Media",
            ].map((item, i) => (
              <div
                key={i}
                className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg text-sm hover:border-[color:var(--color-gold)]/40 transition"
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
      ["1000+", "Satisfied Clients"],
      ["900+", "Successful Cases"],
      ["700+", "Legal Solutions"],
      ["220+", "Trusted Partnerships"],
    ].map(([num, label], i) => (
      <div key={i}>
        <h3 style={{ color: "var(--color-gold)" }} className="text-3xl font-bold">
          <Counter value={num.replace("+", "")} />+
        </h3>
        <p className="text-gray-400 mt-2">{label}</p>
      </div>
    ))}
  </div>
</section>

      {/* 🔥 CURVE AFTER STATS */}
      <div className="relative bg-[#020617]">
        <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-[100px] md:h-[160px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,200 C360,100 1080,300 1440,180 L1440,320 L0,320 Z"
              fill="#fffdf7"
            />
          </svg>
        </div>
      </div>

      {/* ⚙️ PROCESS */}
      <HowItWorks />

      {/* ⚖️ CTA */}
      

    </main>
  );
}