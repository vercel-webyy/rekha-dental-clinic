import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import SeoSchema from '@/components/SeoSchema';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Rekha Dental Clinic | Best Dentist & Digital Dental Implants in Ghaziabad',
  description: 'Rekha Dental Clinic Ghaziabad - Leading digital dental clinic specializing in painless dental implants, 3D smile makeovers, microscopic root canals & clear aligners. 19+ yrs experience.',
  keywords: [
    'Best Dentist in Ghaziabad',
    'Dental Clinic in Ghaziabad',
    'Dental Implants Ghaziabad',
    'Smile Makeover Ghaziabad',
    'Root Canal Ghaziabad',
    'Painless Root Canal Indirapuram',
    'Clear Aligners Raj Nagar Extension'
  ],
  authors: [{ name: 'Dr. Rekha Sharma' }],
  openGraph: {
    title: 'Rekha Dental Clinic | Advanced Digital Dentistry Ghaziabad',
    description: 'World-class 3D digital dental care, painless implants & smile makeovers in Ghaziabad.',
    url: 'https://rekhadental.com',
    siteName: 'Rekha Dental Clinic',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09',
        width: 1200,
        height: 630,
        alt: 'Rekha Dental Clinic Ghaziabad',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable} scroll-smooth`}>
      <head>
        <SeoSchema />
      </head>
      <body className="bg-slate-50 text-slate-900 font-sans antialiased selection:bg-teal-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
