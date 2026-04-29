"use client";

import { motion } from "framer-motion";

const SERIF = { fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif" };

const integrations = [
  { name: "Slack",      abbr: "SL", bg: "bg-purple-50 border-purple-100",   text: "text-purple-600" },
  { name: "Salesforce", abbr: "SF", bg: "bg-blue-50 border-blue-100",       text: "text-blue-600" },
  { name: "HubSpot",    abbr: "HS", bg: "bg-orange-50 border-orange-100",   text: "text-orange-600" },
  { name: "Stripe",     abbr: "ST", bg: "bg-violet-50 border-violet-100",   text: "text-violet-600" },
  { name: "Gmail",      abbr: "GM", bg: "bg-red-50 border-red-100",         text: "text-red-600" },
  { name: "Notion",     abbr: "NO", bg: "bg-slate-50 border-slate-200",     text: "text-slate-700" },
  { name: "Zapier",     abbr: "ZP", bg: "bg-orange-50 border-orange-100",   text: "text-amber-600" },
  { name: "Jira",       abbr: "JR", bg: "bg-blue-50 border-blue-100",       text: "text-blue-700" },
  { name: "Airtable",   abbr: "AT", bg: "bg-teal-50 border-teal-100",       text: "text-teal-600" },
  { name: "Zoom",       abbr: "ZM", bg: "bg-blue-50 border-blue-100",       text: "text-blue-500" },
  { name: "GitHub",     abbr: "GH", bg: "bg-slate-50 border-slate-200",     text: "text-slate-800" },
  { name: "Shopify",    abbr: "SH", bg: "bg-emerald-50 border-emerald-100", text: "text-emerald-600" },
  { name: "Monday",     abbr: "MO", bg: "bg-red-50 border-red-100",         text: "text-rose-600" },
  { name: "Asana",      abbr: "AS", bg: "bg-pink-50 border-pink-100",       text: "text-pink-600" },
  { name: "Zendesk",    abbr: "ZD", bg: "bg-green-50 border-green-100",     text: "text-green-600" },
  { name: "Figma",      abbr: "FG", bg: "bg-violet-50 border-violet-100",   text: "text-violet-600" },
  { name: "Linear",     abbr: "LN", bg: "bg-indigo-50 border-indigo-100",   text: "text-indigo-600" },
  { name: "Webflow",    abbr: "WF", bg: "bg-blue-50 border-blue-100",       text: "text-blue-600" },
];

const rows = [integrations.slice(0, 6), integrations.slice(6, 12), integrations.slice(12, 18)];

export default function Integrations() {
  return (
    <section className="py-24 relative overflow-hidden" id="integrations">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 style={SERIF} className="text-4xl md:text-[52px] font-black text-slate-900 leading-tight tracking-tight mb-5">
            Works Across Your<br />Entire Stack
          </h2>
          <p className="text-[17px] text-slate-700 leading-relaxed">
            Connect Pushable AI to every tool your team already uses.
            No custom code — just plug in and automate.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="space-y-4 mb-14">
          {rows.map((row, rowIdx) => (
            <motion.div
              key={rowIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: rowIdx * 0.1 }}
              className="grid grid-cols-3 md:grid-cols-6 gap-3"
            >
              {row.map(item => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -4, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group flex flex-col items-center gap-2.5 p-4 glass rounded-2xl hover:shadow-lg hover:shadow-slate-200/60 cursor-default transition-all"
                >
                  <div className={`w-12 h-12 rounded-2xl border ${item.bg} flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow`}>
                    <span className={`text-xs font-black ${item.text}`}>{item.abbr}</span>
                  </div>
                  <span className="text-[12px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors text-center">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex items-center justify-center gap-8 flex-wrap"
        >
          {[
            { v: "100+", l: "Integrations" },
            { v: "REST API", l: "Full API access" },
            { v: "Webhooks", l: "Real-time events" },
            { v: "Custom", l: "Build your own" },
          ].map((s, i) => (
            <div key={s.v} className="flex items-center gap-8">
              {i > 0 && <div className="w-px h-10 bg-slate-200 hidden md:block -ml-8" />}
              <div className="text-center">
                <p style={SERIF} className="text-2xl font-black text-slate-900 mb-1">{s.v}</p>
                <p className="text-[13px] text-slate-500">{s.l}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
