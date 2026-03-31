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
      desc: "Share your legal concerns with us. We carefully listen and understand your situation.",
    },
    {
      title: "Strategic Planning",
      desc: "Our legal experts analyze your case and craft a tailored strategy.",
    },
    {
      title: "Execution & Resolution",
      desc: "We guide you step by step until complete resolution.",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 bg-white text-[#0f172a]">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-24">
          How It Works
        </h2>

        <div className="relative">

          {/* BACK LINE */}
          <div className="absolute left-10 top-0 w-[2px] h-full bg-gray-200" />

          {/* ANIMATED LINE */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-10 top-0 w-[3px] bg-yellow-500 origin-top"
          />

          <div className="space-y-24">
            {STEPS.map((step, i) => {
              const start = i / STEPS.length;
              const end = (i + 1) / STEPS.length;

              const progress = useTransform(scrollYProgress, [start, end], [0, 1]);

              // ✅ FIXED TRANSFORMS
              const bgColor = useTransform(progress, [0, 1], ["#ffffff", "#eab308"]);
              const textColor = useTransform(progress, [0, 1], ["#eab308", "#000000"]);
              const opacity = useTransform(progress, [0, 1], [0.4, 1]);
              const y = useTransform(progress, [0, 1], [40, 0]);
              const glow = useTransform(progress, [0, 1], [0, 1]);

              return (
                <div key={i} className="flex items-start gap-10">

                  {/* NUMBER */}
                  <div className="relative flex-shrink-0">
                    <motion.div
                      style={{
                        backgroundColor: bgColor,
                        color: textColor,
                      }}
                      className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-yellow-500 text-2xl font-bold"
                    >
                      {`0${i + 1}`}
                    </motion.div>

                    {/* GLOW */}
                    <motion.div
                      style={{ opacity: glow }}
                      className="absolute inset-0 rounded-full shadow-[0_0_25px_rgba(255,215,0,0.5)]"
                    />
                  </div>

                  {/* CONTENT */}
                  <motion.div
                    style={{
                      opacity,
                      y,
                    }}
                    className="flex-1 bg-[#f8fafc] border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}