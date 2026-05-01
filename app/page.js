import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
      <div className="relative z-10">
        <div style={{ background: "#DCFCE7" }}><ShowcaseCards /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#DCFCE7,#F5F4F1)" }} />
        <div style={{ background: "#F5F4F1" }}><HowItWorks /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#F5F4F1,#F0FDF4)" }} />
        <div style={{ background: "#F0FDF4" }}><Industries /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#F0FDF4,#F5F3FF)" }} />
        <div style={{ background: "#F5F3FF" }}><Pricing /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#F5F3FF,#FFFBEB)" }} />
        <div style={{ background: "#FFFBEB" }}><WhyTrust /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#FFFBEB,#F0F9FF)" }} />
        <div style={{ background: "#F0F9FF" }}><FAQ /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#F0F9FF,#FFF1F2)" }} />
        <div style={{ background: "#FFF1F2" }}><CTASection /></div>
        <Footer />
      </div>
    </main>
  );
}
