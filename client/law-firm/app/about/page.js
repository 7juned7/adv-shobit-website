import AboutSection from "@/components/AboutUs";

// ✅ SEO Metadata (Lucknow Focused)
export const metadata = {
  title:
    "About Us | Best Law Firm in Lucknow - Anurag Narain & Associates",

  description:
    "Anurag Narain & Associates is a leading law firm in Lucknow providing expert legal services in corporate law, litigation, property law, and asset protection. Trusted legal advisors with years of experience.",

  keywords: [
    "law firm in Lucknow",
    "best lawyers in Lucknow",
    "corporate lawyer Lucknow",
    "litigation lawyers Lucknow",
    "property lawyer Lucknow",
    "Anurag Narain Associates Lucknow",
  ],

  openGraph: {
    title:
      "Anurag Narain & Associates | Leading Law Firm in Lucknow",
    description:
      "Discover our legacy and expertise as one of the most trusted law firms in Lucknow.",
    url: "https://yourdomain.com/about", // 🔁 replace
    siteName: "Anurag Narain & Associates",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Law Firm in Lucknow - Anurag Narain & Associates",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Law Firm in Lucknow | About Us",
    description:
      "Experienced legal professionals offering trusted legal services in Lucknow.",
    images: ["/images/og-image.jpg"],
  },

  alternates: {
    canonical: "https://yourdomain.com/about", // 🔁 replace
  },
};

// ✅ Page Component
export default function AboutPage() {
  return (
    <main>

      {/* ✅ H1 (SEO boost) */}
      <h1 className="sr-only">
        About Anurag Narain & Associates - Law Firm in Lucknow
      </h1>

      {/* ✅ Structured Data (VERY IMPORTANT) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Anurag Narain & Associates",
            description:
              "Leading law firm in Lucknow providing corporate, litigation, and property legal services.",
            areaServed: "Lucknow, Uttar Pradesh, India",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lucknow",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN",
            },
          }),
        }}
      />

      <AboutSection />
    </main>
  );
}