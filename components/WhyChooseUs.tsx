'use client';

import React from 'react';
import { WHY_CHOOSE_US } from '@/data/dentalData';
import { Award, Cpu, Sparkles, ShieldCheck, UserCheck, Zap, CreditCard, HeartHandshake, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Award,
  Cpu,
  Sparkles,
  ShieldCheck,
  UserCheck,
  Zap,
  CreditCard,
  HeartHandshake
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
            <span>Excellence in Dental Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Choose <span className="text-gradient">Rekha Dental Clinic</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            We blend 19+ years of clinical mastery with global 3D digital technology to ensure your treatment is fast, precise, and completely pain-free.
          </p>
        </div>

        {/* 8 Premium Icon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <div
                key={item.title}
                className="group relative bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Number Watermark */}
                <span className="absolute top-4 right-5 text-4xl font-black text-slate-100 group-hover:text-brand-50 transition-colors pointer-events-none">
                  0{index + 1}
                </span>

                <div className="space-y-4 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-50 to-tealbrand-50 border border-brand-100 text-brand-600 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-brand-600 group-hover:to-tealbrand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-tealbrand-700">
                  <CheckCircle2 className="w-4 h-4 text-tealbrand-600" />
                  <span>Guaranteed Patient Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
