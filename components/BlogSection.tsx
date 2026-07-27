'use client';

import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '@/data/dentalData';
import { BookOpen, Clock, User, ArrowRight, X, Sparkles, Tag } from 'lucide-react';

export default function BlogSection() {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Dental Care Knowledge Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Latest Dental <span className="text-gradient">Articles & Guides</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Expert insights, costs breakdown, and treatment guides written by top dental specialists in Ghaziabad.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Article Banner Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-[11px] font-bold">
                    {post.category}
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-600" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-tealbrand-600" />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Read Full Article Link */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                <button
                  onClick={() => setActiveArticle(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 group-hover:translate-x-1 transition-all"
                >
                  <span>Read Complete Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 md:p-10 relative space-y-6">
            
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category Pill & Title */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-tealbrand-700 bg-tealbrand-50 px-3 py-1 rounded-full uppercase tracking-wider">
                {activeArticle.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                {activeArticle.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-slate-500 font-medium pt-1">
                <span>By {activeArticle.author}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
            </div>

            {/* Header Image */}
            <div className="rounded-2xl overflow-hidden h-64 border border-slate-200">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Keywords Pills */}
            <div className="flex flex-wrap gap-2">
              {activeArticle.keywords.map((kw, i) => (
                <span key={i} className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                  <Tag className="w-3 h-3 text-brand-600" />
                  {kw}
                </span>
              ))}
            </div>

            {/* Markdown Text Content */}
            <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed whitespace-pre-line border-t border-slate-100 pt-4">
              {activeArticle.content}
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
