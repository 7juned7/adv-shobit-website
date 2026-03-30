import AboutSection from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import ServicesPage from "@/components/Services";
import TeamSection from "@/components/TeamSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[100rem]">
      <HeroSection/>
      <ServicesPage/>
      <AboutSection/>
      <TeamSection/>
    </div>
  );
}
