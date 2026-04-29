"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const SERIF = { fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif" };

const faqs = [
  {
    q: "How are AI Assistants different from AI tools?",
    a: "Most AI tools wait for you to ask a question. Pushable AI Assistants are autonomous agents that proactively execute multi-step workflows on your behalf — reading data, making decisions, taking actions, and reporting back. They don't just answer; they do the work.",
  },
  {
    q: "Do I need technical knowledge to use Pushable AI?",
    a: "None at all. Pushable AI is designed for business users, not engineers. You configure agents through a visual settings panel, connect your tools through OAuth in one click, and write rules in plain English. If you can use a CRM, you can use Pushable AI.",
  },
  {
    q: "What industries can benefit from Pushable AI?",
    a: "Pushable AI is actively used in Healthcare, Finance, E-commerce, Marketing, SaaS, and Operations. However, any business with repetitive workflows — whether in legal, real estate, logistics, or professional services — can deploy an agent and see immediate results.",
  },
  {
    q: "Can I replace my team with an AI assistant?",
    a: "Pushable AI is designed to augment your team, not replace it. Agents handle the repetitive, time-consuming tasks so your people can focus on creative, strategic, and relationship-driven work where human judgment is irreplaceable. Most teams scale output without adding headcount.",
  },
  {
    q: "How does Pushable AI improve business operations?",
    a: "By eliminating the manual work between your tools and teams. Agents connect your SaaS stack, monitor for trigger conditions, execute defined workflows, and report outcomes. The result is faster cycle times, fewer errors, lower overhead, and a team that works on meaningful problems.",
  },
  {
    q: "Can Pushable AI integrate with my existing tools?",
    a: "Yes — Pushable AI supports 100+ native integrations including Salesforce, HubSpot, Slack, Gmail, Notion, Stripe, Jira, Airtable, Shopify, and many more. For tools not on the list, you can use our REST API or Webhooks to build custom connections.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 relative overflow-hidden" id="faq">
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-black text-red-600 uppercase tracking-[0.2em] mb-4">Frequently Asked Questions</p>
          <h2 style={SERIF} className="text-4xl md:text-[52px] font-black text-white leading-tight tracking-tight mb-5">
            Got Questions?<br />We Have Answers.
          </h2>
          <p className="text-[17px] text-white/75">Everything you need to know about Pushable AI.</p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`glass rounded-2xl overflow-hidden transition-all ${
                open === i ? "shadow-lg shadow-slate-200/50" : "shadow-sm hover:shadow-md"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
              >
                <span className="text-[15px] font-semibold text-slate-800 leading-snug">{faq.q}</span>
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                    open === i
                      ? "bg-red-600 text-white"
                      : "bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-600"
                  }`}
                >
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-7 pb-6">
                      <div className="h-px bg-slate-200/80 mb-4" />
                      <p className="text-[14px] text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom prompt */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-white/55 mb-3">Still have questions?</p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-red-600 font-bold hover:text-red-500 underline underline-offset-4 decoration-red-400/50 hover:decoration-red-500 transition-colors"
          >
            Chat with our team →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
