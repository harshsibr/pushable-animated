"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView, LayoutGroup } from "framer-motion";
import Image from "next/image";
import {
  UserPlus, Plug, Settings, Zap, ArrowRight,
  CheckCircle, Hash, RefreshCw, Pause, Play,
} from "lucide-react";

const SANS = { fontFamily: "var(--font-inter), Inter, -apple-system, sans-serif" };

/* ── Brand logos ── */
function GmailLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <rect x="2" y="5" width="20" height="14" rx="2" stroke="#EA4335" strokeWidth="1.5" fill="white"/>
      <path d="M2 7L12 14L22 7" stroke="#EA4335" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}
function SlackLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
      <rect x="5.5" y="2"   width="3.5" height="9"   rx="1.75" fill="#E01E5A"/>
      <rect x="15"  y="2"   width="3.5" height="9"   rx="1.75" fill="#36C5F0"/>
      <rect x="2"   y="15"  width="9"   height="3.5" rx="1.75" fill="#2EB67D"/>
      <rect x="2"   y="5.5" width="9"   height="3.5" rx="1.75" fill="#E01E5A"/>
      <rect x="13"  y="15"  width="9"   height="3.5" rx="1.75" fill="#ECB22E"/>
      <rect x="15"  y="13"  width="3.5" height="9"   rx="1.75" fill="#36C5F0"/>
      <rect x="5.5" y="13"  width="3.5" height="9"   rx="1.75" fill="#2EB67D"/>
      <rect x="13"  y="5.5" width="9"   height="3.5" rx="1.75" fill="#ECB22E"/>
    </svg>
  );
}
function GitHubLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#24292E">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}
function NotionLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#000">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933z"/>
    </svg>
  );
}
function GoogleCalendarLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
      <rect x="3" y="4" width="18" height="17" rx="2" stroke="#4285F4" strokeWidth="1.5" fill="white"/>
      <path d="M3 8h18" stroke="#4285F4" strokeWidth="1.5"/>
      <rect x="8" y="2" width="2" height="4" rx="1" fill="#4285F4"/>
      <rect x="14" y="2" width="2" height="4" rx="1" fill="#4285F4"/>
      <path d="M9 13h6M12 10v6" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function GoogleSheetsLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
      <rect x="4" y="2" width="16" height="20" rx="2" fill="#34A853" opacity="0.15"/>
      <rect x="4" y="2" width="16" height="20" rx="2" stroke="#34A853" strokeWidth="1.5"/>
      <path d="M8 8h8M8 12h8M8 16h5" stroke="#34A853" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}
function GoogleDriveLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
      <path d="M8.5 3L1.5 15h5L13.5 3H8.5z"   fill="#FBBC04" opacity="0.9"/>
      <path d="M13.5 3L20.5 15h-5L8.5 3H13.5z" fill="#34A853" opacity="0.9"/>
      <path d="M6.5 15l-5 5h15l-5-5H6.5z"      fill="#4285F4" opacity="0.9"/>
    </svg>
  );
}
function OutlookLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
      <rect x="2" y="5" width="14" height="14" rx="2" fill="#0078D4"/>
      <path d="M8 9.5C8 8.67 8.67 8 9.5 8s1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5S8 13.33 8 12.5v-3z" fill="white"/>
      <path d="M16 7l6 3v4l-6 3V7z" fill="#0078D4"/>
      <rect x="14" y="7" width="2" height="10" fill="#0078D4"/>
    </svg>
  );
}
function SupabaseLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
      <path d="M11.9 2L4 13.5h8.5V22l8-11.5H12L11.9 2z" fill="#3ECF8E"/>
    </svg>
  );
}
function PerplexityLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
      <path d="M12 2l2.5 4.5L19 5l-2.5 4.5L22 12l-5.5.5L19 17l-4.5-2.5L12 20l-2.5-4.5L5 17l2.5-4.5L2 12l5.5-.5L5 7l4.5 2.5L12 2z" fill="#20B2AA" opacity="0.9"/>
    </svg>
  );
}
function TwitterXLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#000">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2 2.25h6.938l4.274 5.648 5.032-5.648zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
function ComposioLogo() {
  return (
    <div className="w-4 h-4 rounded-sm bg-slate-800 flex items-center justify-center">
      <span className="text-white text-[7px] font-black">C</span>
    </div>
  );
}

