import Contact from "@/components/ContactUs";

// ✅ SEO Metadata
export const metadata = {
  title:
    "Contact Us | Law Firm in Lucknow - Anurag Narain & Associates",

  description:
    "Get in touch with Anurag Narain & Associates, a trusted law firm in Lucknow. Contact us for expert legal advice in corporate law, litigation, property disputes, and more.",

  keywords: [
    "contact law firm Lucknow",
    "lawyers in Lucknow contact",
    "legal consultation Lucknow",
    "Anurag Narain Associates contact",
    "best advocate Lucknow contact",
  ],

  openGraph: {
    title: "Contact Law Firm in Lucknow | Anurag Narain & Associates",
    description:
      "Reach out to experienced lawyers in Lucknow for trusted legal solutions.",
    url: "https://yourdomain.com/contact", // 🔁 replace
    siteName: "Anurag Narain & Associates",
    images: [
      {
        url: "/images/og-image.jpeg", // 🔁 add image
        width: 1200,
        height: 630,
        alt: "Contact Law Firm in Lucknow",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Lawyers in Lucknow",
    description:
      "Book consultation with experienced legal experts in Lucknow.",
    images: ["/images/og-image.jpeg"],
  },

  alternates: {
    canonical: "https://yourdomain.com/contact", // 🔁 replace
  },
};

// ✅ Page Component
export default function ContactPage() {
  return (
    <main>

      {/* ✅ H1 for SEO */}
      <h1 className="sr-only">
        Contact Anurag Narain & Associates - Law Firm in Lucknow
      </h1>

      {/* ✅ Structured Data (VERY IMPORTANT for local SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Anurag Narain & Associates",
            areaServed: "Lucknow, Uttar Pradesh, India",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lucknow",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-8009099837", // 🔁 replace if needed
              contactType: "customer service",
            },
          }),
        }}
      />

      <Contact />

    </main>
  );
}