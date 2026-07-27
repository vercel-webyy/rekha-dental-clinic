'use client';

import React from 'react';
import { Calendar, MessageCircle, Star, ShieldCheck, Award, Zap, ChevronRight, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '@/data/dentalData';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-10 pb-16 lg:pt-16 lg:pb-24">
      
      {/* Decorative backdrop shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 shadow-sm text-xs font-semibold text-slate-700">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span className="text-teal-700 font-bold">#1 Digital Dental Clinic in Ghaziabad</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 hidden sm:inline">19+ Years Excellence</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Creating Beautiful, Healthy Smiles with{' '}
              <span className="text-gradient">Advanced Digital Dentistry</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Providing world-class dental care with precision, compassion, and modern technology for over 19 years. Specializing in Painless Dental Implants, 3D Smile Makeovers & Microscopic Root Canals.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-3 gap-3 pt-1 max-w-lg mx-auto lg:mx-0">
              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-slate-200/80 text-left">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>100% Painless</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Laser Anesthesia</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-slate-200/80 text-left">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>3D CBCT</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Precision Bone Scan</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-slate-200/80 text-left">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>0% EMI</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium">Easy Monthly Plan</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-teal-600 via-teal-500 to-sky-600 hover:from-teal-700 hover:to-sky-700 shadow-xl shadow-teal-600/20 hover:shadow-2xl transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(CLINIC_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-sm font-bold text-emerald-800 bg-white hover:bg-emerald-50 border border-emerald-300 shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Social Proof Pill */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-slate-600">
              <div className="flex -space-x-2">
                <img className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150" alt="Patient" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150" alt="Patient" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150" alt="Patient" />
              </div>

              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-extrabold text-slate-900 ml-1 text-xs">{CLINIC_INFO.googleRating}</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  Based on <strong>{CLINIC_INFO.googleReviewCount}+ Google Reviews</strong> in Ghaziabad
                </p>
              </div>
            </div>

          </div>

          {/* Right Visual Column (Clean & Spacious Doctor Visual) */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white p-3.5 rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden space-y-3">
              
              {/* Doctor & Patient Photo */}
              <div className="relative h-96 sm:h-[400px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
                  alt="Doctor with smiling patient"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                
                {/* Doctor Bio overlay at bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10 flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150"
                    alt="Dr. Rekha Sharma"
                    className="w-11 h-11 rounded-full object-cover border-2 border-teal-400 shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-white">Dr. Rekha Sharma</h4>
                    <p className="text-[11px] text-teal-300 font-medium">BDS, MDS (Prosthodontist & Implantologist)</p>
                  </div>
                </div>
              </div>

              {/* Integrated Clean Stats Bar below image */}
              <div className="grid grid-cols-2 gap-2 text-center text-xs p-2 bg-slate-50 rounded-xl border border-slate-100">
                <div className="p-1.5">
                  <span className="block font-black text-slate-900 text-base">99.2%</span>
                  <span className="text-[10px] text-slate-500 font-semibold">Implant Success</span>
                </div>
                <div className="p-1.5 border-l border-slate-200">
                  <span className="block font-black text-teal-600 text-base">3D iTero</span>
                  <span className="text-[10px] text-slate-500 font-semibold">Zero Gag Scan</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
