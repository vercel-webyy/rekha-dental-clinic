'use client';

import React from 'react';
import { Calendar, MessageCircle, Star, CheckCircle2, ChevronRight } from 'lucide-react';
import { CLINIC_INFO } from '@/data/dentalData';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Soft background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Minimal Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm text-xs font-semibold text-slate-700">
              <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span className="text-teal-700 font-bold">#1 Digital Dental Clinic in Ghaziabad</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 hidden sm:inline">19+ Yrs Experience</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Creating Beautiful, Healthy Smiles with{' '}
              <span className="text-gradient">Advanced Digital Dentistry</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              World-class dental care with precision, compassion, and modern technology. Specializing in Painless Dental Implants, 3D Smile Makeovers & Microscopic Root Canals.
            </p>

            {/* Clean Inline Highlights (NO messy heavy cards) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-700 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-teal-600 shrink-0" />
                <span>100% Painless Laser</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-teal-600 shrink-0" />
                <span>3D CBCT Bone Scan</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-teal-600 shrink-0" />
                <span>0% Interest EMI</span>
              </div>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 shadow-lg shadow-teal-600/20 transition-all hover:-translate-y-0.5"
              >
                <Calendar className="w-4.5 h-4.5" />
                <span>Book Appointment</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(CLINIC_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-bold text-emerald-800 bg-white hover:bg-emerald-50 border border-emerald-300 shadow-sm transition-all"
              >
                <MessageCircle className="w-4.5 h-4.5 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Sleek Social Proof Rating */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-slate-600">
              <div className="flex -space-x-2">
                <img className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150" alt="Patient" />
                <img className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150" alt="Patient" />
                <img className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150" alt="Patient" />
              </div>

              <div className="text-left text-xs">
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-slate-900">{CLINIC_INFO.googleRating}</span>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  {CLINIC_INFO.googleReviewCount}+ Verified Google Reviews
                </p>
              </div>
            </div>

          </div>

          {/* Right Visual Column (Clean, Elegant Frame) */}
          <div className="lg:col-span-5">
            <div className="bg-white p-3 rounded-2xl shadow-xl border border-slate-200/80">
              <div className="relative h-80 sm:h-[380px] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
                  alt="Dr. Rekha Sharma with smiling patient"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                
                {/* Doctor Bio Overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white p-3 rounded-lg bg-slate-900/90 backdrop-blur-sm border border-white/10 flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150"
                    alt="Dr. Rekha Sharma"
                    className="w-10 h-10 rounded-full object-cover border-2 border-teal-400 shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-xs text-white">Dr. Rekha Sharma</h4>
                    <p className="text-[10px] text-teal-300 font-medium">BDS, MDS (Prosthodontist & Implantologist) • 19+ Yrs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
