"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Product",    dropdown: ["Finance Agent", "HR Agent", "Sales Agent", "Operations Agent"] },
  { label: "How it Works" },
  { label: "Industries", dropdown: ["Healthcare", "Finance", "E-commerce", "Marketing", "SaaS"] },
  { label: "Pricing" },
  { label: "FAQ" },
  { label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4"
      >
        <div className={`bg-black rounded-full px-5 py-3 flex items-center justify-between gap-6 transition-all duration-300 ${scrolled ? "shadow-2xl shadow-black/40" : ""}`}>
          {/* Logo */}
          <a href="#" className="shrink-0">
            <img
              src="/logo.png.png"
              alt="Pushable"
              className="h-8 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-1.5 text-[13px] font-medium text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-all">
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 text-white/50 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                  )}
                </button>
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.16 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-2 z-50"
                    >
                      {link.dropdown.map((item) => (
                        <a key={item} href="#"
                          className="flex items-center gap-2.5 px-3 py-2.5 text-[12px] text-white/65 hover:text-white hover:bg-white/8 rounded-xl transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#"
            className="hidden lg:inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-500 text-white text-[13px] font-bold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-red-600/30 hover:shadow-red-500/40 shrink-0"
          >
            Get Started
            <span className="text-[12px]">→</span>
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-1.5 rounded-full text-white hover:bg-white/10 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-black/96 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8"
          >
            <nav className="flex flex-col gap-1 flex-1">
              {navLinks.map((link, i) => (
                <motion.a key={link.label} href="#"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="px-4 py-4 text-[17px] font-semibold text-white/80 hover:text-white hover:bg-white/8 rounded-2xl transition-all"
                  onClick={() => setMobileOpen(false)}>
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
              <a href="#" className="text-center py-4 rounded-full bg-red-600 text-white font-bold flex items-center justify-center gap-1.5">
                Get Started →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
