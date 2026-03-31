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
      className="relative py-20 md:py-32 px-4 md:px-6 bg-white text-[#0f172a] overflow-hidden"
    >
      {/* subtle gold glow */}
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-yellow-400/10 blur-[100px] rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* TITLE */}
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-16 md:mb-24">
          How It <span className="text-yellow-500">Works</span>
        </h2>

        <div className="relative">

          {/* BACK LINE */}
          <div className="absolute left-5 md:left-10 top-0 w-[2px] h-full bg-gray-200" />

          {/* ANIMATED LINE */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-5 md:left-10 top-0 w-[3px] bg-gradient-to-b from-yellow-400 to-yellow-600 origin-top"
          />

          <div className="space-y-16 md:space-y-24">
            {STEPS.map((step, i) => {
              const start = i / STEPS.length;
              const end = (i + 1) / STEPS.length;

              const progress = useTransform(scrollYProgress, [start, end], [0, 1]);

              const bgColor = useTransform(progress, [0, 1], ["#ffffff", "#eab308"]);
              const textColor = useTransform(progress, [0, 1], ["#eab308", "#000000"]);
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
                      }}
                      className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 border-yellow-500 text-sm md:text-2xl font-bold"
                    >
                      {`0${i + 1}`}
                    </motion.div>

                    {/* GLOW */}
                    <motion.div
                      style={{ opacity: glow }}
                      className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                    />
                  </div>

                  {/* CONTENT CARD */}
                  <motion.div
                    style={{
                      opacity,
                      y,
                    }}
                    className="flex-1 rounded-xl md:rounded-2xl p-4 md:p-8 
                    bg-gradient-to-br from-white to-gray-50 
                    border border-gray-200 
                    hover:border-yellow-400/40 transition shadow-sm hover:shadow-lg"
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
    </section>
  );
}