const INTEGRATIONS = [
  { name: "Gmail",           category: "Email",        Logo: GmailLogo,         bg: "#FEF2F2", border: "#FEE2E2" },
  { name: "Composio",        category: "AI Agents",    Logo: ComposioLogo,       bg: "#F8FAFC", border: "#E2E8F0" },
  { name: "GitHub",          category: "Dev Tools",    Logo: GitHubLogo,         bg: "#F6F8FA", border: "#E1E4E8" },
  { name: "Google Calendar", category: "Scheduling",   Logo: GoogleCalendarLogo, bg: "#EFF6FF", border: "#DBEAFE" },
  { name: "Notion",          category: "Notes",        Logo: NotionLogo,         bg: "#F9F9F9", border: "#E5E5E5" },
  { name: "Google Sheets",   category: "Spreadsheets", Logo: GoogleSheetsLogo,   bg: "#F0FDF4", border: "#DCFCE7" },
  { name: "Slack",           category: "Team Chat",    Logo: SlackLogo,          bg: "#FDF4FF", border: "#F3E8FF" },
  { name: "Supabase",        category: "Dev Tools",    Logo: SupabaseLogo,       bg: "#F0FDF4", border: "#BBF7D0" },
  { name: "Outlook",         category: "Email",        Logo: OutlookLogo,        bg: "#EFF6FF", border: "#BFDBFE" },
  { name: "Perplexity AI",   category: "AI",           Logo: PerplexityLogo,     bg: "#F0FDFA", border: "#CCFBF1" },
  { name: "Twitter / X",     category: "Social Media", Logo: TwitterXLogo,       bg: "#F9FAFB", border: "#E5E7EB" },
  { name: "Google Drive",    category: "File Storage", Logo: GoogleDriveLogo,    bg: "#FEFCE8", border: "#FEF08A" },
];

const STEPS = [
  {
    id: "signup",    num: "01", label: "Sign Up",        icon: UserPlus,
    accent: "#EA580C", accentLight: "#FFF7ED", accentBorder: "#FED7AA",
    title: "Create your account in seconds.",
    desc: "Sign up with just your email — no credit card, no technical setup, no onboarding call required. Your Pushable AI workspace is ready the moment you register.",
    features: ["No credit card required", "Workspace ready instantly", "Get started in under 1 minute"],
  },
  {
    id: "integrate", num: "02", label: "Integrate Tools", icon: Plug,
    accent: "#2563EB", accentLight: "#EFF6FF", accentBorder: "#BFDBFE",
    title: "Connect your tools with one click.",
    desc: "Link Slack, Gmail, HubSpot, and 100+ more tools without any code or API keys. Your agent learns what's connected and acts on live data immediately.",
    features: ["100+ one-click integrations", "No code, no API keys needed", "Syncs with live data instantly"],
  },
  {
    id: "skills",    num: "03", label: "Add Skills",      icon: Settings,
    accent: "#16A34A", accentLight: "#F0FDF4", accentBorder: "#BBF7D0",
    title: "Train your agent, your way.",
    desc: "Add skills in plain English — rules, knowledge, and decision logic. Each skill is saved so your agent remembers exactly how you work, every time.",
    features: ["Skills saved to agent memory", "Plain English training", "Agent learns your preferences"],
  },
  {
    id: "live",      num: "04", label: "Go Live",         icon: Zap,
    accent: "#7C3AED", accentLight: "#F5F3FF", accentBorder: "#DDD6FE",
    title: "Your agent goes live instantly.",
    desc: "Hit deploy and your agent starts working immediately — handling tasks, executing workflows on schedule, and reporting back around the clock.",
    features: ["Runs 24/7 without interruption", "Fully automated task handling", "Real-time reporting dashboard"],
  },
];

