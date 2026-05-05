import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useCart } from '../hooks/useCart';
import { ArrowRight, MapPin, Package, CreditCard, CheckCircle, Lock, ChevronLeft, Truck, Store } from 'lucide-react';

export default function Checkout() {
  const { items } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', city: '', postal: '', pickupCity: 'Valenciennes' });

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const shipping = deliveryMethod === 'pickup' ? 0 : subtotal >= 80 ? 0 : 10;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-[#F8F5EE] pt-44 pb-32">
      <Head>
        <title>Finaliser ma commande | Dany Natural Concept</title>
      </Head>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Checkout Steps & Form */}
          <div className="lg:w-2/3">
            <div className="mb-16">
              <Link href="/panier" className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#3fad28] transition-all mb-8">
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour au panier
              </Link>
              <h1 className="text-5xl font-serif text-[#1a1a1a] mb-4">Finaliser la <span className="italic text-gradient">Commande</span></h1>
              <p className="text-sm font-light text-gray-400">Renseignez vos informations pour recevoir vos soins d'exception.</p>
            </div>

            <div className="space-y-12">
              {/* Delivery Choice */}
              <section className="bg-white rounded-[3.5rem] p-12 border border-[#3fad28]/5 shadow-xl shadow-black/5 animate-reveal-up">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-10 bg-[#e68d15]/10 rounded-full flex items-center justify-center text-[#e68d15]">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-serif text-[#1a1a1a]">Mode de livraison</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <button
                    onClick={() => setDeliveryMethod('delivery')}
                    className={`group p-8 rounded-[2.5rem] border-2 text-left transition-all duration-500 ${deliveryMethod === 'delivery' ? 'border-[#3fad28] bg-[#3fad28] text-white shadow-2xl' : 'border-[#3fad28]/5 bg-[#F8F5EE] hover:border-[#3fad28]/20'}`}
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors ${deliveryMethod === 'delivery' ? 'bg-white/10 text-white' : 'bg-white text-[#e68d15]'}`}>
                      <Truck className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Expédition</h4>
                    <p className={`text-[10px] uppercase tracking-widest mb-4 opacity-60 ${deliveryMethod === 'delivery' ? 'text-white' : 'text-gray-400'}`}>À votre domicile via Colissimo</p>
                    <p className={`text-xl font-serif ${deliveryMethod === 'delivery' ? 'text-[#e68d15]' : 'text-[#3fad28]'}`}>{subtotal >= 80 ? 'Offerte' : '10,00€'}</p>
                  </button>

                  <button
                    onClick={() => setDeliveryMethod('pickup')}
                    className={`group p-8 rounded-[2.5rem] border-2 text-left transition-all duration-500 ${deliveryMethod === 'pickup' ? 'border-[#3fad28] bg-[#3fad28] text-white shadow-2xl' : 'border-[#3fad28]/5 bg-[#F8F5EE] hover:border-[#3fad28]/20'}`}
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors ${deliveryMethod === 'pickup' ? 'bg-white/10 text-white' : 'bg-white text-[#e68d15]'}`}>
                      <Store className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Retrait</h4>
                    <p className={`text-[10px] uppercase tracking-widest mb-4 opacity-60 ${deliveryMethod === 'pickup' ? 'text-white' : 'text-gray-400'}`}>En main propre (gratuit)</p>
                    <p className={`text-xl font-serif ${deliveryMethod === 'pickup' ? 'text-[#e68d15]' : 'text-[#3fad28]'}`}>Gratuit</p>
                  </button>
                </div>

                {deliveryMethod === 'pickup' && (
                  <div className="mt-8 pt-8 border-t border-[#3fad28]/5 animate-reveal-up">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-300 mb-4 block">Lieu de rendez-vous</label>
                    <select value={form.pickupCity} onChange={e => setForm({ ...form, pickupCity: e.target.value })} className="w-full px-8 py-5 bg-[#F8F5EE] border-none rounded-full text-sm font-light focus:ring-2 focus:ring-[#3fad28]">
                      <option>Valenciennes (Cabinet)</option>
                      <option>Paris (Point de retrait)</option>
                    </select>
                  </div>
                )}
              </section>

              {/* Personal Details */}
              <section className="bg-white rounded-[3.5rem] p-12 border border-[#3fad28]/5 shadow-xl shadow-black/5 animate-reveal-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-10 bg-[#e68d15]/10 rounded-full flex items-center justify-center text-[#e68d15]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-serif text-[#1a1a1a]">Vos Coordonnées</h2>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-3 block">Nom Complet</label>
                      <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Ex: Marie Dupont" className="w-full px-8 py-5 bg-[#F8F5EE] border-none rounded-full text-sm font-light focus:ring-2 focus:ring-[#3fad28]" />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-3 block">Téléphone</label>
                      <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+33 6 00 00 00 00" className="w-full px-8 py-5 bg-[#F8F5EE] border-none rounded-full text-sm font-light focus:ring-2 focus:ring-[#3fad28]" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-3 block">Adresse Email</label>
                    <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="votre@email.com" className="w-full px-8 py-5 bg-[#F8F5EE] border-none rounded-full text-sm font-light focus:ring-2 focus:ring-[#3fad28]" />
                  </div>
                  
                  {deliveryMethod === 'delivery' && (
                    <div className="space-y-8 pt-4 animate-reveal-up">
                      <div>
                        <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-3 block">Adresse de livraison</label>
                        <input value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} placeholder="Numéro et nom de rue" className="w-full px-8 py-5 bg-[#F8F5EE] border-none rounded-full text-sm font-light focus:ring-2 focus:ring-[#3fad28]" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-3 block">Code Postal</label>
                          <input value={form.postal} onChange={e => setForm({ ...form, postal: e.target.value })} placeholder="75001" className="w-full px-8 py-5 bg-[#F8F5EE] border-none rounded-full text-sm font-light focus:ring-2 focus:ring-[#3fad28]" />
                        </div>
                        <div>
                          <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-3 block">Ville</label>
                          <input value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} placeholder="Paris" className="w-full px-8 py-5 bg-[#F8F5EE] border-none rounded-full text-sm font-light focus:ring-2 focus:ring-[#3fad28]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              {/* Payment Info */}
              <section className="bg-white rounded-[3.5rem] p-12 border border-[#3fad28]/5 shadow-xl shadow-black/5 animate-reveal-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-10 bg-[#e68d15]/10 rounded-full flex items-center justify-center text-[#e68d15]">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-serif text-[#1a1a1a]">Paiement Sécurisé</h2>
                </div>

                <div className="border-2 border-dashed border-[#3fad28]/10 rounded-[2.5rem] p-12 text-center bg-[#F8F5EE]/50">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Lock className="w-6 h-6 text-gray-300" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Interface de Paiement Sécurisée</p>
                  <p className="text-xs font-light text-gray-300 italic">Phase d'intégration Stripe en cours de finalisation...</p>
                </div>

                <button
                  onClick={() => alert('Phase d\'intégration Stripe : Le paiement sera disponible très bientôt !')}
                  className="w-full flex items-center justify-center gap-4 mt-10 bg-[#3fad28] text-white py-6 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#000000] transition-all shadow-2xl shadow-[#3fad28]/20"
                >
                  <Lock className="w-4 h-4" /> Confirmer et Payer {total.toFixed(2)}€
                </button>
              </section>
            </div>
          </div>

          {/* Right Sidebar - Order Recap */}
          <div className="lg:w-1/3">
            <div className="sticky top-44">
              <div className="bg-white rounded-[3.5rem] p-10 border border-[#3fad28]/5 shadow-2xl shadow-black/5">
                <h3 className="text-2xl font-serif text-[#1a1a1a] mb-10 pb-6 border-b border-[#3fad28]/5">Votre Commande</h3>
                
                <div className="space-y-8 mb-10">
                  {items.map(item => (
                    <div key={item.productId} className="flex items-center gap-6">
                      <div className="relative shrink-0">
                        <div className="w-16 h-16 bg-[#F8F5EE] rounded-2xl overflow-hidden shadow-sm">
                          <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#3fad28] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-[#1a1a1a] truncate mb-1 uppercase tracking-widest">{item.name}</p>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">{item.price.toFixed(2)}€ / unité</p>
                      </div>
                      <span className="text-sm font-serif text-[#3fad28]">{(item.price * item.quantity).toFixed(2)}€</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 pt-10 border-t border-[#3fad28]/5">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-300">
                    <span>Sous-total</span>
                    <span className="text-sm font-serif text-[#1a1a1a]">{subtotal.toFixed(2)}€</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-[#e68d15]">
                    <span>Expédition</span>
                    <span className="text-sm font-serif">{shipping === 0 ? 'Offerte' : `${shipping.toFixed(2)}€`}</span>
                  </div>
                  <div className="h-px bg-[#3fad28]/5 my-4"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3fad28]">Total TTC</span>
                    <span className="text-4xl font-serif text-[#3fad28]">{total.toFixed(2)}€</span>
                  </div>
                </div>

                <div className="mt-12 flex items-center justify-center gap-3 text-[8px] font-bold uppercase tracking-[0.3em] text-gray-300">
                  <CheckCircle className="w-3 h-3 text-[#7ecb6e]" /> Satisfait ou Remboursé sous 14 jours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
