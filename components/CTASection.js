"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Zap } from "lucide-react";

const SERIF = { fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif" };

export default function CTASection() {
  return (
    <section className="py-28 relative overflow-hidden" id="cta">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-bold px-4 py-2 rounded-full shadow-sm backdrop-blur-sm"
          >
            <Zap className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            Start Automating Today
          </motion.span>

          {/* Heading */}
          <h2 style={SERIF} className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight">
            Ready to Take Your
            <br />
            <span className="gradient-text">Business Forward?</span>
          </h2>

          <p className="text-xl text-white/75 leading-relaxed max-w-2xl mx-auto">
            Join 500+ businesses that have handed their repetitive work to AI — and are
            growing faster, spending less, and stressing none.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-[18px] rounded-full text-[16px] shadow-xl shadow-red-600/30 transition-all"
            >
              <Zap className="w-5 h-5 fill-white" />
              Activate Your AI Assistant
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2.5 bg-white/10 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-[18px] rounded-full text-[16px] hover:bg-white/15 transition-all backdrop-blur-sm"
            >
              <MessageSquare className="w-5 h-5" />
              Talk to the Team
            </motion.a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
            {[
              "No credit card required",
              "14-day free trial",
              "Setup in 20 minutes",
              "Cancel anytime",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-[14px] text-white/55 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
