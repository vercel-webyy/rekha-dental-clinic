'use client';

import React, { useState } from 'react';
import { TESTIMONIALS, CLINIC_INFO } from '@/data/dentalData';
import { Star, Quote, CheckCircle2, Play, X } from 'lucide-react';

export default function Testimonials() {
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  return (
    <section id="reviews" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>Verified Patient Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Patient Stories & <span className="text-gradient">Google Reviews</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Rated <strong>4.9/5 stars</strong> across <strong>1,540+ verified Google Reviews</strong> in Ghaziabad. Hear directly from our patients.
          </p>
        </div>

        {/* Video Testimonial Previews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Video Preview 1 */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 group h-64 cursor-pointer" onClick={() => setActiveVideoModal('https://www.youtube.com/embed/dQw4w9WgXcQ')}>
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
              alt="Video Testimonial Pooja Singhal"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/30 transition-colors"></div>
            
            {/* Play Button Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 text-brand-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 fill-brand-600 ml-1" />
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="bg-brand-600 text-[10px] font-extrabold px-2 py-0.5 rounded text-white">VIDEO STORY</span>
              <h4 className="font-bold text-sm text-white mt-1">Pooja Singhal • Smile Makeover</h4>
              <p className="text-xs text-slate-200 line-clamp-1">"The 3D scan preview was accurate to the millimeter."</p>
            </div>
          </div>

          {/* Video Preview 2 */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 group h-64 cursor-pointer" onClick={() => setActiveVideoModal('https://www.youtube.com/embed/dQw4w9WgXcQ')}>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
              alt="Video Testimonial Sunil Rastogi"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/30 transition-colors"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 text-brand-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 fill-brand-600 ml-1" />
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="bg-emerald-600 text-[10px] font-extrabold px-2 py-0.5 rounded text-white">IMPLANT REHAB</span>
              <h4 className="font-bold text-sm text-white mt-1">Sunil Rastogi • Swiss Dental Implants</h4>
              <p className="text-xs text-slate-200 line-clamp-1">"Completely painless procedure from start to finish."</p>
            </div>
          </div>

          {/* Video Preview 3 */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 group h-64 cursor-pointer" onClick={() => setActiveVideoModal('https://www.youtube.com/embed/dQw4w9WgXcQ')}>
            <img
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop"
              alt="Video Testimonial Dr. Alok Verma"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/30 transition-colors"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 text-brand-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 fill-brand-600 ml-1" />
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="bg-tealbrand-600 text-[10px] font-extrabold px-2 py-0.5 rounded text-white">PHYSICIAN TESTIMONIAL</span>
              <h4 className="font-bold text-sm text-white mt-1">Dr. Alok Verma • Single-Sitting RCT</h4>
              <p className="text-xs text-slate-200 line-clamp-1">"World-class sterilization & microscopic RCT precision."</p>
            </div>
          </div>

        </div>

        {/* Written Google Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-500 ml-1">{rev.date}</span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-300"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <h4 className="font-bold text-xs text-slate-900">{rev.name}</h4>
                    {rev.verified && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                  </div>
                  <span className="text-[11px] text-slate-500 block">{rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 rounded-3xl max-w-3xl w-full p-4 relative shadow-2xl">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute -top-4 -right-4 p-2.5 rounded-full bg-white text-slate-900 shadow-xl"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative pt-[56.25%] rounded-2xl overflow-hidden bg-black">
              <iframe
                src={`${activeVideoModal}?autoplay=1`}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Patient Video Testimonial"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
