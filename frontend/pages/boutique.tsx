import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MOCK_PRODUCTS, CATEGORIES } from '../lib/mockData';
import { useCart } from '../hooks/useCart';
import { ShoppingCart, Search, SlidersHorizontal, Star, Heart, ArrowRight } from 'lucide-react';

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
    <main className="min-h-screen bg-[#F8F5EE] pb-32">
      <Head>
        <title>Boutique | Dany Natural Concept</title>
        <meta name="description" content="Découvrez nos soins naturels artisanaux : capillaires, corps, visage, beurres et huiles végétales bio." />
      </Head>

      {/* Hero Header */}
      <section className="relative pt-44 pb-24 overflow-hidden bg-white border-b border-[#2D4A1E]/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#3D6228]/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-[#C9A96E]/10 rounded-full blur-[80px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="section-tag mb-6">Collection Complète</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 text-[#2C2C28] leading-[0.95]">
            Nos <span className="italic-serif text-gradient">Créations</span>
          </h1>
          <p className="text-gray-500 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            22 soins d'exception formulés à la main, alliant l'intelligence de la nature à une exigence de pureté absolue.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-16">
        {/* Search & Filters */}
        <div className="flex flex-col lg:flex-row gap-10 mb-20 items-center justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher un soin..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-5 bg-white border-none rounded-full shadow-lg shadow-black/5 focus:ring-2 focus:ring-[#2D4A1E] transition-all outline-none text-sm"
            />
          </div>
          
          <div className="flex gap-3 flex-wrap justify-center">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#2D4A1E] text-white shadow-xl'
                    : 'bg-white text-gray-400 border border-[#2D4A1E]/5 hover:border-[#C9A96E] hover:text-[#2D4A1E]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Count & Info */}
        <div className="flex items-center justify-between mb-12 px-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2D4A1E]/40">
            {filtered.length} soin{filtered.length > 1 ? 's' : ''} trouvé{filtered.length > 1 ? 's' : ''}
          </p>
          <div className="h-px bg-[#2D4A1E]/5 flex-1 mx-8"></div>
        </div>

        {/* Product Grid - 2 per row on mobile, 3 on sm, 4 on lg */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-12">
          {filtered.map((product, idx) => (
            <div 
              key={product.id} 
              className="card-hover bg-white rounded-[1.5rem] md:rounded-[3rem] p-2 md:p-4 flex flex-col h-full group animate-reveal-up"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <Link href={`/produit/${product.id}`} className="relative aspect-[4/5] rounded-[1.2rem] md:rounded-[2.5rem] overflow-hidden mb-4 md:mb-8 block group/img">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                  onError={(e: any) => { e.target.src = 'https://via.placeholder.com/400x400/F8F5EE/2D4A1E?text=DNC'; }}
                />
                
                
                {product.stock < 10 && (
                  <div className="absolute top-5 right-5">
                    <span className="bg-[#C9A96E] text-white text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Édition Limitée</span>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-500 flex items-center justify-center gap-4 opacity-0 group-hover/img:opacity-100">
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#2D4A1E] hover:bg-[#2D4A1E] hover:text-white transition-all shadow-xl">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </Link>

              <div className="px-4 pb-4 flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#C9A96E] text-[#C9A96E]" />
                  ))}
                  <span className="text-[10px] text-gray-400 ml-2 font-bold">(24)</span>
                </div>
                
                <Link href={`/produit/${product.id}`}>
                  <h3 className="text-sm md:text-xl font-serif text-[#2C2C28] mb-2 md:mb-3 leading-tight group-hover:text-[#2D4A1E] transition-colors line-clamp-2 h-10 md:h-14">
                    {product.name}
                  </h3>
                </Link>
                
                <p className="text-gray-400 text-sm font-light mb-8 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mt-auto flex flex-col items-stretch border-t border-[#2D4A1E]/5 pt-4 md:pt-6 gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg md:text-2xl font-serif text-[#2D4A1E] font-medium">{product.price.toFixed(2)}€</span>
                    <button className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#2D4A1E]/10 flex items-center justify-center text-[#2D4A1E] hover:bg-[#2D4A1E] hover:text-white transition-all">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <button
                    onClick={() => handleAdd(product)}
                    className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all duration-500 w-full justify-center shadow-lg active:scale-95 ${
                      addedId === product.id
                        ? 'bg-[#7A9E5E] text-white shadow-[#7A9E5E]/20'
                        : 'bg-[#2D4A1E] text-white hover:bg-[#1A1A18] shadow-[#2D4A1E]/20'
                    }`}
                  >
                    <ShoppingCart className="w-3.5 h-3.5 md:w-4 h-4" />
                    {addedId === product.id ? 'Ajouté !' : 'Ajouter au panier'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="py-32 text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <Search className="w-10 h-10 text-gray-200" />
            </div>
            <h2 className="text-3xl font-serif mb-4">Aucun soin trouvé</h2>
            <p className="text-gray-400 font-light mb-10">Essayez de modifier vos critères de recherche ou de catégorie.</p>
            <button onClick={() => { setSelectedCategory('Tous'); setSearchQuery(''); }} className="btn-outline px-10 py-4">
              Réinitialiser
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="container mx-auto px-6 mt-32">
        <div className="bg-[#2D4A1E] rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 noise-bg pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-[100px]"></div>
          
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-8 relative z-10 leading-tight">
            Besoin d'un conseil <br /> <span className="italic text-gradient-gold">personnalisé ?</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
            Daniella vous accompagne dans votre transition vers le naturel avec un diagnostic complet de vos besoins.
          </p>
          <Link href="/reservations" className="btn-gold relative z-10 px-12 py-5 text-sm">
            Prendre rendez-vous <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}
