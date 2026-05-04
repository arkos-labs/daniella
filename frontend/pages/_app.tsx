import React from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isDashboardPage = router.pathname?.startsWith('/admin') || router.pathname?.startsWith('/client');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      {!isDashboardPage && <Footer />}
    </div>
  );
}

export default MyApp;
