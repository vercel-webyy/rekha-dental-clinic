'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, Menu, X, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '@/data/dentalData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 5 Essential, single-line nav links (NO multi-line wrapping!)
  const navLinks = [
    { name: 'Treatments', href: '#treatments' },
    { name: 'Specialists', href: '#doctors' },
    { name: 'Technology', href: '#technology' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <>
      {/* Top Emergency & Offer Bar */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
            </span>
            <span className="text-teal-300 font-bold">SPECIAL OFFER:</span>
            <span className="text-slate-200">Flat 20% Off Implants & Smile Makeovers + Free 3D Scan</span>
          </div>

          <div className="flex items-center gap-4 text-slate-300 font-medium">
            <a href={`tel:${CLINIC_INFO.phoneEmergency}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>Helpline: {CLINIC_INFO.phoneEmergency}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Ultra-Clean Sticky Header */}
      <header className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-3.5 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Clean Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-600 to-sky-600 flex items-center justify-center text-white shadow-sm">
              <Sparkles className="w-4.5 h-4.5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-extrabold tracking-tight text-slate-900 leading-none">
                  REKHA<span className="text-teal-600">DENTAL</span>
                </span>
                <span className="bg-teal-50 text-teal-700 text-[9px] font-bold px-1.5 py-0.5 rounded border border-teal-200 leading-none">
                  DIGITAL
                </span>
              </div>
              <span className="text-[10px] font-medium text-slate-400 leading-none mt-1">
                Implant & Aesthetic Center • Ghaziabad
              </span>
            </div>
          </a>

          {/* Desktop Nav Items (Single-line, whitespace-nowrap) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-slate-700 hover:text-teal-600 transition-colors whitespace-nowrap py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(CLINIC_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4.5 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 shadow-sm transition-all whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Slide Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-3 shadow-lg">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-sky-600 shadow-sm"
            >
              Book Appointment
            </button>
          </div>
        )}
      </header>
    </>
  );
}
