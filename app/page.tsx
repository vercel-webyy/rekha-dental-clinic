'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsCounter from '@/components/StatsCounter';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedTreatments from '@/components/FeaturedTreatments';
import SpecialistDoctors from '@/components/SpecialistDoctors';
import TechnologyShowcase from '@/components/TechnologyShowcase';
import SmileTransformations from '@/components/SmileTransformations';
import EmiCalculator from '@/components/EmiCalculator';
import Testimonials from '@/components/Testimonials';
import AppointmentForm from '@/components/AppointmentForm';
import BlogSection from '@/components/BlogSection';
import FaqSection from '@/components/FaqSection';
import ExitIntentModal from '@/components/ExitIntentModal';
import FloatingActions from '@/components/FloatingActions';
import Footer from '@/components/Footer';

export default function Home() {
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState<string | undefined>(undefined);
  const [selectedDoctorForBooking, setSelectedDoctorForBooking] = useState<string | undefined>(undefined);
  const [customMessageForBooking, setCustomMessageForBooking] = useState<string | undefined>(undefined);

  const handleOpenBooking = (treatmentOrMsg?: string) => {
    if (treatmentOrMsg) {
      if (treatmentOrMsg.startsWith('Dr.')) {
        setSelectedDoctorForBooking(treatmentOrMsg);
      } else if (treatmentOrMsg.toLowerCase().includes('option') || treatmentOrMsg.toLowerCase().includes('voucher')) {
        setCustomMessageForBooking(treatmentOrMsg);
      } else {
        setSelectedTreatmentForBooking(treatmentOrMsg);
      }
    }
    const bookingElem = document.getElementById('booking-section');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 relative">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Hero Section */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* Stats Counter Bar */}
      <StatsCounter />

      {/* Why Choose Rekha Dental */}
      <WhyChooseUs />

      {/* Featured Treatments */}
      <FeaturedTreatments onOpenBooking={(tTitle) => handleOpenBooking(tTitle)} />

      {/* Specialist Doctors */}
      <SpecialistDoctors onOpenBooking={(docName) => handleOpenBooking(docName)} />

      {/* 3D Technology Showcase */}
      <TechnologyShowcase />

      {/* Smile Transformations (Before & After Slider) */}
      <SmileTransformations onOpenBooking={() => handleOpenBooking()} />

      {/* 0% Interest EMI Calculator */}
      <EmiCalculator onOpenBooking={(msg) => handleOpenBooking(msg)} />

      {/* Testimonials & Reviews */}
      <Testimonials />

      {/* Appointment Booking Section */}
      <AppointmentForm
        initialTreatment={selectedTreatmentForBooking}
        initialDoctor={selectedDoctorForBooking}
        initialMessage={customMessageForBooking}
      />

      {/* Blog & Articles */}
      <BlogSection />

      {/* FAQs Section */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Conversion Features */}
      <ExitIntentModal onOpenBooking={(msg) => handleOpenBooking(msg)} />
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />
    </main>
  );
}
