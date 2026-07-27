'use client';

import React from 'react';
import { DOCTORS } from '@/data/dentalData';
import { Calendar, Award, GraduationCap, Clock, CheckCircle2, ChevronRight } from 'lucide-react';

interface SpecialistDoctorsProps {
  onOpenBooking: (doctorName?: string) => void;
}

export default function SpecialistDoctors({ onOpenBooking }: SpecialistDoctorsProps) {
  return (
    <section id="doctors" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Master Dental Surgeons & Implantologists</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Meet Our <span className="text-gradient">Specialist Doctors</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Our team comprises highly accredited MDS specialists trained internationally in digital implantology, clear aligner therapy, and cosmetic smile craft.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Doctor Image Container */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-100">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                
                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border border-white/20">
                  <Clock className="w-3.5 h-3.5 text-tealbrand-400" />
                  <span>{doc.experienceYears}+ Years Exp.</span>
                </div>

                {/* Name & Title on Image overlay */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <h3 className="text-2xl font-extrabold text-white">{doc.name}</h3>
                  <p className="text-xs text-tealbrand-300 font-semibold">{doc.title}</p>
                </div>
              </div>

              {/* Doctor Details Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                
                <div className="space-y-3">
                  {/* Qualifications */}
                  <div className="flex items-start gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <GraduationCap className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>{doc.qualifications}</span>
                  </div>

                  {/* Specialization */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Specialization</span>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">{doc.specialization}</p>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {doc.bio}
                  </p>

                  {/* Key Achievements */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Clinical Honors</span>
                    {doc.achievements.map((ach, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-tealbrand-600 shrink-0" />
                        <span className="line-clamp-1">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consultation Action CTA */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenBooking(doc.name)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl text-xs md:text-sm font-bold text-slate-900 bg-slate-100 hover:bg-gradient-to-r hover:from-brand-600 hover:to-tealbrand-600 hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Consultation with {doc.name.split(' ')[1]}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
