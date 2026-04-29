import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AgentCards from "@/components/AgentCards";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import PricingExplain from "@/components/PricingExplain";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import WhyTrust from "@/components/WhyTrust";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <AgentCards />
      <HowItWorks />
      <Industries />
      <PricingExplain />
      <Pricing />
      <Testimonials />
      <WhyTrust />
      <CTASection />
      <FAQ />
      <Footer />
    </main>
  );
}
