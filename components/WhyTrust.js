"use client";

import { motion } from "framer-motion";
import { Cpu, Brain, RefreshCw, Clock, Shield, TrendingUp, ArrowRight } from "lucide-react";

const SERIF = { fontFamily: "var(--font-inter), Inter, -apple-system, sans-serif" };

const reasons = [
  { icon: RefreshCw, title: "Reduced Manual Work",       desc: "Eliminate repetitive tasks that drain your team's energy. Pushable AI handles the routine so your people focus on work that requires human judgment." },
  { icon: Brain,     title: "Smart Decision Making",     desc: "Each agent is trained on domain-specific knowledge and learns from your workflows — making context-aware decisions, not just rule-based actions." },
  { icon: Shield,    title: "Consistency Without Glitch", desc: "AI agents don't have off days. Every task is executed with the same precision, following the same logic, every single time." },
  { icon: Clock,     title: "No Task Delays",            desc: "Your agents work 24/7 across time zones without queues or bottlenecks. Tasks are picked up and completed the moment they arrive." },
  { icon: TrendingUp, title: "Measurable ROI",           desc: "Track exactly what each agent delivers — tasks completed, time saved, cost reduced. You always know the business value generated." },
  { icon: Cpu,       title: "Enterprise-Grade Security", desc: "Built on SOC 2 compliant infrastructure with end-to-end encryption, role-based access, and a full audit trail." },
];

export default function WhyTrust() {
  return (
    <section className="py-24 relative overflow-hidden" id="why-pushable">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — sticky heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-[11px] font-black text-red-600 uppercase tracking-[0.2em] mb-4">Why 500+ Teams Choose Us</p>
            <h2 style={SERIF} className="text-4xl md:text-[52px] font-black text-slate-900 leading-tight tracking-tight mb-6">
              Why Businesses<br />Trust<br />
              <span className="gradient-text">Pushable AI?</span>
            </h2>
            <p className="text-[17px] text-slate-600 leading-relaxed mb-8 max-w-sm">
              We didn&#39;t just build an AI tool. We built an AI workforce that performs,
              scales, and gets smarter — day after day.
            </p>

            <a
              href="#"
              className="group inline-flex items-center gap-2 text-[15px] font-bold text-red-600 hover:text-red-500 transition-colors"
            >
              Talk to our Expert
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

          </motion.div>

          {/* Right — 2×3 card grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass rounded-3xl p-6 hover:shadow-xl hover:shadow-slate-200/50 transition-all group shadow-md"
              >
                <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <r.icon className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-[15px] font-black text-slate-900 mb-2">{r.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
