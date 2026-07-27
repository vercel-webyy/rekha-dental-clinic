'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Gift, X, Calendar, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExitIntentModalProps {
  onOpenBooking: (msg?: string) => void;
}

export default function ExitIntentModal({ onOpenBooking }: ExitIntentModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    // Trigger after 12 seconds if not already triggered on mouseleave
    const timer = setTimeout(() => {
      if (!hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    }, 12000);

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasTriggered]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100 space-y-6 text-slate-900 overflow-hidden">
        
        {/* Top Decorative Sparkle Background */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-tr from-brand-300 to-tealbrand-300 rounded-full blur-2xl opacity-30 pointer-events-none" />

        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gift Icon Badge */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-600 to-tealbrand-600 text-white flex items-center justify-center shadow-xl mx-auto">
          <Gift className="w-8 h-8 animate-bounce" />
        </div>

        {/* Title & Offer */}
        <div className="text-center space-y-2">
          <span className="text-[11px] font-black uppercase tracking-widest text-tealbrand-700 bg-tealbrand-50 px-3 py-1 rounded-full">
            Wait! Before You Leave Ghaziabad's Top Clinic
          </span>

          <h3 className="text-2xl font-black text-slate-900">
            Claim Your Free <span className="text-gradient">3D Dental Scan Voucher</span>
          </h3>

          <p className="text-xs text-slate-600 leading-relaxed">
            Get an instant <strong>₹1,500 Consultation & 3D Jaw Bone Scan Voucher</strong> free with your appointment today. Zero commitment required.
          </p>
        </div>

        {/* Offer Highlights */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs font-semibold text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>100% Free 3D Jaw Bone Density Scan</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Comprehensive Digital Smile Assessment</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Valid for 7 Days at Rekha Dental Clinic Ghaziabad</span>
          </div>
        </div>

        {/* Claim Buttons */}
        <div className="space-y-2">
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenBooking('Claiming Free 3D Scan & Consultation Voucher Offer');
            }}
            className="w-full py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-brand-600 via-brand-500 to-tealbrand-600 shadow-xl shadow-brand-500/20 hover:shadow-2xl transition-all"
          >
            Claim ₹1,500 Voucher & Book Now
          </button>

          <button
            onClick={() => setIsOpen(false)}
            className="w-full py-2.5 text-xs text-slate-400 hover:text-slate-600 font-semibold"
          >
            No thanks, I'll pay full price later
          </button>
        </div>

      </div>
    </div>
  );
}
