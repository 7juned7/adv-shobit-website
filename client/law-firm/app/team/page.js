import TeamSection from "@/components/TeamSection";

// ✅ SEO Metadata
export const metadata = {
  title: "Our Team | Anurag Narain & Associates - Experienced Legal Experts",
  description:
    "Meet the dedicated team of legal professionals at Anurag Narain & Associates. Experts in corporate law, litigation, property law, and regulatory matters.",

  keywords: [
    "law firm team India",
    "legal experts India",
    "corporate lawyers team",
    "Anurag Narain Associates team",
    "litigation lawyers India",
  ],

  openGraph: {
    title: "Our Team | Anurag Narain & Associates",
    description:
      "Get to know the experienced legal professionals behind our success.",
    url: "https://yourdomain.com/team", // 🔁 replace
    siteName: "Anurag Narain & Associates",
    images: [
      {
        url: "/images/og-image.jpeg", // 🔁 add image
        width: 1200,
        height: 630,
        alt: "Legal Team - Anurag Narain & Associates",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Team | Anurag Narain & Associates",
    description:
      "Meet our experienced legal team delivering trusted legal solutions.",
    images: ["/images/og-image.jpeg"],
  },

  alternates: {
    canonical: "https://yourdomain.com/team", // 🔁 replace
  },
};

export default function TeamPage() {
  return (
    <main className="bg-[color:var(--color-navy)] pt-20 md:pt-40">

      {/* ✅ H1 (VERY IMPORTANT FOR SEO) */}
      <h1 className="sr-only">
        Legal Team at Anurag Narain & Associates
      </h1>

      <TeamSection />

    </main>
  );
}