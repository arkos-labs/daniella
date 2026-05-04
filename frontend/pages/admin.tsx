import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Calendar, Package, Plus, Edit2, Trash2, ArrowLeft, Users, TrendingUp } from 'lucide-react';
import { MOCK_PRODUCTS } from '../lib/mockData';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'rdv' | 'produits'>('rdv');
  const [products, setProducts] = useState(MOCK_PRODUCTS);

  // Fake reservations
  const reservations = [
    { id: 1, client: "Sophie Martin", service: "Bilan Naturopathique", date: "15 Mai 2026 - 14:00", status: "Confirmé" },
    { id: 2, client: "Julien Dubois", service: "Réflexologie", date: "16 Mai 2026 - 10:30", status: "En attente" },
    { id: 3, client: "Emma Lemaire", service: "Diagnostic de Peau", date: "16 Mai 2026 - 16:00", status: "Confirmé" },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAF8] pb-24">
      <Head>
        <title>Tableau de Bord Admin | DNC</title>
      </Head>

      {/* Admin Header Premium */}
      <div className="bg-white border-b border-gray-100 pt-24 pb-8 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#39B54A] transition-colors mb-4 text-sm font-bold focus-visible:ring-2 focus-visible:ring-[#39B54A] outline-none rounded-md px-2 py-1 -ml-2">
                <ArrowLeft className="w-4 h-4" /> Quitter l'administration
              </Link>
              <h1 className="text-3xl font-serif text-[#2C2C2C] flex items-center gap-3">
                <div className="w-10 h-10 bg-[#39B54A]/10 text-[#39B54A] rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                Tableau de bord
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-[#FAFAF8] border border-gray-100 px-5 py-3 rounded-2xl flex items-center gap-4">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-[#39B54A] leading-none mb-1">12</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">RDV à venir</span>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-[#F2A900] leading-none mb-1">4</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Stocks bas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        {/* Navigation Pills */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <button 
            onClick={() => setActiveTab('rdv')}
            aria-pressed={activeTab === 'rdv'}
            className={`flex items-center gap-2 px-6 py-3.5 rounded-full font-bold transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#39B54A] outline-none ${
              activeTab === 'rdv' 
                ? 'bg-[#2C2C2C] text-white shadow-md' 
                : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-300 hover:text-[#2C2C2C]'
            }`}
          >
            <Calendar className="w-5 h-5" /> Réservations
          </button>
          <button 
            onClick={() => setActiveTab('produits')}
            aria-pressed={activeTab === 'produits'}
            className={`flex items-center gap-2 px-6 py-3.5 rounded-full font-bold transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#39B54A] outline-none ${
              activeTab === 'produits' 
                ? 'bg-[#2C2C2C] text-white shadow-md' 
                : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-300 hover:text-[#2C2C2C]'
            }`}
          >
            <Package className="w-5 h-5" /> Produits & Stocks
          </button>
        </div>

        {/* Tab Content: Reservations */}
        {activeTab === 'rdv' && (
          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8 border-b border-gray-50 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-[#2C2C2C]">Prochains Rendez-vous</h2>
                <p className="text-gray-500 text-sm mt-1">Gérez vos consultations et suivis clients.</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAFAF8] text-gray-400 text-xs uppercase tracking-widest border-b border-gray-100">
                    <th className="px-8 py-4 font-bold">Client</th>
                    <th className="px-8 py-4 font-bold">Service</th>
                    <th className="px-8 py-4 font-bold">Date & Heure</th>
                    <th className="px-8 py-4 font-bold">Statut</th>
                    <th className="px-8 py-4 font-bold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {reservations.map(rdv => (
                    <tr key={rdv.id} className="hover:bg-[#FAFAF8]/50 transition-colors group">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#2C2C2C] font-bold text-sm">
                            {rdv.client.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="font-bold text-[#2C2C2C]">{rdv.client}</span>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-gray-600 font-medium">{rdv.service}</td>
                      <td className="px-8 py-5 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          {rdv.date}
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                          rdv.status === 'Confirmé' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-amber-50 text-amber-700 border border-amber-100'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${rdv.status === 'Confirmé' ? 'bg-green-500' : 'bg-amber-500'}`}></span>
                          {rdv.status}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <button className="text-[#39B54A] font-bold text-sm hover:text-[#278E35] transition-colors bg-[#39B54A]/5 hover:bg-[#39B54A]/10 px-4 py-2 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#39B54A]">
                          Gérer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content: Produits */}
        {activeTab === 'produits' && (
          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8 border-b border-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-xl font-bold text-[#2C2C2C]">Catalogue & Stocks</h2>
                <p className="text-gray-500 text-sm mt-1">Gérez votre inventaire de produits naturels.</p>
              </div>
              <button className="flex items-center gap-2 bg-[#2C2C2C] text-white px-5 py-2.5 rounded-xl font-bold hover:bg-black transition-all hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2C2C2C] outline-none shadow-sm">
                <Plus className="w-4 h-4" /> Ajouter un produit
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAFAF8] text-gray-400 text-xs uppercase tracking-widest border-b border-gray-100">
                    <th className="px-8 py-4 font-bold">Produit</th>
                    <th className="px-8 py-4 font-bold">Catégorie</th>
                    <th className="px-8 py-4 font-bold">Prix</th>
                    <th className="px-8 py-4 font-bold">Stock</th>
                    <th className="px-8 py-4 font-bold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {products.map(p => (
                    <tr key={p.id} className="hover:bg-[#FAFAF8]/50 transition-colors group">
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-4">
                          <img src={p.imageUrl} className="w-14 h-14 rounded-xl object-cover bg-[#FAFAF8] border border-gray-100" alt={p.name} />
                          <div>
                            <span className="font-bold text-[#2C2C2C] block mb-1">{p.name}</span>
                            <span className="text-xs text-gray-400 font-mono">{p.id}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-4 text-gray-600">
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
                          {p.category}
                        </span>
                      </td>
                      <td className="px-8 py-4 font-serif font-bold text-lg text-[#2C2C2C]">
                        {p.price.toFixed(2)} €
                      </td>
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${p.stock > 10 ? 'bg-green-500' : p.stock > 0 ? 'bg-amber-500' : 'bg-red-500'}`}></span>
                          <span className={`font-bold ${p.stock <= 10 ? 'text-amber-600' : 'text-gray-600'}`}>
                            {p.stock} unités
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-4 text-right">
                        <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 text-gray-400 hover:text-[#39B54A] transition-colors rounded-lg hover:bg-green-50 outline-none focus-visible:ring-2 focus-visible:ring-[#39B54A] focus-visible:opacity-100" title="Modifier" aria-label={`Modifier ${p.name}`}>
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50 outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:opacity-100" title="Supprimer" aria-label={`Supprimer ${p.name}`}>
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
