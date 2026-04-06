import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

import { Cormorant_Garamond, Manrope } from "next/font/google";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

// ✅ SEO Metadata (Advanced)
export const metadata = {
  metadataBase: new URL("https://www.anuragnarainlegal.com"),

  title: {
    default:
      "Best Law Firm in Lucknow | Anurag Narain & Associates (Since 1934)",
    template: "%s | Law Firm in Lucknow",
  },

  description:
    "Top law firm in Lucknow providing expert services in corporate law, litigation, property disputes, and legal consultation since 1934.",

  keywords: [
    "law firm in Lucknow",
    "best lawyer in Lucknow",
    "corporate lawyer Lucknow",
    "property lawyer Lucknow",
    "litigation lawyer Lucknow",
    "legal services Lucknow",
  ],

  openGraph: {
    title: "Top Law Firm in Lucknow | Anurag Narain & Associates",
    description:
      "Trusted legal experts in Lucknow since 1934. Corporate, litigation & property law specialists.",
    url: "https://www.anuragnarainlegal.com",
    siteName: "Anurag Narain & Associates",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Law Firm in Lucknow",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Lawyers in Lucknow",
    description:
      "Expert legal services in Lucknow for corporate, litigation & property law.",
    images: ["/og-image.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="bg-white text-gray-900">
        {/* ✅ Schema (Structured Data) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Anurag Narain & Associates",
              url: "https://www.anuragnarainlegal.com",
              logo: "https://www.anuragnarainlegal.com/logo.png",
              description:
                "Providing legal services in corporate law, litigation, and property matters since 1934.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              sameAs: [
                // 🔴 social links add karna
                "https://www.linkedin.com/",
                "https://www.instagram.com/",
              ],
            }),
          }}
        />

        <WhatsAppButton />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}