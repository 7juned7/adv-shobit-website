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

// SEO Metadata
export const metadata = {
  title: "Anurag Narain & Associates | Legal Experts Since 1934",
  description:
    "A legacy law firm providing expert legal solutions in corporate law, litigation, property law, and asset protection.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="bg-white text-gray-900">
        <WhatsAppButton />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}