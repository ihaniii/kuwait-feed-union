/*
 * Gulf Elegance Design — Home Page
 * Composes all sections: Hero, About, Vision/Mission, Values, Services, Membership, Contact, Footer
 * Bilingual (AR/EN) with RTL support
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import Values from "@/components/Values";
import Services from "@/components/Services";
import Membership from "@/components/Membership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Values />
      <Services />
      <Membership />
      <Contact />
      <Footer />
    </div>
  );
}
