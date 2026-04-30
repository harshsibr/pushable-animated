"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SERIF = { fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif" };

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: false }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    if (!form.message.trim()) newErrors.message = true;
    if (Object.keys(newErrors).length) { setErrors(newErrors); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <div style={{ background: "#F0EBD8" }} className="relative z-10 min-h-screen pt-28 pb-20">

        {/* Hero */}
        <div className="max-w-3xl mx-auto px-6 pt-8 pb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border border-red-200 text-slate-600 text-xs px-4 py-1.5 rounded-full mb-6"
          >
            <svg className="w-3.5 h-3.5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Our team is here for you
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={SERIF}
            className="text-5xl sm:text-[58px] font-black text-slate-900 leading-tight tracking-tight mb-4"
          >
            Got a question?{" "}
            <span className="text-red-600 italic">Let&apos;s talk.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-[17px] max-w-xl mx-auto leading-relaxed"
          >
            Whether you need help, have feedback, or just want to learn more — send us a message and we&apos;ll get back to you the same day.
          </motion.p>
        </div>

        {/* Main grid */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

            {/* Form card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-sm"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={SERIF} className="text-2xl font-black text-slate-900 mb-1">Message Sent!</h3>
                    <p className="text-slate-500 text-sm">We&apos;ll get back to you within one business day.</p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "" }); }}
                    className="text-sm font-semibold text-red-600 hover:underline"
                  >
                    → Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 style={SERIF} className="text-2xl font-black text-slate-900 mb-1">Send us a message</h2>
                  <p className="text-sm text-slate-400 mb-6">Fill in the form and we&apos;ll route it to the right person.</p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField icon={<PersonIcon />} label="Full Name" required>
                        <input name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Jane Cooper"
                          className="w-full px-5 py-3 rounded-full border border-slate-200 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/10 bg-white transition-all" />
                      </FormField>
                      <FormField icon={<EmailIcon />} label="Email Address" required>
                        <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com"
                          className="w-full px-5 py-3 rounded-full border border-slate-200 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/10 bg-white transition-all" />
                      </FormField>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField icon={<PhoneIcon />} label="Phone Number" optional>
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 555 123 4567"
                          className="w-full px-5 py-3 rounded-full border border-slate-200 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/10 bg-white transition-all" />
                      </FormField>
                      <FormField icon={<BuildingIcon />} label="Company" optional>
                        <input name="company" type="text" value={form.company} onChange={handleChange} placeholder="Acme Inc."
                          className="w-full px-5 py-3 rounded-full border border-slate-200 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/10 bg-white transition-all" />
                      </FormField>
                    </div>

                    <FormField icon={<TagIcon />} label="Subject" required>
                      <input name="subject" type="text" required value={form.subject} onChange={handleChange} placeholder="What can we help with?"
                        className="w-full px-5 py-3 rounded-full border border-slate-200 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/10 bg-white transition-all" />
                    </FormField>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-slate-700">
                          Message <span className="text-red-600">*</span>
                        </span>
                        <span className="text-xs text-slate-400">{form.message.length}/4000</span>
                      </div>
                      <textarea
                        name="message" rows={5}
                        maxLength={4000}
                        value={form.message} onChange={handleChange}
                        placeholder="Tell us about your goals, timeline, and stack…"
                        className={`w-full px-5 py-3 rounded-2xl border text-sm text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-red-500/10 bg-white transition-all resize-none ${errors.message ? "border-red-500 bg-red-50" : "border-slate-200 focus:border-red-500"}`}
                      />
                      {errors.message && (
                        <p className="flex items-center gap-1.5 text-xs text-red-600 mt-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Message is required
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-1 inline-flex items-center gap-2 bg-red-600 text-white font-bold text-sm px-7 py-3.5 rounded-full hover:bg-red-500 disabled:opacity-60 transition-colors shadow-md shadow-red-600/20 self-start"
                    >
                      {loading ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Right info cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2 flex flex-col gap-4"
            >
              {/* Email */}
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="font-black text-slate-900 text-sm mb-1">Email us</p>
                <p className="text-xs text-slate-500 mb-3">We answer every message personally.</p>
                <a href="mailto:support@pushable.ai" className="text-sm font-bold text-red-600 hover:underline">
                  support@pushable.ai
                </a>
              </div>

              {/* Sales */}
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <p className="font-black text-slate-900 text-sm mb-1">Sales &amp; demos</p>
                <p className="text-xs text-slate-500 mb-3">See our platform live on a 20-minute call.</p>
                <a href="#" className="text-sm font-bold text-red-600 hover:underline">
                  Book a demo →
                </a>
              </div>

              {/* Response time */}
              <div className="bg-red-50 border border-red-100 rounded-3xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Response Time</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our team is online{" "}
                  <strong className="text-slate-900">Mon–Fri, 9am–6pm</strong>.{" "}
                  Most messages get a reply the same day.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function FormField({ icon, label, children, required, optional }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 mb-1.5">
        <span className="text-slate-400">{icon}</span>
        <span className="text-sm font-medium text-slate-700">
          {label}
          {required && <span className="text-red-600 ml-0.5">*</span>}
          {optional && <span className="text-slate-400 font-normal ml-1">(optional)</span>}
        </span>
      </div>
      {children}
    </div>
  );
}

function PersonIcon() {
  return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
}
function EmailIcon() {
  return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
}
function PhoneIcon() {
  return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
}
function BuildingIcon() {
  return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
}
function TagIcon() {
  return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>;
}
