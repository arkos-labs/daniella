import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MOCK_PRODUCTS } from '../lib/mockData';
import { useCart } from '../hooks/useCart';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Gift, Tag, ChevronLeft } from 'lucide-react';

export default function Panier() {
  const { items, removeItem, updateQuantity } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal >= 80 ? 0 : 10;
  const total = subtotal - discount + shipping;

  const handlePromo = () => {
    if (promoCode.toUpperCase() === 'DNC10') {
      setPromoApplied(true);
    } else {
      alert('Code invalide. Essayez DNC10 pour -10% !');
    }
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#F8F5EE] pt-44 pb-32">
        <Head><title>Panier | Dany Natural Concept</title></Head>
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-black/5 animate-float">
            <ShoppingBag className="w-12 h-12 text-gray-200" />
          </div>
          <h1 className="text-5xl font-serif mb-6 text-[#2C2C28]">Votre panier <br /> est <span className="italic text-gradient">vide</span></h1>
          <p className="text-gray-400 mb-12 text-xl font-light leading-relaxed">Découvrez nos soins d'exception et commencez votre voyage vers le naturel.</p>
          <Link href="/boutique" className="btn-primary px-12 group">
            Découvrir la boutique <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F5EE] pt-44 pb-32">
      <Head><title>Mon Panier ({items.length}) | Dany Natural Concept</title></Head>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Cart Content */}
          <div className="lg:w-2/3">
            <div className="mb-12 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A96E] mb-2 block">Récapitulatif</span>
                <h1 className="text-5xl font-serif text-[#2C2C28]">Mon Panier</h1>
              </div>
              <Link href="/boutique" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#2D4A1E]/40 hover:text-[#2D4A1E] transition-colors">
                <ChevronLeft className="w-4 h-4" /> Continuer mes achats
              </Link>
            </div>

            <div className="space-y-6 mb-12">
              {items.map(item => (
                <div key={item.productId} className="group bg-white p-8 rounded-[3rem] border border-[#2D4A1E]/5 flex flex-col sm:flex-row items-center gap-10 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
                  <Link href={`/produit/${item.productId}`}>
                    <div className="w-32 h-32 bg-[#F8F5EE] rounded-[2rem] overflow-hidden flex-shrink-0 cursor-pointer">
                      <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e: any) => { e.target.src = 'https://via.placeholder.com/100x100/F8F5EE/2D4A1E?text=DNC'; }} />
                    </div>
                  </Link>
                  
                  <div className="flex-grow text-center sm:text-left">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-gray-300 mb-1 block">Soin Naturel</span>
                    <h3 className="text-xl font-serif text-[#2C2C28] mb-2">{item.name}</h3>
                    <p className="text-2xl font-serif text-[#2D4A1E]">{item.price.toFixed(2)}€</p>
                  </div>

                  <div className="flex items-center gap-2 bg-[#F8F5EE] rounded-full p-1.5 border border-[#2D4A1E]/5">
                    <button onClick={() => item.quantity > 1 ? updateQuantity(item.productId, item.quantity - 1) : removeItem(item.productId)} className="w-10 h-10 flex items-center justify-center text-[#2D4A1E] hover:bg-white rounded-full transition-all">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-bold text-sm">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.productId, item.quantity + 1)} className="w-10 h-10 flex items-center justify-center text-[#2D4A1E] hover:bg-white rounded-full transition-all">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-right min-w-[100px] hidden sm:block">
                    <p className="text-2xl font-serif text-[#2C2C28]">{(item.price * item.quantity).toFixed(2)}€</p>
                  </div>

                  <button onClick={() => removeItem(item.productId)} className="text-gray-200 hover:text-red-400 transition-colors p-2">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Promo code */}
            <div className="bg-white rounded-[3rem] border border-[#2D4A1E]/5 p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-4 text-[#C9A96E]">
                <Tag className="w-6 h-6" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Privilège</span>
              </div>
              <div className="flex-grow w-full relative">
                <input
                  value={promoCode}
                  onChange={e => setPromoCode(e.target.value)}
                  placeholder="Code de réduction (Ex: DNC10)"
                  disabled={promoApplied}
                  className="w-full px-8 py-5 bg-[#F8F5EE] border-none rounded-full text-sm font-light focus:ring-2 focus:ring-[#2D4A1E] disabled:opacity-50"
                />
                <button 
                  onClick={handlePromo} 
                  disabled={promoApplied || !promoCode} 
                  className="absolute right-2 top-2 bottom-2 px-8 bg-[#2D4A1E] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#1A1A18] transition-all disabled:opacity-30"
                >
                  {promoApplied ? 'Appliqué' : 'Appliquer'}
                </button>
              </div>
            </div>
            {promoApplied && <p className="text-green-600 text-xs mt-4 px-8 font-bold uppercase tracking-widest">🎉 Félicitations ! Votre remise de 10% a été appliquée.</p>}
          </div>

          {/* Checkout Summary */}
          <div className="lg:w-1/3">
            <div className="sticky top-44 space-y-8">
              <div className="bg-[#2D4A1E] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-[#2D4A1E]/30">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 noise-bg pointer-events-none"></div>
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-[60px]"></div>
                
                <h3 className="text-3xl font-serif mb-10 border-b border-white/10 pb-6">Résumé</h3>
                
                <div className="space-y-6 text-sm font-light mb-10">
                  <div className="flex justify-between text-white/60 uppercase tracking-widest text-[10px] font-bold">
                    <span>Sous-total</span>
                    <span className="text-white text-base font-serif">{subtotal.toFixed(2)}€</span>
                  </div>
                  
                  {promoApplied && (
                    <div className="flex justify-between text-[#C9A96E] uppercase tracking-widest text-[10px] font-bold">
                      <span>Remise Privilège</span>
                      <span className="text-base font-serif">-{discount.toFixed(2)}€</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-white/60 uppercase tracking-widest text-[10px] font-bold">
                    <span>Expédition</span>
                    {shipping === 0 ? (
                      <span className="text-[#C9A96E] text-base font-serif">Offerte</span>
                    ) : (
                      <span className="text-white text-base font-serif">{shipping.toFixed(2)}€</span>
                    )}
                  </div>
                  
                  <div className="h-px bg-white/10 my-4"></div>
                  
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Total TTC</span>
                    <span className="text-5xl font-serif text-[#C9A96E]">{total.toFixed(2)}€</span>
                  </div>
                </div>

                <Link href="/checkout" className="btn-gold w-full py-6 group">
                  Passer au paiement <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <p className="text-[9px] text-center text-white/30 uppercase tracking-[0.2em] mt-8 font-bold">Paiement 100% sécurisé</p>
              </div>

              {shipping > 0 && (
                <div className="bg-white rounded-[3rem] p-8 border border-[#2D4A1E]/5 flex items-center gap-6 shadow-xl shadow-black/5 animate-pulse">
                  <div className="w-12 h-12 bg-[#F8F5EE] rounded-2xl flex items-center justify-center text-[#C9A96E]">
                    <Gift className="w-6 h-6" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#2D4A1E]/60 leading-relaxed">
                    Plus que <span className="text-[#2C2C28] text-sm">{(80 - subtotal).toFixed(2)}€</span> <br /> 
                    <span className="text-[#C9A96E]">pour la livraison offerte</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
