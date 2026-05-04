import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useCart } from '../hooks/useCart';
import { ArrowRight, MapPin, Package, CreditCard, CheckCircle, Lock } from 'lucide-react';

export default function Checkout() {
  const { items } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', city: '', postal: '', pickupCity: 'Valenciennes' });

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const shipping = deliveryMethod === 'pickup' ? 0 : subtotal >= 80 ? 0 : 10;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#FAFAF8] pt-28 pb-20">
      <Head>
        <title>Finaliser ma commande | Dany Natural Concept</title>
        <meta name="description" content="Finalisez votre commande en toute sécurité." />
      </Head>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <Link href="/panier" className="text-gray-400 hover:text-[#4A5C3A] text-sm flex items-center gap-1">← Panier</Link>
          <span className="text-gray-200">/</span>
          <span className="font-bold text-[#4A5C3A] text-sm">Paiement</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2 space-y-8">

            {/* Delivery Method */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h2 className="font-bold text-xl mb-6 text-[#2C2C2C] flex items-center gap-3"><Package className="w-5 h-5 text-[#4A5C3A]" /> Mode de livraison</h2>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setDeliveryMethod('delivery')}
                  className={`p-5 border-2 rounded-2xl text-left transition-all ${deliveryMethod === 'delivery' ? 'border-[#4A5C3A] bg-[#4A5C3A]/5' : 'border-gray-100 hover:border-gray-200'}`}
                >
                  <div className="text-2xl mb-2">📦</div>
                  <h4 className="font-bold text-sm">Livraison à domicile</h4>
                  <p className="text-xs text-gray-400 mt-1">Colissimo • 3-5 jours</p>
                  <p className="text-xs font-bold mt-2 text-[#4A5C3A]">{subtotal >= 80 ? 'Gratuit 🎉' : '10 €'}</p>
                </button>
                <button
                  onClick={() => setDeliveryMethod('pickup')}
                  className={`p-5 border-2 rounded-2xl text-left transition-all ${deliveryMethod === 'pickup' ? 'border-[#4A5C3A] bg-[#4A5C3A]/5' : 'border-gray-100 hover:border-gray-200'}`}
                >
                  <div className="text-2xl mb-2">🤝</div>
                  <h4 className="font-bold text-sm">Remise en main propre</h4>
                  <p className="text-xs text-gray-400 mt-1">Valenciennes ou Paris</p>
                  <p className="text-xs font-bold mt-2 text-green-600">Gratuit</p>
                </button>
              </div>
              {deliveryMethod === 'pickup' && (
                <div className="mt-4">
                  <label className="block text-sm font-bold mb-2">Ville de retrait</label>
                  <select value={form.pickupCity} onChange={e => setForm({ ...form, pickupCity: e.target.value })} className="w-full p-3 border border-gray-200 rounded-xl text-sm bg-[#FAFAF8]">
                    <option>Valenciennes</option>
                    <option>Paris</option>
                  </select>
                </div>
              )}
            </div>

            {/* Personal Info */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h2 className="font-bold text-xl mb-6 text-[#2C2C2C] flex items-center gap-3"><MapPin className="w-5 h-5 text-[#4A5C3A]" /> Vos coordonnées</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-1.5 text-gray-500 uppercase tracking-wider">Nom complet</label>
                    <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Marie Dupont" className="w-full px-4 py-3 bg-[#FAFAF8] border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#4A5C3A] outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1.5 text-gray-500 uppercase tracking-wider">Téléphone</label>
                    <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+33 6 00 00 00 00" className="w-full px-4 py-3 bg-[#FAFAF8] border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#4A5C3A] outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1.5 text-gray-500 uppercase tracking-wider">Email</label>
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="votre@email.com" className="w-full px-4 py-3 bg-[#FAFAF8] border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#4A5C3A] outline-none" />
                </div>
                {deliveryMethod === 'delivery' && (
                  <>
                    <div>
                      <label className="block text-xs font-bold mb-1.5 text-gray-500 uppercase tracking-wider">Adresse</label>
                      <input value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} placeholder="12 rue de la Paix" className="w-full px-4 py-3 bg-[#FAFAF8] border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#4A5C3A] outline-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold mb-1.5 text-gray-500 uppercase tracking-wider">Code postal</label>
                        <input value={form.postal} onChange={e => setForm({ ...form, postal: e.target.value })} placeholder="75001" className="w-full px-4 py-3 bg-[#FAFAF8] border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#4A5C3A] outline-none" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-1.5 text-gray-500 uppercase tracking-wider">Ville</label>
                        <input value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} placeholder="Paris" className="w-full px-4 py-3 bg-[#FAFAF8] border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#4A5C3A] outline-none" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h2 className="font-bold text-xl mb-6 text-[#2C2C2C] flex items-center gap-3"><CreditCard className="w-5 h-5 text-[#4A5C3A]" /> Paiement sécurisé</h2>
              <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center">
                <Lock className="w-8 h-8 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-400 text-sm italic">Intégration Stripe sécurisée (Phase 3)</p>
                <p className="text-gray-300 text-xs mt-1">Visa, Mastercard, CB, Apple Pay, Google Pay</p>
              </div>
              <button
                onClick={() => alert('Phase 3 : Intégration Stripe en cours de développement !')}
                className="w-full flex items-center justify-center gap-3 mt-6 bg-[#4A5C3A] text-white py-4 rounded-xl font-bold text-base hover:bg-[#3a4a2d] transition-all active:scale-95"
              >
                <Lock className="w-5 h-5" />
                Payer {total.toFixed(2)} € en toute sécurité
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="h-fit sticky top-32">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-bold text-lg mb-6">Votre commande</h3>
              <div className="space-y-4 mb-6">
                {items.map(item => (
                  <div key={item.productId} className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-14 h-14 bg-[#F5F3EE] rounded-xl overflow-hidden">
                        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#4A5C3A] text-white text-xs rounded-full flex items-center justify-center font-bold">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold truncate">{item.name}</p>
                      <p className="text-xs text-gray-400">{item.price.toFixed(2)} € / unité</p>
                    </div>
                    <span className="text-sm font-bold">{(item.price * item.quantity).toFixed(2)} €</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-gray-400">Sous-total</span><span>{subtotal.toFixed(2)} €</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Livraison</span><span className={shipping === 0 ? 'text-green-600 font-medium' : ''}>{shipping === 0 ? 'Gratuite' : `${shipping.toFixed(2)} €`}</span></div>
                <div className="flex justify-between items-center border-t pt-3 text-lg font-bold">
                  <span>Total</span>
                  <span className="text-[#4A5C3A]">{total.toFixed(2)} €</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
