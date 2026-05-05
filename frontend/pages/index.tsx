import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MOCK_PRODUCTS } from '../lib/mockData';
import { useCart } from '../hooks/useCart';
import { ArrowRight, ChevronLeft, ChevronRight, Leaf, Star, ShoppingCart, Wind, Apple, Droplets, Sun, Footprints, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const { addItem } = useCart();
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const times = ['09:00', '10:30', '14:00', '15:30', '17:00'];
  const featuredProducts = MOCK_PRODUCTS.slice(0, 4);

  return (
    <main className="min-h-screen bg-[#F8F5EE] overflow-x-hidden">
      <Head>
        <title>Les Cosmétiques Naturels pour Magnifier Votre Beauté Originelle | Dany Natural Concept</title>
        <meta name="description" content="Cosmétiques naturels avec ingrédients africains authentiques. Consultations naturopathe personnalisées. Beauté holistique depuis Valenciennes." />
        <meta name="keywords" content="cosmétiques naturels, naturopathe, beauté originelle, ingrédients africains" />
        {/* Open Graph pour partage réseaux sociaux */}
        <meta property="og:title" content="Les Cosmétiques Naturels pour Magnifier Votre Beauté Originelle | Dany Natural Concept" />
        <meta property="og:description" content="Cosmétiques naturels avec ingrédients africains authentiques. Consultations naturopathe personnalisées. Beauté holistique depuis Valenciennes." />
        <meta property="og:image" content="/hero-concept.jpg" />
        <meta property="og:url" content="https://daniella-three.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://daniella-three.vercel.app/" />
      </Head>

      {/* Hero Section - Elevated Design Experience */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1A1A18]">
        {/* Advanced Background Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#2D4A1E] opacity-90"></div>
          
          {/* Gradient Mesh & Grain */}
          <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-[#C9A96E]/20 rounded-full blur-[150px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#F8F5EE]/10 rounded-full blur-[120px]"></div>
          </div>
          
          <div className="absolute inset-0 opacity-[0.03] noise-bg pointer-events-none"></div>
          
          <img 
            src="/hero-concept.jpg" 
            alt="Dany Natural Concept Atmosphere" 
            className="w-full h-full object-cover opacity-40 scale-105"
            onError={(e: any) => { e.target.src = 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=2000'; }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A18] via-[#1A1A18]/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-16 pb-10">
          <div className="max-w-5xl mx-auto text-center">
            
            <h1 className="text-4xl md:text-[5.5rem] font-serif text-white leading-[1.1] mb-6 tracking-tight animate-reveal-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Les Cosmétiques Naturels pour <br />
              <span className="italic-serif text-gradient-gold">Magnifier Votre</span> <br />
              <span className="relative inline-block">
                Beauté Originelle
                <div className="absolute -bottom-4 left-1/4 right-1/4 h-1 bg-gradient-gold opacity-40"></div>
              </span>
            </h1>
            
            <p className="text-white/80 text-xl md:text-2xl font-light mb-6 max-w-3xl mx-auto leading-relaxed animate-reveal-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Expertise naturopathe certifiée en cosmétiques naturels. Ingrédients africains authentiques. Formules holistiques, résultats visibles. Depuis Valenciennes.
            </p>

            <p className="text-[#C9A96E] text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-8 animate-reveal-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              Bienvenue chez Dany Natural Concept | Formulé par Daniella Adabra, naturopathe certifiée
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-reveal-up opacity-0 mb-8" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <Link href="/boutique" className="group relative px-10 py-6 bg-white text-[#1A1A18] rounded-full font-bold uppercase tracking-widest text-xs overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl min-w-[280px]">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  DÉCOUVRIR LES 22 PRODUITS <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
              
              <Link href="/reservations" className="group flex items-center gap-6 text-white/80 hover:text-white transition-all text-xs font-bold uppercase tracking-widest">
                <span className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E] group-hover:text-white transition-all duration-500">
                  <Droplets className="w-8 h-8" />
                </span>
                <span>CONSULTER UNE NATUROPATHE</span>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] md:text-xs text-white/40 font-medium animate-reveal-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <span className="flex items-center gap-2 tracking-[0.1em] uppercase">✓ Livraison gratuite dès 50€</span>
              <span className="flex items-center gap-2 tracking-[0.1em] uppercase">✓ Satisfaction 30 jours</span>
              <span className="flex items-center gap-2 tracking-[0.1em] uppercase">✓ Support gratuit</span>
            </div>
          </div>
        </div>

        {/* Vertical Scroll Label */}
        <div className="absolute right-12 bottom-0 h-40 flex flex-col items-center gap-8 text-white/20">
          <span className="text-[9px] uppercase tracking-[0.6em] font-black rotate-180 [writing-mode:vertical-lr]">Scroll Down</span>
          <div className="w-[1px] flex-1 bg-gradient-to-b from-white/20 to-transparent"></div>
        </div>
      </section>

      {/* Marquee Branding - Service Benefits */}
      <div className="py-6 md:py-12 bg-white border-y border-[#2D4A1E]/5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-16 shrink-0">
              <span className="text-base md:text-lg font-serif text-[#2D4A1E] uppercase tracking-[0.2em] flex items-center gap-4">
                <span className="opacity-0 w-8"></span> {/* Safe area gap */}
                Livraison Offerte dès 50€
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></span>
              <span className="text-base md:text-lg font-serif text-[#2D4A1E] uppercase tracking-[0.2em]">Paiement 100% Sécurisé</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></span>
              <span className="text-base md:text-lg font-serif text-[#2D4A1E] uppercase tracking-[0.2em]">Conseils Personnalisés</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></span>
              <span className="text-base md:text-lg font-serif text-[#2D4A1E] uppercase tracking-[0.2em]">Expédition sous 48h</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid - The 3 Pillars of Excellence */}
      <section className="py-32 bg-[#F8F5EE] relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[#2D4A1E]/[0.02] -skew-x-12 translate-x-24"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-serif text-[#2C2C28] leading-tight">
              Pourquoi Choisir Nos <br /> <span className="italic text-[#2D4A1E]">Cosmétiques Naturels</span> ?
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Pillar 1 */}
            <div className="group relative bg-white rounded-[3rem] p-12 transition-all duration-700 hover:-translate-y-4 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-[#2D4A1E]/10 border border-[#2D4A1E]/5 overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#C9A96E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-20 h-20 bg-[#F8F5EE] rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#2D4A1E] transition-colors duration-500">
                <Leaf className="w-8 h-8 text-[#2D4A1E] group-hover:text-white group-hover:rotate-[15deg] transition-all duration-500" />
              </div>
              <h3 className="text-3xl font-serif text-[#2C2C28] mb-6">Pureté Absolue</h3>
              <p className="text-gray-500 font-light leading-relaxed mb-8 text-lg">
                Des ingrédients bruts et non raffinés, puisant leur force dans la terre africaine. Nos cosmétiques naturels sont certifiés bio et sans additifs chimiques. Chaque ingrédient est sélectionné pour sa qualité exceptionnelle et son efficacité prouvée.
              </p>
              <p className="text-[#2D4A1E] font-bold text-[10px] uppercase tracking-widest opacity-40">
                100% ingrédients naturels
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="group relative bg-white rounded-[3rem] p-12 transition-all duration-700 hover:-translate-y-4 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-[#2D4A1E]/10 border border-[#2D4A1E]/5 overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#C9A96E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-20 h-20 bg-[#F8F5EE] rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#2D4A1E] transition-colors duration-500">
                <Wind className="w-8 h-8 text-[#2D4A1E] group-hover:text-white group-hover:-rotate-[15deg] transition-all duration-500" />
              </div>
              <h3 className="text-3xl font-serif text-[#2C2C28] mb-6">Savoir-faire Rare</h3>
              <p className="text-gray-500 font-light leading-relaxed mb-8 text-lg">
                Chaque formulation est une pièce d'artisanat unique, créée à la main dans notre atelier à Valenciennes. Daniella Adabra, naturopathe passionnée, supervise chaque étape de la création pour garantir une qualité incomparable.
              </p>
              <p className="text-[#2D4A1E] font-bold text-[10px] uppercase tracking-widest opacity-40">
                Formulation Naturopathique
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="group relative bg-white rounded-[3rem] p-12 transition-all duration-700 hover:-translate-y-4 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-[#2D4A1E]/10 border border-[#2D4A1E]/5 overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#C9A96E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-20 h-20 bg-[#F8F5EE] rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#2D4A1E] transition-colors duration-500">
                <Sparkles className="w-8 h-8 text-[#2D4A1E] group-hover:text-white group-hover:scale-125 transition-all duration-500" />
              </div>
              <h3 className="text-3xl font-serif text-[#2C2C28] mb-6">Éclat Naturel</h3>
              <p className="text-gray-500 font-light leading-relaxed mb-8 text-lg">
                Une approche holistique qui réconcilie durablement votre santé et votre esthétique. Nos soins ne masquent pas les problèmes, ils les résolvent à la source en travaillant sur l'équilibre global de votre peau et de vos cheveux.
              </p>
              <p className="text-[#2D4A1E] font-bold text-[10px] uppercase tracking-widest opacity-40">
                Beauté Durable & Santé
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Call to Action */}
      <section className="py-24 bg-[#2D4A1E] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Commencez Votre Transformation Beauté Naturelle</h2>
          <p className="text-xl text-white/80 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
            Prêt à découvrir les cosmétiques naturels qui changeront votre routine beauté? Commencez par explorer notre collection exclusive ou réservez une <Link href="/reservations" className="underline font-medium">consultation naturopathique</Link> personnalisée avec Daniella.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/boutique" className="bg-white text-[#2D4A1E] px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#F8F5EE] transition-all">
              Découvrir Nos Cosmétiques
            </Link>
            <Link href="/reservations" className="border border-white text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-[#2D4A1E] transition-all">
              Réserver Une Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products - Refined Display */}
      <section className="py-32 bg-[#F8F5EE]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <span className="section-tag mb-4">La Boutique</span>
              <h2 className="text-5xl md:text-7xl font-serif text-[#2C2C28] leading-tight">
                Nos soins <br /> <span className="italic">iconiques</span>
              </h2>
            </div>
            <Link href="/boutique" className="btn-outline group py-3 px-6 text-xs">
              Tout le catalogue <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {featuredProducts.map((product, idx) => (
              <div key={product.id} className={`card-hover bg-white rounded-[3rem] p-4 flex flex-col h-full animate-reveal-up`} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="relative aspect-square rounded-[2.5rem] overflow-hidden mb-8 group/img">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                    onError={(e: any) => { e.target.src = 'https://via.placeholder.com/400x400/F8F5EE/2D4A1E?text=DNC'; }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover/img:opacity-100">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#2D4A1E] hover:bg-[#2D4A1E] hover:text-white transition-all">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="px-4 pb-4 flex flex-col flex-1">
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-3 h-3 fill-[#C9A96E] text-[#C9A96E]" />
                    <Star className="w-3 h-3 fill-[#C9A96E] text-[#C9A96E]" />
                    <Star className="w-3 h-3 fill-[#C9A96E] text-[#C9A96E]" />
                    <Star className="w-3 h-3 fill-[#C9A96E] text-[#C9A96E]" />
                    <Star className="w-3 h-3 fill-[#C9A96E] text-[#C9A96E]" />
                  </div>
                  <h3 className="text-xl font-serif text-[#2C2C28] mb-4 line-clamp-2 h-14 hover:text-[#2D4A1E] cursor-pointer transition-colors">
                    <Link href={`/produit/${product.id}`}>{product.name}</Link>
                  </h3>
                  <div className="mt-auto pt-6 border-t border-[#2D4A1E]/5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-serif text-[#2D4A1E]">{product.price.toFixed(2)}€</span>
                      <button className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#C9A96E] transition-colors">Détails</button>
                    </div>
                    <button 
                      onClick={() => {
                        addItem({ productId: product.id, name: product.name, price: product.price, quantity: 1, imageUrl: product.imageUrl });
                      }}
                      className="w-full py-4 bg-[#2D4A1E] text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-[#2D4A1E]/20 hover:bg-[#1A1A18] transition-all flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C28]">Pourquoi 500+ Clients Nous Font Confiance</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-[#F8F5EE] rounded-[2rem] hover:shadow-xl transition-all">
              <div className="text-3xl mb-4">⚡</div>
              <h4 className="font-bold text-[#2D4A1E] mb-2">Livraison Rapide</h4>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>Expédition sous 48h</li>
                <li>Emballage écologique</li>
                <li>Suivi de colis</li>
              </ul>
            </div>
            <div className="text-center p-8 bg-[#F8F5EE] rounded-[2rem] hover:shadow-xl transition-all">
              <div className="text-3xl mb-4">🔒</div>
              <h4 className="font-bold text-[#2D4A1E] mb-2">Paiement Sécurisé</h4>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>Stripe & PayPal</li>
                <li>Données chiffrées</li>
                <li>100% sécurisé</li>
              </ul>
            </div>
            <div className="text-center p-8 bg-[#F8F5EE] rounded-[2rem] hover:shadow-xl transition-all">
              <div className="text-3xl mb-4">💬</div>
              <h4 className="font-bold text-[#2D4A1E] mb-2">Conseils Personnalisés</h4>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>Chat support gratuit</li>
                <li>Recommandations adaptées</li>
                <li>Suivi de vos résultats</li>
              </ul>
            </div>
            <div className="text-center p-8 bg-[#F8F5EE] rounded-[2rem] hover:shadow-xl transition-all">
              <div className="text-3xl mb-4">📦</div>
              <h4 className="font-bold text-[#2D4A1E] mb-2">Livraison Offerte</h4>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>À partir de 50€</li>
                <li>France métropolitaine</li>
                <li>Zéro surprise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#F8F5EE]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C28]">Ce que disent nos clientes satisfaites</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Zara M.", period: "peau sensible", text: "Ma peau a complètement changé en 3 semaines ! Les cosmétiques naturels de Dany, c'est du sérieux. Aucun effet secondaire, que du naturel. Je ne reviendrai jamais aux produits chimiques." },
              { name: "Sophie L.", period: "peau mature", text: "15 ans de dermatologues, zéro résultats. 3 mois avec les produits de Daniella, ma peau est radicalement mieux. La consultation naturopathe a tout changé. Merci infiniment !" },
              { name: "Léa K.", period: "cheveux crépus", text: "La poudre de chébé est incroyable ! Elle m'a sauvé les cheveux. Et la consultation, c'est pas juste un produit, c'est un vrai coaching beauté naturel. Recommande à 100% !" }
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-md transition-all">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#C9A96E] text-[#C9A96E]" />)}
                </div>
                <p className="text-lg text-gray-600 font-light mb-8 italic">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-[#2D4A1E]">{t.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{t.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section - Emotional & Artistic */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group animate-reveal-up">
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/5]">
                <img 
                  src="/dany_founder.jpg" 
                  alt="Daniella Adabra, fondatrice Dany Natural Concept" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  onError={(e: any) => { e.target.src = 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800'; }}
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 border border-[#C9A96E]/30 rounded-full animate-float"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#2D4A1E]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="animate-reveal-up delay-200">
              <span className="section-tag mb-6">La Fondatrice</span>
              <h2 className="text-6xl md:text-8xl font-serif text-[#2C2C28] mb-8 leading-tight">
                La Fondatrice : <br /> <span className="italic">Daniella Adabra</span>
              </h2>
              
              <blockquote className="text-3xl font-serif text-[#2D4A1E] italic border-l-4 border-[#C9A96E] pl-10 mb-10 leading-snug">
                "Ma mission est simple : montrer que la vraie beauté vient de la santé intérieure, et que les cosmétiques naturels doivent nourrir autant le corps que l'esprit."
              </blockquote>
              
              <p className="text-lg text-gray-500 font-light mb-12 leading-relaxed max-w-xl">
                Naturopathe certifiée et créatrice passionnée, <Link href="/apropos" className="text-[#2D4A1E] font-medium">Daniella Adabra</Link> a dédié sa vie à réconcilier la beauté et la santé. Diplômée en Naturopathie Holistique en France, elle est experte en formulation cosmétique naturelle et passionnée par les ingrédients africains authentiques.
              </p>
              
              <div className="grid grid-cols-1 gap-6 mb-12">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#C9A96E]" />
                  <span className="text-sm font-bold uppercase tracking-widest text-[#2D4A1E]">Diplôme en Naturopathie Holistique (France)</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#C9A96E]" />
                  <span className="text-sm font-bold uppercase tracking-widest text-[#2D4A1E]">Experte en Formulation Cosmétique Naturelle</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#C9A96E]" />
                  <span className="text-sm font-bold uppercase tracking-widest text-[#2D4A1E]">Passionnée par les Ingrédients Africains Authentiques</span>
                </div>
              </div>

              <Link href="/apropos" className="btn-outline group">
                En savoir plus sur Daniella
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section - Sophisticated Glassmorphism */}
      <section className="py-16 md:py-32 bg-[#2D4A1E] relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 noise-bg"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-[150px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-3 text-white flex flex-col items-center text-center lg:items-start lg:text-left">
                <span className="section-tag text-white/60 mb-6">Naturopathie & Services</span>
                <h2 className="text-4xl md:text-7xl font-serif mb-10 leading-tight">
                  Consultation Naturopathe <br /> <span className="italic text-gradient-gold">Holistique</span> Personnalisée
                </h2>
                <p className="text-xl text-white/70 font-light mb-16 leading-relaxed">
                  Bénéficiez d'une expertise naturopathique sur-mesure pour rééquilibrer votre métabolisme, votre peau et votre esprit avec notre approche de naturopathie beauté.
                </p>

                <div className="space-y-8 w-full">
                  <div className="flex flex-col items-center sm:flex-row gap-6 group cursor-pointer">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-[#C9A96E]">
                      <Droplets className="w-7 h-7 text-[#C9A96E] group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif text-white group-hover:text-gold transition-colors">Diagnostic Capillaire</h4>
                      <p className="text-sm text-white/50">45 minutes — 60.00€</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center sm:flex-row gap-6 group cursor-pointer">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-[#C9A96E]">
                      <Sun className="w-7 h-7 text-[#C9A96E] group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif text-white group-hover:text-gold transition-colors">Diagnostic de Peau</h4>
                      <p className="text-sm text-white/50">45 minutes — 85.00€</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center sm:flex-row gap-6 group cursor-pointer">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-[#C9A96E]">
                      <Footprints className="w-7 h-7 text-[#C9A96E] group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif text-white group-hover:text-gold transition-colors">Bilan Naturopathique</h4>
                      <p className="text-sm text-white/50">1 heure — 50.00€</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 w-full">
                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl relative overflow-hidden group text-center lg:text-left">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A96E]/20 rounded-full blur-3xl transition-all duration-700 group-hover:bg-[#C9A96E]/40"></div>
                  
                  <h3 className="text-3xl font-serif text-white mb-6">Réserver votre séance</h3>
                  <p className="text-white/60 mb-10 text-sm font-light leading-relaxed">
                    Choisissez votre créneau préféré et commencez votre voyage vers un bien-être durable.
                  </p>
                  
                  <div className="space-y-4 mb-10">
                    <div className="flex justify-between py-3 border-b border-white/10">
                      <span className="text-xs text-white/40 uppercase tracking-widest">Lieu</span>
                      <span className="text-xs text-white font-bold uppercase tracking-widest">Valenciennes / Visio</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-white/10">
                      <span className="text-xs text-white/40 uppercase tracking-widest">Expert</span>
                      <span className="text-xs text-white font-bold uppercase tracking-widest">Daniella Adabra</span>
                    </div>
                  </div>

                  {/* Interactive Mini-Calendar */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4 px-2">
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest">Mai 2026</span>
                      <div className="flex gap-4">
                        <button className="text-white/40 hover:text-white transition-colors"><ChevronLeft className="w-3 h-3" /></button>
                        <button className="text-white/40 hover:text-white transition-colors"><ChevronRight className="w-3 h-3" /></button>
                      </div>
                    </div>
                    
                    {/* Days Grid */}
                    <div className="grid grid-cols-7 gap-2 mb-8">
                      {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(d => (
                        <span key={d} className="text-[8px] text-white/20 font-bold text-center mb-2">{d}</span>
                      ))}
                      {/* Empty cells for padding if needed, assuming month starts on Friday */}
                      {[...Array(4)].map((_, i) => <div key={`empty-${i}`} />)}
                      {days.map(day => (
                        <button
                          key={day}
                          onClick={() => setSelectedDate(day)}
                          className={`aspect-square rounded-full flex items-center justify-center text-[10px] transition-all ${
                            selectedDate === day 
                              ? 'bg-[#C9A96E] text-white shadow-lg shadow-[#C9A96E]/20' 
                              : 'text-white/60 hover:bg-white/10'
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>

                    {/* Time Slots (Conditional) */}
                    {selectedDate && (
                      <div className="animate-reveal-up">
                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-4 text-center">Heures disponibles</span>
                        <div className="flex flex-wrap justify-center gap-3">
                          {times.map(time => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`px-4 py-2 rounded-lg text-[10px] font-bold transition-all border ${
                                selectedTime === time
                                  ? 'bg-white text-[#2D4A1E] border-white'
                                  : 'border-white/10 text-white/60 hover:border-white/30'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <button 
                    disabled={!selectedDate || !selectedTime}
                    className={`w-full py-5 text-sm rounded-full font-bold uppercase tracking-widest transition-all duration-500 shadow-xl ${
                      selectedDate && selectedTime
                        ? 'bg-[#C9A96E] text-white shadow-[#C9A96E]/20 hover:scale-[1.02]'
                        : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'
                    }`}
                  >
                    {selectedDate && selectedTime ? `Réserver pour le ${selectedDate} Mai à ${selectedTime}` : 'Choisir un créneau'}
                  </button>
                  
                  <p className="mt-8 text-center text-[10px] text-white/30 uppercase tracking-[0.2em]">
                    Paiement sécurisé par Stripe ou PayPal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SEO Section */}
      <section className="py-24 bg-white border-t border-[#2D4A1E]/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="section-tag mb-4">Questions Fréquentes</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C28]">Tout Savoir sur Nos Cosmétiques Naturels</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Qu'est-ce qui différencie les cosmétiques naturels Dany Natural des autres marques ?",
                a: "Nos cosmétiques naturels sont formulés à la main par Daniella Adabra, naturopathe certifiée avec 15 ans d'expérience. Chaque produit utilise des ingrédients africains authentiques (poudre chébé, karité, argan) sans aucun produit chimique de synthèse, parabène ou silicone."
              },
              {
                q: "Comment fonctionne une consultation naturopathe avec Daniella ?",
                a: "La consultation naturopathe commence par un diagnostic complet (capillaire ou peau) de 45 à 90 minutes. Vous recevez ensuite un rapport détaillé avec une routine personnalisée et des recommandations de produits adaptées à votre profil unique."
              },
              {
                q: "Les cosmétiques naturels conviennent-ils à tous les types de cheveux et de peau ?",
                a: "Oui ! Notre collection couvre tous les types : cheveux crépus, naturels, colorés ou traités, et peaux sensibles, grasses, sèches ou matures. Chaque produit est formulé pour s'adapter à votre nature unique."
              },
              {
                q: "Quelle est la livraison pour les cosmétiques naturels ?",
                a: "La livraison est gratuite dès 50€ d'achat. Toutes les commandes sont expédiées sous 48h avec suivi de colis. Emballage écologique respectueux de l'environnement."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-[#F8F5EE] rounded-[2rem] p-8">
                <h3 className="text-lg font-serif text-[#2C2C28] mb-3">{faq.q}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Internal Links SEO */}
          <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4">
            <Link href="/collection" className="text-sm text-gray-400 hover:text-[#2D4A1E] transition-colors uppercase tracking-widest font-bold">Cosmétiques Naturels</Link>
            <Link href="/consultations" className="text-sm text-gray-400 hover:text-[#2D4A1E] transition-colors uppercase tracking-widest font-bold">Consultation Naturopathe</Link>
            <Link href="/blog" className="text-sm text-gray-400 hover:text-[#2D4A1E] transition-colors uppercase tracking-widest font-bold">Blog Beauté Africaine</Link>
            <Link href="/a-propos" className="text-sm text-gray-400 hover:text-[#2D4A1E] transition-colors uppercase tracking-widest font-bold">Daniella Adabra</Link>
            <Link href="/produit/poudre-chebe" className="text-sm text-gray-400 hover:text-[#2D4A1E] transition-colors uppercase tracking-widest font-bold">Poudre Chébé</Link>
          </div>
        </div>
      </section>

      {/* Newsletter - Minimal & Elegant */}
      <section className="py-32 bg-[#F8F5EE]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-[4rem] p-12 md:p-24 shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-[-100px] left-[-100px] w-64 h-64 bg-[#2D4A1E]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-64 h-64 bg-[#C9A96E]/10 rounded-full blur-3xl"></div>
            
            <span className="section-tag mb-8">La Communauté</span>
            <h2 className="text-5xl md:text-6xl font-serif text-[#2C2C28] mb-8">Rejoignez l'univers DNC</h2>
            <p className="text-lg text-gray-500 font-light mb-12 max-w-xl mx-auto leading-relaxed">
              Recevez nos conseils de naturopathie exclusifs, nos rituels de saison et bénéficiez de -10% sur votre première commande.
            </p>
            
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="flex-1 bg-[#F8F5EE] border-none rounded-full px-8 py-5 focus:ring-2 focus:ring-[#2D4A1E] transition-all outline-none text-sm"
              />
              <button type="submit" className="btn-primary px-10">
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
