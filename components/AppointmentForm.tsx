'use client';

import React, { useState, useEffect } from 'react';
import { CLINIC_INFO, DOCTORS, TREATMENTS } from '@/data/dentalData';
import { Calendar, Clock, User, Phone, MessageSquare, CheckCircle, Sparkles, ShieldCheck, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AppointmentFormProps {
  initialTreatment?: string;
  initialDoctor?: string;
  initialMessage?: string;
}

export default function AppointmentForm({ initialTreatment, initialDoctor, initialMessage }: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: initialTreatment || 'Dental Implants',
    doctor: initialDoctor || 'Dr. Rekha Sharma',
    date: '',
    timeSlot: '10:00 AM - 12:00 PM',
    message: initialMessage || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialTreatment) setFormData(prev => ({ ...prev, treatment: initialTreatment }));
    if (initialDoctor) setFormData(prev => ({ ...prev, doctor: initialDoctor }));
    if (initialMessage) setFormData(prev => ({ ...prev, message: initialMessage }));
  }, [initialTreatment, initialDoctor, initialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Fire celebratory confetti!
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log('Confetti trigger', err);
      }
    }, 800);
  };

  return (
    <section id="booking-section" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tealbrand-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Reassurance & Clinic Contact */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-tealbrand-400 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>Priority Digital Reservation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Book Your Premium <span className="text-gradient">Dental Consultation</span>
            </h2>

            <p className="text-base text-slate-300 font-normal leading-relaxed">
              Experience Ghaziabad's finest 3D digital dental care. Confirm your consultation slot online and receive a complimentary 3D Jaw Bone Scan worth ₹1,500.
            </p>

            {/* Quick Contact & Address Box */}
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-tealbrand-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Location:</span>
                  <p className="text-slate-300">{CLINIC_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Phone className="w-4 h-4 text-tealbrand-400 shrink-0" />
                <span className="text-white font-bold">Helpline: {CLINIC_INFO.phonePrimary}</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/60 text-xs flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Zero Consultation Wait Time</span>
              </div>
              <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/60 text-xs flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Free 3D Scan Voucher Included</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Booking Glass Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100">
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Appointment Confirmed!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you <strong>{formData.name}</strong>. Your consultation request for <strong>{formData.treatment}</strong> with <strong>{formData.doctor}</strong> has been prioritised.
                </p>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-700 inline-block text-left space-y-1">
                  <div><strong>Preferred Date:</strong> {formData.date || 'Today / Next Available'}</div>
                  <div><strong>Time Window:</strong> {formData.timeSlot}</div>
                  <div><strong>Clinic Address:</strong> Indirapuram / Raj Nagar Ext, Ghaziabad</div>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Our patient coordinator will send a WhatsApp confirmation & directions to <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Calendar className="w-5 h-5 text-brand-600" />
                  <span>Reserve Your Slot</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-sm font-medium text-slate-900 bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number (WhatsApp) *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-sm font-medium text-slate-900 bg-slate-50/50"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Treatment */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Select Treatment *</label>
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-sm font-medium text-slate-900 bg-slate-50/50"
                    >
                      {TREATMENTS.map((t) => (
                        <option key={t.id} value={t.title}>{t.title}</option>
                      ))}
                    </select>
                  </div>

                  {/* Doctor Choice */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Preferred Specialist</label>
                    <select
                      value={formData.doctor}
                      onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-sm font-medium text-slate-900 bg-slate-50/50"
                    >
                      {DOCTORS.map((d) => (
                        <option key={d.id} value={d.name}>{d.name} ({d.title})</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-sm font-medium text-slate-900 bg-slate-50/50"
                    />
                  </div>

                  {/* Time Window */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Preferred Slot</label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-sm font-medium text-slate-900 bg-slate-50/50"
                    >
                      <option value=" Morning: 10:00 AM - 1:00 PM">Morning: 10:00 AM - 1:00 PM</option>
                      <option value=" Afternoon: 2:00 PM - 5:00 PM">Afternoon: 2:00 PM - 5:00 PM</option>
                      <option value=" Evening: 5:00 PM - 8:30 PM">Evening: 5:00 PM - 8:30 PM</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Dental Issues / Symptoms (Optional)</label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <textarea
                      rows={2}
                      placeholder="e.g. Tooth sensitivity, missing tooth, wants smile makeover quote..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-sm font-medium text-slate-900 bg-slate-50/50"
                    ></textarea>
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-brand-600 via-brand-500 to-tealbrand-600 hover:from-brand-700 hover:to-tealbrand-700 shadow-xl shadow-brand-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                >
                  {loading ? 'Confirming Appointment...' : 'Confirm Appointment Now'}
                </button>

                <p className="text-[11px] text-center text-slate-500 font-medium">
                  🔒 Your privacy is strictly protected. We respect patient confidentiality.
                </p>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
