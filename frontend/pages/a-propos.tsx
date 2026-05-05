import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Leaf, Heart, CheckCircle2, Sparkles, ArrowRight, Droplets, Sun, Quote, Award, Globe } from 'lucide-react';

export default function APropos() {
  return (
    <main className="min-h-screen bg-[#F8F5EE] pb-32">
      <Head>
        <title>À Propos: Daniella Adabra, Naturopathe &amp; Créatrice | Dany Natural Concept</title>
        <meta name="description" content="Découvrez Daniella Adabra: naturopathe, créatrice de cosmétiques naturels depuis 2018. Expertise africaine, approche holistique. Bienveillante, passionnée." />
        <meta name="keywords" content="Daniella Adabra, naturopathe femme entrepreneuse, beauté naturelle africaine, cosmétiques holistiques, créatrice cosmétiques naturels" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://daniella-three.vercel.app/a-propos" />
        <meta property="og:title" content="À Propos: Daniella Adabra, Naturopathe &amp; Créatrice | Dany Natural" />
        <meta property="og:description" content="Daniella Adabra, naturopathe et créatrice de cosmétiques naturels depuis 2018. 500+ clientes transformées. Approche holistique et bienveillante." />
      </Head>

      {/* Hero Header */}
      <section className="relative pt-44 pb-32 overflow-hidden bg-white border-b border-[#2D4A1E]/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#3D6228]/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#C9A96E]/10 rounded-full blur-[80px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <span className="section-tag mb-6">Manifeste &amp; Vision</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 text-[#2C2C28] leading-[0.95]">
            Daniella Adabra — <br className="hidden md:block" /> <span className="italic-serif text-gradient">Naturopathe &amp; Créatrice</span>
          </h1>
          <p className="text-gray-500 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-8">
            Fondatrice de Dany Natural Concept depuis 2018. Naturopathe, elle crée des cosmétiques naturels qui célèbrent la beauté originelle avec des ingrédients africains authentiques.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-widest">
            <span className="text-[#2D4A1E]/60">15 ans d&apos;expérience</span>
            <span className="text-[#C9A96E]">&middot;</span>
            <span className="text-[#2D4A1E]/60">500+ clientes transformées</span>
            <span className="text-[#C9A96E]">&middot;</span>
            <span className="text-[#2D4A1E]/60">22 produits formulés</span>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/5] group">
                <img 
                  src="/dany_founder.jpg" 
                  alt="Daniella Adabra, Fondatrice de Dany Natural Concept" 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  onError={(e: any) => { e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D4A1E]/40 to-transparent"></div>
              </div>
              
              {/* Floating Award */}
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl z-20 border border-[#2D4A1E]/5 animate-float max-w-[240px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-[#C9A96E] rounded-full flex items-center justify-center text-white">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#2D4A1E]">Certification</span>
                </div>
                <p className="text-sm font-serif text-[#2C2C28]">Naturopathe Diplômée & Experte en Cosmétique</p>
              </div>
            </div>
            
            {/* Text Column */}
            <div className="lg:col-span-7 relative">
              <span className="text-[#C9A96E] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">La Fondatrice</span>
              <h2 className="text-5xl md:text-7xl font-serif text-[#2C2C28] mb-10 leading-tight">Daniella <span className="italic text-[#2D4A1E]">Adabra</span></h2>
              
              <div className="space-y-8 text-lg font-light text-gray-500 leading-relaxed">
                <p>
                  Passionnée depuis toujours par les bienfaits millénaires des plantes, j'ai fondé <span className="text-[#2D4A1E] font-medium italic">Dany Natural Concept</span> avec une conviction profonde : la nature possède tout ce dont notre corps a besoin pour s'équilibrer.
                </p>
                <p>
                  Originaire du Togo, j'ai eu la chance de grandir entourée de femmes qui m'ont transmis leurs rituels de beauté traditionnels. Ces secrets de fabrication, riches en beurres bruts et en huiles précieuses, ont nourri mon envie d'aller plus loin.
                </p>
                <p>
                  En devenant <strong className="text-[#2C2C28] font-bold">Naturopathe certifiée à Valenciennes</strong>, j'ai fusionné cet héritage culturel avec une expertise scientifique. L'objectif ? Créer des synergies végétales uniques qui respectent votre vitalité naturelle.
                </p>
                
                <div className="pt-10">
                  <div className="relative p-12 bg-white rounded-[3rem] border border-[#2D4A1E]/5 shadow-xl shadow-black/5">
                    <Quote className="absolute top-8 right-8 w-12 h-12 text-[#C9A96E]/10" />
                    <p className="italic text-[#2C2C28] text-3xl font-serif leading-snug">
                      "Mon rôle n'est pas de transformer votre peau, mais de lui donner les outils naturels pour qu'elle se régénère d'elle-même."
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="py-32 bg-[#2D4A1E] rounded-[5rem] mx-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 noise-bg"></div>
        <div className="container mx-auto px-10 max-w-7xl relative z-10">
          <div className="text-center mb-24">
            <span className="text-[#C9A96E] font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Notre Éthique</span>
            <h2 className="text-5xl md:text-6xl font-serif text-white">Les Piliers de l'Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white/5 backdrop-blur-md p-12 rounded-[3.5rem] border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-500">
              <div className="w-20 h-20 bg-[#C9A96E] rounded-2xl flex items-center justify-center mb-8 text-white rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <Droplets className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-6">Pureté Absolue</h3>
              <p className="text-white/60 font-light leading-relaxed">
                Beurres et huiles végétaux non raffinés, pressés à froid, pour conserver l'intégralité des vitamines et principes actifs.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-12 rounded-[3.5rem] border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-500">
              <div className="w-20 h-20 bg-[#C9A96E] rounded-2xl flex items-center justify-center mb-8 text-white -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <Sun className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-6">Artisanat Local</h3>
              <p className="text-white/60 font-light leading-relaxed">
                Chaque baume est formulé, fouetté et conditionné à la main dans notre atelier de Valenciennes, en petites séries.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-12 rounded-[3.5rem] border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-500">
              <div className="w-20 h-20 bg-[#C9A96E] rounded-2xl flex items-center justify-center mb-8 text-white rotate-6 group-hover:rotate-0 transition-transform duration-500">
                <Globe className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-6">Vision Holistique</h3>
              <p className="text-white/60 font-light leading-relaxed">
                Une approche qui considère l'individu dans sa globalité, alliant bien-être intérieur et éclat extérieur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-32 bg-[#F8F5EE]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-[3.5rem] shadow-xl shadow-black/5 border border-[#2D4A1E]/5 hover:-translate-y-2 transition-all duration-500">
              <CheckCircle2 className="w-12 h-12 text-[#2D4A1E] mb-8" />
              <h3 className="text-3xl font-serif text-[#2C2C28] mb-4">Transparence Totale</h3>
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                Zéro produit chimique, silicone ou conservateur agressif. 100% des ingrédients sont listés et compris.
              </p>
            </div>

            <div className="bg-white p-12 rounded-[3.5rem] shadow-xl shadow-black/5 border border-[#2D4A1E]/5 hover:-translate-y-2 transition-all duration-500">
              <Heart className="w-12 h-12 text-[#C9A96E] mb-8" />
              <h3 className="text-3xl font-serif text-[#2C2C28] mb-4">Respect du Vivant</h3>
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                Cruelty-free par conviction. Nos formulations respectent la biodiversité et votre équilibre cutané.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 mt-20">
        <div className="bg-white rounded-[4rem] p-20 text-center border border-[#2D4A1E]/5 shadow-2xl shadow-black/5 relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#C9A96E]/5 rounded-full blur-[60px]"></div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C28] mb-8">Commençons votre voyage <br /> <span className="italic text-gradient">vers le naturel</span></h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/collection" className="btn-primary px-12">Explorer la collection</Link>
            <Link href="/consultations" className="btn-outline px-12 flex items-center justify-center gap-3">
              Prendre rendez-vous <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
