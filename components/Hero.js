"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { MarqueeStrip } from "./TrustedBy";

const SERIF = { fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif" };

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Main content — pinned to top, below navbar */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-start pt-28 pb-10 px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="space-y-6 text-center max-w-4xl w-full"
        >
          {/* Headline */}
          <h1
            style={SERIF}
            className="text-[56px] sm:text-[68px] xl:text-[78px] font-black leading-[1.06] tracking-tight text-white"
          >
            <span className="block">
              {/* "Automated" slides in from the left */}
              <motion.span
                className="inline-block"
                initial={{ x: -120, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              >
                Automated
              </motion.span>
              {" "}
              {/* "AI" drops in from the top */}
              <motion.span
                className="inline-block"
                initial={{ y: -90, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
              >
                AI
              </motion.span>
            </span>

            {/* "Workflow Assistant" fades up with underline */}
            <motion.span
              className="relative inline-block"
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            >
              Workflow Assistant
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 600 8" fill="none">
                <path d="M0 4 Q150 8 300 4 Q450 0 600 4" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.div variants={fadeUp} className="space-y-1.5 max-w-2xl mx-auto">
            <p className="text-[17px] text-white/75 leading-relaxed">
              Handles repetitive tasks automatically, reducing the need for constant manual effort.
            </p>
            <p className="text-[17px] text-white/75 leading-relaxed">
              Works quietly in the background to keep your daily operations running smoothly.
            </p>
            <p className="text-[17px] text-white/75 leading-relaxed">
              Helps you stay focused on important work while it manages routine workflows efficiently.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
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

          {/* Trust signals */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-6 pt-1">
            {[
              "✓ No credit card required",
              "✓ 14-day free trial",
              "✓ Setup in 20 minutes",
              "✓ Cancel anytime",
            ].map(t => (
              <span key={t} className="text-[13px] text-white/45 font-medium">{t}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee strip — anchored to bottom of the hero viewport */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="relative z-10 pb-8"
      >
        <p className="text-center text-[11px] font-black text-red-500 uppercase tracking-[0.22em] mb-5">
          Trusted by AI Leaders
        </p>
        <MarqueeStrip />
      </motion.div>

    </section>
  );
}
