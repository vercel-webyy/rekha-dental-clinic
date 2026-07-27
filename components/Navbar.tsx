'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, Menu, X, Sparkles, Clock, ChevronDown } from 'lucide-react';
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

  const navLinks = [
    { name: 'Why Us', href: '#why-us' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Specialists', href: '#doctors' },
    { name: '3D Tech', href: '#technology' },
    { name: 'Transformations', href: '#transformations' },
    { name: '0% EMI', href: '#emi-calculator' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <>
      {/* Sleek Top Announcement Bar */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
            </span>
            <span className="text-teal-300 font-semibold">GHZ SPECIAL:</span>
            <span className="text-slate-200">Flat 20% Off Implants & Smile Makeovers + Free 3D Scan</span>
          </div>

          <div className="flex items-center gap-4 text-slate-300 font-medium">
            <a href={`tel:${CLINIC_INFO.phoneEmergency}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>24/7 Helpline: {CLINIC_INFO.phoneEmergency}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Clean Sticky Navigation */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3.5' : 'bg-white py-4 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-sky-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-slate-900">
                  REKHA<span className="text-teal-600">DENTAL</span>
                </span>
                <span className="bg-teal-50 text-teal-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-teal-200">
                  DIGITAL
                </span>
              </div>
              <p className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase">
                Clinic & Digital Implant Center • Ghaziabad
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs md:text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(CLINIC_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 shadow-md shadow-teal-600/20 hover:shadow-lg transition-all"
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
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slide Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
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

            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-sky-600 shadow-md"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
