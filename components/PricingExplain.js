"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, CreditCard, RotateCcw } from "lucide-react";

const SERIF = { fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif" };

function AnimatedCounter({ target, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const creditPoints = [
  {
    icon: Zap,
    title: "1 Credit = 1 Task",
    desc: "Each completed action uses exactly one credit — nothing more",
  },
  {
    icon: CreditCard,
    title: "Only Pay for Results",
    desc: "Credits deduct only when your AI finishes a real task",
  },
  {
    icon: RotateCcw,
    title: "Credits Never Expire",
    desc: "Unused credits roll over every month — nothing is wasted",
  },
];

export default function PricingExplain() {
  const [sliderValue, setSliderValue] = useState(50);
  const tasksPerMonth = Math.round(sliderValue * 200);
  const hoursSaved = Math.round(sliderValue * 4);
  const moneySaved = Math.round(sliderValue * 18);
  const creditCost = Math.round(sliderValue * 1.5);

  return (
    <section className="py-24 relative overflow-hidden" id="pricing-model">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-[11px] font-black text-red-600 uppercase tracking-[0.2em] mb-4">Fair &amp; Transparent Pricing</p>
          <h2 style={SERIF} className="text-4xl md:text-[52px] font-black text-white leading-tight tracking-tight mb-5">
            You Don&#39;t Pay for Access.<br />
            <span className="gradient-text">You Pay for Output.</span>
          </h2>
          <p className="text-[17px] text-white/75 leading-relaxed max-w-2xl mx-auto">
            Think of credits like task tokens — one credit equals one completed action.
            An invoice sent, a lead followed up, a report filed. You only pay for work that actually gets done.
          </p>
        </motion.div>

        {/* Credit model chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-3xl p-6 mb-14 shadow-lg shadow-slate-200/40"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {creditPoints.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mb-3">
                  <p.icon className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="font-black text-slate-900 text-[15px] mb-1">{p.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/40 max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 style={SERIF} className="text-2xl font-black text-slate-900 mb-2">Calculate Your ROI</h3>
            <p className="text-slate-500 text-[15px]">Drag the slider to match your team&#39;s workload</p>
          </div>

          <div className="mb-10">
            <div className="flex justify-between text-sm text-slate-500 mb-3">
              <span>Small team</span>
              <span className="font-bold text-slate-900">{sliderValue} tasks/day</span>
              <span>Enterprise</span>
            </div>
            <input
              type="range" min="1" max="200" value={sliderValue}
              onChange={e => setSliderValue(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer accent-red-600"
              style={{ background: `linear-gradient(to right, #DC2626 0%, #DC2626 ${sliderValue / 2}%, #E2E8F0 ${sliderValue / 2}%, #E2E8F0 100%)` }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Tasks / Month", value: tasksPerMonth.toLocaleString(), color: "border-red-200 bg-red-50/60", text: "text-red-700" },
              { label: "Hours Saved",   value: `${hoursSaved.toLocaleString()}h`,  color: "border-emerald-200 bg-emerald-50/60", text: "text-emerald-700" },
              { label: "Cost Saved",    value: `$${moneySaved.toLocaleString()}`,  color: "border-violet-200 bg-violet-50/60", text: "text-violet-700" },
              { label: "Credits Used",  value: creditCost.toLocaleString(),        color: "border-amber-200 bg-amber-50/60", text: "text-amber-700" },
            ].map(s => (
              <div key={s.label} className={`${s.color} border rounded-2xl p-5 text-center`}>
                <p className={`text-2xl font-black mb-1 ${s.text}`}>{s.value}</p>
                <p className="text-xs font-semibold text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-[12px] mt-6">Based on average team performance. Actual results may vary.</p>
        </motion.div>

        {/* Big counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-16 text-center"
        >
          {[
            { target: 10, suffix: "M+", label: "Tasks completed" },
            { target: 98, suffix: "%",  label: "Customer retention" },
            { target: 30, suffix: "×",  label: "Average ROI" },
          ].map(s => (
            <div key={s.label}>
              <p style={SERIF} className="text-3xl md:text-5xl font-black text-white">
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </p>
              <p className="text-[13px] text-white/55 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
