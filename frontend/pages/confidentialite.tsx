import React from 'react';
import Head from 'next/head';
import { ShieldCheck, Eye, Lock, Database, UserCheck, Mail } from 'lucide-react';

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-[#F8F5EE] pb-32">
      <Head>
        <title>Politique de Confidentialité | Dany Natural Concept</title>
        <meta name="description" content="Découvrez comment Dany Natural Concept protège vos données personnelles. Engagement de confidentialité et respect du RGPD." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      {/* Hero Header */}
      <section className="relative pt-44 pb-20 overflow-hidden bg-white border-b border-[#3fad28]/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#3fad28]/5 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <span className="section-tag mb-6 border-[#3fad28]/20 text-[#3fad28] bg-[#3fad28]/5">Engagement RGPD</span>
          <h1 className="text-6xl md:text-7xl font-serif mb-8 text-[#1a1a1a] leading-tight">
            Confidentialité <br /> <span className="italic-serif text-gradient">& Sécurité</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Votre confiance est notre priorité. Nous nous engageons à protéger l&apos;intégralité de vos données personnelles.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-black/5 border border-[#3fad28]/5">
                <Database className="w-10 h-10 text-[#3fad28] mb-6" />
                <h3 className="text-2xl font-serif text-[#1a1a1a] mb-4">Collecte des Données</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  Nous collectons uniquement les informations nécessaires au traitement de vos commandes et à la personnalisation de votre suivi naturopathique (nom, adresse, email, téléphone).
                </p>
              </div>

              <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-black/5 border border-[#3fad28]/5">
                <Lock className="w-10 h-10 text-[#e68d15] mb-6" />
                <h3 className="text-2xl font-serif text-[#1a1a1a] mb-4">Utilisation & Sécurité</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  Vos données sont stockées de manière sécurisée et ne sont jamais vendues ou échangées avec des tiers à des fins commerciales.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl shadow-black/5 border border-[#3fad28]/5 relative overflow-hidden group">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 bg-[#3fad28]/10 rounded-2xl flex items-center justify-center text-[#3fad28]">
                  <UserCheck className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-serif text-[#1a1a1a]">Vos Droits (RGPD)</h2>
              </div>
              
              <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
                <p>
                  Conformément au Règlement Général sur la Protection des Données, vous disposez d&apos;un droit permanent d&apos;accès, de modification et de suppression de vos données.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#3fad28]"></div>
                    Droit d&apos;accès à vos informations personnelles.
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#3fad28]"></div>
                    Droit de rectification en cas d&apos;erreur.
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#3fad28]"></div>
                    Droit à l&apos;oubli (suppression totale).
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1a1a1a] rounded-[3rem] p-12 text-center text-white">
              <Mail className="w-12 h-12 text-[#e68d15] mx-auto mb-8" />
              <h2 className="text-3xl font-serif mb-6">Une question sur vos données ?</h2>
              <p className="text-white/50 font-light mb-10 max-w-xl mx-auto">
                Notre déléguée à la protection des données est à votre disposition pour toute demande relative à votre vie privée.
              </p>
              <a href="mailto:naturalconcept.france@yahoo.fr" className="btn-primary inline-block px-12">Nous contacter</a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