const slideVariants = {
  enter: (dir) => ({ x: dir * 36, opacity: 0, scale: 0.97, filter: "blur(2px)" }),
  center: { x: 0, opacity: 1, scale: 1, filter: "blur(0px)" },
  exit:  (dir) => ({ x: -dir * 24, opacity: 0, scale: 0.98, filter: "blur(1px)" }),
};
const slideTrans = { duration: 0.45, ease: [0.22, 1, 0.36, 1] };

/* ── Previews ── */
function PreviewSignup() {
  return (
    <div className="w-[300px] bg-white rounded-2xl shadow-xl shadow-slate-200/70 p-6 border border-slate-100">
      <div className="flex items-center gap-3 mb-5">
        <motion.div layoutId="agent-avatar" className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-xl shrink-0">
          🤖
        </motion.div>
        <div>
          <p className="text-[13px] font-bold text-slate-800" style={SANS}>Pushable AI</p>
          <p className="text-[11px] text-slate-400"           style={SANS}>Workspace created</p>
        </div>
        <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      </div>
      <div className="space-y-2.5 mb-4">
        {["Account created successfully", "AI workspace configured", "Agent ready to deploy"].map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.16, duration: 0.38 }}
            className="flex items-center gap-2.5 bg-emerald-50 rounded-xl px-3 py-2.5 border border-emerald-100"
          >
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <span className="text-[12px] font-medium text-slate-700" style={SANS}>{item}</span>
          </motion.div>
        ))}
      </div>
      <div className="bg-orange-50 rounded-xl px-3 py-2.5 border border-orange-100">
        <p className="text-[11px] font-semibold text-orange-600" style={SANS}>user@company.com</p>
        <p className="text-[10px] text-slate-400 mt-0.5"         style={SANS}>Signed up 2 seconds ago</p>
      </div>
    </div>
  );
}

/* Screenshot-matched Integrate preview: agent card + floating Add Tools panel */
function PreviewIntegrate() {
  return (
    <div className="relative" style={{ width: 360, height: 310 }}>

      {/* Agent card — layoutId travels this whole card to PreviewSkills */}
      <motion.div layoutId="agent-card" className="absolute left-0 top-8 w-[220px] bg-white rounded-2xl border-2 border-violet-200 shadow-lg p-4">

        {/* Header — emoji has layoutId so it travels from Signup → here → Skills */}
        <div className="flex items-center gap-2.5 mb-4">
          <motion.div layoutId="agent-avatar" className="w-9 h-9 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center text-base shrink-0">
            🤖
          </motion.div>
          <div>
            <p className="text-[12px] font-bold text-slate-800 leading-none mb-0.5" style={SANS}>Lead Qualifier</p>
            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest" style={SANS}>AI Agent</p>
          </div>
        </div>

        {/* Instructions skeleton */}
        <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.15em] mb-1.5" style={SANS}>Instructions</p>
        <div className="space-y-1.5 mb-4">
          <div className="h-2 bg-slate-100 rounded-full" />
          <div className="h-2 bg-slate-100 rounded-full" />
          <div className="h-2 bg-slate-100 rounded-full w-3/4" />
        </div>

        {/* Trigger + Tools row */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.12em] mb-1" style={SANS}>Trigger</p>
            <div className="flex items-center gap-1.5 bg-slate-50 rounded-lg px-2 py-1.5 border border-slate-100">
              <div className="w-3.5 h-3.5 bg-slate-200 rounded-sm shrink-0" />
              <div className="h-1.5 bg-slate-200 rounded-full flex-1" />
            </div>
          </div>
          <div>
            <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.12em] mb-1" style={SANS}>Tools</p>
            <div className="flex items-center gap-1 bg-violet-50 rounded-lg px-1.5 py-1.5 border border-violet-100">
              <div className="w-5 h-5 rounded-md bg-violet-200 shrink-0" />
              <div className="w-5 h-5 rounded-md bg-slate-100 flex items-center justify-center shrink-0">
                <span className="text-[9px] text-slate-400 font-semibold">+</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* "Add Tools" floating panel */}
      <motion.div
        className="absolute right-0 top-0 w-[198px] bg-white rounded-2xl shadow-2xl shadow-slate-300/50 border border-slate-100 p-3.5 z-10"
        initial={{ opacity: 0, y: -10, scale: 0.93 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.22, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[12px] font-bold text-slate-800 mb-2.5" style={SANS}>Add Tools</p>
        <div className="grid grid-cols-4 gap-1.5 mb-2.5">
          {INTEGRATIONS.map((app, i) => {
            const Logo = app.Logo;
            return (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, scale: 0.65 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.32 + i * 0.035, duration: 0.22 }}
                className="w-9 h-9 rounded-xl flex items-center justify-center border"
                style={{ background: app.bg, borderColor: app.border }}
              >
                <Logo />
              </motion.div>
            );
          })}
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <span className="text-[10px] text-slate-500 font-medium" style={SANS}>100+ apps</span>
          <span className="text-[10px] text-blue-600 font-bold cursor-pointer" style={SANS}>Browse all →</span>
        </div>
      </motion.div>
    </div>
  );
}

