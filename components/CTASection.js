"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

const SERIF = { fontFamily: "var(--font-inter), Inter, -apple-system, sans-serif" };

export default function CTASection() {
  return (
    <section className="pt-10 pb-24 relative overflow-hidden" id="cta">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Heading */}
          <h2 style={SERIF} className="text-5xl md:text-6xl xl:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
            Ready to Take Your
            <br />
            <span className="text-slate-900">Business Forward?</span>
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Join 500+ businesses that have handed their repetitive work to AI — and are
            growing faster, spending less, and stressing none.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4.5 rounded-full text-[16px] shadow-xl shadow-red-600/30 transition-all"
            >
              Activate Your AI Assistant
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2.5 border-2 border-slate-300 hover:border-slate-400 text-slate-800 hover:bg-slate-50 font-semibold px-8 py-4.5 rounded-full text-[16px] transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              Talk to the Team
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
