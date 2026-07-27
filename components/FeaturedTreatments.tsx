'use client';

import React, { useState } from 'react';
import { TREATMENTS, Treatment } from '@/data/dentalData';
import { Shield, Sparkles, Activity, Gem, Grid, Sun, Zap, Smile, CheckCircle, ArrowRight, ShieldCheck, Clock, Check, X, Calendar } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Sparkles,
  Activity,
  Gem,
  Grid,
  Sun,
  Zap,
  Smile,
  CheckCircle
};

interface FeaturedTreatmentsProps {
  onOpenBooking: (treatmentTitle?: string) => void;
}

export default function FeaturedTreatments({ onOpenBooking }: FeaturedTreatmentsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTreatmentModal, setActiveTreatmentModal] = useState<Treatment | null>(null);

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'implant', label: 'Implants' },
    { id: 'cosmetic', label: 'Cosmetic & Veneers' },
    { id: 'ortho', label: 'Aligners & Braces' },
    { id: 'general', label: 'General & RCT' },
    { id: 'pediatric', label: 'Kids Care' },
  ];

  const filteredTreatments = selectedCategory === 'all'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === selectedCategory);

  return (
    <section id="treatments" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tealbrand-50 border border-tealbrand-200 text-tealbrand-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialized Clinical Procedures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Advanced Dental <span className="text-gradient">Treatments & Care</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Every procedure is backed by 3D digital imaging, zero-pain laser technology, and lifetime warranty assurance.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment) => {
            const Icon = iconMap[treatment.icon] || Shield;
            return (
              <div
                key={treatment.id}
                className="group bg-slate-50/70 rounded-3xl p-7 border border-slate-200/80 hover:bg-white hover:border-brand-300 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-brand-600 flex items-center justify-center shadow-sm group-hover:bg-gradient-to-tr group-hover:from-brand-600 group-hover:to-tealbrand-600 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      {treatment.painless && (
                        <span className="bg-emerald-50 text-emerald-700 text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                          100% Painless
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {treatment.shortDesc}
                    </p>
                  </div>

                  {/* Quick Features List */}
                  <ul className="space-y-1.5 pt-2">
                    {treatment.benefits.slice(0, 2).map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                        <Check className="w-4 h-4 text-tealbrand-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-8 pt-5 border-t border-slate-200/60 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-medium text-slate-400 block uppercase">Starting at</span>
                    <span className="text-sm font-extrabold text-slate-900">{treatment.startingPrice}</span>
                  </div>

                  <button
                    onClick={() => setActiveTreatmentModal(treatment)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 group-hover:translate-x-1 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Treatment Detailed Modal Drawer */}
      {activeTreatmentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 md:p-8 relative space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveTreatmentModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title & Icon */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-tealbrand-600 text-white flex items-center justify-center shrink-0 shadow-md">
                {React.createElement(iconMap[activeTreatmentModal.icon] || Shield, { className: 'w-7 h-7' })}
              </div>
              <div>
                <span className="text-xs font-bold text-tealbrand-700 bg-tealbrand-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {activeTreatmentModal.category.toUpperCase()}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  {activeTreatmentModal.title}
                </h3>
                <p className="text-sm font-semibold text-brand-600">Starting at {activeTreatmentModal.startingPrice}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm leading-relaxed">
              {activeTreatmentModal.fullDesc}
            </p>

            {/* Key Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Duration</span>
                <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-brand-600" />
                  {activeTreatmentModal.duration}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Warranty</span>
                <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-tealbrand-600" />
                  {activeTreatmentModal.warranty}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Pain Level</span>
                <span className="font-bold text-emerald-700 flex items-center gap-1 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  Zero Pain Guaranteed
                </span>
              </div>
            </div>

            {/* Treatment Benefits */}
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 text-sm">Key Benefits for Patients:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeTreatmentModal.benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Procedure Steps */}
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 text-sm">Clinical Procedure Steps:</h4>
              <div className="space-y-2">
                {activeTreatmentModal.procedureSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                    <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-xs shrink-0">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Action CTA */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const title = activeTreatmentModal.title;
                  setActiveTreatmentModal(null);
                  onOpenBooking(title);
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-tealbrand-600 shadow-md hover:shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation for {activeTreatmentModal.title}
              </button>

              <button
                onClick={() => setActiveTreatmentModal(null)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