function PreviewSkills() {
  return (
    <div className="flex flex-col items-center gap-3">

      {/* Full card — travels here from PreviewIntegrate via agent-card layoutId */}
      <motion.div layoutId="agent-card" className="w-[330px] bg-white rounded-2xl shadow-xl shadow-slate-200/70 p-6 border-2 border-violet-200">

        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-lg shrink-0">
            🤖
          </div>
          <div>
            <p className="text-[13px] font-bold text-slate-800 leading-none mb-0.5" style={SANS}>Lead Qualifier</p>
            <p className="text-[10px] text-slate-400" style={SANS}>AI Agent</p>
          </div>
        </div>

        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2" style={SANS}>Instructions</p>
        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="bg-violet-50 rounded-xl p-3 mb-4 border border-violet-100"
        >
          <p className="text-[12px] text-slate-700 leading-relaxed" style={SANS}>
            When a new lead arrives, research their company and role. Score them 1-10 based on fit. If score &gt; 7, ask me on Slack before sending a discount.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5" style={SANS}>Trigger</p>
            <div className="flex items-center gap-1.5 bg-orange-50 rounded-lg px-2.5 py-1.5 border border-orange-100">
              <div className="w-4 h-4 rounded-md bg-orange-400 flex items-center justify-center">
                <span className="text-[7px] text-white font-black">H</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-700" style={SANS}>New Lead</span>
            </div>
          </div>
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5" style={SANS}>Tools</p>
            <div className="flex items-center gap-1">
              {[["H","#FF7A59"],["S","#4A154B"],["G","#EA4335"]].map(([t,c]) => (
                <div key={t} className="w-6 h-6 rounded-lg flex items-center justify-center text-[9px] font-black text-white" style={{ background: c }}>{t}</div>
              ))}
              <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-[9px] font-semibold text-slate-500">+</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Deploy pill — lives OUTSIDE agent-card so it can independently travel to PreviewLive's chat card */}
      <motion.div
        layoutId="agent-live-card"
        className="flex items-center gap-2.5 bg-white rounded-full border border-slate-200 px-5 py-2.5 shadow-md"
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
          transition={{ duration: 1.1, repeat: Infinity }}
        />
        <span className="text-[12px] font-semibold text-slate-700" style={SANS}>Agent ready to deploy</span>
        <span className="text-[11px] font-bold text-violet-500" style={SANS}>Go Live →</span>
      </motion.div>

    </div>
  );
}

const TABLE_ROWS = [
  { name: "Sarah Chen",   co: "Stripe",  score: 92, status: "Qualified", sc: "#16A34A", sb: "#DCFCE7" },
  { name: "Mike Johnson", co: "Shopify", score: 68, status: "Nurturing", sc: "#D97706", sb: "#FEF3C7" },
  { name: "Lisa Park",    co: "Figma",   score: 34, status: "New",       sc: "#64748B", sb: "#F1F5F9" },
  { name: "Alex Rivera",  co: "Notion",  score: 85, status: "Qualified", sc: "#16A34A", sb: "#DCFCE7" },
];

