'use client';

import React, { useState } from 'react';
import { TRANSFORMATIONS } from '@/data/dentalData';
import { Sparkles, Calendar, Quote, CheckCircle2, ChevronRight, Sliders } from 'lucide-react';

interface SmileTransformationsProps {
  onOpenBooking: () => void;
}

export default function SmileTransformations({ onOpenBooking }: SmileTransformationsProps) {
  const [activeTransformIndex, setActiveTransformIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100 percentage

  const current = TRANSFORMATIONS[activeTransformIndex];

  return (
    <section id="transformations" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tealbrand-50 border border-tealbrand-200 text-tealbrand-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Clinical Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Smile <span className="text-gradient">Transformations</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Drag the slider to compare actual Before & After dental transformations achieved at Rekha Dental Clinic.
          </p>
        </div>

        {/* Patient Case Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {TRANSFORMATIONS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTransformIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                activeTransformIndex === idx
                  ? 'bg-gradient-to-r from-brand-600 to-tealbrand-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {item.patientName} • {item.treatment}
            </button>
          ))}
        </div>

        {/* Main Interactive Before / After Visual Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Image Comparison Container */}
          <div className="lg:col-span-7 relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-md select-none group border border-slate-200">
            
            {/* After Image (Background) */}
            <img
              src={current.afterImg}
              alt="After Treatment Smile"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-tealbrand-600 text-white font-black text-xs px-3 py-1.5 rounded-full shadow-md z-10">
              AFTER (Transform)
            </div>

            {/* Before Image (Clipped Overlay) */}
            <div
              className="absolute top-0 left-0 bottom-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={current.beforeImg}
                alt="Before Treatment Smile"
                className="absolute top-0 left-0 h-full max-w-none object-cover"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="absolute top-4 left-4 bg-slate-900/90 text-white font-black text-xs px-3 py-1.5 rounded-full shadow-md z-10">
                BEFORE
              </div>
            </div>

            {/* Draggable Slider Bar & Knob */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-2xl"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-900 text-white border-2 border-white flex items-center justify-center shadow-2xl">
                <Sliders className="w-4 h-4 text-tealbrand-400" />
              </div>
            </div>

            {/* Range Input Overlay for accessibility and touch dragging */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>

          {/* Patient Details & Story */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-tealbrand-700 bg-tealbrand-50 px-3 py-1 rounded-full uppercase tracking-wider">
                Case Study #{activeTransformIndex + 1}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 pt-2">
                {current.patientName}, {current.age} yrs
              </h3>
              <p className="text-sm font-bold text-brand-600">
                {current.treatment}
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Treatment Duration:</span>
                <span className="font-bold text-slate-900">{current.duration}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                {current.story}
              </p>
            </div>

            {/* Quote */}
            <div className="relative pl-4 border-l-4 border-tealbrand-500 text-slate-700 italic text-sm space-y-1">
              <Quote className="w-4 h-4 text-tealbrand-400 inline-block mr-1" />
              <span>"{current.quote}"</span>
            </div>

            {/* CTA */}
            <button
              onClick={onOpenBooking}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-tealbrand-600 shadow-md hover:shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Get Your Smile Transformation</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
