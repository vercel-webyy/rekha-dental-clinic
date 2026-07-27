'use client';

import React, { useState } from 'react';
import { TECHNOLOGIES } from '@/data/dentalData';
import { Scan, Cpu, Zap, Crosshair, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Scan,
  Cpu,
  Zap,
  Crosshair
};

export default function TechnologyShowcase() {
  const [activeTechId, setActiveTechId] = useState<string>(TECHNOLOGIES[0].id);

  const selectedTech = TECHNOLOGIES.find(t => t.id === activeTechId) || TECHNOLOGIES[0];

  return (
    <section id="technology" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-tealbrand-400 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Digital Dental Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Advanced 3D <span className="text-gradient">Technology & Equipment</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            Technology is not an add-on at Rekha Dental Clinic; it is at the core of every diagnosis, implant placement, and smile restoration.
          </p>
        </div>

        {/* Technology Selector & Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Tech Navigation Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {TECHNOLOGIES.map((tech) => {
              const Icon = iconMap[tech.icon] || Cpu;
              const isActive = tech.id === activeTechId;
              return (
                <button
                  key={tech.id}
                  onClick={() => setActiveTechId(tech.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? 'bg-slate-800/90 border-tealbrand-500 shadow-xl shadow-tealbrand-500/10 translate-x-2'
                      : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/40 text-slate-400'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${isActive ? 'bg-gradient-to-tr from-brand-600 to-tealbrand-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-base ${isActive ? 'text-white' : 'text-slate-200'}`}>
                      {tech.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                      {tech.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Tech Feature Card */}
          <div className="lg:col-span-7 bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              
              <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 border border-slate-700 shadow-lg">
                <img
                  src={selectedTech.image}
                  alt={selectedTech.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-tealbrand-300 border border-slate-700">
                  Precision Digital Equipment
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-xs font-bold text-tealbrand-400 uppercase tracking-widest">
                  Featured Equipment
                </span>

                <h3 className="text-2xl font-extrabold text-white">
                  {selectedTech.name}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedTech.description}
                </p>

                <div className="p-4 rounded-xl bg-tealbrand-950/40 border border-tealbrand-800/60 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-tealbrand-300">
                    <ShieldCheck className="w-4 h-4 text-tealbrand-400" />
                    <span>Patient Benefit:</span>
                  </div>
                  <p className="text-slate-200 font-medium">
                    {selectedTech.benefitToPatient}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Eliminates treatment guesswork</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Reduces procedure duration by 50%</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
