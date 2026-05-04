"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { MarqueeStrip } from "./TrustedBy";

const SERIF = { fontFamily: "var(--font-inter), Inter, -apple-system, sans-serif" };


export default function Hero() {
  const [started, setStarted] = useState(false);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgScale        = useTransform(scrollYProgress, [0, 1], [1, 1.22]);
  const greenRise      = useTransform(scrollYProgress, [0.08, 0.92], [0, 1]);
  const marqueeOpacity = useTransform(scrollYProgress, [0.04, 0.22], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.04, 0.28], [1, 0]);

  useEffect(() => {
    if (window.__heroReady) { setStarted(true); return; }
    const handler = () => setStarted(true);
    window.addEventListener("heroReady", handler);
    return () => window.removeEventListener("heroReady", handler);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Zoom-on-scroll background */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          scale: bgScale,
          transformOrigin: "center center",
        }}
      />


      {/* Main content */}
      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-24">
        <div className="space-y-7 text-center max-w-4xl w-full">

          {/* Headline */}
          <h1
            style={SERIF}
            className="text-[56px] sm:text-[68px] xl:text-[80px] font-black leading-[1.06] tracking-tight text-white"
          >
            <span className="block">
              <motion.span
                className="inline-block"
                initial={{ x: -120, opacity: 0 }}
                animate={started ? { x: 0, opacity: 1 } : { x: -120, opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              >
                Automated
              </motion.span>
              {" "}
              <motion.span
                className="inline-block"
                initial={{ y: -90, opacity: 0 }}
                animate={started ? { y: 0, opacity: 1 } : { y: -90, opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
              >
                AI
              </motion.span>
            </span>

            <motion.span
              className="relative inline-block"
              initial={{ opacity: 0, y: 45 }}
              animate={started ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            >
              Workflow Assistant
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={started ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.78 }}
            className="space-y-1.5 max-w-2xl mx-auto"
          >
            <p className="text-[17px] text-white/80 leading-relaxed">
              Handles repetitive tasks automatically, reducing the need for constant manual effort.
            </p>
            <p className="text-[17px] text-white/80 leading-relaxed">
              Works quietly in the background to keep your daily operations running smoothly.
            </p>
            <p className="text-[17px] text-white/80 leading-relaxed">
              Helps you stay focused on important work while it manages routine workflows efficiently.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={started ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.95 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2"
          >
            <motion.a
              href="#demo"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-full text-[15px] shadow-xl shadow-red-600/40 hover:shadow-red-500/50 transition-all"
            >
              <Play className="w-4 h-4 fill-white" />
              Watch Demo
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 border-2 border-white/60 text-white hover:bg-white/10 hover:border-white font-bold px-8 py-4 rounded-full text-[15px] transition-all"
            >
              Try Now
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

        </div>
      </motion.div>

      {/* White marquee — sits at the bottom of the hero, same sizing as standalone TrustedBy */}
      <motion.div style={{ opacity: marqueeOpacity, zIndex: 2 }} className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={started ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.1, duration: 0.9 }}
        className="pb-40 pt-4"
      >
        <p className="text-center text-[11px] font-black text-white uppercase tracking-[0.22em] mb-4">
          Trusted by AI Leaders
        </p>
        <div
          className="max-w-5xl mx-auto overflow-hidden space-y-3"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <MarqueeStrip white />
        </div>
      </motion.div>
      </motion.div>

      {/* Dark forest green rises from bottom — shade taken from background image greens */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(26,61,43,0.62) 48%, rgba(26,61,43,0.32) 72%, rgba(26,61,43,0) 100%)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          scaleY: greenRise,
          transformOrigin: "bottom",
          zIndex: 3,
        }}
      />

      {/* Bottom mist */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "40px",
          zIndex: 11,
          background: "linear-gradient(to bottom, transparent 0%, rgba(254,242,242,0.2) 55%, #FEF2F2 100%)",
        }}
      />

    </section>
  );
}
