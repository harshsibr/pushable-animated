"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { DollarSign, Users, TrendingUp, Settings, ArrowRight } from "lucide-react";

const SERIF = { fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif" };

const agents = [
  {
    icon: DollarSign,
    iconBg: "bg-red-50", iconColor: "text-red-600",
    label: "Finance Agent", labelColor: "bg-red-50 text-red-600 border-red-200",
    title: "Build a Finance Workflow",
    desc: "Build a workflow that auto-generates invoices, chases payments, flags anomalies, and compiles reports — fully configured around your billing cycle and tools.",
    features: ["Auto-generate & send invoices", "Track expenses in real-time", "Compile monthly P&L reports", "Flag payment anomalies"],
    mockupTasks: [
      { name: "Invoice #1034", status: "Sent",       bar: 100, barColor: "bg-red-500" },
      { name: "Invoice #1035", status: "Processing", bar: 65,  barColor: "bg-red-400" },
      { name: "Expense Report", status: "Drafting",  bar: 40,  barColor: "bg-amber-500" },
      { name: "Q2 P&L Report",  status: "Queued",    bar: 10,  barColor: "bg-slate-400" },
    ],
    stats: [{ v: "340+", l: "Tasks automated" }, { v: "12", l: "Errors caught" }, { v: "94", l: "Hours saved" }],
  },
  {
    icon: Users,
    iconBg: "bg-blue-50", iconColor: "text-blue-600",
    label: "HR Agent", labelColor: "bg-blue-50 text-blue-600 border-blue-200",
    title: "Simplify Your HR Workflow",
    desc: "Streamline recruitment, automate onboarding, manage employee records and routine HR tasks. Your HR agent runs people operations while your team builds culture.",
    features: ["Automated resume screening", "Onboarding flow management", "Leave & attendance tracking", "Employee record keeping"],
    mockupTasks: [
      { name: "Resume: Sarah K.",  status: "Screened",    bar: 100, barColor: "bg-blue-500" },
      { name: "Onboarding: James", status: "In Progress", bar: 70,  barColor: "bg-blue-400" },
      { name: "Leave Request #44", status: "Approved",    bar: 100, barColor: "bg-emerald-500" },
      { name: "Payroll Summary",   status: "Queued",      bar: 15,  barColor: "bg-slate-400" },
    ],
    stats: [{ v: "280+", l: "Candidates screened" }, { v: "98%", l: "Accuracy rate" }, { v: "60h", l: "Saved/month" }],
  },
  {
    icon: TrendingUp,
    iconBg: "bg-violet-50", iconColor: "text-violet-600",
    label: "Sales Agent", labelColor: "bg-violet-50 text-violet-600 border-violet-200",
    title: "Automate Your Sales Pipeline",
    desc: "Capture inbound leads, score prospects, nurture relationships, and move deals forward automatically. Your sales agent works every lead, day and night.",
    features: ["Lead qualification & scoring", "Automated follow-up sequences", "CRM pipeline updates", "Deal progress tracking"],
    mockupTasks: [
      { name: "Lead: Acme Corp",  status: "Qualified", bar: 100, barColor: "bg-violet-500" },
      { name: "Follow-up #12",   status: "Sent",       bar: 100, barColor: "bg-violet-400" },
      { name: "Deal: TechCo",    status: "Nurturing",  bar: 55,  barColor: "bg-amber-500" },
      { name: "Outreach Batch",  status: "Scheduled",  bar: 25,  barColor: "bg-slate-400" },
    ],
    stats: [{ v: "3×", l: "Pipeline velocity" }, { v: "180+", l: "Leads qualified" }, { v: "45%", l: "Conversion lift" }],
  },
  {
    icon: Settings,
    iconBg: "bg-amber-50", iconColor: "text-amber-600",
    label: "Ops Agent", labelColor: "bg-amber-50 text-amber-700 border-amber-200",
    title: "Automate Daily Workflows",
    desc: "Coordinate tasks, manage schedules, track deliverables, and keep every department aligned without manual hand-holding. The operations backbone of your business.",
    features: ["Cross-team task coordination", "Meeting scheduling automation", "Status report generation", "SLA monitoring & alerts"],
    mockupTasks: [
      { name: "Sprint Review",  status: "Scheduled", bar: 100, barColor: "bg-amber-500" },
      { name: "Vendor Invoice", status: "Processing", bar: 60,  barColor: "bg-amber-400" },
      { name: "Weekly Report",  status: "Drafting",   bar: 35,  barColor: "bg-blue-400" },
      { name: "SLA Alert",      status: "Sent",       bar: 100, barColor: "bg-red-500" },
    ],
    stats: [{ v: "50%", l: "Fewer delays" }, { v: "420+", l: "Tasks/month" }, { v: "99%", l: "On-time rate" }],
  },
];

const statusColor = {
  Sent: "text-emerald-400", Processing: "text-amber-400", Drafting: "text-blue-400",
  Queued: "text-slate-400", Screened: "text-emerald-400", "In Progress": "text-blue-400",
  Approved: "text-emerald-400", Qualified: "text-emerald-400", Nurturing: "text-amber-400",
  Scheduled: "text-blue-400",
};

/* Animated stat counter */
function StatCount({ value }) {
  const num = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (!inView || isNaN(num)) return;
    setDisplay(0);
    let start = 0;
    const step = num / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setDisplay(num); clearInterval(timer); }
      else setDisplay(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [inView, num, value]);

  if (isNaN(num)) return <span>{value}</span>;
  return <span ref={ref}>{display}{suffix}</span>;
}

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
              className="grid lg:grid-cols-2 gap-6 items-stretch"
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

              {/* Right: dark mockup — slides in from right + floats */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={panelInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="glass-dark rounded-3xl overflow-hidden shadow-2xl shadow-black/30 h-full flex flex-col"
                >
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 px-5 py-3.5 bg-black/50 border-b border-white/8">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                      <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    </div>
                    <div className="flex-1 mx-3">
                      <div className="bg-white/8 rounded-lg px-3 py-1.5 text-xs text-white/40 text-center border border-white/8">
                        pushable.ai / workflow-builder
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] text-emerald-400 font-semibold">LIVE</span>
                    </div>
                  </div>

                  <div className="flex-1 p-6 flex flex-col">
                    {/* Agent header */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="flex items-center gap-3 mb-6"
                    >
                      <div className={`w-10 h-10 rounded-xl ${agent.iconBg} flex items-center justify-center`}>
                        <agent.icon className={`w-5 h-5 ${agent.iconColor}`} />
                      </div>
                      <div>
                        <p className="text-[13px] font-black text-white">{agent.label}</p>
                        <p className="text-[11px] text-white/45">{agent.title}</p>
                      </div>
                      <div className="ml-auto">
                        <span className="text-[10px] font-black text-emerald-400 uppercase tracking-wider">↑ live</span>
                      </div>
                    </motion.div>

                    {/* Task list — staggered slide-in */}
                    <div className="space-y-3 flex-1">
                      {agent.mockupTasks.map((task, i) => (
                        <motion.div
                          key={task.name}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.25 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                          className="bg-white/5 border border-white/8 rounded-2xl p-3.5"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[13px] text-white/80 font-medium">{task.name}</span>
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 + i * 0.09 }}
                              className={`text-[11px] font-bold ${statusColor[task.status] || "text-slate-400"}`}
                            >
                              {task.status}
                            </motion.span>
                          </div>
                          <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${task.bar}%` }}
                              transition={{ duration: 1, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                              className={`h-full rounded-full ${task.barColor}`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Animated stats */}
                    <div className="grid grid-cols-3 gap-3 mt-5">
                      {agent.stats.map((s, si) => (
                        <motion.div
                          key={s.l}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.65 + si * 0.08 }}
                          className="text-center"
                        >
                          <p className="text-[22px] font-black text-red-400">
                            <StatCount value={s.v} />
                          </p>
                          <p className="text-[10px] text-white/40 font-medium leading-tight mt-0.5">{s.l}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
