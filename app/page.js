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
        <div style={{ height: 80, background: "linear-gradient(to bottom,#F5F4F1,#DCFCE7)" }} />
        <div style={{ background: "#DCFCE7" }}><Industries /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#DCFCE7,#EFF6FF)" }} />
        <div style={{ background: "#EFF6FF" }}><Pricing /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#EFF6FF,#DCFCE7)" }} />
        <div style={{ background: "#DCFCE7" }}><WhyTrust /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#DCFCE7,#FFF7ED)" }} />
        <div style={{ background: "#FFF7ED" }}><FAQ /></div>
        <div style={{ height: 80, background: "linear-gradient(to bottom,#FFF7ED,#DCFCE7)" }} />
        <div style={{ background: "#DCFCE7" }}><CTASection /></div>
        <Footer />
      </div>
    </main>
  );
}
