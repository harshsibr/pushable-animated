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
      {/* Solid white wrapper — hides the fixed video behind all post-Hero sections */}
      <div className="relative z-10 bg-[#EDE8D0]">
        <TrustedBy />
        <AgentCards />
        <HowItWorks />
        <Industries />
        <Pricing />
        <Testimonials />
        <WhyTrust />
        <FAQ />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
