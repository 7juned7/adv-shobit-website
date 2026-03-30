"use client";

import Image from "next/image";

const TEAM = [
  {
    name: "Adv. Anurag Narain",
    role: "Founder & Head of Chambers",
    image: "/images/team/adv-anurag.jpeg",
    highlight: true,
  },
  { name: "Adv. Chitrangda Narain", role: "Associate", image: "/images/team/Chitrangda-Narain.jpeg" },
  { name: "Adv. Shobhit Verma", role: "Associate", image: "/images/team/adv-Shobhit-Verma.jpeg" },
  { name: "Adv. Vartika Pandey", role: "Associate", image: "/images/team/Vartika-Pandey.jpeg" },
  { name: "Adv. Prashant Chaurasia", role: "Associate", image: "/images/team/prashant.jpg" },
  { name: "Adv. Priyanka Tiwari", role: "Associate", image: "/images/team/priyanka.jpg" },
  { name: "Adv. Shailendra Mishra", role: "Associate", image: "/images/team/shailendra.jpg" },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative py-24 px-6 bg-gradient-to-b from-[#020617] via-[#020617] to-[#0f172a] text-white overflow-hidden"
    >
      {/* GOLD GLOW BACKGROUND */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full" />

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          <span className="text-white">Our</span>{" "}
          <span className="text-gold">Team</span>
        </h2>

        <div className="w-20 h-[2px] bg-gold mx-auto mt-4 mb-6" />

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Meet the experts committed to delivering legal solutions
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative z-10">
        {TEAM.map((member, index) => (
          <div
            key={index}
            className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
              member.highlight ? "md:col-span-2 lg:col-span-2" : ""
            }`}
          >
            {/* CARD */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden hover:border-gold/40 transition">

              {/* GOLD BORDER GLOW */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 border border-gold/40 shadow-[0_0_30px_rgba(255,215,0,0.15)]" />

              {/* IMAGE */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white group-hover:text-gold transition">
                  {member.name}
                </h3>

                <p className="text-sm text-gray-400 mt-1 tracking-wide">
                  {member.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}