function PreviewLive() {
  return (
    <div className="relative" style={{ width: 370, height: 320 }}>

      {/* Lead Scores — left side, travels from agent-card in step 3 */}
      <motion.div
        layoutId="agent-card"
        className="absolute left-0 top-8 w-[230px] bg-white rounded-2xl shadow-lg border-2 border-violet-200 overflow-hidden"
      >
        <div className="flex items-center justify-between px-3.5 py-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-violet-100 flex items-center justify-center">
              <Hash className="w-3 h-3 text-violet-500" />
            </div>
            <span className="text-[11px] font-bold text-slate-800" style={SANS}>Lead Scores</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] text-emerald-600 font-semibold" style={SANS}>Synced</span>
          </div>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              {["Name","Score","Status"].map(h => (
                <th key={h} className="px-2.5 py-1.5 text-[8px] font-black text-slate-400 uppercase tracking-wider" style={SANS}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map((r, i) => (
              <motion.tr key={r.name} initial={{ opacity:0, x:-6 }} animate={{ opacity:1, x:0 }}
                transition={{ delay: 0.15 + i*0.09, duration: 0.32 }}
                className="border-b border-slate-50 last:border-0"
              >
                <td className="px-2.5 py-2 text-[10px] font-semibold text-slate-800" style={SANS}>{r.name.split(" ")[0]}</td>
                <td className="px-2.5 py-2">
                  <span className="text-[10px] font-black px-1.5 py-0.5 rounded-md" style={{ background:r.sb, color:r.sc }}>{r.score}</span>
                </td>
                <td className="px-2.5 py-2">
                  <span className="inline-flex items-center gap-1 text-[8px] font-semibold px-1.5 py-0.5 rounded-full" style={{ background:r.sb, color:r.sc }}>
                    <span className="w-1 h-1 rounded-full" style={{ background:r.sc }} />{r.status}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between px-3.5 py-1.5 border-t border-slate-100 bg-slate-50/60">
          <span className="text-[8px] text-slate-400" style={SANS}>6 records</span>
          <div className="flex items-center gap-1">
            <RefreshCw className="w-2 h-2 text-slate-400" />
            <span className="text-[8px] text-slate-400" style={SANS}>Updated by agent</span>
          </div>
        </div>
      </motion.div>

      {/* Chat card — top-right floating, travels from deploy pill in step 3 */}
      <motion.div
        layoutId="agent-live-card"
        className="absolute right-0 top-0 w-[212px] z-10 bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-2xl shadow-slate-300/50"
      >
        <div className="flex items-center justify-between px-3 py-2.5 border-b border-slate-100 bg-white">
          <div className="flex items-center gap-1.5">
            <motion.div
              className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.1, repeat: Infinity }}
            />
            <span className="text-[10px] font-semibold text-slate-700" style={SANS}>Agent is working...</span>
          </div>
          <span className="text-[9px] font-bold text-violet-500" style={SANS}>● Live</span>
        </div>
        <div style={{ overflow: "hidden" }}>
          <Image
            src="/chat.png"
            alt="Agent chat interface"
            width={840}
            height={520}
            style={{ width: "100%", height: "auto", display: "block" }}
            unoptimized
          />
        </div>
      </motion.div>

    </div>
  );
}

const PREVIEWS = [PreviewSignup, PreviewIntegrate, PreviewSkills, PreviewLive];

/* ═══════════════════════════════════════════════════════ */
export default function HowItWorks() {
  const [active, setActive]       = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused]       = useState(false);
  const timerRef  = useRef(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false });

  const advance = useCallback(() => {
    setDirection(1);
    setActive(p => (p + 1) % STEPS.length);
  }, []);

  const goTo = useCallback((idx) => {
    setDirection(idx > active ? 1 : -1);
    clearInterval(timerRef.current);
    setActive(idx);
    if (!paused) timerRef.current = setInterval(advance, 5200);
  }, [active, advance, paused]);

  useEffect(() => {
    if (paused) { clearInterval(timerRef.current); return; }
    timerRef.current = setInterval(advance, 5200);
    return () => clearInterval(timerRef.current);
  }, [advance, paused]);

  const step = STEPS[active];
  const PreviewComponent = PREVIEWS[active];

  return (
    <LayoutGroup>
      <section className="py-24 relative overflow-hidden" id="how-it-works">
        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* ── Header ── */}
          <div ref={headerRef} className="text-center mb-14 max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[11px] font-black text-red-600 uppercase tracking-[0.2em] mb-4"
              style={SANS}
            >
              How It Works
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={SANS}
              className="text-4xl md:text-[52px] font-black text-slate-900 leading-tight tracking-tight mb-5"
            >
              From Idea to Automation,<br />in Four Simple Steps
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={SANS}
              className="text-[17px] text-slate-600 leading-relaxed"
            >
              No technical setup needed. If you can send an email, you can run Pushable AI.
            </motion.p>
          </div>

          {/* ── Tab bar ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-1 mb-8 flex-wrap"
          >
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === active;
              return (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  style={SANS}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300 overflow-hidden outline-none ${
                    isActive
                      ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="hidden sm:inline">{s.num} —</span> {s.label}
                  {isActive && !paused && (
                    <motion.span
                      key={`prog-${active}`}
                      className="absolute bottom-0 left-0 h-[2px] bg-white/30 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5.2, ease: "linear" }}
                    />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* ── Main card ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-200/60"
            style={{ background: "#F8F9FB" }}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-200/60 bg-white/70 backdrop-blur-sm">
              <button
                onClick={() => setPaused(p => !p)}
                className="flex items-center gap-1.5 text-slate-400 hover:text-slate-700 transition-colors"
                style={SANS}
              >
                {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                <span className="text-[11px] font-semibold">{paused ? "Resume" : "Pause"}</span>
              </button>
              <div className="flex items-center gap-2">
                {STEPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? 24 : 6,
                      background: i === active ? "#0F172A" : "#CBD5E1",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Split layout */}
            <div className="grid lg:grid-cols-[1fr_1.35fr] min-h-[500px]">

              {/* Left: description */}
              <div className="relative overflow-hidden flex flex-col justify-center p-10 lg:p-14 border-r border-slate-200/60 bg-white/50">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={`left-${active}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={slideTrans}
                    className="space-y-5"
                  >
                    <div
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[11px] font-black uppercase tracking-wider"
                      style={{ background: step.accentLight, borderColor: step.accentBorder, color: step.accent, ...SANS }}
                    >
                      <step.icon className="w-3 h-3" />
                      Step {step.num} — {step.label}
                    </div>

                    <h3 style={SANS} className="text-2xl md:text-[28px] font-black text-slate-900 leading-snug">
                      {step.title}
                    </h3>
                    <p style={SANS} className="text-[15px] text-slate-500 leading-relaxed">
                      {step.desc}
                    </p>

                    <ul className="space-y-2.5">
                      {step.features.map(f => (
                        <li key={f} className="flex items-center gap-2.5 text-[13px] text-slate-700 font-medium" style={SANS}>
                          <CheckCircle className="w-4 h-4 shrink-0" style={{ color: step.accent }} />
                          {f}
                        </li>
                      ))}
                    </ul>

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right: preview with dotted grid */}
              <div
                className="relative flex items-center justify-center p-8 overflow-hidden"
                style={{
                  backgroundImage: "radial-gradient(circle, #94a3b840 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`tint-${active}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse 65% 65% at 50% 50%, ${step.accentLight}CC 0%, transparent 70%)`,
                    }}
                  />
                </AnimatePresence>

                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, #F8F9FB 100%)" }}
                />

                {/* popLayout keeps both old + new mounted briefly so layoutId can animate */}
                <AnimatePresence mode="popLayout" custom={direction}>
                  <motion.div
                    key={`preview-${active}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={slideTrans}
                    className="relative z-20 w-full flex items-center justify-center"
                  >
                    <PreviewComponent />
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="text-center mt-14"
          >
            <a
              href="#"
              style={SANS}
              className="group inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-red-600/25 hover:shadow-red-500/35 hover:-translate-y-0.5 transition-all text-[15px]"
            >
              Talk to our Expert
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>
      </section>
    </LayoutGroup>
  );
}
