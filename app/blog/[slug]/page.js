"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { getBlogBySlug, blogPosts } from "@/lib/blogData";

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
    month: "long",
    day: "numeric",
  });
}

function readingTime(html) {
  if (!html) return 1;
  const words = html.replace(/<[^>]+>/g, "").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export default function BlogPost({ params }) {
  const { slug } = use(params);
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <>
        <Navbar />
        <div style={{ background: "#F0EBD8" }} className="relative z-10 min-h-screen pt-28 pb-24 flex items-center justify-center">
          <div className="text-center px-6">
            <div className="text-6xl mb-6">📭</div>
            <h1 style={SERIF} className="text-3xl font-black text-slate-900 mb-3">Article Not Found</h1>
            <p className="text-slate-400 mb-8 text-[15px]">
              This article doesn&apos;t exist or may have been moved.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white text-sm font-bold hover:bg-red-500 transition-colors shadow-lg shadow-red-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const categoryClass = CATEGORY_COLORS[blog.blog_category] || "bg-slate-50 text-slate-600 border-slate-100";
  const related = blogPosts.filter((p) => p.id !== blog.id && p.blog_category === blog.blog_category).slice(0, 3);
  const relatedPosts = related.length > 0 ? related : blogPosts.filter((p) => p.id !== blog.id).slice(0, 3);

  return (
    <>
      <Navbar />
      <div style={{ background: "#F0EBD8" }} className="relative z-10 min-h-screen pt-28 pb-24">

        <div className="max-w-3xl mx-auto px-6">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-400 hover:text-red-600 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              All Articles
            </Link>
          </motion.div>

          {/* Category + title */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            {blog.blog_category && (
              <span className={`inline-block text-[11px] font-bold rounded-full px-3 py-1 mb-5 uppercase tracking-wide border ${categoryClass}`}>
                {blog.blog_category}
              </span>
            )}
            <h1 style={SERIF} className="text-3xl sm:text-[42px] font-black text-slate-900 leading-tight tracking-tight mb-6">
              {blog.title}
            </h1>
          </motion.div>

          {/* Author / meta */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="flex items-center gap-3 pb-8 border-b border-red-100 mb-10"
          >
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shrink-0 shadow-md shadow-red-200">
              <span className="text-sm font-bold text-white">
                {(blog.author || "A").charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="text-[14px] font-bold text-slate-800">{blog.author || "Pushable Team"}</p>
              <div className="flex items-center gap-3 text-[12px] text-slate-400 mt-0.5">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(blog.createdAt)}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {readingTime(blog.blog_body)} min read
                </span>
              </div>
            </div>
          </motion.div>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.blog_body }}
          />

          {/* Back link bottom */}
          <div className="mt-16 pt-8 border-t border-red-100">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-400 hover:text-red-600 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back to Articles
            </Link>
          </div>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-7xl mx-auto px-6 mt-20">
            <div className="border-t border-red-100 pt-16">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={SERIF}
                className="text-2xl font-black text-slate-900 mb-8"
              >
                More Articles
              </motion.h2>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {relatedPosts.map((post, i) => (
                  <BlogCard key={post.id} post={post} index={i} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
