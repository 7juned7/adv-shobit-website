"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HowItWorks() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const STEPS = [
    {
      title: "Understanding Your Needs",
      desc: "Share your legal concerns with us. We carefully understand your situation.",
    },
    {
      title: "Strategic Planning",
      desc: "We analyze your case and create a tailored legal strategy.",
    },
    {
      title: "Execution & Resolution",
      desc: "We guide you step by step until final resolution.",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-32 px-4 md:px-6 text-[#0f172a] overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 50% 10000%, rgba(212,175,55,0.18), transparent 60%),
          radial-gradient(circle at 50% 500%, rgba(212,175,55,0.12), transparent 70%),
          linear-gradient(to bottom, #fffdf7, #fffaf0)
        `,
      }}
    >

      <div className="max-w-5xl mx-auto relative z-10">

        {/* TITLE */}
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-16 md:mb-24">
          How It <span style={{ color: "var(--color-gold)" }}>Works</span>
        </h2>

        <div className="relative">

          {/* BACK LINE */}
          <div className="absolute left-5 md:left-10 top-0 w-[2px] h-full bg-gray-200" />

          {/* GOLD GRADIENT LINE */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-5 md:left-10 top-0 w-[3px] origin-top"
          >
            <div
              className="w-full h-full"
              style={{
                background: "linear-gradient(to bottom, rgba(212,175,55,0.5), var(--color-gold))"
              }}
            />
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            {STEPS.map((step, i) => {
              const start = i / STEPS.length;
              const end = (i + 1) / STEPS.length;

              const progress = useTransform(scrollYProgress, [start, end], [.8, 1]);

              const bgColor = useTransform(progress, [0, 1], ["#ffffff", "var(--color-gold)"]);
              const textColor = useTransform(progress, [0, 1], ["var(--color-gold)", "#000000"]);
              const opacity = useTransform(progress, [0, 1], [0.4, 1]);
              const y = useTransform(progress, [0, 1], [30, 0]);
              const glow = useTransform(progress, [0, 1], [0, 1]);

              return (
                <div key={i} className="flex items-start gap-4 md:gap-10">

                  {/* NUMBER */}
                  <div className="relative flex-shrink-0">
                    <motion.div
                      style={{
                        backgroundColor: bgColor,
                        color: textColor,
                        borderColor: "var(--color-gold)"
                      }}
                      className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 text-sm md:text-2xl font-bold"
                    >
                      {`0${i + 1}`}
                    </motion.div>

                    {/* GOLD GLOW */}
                    <motion.div
                      style={{ opacity: glow }}
                      className="absolute inset-0 rounded-full"
                    >
                      <div
                        className="w-full h-full rounded-full"
                        style={{
                          boxShadow: "0 0 30px rgba(212,175,55,0.35)"
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* CONTENT */}
                  <motion.div
                    style={{ opacity, y }}
                    className="flex-1 rounded-xl md:rounded-2xl p-4 md:p-8 
                    bg-white/80 backdrop-blur-sm
                    border border-white/40 
                    transition shadow-sm hover:shadow-lg"
                  >
                    <h3 className="text-base md:text-2xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>

                </div>
              );
            })}
          </div>
          

        </div>
        
      </div>
      <section className="text-center py-24 px-6">
        <h2 className="text-3xl font-semibold">
          Need Legal Assistance?
        </h2>

        <p className="mt-4 text-gray-500">
          Speak with our experts today.
        </p>

        <button className="mt-8 px-8 py-3 border border-[color:var(--color-gold)] text-[color:var(--color-gold)] rounded-xl font-semibold hover:bg-[color:var(--color-gold)] hover:text-black transition">
          Book Consultation
        </button>
      </section>
      
    </section>
  );
}