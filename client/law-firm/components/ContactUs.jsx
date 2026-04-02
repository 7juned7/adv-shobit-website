"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 font-body overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 50% 0%, rgba(212,175,55,0.12), transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(212,175,55,0.08), transparent 70%),
          linear-gradient(to bottom, #fffdf7, #fffaf0)
        `,
      }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        
        {/* LEFT */}
        <div className="text-[#0f172a]">
          <p className="text-gold text-xs tracking-[0.25em] uppercase mb-4">
            Contact
          </p>

          <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-6">
            Let’s Discuss Your Case
          </h2>

          <div className="w-12 h-[1px] bg-gold mb-6"></div>

          <p className="text-black/60 max-w-md mb-12 leading-relaxed">
            Confidential, strategic, and result-oriented legal assistance tailored to your needs.
          </p>

          {/* INFO */}
          <div className="space-y-8 text-sm">
            <div>
              <p className="text-black/40 mb-1">Office</p>
              <p className="text-black/90">New Delhi, India</p>
            </div>

            <div>
              <p className="text-black/40 mb-1">Phone</p>
              <p className="text-black/90">+91 98765 43210</p>
            </div>

            <div>
              <p className="text-black/40 mb-1">Email</p>
              <p className="text-black/90">contact@anuragnarain.com</p>
            </div>
          </div>

          {/* ACTION LINKS */}
          <div className="flex gap-6 mt-10 text-sm">

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              className="text-black/70 hover:text-gold transition"
            >
              WhatsApp →
            </a>

            <a
              href="tel:+919876543210"
              className="text-black/70 hover:text-gold transition"
            >
              Call →
            </a>

            <a
              href="mailto:contact@anuragnarain.com"
              className="text-black/70 hover:text-gold transition"
            >
              Email →
            </a>

          </div>
        </div>

        {/* RIGHT (FORM - SAME AS BEFORE) */}
       <div className="relative border rounded-2xl p-8 bg-gradient-to-br from-[var(--color-navy)]/30 via-[#0B1F3A]/70 to-[var(--color-navy)]/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] text-white">

  {/* 🔥 subtle inner glow */}
  <div className="absolute inset-0 rounded-2xl pointer-events-none 
    bg-gradient-to-br from-white/5 to-transparent" />

  <form
    onSubmit={(e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const message = e.target.message.value;

      window.open(
        `https://wa.me/919876543210?text=Hello, I am ${name}. ${message}`
      );
    }}
    className="relative flex flex-col gap-5"
  >

    <input
      name="name"
      type="text"
      placeholder="Full Name"
      className="input-field"
      required
    />

    <input
      name="email"
      type="email"
      placeholder="Email Address"
      className="input-field"
      required
    />

    <textarea
      name="message"
      rows="5"
      placeholder="Brief about your case..."
      className="input-field resize-none"
      required
    />

    <button
      type="submit"
      className="mt-4 border border-gold text-gold py-3 rounded-lg 
      hover:bg-gold hover:text-black transition duration-300"
    >
      Request Consultation
    </button>

  </form>
</div>
      </div>
    </section>
  );
}