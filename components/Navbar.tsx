'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, Menu, X, Sparkles, Clock, ShieldCheck, ChevronDown } from 'lucide-react';
import { CLINIC_INFO } from '@/data/dentalData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why Rekha Dental', href: '#why-us' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Specialists', href: '#doctors' },
    { name: 'Technology', href: '#technology' },
    { name: 'Smile Gallery', href: '#transformations' },
    { name: '0% EMI', href: '#emi-calculator' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <>
      {/* Emergency Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-brand-900 to-tealbrand-700 text-white text-xs md:text-sm py-2 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-slate-200">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-medium text-emerald-300">SPECIAL OFFER:</span>
            <span>Flat 20% Off on Dental Implants & Smile Makeovers + Free 3D Scan Consultation in Ghaziabad</span>
          </div>
          <div className="flex items-center gap-4 font-medium text-xs">
            <a href={`tel:${CLINIC_INFO.phoneEmergency}`} className="flex items-center gap-1 text-sky-300 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" /> 24/7 Helpline: {CLINIC_INFO.phoneEmergency}
            </a>
            <span className="hidden lg:inline text-slate-500">|</span>
            <span className="hidden lg:flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-tealbrand-400" /> Mon-Sat: 9:30 AM - 8:30 PM
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-tr from-brand-600 to-tealbrand-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900">
                  REKHA<span className="text-brand-600">DENTAL</span>
                </span>
                <span className="bg-tealbrand-50 text-tealbrand-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-tealbrand-200">
                  DIGITAL
                </span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 tracking-wide uppercase">
                Clinic & Digital Implant Center • Ghaziabad
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(CLINIC_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-tealbrand-600 hover:from-brand-700 hover:to-tealbrand-700 shadow-md shadow-brand-500/20 hover:shadow-lg hover:shadow-brand-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slideout Nav */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-tealbrand-600 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(CLINIC_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                WhatsApp Direct Chat
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
