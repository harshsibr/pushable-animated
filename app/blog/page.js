"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SERIF = { fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif" };

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div style={{ background: "#F0EBD8" }} className="relative z-10 min-h-screen pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6 pt-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-black text-red-600 uppercase tracking-[0.2em] mb-4"
          >
            Pushable AI Blog
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={SERIF}
            className="text-5xl sm:text-[58px] font-black text-slate-900 leading-tight tracking-tight mb-5"
          >
            Insights on AI &amp;<br />Automation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[17px] text-slate-500 leading-relaxed mb-10"
          >
            Tips, guides, and stories on building smarter workflows with AI agents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-6 py-3 text-sm text-slate-500 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Articles coming soon — stay tuned.
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
