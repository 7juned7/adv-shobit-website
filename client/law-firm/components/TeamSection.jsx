import React from "react";

const TEAM = [
  {
    name: "Adv. Anurag Narain",
    role: "Founder & Head of Chambers",
    image: "/images/team/Nachiketa-Narain.jpeg", // ✅ UPDATED PHOTO
    position: "center 20%",
    highlight: true,
  },
  {
    name: "Adv. Chitrangda Narain",
    role: "Associate",
    image: "/images/team/Chitrangda-Narain.jpeg",
    position: "top",
  },
  {
    name: "Adv. Nachiketa Narain", // ✅ NEW ADD
    role: "Lawyer",
    image: "/images/team/Nachiketa-Nar.jpeg", // 🔁 image add kar lena
    position: "top",
  },
  {
    name: "Adv. Shobhit Verma",
    role: "Associate",
    image: "/images/team/adv-Shobhit-Verma.jpeg",
    position: "top",
  },
  {
    name: "Adv. Vartika Pandey",
    role: "Associate",
    image: "/images/team/Vartika-Pandey.jpeg",
    position: "top",
  },
  {
    name: "Adv. Prashant Chaurasia",
    role: "Associate",
    image: "/images/team/prashant.jpg",
    position: "top",
  },
  {
    name: "Adv. Priyanka Tiwari",
    role: "Associate",
    image: "/images/team/priyanka.jpg",
    position: "top",
  },
  {
    name: "Adv. Shailendra Mishra",
    role: "Associate",
    image: "/images/team/shailendra.jpg",
    position: "top",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 px-4 bg-navy text-white">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Our <span className="text-yellow-400">Team</span>
        </h2>
      </div>
      {/* EXPERTISE BLOCK */}
<div className="max-w-4xl mx-auto mb-12">
  <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl p-6 md:p-8 text-center hover:border-yellow-400/40 transition">

    {/* subtle glow */}
    <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition duration-500 shadow-[0_0_40px_rgba(255,215,0,0.15)]" />

    <h3 className="text-lg md:text-xl font-semibold text-yellow-400 mb-4">
      Our Practice Expertise
    </h3>

    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
      Our team has extensive experience representing clients before various tribunals including{" "}
      <span className="text-white font-medium">
        NCLT & NCLAT, DRT & DRAT, SEBI & Appellate Tribunal, PMLA/FEMA Appellate Tribunal,
        State Electricity Commissions & Appellate Tribunal for Electricity, RERA & Appellate Tribunal,
        Armed Forces Tribunal, Central Administrative Tribunal, Consumer Disputes Redressal Commissions
      </span>{" "}
      as well as handling{" "}
      <span className="text-yellow-400 font-medium">
        Ad-hoc & Institutional Arbitration proceedings
      </span>.
    </p>

  </div>
</div>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid max-w-6xl mx-auto gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {TEAM.map((member, index) => (
          <Card key={index} member={member} />
        ))}
      </div>

      {/* MOBILE CAROUSEL */}
      <div className="md:hidden overflow-x-auto flex gap-4 px-2 snap-x snap-mandatory scroll-smooth">

        {TEAM.map((member, index) => (
          <div
            key={index}
            className="snap-center shrink-0 w-[75%]"
          >
            <Card member={member} />
          </div>
        ))}

      </div>
    </section>
  );
}

/* CARD COMPONENT */
function Card({ member }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden transition-all duration-500">
      <div
        className={`relative rounded-2xl overflow-hidden border ${
          member.highlight
            ? "border-yellow-400/50 shadow-[0_0_25px_rgba(255,215,0,0.2)]"
            : "border-white/10"
        }`}
      >
        <div className="relative w-full aspect-[3/4]">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            style={{ objectPosition: member.position || "center" }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* TEXT */}
          <div className="absolute bottom-0 w-full p-4">
            <h3 className="text-sm font-semibold text-white group-hover:text-yellow-400 transition">
              {member.name}
            </h3>
            <p className="text-xs text-gray-300">{member.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}