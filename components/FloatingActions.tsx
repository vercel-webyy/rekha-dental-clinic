'use client';

import React from 'react';
import { MessageCircle, Phone, Calendar, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '@/data/dentalData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export default function FloatingActions({ onOpenBooking }: FloatingActionsProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col gap-3">
        
        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-slate-900/80 backdrop-blur-md text-white flex items-center justify-center shadow-lg hover:bg-slate-900 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        {/* WhatsApp Floating Button */}
        <a
          href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(CLINIC_INFO.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl transition-all duration-300 transform hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-bold text-xs pr-2">
            WhatsApp Doctor Chat
          </span>
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>
        </a>
      </div>

      {/* Mobile Bottom Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 sm:hidden shadow-2xl flex items-center justify-around gap-2">
        <a
          href={`tel:${CLINIC_INFO.phonePrimary}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-200"
        >
          <Phone className="w-4 h-4 text-brand-600" />
          <span>Call Now</span>
        </a>

        <a
          href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(CLINIC_INFO.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-50 text-emerald-800 font-bold text-xs flex items-center justify-center gap-1.5 border border-emerald-300"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-brand-600 to-tealbrand-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Now</span>
        </button>
      </div>
    </>
  );
}
