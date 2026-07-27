'use client';

import React from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '@/data/dentalData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export default function FloatingActions({ onOpenBooking }: FloatingActionsProps) {
  return (
    <>
      {/* Desktop Clean Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <a
          href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(CLINIC_INFO.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl transition-all duration-200 transform hover:scale-105"
          aria-label="WhatsApp Chat"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="font-bold text-xs">WhatsApp Doctor</span>
        </a>
      </div>

      {/* Mobile Bottom Quick Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 sm:hidden shadow-2xl flex items-center justify-around gap-2">
        <a
          href={`tel:${CLINIC_INFO.phonePrimary}`}
          className="flex-1 py-2.5 px-2 rounded-xl bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center gap-1 border border-slate-200"
        >
          <Phone className="w-3.5 h-3.5 text-teal-600" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(CLINIC_INFO.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-2 rounded-xl bg-emerald-50 text-emerald-800 font-bold text-xs flex items-center justify-center gap-1 border border-emerald-300"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1 py-2.5 px-2 rounded-xl bg-gradient-to-r from-teal-600 to-sky-600 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-md"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book</span>
        </button>
      </div>
    </>
  );
}
