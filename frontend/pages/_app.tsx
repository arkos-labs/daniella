import React from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Dany Natural Concept",
  "description": "Cosmétiques naturels avec ingrédients africains authentiques. Consultations naturopathe personnalisées. Beauté holistique depuis Valenciennes.",
  "url": "https://daniella-three.vercel.app",
  "logo": "https://daniella-three.vercel.app/logo.png",
  "image": "https://daniella-three.vercel.app/hero-concept.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Valenciennes",
    "addressCountry": "FR"
  },
  "founder": {
    "@type": "Person",
    "name": "Daniella Adabra",
    "jobTitle": "Naturopathe & Créatrice"
  },
  "sameAs": [],
  "priceRange": "€€"
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isDashboardPage = router.pathname?.startsWith('/admin') || router.pathname?.startsWith('/client');

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3fad28" />
        <meta name="author" content="Daniella Adabra - Dany Natural Concept" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Component {...pageProps} />
        </div>
        {!isDashboardPage && <Footer />}
      </div>
    </>
  );
}

export default MyApp;
