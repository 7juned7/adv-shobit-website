import AboutSection from "@/components/AboutUs";
import Contact from "@/components/ContactUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesPage from "@/components/Services";
import TeamSection from "@/components/TeamSection";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <HeroSection/>
      <ServicesPage/>
      <AboutSection/>
      <TeamSection/>
      <Contact/>
      
    </div>
  );
}
