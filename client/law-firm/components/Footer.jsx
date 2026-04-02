"use client";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 px-6 border-t border-white/10">

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* ABOUT */}
        <div>
          <h3 className="font-heading text-lg mb-4 text-gold">About Us</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Founded in 1934, the Narain family has upheld a legacy of justice,
            integrity, and intellect across generations. Under Advocate Anurag
            Narain, the firm delivers trusted legal excellence across complex matters.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-heading text-lg mb-4 text-gold">Services</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="hover:text-gold transition">Corporate Law</li>
            <li className="hover:text-gold transition">Commercial Litigation</li>
            <li className="hover:text-gold transition">Property Law</li>
            <li className="hover:text-gold transition">Asset Protection</li>
          </ul>
        </div>

        {/* INDUSTRIES */}
        <div>
          <h3 className="font-heading text-lg mb-4 text-gold">Industries</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li>Corporate & Startups</li>
            <li>Real Estate</li>
            <li>Healthcare</li>
            <li>Finance</li>
            <li>E-commerce</li>
            <li>Media</li>
          </ul>
        </div>

        {/* CONTACT + MAP */}
        <div>
          <h3 className="font-heading text-lg mb-4 text-gold">Contact</h3>

          {/* FLEX RESPONSIVE BLOCK */}
          <div className="flex flex-col gap-6">

            {/* INFO */}
            <div className="space-y-2 text-sm text-white/70">
              <p className="font-medium text-white/90">Lucknow High Court</p>
              <p>Chamber: C Block-215</p>
              <p>+91 8090023364</p>
              <p>advo.anuragn@gmail.com</p>

              {/* ACTION LINKS */}
              <div className="flex flex-wrap gap-4 mt-3 text-xs">
                <a href="https://wa.me/918090023364" target="_blank" className="hover:text-gold transition">
                  WhatsApp
                </a>
                <a href="tel:+918090023364" className="hover:text-gold transition">
                  Call
                </a>
                <a href="mailto:advo.anuragn@gmail.com" className="hover:text-gold transition">
                  Email
                </a>
              </div>
            </div>

            {/* MAP */}
            <div className="rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps?q=Lucknow High Court&output=embed"
                className="w-full h-[160px] sm:h-[180px] md:h-[200px]"
                loading="lazy"
              ></iframe>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 mt-16 px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-white/50 gap-2">

        <p>
          © {new Date().getFullYear()} Anurag Narain & Associates
        </p>

        <p className="text-sm text-gray-400">
  Built with precision & integrity by{" "}
  <a
    href="https://webjuncture.in"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gold hover:underline"
  >
    Webjuncture
  </a>
</p>
      </div>

    </footer>
  );
}