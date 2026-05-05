import React from 'react';
import Head from 'next/head';
import { Cookie, Info, ToggleLeft, ShieldCheck, Settings } from 'lucide-react';

export default function PolitiqueCookies() {
  return (
    <main className="min-h-screen bg-[#F8F5EE] pb-32">
      <Head>
        <title>Politique des Cookies | Dany Natural Concept</title>
        <meta name="description" content="Découvrez comment Dany Natural Concept utilise les cookies pour améliorer votre expérience de navigation." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      {/* Hero Header */}
      <section className="relative pt-44 pb-20 overflow-hidden bg-white border-b border-[#3fad28]/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#4ec433]/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#e68d15]/5 rounded-full blur-[80px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <span className="section-tag mb-6 uppercase tracking-[0.3em] font-bold text-[10px] text-[#3fad28]">Vie Privée</span>
          <h1 className="text-6xl md:text-7xl font-serif mb-8 text-[#1a1a1a] leading-tight">
            Politique des <span className="italic-serif text-gradient">Cookies</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Nous utilisons les cookies pour personnaliser votre expérience et analyser notre trafic de manière anonyme.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12">
            
            {/* Qu'est-ce qu'un cookie */}
            <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl shadow-black/5 border border-[#3fad28]/5 relative overflow-hidden group">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-14 h-14 bg-[#3fad28]/10 rounded-2xl flex items-center justify-center text-[#3fad28]">
                  <Cookie className="w-7 h-7" />
                </div>
                <h2 className="text-3xl font-serif text-[#1a1a1a]">Qu&apos;est-ce qu&apos;un cookie ?</h2>
              </div>
              <p className="text-gray-500 font-light leading-relaxed text-lg">
                Un cookie est un petit fichier texte déposé sur votre ordinateur, mobile ou tablette lors de la visite d&apos;un site. Il permet au site de mémoriser vos actions et préférences (nom d&apos;utilisateur, langue, taille des caractères et autres paramètres d&apos;affichage) pendant un temps donné.
              </p>
            </div>

            {/* Types de cookies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-12 rounded-[3.5rem] shadow-xl shadow-black/5 border border-[#3fad28]/5">
                <Settings className="w-10 h-10 text-[#e68d15] mb-8" />
                <h3 className="text-2xl font-serif text-[#1a1a1a] mb-4">Cookies Nécessaires</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Ces cookies sont indispensables au bon fonctionnement du site et ne peuvent pas être désactivés. Ils permettent par exemple de gérer votre panier d&apos;achat ou votre session.
                </p>
              </div>

              <div className="bg-white p-12 rounded-[3.5rem] shadow-xl shadow-black/5 border border-[#3fad28]/5">
                <ToggleLeft className="w-10 h-10 text-[#3fad28] mb-8" />
                <h3 className="text-2xl font-serif text-[#1a1a1a] mb-4">Cookies d&apos;Analyse</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Ils nous permettent de mesurer l&apos;audience du site et d&apos;identifier les pages les plus visitées pour améliorer nos services.
                </p>
              </div>
            </div>

            {/* Gestion des cookies */}
            <div className="bg-[#1a1a1a] rounded-[3rem] p-10 md:p-16 shadow-xl shadow-black/5 relative overflow-hidden text-white">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-serif">Votre Choix</h2>
              </div>
              
              <div className="space-y-6 text-white/70 font-light leading-relaxed text-lg">
                <p>
                  Vous pouvez à tout moment configurer votre navigateur pour bloquer ou vous alerter sur ces cookies. Cependant, certaines parties du site pourraient ne pas fonctionner correctement.
                </p>
                <div className="pt-6">
                  <button className="px-8 py-4 bg-[#3fad28] hover:bg-[#4ec433] text-white rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300">
                    Gérer mes préférences
                  </button>
                </div>
              </div>
            </div>

            {/* Info Complémentaire */}
            <div className="flex items-center gap-4 p-8 bg-[#3fad28]/5 rounded-3xl border border-[#3fad28]/10 text-gray-500 font-light italic">
              <Info className="w-6 h-6 text-[#3fad28] shrink-0" />
              <p>Cette politique est mise à jour régulièrement pour refléter les évolutions technologiques et réglementaires.</p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
