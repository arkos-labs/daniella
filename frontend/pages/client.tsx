import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Package, MessageSquare, ArrowLeft, Star, ShoppingBag } from 'lucide-react';
import { MOCK_PRODUCTS } from '../lib/mockData';

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState<'commandes' | 'avis'>('commandes');
  const [hasOrdered, setHasOrdered] = useState(true); // Toggle this to test states

  // Fake past order
  const pastOrders = hasOrdered ? [
    {
      id: "CMD-2026-89A",
      date: "10 Mai 2026",
      total: 62.90,
      status: "Livrée",
      items: [MOCK_PRODUCTS[0], MOCK_PRODUCTS[1]] // Example products
    }
  ] : [];

  return (
    <main className="min-h-screen bg-[#FAFAF8] pb-24">
      <Head>
        <title>Mon Espace Client | DNC</title>
      </Head>

      {/* Premium Client Header */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100 pt-28 pb-16">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute -top-[50%] -right-[10%] w-[40%] h-[150%] bg-[#eef4ef] rounded-full blur-[80px] opacity-60"></div>
          <div className="absolute top-[20%] -left-[10%] w-[30%] h-[100%] bg-[#f5f3ee] rounded-full blur-[60px] opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#39B54A] transition-colors mb-6 text-sm font-bold focus-visible:ring-2 focus-visible:ring-[#39B54A] outline-none rounded-md px-2 py-1 -ml-2">
            <ArrowLeft className="w-4 h-4" /> Retour à la boutique
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-[#39B54A]/10 text-[#39B54A] rounded-full flex items-center justify-center text-3xl font-serif">
                M
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-2 tracking-tight">Bonjour, Marie</h1>
                <p className="text-gray-500 text-lg">Bienvenue dans votre espace bien-être personnel.</p>
              </div>
            </div>
            
            {/* Dev toggle purely for demonstration */}
            <button 
              onClick={() => setHasOrdered(!hasOrdered)} 
              className="text-xs bg-gray-100 text-gray-500 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors focus-visible:ring-2 focus-visible:ring-gray-300 outline-none font-medium border border-gray-200"
              title="Cliquer pour simuler un compte sans commande"
            >
              Mode Test : {hasOrdered ? 'Actif (Avec commandes)' : 'Inactif (Sans commandes)'}
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 relative z-10">
        
        {/* Navigation Pills */}
        <div className="flex gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          <button 
            onClick={() => setActiveTab('commandes')}
            aria-pressed={activeTab === 'commandes'}
            className={`flex items-center gap-2 px-6 py-3.5 rounded-full font-bold transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#39B54A] outline-none ${
              activeTab === 'commandes' 
                ? 'bg-[#2C2C2C] text-white shadow-md' 
                : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-300 hover:text-[#2C2C2C]'
            }`}
          >
            <Package className="w-5 h-5" /> Mes Commandes
          </button>
          <button 
            onClick={() => setActiveTab('avis')}
            aria-pressed={activeTab === 'avis'}
            className={`flex items-center gap-2 px-6 py-3.5 rounded-full font-bold transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#39B54A] outline-none ${
              activeTab === 'avis' 
                ? 'bg-[#2C2C2C] text-white shadow-md' 
                : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-300 hover:text-[#2C2C2C]'
            }`}
          >
            <MessageSquare className="w-5 h-5" /> Mes Avis
          </button>
        </div>

        {/* Tab Content: Commandes */}
        {activeTab === 'commandes' && (
          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-10 border-b border-gray-50">
              <h2 className="text-2xl font-bold text-[#2C2C2C]">Historique d'achats</h2>
              <p className="text-gray-500 mt-1">Retrouvez et suivez toutes vos commandes passées.</p>
            </div>
            
            <div className="p-8 md:p-10 bg-[#FAFAF8]/50">
              {pastOrders.length > 0 ? (
                <div className="space-y-6">
                  {pastOrders.map(order => (
                    <div key={order.id} className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow group">
                      <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 border-b border-gray-100 pb-6 mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#39B54A]/10 text-[#39B54A] rounded-2xl flex items-center justify-center">
                            <Package className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-sm font-bold text-gray-400 block mb-1 uppercase tracking-wider">Commande {order.id}</span>
                            <strong className="text-lg text-[#2C2C2C]">Passée le {order.date}</strong>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-2">
                          <span className="bg-green-50 border border-green-100 text-green-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                            {order.status}
                          </span>
                          <strong className="text-[#2C2C2C] text-xl font-serif">{order.total.toFixed(2)} €</strong>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                        <div className="flex gap-4 overflow-x-auto pb-2 flex-grow">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="flex-shrink-0 w-20 h-20 bg-[#FAFAF8] rounded-2xl border border-gray-100 overflow-hidden relative group-hover:border-gray-200 transition-colors" title={item.name}>
                              <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                          ))}
                          <div className="flex items-center justify-center w-20 h-20 rounded-2xl border-2 border-dashed border-gray-200 text-gray-400 font-bold text-sm">
                            +{order.items.length}
                          </div>
                        </div>
                        <button className="whitespace-nowrap px-6 py-3 bg-[#FAFAF8] border border-gray-200 text-[#2C2C2C] font-bold rounded-xl hover:bg-white hover:border-gray-300 transition-all focus-visible:ring-2 focus-visible:ring-gray-200 outline-none">
                          Voir la facture
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-gray-100">
                  <div className="w-24 h-24 bg-[#39B54A]/5 rounded-full flex items-center justify-center mx-auto mb-6 text-[#39B54A]">
                    <ShoppingBag className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#2C2C2C] mb-3">Votre panier est vide</h3>
                  <p className="text-gray-500 mb-8 max-w-sm mx-auto">Vous n'avez pas encore passé de commande. Découvrez nos soins naturels et commencez votre routine.</p>
                  <Link href="/boutique" className="inline-block bg-[#39B54A] text-white px-8 py-4 rounded-full font-bold hover:bg-[#278E35] transition-all hover:shadow-[0_8px_30px_rgb(57,181,74,0.3)] hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#39B54A] focus-visible:ring-offset-2 outline-none">
                    Découvrir la boutique
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab Content: Avis */}
        {activeTab === 'avis' && (
          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-10 border-b border-gray-50">
              <h2 className="text-2xl font-bold text-[#2C2C2C]">Vos avis produits</h2>
              <p className="text-gray-500 mt-1">Partagez votre expérience avec la communauté.</p>
            </div>
            
            <div className="p-8 md:p-10 bg-[#FAFAF8]/50">
              {!hasOrdered ? (
                <div className="bg-white border-2 border-dashed border-gray-200 p-12 rounded-3xl text-center max-w-2xl mx-auto">
                  <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-500">
                    <Star className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#2C2C2C] mb-4">Avis vérifiés uniquement</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Pour garantir l'authenticité des retours de notre communauté, seuls les clients ayant passé et reçu une commande peuvent laisser un avis.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pastOrders[0]?.items.map((item, idx) => (
                      <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col sm:flex-row gap-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-24 h-24 rounded-2xl overflow-hidden bg-[#FAFAF8] flex-shrink-0">
                          <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="font-bold text-[#2C2C2C] mb-2 line-clamp-2 leading-tight">{item.name}</h4>
                            <div className="flex gap-1 mb-4" aria-label="Noter le produit">
                              {[...Array(5)].map((_, i) => (
                                <button key={i} className="focus-visible:ring-2 focus-visible:ring-[#F2A900] outline-none rounded-full p-1 -m-1">
                                  <Star className="w-6 h-6 text-gray-200 hover:text-[#F2A900] hover:fill-[#F2A900] cursor-pointer transition-colors" aria-hidden="true" />
                                </button>
                              ))}
                            </div>
                          </div>
                          <button className="text-sm font-bold text-[#39B54A] hover:text-[#278E35] transition-colors self-start px-4 py-2 bg-[#39B54A]/5 hover:bg-[#39B54A]/10 rounded-lg focus-visible:ring-2 focus-visible:ring-[#39B54A] outline-none">
                            Rédiger un avis
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
