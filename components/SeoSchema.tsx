'use client';

import React from 'react';
import { CLINIC_INFO, FAQS } from '@/data/dentalData';

export default function SeoSchema() {
  const schemaMedicalBusiness = {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'Dentist', 'LocalBusiness'],
    '@id': 'https://rekhadental.com/#clinic',
    name: CLINIC_INFO.name,
    description: CLINIC_INFO.tagline,
    url: 'https://rekhadental.com',
    telephone: CLINIC_INFO.phonePrimary,
    priceRange: '₹₹ - ₹₹₹',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot 42, Sector 14, Main Road (Opp. Swarn Jayanti Park), Indirapuram',
      addressLocality: 'Ghaziabad',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201014',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.64321,
      longitude: 77.37123,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '20:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '10:00',
        closes: '16:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: CLINIC_INFO.googleRating.toString(),
      reviewCount: CLINIC_INFO.googleReviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    medicalSpecialty: [
      'Dentistry',
      'Prosthodontics',
      'Implantology',
      'Orthodontics',
      'Endodontics',
      'CosmeticDentistry'
    ],
  };

  const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMedicalBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />
    </>
  );
}
