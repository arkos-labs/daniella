import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, ShoppingBag, Mail, Star } from 'lucide-react';

export default function Confirmation() {
  return (
    <main className="min-h-screen bg-[#F8F5EE] pt-44 pb-32 flex items-center justify-center">
      <Head><title>Commande Confirmée | Dany Natural Concept</title></Head>
      
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <div className="relative inline-block mb-12">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl relative z-10 animate-float">
            <CheckCircle className="text-[#e68d15] w-14 h-14" />
          </div>
          <div className="absolute -inset-6 bg-[#e68d15]/20 rounded-full blur-2xl animate-pulse"></div>
        </div>

        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#e68d15] mb-6 block">Succès</span>
        <h1 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] mb-8 leading-tight">Merci pour votre <span className="italic text-gradient">Confiance</span></h1>
        
        <p className="text-lg font-light text-gray-500 leading-relaxed mb-12 italic-serif-container">
          Votre commande a été enregistrée avec le plus grand soin. <br />
          Un e-mail de confirmation vient de vous être envoyé.
        </p>

        <div className="bg-white p-12 rounded-[3.5rem] border border-[#3fad28]/5 shadow-2xl shadow-black/5 mb-16 text-left relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F8F5EE] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
          
          <div className="relative z-10 space-y-6">
            <div className="flex justify-between items-center pb-6 border-b border-[#3fad28]/5">
              <span className="text-[9px] font-bold uppercase tracking-widest text-gray-300">Numéro de commande</span>
              <span className="text-sm font-serif text-[#3fad28]">#DNC-2026-458</span>
            </div>
            <div className="flex justify-between items-center pb-6 border-b border-[#3fad28]/5">
              <span className="text-[9px] font-bold uppercase tracking-widest text-gray-300">Statut actuel</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#7ecb6e] bg-[#7ecb6e]/10 px-4 py-1 rounded-full">Confirmée</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-bold uppercase tracking-widest text-gray-300">Expédition prévue</span>
              <span className="text-sm font-serif text-[#1a1a1a]">Sous 48h ouvrées</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/" className="btn-primary px-12 group w-full sm:w-auto">
            Retour à l'accueil <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/client" className="btn-outline px-12 w-full sm:w-auto">
            Suivre ma commande
          </Link>
        </div>

        <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center gap-3">
            <Mail className="w-5 h-5 text-[#e68d15]" />
            <p className="text-[8px] font-bold uppercase tracking-widest text-gray-400">Confirmation par mail</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#e68d15]" />
            <p className="text-[8px] font-bold uppercase tracking-widest text-gray-400">Suivi en temps réel</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Star className="w-5 h-5 text-[#e68d15]" />
            <p className="text-[8px] font-bold uppercase tracking-widest text-gray-400">Programme Fidélité</p>
          </div>
        </div>
      </div>
    </main>
  );
}
