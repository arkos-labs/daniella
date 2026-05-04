import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MOCK_PRODUCTS } from '../../lib/mockData';
import { useCart } from '../../hooks/useCart';
import { ShoppingCart, ArrowLeft, ArrowRight, ShieldCheck, Truck, Star, Sparkles, Leaf, Info, Droplets, Minus, Plus, Heart } from 'lucide-react';

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
      <div className="min-h-screen bg-[#F8F5EE] flex items-center justify-center pt-28">
        <div className="text-center animate-reveal-up">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
            <Info className="w-10 h-10 text-gray-200" />
          </div>
          <h2 className="text-4xl font-serif text-[#2C2C28] mb-6">Soin Introuvable</h2>
          <Link href="/boutique" className="btn-outline px-10">Retour à la collection</Link>
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
    <main className="min-h-screen bg-[#F8F5EE] pb-32">
      <Head>
        <title>{product.id === '2' ? 'Sérum Prodigieux Croissance: Repousse Cheveux Accélérée' : 
                product.id === '3' ? 'Poudre de Chébé Authentique du Tchad: La Solution Africaine pour Cheveux Sains' :
                product.id === '4' ? 'Baume Tropical Fondant: Soin Visage Mangue et Aloe Vera' :
                product.name} | Dany Natural Concept</title>
        <meta name="description" content={
          product.id === '2' ? 'Sérum prodigieux croissance: accélère la repousse cheveux. Formule naturelle africaine.' :
          product.id === '3' ? 'Poudre chébé authentique du Tchad. Croissance cheveux garantie. Recette traditionnelle africaine.' :
          product.id === '4' ? 'Baume tropical fondant mangue & aloe vera. Hydratation profonde et nourriture naturelle.' :
          product.description
        } />
      </Head>

      {/* Product Hero Section */}
      <section className="relative pt-44 pb-20 overflow-hidden bg-white border-b border-[#2D4A1E]/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <button onClick={() => router.push('/boutique')} className="group flex items-center gap-3 text-gray-400 hover:text-[#2D4A1E] transition-colors mb-16 uppercase text-[10px] font-bold tracking-widest">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour à la boutique
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Image Showcase */}
            <div className="lg:col-span-5 relative animate-reveal-up">
              <div className="bg-[#F8F5EE] rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl relative group">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  onError={(e: any) => { e.target.src = 'https://via.placeholder.com/600x800/F8F5EE/2D4A1E?text=DNC'; }}
                />
                <div className="absolute top-10 left-10">
                  <span className="bg-white/90 backdrop-blur-md text-[#2D4A1E] text-[10px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-full shadow-xl">
                    {product.category}
                  </span>
                </div>
                <button className="absolute bottom-10 right-10 w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#2D4A1E] hover:bg-[#C9A96E] hover:text-white transition-all shadow-2xl">
                  <Heart className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Product Meta & Actions */}
            <div className="lg:col-span-7 flex flex-col justify-center animate-reveal-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#C9A96E] text-[#C9A96E]" />)}
                <span className="text-[10px] font-bold text-gray-400 ml-2 uppercase tracking-widest">Avis Clients (24)</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif text-[#2C2C28] mb-8 leading-[1.1]">
                {product.id === '2' ? 'Sérum Prodigieux Croissance: Repousse Cheveux Accélérée' : 
                 product.id === '3' ? 'Poudre de Chébé Authentique du Tchad: La Solution Africaine pour Cheveux Sains' :
                 product.id === '4' ? 'Baume Tropical Fondant: Soin Visage Mangue et Aloe Vera' :
                 product.name}
              </h1>

              <div className="flex items-center gap-10 mb-12 pb-12 border-b border-[#2D4A1E]/5">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A96E] mb-2">Prix unitaire</span>
                  <span className="text-4xl font-serif text-[#2D4A1E]">{product.price.toFixed(2)}€</span>
                </div>
                <div className="h-12 w-px bg-[#2D4A1E]/10"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300 mb-2">Statut</span>
                  <span className={`text-xs font-bold uppercase tracking-widest ${product.stock > 0 ? 'text-[#7A9E5E]' : 'text-red-400'}`}>
                    {product.stock > 0 ? 'Disponible en Stock' : 'Épuisé'}
                  </span>
                </div>
              </div>

              {/* Tabs Integration */}
              <div className="mb-12">
                <div className="flex gap-10 mb-8 border-b border-[#2D4A1E]/5">
                  {['description', 'utilisation', 'composition'].map((tab) => (
                    <button 
                      key={tab}
                      onClick={() => setActiveTab(tab as any)}
                      className={`pb-4 text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative ${activeTab === tab ? 'text-[#2D4A1E]' : 'text-gray-300 hover:text-gray-500'}`}
                    >
                      {tab}
                      {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9A96E]"></div>}
                    </button>
                  ))}
                </div>

                <div className="min-h-[160px] text-lg font-light text-gray-500 leading-relaxed italic-serif-container">
                  {activeTab === 'description' && (
                    <p className="animate-reveal-up">{product.description} Formulée au cœur de Valenciennes, cette création artisanale puise sa force dans la pureté des actifs végétaux non raffinés pour offrir une régénération profonde et respectueuse.</p>
                  )}
                  {activeTab === 'utilisation' && (
                    <div className="animate-reveal-up flex items-start gap-8 bg-[#F8F5EE] p-8 rounded-[2.5rem]">
                      <div className="w-12 h-12 rounded-full bg-[#C9A96E] flex items-center justify-center text-white shrink-0 shadow-lg">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <p className="text-sm">
                        <strong className="text-[#2D4A1E] block mb-2 font-bold uppercase tracking-widest text-[10px]">L'Art du Soin :</strong> Appliquez une noisette sur une peau propre et légèrement humide. Massez délicatement en mouvements circulaires ascendants pour favoriser la synergie des actifs avec votre épiderme.
                      </p>
                    </div>
                  )}
                  {activeTab === 'composition' && (
                    <div className="animate-reveal-up grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#2D4A1E]/5">
                        <Leaf className="w-5 h-5 text-[#C9A96E]" />
                        <span className="text-xs font-bold uppercase tracking-widest">Beurres Bruts</span>
                      </div>
                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#2D4A1E]/5">
                        <Droplets className="w-5 h-5 text-[#C9A96E]" />
                        <span className="text-xs font-bold uppercase tracking-widest">Huiles Pressées à froid</span>
                      </div>
                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#2D4A1E]/5">
                        <ShieldCheck className="w-5 h-5 text-[#C9A96E]" />
                        <span className="text-xs font-bold uppercase tracking-widest">Zéro Conservateur</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Purchase Box */}
              <div className="bg-[#2D4A1E] p-6 md:p-10 rounded-[3rem] md:rounded-[4rem] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 shadow-2xl shadow-[#2D4A1E]/30 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 noise-bg pointer-events-none"></div>
                <div className="flex items-center justify-between bg-white/5 backdrop-blur-md rounded-full p-2 w-full md:w-auto border border-white/10">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-all"><Minus className="w-4 h-4" /></button>
                  <span className="px-6 text-center font-serif text-2xl text-white min-w-[3rem]">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-all"><Plus className="w-4 h-4" /></button>
                </div>
                <button onClick={handleAdd} disabled={product.stock <= 0} className={`w-full md:flex-1 flex items-center justify-center gap-4 py-5 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px] transition-all duration-500 shadow-xl active:scale-95 ${added ? 'bg-[#7A9E5E] text-white' : 'bg-[#C9A96E] text-white'}`}>
                  <ShoppingCart className="w-5 h-5" />{added ? 'Ajouté !' : 'Ajouter au panier'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rich SEO Content Sections */}
      <section className="container mx-auto px-6 py-24">
        <div className="mt-24 space-y-32">
          <section className="animate-reveal-up">
            <h2 className="text-4xl font-serif text-[#2C2C28] mb-12">Pourquoi {product.name} ?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Résultats Visibles", desc: "Des bénéfices constatés en moins de 30 jours d'utilisation régulière." },
                { title: "100% Naturel", desc: "Aucun ingrédient de synthèse, silicone ou parabène pour votre sécurité." },
                { title: "Expertise Africaine", desc: "Des actifs ancestraux sélectionnés pour leur puissance biologique." },
                { title: "Ethique & Bio", desc: "Soutien aux filières locales et ingrédients certifiés agriculture biologique." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-white rounded-[2rem] border border-[#2D4A1E]/5 shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-[#C9A96E] mb-6" />
                  <h4 className="text-lg font-serif text-[#2D4A1E] mb-4">{item.title}</h4>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#2D4A1E] rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden animate-reveal-up">
            <div className="absolute inset-0 opacity-10 noise-bg pointer-events-none"></div>
            <div className="max-w-3xl relative z-10">
              <span className="section-tag text-white/40 mb-8">Composition Pure</span>
              <h2 className="text-5xl font-serif mb-12">Des <span className="italic text-gradient-gold">ingrédients</span> naturels d'exception</h2>
              <div className="space-y-8">
                <div className="flex gap-8 items-start border-b border-white/10 pb-8">
                  <div className="w-16 h-16 rounded-full bg-[#C9A96E] flex-shrink-0 flex items-center justify-center font-serif text-2xl italic">K</div>
                  <div>
                    <h4 className="text-xl font-serif text-white mb-2">Beurre de Karité Brut</h4>
                    <p className="text-white/60 font-light leading-relaxed">Protection et nutrition intense, originaire du Burkina Faso. Non raffiné pour préserver ses vitamines.</p>
                  </div>
                </div>
                <div className="flex gap-8 items-start border-b border-white/10 pb-8">
                  <div className="w-16 h-16 rounded-full bg-[#C9A96E] flex-shrink-0 flex items-center justify-center font-serif text-2xl italic">A</div>
                  <div>
                    <h4 className="text-xl font-serif text-white mb-2">Huile d'Argan Bio</h4>
                    <p className="text-white/60 font-light leading-relaxed">Antioxydant naturel puissant qui répare la fibre et apporte une brillance immédiate.</p>
                  </div>
                </div>
                <div className="flex gap-8 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#C9A96E] flex-shrink-0 flex items-center justify-center font-serif text-2xl italic">C</div>
                  <div>
                    <h4 className="text-xl font-serif text-white mb-2">Poudre de Chébé Authentique</h4>
                    <p className="text-white/60 font-light leading-relaxed">Secret de beauté tchadien pour fortifier le cheveu et stimuler la croissance naturelle.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="animate-reveal-up">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <span className="section-tag mb-6">Témoignages</span>
                <h2 className="text-5xl font-serif text-[#2C2C28]">Avis Clients <span className="italic text-gradient">{product.name}</span></h2>
              </div>
              <div className="flex items-center gap-4 text-[#C9A96E]">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#2D4A1E]">4.9/5 sur 124 avis</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Marie L.", text: "Résultats visibles en seulement 2 semaines sur la repousse. Je recommande sans hésiter !", role: "Cliente vérifiée" },
                { name: "Sarah K.", text: "Le parfum naturel est envoûtant et l'efficacité est au rendez-vous. La texture est parfaite.", role: "Cliente vérifiée" },
                { name: "Aminata D.", text: "Enfin un soin naturel qui respecte vraiment mes cheveux afros. Un pur bonheur.", role: "Cliente vérifiée" }
              ].map((review, idx) => (
                <div key={idx} className="p-10 bg-white rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-[#2D4A1E]/5">
                  <p className="text-gray-400 font-light italic mb-8 leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F8F5EE] flex items-center justify-center text-[10px] font-bold text-[#2D4A1E]">{review.name[0]}</div>
                    <div>
                      <span className="block text-xs font-bold text-[#2D4A1E]">{review.name}</span>
                      <span className="block text-[8px] uppercase tracking-widest text-gray-300">{review.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
