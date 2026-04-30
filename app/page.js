import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import AgentCards from "@/components/AgentCards";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
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
        <div style={{ background: "#F0EBD8" }}><AgentCards /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#F0EBD8,#E8E0CA)" }} />
        <div style={{ background: "#E8E0CA" }}><HowItWorks /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#E8E0CA,#F5F0E5)" }} />
        <div style={{ background: "#F5F0E5" }}><Industries /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#F5F0E5,#E3D9C4)" }} />
        <div style={{ background: "#E3D9C4" }}><Pricing /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#E3D9C4,#F2EBD8)" }} />
        <div style={{ background: "#F2EBD8" }}><Testimonials /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#F2EBD8,#E6DCC8)" }} />
        <div style={{ background: "#E6DCC8" }}><WhyTrust /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#E6DCC8,#F5EFE2)" }} />
        <div style={{ background: "#F5EFE2" }}><FAQ /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#F5EFE2,#EDE5D2)" }} />
        <div style={{ background: "#EDE5D2" }}><CTASection /></div>
        <Footer />
      </div>
    </main>
  );
}
