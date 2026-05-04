import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Leaf, Heart, ShieldCheck, Sparkles, ArrowRight, Droplets, Sun } from 'lucide-react';

export default function Apropos() {
  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <Head>
        <title>À Propos | Dany Natural Concept</title>
        <meta name="description" content="Découvrez l'histoire de Daniella Adabra, fondatrice de Dany Natural Concept, et notre engagement pour une beauté saine et naturelle." />
      </Head>

      {/* Premium Hero Header */}
      <section className="relative overflow-hidden bg-[#FAFAF8] py-32 mb-16 border-b border-gray-100">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[120%] bg-[#eef4ef] rounded-full blur-[80px] opacity-60"></div>
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[100%] bg-[#f5f3ee] rounded-full blur-[60px] opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-[#39B54A]/10 text-[#39B54A] text-xs uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6 font-bold border border-[#39B54A]/20">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            L'Histoire DNC
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight text-[#2C2C2C] tracking-tight">
            Réconcilier la beauté <br className="hidden md:block" /> avec la <span className="text-[#39B54A] italic">santé.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Née d'une passion pour la naturopathie et les rituels ancestraux, Dany Natural Concept est bien plus qu'une marque : c'est un retour aux sources.
          </p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Column */}
            <div className="relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                <img 
                  src="/dnc_founder_portrait_v2_1777837997166.png" 
                  alt="Daniella Adabra, Fondatrice de DNC" 
                  className="w-full h-full object-cover"
                  onError={(e: any) => { e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'; }}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#F2A900]/20 rounded-full blur-3xl z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#39B54A]/20 rounded-full blur-3xl z-0"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-10 -left-6 md:-left-12 bg-white p-6 rounded-3xl shadow-xl z-20 animate-bounce-slow border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#39B54A]/10 rounded-full flex items-center justify-center text-[#39B54A]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-[#2C2C2C] text-lg">Naturopathe</p>
                    <p className="text-gray-500 text-sm">Diplômée & Certifiée</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text Column */}
            <div className="relative z-10">
              <span className="text-[#39B54A] font-bold tracking-widest uppercase text-sm mb-4 block">La Fondatrice</span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#2C2C2C] mb-8">Daniella Adabra</h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Passionnée depuis toujours par les bienfaits millénaires des plantes, j'ai fondé <strong className="text-[#2C2C2C]">Dany Natural Concept</strong> avec une conviction profonde : la nature possède tout ce dont notre corps a besoin pour s'équilibrer.
                </p>
                <p>
                  Originaire du Togo, j'ai eu la chance de grandir entourée de femmes qui m'ont transmis leurs rituels de beauté traditionnels. Ces secrets de fabrication, riches en beurres bruts et en huiles précieuses, ont nourri mon envie d'aller plus loin.
                </p>
                <p>
                  En devenant <strong>Naturopathe certifiée à Valenciennes</strong>, j'ai fusionné cet héritage culturel avec une expertise scientifique. L'objectif ? Créer des synergies végétales uniques qui respectent le microbiote cutané et la vitalité naturelle des cheveux.
                </p>
                
                <div className="pt-6 pb-2">
                  <blockquote className="relative p-8 bg-[#FAFAF8] rounded-3xl border-l-4 border-[#F2A900]">
                    <Sparkles className="absolute top-4 right-4 w-6 h-6 text-[#F2A900]/20" />
                    <p className="italic text-[#2C2C2C] text-2xl font-serif leading-snug">
                      "Mon rôle n'est pas de transformer votre peau, mais de lui donner les outils naturels pour qu'elle se régénère d'elle-même."
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy / 3 Pillars */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-4">Notre Philosophie</h2>
            <p className="text-xl text-gray-500">L'alliance de l'artisanat et de la naturopathie.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#39B54A]/10 rounded-full flex items-center justify-center mb-6 text-[#39B54A]">
                <Droplets className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">Ingrédients Bruts</h3>
              <p className="text-gray-600 leading-relaxed">
                Nous utilisons uniquement des beurres et huiles végétaux non raffinés pour conserver 100% de leurs vitamines et principes actifs naturels. Aucun ingrédient de remplissage.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#F2A900]/10 rounded-full flex items-center justify-center mb-6 text-[#F2A900]">
                <Sun className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">Fabrication Artisanale</h3>
              <p className="text-gray-600 leading-relaxed">
                Chaque baume, chantilly ou sérum est formulé, mélangé et conditionné à la main, en petites séries, pour garantir une fraîcheur et une qualité exceptionnelles.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#39B54A]/10 rounded-full flex items-center justify-center mb-6 text-[#39B54A]">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">Approche Globale</h3>
              <p className="text-gray-600 leading-relaxed">
                En tant que naturopathe, je conçois mes soins pour qu'ils agissent en synergie avec votre métabolisme. Une beauté qui vient de l'intérieur et se voit à l'extérieur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements List (Redesigned) */}
      <section className="py-24 bg-[#FAFAF8] border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#39B54A] font-bold tracking-widest uppercase text-sm mb-4 block">Mes Engagements</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C]">Mes valeurs au quotidien</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="w-16 h-16 bg-[#39B54A]/10 text-[#39B54A] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">La transparence totale</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Je refuse d'utiliser le moindre produit chimique, silicone ou conservateur agressif. Tout ce que vous mettez sur votre peau est 100% sain et naturel.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="w-16 h-16 bg-[#F2A900]/10 text-[#F2A900] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">Le respect du vivant</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                C'est une évidence pour moi : aucune de mes créations n'est (et ne sera jamais) testée sur les animaux. C'est une conviction fondatrice.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="w-16 h-16 bg-[#39B54A]/10 text-[#39B54A] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">L'artisanat local</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Chaque crème, chaque sérum est formulé, fouetté et étiqueté à la main par mes soins, directement depuis mon atelier à Valenciennes.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="w-16 h-16 bg-[#F2A900]/10 text-[#F2A900] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">L'humain avant tout</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                En consultation ou en boutique, je prends toujours le temps de vous écouter pour vous conseiller de manière sincère, bienveillante et sans aucun jugement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#FAFAF8] text-center border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] mb-6">Prête à commencer votre aventure ?</h2>
          <p className="text-xl text-gray-500 mb-10">
            Découvrez nos soins formulés à la main ou réservez votre première consultation en naturopathie.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/boutique" className="inline-flex items-center justify-center gap-2 bg-[#39B54A] text-white px-8 py-4 rounded-full font-bold hover:bg-[#278E35] transition-all hover:shadow-[0_8px_30px_rgb(57,181,74,0.3)] hover:-translate-y-1 text-lg focus-visible:ring-2 focus-visible:ring-[#39B54A] focus-visible:ring-offset-2 outline-none">
              Voir la boutique
            </Link>
            <Link href="/reservations" className="inline-flex items-center justify-center gap-2 border-2 border-gray-100 text-[#39B54A] px-8 py-4 rounded-full font-bold hover:border-[#39B54A] transition-all text-lg focus-visible:ring-2 focus-visible:ring-[#39B54A] focus-visible:ring-offset-2 outline-none group bg-white">
              Prendre rendez-vous <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
