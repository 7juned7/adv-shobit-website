import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
// import Footer from "@/components/Footer";

import { Playfair_Display, Inter } from "next/font/google";

// Fonts
const heading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// SEO Metadata
export const metadata = {
  title: "Anurag Narain & Associates | Legal Experts Since 1934",
  description:
    "A legacy law firm providing expert legal solutions in corporate law, litigation, property law, and asset protection.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${heading.variable} ${body.variable} font-body bg-white text-gray-900`}
      >
        <WhatsAppButton/>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}