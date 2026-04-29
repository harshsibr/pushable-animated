"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const links = {
  Product:   ["Features", "Pricing", "Changelog", "Roadmap"],
  Solutions: ["Finance Agent", "HR Agent", "Sales Agent", "Ops Agent"],
  Company:   ["About Us", "Blog", "Careers", "Contact"],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setSent(true); setEmail(""); }
  };

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(220,38,38,0.5) 40%, rgba(220,38,38,0.5) 60%, transparent)" }} />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* Link columns + newsletter */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/8">
          {Object.entries(links).map(([category, items], ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
            >
              <p className="text-[11px] font-black text-white/50 uppercase tracking-widest mb-4">{category}</p>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-[13px] text-white/60 hover:text-white transition-colors group flex items-center gap-1">
                      <span className="w-0 group-hover:w-2 h-px bg-red-500 transition-all duration-200 shrink-0" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter as 4th column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <p className="text-[11px] font-black text-white/50 uppercase tracking-widest mb-4">Stay in the loop</p>
            {sent ? (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[13px] text-emerald-400 font-semibold flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                You&#39;re subscribed!
              </motion.p>
            ) : (
              <>
                <p className="text-[13px] text-white/55 mb-3 leading-relaxed">Get product updates and tips straight to your inbox.</p>
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 min-w-0 bg-white/6 border border-white/12 rounded-xl px-3.5 py-2.5 text-[13px] text-white placeholder-white/25 focus:outline-none focus:border-red-500/60 transition-colors"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-red-600 hover:bg-red-500 flex items-center justify-center transition-colors shrink-0"
                  >
                    <ArrowRight className="w-4 h-4 text-white" />
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-[12px] text-white/40">
            © {new Date().getFullYear()} Pushable AI, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
