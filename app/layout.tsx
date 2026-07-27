import type { Metadata, Viewport } from 'next';
import './globals.css';
import SeoSchema from '@/components/SeoSchema';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Rekha Dental Clinic | Best Dentist & Dental Implants in Ghaziabad',
  description: 'Rekha Dental Clinic Ghaziabad - Leading digital dental clinic specializing in painless dental implants, 3D smile makeovers, microscopic root canals & clear aligners. 19+ yrs experience. Book online!',
  keywords: [
    'Best Dentist in Ghaziabad',
    'Dental Clinic in Ghaziabad',
    'Dental Implants Ghaziabad',
    'Smile Makeover Ghaziabad',
    'Root Canal Ghaziabad',
    'Painless Root Canal Indirapuram',
    'Clear Aligners Raj Nagar Extension',
    'Dr Rekha Sharma Dentist'
  ],
  authors: [{ name: 'Dr. Rekha Sharma' }],
  openGraph: {
    title: 'Rekha Dental Clinic | Advanced Digital Dentistry Ghaziabad',
    description: 'World-class 3D digital dental care, painless implants & smile makeovers in Ghaziabad with 19+ years experience.',
    url: 'https://rekhadental.com',
    siteName: 'Rekha Dental Clinic',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09',
        width: 1200,
        height: 630,
        alt: 'Rekha Dental Clinic Digital Dentistry Center Ghaziabad',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rekha Dental Clinic Ghaziabad',
    description: 'Leading digital dental center for implants, veneers & root canals.',
    images: ['https://images.unsplash.com/photo-1629909613654-28e377c37b09'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <SeoSchema />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-slate-50 text-slate-900 font-sans antialiased selection:bg-tealbrand-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
