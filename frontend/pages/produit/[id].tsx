import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MOCK_PRODUCTS } from '../../lib/mockData';
import { useCart } from '../../hooks/useCart';
import { ShoppingCart, ArrowLeft, ArrowRight, ShieldCheck, Truck, Star, Sparkles, Leaf, Info, Droplets } from 'lucide-react';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'utilisation' | 'composition'>('description');
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-28">
        <div className="text-center">
          <p className="text-gray-400 text-xl mb-6">Produit introuvable.</p>
          <Link href="/boutique" className="inline-block bg-[#39B54A] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#278E35] transition-colors">Retour à la boutique</Link>
        </div>
      </div>
    );
  }

  const related = MOCK_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem({ productId: product.id, name: product.name, price: product.price, quantity, imageUrl: product.imageUrl });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] pt-32 pb-24">
      <Head>
        <title>{product.name} | Dany Natural Concept</title>
        <meta name="description" content={product.description} />
      </Head>

      <div className="container mx-auto px-4 max-w-7xl">
        <button onClick={() => router.push('/boutique')} className="inline-flex items-center gap-2 text-gray-500 hover:text-[#39B54A] mb-10 transition-colors group bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-wider">Retour à la boutique</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24">
          
          {/* Image Section (Left) */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl p-4 border border-gray-100">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-[#FAFAF8] relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e: any) => { e.target.src = 'https://via.placeholder.com/600x800/FAFAF8/39B54A?text=DNC'; }}
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md text-[#39B54A] text-sm font-bold px-4 py-1.5 rounded-full shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Details Section (Right) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C2C2C] mb-6 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#F2A900] text-[#F2A900]" />)}
              </div>
              <span className="text-sm font-bold text-[#39B54A] bg-[#39B54A]/10 px-3 py-1 rounded-full">100% Naturel</span>
              {product.stock < 10 && <span className="text-sm font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full">Stock Limité</span>}
            </div>

            {/* Product Tabs */}
            <div className="mb-10">
              <div className="flex gap-6 mb-6 border-b border-gray-200">
                <button 
                  onClick={() => setActiveTab('description')}
                  className={`pb-4 text-lg font-bold transition-colors relative ${activeTab === 'description' ? 'text-[#39B54A]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  Description
                  {activeTab === 'description' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#39B54A]"></div>}
                </button>
                <button 
                  onClick={() => setActiveTab('utilisation')}
                  className={`pb-4 text-lg font-bold transition-colors relative ${activeTab === 'utilisation' ? 'text-[#39B54A]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  Conseils d'utilisation
                  {activeTab === 'utilisation' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#39B54A]"></div>}
                </button>
                <button 
                  onClick={() => setActiveTab('composition')}
                  className={`pb-4 text-lg font-bold transition-colors relative ${activeTab === 'composition' ? 'text-[#39B54A]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  Composition
                  {activeTab === 'composition' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#39B54A]"></div>}
                </button>
              </div>

              <div className="min-h-[120px] text-lg text-gray-600 leading-relaxed">
                {activeTab === 'description' && (
                  <p className="animate-in fade-in slide-in-from-bottom-2">{product.description} Conçu avec amour dans notre atelier à Valenciennes, ce soin est un véritable concentré d'actifs naturels pour revitaliser votre corps en douceur.</p>
                )}
                {activeTab === 'utilisation' && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <Sparkles className="w-8 h-8 text-[#F2A900] flex-shrink-0 mt-1" />
                    <p>
                      <strong>L'astuce de la naturopathe :</strong> Appliquez une noisette sur une peau propre et légèrement humide pour faciliter la pénétration. Massez en mouvements circulaires doux pour activer la micro-circulation.
                    </p>
                  </div>
                )}
                {activeTab === 'composition' && (
                  <ul className="animate-in fade-in slide-in-from-bottom-2 space-y-2">
                    <li className="flex items-center gap-3"><Leaf className="w-5 h-5 text-[#39B54A]" /> Beurres végétaux bruts non raffinés</li>
                    <li className="flex items-center gap-3"><Droplets className="w-5 h-5 text-[#39B54A]" /> Huiles végétales pressées à froid</li>
                    <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-[#39B54A]" /> Zéro paraben, zéro silicone</li>
                  </ul>
                )}
              </div>
            </div>

            {/* Add to cart block */}
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-lg border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
              <div className="flex flex-col items-center md:items-start w-full md:w-auto">
                <span className="text-4xl font-bold text-[#39B54A] mb-1">{product.price.toFixed(2)} €</span>
                <span className="text-sm text-gray-400">TTC - Livraison gratuite dès 80€</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                <div className="flex items-center gap-4 bg-[#FAFAF8] rounded-2xl p-2 w-full sm:w-auto justify-center">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-12 h-12 flex items-center justify-center text-2xl font-light text-gray-500 hover:text-[#39B54A] bg-white rounded-xl shadow-sm">−</button>
                  <span className="w-8 text-center font-bold text-xl text-[#2C2C2C]">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="w-12 h-12 flex items-center justify-center text-2xl font-light text-gray-500 hover:text-[#39B54A] bg-white rounded-xl shadow-sm">+</button>
                </div>
                <button
                  onClick={handleAdd}
                  className={`flex-1 w-full flex items-center justify-center gap-3 py-5 px-8 rounded-2xl font-bold text-lg transition-all duration-300 shadow-md ${
                    added ? 'bg-green-500 text-white scale-[0.98]' : 'bg-[#39B54A] text-white hover:bg-[#278E35] hover:shadow-xl hover:-translate-y-1'
                  }`}
                >
                  <ShoppingCart className="w-6 h-6" />
                  {added ? 'Ajouté !' : 'Ajouter'}
                </button>
              </div>
            </div>

            {/* Trust badges (Grid layout) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Truck, label: 'Livraison offerte', sub: 'Dès 80€ d\'achat' },
                { icon: ShieldCheck, label: 'Paiement', sub: '100% Sécurisé' },
                { icon: Leaf, label: 'Fait main', sub: 'À Valenciennes' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#39B54A]/10 rounded-full flex items-center justify-center flex-shrink-0 text-[#39B54A]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="block text-sm text-[#2C2C2C]">{label}</strong>
                    <span className="text-xs text-gray-500">{sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="pt-16 border-t border-gray-200">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-serif text-[#2C2C2C]">Complétez votre routine</h2>
              <Link href="/boutique" className="hidden md:flex items-center gap-2 text-[#39B54A] font-bold hover:underline">
                Voir toute la boutique <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {related.map(p => (
                <div key={p.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <Link href={`/produit/${p.id}`}>
                    <div className="relative h-64 bg-[#FAFAF8] overflow-hidden cursor-pointer p-4">
                      <div className="w-full h-full rounded-2xl overflow-hidden relative">
                        <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <Link href={`/produit/${p.id}`}>
                      <h4 className="text-lg font-bold text-[#2C2C2C] mb-2 truncate group-hover:text-[#39B54A] transition-colors">{p.name}</h4>
                    </Link>
                    <div className="flex items-center justify-between">
                      <span className="text-[#39B54A] font-bold text-xl">{p.price.toFixed(2)} €</span>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          addItem({ productId: p.id, name: p.name, price: p.price, quantity: 1, imageUrl: p.imageUrl });
                          alert('Ajouté au panier');
                        }}
                        className="w-10 h-10 rounded-full bg-[#FAFAF8] flex items-center justify-center text-gray-400 hover:bg-[#39B54A] hover:text-white transition-colors"
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
