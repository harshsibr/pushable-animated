"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { DollarSign, Users, TrendingUp, Settings, ArrowRight } from "lucide-react";
import Image from "next/image";

const SERIF = { fontFamily: "var(--font-inter), Inter, -apple-system, sans-serif" };

const agents = [
  {
    icon: DollarSign,
    iconBg: "bg-red-50", iconColor: "text-red-600",
    label: "Finance Agent", labelColor: "bg-red-50 text-red-600 border-red-200",
    title: "Build a Finance Workflow",
    desc: "Build a workflow that auto-generates invoices, chases payments, flags anomalies, and compiles reports — fully configured around your billing cycle and tools.",
    features: ["Auto-generate & send invoices", "Track expenses in real-time", "Compile monthly P&L reports", "Flag payment anomalies"],
    screenshot: "/pairing.png", imagePos: "center center",
  },
  {
    icon: Users,
    iconBg: "bg-blue-50", iconColor: "text-blue-600",
    label: "HR Agent", labelColor: "bg-blue-50 text-blue-600 border-blue-200",
    title: "Simplify Your HR Workflow",
    desc: "Streamline recruitment, automate onboarding, manage employee records and routine HR tasks. Your HR agent runs people operations while your team builds culture.",
    features: ["Automated resume screening", "Onboarding flow management", "Leave & attendance tracking", "Employee record keeping"],
    screenshot: "/create.png", imagePos: "top center",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-violet-50", iconColor: "text-violet-600",
    label: "Sales Agent", labelColor: "bg-violet-50 text-violet-600 border-violet-200",
    title: "Automate Your Sales Pipeline",
    desc: "Capture inbound leads, score prospects, nurture relationships, and move deals forward automatically. Your sales agent works every lead, day and night.",
    features: ["Lead qualification & scoring", "Automated follow-up sequences", "CRM pipeline updates", "Deal progress tracking"],
    screenshot: "/chat.png", imagePos: "center center",
  },
  {
    icon: Settings,
    iconBg: "bg-amber-50", iconColor: "text-amber-600",
    label: "Ops Agent", labelColor: "bg-amber-50 text-amber-700 border-amber-200",
    title: "Automate Daily Workflows",
    desc: "Coordinate tasks, manage schedules, track deliverables, and keep every department aligned without manual hand-holding. The operations backbone of your business.",
    features: ["Cross-team task coordination", "Meeting scheduling automation", "Status report generation", "SLA monitoring & alerts"],
    screenshot: "/integration.png", imagePos: "top center",
  },
];

/* Heading words split animation */
const headingLines = ["Build Any Workflow.", "No Code. Infinite Possibilities."];

export default function AgentCards() {
  const [active, setActive] = useState(0);
  const agent = agents[active];

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const panelRef   = useRef(null);
  const timerRef   = useRef(null);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % agents.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const handleTabClick = (i) => {
    setActive(i);
    startTimer();
  };

  const headingInView = useInView(headingRef, { once: false, margin: "-80px" });
  const panelInView   = useInView(panelRef,   { once: false, margin: "-60px" });

  /* Subtle vertical parallax on scroll */
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const sectionY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="py-28 relative overflow-hidden" id="agents">
      <motion.div style={{ y: sectionY }} className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Header with word-by-word reveal ── */}
        <div ref={headingRef} className="text-center mb-16 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-black text-red-600 uppercase tracking-[0.2em] mb-5"
          >
            Fully Dynamic
          </motion.p>

          <h2 style={SERIF} className="text-4xl md:text-[52px] font-black text-slate-900 leading-tight tracking-tight mb-6 overflow-hidden">
            {headingLines.map((line, li) => (
              <span key={li} className="block overflow-hidden">
                {line.split(" ").map((word, wi) => (
                  <motion.span
                    key={wi}
                    className="inline-block mr-[0.25em]"
                    initial={{ y: "110%", opacity: 0 }}
                    animate={headingInView ? { y: 0, opacity: 1 } : {}}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                      delay: li * 0.18 + wi * 0.07,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-[17px] text-slate-600 leading-relaxed"
          >
            Deploy AI agents built for your exact business function — each one pre-trained and ready in minutes.
          </motion.p>
        </div>

        {/* ── Tab pills with sliding indicator ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {agents.map((a, i) => (
            <motion.button
              key={a.label}
              onClick={() => handleTabClick(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold border transition-colors duration-200 overflow-hidden ${
                active === i
                  ? "bg-black text-white border-black shadow-lg shadow-black/20"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <a.icon className="w-4 h-4" />
              {a.label}
              {active === i && (
                <motion.span
                  key={active}
                  className="absolute bottom-0 left-0 h-0.5 bg-red-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* ── Main panel ── */}
        <div ref={panelRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="grid lg:grid-cols-2 gap-6 items-center"
            >
              {/* Left: content card — slides in from left */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={panelInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="glass rounded-3xl p-8 flex flex-col shadow-xl shadow-slate-200/40"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                  className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full border w-fit mb-6 uppercase tracking-wider ${agent.labelColor}`}
                >
                  <agent.icon className="w-3.5 h-3.5" />
                  {agent.label}
                </motion.span>

                <motion.h3
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.15 }}
                  style={SERIF}
                  className="text-3xl font-black text-slate-900 leading-snug mb-4"
                >
                  {agent.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 }}
                  className="text-[15px] text-slate-600 leading-relaxed mb-6 flex-1"
                >
                  {agent.desc}
                </motion.p>

                {/* Feature list — staggered */}
                <ul className="space-y-3 mb-8">
                  {agent.features.map((f, fi) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.28 + fi * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-center gap-3 text-[14px] text-slate-700 font-medium"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + fi * 0.07, type: "spring", stiffness: 400 }}
                        className="w-2 h-2 rounded-full bg-red-500 shrink-0"
                      />
                      {f}
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.55 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3.5 rounded-full text-[14px] w-fit shadow-lg shadow-red-600/25 transition-colors"
                >
                  Start Building
                  <ArrowRight className="w-4 h-4" />
                </motion.a>

                <div className="flex gap-2 mt-6">
                  {agents.map((_, i) => (
                    <motion.button
                      key={i}
                      onClick={() => handleTabClick(i)}
                      whileHover={{ scale: 1.3 }}
                      className={`rounded-full transition-all duration-300 ${i === active ? "w-6 h-2 bg-red-600" : "w-2 h-2 bg-slate-300 hover:bg-slate-400"}`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Right: full natural image — no fixed height, no blank space, no cropping */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={panelInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full rounded-3xl overflow-hidden shadow-2xl shadow-black/15"
                >
                  <Image
                    src={agent.screenshot}
                    alt={`${agent.label} screenshot`}
                    width={1920}
                    height={1080}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    priority
                    unoptimized
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
