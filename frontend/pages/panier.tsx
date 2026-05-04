import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MOCK_PRODUCTS } from '../lib/mockData';
import { useCart } from '../hooks/useCart';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Gift, Tag } from 'lucide-react';

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
      <div className="min-h-screen bg-[#FAFAF8] pt-28 pb-20">
        <Head><title>Panier | Dany Natural Concept</title></Head>
        <div className="container mx-auto px-4 max-w-2xl text-center py-24">
          <div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShoppingBag className="w-12 h-12 text-gray-300" />
          </div>
          <h1 className="text-3xl font-serif mb-4 text-[#2C2C2C]">Votre panier est vide</h1>
          <p className="text-gray-400 mb-10 text-lg">Découvrez nos créations artisanales naturelles.</p>
          <Link href="/boutique" className="inline-flex items-center gap-3 bg-[#4A5C3A] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#3a4a2d] transition-all hover:shadow-lg">
            Découvrir la boutique <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] pt-28 pb-20">
      <Head><title>Mon Panier ({items.length}) | Dany Natural Concept</title></Head>

      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-serif text-[#2C2C2C] mb-2">Mon Panier</h1>
        <p className="text-gray-400 mb-12">{items.length} article{items.length > 1 ? 's' : ''}</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div key={item.productId} className="group flex gap-5 bg-white p-5 rounded-2xl border border-gray-100 hover:shadow-sm transition-all items-center">
                <Link href={`/produit/${item.productId}`}>
                  <div className="w-24 h-24 bg-[#F5F3EE] rounded-xl overflow-hidden flex-shrink-0 cursor-pointer">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" onError={(e: any) => { e.target.src = 'https://via.placeholder.com/100x100/F5F3EE/4A5C3A?text=DNC'; }} />
                  </div>
                </Link>
                <div className="flex-grow min-w-0">
                  <h3 className="font-bold text-[#2C2C2C] truncate text-sm">{item.name}</h3>
                  <p className="text-[#4A5C3A] font-bold text-lg mt-1">{item.price.toFixed(2)} €</p>
                </div>
                <div className="flex items-center gap-1 bg-[#FAFAF8] border border-gray-200 rounded-xl p-1">
                  <button onClick={() => item.quantity > 1 ? updateQuantity(item.productId, item.quantity - 1) : removeItem(item.productId)} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#4A5C3A] rounded-lg transition-colors">
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.productId, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#4A5C3A] rounded-lg transition-colors">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
                <div className="text-right min-w-[70px]">
                  <p className="font-bold text-[#2C2C2C]">{(item.price * item.quantity).toFixed(2)} €</p>
                </div>
                <button onClick={() => removeItem(item.productId)} className="text-gray-200 hover:text-red-400 transition-colors ml-2">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}

            {/* Promo code */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <label className="flex items-center gap-2 text-sm font-bold mb-3 text-gray-700">
                <Tag className="w-4 h-4" /> Code promo
              </label>
              <div className="flex gap-3">
                <input
                  value={promoCode}
                  onChange={e => setPromoCode(e.target.value)}
                  placeholder="Essayez DNC10"
                  disabled={promoApplied}
                  className="flex-1 px-4 py-3 bg-[#FAFAF8] border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#4A5C3A] disabled:opacity-50"
                />
                <button onClick={handlePromo} disabled={promoApplied} className="px-6 py-3 bg-[#4A5C3A] text-white rounded-xl font-bold text-sm hover:bg-[#3a4a2d] transition-colors disabled:opacity-50">
                  {promoApplied ? '✓ Appliqué' : 'Appliquer'}
                </button>
              </div>
              {promoApplied && <p className="text-green-600 text-xs mt-2 font-medium">🎉 -10% appliqué avec succès !</p>}
            </div>
          </div>

          {/* Summary */}
          <div className="h-fit sticky top-32 space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h3 className="font-bold text-xl mb-6 text-[#2C2C2C]">Résumé</h3>
              <div className="space-y-4 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Sous-total</span>
                  <span className="font-medium">{subtotal.toFixed(2)} €</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Réduction -10%</span>
                    <span>-{discount.toFixed(2)} €</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-400">Livraison</span>
                  {shipping === 0 ? (
                    <span className="text-green-600 font-medium">Gratuite 🎉</span>
                  ) : (
                    <span className="font-medium">{shipping.toFixed(2)} €</span>
                  )}
                </div>
                <div className="border-t pt-4 flex justify-between items-center">
                  <span className="font-bold text-lg">Total TTC</span>
                  <span className="font-bold text-2xl text-[#4A5C3A]">{total.toFixed(2)} €</span>
                </div>
              </div>
              <Link href="/checkout" className="w-full flex items-center justify-center gap-2 bg-[#4A5C3A] text-white py-4 rounded-xl font-bold hover:bg-[#3a4a2d] transition-all hover:shadow-lg active:scale-95">
                Valider la commande <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/boutique" className="block text-center mt-4 text-sm text-gray-400 hover:text-[#4A5C3A] transition-colors underline">
                Continuer mes achats
              </Link>
            </div>

            {shipping > 0 && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center gap-3">
                <Gift className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <p className="text-xs text-amber-700">
                  Ajoutez <strong>{(80 - subtotal).toFixed(2)} €</strong> pour bénéficier de la livraison gratuite !
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
