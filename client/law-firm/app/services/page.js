import ServicesPage from "@/components/Services";

// ✅ SEO Metadata
export const metadata = {
  title: "Legal Services | Anurag Narain & Associates - Corporate, Litigation & Property Law",
  description:
    "Explore our legal services including corporate law, commercial litigation, property law, and asset protection. Trusted legal solutions with expertise and integrity.",

  keywords: [
    "corporate law services India",
    "litigation lawyers",
    "property law services",
    "legal services India",
    "Anurag Narain Associates services",
  ],

  openGraph: {
    title: "Legal Services | Anurag Narain & Associates",
    description:
      "Comprehensive legal services tailored to your needs including corporate, litigation, and property law.",
    url: "https://anuragnarainlegal.com/services", // 🔁 replace
    siteName: "Anurag Narain & Associates",
    images: [
      {
        url: "/images/og-image.jpeg", // 🔁 add image
        width: 1200,
        height: 630,
        alt: "Legal Services - Anurag Narain & Associates",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Legal Services | Anurag Narain & Associates",
    description:
      "Expert legal services in corporate law, litigation, and more.",
    images: ["/images/og-image.jpeg"],
  },

  alternates: {
    canonical: "https://anuragnarainlegal.com/services", // 🔁 replace
  },
};

// ✅ Page Component
export default function Services() {
  return (
    <main className="pt-20 md:pt-32">

      {/* ✅ H1 for SEO */}
      <h1 className="sr-only">
        Legal Services by Anurag Narain & Associates
      </h1>

      <ServicesPage />

    </main>
  );
}