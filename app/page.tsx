import { Suspense } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import SolutionSection from "@/components/SolutionSection";
import Pricing from "@/components/Pricing";
import Testimonials3 from "@/components/Testimonials3";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

// SEO Metadata for VibeCoffee
export const metadata: Metadata = {
  title: 'VibeCoffee - Non-Toxic Protein Coffee for Peak Performance',
  description: 'Clean energy meets evidence-based nutrition. Premium protein coffee with no artificial ingredients, third-party tested for purity. Sustained focus for high-performers.',
  keywords: 'protein coffee, clean energy, non-toxic, sustained energy, cognitive performance, health optimization, third-party tested, organic coffee, grass-fed protein',
  authors: [{ name: 'VibeCoffee' }],
  openGraph: {
    title: 'VibeCoffee - Non-Toxic Protein Coffee for Peak Performance',
    description: 'Evidence-based protein coffee engineered for the analytical mind. No jitters. No crash. No hidden toxins. Just sustained clarity for your most demanding days.',
    url: 'https://vibecoffee.com',
    siteName: 'VibeCoffee',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'VibeCoffee - Premium Protein Coffee',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VibeCoffee - Non-Toxic Protein Coffee',
    description: 'Sustained energy without compromise. Third-party tested for purity. 25g clean protein + 150mg caffeine.',
    images: ['/twitter-image.png'],
    creator: '@vibecoffee',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function Home() {
  return (
    <>
      <Suspense fallback={<div className="h-20 bg-white"></div>}>
        <Header />
      </Suspense>

      <main className="min-h-screen">
        <Hero />
        <Problem />
        <SolutionSection />
        <Testimonials3 />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}