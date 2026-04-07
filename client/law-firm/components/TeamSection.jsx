'use client'
import React, { useState } from "react";
const TEAM = [
  {
    name: "Adv. Anurag Narain",
    role: "Founder & Head of Chambers",
    image: "/images/team/Anurag-Narain.jpeg", // 🔁 correct image lagana
    position: "center 20%",
    highlight: true,
    bio:"Anurag Narain Srivastava is a renowned civil lawyer practicing before the High Court, widely respected for his deep expertise in civil law. With over 31 years of extensive experience, he has built a distinguished reputation for handling complex civil matters with precision and strategic insight. Known for his sharp legal acumen, persuasive advocacy, and meticulous drafting, he has consistently delivered effective representation to his clients. His long-standing presence in the legal field reflects his credibility, professionalism, and unwavering commitment to justice.",
  },
  {
    name: "Adv. Shailendra Mishra",
    role: "Associate",
    image: "/images/team/Shailendra-Misra.jpeg",
    position: "top",
    bio:"Shailendra Misra is a seasoned criminal lawyer known for his sharp legal acumen and extensive courtroom experience. With years of practice in criminal law, he has built a strong reputation for handling complex cases with precision and strategic insight."
  },
 
  {
    name: "Adv. Pawan Kumar Verma",
    role: "Associate",
    image: "/images/team/Pawan-Kumar-Verma.jpeg", // 🔁 add image
    position: "top",
    bio:"Pawan Verma is an experienced civil lawyer who handles a wide range of matters before both District Courts and the High Court. He is known for his practical approach and effective case handling. He also regularly appears before the Board of Revenue, further strengthening his diverse legal practice. With strong professional networks and familiarity with High Court procedures, he ensures smooth coordination and diligent representation for his clients. Alongside his professional work, he is committed to using his legal knowledge to advocate for and support the rights and interests of the transgender community.",},
  {
    name: "Adv. Priyanka Tiwari",
    role: "Associate",
    image: "/images/team/Priyanka-Tiwari.png",
    position: "top",
    bio:"Priyanka Tiwari is a dedicated legal professional with prior experience working in verious law firms. She has handled numerous cases before both the High Court and District Courts, bringing a well-rounded and practical approach to litigation. Her experience across forums enables her to manage cases efficiently with strong legal insight and attention to detail."
  },
  {
    name: "Adv. Prashant Chaurasia",
    role: "Associate",
    image: "/images/team/Prashant-Chaurasia.png",
    position: "top",
    bio:"Prashant Chaurasia is a legal professional who graduated from Dr.Ram Manohar Lohiya National Law University College, Lucknow. He has developed strong expertise in service law and regularly practices before the High Court and the State Public Service Tribunal. Known for his sound legal understanding and focused approach, he effectively handles matters relating to service disputes and administrative law."
  },
  {
    name: "Adv. Vartika Pandey",
    role: "Associate",
    image: "/images/team/Vartika-Pandey.png",
    position: "top",
    bio:"Vartika Pandey is a diligent civil advocate with a strong command over drafting and effective arguments before the High Court. She also appears before the Armed Forces Tribunal and handles contempt matters in service law, reflecting her versatility in litigation. Known for her precision, clarity, and well-prepared approach, she ensures effective representation and consistently delivers reliable legal solutions to her clients", },
  {
    name: "Adv. Chitrangda Narain",
    role: "Associate",
    image: "/images/team/Chitrangda-Narain.jpeg",
    position: "top",
    bio:"Chitangada Narain is a fourth-generation lawyer with a strong legacy in the legal profession. She is known for her sincerity in drafting and meticulous handling of cases. She has been actively involved in several Public Interest Litigations before the High Court and has represented members of the transgender community. Her work has also contributed to reported judgments, reflecting her impact and credibility in the field",
  },
  {
    name: "Adv. Shobhit Verma",
    role: "Associate",
    image: "/images/team/shobit_verma.jpeg",
    position: "top",
    bio:"Shobhit Verma is a skilled legal professional known for his excellent client-handling abilities and strong command over both civil and criminal law. He actively practices before the High Court, District Courts, various tribunals, and also appears before the Board of Revenue. He is a graduate of the University of Allahabad and has completed his LL.B. from Rohilkhand University. With a strong grip on legal drafting and a practical approach to litigation, he ensures effective representation and client satisfaction.",},
  {
    name: " Nachiketa Narain",
    role: "Lawyer",
    image: "/images/team/Nachiketa-Narain.jpeg",
    position: "bottom",
    bio:"Nachiketa Narain is an emerging legal professional currently pursuing his law degree from Rajiv Gandhi National University of Law (RGNUL), Punjab. He has actively participated in numerous moot court competitions, showcasing his advocacy and research skills. Additionally, he has gained practical exposure through internships with various judges, courts, and reputed law firms, reflecting his strong commitment to the legal profession.",
  },
];

export default function TeamSection() {
   const [selectedMember, setSelectedMember] = useState(null);

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
          <Card key={index} member={member} onClick={setSelectedMember} />
        ))}
      </div>
      

      {/* MOBILE CAROUSEL */}
     {/* MOBILE */}
      <div className="md:hidden overflow-x-auto no-scrollbar flex gap-4 px-2 snap-x snap-mandatory scroll-smooth">
        {TEAM.map((member, index) => (
          <div key={index} className="snap-center shrink-0 w-[75%]">
            <Card member={member} onClick={setSelectedMember} />
          </div>
        ))}
      </div>
     {selectedMember && (
  <div
    onClick={() => setSelectedMember(null)}
    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-3xl bg-navy border border-white/10 rounded-2xl overflow-hidden relative 
                 max-h-[90vh] overflow-y-auto
                 animate-[modalFade_.35s_ease]"
    >

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setSelectedMember(null)}
        className="absolute top-4 right-4 text-white text-lg z-10"
      >
        ✕
      </button>

      <div className="flex flex-col md:flex-row">

        {/* IMAGE */}
        <div className="md:w-1/2 w-full p-4 md:p-0 flex justify-center items-center bg-black/20">
  <img
    src={selectedMember.image}
    alt={selectedMember.name}
    className="max-h-56 md:max-h-full w-auto object-contain rounded-xl md:rounded-none"
  />
</div>

        {/* CONTENT */}
        <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">

          <h3 className="text-xl md:text-2xl font-semibold text-yellow-400 mb-2">
            {selectedMember.name}
          </h3>

          <p className="text-sm text-gray-300 mb-4">
            {selectedMember.role}
          </p>

          <div className="w-10 h-[2px] bg-yellow-400 mb-4" />

          <p className="text-gray-400 text-sm leading-relaxed">
            {selectedMember.bio}
          </p>

        </div>
      </div>
    </div>
  </div>
)}
    </section>
  );
}

/* CARD COMPONENT */
function Card({ member, onClick }) {
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

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* TEXT */}
          <div className="absolute bottom-0 w-full p-4">
            <h3 className="text-sm font-semibold text-white group-hover:text-yellow-400 transition">
              {member.name}
            </h3>
            <p className="text-xs text-gray-300">{member.role}</p>

            {/* BUTTON */}
            <button
              onClick={() => onClick(member)}
              className="mt-2 text-xs text-yellow-400 opacity-50 group-hover:opacity-100 transition"
            >
              Know More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}