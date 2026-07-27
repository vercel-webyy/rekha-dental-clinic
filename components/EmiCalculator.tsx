'use client';

import React, { useState } from 'react';
import { CreditCard, Calculator, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

interface EmiCalculatorProps {
  onOpenBooking: (msg?: string) => void;
}

export default function EmiCalculator({ onOpenBooking }: EmiCalculatorProps) {
  const [treatmentCost, setTreatmentCost] = useState<number>(60000);
  const [tenureMonths, setTenureMonths] = useState<number>(6);

  // EMI formula at 0% interest
  const monthlyEmi = Math.round(treatmentCost / tenureMonths);

  return (
    <section id="emi-calculator" className="py-16 bg-gradient-to-r from-brand-900 via-slate-900 to-tealbrand-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tealbrand-900/60 border border-tealbrand-700 text-tealbrand-300 text-xs font-bold uppercase tracking-wider">
              <CreditCard className="w-3.5 h-3.5" />
              <span>Affordable Premium Healthcare</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              0% Interest Dental <span className="text-tealbrand-400">EMI Calculator</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Don't compromise on your smile due to budget constraints. Pay in easy monthly installments with 0% interest financing for Implants, Smile Makeovers & Invisalign.
            </p>
            <div className="space-y-2 pt-2 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Documentation Hassle & Instant Approval</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>No Hidden Charges or Down Payment Penalties</span>
              </div>
            </div>
          </div>

          {/* Right Column: Calculator Widget Card */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-md text-slate-900 p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/20">
            <div className="space-y-6">
              
              {/* Cost Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Estimated Treatment Cost</label>
                  <span className="text-lg font-black text-brand-600">₹{treatmentCost.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="15000"
                  max="300000"
                  step="5000"
                  value={treatmentCost}
                  onChange={(e) => setTreatmentCost(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-semibold">
                  <span>₹15,000</span>
                  <span>₹1,50,000</span>
                  <span>₹3,00,000</span>
                </div>
              </div>

              {/* Tenure Radio Buttons */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">Select Tenure (Months)</label>
                <div className="grid grid-cols-4 gap-2">
                  {[3, 6, 9, 12].map((m) => (
                    <button
                      key={m}
                      onClick={() => setTenureMonths(m)}
                      className={`py-2.5 rounded-xl font-bold text-xs transition-all ${
                        tenureMonths === m
                          ? 'bg-brand-600 text-white shadow-md'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {m} Months
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculated Monthly Box */}
              <div className="bg-gradient-to-r from-slate-900 to-brand-900 text-white p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Monthly Installment (0% Interest)</span>
                  <div className="text-2xl sm:text-3xl font-black text-tealbrand-400">
                    ₹{monthlyEmi.toLocaleString()} <span className="text-xs text-slate-400 font-normal">/ month</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(`Interested in 0% EMI option for ₹${treatmentCost.toLocaleString()} treatment`)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs text-slate-900 bg-white hover:bg-tealbrand-400 transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Apply 0% EMI Plan</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
