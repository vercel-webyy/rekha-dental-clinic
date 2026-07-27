'use client';

import React from 'react';
import { CLINIC_INFO } from '@/data/dentalData';
import { Sparkles, Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-24 sm:pb-16 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-tealbrand-500 flex items-center justify-center text-white font-bold shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white">
                  REKHA<span className="text-brand-500">DENTAL</span>
                </span>
                <p className="text-[10px] font-bold text-tealbrand-400 tracking-wider uppercase">
                  Digital Implant & Aesthetic Center
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Ghaziabad's premier digital dental practice equipped with 3D CBCT, intraoral scanners, and laser technology. Providing pain-free implants, smile makeovers, and microscopic root canals for over 19+ years.
            </p>

            {/* Google Rating Footer Pill */}
            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 inline-flex items-center gap-3">
              <span className="text-xl font-black text-amber-400">4.9 ★</span>
              <div className="text-xs text-slate-300">
                <div className="font-bold text-white">Top Rated Dental Clinic</div>
                <div className="text-[11px] text-slate-400">{CLINIC_INFO.googleReviewCount}+ Google Patient Reviews</div>
              </div>
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Clinic Contact & Hours
            </h4>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-tealbrand-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-tealbrand-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phonePrimary}`} className="text-slate-200 hover:text-white font-bold">
                  {CLINIC_INFO.phonePrimary}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-amber-300 font-bold">24/7 Helpline: {CLINIC_INFO.phoneEmergency}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-tealbrand-400 shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="text-slate-300 hover:text-white">
                  {CLINIC_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-bold text-slate-300 block mb-1">Consultation Hours:</span>
                {CLINIC_INFO.hours.map((h, i) => (
                  <div key={i} className="text-slate-400 text-[11px]">
                    {h.days}: <strong className="text-slate-200">{h.time}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Treatments
            </h4>

            <ul className="space-y-1.5 text-xs">
              <li><a href="#treatments" className="hover:text-tealbrand-400 transition-colors">Dental Implants</a></li>
              <li><a href="#treatments" className="hover:text-tealbrand-400 transition-colors">Smile Makeovers</a></li>
              <li><a href="#treatments" className="hover:text-tealbrand-400 transition-colors">Microscopic RCT</a></li>
              <li><a href="#treatments" className="hover:text-tealbrand-400 transition-colors">Clear Aligners</a></li>
              <li><a href="#treatments" className="hover:text-tealbrand-400 transition-colors">E-Max Veneers</a></li>
              <li><a href="#treatments" className="hover:text-tealbrand-400 transition-colors">Laser Teeth Whitening</a></li>
              <li><a href="#treatments" className="hover:text-tealbrand-400 transition-colors">Kids Dentistry</a></li>
            </ul>
          </div>

          {/* Interactive Google Map Box */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Locate Clinic on Map
            </h4>

            <div className="rounded-2xl overflow-hidden border border-slate-800 h-40 relative bg-slate-900">
              <iframe
                title="Rekha Dental Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.654876543210!2d77.3712345!3d28.6432109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1234567890%3A0x1234567890abcdef!2sIndirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
            <p className="text-[11px] text-slate-400 font-medium">
              Serving Patients across Indirapuram, Raj Nagar Ext, Vaishali, Vasundhara & Kavi Nagar.
            </p>
          </div>

        </div>

        {/* Local SEO Keyword Bar */}
        <div className="pt-6 border-t border-slate-900 text-[11px] text-slate-400 space-y-2">
          <div className="font-bold text-slate-400">Popular Local Search Topics:</div>
          <div className="flex flex-wrap gap-2 text-slate-400">
            <span className="hover:text-slate-200">Best Dentist in Ghaziabad</span> • 
            <span className="hover:text-slate-200">Dental Clinic in Ghaziabad</span> • 
            <span className="hover:text-slate-200">Dental Implants Ghaziabad</span> • 
            <span className="hover:text-slate-200">Smile Makeover Ghaziabad</span> • 
            <span className="hover:text-slate-200">Root Canal Ghaziabad</span> • 
            <span className="hover:text-slate-200">Painless RCT Indirapuram</span> • 
            <span className="hover:text-slate-200">Invisalign Aligners Raj Nagar Extension</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-3">
          <div>
            © 2026 Rekha Dental Clinic & Digital Implant Center. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with precision for optimal patient conversion & comfort</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
