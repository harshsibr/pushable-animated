"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Plug, BarChart3, Zap, ArrowRight, CheckCircle } from "lucide-react";

const SERIF = { fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif" };

const steps = [
  {
    num: "01", label: "Describe", icon: MessageSquare,
    title: "Start with a conversation.",
    desc: "Tell Pushable AI what you want to automate in plain English. No flowcharts, no developers needed. Your agent is configured and ready in minutes.",
    features: ["Natural language setup", "No technical knowledge required", "Live in under 10 minutes"],
    badge: "< 10 min to go live",
    glow: "group-hover:bg-red-600/10",
    iconRing: "bg-red-500/30 border-red-400/50",
    iconColor: "text-red-400",
    numColor: "text-red-400/25",
  },
  {
    num: "02", label: "Connect", icon: Plug,
    title: "One-click integrations.",
    desc: "Link Slack, Gmail, HubSpot, and 50+ more tools in one click — no code, no APIs. Your assistant learns your workflow and starts immediately.",
    features: ["50+ one-click integrations", "No code, no APIs to configure", "Syncs with live data instantly"],
    badge: "Syncing live data",
    glow: "group-hover:bg-blue-600/10",
    iconRing: "bg-blue-500/30 border-blue-400/50",
    iconColor: "text-blue-400",
    numColor: "text-blue-400/25",
  },
  {
    num: "03", label: "Monitor", icon: BarChart3,
    title: "Watch it work in real time.",
    desc: "A live dashboard shows exactly what your agent is doing, task by task. Review, refine, and expand to new workflows as your needs grow.",
    features: ["Live task execution feed", "Full audit trail included", "Scale to more agents instantly"],
    badge: "99.9% uptime",
    glow: "group-hover:bg-emerald-600/10",
    iconRing: "bg-emerald-500/30 border-emerald-400/50",
    iconColor: "text-emerald-400",
    numColor: "text-emerald-400/25",
  },
  {
    num: "04", label: "Scale", icon: Zap,
    title: "Deploy more as you grow.",
    desc: "Adding a second or tenth agent is as simple as the first. Every new agent learns from your existing workflows automatically.",
    features: ["Unlimited parallel agents", "Agents learn from each other", "Enterprise-ready infrastructure"],
    badge: "10× capacity",
    glow: "group-hover:bg-violet-600/10",
    iconRing: "bg-violet-500/30 border-violet-400/50",
    iconColor: "text-violet-400",
    numColor: "text-violet-400/25",
  },
];

export default function HowItWorks() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false });

  return (
    <section className="py-24 relative overflow-hidden" id="how-it-works">
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-black text-red-600 uppercase tracking-[0.2em] mb-4"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={SERIF}
            className="text-4xl md:text-[52px] font-black text-slate-900 leading-tight tracking-tight mb-5"
          >
            From Idea to Automation,<br />in Four Simple Steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[17px] text-slate-600 leading-relaxed"
          >
            No technical setup needed. If you can send an email, you can run Pushable AI.
          </motion.p>
        </div>

        {/* Step flow indicator */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-10 flex-wrap"
        >
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                <span className="w-5 h-5 rounded-full bg-red-50 border border-red-200 text-[10px] font-black text-red-500 flex items-center justify-center">{s.num}</span>
                <span className="text-[12px] text-slate-500 font-semibold">{s.label}</span>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
              )}
            </div>
          ))}
        </motion.div>

        {/* 2×2 card grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative glass-dark rounded-3xl p-8 overflow-hidden border border-white/15 hover:border-white/25 transition-all group cursor-default"
            >
              {/* Hover glow overlay */}
              <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${step.glow}`} />

              {/* Giant watermark number */}
              <span
                className={`absolute -top-6 -right-3 text-[160px] font-black leading-none select-none pointer-events-none ${step.numColor}`}
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {step.num}
              </span>

              <div className="relative">
                {/* Icon + step label row */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center shrink-0 ${step.iconRing}`}>
                    <step.icon className={`w-5 h-5 ${step.iconColor}`} />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${step.iconColor}`}>{step.num}</span>
                    <span className="text-white/40 text-[10px]">—</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">{step.label}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 style={SERIF} className="text-2xl md:text-[26px] font-black text-white leading-snug mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-white/75 leading-relaxed mb-5">
                  {step.desc}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {step.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-[13px] text-white/85 font-medium">
                      <CheckCircle className={`w-3.5 h-3.5 shrink-0 ${step.iconColor}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Bottom badge */}
                <div className="flex items-center gap-2 pt-5 border-t border-white/15">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className={`text-[12px] font-semibold ${step.iconColor}`}>{step.badge}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <a href="#" className="group inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-red-600/25 hover:shadow-red-500/35 hover:-translate-y-0.5 transition-all text-[15px]">
            <MessageSquare className="w-5 h-5" />
            Talk to our Expert
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

        </motion.div>

      </div>
    </section>
  );
}
