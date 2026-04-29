"use client";

import { motion } from "framer-motion";
import { Code2, Megaphone, DollarSign, Settings, Briefcase, LayoutGrid, ArrowRight } from "lucide-react";

const SERIF = { fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif" };

const industries = [
  {
    icon: Code2,
    label: "SaaS",
    desc: "Your AI assistant handles onboarding sequences, churn follow-ups, and renewal reminders automatically — so your team focuses on building, not chasing.",
  },
  {
    icon: Megaphone,
    label: "Marketing Agencies",
    desc: "Automate client reports, campaign scheduling, and performance tracking across all accounts — so your team delivers more value without adding headcount.",
  },
  {
    icon: DollarSign,
    label: "Finance",
    desc: "Generate invoices on schedule, reconcile accounts, and flag payment anomalies automatically — so nothing slips through the cracks at month-end.",
  },
  {
    icon: Settings,
    label: "Operations",
    desc: "Coordinate cross-team workflows, maintain SOPs, and escalate blockers before they delay delivery — so your operations run like clockwork every day.",
  },
  {
    icon: Briefcase,
    label: "Agencies",
    desc: "Handle client onboarding, automate billing, and keep project timelines on track — so your team spends time on client work, not admin.",
  },
  {
    icon: LayoutGrid,
    label: "Your Industry",
    desc: "Don't see yours listed? Pushable AI adapts to any workflow across any sector.",
    cta: true,
  },
];

export default function Industries() {
  return (
    <section className="py-24 relative overflow-hidden" id="industries">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-[11px] font-black text-red-600 uppercase tracking-[0.2em] mb-4">Built for Every Industry</p>
          <h2 style={SERIF} className="text-4xl md:text-[52px] font-black text-white leading-tight tracking-tight mb-5">
            The Right Push for Every Industry,<br />Built with Pushable
          </h2>
          <p className="text-[17px] text-white/75 leading-relaxed">
            Whatever your business does, Pushable AI finds the routine tasks worth automating and handles them for you.
          </p>
        </motion.div>

        {/* Card grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`glass rounded-3xl p-7 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all group shadow-md ${ind.cta ? "border-dashed" : ""}`}
            >
              <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <ind.icon className="w-5 h-5 text-red-600" />
              </div>
              <h3 style={SERIF} className="text-xl font-black text-slate-900 mb-3">{ind.label}</h3>
              <p className="text-[14px] text-slate-600 leading-relaxed mb-4 flex-1">{ind.desc}</p>
              {ind.cta ? (
                <a href="#" className="inline-flex items-center gap-1.5 text-[13px] font-bold text-red-600 hover:text-red-500 transition-colors group/link">
                  Talk to us
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              ) : (
                <a href="#" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-500 hover:text-slate-800 transition-colors group/link">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
