import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import BranchesSection from "../components/BranchesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Cinzel', 'Georgia', serif" }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BranchesSection />
      <Footer />
    </div>
  );
}
