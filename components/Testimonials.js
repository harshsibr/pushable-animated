"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const SERIF = { fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif" };

const testimonials = [
  {
    name: "Sarah Mitchell", role: "COO, FinEdge Capital", avatar: "SM",
    avatarBg: "bg-gradient-to-br from-blue-400 to-indigo-500",
    company: "FinEdge Capital", rating: 5,
    text: "Pushable AI cut our month-end close from 5 days to 18 hours. The Finance Agent handles reconciliation and variance reporting automatically. Our CFO can't imagine life before it.",
    metric: "72% faster close", metricBg: "bg-emerald-50 border-emerald-200 text-emerald-700",
  },
  {
    name: "James Okafor", role: "Head of People Ops, ScaleHQ", avatar: "JO",
    avatarBg: "bg-gradient-to-br from-violet-400 to-purple-500",
    company: "ScaleHQ", rating: 5,
    text: "We were drowning in onboarding admin. The HR Agent now handles all new hire paperwork, software provisioning requests, and 30-day check-in emails automatically. Incredible ROI.",
    metric: "60% HR admin saved", metricBg: "bg-violet-50 border-violet-200 text-violet-700",
  },
  {
    name: "Priya Sharma", role: "VP Sales, Nexus SaaS", avatar: "PS",
    avatarBg: "bg-gradient-to-br from-rose-400 to-pink-500",
    company: "Nexus SaaS", rating: 5,
    text: "Our Sales Agent qualifies leads 24/7 and drops them into our CRM with full context. Our reps now start every morning with 10 warm leads ready to call. Pipeline velocity is up 3×.",
    metric: "3× pipeline velocity", metricBg: "bg-blue-50 border-blue-200 text-blue-700",
  },
  {
    name: "Marcus Chen", role: "Founder, OpGrid", avatar: "MC",
    avatarBg: "bg-gradient-to-br from-amber-400 to-orange-500",
    company: "OpGrid", rating: 5,
    text: "The Ops Agent is like having a chief of staff who never sleeps. It tracks cross-team dependencies, sends the right updates at the right time, and keeps our projects on rails automatically.",
    metric: "50% fewer delays", metricBg: "bg-amber-50 border-amber-200 text-amber-700",
  },
  {
    name: "Elena Vasquez", role: "Director of Marketing, GrowthWave", avatar: "EV",
    avatarBg: "bg-gradient-to-br from-teal-400 to-emerald-500",
    company: "GrowthWave", rating: 5,
    text: "We went from manually scheduling 50+ posts a week to having it all run on autopilot with performance tracking built in. Our team now focuses entirely on creative strategy.",
    metric: "40h/month saved", metricBg: "bg-teal-50 border-teal-200 text-teal-700",
  },
  {
    name: "David Park", role: "CTO, Launchpad Commerce", avatar: "DP",
    avatarBg: "bg-gradient-to-br from-cyan-400 to-blue-500",
    company: "Launchpad Commerce", rating: 5,
    text: "Order processing that used to take a team of 5 now runs automatically at any scale. During our Black Friday sale, we processed 10× the usual volume without adding a single person.",
    metric: "10× order capacity", metricBg: "bg-cyan-50 border-cyan-200 text-cyan-700",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 5000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const go = (idx) => { setCurrent(idx); startTimer(); };
  const prev = () => go((current - 1 + testimonials.length) % testimonials.length);
  const next = () => go((current + 1) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className="py-24 relative overflow-hidden" id="testimonials">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 style={SERIF} className="text-4xl md:text-[52px] font-black text-white leading-tight tracking-tight mb-5">
            Teams Ship Faster<br />with Pushable AI
          </h2>
          <p className="text-[17px] text-white/75 leading-relaxed">
            Join hundreds of teams who&#39;ve transformed their operations with AI.
          </p>
        </motion.div>

        {/* Main card */}
        <div className="max-w-3xl mx-auto mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-3xl p-10 relative shadow-xl shadow-slate-200/50"
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                <Quote className="w-5 h-5 text-red-500" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>

              <p style={SERIF} className="text-xl text-slate-800 leading-relaxed font-semibold mb-8 italic">
                &#8220;{t.text}&#8221;
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${t.avatarBg} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-[13px] text-slate-500">{t.role}</p>
                  </div>
                </div>
                <span className={`text-sm font-bold px-4 py-2 rounded-xl border ${t.metricBg}`}>
                  {t.metric}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-5">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-2xl glass border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:border-slate-300 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`rounded-full transition-all ${i === current ? "w-6 h-2 bg-red-600" : "w-2 h-2 bg-slate-300 hover:bg-slate-400"}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-2xl glass border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:border-slate-300 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
