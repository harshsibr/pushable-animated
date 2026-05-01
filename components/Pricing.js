"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Zap } from "lucide-react";

const SERIF = { fontFamily: "var(--font-inter), Inter, -apple-system, sans-serif" };

const plans = [
  {
    name: "FREE",
    nameColor: "text-slate-600",
    barColor: "bg-slate-200",
    tagline: "Try out AI agents with no commitment.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    free: true,
    credits: "500 credits / mo",
    creditsColor: "text-red-600",
    features: ["1 AI agent", "500 credits per month", "Basic task automation", "Community support"],
    cta: "Current plan", popular: false,
    ctaStyle: "border border-slate-300 text-slate-800 hover:border-slate-400 hover:bg-slate-50",
  },
  {
    name: "STARTER",
    nameColor: "text-slate-600",
    barColor: "bg-slate-200",
    tagline: "Everything you need to get started with AI agents.",
    monthlyPrice: 20, yearlyPrice: 16, yearlyTotal: 192,
    credits: "2,000 credits / mo",
    creditsColor: "text-red-600",
    features: ["Create & manage multiple AI agents", "Task automation and execution", "Workflow customization via UI", "Real-time task monitoring", "Usage insights & analytics"],
    cta: "Get Started", popular: false,
    ctaStyle: "border border-slate-300 text-slate-800 hover:border-slate-400 hover:bg-slate-50",
  },
  {
    name: "PRO",
    nameColor: "text-red-600",
    barColor: "bg-red-200",
    tagline: "For teams building serious agentic workflows at scale.",
    monthlyPrice: 55, yearlyPrice: 44, yearlyTotal: 528,
    credits: "7,000 credits / mo",
    creditsColor: "text-red-600",
    features: ["Everything in Starter", "7,000 credits per month", "Priority task processing", "Advanced agent capabilities", "Credit rollovers", "Early access to new features"],
    cta: "Get Started", popular: true,
    ctaStyle: "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/25",
  },
  {
    name: "ENTERPRISE",
    nameColor: "text-slate-600",
    barColor: "bg-slate-200",
    tagline: "Tailored solutions for large organizations.",
    monthlyPrice: null, yearlyPrice: null,
    credits: "Unlimited credits",
    creditsColor: "text-red-600",
    features: ["Everything in Pro", "Unlimited credits", "Dedicated infrastructure", "SSO & advanced security", "SLA guarantees", "Dedicated account manager"],
    cta: "Contact Sales", popular: false,
    ctaStyle: "border border-slate-300 text-slate-800 hover:border-slate-400 hover:bg-slate-50",
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <p className="text-[11px] font-black text-red-600 uppercase tracking-[0.2em] mb-4">Simple, Transparent Pricing</p>
          <h2 style={SERIF} className="text-4xl md:text-[52px] font-black text-slate-900 leading-tight tracking-tight mb-5">
            Flexible Plans for Every<br />Stage of Growth
          </h2>
          <p className="text-[17px] text-slate-900 mb-8">Start free. Scale as you grow. Cancel anytime.</p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-1 glass border border-white/60 rounded-full p-1.5 shadow-sm">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${!yearly ? "bg-black text-white shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-1.5 ${yearly ? "bg-black text-white shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              Yearly
              <span className="bg-emerald-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">-20%</span>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative glass rounded-3xl transition-all ${
                plan.popular
                  ? "ring-2 ring-red-400 shadow-2xl shadow-red-100 scale-[1.03]"
                  : "shadow-md shadow-slate-200/50 hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              {/* Most Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="flex items-center gap-1.5 bg-red-600 text-white text-[11px] font-black px-4 py-1.5 rounded-full shadow-lg shadow-red-600/30 whitespace-nowrap">
                    <Zap className="w-3 h-3 fill-white" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col h-full">
                {/* Plan name */}
                <div className="mb-6">
                  <div className={`h-0.5 w-12 ${plan.barColor} rounded-full mb-3`} />
                  <p className={`text-[11px] font-black tracking-widest uppercase ${plan.nameColor}`}>{plan.name}</p>
                </div>

                {/* Price */}
                <div className="mb-2">
                  {plan.monthlyPrice === null ? (
                    <p className="text-4xl font-black text-slate-900">Custom</p>
                  ) : plan.free ? (
                    <div className="flex items-end gap-1">
                      <span className="text-[13px] font-bold text-slate-500 mb-3 mr-0.5">$</span>
                      <span className="text-5xl font-black text-slate-900 leading-none">0</span>
                      <span className="text-slate-400 text-sm mb-2 ml-1">forever</span>
                    </div>
                  ) : (
                    <div className="flex items-end gap-0.5">
                      <span className="text-[13px] font-bold text-slate-500 mb-3">$</span>
                      <span className="text-5xl font-black text-slate-900 leading-none">
                        {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-slate-400 text-sm mb-2 ml-1">/mo</span>
                    </div>
                  )}
                </div>

                {/* Yearly savings */}
                <div className="h-5 mb-1">
                  {yearly && plan.yearlyTotal && (
                    <p className="text-[12px] text-slate-500">
                      ${plan.yearlyTotal}/yr <span className="text-emerald-600 font-bold">Save 20%</span>
                    </p>
                  )}
                </div>

                <p className={`text-[13px] font-bold mb-1 ${plan.creditsColor}`}>{plan.credits}</p>
                <p className="text-[13px] text-slate-900 mb-6 pb-6 border-b border-slate-100">{plan.tagline}</p>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-[13px] text-slate-900">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#"
                  className={`group flex items-center justify-center gap-2 py-3.5 rounded-full text-[14px] font-bold transition-all ${plan.ctaStyle}`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
