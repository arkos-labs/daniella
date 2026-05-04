import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Calendar, Package, Plus, Edit2, Trash2, ArrowLeft, Users, TrendingUp, Search, Bell, Settings, LogOut, CheckCircle, Clock, MoreHorizontal } from 'lucide-react';
import { MOCK_PRODUCTS } from '../lib/mockData';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'rdv' | 'produits' | 'clients'>('rdv');
  const [products, setProducts] = useState(MOCK_PRODUCTS);

  const reservations = [
    { id: 1, client: "Sophie Martin", service: "Bilan Naturopathique", date: "15 Mai - 14:00", status: "Confirmé", email: "sophie@example.com" },
    { id: 2, client: "Julien Dubois", service: "Réflexologie", date: "16 Mai - 10:30", status: "En attente", email: "julien@example.com" },
    { id: 3, client: "Emma Lemaire", service: "Diagnostic de Peau", date: "16 Mai - 16:00", status: "Confirmé", email: "emma@example.com" },
    { id: 4, client: "Lucas Petit", service: "Bilan Naturopathique", date: "17 Mai - 09:30", status: "Confirmé", email: "lucas@example.com" },
  ];

  const clients = [
    { id: 1, name: "Sophie Martin", email: "sophie@example.com", phone: "06 12 34 56 78", orders: 12, spent: "450.00€", lastVisit: "10/05/2024" },
    { id: 2, name: "Julien Dubois", email: "julien@example.com", phone: "06 23 45 67 89", orders: 3, spent: "120.00€", lastVisit: "12/05/2024" },
    { id: 3, name: "Emma Lemaire", email: "emma@example.com", phone: "06 34 56 78 90", orders: 8, spent: "310.00€", lastVisit: "14/05/2024" },
    { id: 4, name: "Lucas Petit", email: "lucas@example.com", phone: "06 45 67 89 01", orders: 1, spent: "45.00€", lastVisit: "16/05/2024" },
    { id: 5, name: "Marie Durand", email: "marie@example.com", phone: "06 56 78 90 12", orders: 25, spent: "1250.00€", lastVisit: "08/05/2024" },
  ];

  return (
    <main className="min-h-screen bg-[#F8F5EE] flex">
      <Head>
        <title>Dashboard Admin | Dany Natural Concept</title>
      </Head>

      {/* Sidebar Navigation */}
      <aside className="w-80 bg-[#2D4A1E] text-white p-10 flex flex-col justify-between sticky top-0 h-screen hidden lg:flex overflow-hidden">
        <div className="absolute inset-0 opacity-10 noise-bg pointer-events-none"></div>
        
        <div className="relative z-10">
          <Link href="/" className="inline-block mb-16">
            <span className="text-2xl font-serif text-white tracking-tight">
              Dany<span className="italic text-[#C9A96E] font-light">Natural</span>
            </span>
            <span className="block text-[8px] font-bold uppercase tracking-[0.4em] text-white/30 mt-1">Administration</span>
          </Link>

          <nav className="space-y-6">
            <button 
              onClick={() => setActiveTab('rdv')}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 ${activeTab === 'rdv' ? 'bg-white text-[#2D4A1E] shadow-2xl' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
            >
              <Calendar className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Réservations</span>
            </button>
            <button 
              onClick={() => setActiveTab('produits')}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 ${activeTab === 'produits' ? 'bg-white text-[#2D4A1E] shadow-2xl' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
            >
              <Package className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Inventaire</span>
            </button>
            <button 
              onClick={() => setActiveTab('clients')}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 ${activeTab === 'clients' ? 'bg-white text-[#2D4A1E] shadow-2xl' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
            >
              <Users className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Clientèle</span>
            </button>
          </nav>
        </div>

        <div className="relative z-10 space-y-6">
          <div className="p-6 bg-white/5 rounded-[2rem] border border-white/5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3">Statut Serveur</p>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#C9A96E] rounded-full animate-pulse"></div>
              <span className="text-xs font-medium">Opérationnel</span>
            </div>
          </div>
          <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-white/40 hover:text-red-400 hover:bg-red-400/5 transition-all">
            <LogOut className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <section className="flex-1 p-8 lg:p-16 overflow-y-auto">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div>
            <h1 className="text-4xl font-serif text-[#2C2C28] mb-2">Bonjour, Daniella</h1>
            <p className="text-sm font-light text-gray-400">Voici l'activité de votre cabinet pour aujourd'hui.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Rechercher..." className="pl-12 pr-6 py-3 bg-white rounded-full text-xs font-light focus:ring-2 focus:ring-[#2D4A1E] transition-all outline-none border border-[#2D4A1E]/5 shadow-sm" />
            </div>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-[#2D4A1E]/5 shadow-sm hover:bg-[#F8F5EE] transition-all relative">
              <Bell className="w-4 h-4 text-[#2D4A1E]" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-[#C9A96E] rounded-full border-2 border-[#F8F5EE]"></span>
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#C9A96E]">
              <img src="/dany_founder.jpg" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-10 rounded-[3rem] border border-[#2D4A1E]/5 shadow-xl shadow-black/5">
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 bg-[#2D4A1E]/5 rounded-2xl flex items-center justify-center text-[#2D4A1E]">
                <Calendar className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-[#C9A96E] uppercase tracking-widest">+12%</span>
            </div>
            <span className="text-4xl font-serif text-[#2D4A1E] block mb-2">18</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Rendez-vous prévus</span>
          </div>
          <div className="bg-white p-10 rounded-[3rem] border border-[#2D4A1E]/5 shadow-xl shadow-black/5">
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 bg-[#2D4A1E]/5 rounded-2xl flex items-center justify-center text-[#2D4A1E]">
                <Package className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">-5%</span>
            </div>
            <span className="text-4xl font-serif text-[#2D4A1E] block mb-2">04</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Alertes Stock Bas</span>
          </div>
          <div className="bg-[#2D4A1E] p-10 rounded-[3rem] text-white shadow-2xl shadow-[#2D4A1E]/20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 noise-bg pointer-events-none"></div>
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#C9A96E]">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
            <span className="text-4xl font-serif text-white block mb-2">2.4k€</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Revenus Mensuels</span>
          </div>
        </div>

        {/* Active View */}
        <div className="bg-white rounded-[4rem] border border-[#2D4A1E]/5 shadow-2xl shadow-black/5 overflow-hidden animate-reveal-up">
          <div className="p-12 border-b border-[#2D4A1E]/5 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-3xl font-serif text-[#2C2C28]">
                {activeTab === 'rdv' ? 'Prochaines Séances' : 
                 activeTab === 'produits' ? 'Catalogue Produits' : 'Fichier Clientèle'}
              </h2>
              <p className="text-xs font-light text-gray-400 mt-1">Dernière mise à jour : Il y a 5 minutes</p>
            </div>
            {activeTab === 'produits' && (
              <button className="btn-primary px-8 py-4 flex items-center gap-3">
                <Plus className="w-4 h-4" /> Nouveau Produit
              </button>
            )}
          </div>

          <div className="overflow-x-auto">
            {activeTab === 'rdv' ? (
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#F8F5EE] text-[10px] font-bold uppercase tracking-[0.2em] text-[#2D4A1E]/40 border-b border-[#2D4A1E]/5">
                    <th className="px-12 py-6">Client</th>
                    <th className="px-12 py-6">Prestation</th>
                    <th className="px-12 py-6">Horaire</th>
                    <th className="px-12 py-6">Statut</th>
                    <th className="px-12 py-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2D4A1E]/5">
                  {reservations.map(rdv => (
                    <tr key={rdv.id} className="group hover:bg-[#F8F5EE]/50 transition-colors">
                      <td className="px-12 py-8">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-[#2D4A1E] text-white flex items-center justify-center text-xs font-bold shadow-lg">
                            {rdv.client.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-[#2C2C28]">{rdv.client}</p>
                            <p className="text-[10px] text-gray-400 font-light">{rdv.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-12 py-8">
                        <span className="text-sm font-serif italic text-[#2D4A1E]">{rdv.service}</span>
                      </td>
                      <td className="px-12 py-8">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="w-3.5 h-3.5 text-[#C9A96E]" />
                          {rdv.date}
                        </div>
                      </td>
                      <td className="px-12 py-8">
                        <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest ${rdv.status === 'Confirmé' ? 'bg-[#7A9E5E]/10 text-[#7A9E5E]' : 'bg-[#C9A96E]/10 text-[#C9A96E]'}`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${rdv.status === 'Confirmé' ? 'bg-[#7A9E5E]' : 'bg-[#C9A96E]'}`}></div>
                          {rdv.status}
                        </span>
                      </td>
                      <td className="px-12 py-8 text-right">
                        <button className="text-gray-300 hover:text-[#2D4A1E] transition-colors">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : activeTab === 'produits' ? (
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#F8F5EE] text-[10px] font-bold uppercase tracking-[0.2em] text-[#2D4A1E]/40 border-b border-[#2D4A1E]/5">
                    <th className="px-12 py-6">Produit</th>
                    <th className="px-12 py-6">Catégorie</th>
                    <th className="px-12 py-6">Stock</th>
                    <th className="px-12 py-6">Prix</th>
                    <th className="px-12 py-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2D4A1E]/5">
                  {products.map(p => (
                    <tr key={p.id} className="group hover:bg-[#F8F5EE]/50 transition-colors">
                      <td className="px-12 py-6">
                        <div className="flex items-center gap-6">
                          <img src={p.imageUrl} className="w-14 h-14 rounded-2xl object-cover bg-[#F8F5EE] shadow-sm" alt={p.name} />
                          <div>
                            <p className="text-sm font-bold text-[#2C2C28]">{p.name}</p>
                            <p className="text-[10px] text-gray-400 font-mono">ID: {p.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-12 py-6">
                        <span className="text-[10px] font-bold uppercase tracking-widest bg-[#2D4A1E]/5 text-[#2D4A1E] px-4 py-1.5 rounded-full">{p.category}</span>
                      </td>
                      <td className="px-12 py-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full ${p.stock > 10 ? 'bg-[#7A9E5E]' : 'bg-red-400'}`}></div>
                          <span className={`text-sm font-bold ${p.stock <= 10 ? 'text-red-400' : 'text-[#2C2C28]'}`}>{p.stock} pcs</span>
                        </div>
                      </td>
                      <td className="px-12 py-6 text-xl font-serif text-[#2D4A1E]">
                        {p.price.toFixed(2)}€
                      </td>
                      <td className="px-12 py-6 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-3 bg-[#F8F5EE] rounded-full text-gray-400 hover:text-[#2D4A1E] transition-all">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button className="p-3 bg-red-50 rounded-full text-red-300 hover:text-red-500 transition-all">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#F8F5EE] text-[10px] font-bold uppercase tracking-[0.2em] text-[#2D4A1E]/40 border-b border-[#2D4A1E]/5">
                    <th className="px-12 py-6">Client</th>
                    <th className="px-12 py-6">Coordonnées</th>
                    <th className="px-12 py-6">Commandes</th>
                    <th className="px-12 py-6">Total Dépensé</th>
                    <th className="px-12 py-6 text-right">Dernière Visite</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2D4A1E]/5">
                  {clients.map(c => (
                    <tr key={c.id} className="group hover:bg-[#F8F5EE]/50 transition-colors">
                      <td className="px-12 py-8">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-[#C9A96E]/20 text-[#C9A96E] flex items-center justify-center text-xs font-bold">
                            {c.name.charAt(0)}
                          </div>
                          <p className="text-sm font-bold text-[#2C2C28]">{c.name}</p>
                        </div>
                      </td>
                      <td className="px-12 py-8">
                        <div>
                          <p className="text-xs text-gray-500">{c.email}</p>
                          <p className="text-[10px] text-gray-400 font-light">{c.phone}</p>
                        </div>
                      </td>
                      <td className="px-12 py-8 text-sm font-bold text-[#2D4A1E]">
                        {c.orders}
                      </td>
                      <td className="px-12 py-8 text-sm font-serif text-[#2C2C28]">
                        {c.spent}
                      </td>
                      <td className="px-12 py-8 text-right">
                        <span className="text-xs text-gray-400">{c.lastVisit}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
