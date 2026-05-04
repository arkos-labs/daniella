import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MOCK_PRODUCTS } from '../lib/mockData';
import { useCart } from '../hooks/useCart';
import { ArrowRight, Leaf, Star, ShoppingCart, Wind, Apple, Droplets, Sun, Footprints, Sparkles, CheckCircle2 } from 'lucide-react';

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
        <title>Dany Natural Concept | L'Art de la Beauté Originelle</title>
        <meta name="description" content="Découvrez Dany Natural Concept par Daniella Adabra. Soins capillaires et corporels 100% naturels, bios et artisanaux. Prenez rendez-vous pour une consultation personnalisée." />
      </Head>

      {/* Hero Section - Immersive Full Background */}
      <section className="relative min-h-[80vh] flex items-center pt-24 overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-concept.jpg" 
            alt="Dany Natural Concept Background" 
            className="w-full h-full object-cover"
          />
          {/* Elegant Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="animate-reveal-up">
              
              <h1 className="text-7xl md:text-9xl font-serif text-[#2C2C28] leading-[0.95] mb-8">
                Révélez votre <br />
                <span className="italic-serif text-gradient">beauté</span> <br />
                <span className="text-[#2D4A1E]">originelle</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[#2C2C28]/80 font-light max-w-2xl mb-12 leading-relaxed mx-auto">
                Une fusion rare entre <span className="text-[#2D4A1E] font-medium italic">naturopathie holistique</span> et cosmétique brute pour magnifier votre nature profonde.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/boutique" className="btn-primary group shadow-2xl shadow-[#2D4A1E]/20">
                  Explorer la collection
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/reservations" className="btn-outline group backdrop-blur-md">
                  Réserver un soin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Branding - Service Benefits */}
      <div className="py-8 bg-white border-y border-[#2D4A1E]/5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-12">
              <span className="text-2xl font-serif text-[#2D4A1E] uppercase tracking-widest">Livraison Offerte dès 50€</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></span>
              <span className="text-2xl font-serif text-[#2D4A1E] uppercase tracking-widest">Paiement 100% Sécurisé</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></span>
              <span className="text-2xl font-serif text-[#2D4A1E] uppercase tracking-widest">Conseils Personnalisés</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></span>
              <span className="text-2xl font-serif text-[#2D4A1E] uppercase tracking-widest">Expédition sous 48h</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="group text-center">
              <div className="w-20 h-20 bg-[#F8F5EE] rounded-3xl mx-auto flex items-center justify-center mb-8 group-hover:bg-[#2D4A1E] group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                <Leaf className="w-8 h-8 text-[#2D4A1E] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Pureté Absolue</h3>
              <p className="text-gray-500 font-light leading-relaxed">Des ingrédients bruts et non raffinés, puisant leur force dans la terre africaine.</p>
            </div>
            
            <div className="group text-center">
              <div className="w-20 h-20 bg-[#F8F5EE] rounded-3xl mx-auto flex items-center justify-center mb-8 group-hover:bg-[#2D4A1E] group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                <Wind className="w-8 h-8 text-[#2D4A1E] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Savoir-faire Rare</h3>
              <p className="text-gray-500 font-light leading-relaxed">Chaque formulation est une pièce d'artisanat unique, créée à la main dans notre atelier.</p>
            </div>
            
            <div className="group text-center">
              <div className="w-20 h-20 bg-[#F8F5EE] rounded-3xl mx-auto flex items-center justify-center mb-8 group-hover:bg-[#2D4A1E] group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                <Sparkles className="w-8 h-8 text-[#2D4A1E] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Éclat Naturel</h3>
              <p className="text-gray-500 font-light leading-relaxed">Une approche holistique qui réconcilie durablement votre santé et votre esthétique.</p>
            </div>
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

      {/* Founder Section - Emotional & Artistic */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group animate-reveal-up">
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl aspect-[4/5]">
                <img 
                  src="/dany_founder.jpg" 
                  alt="Daniella Adabra" 
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
                Daniella <br /> <span className="italic ml-12">Adabra</span>
              </h2>
              
              <blockquote className="text-3xl font-serif text-[#2D4A1E] italic border-l-4 border-[#C9A96E] pl-10 mb-10 leading-snug">
                "Ma mission est de réconcilier la cosmétique avec la santé. Chaque formulation est une promesse de pureté."
              </blockquote>
              
              <p className="text-lg text-gray-500 font-light mb-12 leading-relaxed max-w-xl">
                Naturopathe passionnée, Daniella a développé ses soins en s'appuyant sur les richesses de la terre africaine et une approche holistique du bien-être. Sa vision transcende le simple soin pour offrir une véritable expérience de reconnexion à soi.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#C9A96E]" />
                  <span className="text-sm font-bold uppercase tracking-widest text-[#2D4A1E]">Expertise Bio</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#C9A96E]" />
                  <span className="text-sm font-bold uppercase tracking-widest text-[#2D4A1E]">Formulation Artisanale</span>
                </div>
              </div>

              <Link href="/apropos" className="btn-outline group">
                Découvrir mon histoire
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
                <span className="section-tag text-white/60 mb-6">Consultations</span>
                <h2 className="text-4xl md:text-7xl font-serif mb-10 leading-tight">
                  Un accompagnement <br /> <span className="italic text-gradient-gold">holistique</span>
                </h2>
                <p className="text-xl text-white/70 font-light mb-16 leading-relaxed">
                  Bénéficiez d'une expertise naturopathique sur-mesure pour rééquilibrer votre métabolisme, votre peau et votre esprit.
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
                        <button className="text-white/40 hover:text-white transition-colors"><ArrowLeft className="w-3 h-3" /></button>
                        <button className="text-white/40 hover:text-white transition-colors"><ArrowRight className="w-3 h-3" /></button>
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
