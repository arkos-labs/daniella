import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MOCK_PRODUCTS, CATEGORIES } from '../lib/mockData';
import { useCart } from '../hooks/useCart';
import { ShoppingCart, Search, SlidersHorizontal, Star } from 'lucide-react';

export default function Boutique() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedId, setAddedId] = useState<string | null>(null);
  const { addItem } = useCart();

  const filtered = MOCK_PRODUCTS.filter(p => {
    const matchCat = selectedCategory === 'Tous' || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleAdd = (product: typeof MOCK_PRODUCTS[0]) => {
    addItem({ productId: product.id, name: product.name, price: product.price, quantity: 1, imageUrl: product.imageUrl });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <main className="min-h-screen bg-[#FAFAF8] pt-28 pb-20">
      <Head>
        <title>Boutique | Dany Natural Concept</title>
        <meta name="description" content="Découvrez nos soins naturels artisanaux : capillaires, corps, visage, beurres et huiles végétales bio." />
      </Head>

      {/* Premium Header Boutique */}
      <div className="relative overflow-hidden bg-[#FAFAF8] py-24 mb-16 border-b border-gray-100">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute -top-[50%] -right-[10%] w-[40%] h-[150%] bg-[#eef4ef] rounded-full blur-[80px] opacity-60"></div>
          <div className="absolute top-[20%] -left-[10%] w-[30%] h-[100%] bg-[#f5f3ee] rounded-full blur-[60px] opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-[#39B54A]/10 text-[#39B54A] text-xs uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6 font-bold border border-[#39B54A]/20">
            <SlidersHorizontal className="w-3.5 h-3.5" aria-hidden="true" />
            Boutique en ligne
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-[#2C2C2C] tracking-tight">Nos <span className="text-[#39B54A] italic">Créations</span></h1>
          <p className="text-gray-500 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
            22 soins formulés avec passion, pour révéler votre beauté naturelle et honorer votre peau.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-center">
          <div className="relative flex-grow max-w-md">
            <label htmlFor="search-products" className="sr-only">Rechercher un produit</label>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
            <input
              id="search-products"
              type="text"
              placeholder="Rechercher un produit..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#39B54A] focus-visible:ring-offset-2"
            />
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={selectedCategory === cat}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#39B54A] outline-none ${
                  selectedCategory === cat
                    ? 'bg-[#39B54A] text-white shadow-md'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-[#39B54A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <p className="text-gray-400 text-sm mb-8">{filtered.length} produit{filtered.length > 1 ? 's' : ''}</p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtered.map(product => (
            <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Link href={`/produit/${product.id}`}>
                <div className="relative h-60 bg-[#F5F3EE] overflow-hidden cursor-pointer">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e: any) => { e.target.src = 'https://via.placeholder.com/400x400/F5F3EE/4A5C3A?text=DNC'; }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-[#39B54A] text-xs font-bold px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  {product.stock < 20 && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">Bientôt épuisé</span>
                    </div>
                  )}
                </div>
              </Link>

              <div className="p-5">
                <div className="flex items-center gap-1 mb-2" aria-label="5 étoiles sur 5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" aria-hidden="true" />)}
                  <span className="text-xs text-gray-400 ml-1">(12)</span>
                </div>
                <Link href={`/produit/${product.id}`} className="focus-visible:ring-2 focus-visible:ring-[#39B54A] outline-none rounded-sm">
                  <h3 className="font-bold text-[#2C2C2C] mb-1 leading-tight hover:text-[#39B54A] transition-colors cursor-pointer text-sm">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gray-400 text-xs mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#39B54A]">{product.price.toFixed(2)} €</span>
                  <button
                    onClick={() => handleAdd(product)}
                    aria-label={`Ajouter ${product.name} au panier`}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#39B54A] outline-none ${
                      addedId === product.id
                        ? 'bg-green-500 text-white scale-95'
                        : 'bg-[#39B54A] text-white hover:bg-[#278E35] active:scale-95'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" aria-hidden="true" />
                    {addedId === product.id ? 'Ajouté\u00A0!' : 'Ajouter'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
