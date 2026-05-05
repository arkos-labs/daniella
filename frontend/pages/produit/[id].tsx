import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MOCK_PRODUCTS } from '../../lib/mockData';
import { useCart } from '../../hooks/useCart';
import { ShoppingCart, ArrowLeft, ArrowRight, ShieldCheck, Truck, Star, Sparkles, Leaf, Info, Droplets, Minus, Plus, Heart, CheckCircle2 } from 'lucide-react';

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
          <h2 className="text-4xl font-serif text-[#1a1a1a] mb-6">Soin Introuvable</h2>
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
        <title>{product.name}: {product.category} Naturel | {product.price.toFixed(0)}€ | Dany Natural</title>
        <meta name="description" content={`${product.name}: ${product.description} ${product.price.toFixed(2)}€. 100% naturel, formulé par naturopathe. Livraison gratuite dès 50€. Satisfaction garantie 30 jours.`} />
        <meta name="keywords" content={`${product.name.toLowerCase()}, ${product.category.toLowerCase()} naturel, cosmétique naturel, ingrédients africains, dany natural`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://daniella-three.vercel.app/produit/${product.id}`} />
        <meta property="og:title" content={`${product.name} | Dany Natural Concept`} />
        <meta property="og:description" content={`${product.description} ${product.price.toFixed(2)}€. Formulé par Daniella Adabra, naturopathe certifiée.`} />
        <meta property="og:image" content={product.imageUrl} />
        <meta property="og:type" content="product" />
        {/* Schema.org Product */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "image": product.imageUrl,
          "brand": { "@type": "Brand", "name": "Dany Natural Concept" },
          "offers": {
            "@type": "Offer",
            "price": product.price.toFixed(2),
            "priceCurrency": "EUR",
            "availability": product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "124"
          }
        }) }} />
      </Head>

      {/* Product Hero Section */}
      <section className="relative pt-44 pb-20 overflow-hidden bg-white border-b border-[#3fad28]/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <button 
            onClick={() => router.push('/boutique')} 
            className="group flex items-center gap-3 text-[#3fad28] bg-white border border-[#3fad28]/10 px-6 py-3 rounded-full hover:bg-[#3fad28] hover:text-white transition-all mb-16 uppercase text-[10px] font-bold tracking-[0.2em] shadow-sm hover:shadow-lg active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour
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
              </div>
            </div>

            {/* Product Meta & Actions */}
            <div className="lg:col-span-7 flex flex-col justify-center animate-reveal-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#e68d15] text-[#e68d15]" />)}
                <span className="text-[10px] font-bold text-gray-400 ml-2 uppercase tracking-widest">Avis Clients (124)</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] mb-8 leading-[1.1]">
                {product.name}
              </h1>

              <p className="text-xl text-gray-500 font-light leading-relaxed mb-10 max-w-2xl">
                {(product as any).longDescription || product.description}
              </p>

              <div className="flex items-center gap-10 mb-12 pb-12 border-b border-[#3fad28]/5">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#e68d15] mb-2">Prix unitaire</span>
                  <span className="text-4xl font-serif text-[#3fad28]">{product.price.toFixed(2)}€</span>
                </div>
                <div className="h-12 w-px bg-[#3fad28]/10"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300 mb-2">Statut</span>
                  <span className={`text-xs font-bold uppercase tracking-widest ${product.stock > 0 ? 'text-[#7ecb6e]' : 'text-red-400'}`}>
                    {product.stock > 0 ? 'Disponible en Stock' : 'Épuisé'}
                  </span>
                </div>
              </div>

              {/* Tabs Integration */}
              <div className="mb-12">
                <div className="flex gap-10 mb-8 border-b border-[#3fad28]/5">
                  {[
                    { id: 'description', label: 'Bénéfices' },
                    { id: 'utilisation', label: 'Utilisation' },
                    { id: 'composition', label: 'Ingrédients' }
                  ].map((tab) => (
                    <button 
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`pb-4 text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative ${activeTab === tab.id ? 'text-[#3fad28]' : 'text-gray-300 hover:text-gray-500'}`}
                    >
                      {tab.label}
                      {activeTab === tab.id && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#e68d15]"></div>}
                    </button>
                  ))}
                </div>

                <div className="min-h-[160px] text-lg font-light text-gray-500 leading-relaxed">
                  {activeTab === 'description' && (
                    <div className="animate-reveal-up grid grid-cols-1 md:grid-cols-2 gap-4">
                      {((product as any).benefits || [
                        "100% Ingrédients Naturels",
                        "Sans sulfates ni parabènes",
                        "Formulé par une naturopathe",
                        "Cruelty-free"
                      ]).map((benefit: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-3 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-[#7ecb6e]" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {activeTab === 'utilisation' && (
                    <div className="animate-reveal-up flex items-start gap-8 bg-[#F8F5EE] p-8 rounded-[2.5rem]">
                      <div className="w-12 h-12 rounded-full bg-[#e68d15] flex items-center justify-center text-white shrink-0 shadow-lg">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <p className="text-sm">
                        <strong className="text-[#3fad28] block mb-2 font-bold uppercase tracking-widest text-[10px]">Conseils d'Application :</strong> 
                        {(product as any).usage || "Appliquez une noisette sur une peau propre et légèrement humide. Massez délicatement en mouvements circulaires ascendants."}
                      </p>
                    </div>
                  )}
                  {activeTab === 'composition' && (
                    <div className="animate-reveal-up grid grid-cols-1 gap-4">
                      {((product as any).ingredients || [
                        "Huiles végétales pressées à froid",
                        "Beurres végétaux bruts",
                        "Extraits de plantes bio",
                        "Vitamines naturelles"
                      ]).map((ing: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#3fad28]/5">
                          <Leaf className="w-5 h-5 text-[#e68d15]" />
                          <span className="text-xs font-bold uppercase tracking-widest">{ing}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Purchase Box */}
              <div className="bg-[#3fad28] p-6 md:p-10 rounded-[3rem] md:rounded-[4rem] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 shadow-2xl shadow-[#3fad28]/30 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 noise-bg pointer-events-none"></div>
                <div className="flex items-center justify-between bg-white/5 backdrop-blur-md rounded-full p-2 w-full md:w-auto border border-white/10">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-all"><Minus className="w-4 h-4" /></button>
                  <span className="px-6 text-center font-serif text-2xl text-white min-w-[3rem]">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-all"><Plus className="w-4 h-4" /></button>
                </div>
                <button onClick={handleAdd} disabled={product.stock <= 0} className={`w-full md:flex-1 flex items-center justify-center gap-4 py-5 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px] transition-all duration-500 shadow-xl active:scale-95 ${added ? 'bg-[#7ecb6e] text-white' : 'bg-[#e68d15] text-white'}`}>
                  <ShoppingCart className="w-5 h-5" />{added ? 'Ajouté !' : 'Ajouter au panier'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rich Content: FAQ & Support */}
      {(product as any).faq && (
        <section className="container mx-auto px-6 py-24 bg-white mt-12 rounded-[4rem]">
          <div className="max-w-4xl mx-auto">
            <span className="section-tag mb-6">FAQ Produit</span>
            <h2 className="text-5xl font-serif text-[#1a1a1a] mb-16">Questions Fréquentes sur <span className="italic text-gradient">{product.name}</span></h2>
            <div className="space-y-8">
              {(product as any).faq.map((item: any, idx: number) => (
                <div key={idx} className="p-8 bg-[#F8F5EE] rounded-[2rem] border border-[#3fad28]/5 shadow-sm">
                  <h4 className="text-lg font-serif text-[#3fad28] mb-4 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#e68d15] flex items-center justify-center text-white text-xs">Q</div>
                    {item.q}
                  </h4>
                  <p className="text-sm text-gray-500 font-light leading-relaxed pl-12">{item.r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reinsurance Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="mt-24 space-y-32">
          <section className="animate-reveal-up">
            <h2 className="text-4xl font-serif text-[#1a1a1a] mb-12">Pourquoi Choisir Dany Natural ?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Résultats Visibles", desc: "Des bénéfices constatés en moins de 30 jours d'utilisation régulière." },
                { title: "100% Naturel", desc: "Aucun ingrédient de synthèse, silicone ou parabène pour votre sécurité." },
                { title: "Expertise Africaine", desc: "Des actifs ancestraux sélectionnés pour leur puissance biologique." },
                { title: "Ethique & Bio", desc: "Soutien aux filières locales et ingrédients certifiés agriculture biologique." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-white rounded-[2rem] border border-[#3fad28]/5 shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-[#e68d15] mb-6" />
                  <h4 className="text-lg font-serif text-[#3fad28] mb-4">{item.title}</h4>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
