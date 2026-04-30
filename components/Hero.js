"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const SERIF = { fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif" };


export default function Hero() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const handler = () => setStarted(true);
    window.addEventListener("heroReady", handler);
    return () => window.removeEventListener("heroReady", handler);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Vertically centered content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-24">
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
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 600 8" fill="none">
                <path d="M0 4 Q150 8 300 4 Q450 0 600 4" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
              </svg>
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
      </div>

      {/* Beige mist — 25% of previous size */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "45px",
          zIndex: 11,
          background: "linear-gradient(to bottom, transparent 0%, rgba(240,235,216,0.05) 18%, rgba(240,235,216,0.13) 35%, rgba(240,235,216,0.28) 52%, rgba(240,235,216,0.50) 68%, rgba(240,235,216,0.74) 83%, rgba(240,235,216,0.91) 93%, #F0EBD8 100%)",
        }}
      />

    </section>
  );
}
