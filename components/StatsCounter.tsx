'use client';

import React from 'react';
import { STATS } from '@/data/dentalData';
import { Award, Smile, ShieldCheck, TrendingUp } from 'lucide-react';

export default function StatsCounter() {
  const icons = [Award, Smile, ShieldCheck, TrendingUp];

  return (
    <section className="bg-slate-900 text-white py-12 relative overflow-hidden">
      {/* Background Subtle Gradient Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
          {STATS.map((stat, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div key={stat.label} className={`pt-6 lg:pt-0 ${index > 0 ? 'lg:pl-8' : ''}`}>
                <div className="inline-flex p-3 rounded-2xl bg-slate-800/80 text-tealbrand-400 border border-slate-700/60 mb-3 shadow-lg">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white flex items-center justify-center gap-1">
                  <span>{stat.value.toLocaleString()}</span>
                  <span className="text-tealbrand-400">{stat.suffix}</span>
                </div>
                <div className="mt-1 text-xs sm:text-sm font-medium text-slate-400 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
