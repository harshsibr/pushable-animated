import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import ShowcaseCards from "@/components/ShowcaseCards";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import Pricing from "@/components/Pricing";
import WhyTrust from "@/components/WhyTrust";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* Post-hero sections — beige family palette, TrustedBy + AgentCards share the same tone */}
      <div className="relative z-10">
        <div style={{ background: "#F0EBD8" }}><TrustedBy /></div>
        <div style={{ background: "#F0EBD8" }}><ShowcaseCards /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#F0EBD8,#E8E0CA)" }} />
        <div style={{ background: "#E8E0CA" }}><HowItWorks /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#E8E0CA,#F5F0E5)" }} />
        <div style={{ background: "#F5F0E5" }}><Industries /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#F5F0E5,#E3D9C4)" }} />
        <div style={{ background: "#E3D9C4" }}><Pricing /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#E3D9C4,#F0EBD8)" }} />
        <div style={{ background: "#F0EBD8" }}><WhyTrust /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#F0EBD8,#E8E0CA)" }} />
        <div style={{ background: "#E8E0CA" }}><FAQ /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#E8E0CA,#F0EBD8)" }} />
        <div style={{ background: "#F0EBD8" }}><CTASection /></div>
        <Footer />
      </div>
    </main>
  );
}
