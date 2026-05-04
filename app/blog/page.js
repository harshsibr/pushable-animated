"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { blogPosts, getAllCategories } from "@/lib/blogData";

const SERIF = { fontFamily: "var(--font-inter), Inter, -apple-system, sans-serif" };

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = getAllCategories();

  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.blog_category === activeCategory);

  return (
    <>
      <Navbar />
      <div style={{ background: "#F0EBD8" }} className="relative z-10 min-h-screen pt-28 pb-24">

        {/* Hero */}
        <div className="max-w-3xl mx-auto px-6 pt-14 text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-black text-red-600 uppercase tracking-[0.2em] mb-4"
          >
            Pushable AI Blog
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={SERIF}
            className="text-5xl sm:text-[58px] font-black text-slate-900 leading-tight tracking-tight mb-5"
          >
            Insights on AI &amp;<br />Automation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[17px] text-slate-500 leading-relaxed"
          >
            Tips, guides, and stories on building smarter workflows with AI agents.
          </motion.p>
        </div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12 px-6"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-red-600 text-white border-red-600 shadow-md shadow-red-200"
                  : "bg-white text-slate-500 border-slate-200 hover:border-red-200 hover:text-red-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
