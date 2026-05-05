import React from 'react';
import Head from 'next/head';
import { Scale, ShieldCheck, MapPin, Mail, Globe, ExternalLink } from 'lucide-react';

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-[#F8F5EE] pb-32">
      <Head>
        <title>Mentions Légales | Dany Natural Concept</title>
        <meta name="description" content="Mentions légales de Dany Natural Concept. Informations sur l'entreprise, l'hébergement et la propriété intellectuelle." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      {/* Hero Header */}
      <section className="relative pt-44 pb-20 overflow-hidden bg-white border-b border-[#3fad28]/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#4ec433]/5 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <span className="section-tag mb-6">Cadre Légal</span>
          <h1 className="text-6xl md:text-7xl font-serif mb-8 text-[#1a1a1a] leading-tight">
            Mentions <span className="italic-serif text-gradient">Légales</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Transparence et conformité au service de votre confiance.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12">
            
            {/* Editeur */}
            <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl shadow-black/5 border border-[#3fad28]/5 relative overflow-hidden group hover:border-[#3fad28]/20 transition-all duration-500">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 bg-[#3fad28]/10 rounded-2xl flex items-center justify-center text-[#3fad28]">
                  <Scale className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-serif text-[#1a1a1a]">Éditeur du Site</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F8F5EE] rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#e68d15]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1a1a1a] uppercase tracking-widest text-[10px] mb-1">Siège Social</p>
                      <p className="text-gray-500 font-light italic">Valenciennes, France</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F8F5EE] rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#e68d15]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1a1a1a] uppercase tracking-widest text-[10px] mb-1">Contact</p>
                      <a href="mailto:naturalconcept.france@yahoo.fr" className="text-[#3fad28] hover:underline">naturalconcept.france@yahoo.fr</a>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-500 font-light leading-relaxed">
                    Le site <span className="font-medium text-[#1a1a1a]">daniella-three.vercel.app</span> est édité par Daniella Adabra, agissant en qualité de représentante de Dany Natural Concept.
                  </p>
                  <p className="text-gray-500 font-light leading-relaxed">
                    Directrice de la publication : <span className="text-[#1a1a1a] font-medium">Daniella Adabra</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Hébergement */}
            <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl shadow-black/5 border border-[#3fad28]/5 relative overflow-hidden group hover:border-[#3fad28]/20 transition-all duration-500">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 bg-[#e68d15]/10 rounded-2xl flex items-center justify-center text-[#e68d15]">
                  <Globe className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-serif text-[#1a1a1a]">Hébergement</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-500 font-light leading-relaxed text-lg">
                  Le site est hébergé par <span className="font-bold text-[#1a1a1a]">Vercel Inc.</span>, situé au :
                </p>
                <div className="bg-[#F8F5EE] p-8 rounded-2xl border border-black/5">
                  <p className="text-[#1a1a1a] font-light">
                    340 S Lemon Ave #1142<br />
                    Walnut, CA 91789<br />
                    États-Unis
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[#3fad28] hover:translate-x-2 transition-transform duration-300">
                  <ExternalLink className="w-4 h-4" />
                  <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="font-medium">vercel.com</a>
                </div>
              </div>
            </div>

            {/* Propriété Intellectuelle */}
            <div className="bg-[#3fad28] rounded-[3rem] p-10 md:p-16 shadow-xl shadow-black/5 relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-serif">Propriété Intellectuelle</h2>
              </div>
              
              <div className="space-y-6 text-white/80 font-light leading-relaxed text-lg">
                <p>
                  L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur quelque support que ce soit est formellement interdite sauf autorisation expresse de la directrice de la publication.
                </p>
              </div>
            </div>

            {/* Protection des données */}
            <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl shadow-black/5 border border-[#3fad28]/5 relative overflow-hidden group hover:border-[#3fad28]/20 transition-all duration-500">
              <h2 className="text-3xl font-serif text-[#1a1a1a] mb-8">Protection des données (RGPD)</h2>
              <div className="space-y-6 text-gray-500 font-light leading-relaxed">
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition au traitement de vos données personnelles.
                </p>
                <p>
                  Pour exercer ces droits, vous pouvez nous contacter par email à l&apos;adresse : <a href="mailto:naturalconcept.france@yahoo.fr" className="text-[#3fad28] font-medium underline">naturalconcept.france@yahoo.fr</a>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
