import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Package, MessageSquare, ArrowLeft, ArrowRight, Star, ShoppingBag, User, Heart, Settings, Clock, ChevronRight, LogOut, Gift, HelpCircle } from 'lucide-react';
import { MOCK_PRODUCTS } from '../lib/mockData';

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState<'commandes' | 'avis' | 'profil'>('commandes');
  const [hasOrdered, setHasOrdered] = useState(true);

  const pastOrders = hasOrdered ? [
    {
      id: "CMD-2026-89A",
      date: "10 Mai 2026",
      total: 62.90,
      status: "Livrée",
      items: [MOCK_PRODUCTS[0], MOCK_PRODUCTS[1]]
    }
  ] : [];

  return (
    <main className="min-h-screen bg-[#F8F5EE]">
      <Head>
        <title>Mon Espace Bien-être | Dany Natural Concept</title>
      </Head>

      {/* Premium Profile Header */}
      <section className="relative pt-44 pb-20 overflow-hidden bg-white border-b border-[#3fad28]/5">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#3fad28]/5 -skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-10">
              <div className="relative group">
                <div className="w-32 h-32 rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl relative z-10">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Marie" />
                </div>
                <div className="absolute -inset-4 bg-[#e68d15]/20 rounded-[3.5rem] blur-2xl group-hover:bg-[#e68d15]/30 transition-all duration-700"></div>
              </div>
              
              <div className="text-center md:text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#e68d15] mb-3 block">Bienvenue</span>
                <h1 className="text-5xl md:text-6xl font-serif text-[#1a1a1a] mb-4">Marie <span className="italic font-light">Lemaire</span></h1>
                <div className="flex items-center gap-6">
                  <span className="text-xs font-bold text-[#3fad28]/40 uppercase tracking-widest flex items-center gap-2">
                    <User className="w-3.5 h-3.5" /> Client Privilège
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#e68d15]"></div>
                  <span className="text-xs font-bold text-[#3fad28]/40 uppercase tracking-widest flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" /> Membre depuis 2024
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Dashboard Navigation */}
          <aside className="lg:w-1/4 space-y-4">
            {[
              { id: 'commandes', icon: Package, label: 'Mes Commandes' },
              { id: 'avis', icon: MessageSquare, label: 'Mes Avis' },
              { id: 'profil', icon: Heart, label: 'Mes Favoris' }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center justify-between p-6 rounded-[2rem] transition-all duration-500 border ${
                  activeTab === tab.id 
                    ? 'bg-[#3fad28] text-white border-[#3fad28] shadow-2xl shadow-[#3fad28]/20' 
                    : 'bg-white text-[#3fad28]/40 border-transparent hover:border-[#3fad28]/10 hover:text-[#3fad28]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <tab.icon className="w-5 h-5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{tab.label}</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === tab.id ? 'translate-x-1' : 'opacity-0'}`} />
              </button>
            ))}
            
            <button 
              className="w-full flex items-center gap-4 p-6 rounded-[2rem] text-[#3fad28]/40 hover:bg-[#F8F5EE] hover:text-[#3fad28] transition-all duration-300 border border-transparent hover:border-[#3fad28]/10 mt-4"
            >
              <HelpCircle className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Aide & Support</span>
            </button>

            <div className="mt-12 bg-[#e68d15] p-8 rounded-[3rem] text-white relative overflow-hidden group cursor-pointer shadow-xl shadow-[#e68d15]/20">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
              <Gift className="w-8 h-8 mb-6" />
              <h4 className="text-xl font-serif mb-2">Programme Fidélité</h4>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Vous avez 120 points</p>
            </div>
          </aside>

          {/* Tab Content */}
          <section className="lg:w-3/4 animate-reveal-up">
            {activeTab === 'commandes' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between mb-4 px-4">
                  <h3 className="text-3xl font-serif text-[#1a1a1a]">Historique <span className="italic text-gradient">d'achats</span></h3>
                </div>

                {pastOrders.length > 0 ? (
                  pastOrders.map(order => (
                    <div key={order.id} className="bg-white rounded-[3rem] p-10 border border-[#3fad28]/5 shadow-xl shadow-black/5 hover:shadow-2xl transition-all group">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10 pb-10 border-b border-[#3fad28]/5">
                        <div className="flex items-center gap-6">
                          <div className="w-14 h-14 bg-[#F8F5EE] rounded-2xl flex items-center justify-center text-[#3fad28]">
                            <Package className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-1">Réf: {order.id}</p>
                            <p className="text-xl font-serif text-[#1a1a1a]">Passée le {order.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-8">
                          <div className="text-right">
                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e68d15] mb-1">Statut</p>
                            <span className="text-xs font-bold uppercase tracking-widest text-[#7ecb6e] bg-[#7ecb6e]/10 px-4 py-1.5 rounded-full">{order.status}</span>
                          </div>
                          <div className="h-10 w-px bg-[#3fad28]/5"></div>
                          <div className="text-right">
                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-1">Total</p>
                            <p className="text-2xl font-serif text-[#3fad28]">{order.total.toFixed(2)}€</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-6">
                        {order.items.map((item, idx) => (
                          <Link key={idx} href={`/produit/${item.id}`} className="group/item relative">
                            <div className="w-20 h-20 bg-[#F8F5EE] rounded-2xl overflow-hidden border border-transparent group-hover/item:border-[#3fad28]/20 transition-all shadow-sm">
                              <img src={item.imageUrl} className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700" alt={item.name} />
                            </div>
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#3fad28] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg border-2 border-white">1</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white rounded-[4rem] p-20 text-center border border-dashed border-[#3fad28]/20">
                    <ShoppingBag className="w-16 h-16 text-[#F8F5EE] mx-auto mb-8" />
                    <h4 className="text-3xl font-serif text-[#1a1a1a] mb-4">Aucune commande</h4>
                    <p className="text-gray-400 font-light mb-10 max-w-sm mx-auto">Votre historique est encore vierge. Laissez-vous séduire par nos créations botaniques.</p>
                    <Link href="/boutique" className="btn-primary px-12">Découvrir la collection</Link>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'avis' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between mb-4 px-4">
                  <h3 className="text-3xl font-serif text-[#1a1a1a]">Partager mon <span className="italic text-gradient">Expérience</span></h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {MOCK_PRODUCTS.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-[3rem] border border-[#3fad28]/5 shadow-xl shadow-black/5 flex gap-8 group">
                      <div className="w-24 h-24 bg-[#F8F5EE] rounded-[2rem] overflow-hidden flex-shrink-0">
                        <img src={item.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.name} />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#e68d15] mb-2">{item.category}</p>
                          <h4 className="text-lg font-serif text-[#1a1a1a] mb-4 line-clamp-1">{item.name}</h4>
                          <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-gray-200 hover:text-[#e68d15] hover:fill-[#e68d15] cursor-pointer transition-colors" />
                            ))}
                          </div>
                        </div>
                        <button className="text-[9px] font-bold uppercase tracking-widest text-[#3fad28] hover:text-[#e68d15] transition-colors flex items-center gap-2">
                          Rédiger un avis <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
