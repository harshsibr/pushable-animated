"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SERIF = { fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif" };

const CATEGORY_COLORS = {
  Automation: "bg-red-50 text-red-600 border-red-100",
  Productivity: "bg-amber-50 text-amber-600 border-amber-100",
  Product: "bg-violet-50 text-violet-600 border-violet-100",
  Technology: "bg-blue-50 text-blue-600 border-blue-100",
  "Case Study": "bg-emerald-50 text-emerald-700 border-emerald-100",
};

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function stripAndTruncate(html, wordLimit = 22) {
  if (!html) return "";
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "…";
}

export default function BlogCard({ post, index = 0 }) {
  const excerpt = stripAndTruncate(post.blog_body || post.description || "");
  const categoryClass = CATEGORY_COLORS[post.blog_category] || "bg-slate-50 text-slate-600 border-slate-100";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <article className="h-full flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300">

          {/* Placeholder image area */}
          <div className="aspect-video bg-linear-to-br from-slate-50 to-red-50 shrink-0 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: "linear-gradient(rgba(220,38,38,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.6) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }} />
            <div className="relative flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-red-100 border border-red-200 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-[11px] font-semibold text-red-300 uppercase tracking-widest">Pushable AI</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-6 gap-3">
            {post.blog_category && (
              <span className={`w-fit text-[11px] font-bold rounded-full px-3 py-1 uppercase tracking-wide border ${categoryClass}`}>
                {post.blog_category}
              </span>
            )}

            <h2 style={SERIF} className="text-[17px] font-bold text-slate-900 leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
              {post.title}
            </h2>

            {excerpt && (
              <p className="text-[13px] text-slate-500 leading-relaxed flex-1 line-clamp-3">
                {excerpt}
              </p>
            )}

            {/* Footer */}
            <div className="flex items-center gap-2.5 pt-4 mt-auto border-t border-slate-50">
              <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                <span className="text-[11px] font-bold text-white">
                  {(post.author || "A").charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[12px] font-semibold text-slate-700 truncate">{post.author || "Pushable Team"}</p>
                <p className="text-[11px] text-slate-400">{formatDate(post.createdAt)}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-red-500 group-hover:translate-x-0.5 transition-all shrink-0" />
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
