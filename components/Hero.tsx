'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, MessageCircle, Star, ShieldCheck, Award, Zap, ChevronRight, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '@/data/dentalData';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative background radial shapes */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-tealbrand-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 shadow-sm text-xs md:text-sm font-semibold text-slate-700 backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tealbrand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tealbrand-500"></span>
              </span>
              <span className="text-brand-600 font-bold">#1 Digital Dental Clinic in Ghaziabad</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-medium hidden sm:inline">Indirapuram & Raj Nagar Extension</span>
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

            {/* Bullet Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-tealbrand-600 shrink-0" />
                <span>100% Painless Laser</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-tealbrand-600 shrink-0" />
                <span>3D CBCT Scanner</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-tealbrand-600 shrink-0" />
                <span>0% Interest EMI</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-brand-600 via-brand-500 to-tealbrand-600 hover:from-brand-700 hover:to-tealbrand-700 shadow-xl shadow-brand-500/25 hover:shadow-2xl hover:shadow-brand-500/35 transition-all transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(CLINIC_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-base font-bold text-emerald-800 bg-white hover:bg-emerald-50 border-2 border-emerald-300 shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust Indicator / Google Rating Pill */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-slate-600">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150" alt="Patient" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150" alt="Patient" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150" alt="Patient" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150" alt="Patient" />
              </div>

              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-extrabold text-slate-900 ml-1 text-sm">{CLINIC_INFO.googleRating}</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Based on <strong>{CLINIC_INFO.googleReviewCount}+ Google Reviews</strong> in Ghaziabad
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Doctor & Smiling Patient Hero Visual with Floating Dental Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Visual Container Card */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-400 to-tealbrand-400 rounded-3xl transform rotate-2 scale-95 opacity-20 blur-xl"></div>

              {/* Main Image Frame */}
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop"
                  alt="Rekha Dental Clinic Doctor & Smiling Patient"
                  className="w-full h-[420px] md:h-[480px] object-cover rounded-2xl"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent rounded-2xl"></div>

                {/* Bottom Doctor Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-3.5 bg-slate-900/80 backdrop-blur-md rounded-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150"
                      alt="Dr. Rekha Sharma"
                      className="w-12 h-12 rounded-full object-cover border-2 border-tealbrand-400"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-white">Dr. Rekha Sharma</h4>
                      <p className="text-xs text-tealbrand-300 font-medium">BDS, MDS (Implantology) • 19+ Yrs Exp</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FLOATING BADGE 1: Top Right - 3D Digital Scan */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-tealbrand-50 flex items-center justify-center text-tealbrand-600">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">3D iTero Digital Scan</div>
                  <div className="text-[11px] font-medium text-emerald-600">Zero Impression Gag</div>
                </div>
              </div>

              {/* FLOATING BADGE 2: Left Middle - Painless Tech */}
              <div className="absolute top-1/2 -left-6 -translate-y-1/2 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Laser Micro-Surgery</div>
                  <div className="text-[11px] font-medium text-slate-500">100% Pain-Free Guarantee</div>
                </div>
              </div>

              {/* FLOATING BADGE 3: Bottom Right - 99.2% Success */}
              <div className="absolute -bottom-5 right-6 bg-slate-900 text-white p-3.5 rounded-2xl shadow-2xl border border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-white">99.2% Implant Success</div>
                  <div className="text-[11px] text-slate-400">12,000+ Placed</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
