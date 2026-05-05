import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MOCK_PRODUCTS } from '../lib/mockData';
import { useCart } from '../hooks/useCart';
import { ArrowRight, ChevronLeft, ChevronRight, Leaf, Star, ShoppingCart, Wind, Apple, Droplets, Sun, Footprints, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const { addItem } = useCart();
  // Date logic for the premium calendar
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 4)); // May 2026
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();
  
  const daysInMonth = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
  const firstDay = (getFirstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth()) + 6) % 7; // Adjust for Monday start
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const times = {
    matin: ['09:00', '10:30', '11:30'],
    apresMidi: ['14:00', '15:30', '17:00', '18:30']
  };
  const featuredProducts = MOCK_PRODUCTS.slice(0, 4);

  return (
    <main className="min-h-screen bg-[#F8F5EE] overflow-x-hidden">
      <Head>
        <title>Cosmétiques naturels africains beauté naturelle et bien-être retrouvés | Dany Natural Concept</title>
        <meta name="description" content="Cosmétiques naturels avec ingrédients africains authentiques. Consultations naturopathe personnalisées. Beauté holistique depuis Valenciennes." />
        <meta name="keywords" content="cosmétiques naturels, naturopathe, beauté originelle, ingrédients africains" />
        {/* Open Graph pour partage réseaux sociaux */}
        <meta property="og:title" content="Cosmétiques naturels africains beauté naturelle et bien-être retrouvés | Dany Natural Concept" />
        <meta property="og:description" content="Cosmétiques naturels avec ingrédients africains authentiques. Consultations naturopathe personnalisées. Beauté holistique depuis Valenciennes." />
        <meta property="og:image" content="/hero-concept.jpg" />
        <meta property="og:url" content="https://daniella-three.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://daniella-three.vercel.app/" />
      </Head>

      {/* Hero Section - Elevated Design Experience */}
      <section className="relative h-[100dvh] md:min-h-screen flex items-center overflow-hidden bg-[#1A1A18]">
        {/* Advanced Background Layers */}
        <div className="absolute inset-0 z-0">
          {/* Main Background Image */}
          <img 
            src="/hero-concept.jpg" 
            alt="Dany Natural Concept Atmosphere" 
            className="w-full h-full object-cover scale-105"
          />
          
          {/* Overlays for legibility */}
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#2D4A1E]/40 via-transparent to-[#1A1A18]/60 z-10"></div>
          
          {/* Gradient Mesh & Grain */}
          <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none z-20">
            <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-[#C9A96E]/20 rounded-full blur-[150px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#F8F5EE]/10 rounded-full blur-[120px]"></div>
          </div>
          
          <div className="absolute inset-0 opacity-[0.03] noise-bg pointer-events-none z-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A18]/80 via-[#1A1A18]/20 to-transparent z-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-30 pt-20 md:pt-48 pb-6">
          <div className="max-w-5xl mx-auto text-center flex flex-col">
            
            <h1 className="text-3xl md:text-7xl font-serif text-white leading-tight md:leading-[1.2] mb-4 md:mb-10 tracking-tight order-2 md:order-1" style={{ animationFillMode: 'forwards' }}>
              Cosmétiques naturels africains <br />
              <span className="italic-serif text-gradient-gold">beauté naturelle</span> <br />
              <span className="relative inline-block mt-2 md:mt-4">
                et bien-être retrouvés
                <div className="absolute -bottom-2 md:bottom-[-1rem] left-1/4 right-1/4 h-0.5 md:h-1 bg-gradient-gold opacity-60"></div>
              </span>
            </h1>
            
            <p className="text-white/80 text-base md:text-2xl font-light mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed order-3 md:order-2">
              Expertise naturopathe en cosmétiques naturels. Ingrédients africains authentiques. Formules holistiques, résultats visibles.
            </p>

            <p className="text-[#E8C98A] text-[10px] md:text-base font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 md:mt-16 md:mb-12 drop-shadow-md animate-reveal-up order-1 md:order-3" style={{ animationFillMode: 'forwards' }}>
              Bienvenue chez Dany Natural Concept | Daniella Adabra, naturopathe
            </p>
            
            <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-center items-center mb-4 order-4">
              <Link href="/boutique" className="group relative px-8 md:px-10 py-3.5 md:py-6 bg-white text-[#1A1A18] rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs overflow-hidden transition-all shadow-2xl w-full md:w-auto min-w-[260px]">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  DÉCOUVRIR NOS PRODUITS <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </span>
              </Link>
              
              <Link href="/reservations" className="group px-8 md:px-10 py-3.5 md:py-6 border border-white/20 rounded-full flex items-center justify-center gap-3 text-white hover:bg-white hover:text-[#1A1A18] transition-all text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-sm w-full md:w-auto">
                <Droplets className="w-4 h-4 md:w-5 md:h-5 text-[#C9A96E]" />
                <span>RÉSERVER MA CONSULTATION</span>
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom Trust Badges */}
        <div className="absolute bottom-10 left-0 right-0 z-30 px-6">
          <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-12 gap-y-3 text-[9px] md:text-xs text-white/60 font-bold animate-reveal-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <span className="flex items-center gap-2 tracking-[0.15em] md:tracking-[0.2em] uppercase">
              <CheckCircle2 className="w-3 h-3 text-[#C9A96E]" /> 
              Livraison gratuite dès 50€
            </span>
            <span className="flex items-center gap-2 tracking-[0.15em] md:tracking-[0.2em] uppercase">
              <CheckCircle2 className="w-3 h-3 text-[#C9A96E]" /> 
              Satisfaction 30 jours
            </span>
            <span className="flex items-center gap-2 tracking-[0.15em] md:tracking-[0.2em] uppercase">
              <CheckCircle2 className="w-3 h-3 text-[#C9A96E]" /> 
              Support gratuit
            </span>
          </div>
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

      <section id="reservations" className="py-24 md:py-40 bg-[#1A1A18] relative overflow-hidden">
        {/* Artistic Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#2D4A1E]/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#C9A96E]/10 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 opacity-[0.02] noise-bg"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Info & Selection */}
              <div className="lg:col-span-5 text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                  <Sparkles className="w-4 h-4 text-[#C9A96E]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">Expérience Exclusive</span>
                </div>
                
                <h2 className="text-5xl md:text-8xl font-serif mb-10 leading-[0.9] tracking-tighter">
                  Prenez <br />
                  <span className="italic-serif text-gradient-gold">Rendez-vous</span>
                </h2>
                
                <p className="text-xl text-white/60 font-light mb-16 leading-relaxed max-w-md">
                  Un moment suspendu pour harmoniser votre beauté et votre santé intérieure avec l'expertise de Daniella.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: Droplets, title: "Diagnostic Capillaire", desc: "Analyse profonde & plan de soin", price: "60€", duration: "45 min" },
                    { icon: Sun, title: "Diagnostic de Peau", desc: "Expertise holistique visage", price: "85€", duration: "45 min" },
                    { icon: Footprints, title: "Bilan Naturopathique", desc: "Harmonisation globale", price: "50€", duration: "60 min" }
                  ].map((service, i) => (
                    <div key={i} className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#C9A96E]/30 transition-all duration-500 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-2xl bg-[#C9A96E]/10 flex items-center justify-center group-hover:bg-[#C9A96E] transition-colors duration-500">
                            <service.icon className="w-5 h-5 text-[#C9A96E] group-hover:text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-serif text-white group-hover:text-[#C9A96E] transition-colors">{service.title}</h4>
                            <p className="text-xs text-white/40 uppercase tracking-widest">{service.desc}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-serif text-[#C9A96E]">{service.price}</div>
                          <div className="text-[10px] text-white/30 uppercase">{service.duration}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Premium Calendar */}
              <div className="lg:col-span-7">
                <div className="bg-[#242422] rounded-[2.5rem] md:rounded-[3.5rem] p-4 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden">
                  {/* Glassmorphic Header */}
                  <div className="flex flex-col sm:flex-row items-center justify-between mb-8 md:mb-10 gap-6 px-2">
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl md:text-2xl font-serif text-white">Disponibilités</h3>
                      <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-1">Sélectionnez votre créneau</p>
                    </div>
                    <div className="flex items-center gap-3 md:gap-6 bg-white/5 rounded-full px-4 md:px-6 py-2 md:py-3 border border-white/10">
                      <button className="text-white/40 hover:text-white transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                      <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest min-w-[70px] md:min-w-[100px] text-center">Mai 2026</span>
                      <button className="text-white/40 hover:text-white transition-colors"><ChevronRight className="w-4 h-4" /></button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    {/* Calendar Grid */}
                    <div className="bg-white/[0.02] rounded-[2rem] md:rounded-[2.5rem] p-3 md:p-6 border border-white/5">
                      <div className="grid grid-cols-7 gap-1 mb-6">
                        {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(d => (
                          <span key={d} className="text-[9px] text-white/20 font-bold text-center py-2">{d}</span>
                        ))}
                        {[...Array(firstDay)].map((_, i) => <div key={`empty-${i}`} />)}
                        {daysArray.map(day => (
                          <button
                            key={day}
                            onClick={() => {
                              setSelectedDate(day);
                              setSelectedTime(null);
                            }}
                            className={`aspect-square rounded-xl md:rounded-2xl flex flex-col items-center justify-center transition-all duration-300 relative group ${
                              selectedDate === day 
                                ? 'bg-[#C9A96E] text-white shadow-xl shadow-[#C9A96E]/20' 
                                : 'text-white/60 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <span className="text-[10px] md:text-xs font-medium">{day}</span>
                            {day % 7 === 0 && selectedDate !== day && (
                              <span className="absolute bottom-1 w-0.5 h-0.5 md:w-1 md:h-1 bg-[#C9A96E] rounded-full group-hover:bg-white"></span>
                            )}
                          </button>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#C9A96E]"></div>
                          <span className="text-[9px] text-white/40 uppercase tracking-widest">Disponible</span>
                        </div>
                        <span className="text-[9px] text-white/40 uppercase tracking-widest italic">Fuseau : Europe/Paris</span>
                      </div>
                    </div>

                    {/* Time Selection */}
                    <div className="flex flex-col">
                      {!selectedDate ? (
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-white/[0.02] rounded-[2.5rem] border border-dashed border-white/10">
                          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                            <Sun className="w-8 h-8 text-white/10" />
                          </div>
                          <p className="text-sm text-white/40 font-light">Veuillez d'abord sélectionner <br /> une date sur le calendrier</p>
                        </div>
                      ) : (
                        <div className="space-y-8 animate-reveal-up">
                          <div>
                            <span className="text-[10px] font-bold text-[#C9A96E] uppercase tracking-widest block mb-5">Matinée</span>
                            <div className="grid grid-cols-2 gap-3">
                              {times.matin.map(time => (
                                <button
                                  key={time}
                                  onClick={() => setSelectedTime(time)}
                                  className={`py-4 rounded-2xl text-xs font-bold transition-all border ${
                                    selectedTime === time
                                      ? 'bg-white text-[#1A1A18] border-white shadow-xl'
                                      : 'bg-white/5 border-white/5 text-white/60 hover:border-white/20'
                                  }`}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <span className="text-[10px] font-bold text-[#C9A96E] uppercase tracking-widest block mb-5">Après-midi</span>
                            <div className="grid grid-cols-2 gap-3">
                              {times.apresMidi.map(time => (
                                <button
                                  key={time}
                                  onClick={() => setSelectedTime(time)}
                                  className={`py-4 rounded-2xl text-xs font-bold transition-all border ${
                                    selectedTime === time
                                      ? 'bg-white text-[#1A1A18] border-white shadow-xl'
                                      : 'bg-white/5 border-white/5 text-white/60 hover:border-white/20'
                                  }`}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="mt-auto pt-10">
                        <button 
                          disabled={!selectedDate || !selectedTime}
                          className={`w-full py-6 rounded-2xl font-bold uppercase tracking-widest transition-all duration-700 flex items-center justify-center gap-3 group relative overflow-hidden ${
                            selectedDate && selectedTime
                              ? 'bg-[#C9A96E] text-white shadow-2xl shadow-[#C9A96E]/40 hover:translate-y-[-2px]'
                              : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'
                          }`}
                        >
                          <span className="relative z-10">
                            {selectedDate && selectedTime ? 'Confirmer la Réservation' : 'Sélectionner un créneau'}
                          </span>
                          {selectedDate && selectedTime && <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />}
                          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        </button>
                      </div>
                    </div>
                  </div>
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
