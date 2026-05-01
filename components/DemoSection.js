"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, CheckCircle } from "lucide-react";

const SERIF = { fontFamily: "var(--font-inter), Inter, -apple-system, sans-serif" };

export default function DemoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden" id="demo">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <p className="text-[11px] font-black text-red-600 uppercase tracking-[0.2em] mb-4">Live Product Demo</p>
          <h2 style={SERIF} className="text-4xl md:text-[52px] font-black text-slate-900 leading-tight tracking-tight mb-5">
            See It Handle Work<br />Behind the Scenes
          </h2>
          <p className="text-[17px] text-slate-700 leading-relaxed">
            Watch Pushable AI autonomously process tasks, make decisions, and deliver results
            across Finance, HR, Sales, and Operations — without a single manual step.
          </p>
        </motion.div>

        {/* Browser frame */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50"
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-3 px-5 py-4 bg-white/60 border-b border-white/60">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 max-w-xs mx-auto">
              <div className="bg-white/80 border border-slate-200/60 rounded-xl px-4 py-2 text-xs text-slate-400 text-center">
                app.pushable.ai/demo
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-slate-500 font-medium">Recording</span>
            </div>
          </div>

          {/* Video area */}
          <div className="relative aspect-video bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05]" style={{
              backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }} />
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500/8 rounded-full blur-3xl" />

            {/* Dashboard preview */}
            {!playing && (
              <div className="absolute inset-8 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/8 flex flex-col gap-3 p-5 opacity-60">
                <div className="flex items-center justify-between">
                  <span className="text-white text-xs font-semibold">Pushable AI Command Center</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-[10px]">4 agents running</span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: "Finance", tasks: "48", color: "from-emerald-500 to-teal-600" },
                    { label: "HR", tasks: "12", color: "from-blue-500 to-indigo-600" },
                    { label: "Sales", tasks: "23", color: "from-violet-500 to-purple-600" },
                    { label: "Ops", tasks: "31", color: "from-amber-500 to-orange-600" },
                  ].map(a => (
                    <div key={a.label} className="bg-white/5 border border-white/8 rounded-xl p-3">
                      <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${a.color} mb-2`} />
                      <p className="text-white text-lg font-black">{a.tasks}</p>
                      <p className="text-white/40 text-[10px]">{a.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Play button */}
            {!playing && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setPlaying(true)}
                  className="relative"
                >
                  <div className="absolute inset-0 rounded-full bg-white/20 scale-150 animate-ping opacity-30" />
                  <div className="relative w-20 h-20 rounded-full bg-red-600 shadow-2xl shadow-red-600/40 flex items-center justify-center hover:bg-red-500 transition-colors">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </motion.button>
              </div>
            )}

            {playing && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <div className="w-12 h-12 rounded-full border-2 border-red-400/30 border-t-red-400 animate-spin mx-auto mb-4" />
                  <p className="text-sm">Loading demo...</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Feature chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-8"
        >
          {["Real-time task execution", "Full audit trail", "Zero manual steps", "Multi-agent coordination"].map(f => (
            <span key={f} className="flex items-center gap-1.5 text-[13px] text-slate-600 font-medium bg-white/80 backdrop-blur-sm border border-white/60 rounded-full px-4 py-2 shadow-sm">
              <CheckCircle className="w-3.5 h-3.5 text-red-500" />
              {f}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <a href="#" className="group inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-red-600/25 hover:-translate-y-0.5 transition-all text-[15px]">
            Request a Personalized Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
