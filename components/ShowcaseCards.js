"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { DollarSign, Users, TrendingUp, Settings } from "lucide-react";

const SERIF = { fontFamily: "var(--font-inter), Inter, -apple-system, sans-serif" };

const slides = [
  {
    icon: Settings,
    label: "Integrations Marketplace",
    title: "Connect 100+ tools in one click",
    desc: "Drop in Gmail, Slack, HubSpot and 50+ pre-built connectors without writing a line of code. Your agent learns what's connected and acts on it instantly.",
    image: "/integration.png",
  },
  {
    icon: Users,
    label: "Agent Builder",
    title: "Build any workflow without code",
    desc: "Describe what you want in plain English. Pushable configures your agent, selects the right tools, and deploys it live in under 10 minutes.",
    image: "/create.png",
  },
  {
    icon: TrendingUp,
    label: "AI Chat Interface",
    title: "Talk directly to your workflows",
    desc: "Ask your agent anything in natural language. It understands context, remembers every conversation, and takes real action — no commands required.",
    image: "/chat.png",
  },
  {
    icon: DollarSign,
    label: "Smart Agent Pairing",
    title: "The right agent for every task",
    desc: "Pushable automatically routes each request to the best-fit agent based on context and history. Zero manual assignment, maximum throughput.",
    image: "/pairing.png",
  },
];

/* activepieces-style stacking — each depth level shifts right, up, and rotates slightly */
const STACK = [
  { x: 0,   y: 0,    rotate: 0,   scale: 1,     opacity: 1,    z: 40 },
  { x: 8,  y: -44,  rotate: 1.2, scale: 0.984, opacity: 0.80, z: 30 },
  { x: 16,  y: -88,  rotate: 2.4, scale: 0.968, opacity: 0.58, z: 20 },
  { x: 32,  y: -132, rotate: 3.6, scale: 0.952, opacity: 0.38, z: 10 },
];

export default function ShowcaseCards() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: "-80px" });

  const advance = useCallback(() => setActive(p => (p + 1) % slides.length), []);

  const goTo = useCallback((idx) => {
    clearInterval(timerRef.current);
    setActive(idx);
    timerRef.current = setInterval(advance, 5000);
  }, [advance]);

  useEffect(() => {
    timerRef.current = setInterval(advance, 5000);
    return () => clearInterval(timerRef.current);
  }, [advance]);

  const order = Array.from({ length: slides.length }, (_, i) => (active + i) % slides.length);
  const current = slides[active];

  return (
    <section ref={sectionRef} className="py-28 overflow-hidden" id="agents">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-black text-red-600 uppercase tracking-[0.2em] mb-4"
          >
            Fully Dynamic
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={SERIF}
            className="text-4xl md:text-[52px] font-black text-slate-900 leading-tight tracking-tight mb-4"
          >
            Build Any Workflow.<br />No Code. Infinite Possibilities.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[17px] text-slate-500 max-w-xl mx-auto"
          >
            Deploy AI agents built for your exact business function — each one pre-trained and ready in minutes.
          </motion.p>
        </div>

        {/* ── Main layout ── */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-24 items-center">

          {/* Left: description + tab list */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-600 text-[11px] font-black uppercase tracking-wider">
                <current.icon className="w-3 h-3" />
                {current.label}
              </span>

              <h3 style={SERIF} className="text-3xl md:text-[38px] font-black text-slate-900 leading-snug">
                {current.title}
              </h3>

              <p className="text-[16px] text-slate-500 leading-relaxed">
                {current.desc}
              </p>

              {/* Tab list */}
              <div className="flex flex-col gap-1.5 pt-2">
                {slides.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.label}
                      onClick={() => goTo(i)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                        i === active
                          ? "bg-black text-white shadow-lg shadow-black/10"
                          : "text-slate-500 hover:text-slate-800 hover:bg-black/5"
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${i === active ? "text-red-400" : "text-slate-400"}`} />
                      <span className="text-[13px] font-semibold flex-1">{s.label}</span>
                      {i === active && (
                        <motion.span
                          key={active}
                          className="h-1 rounded-full bg-red-500 block shrink-0"
                          initial={{ width: 0 }}
                          animate={{ width: 36 }}
                          transition={{ duration: 5, ease: "linear" }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right: stacked cards */}
          {/* paddingTop = total y-offset of furthest back card (132px) */}
          <div className="relative" style={{ height: 620, paddingTop: 132 }}>
            <div className="relative w-full h-full">
              {order.map((slideIdx, depth) => {
                const cfg = STACK[depth];
                const slide = slides[slideIdx];
                const isActive = depth === 0;
                return (
                  <motion.div
                    key={slideIdx}
                    animate={{
                      x: cfg.x,
                      y: cfg.y,
                      rotate: cfg.rotate,
                      scale: cfg.scale,
                      opacity: cfg.opacity,
                      zIndex: cfg.z,
                    }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className={`absolute inset-0 bg-white rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/60 ${
                      !isActive ? "cursor-pointer" : ""
                    }`}
                    onClick={() => !isActive && goTo(slideIdx)}
                    style={{ transformOrigin: "bottom left" }}
                  >
                    {/* Label bar */}
                    <div className="flex items-center gap-2.5 px-5 py-3 border-b border-slate-100 shrink-0 bg-white">
                      <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                      <span className="text-[12px] font-semibold text-slate-500 truncate">{slide.label}</span>
                    </div>
                    {/* Full screenshot — no cropping */}
                    <Image
                      src={slide.image}
                      alt={slide.label}
                      width={1440}
                      height={900}
                      style={{ width: "100%", height: "auto", display: "block" }}
                      priority={isActive}
                      unoptimized
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
