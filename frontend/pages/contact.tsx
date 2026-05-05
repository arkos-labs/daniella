import React from 'react';
import Head from 'next/head';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#F8F5EE] pb-32">
      <Head>
        <title>Contact | Dany Natural Concept</title>
        <meta name="description" content="Une question ? Un conseil personnalisé ? Contactez l'équipe Dany Natural Concept à Valenciennes." />
      </Head>

      {/* Hero Header */}
      <section className="relative pt-44 pb-24 overflow-hidden bg-white border-b border-[#3fad28]/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#4ec433]/5 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <span className="section-tag mb-6">Dialogue & Écoute</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 text-[#1a1a1a] leading-[0.95]">
            Nous <span className="italic-serif text-gradient">Contacter</span>
          </h1>
          <p className="text-gray-500 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
            Une interrogation sur nos soins ou besoin d'un accompagnement spécifique ? Notre équipe est à votre entière disposition.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-20 max-w-7xl">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-12 rounded-[3rem] shadow-xl shadow-black/5 border border-[#3fad28]/5 text-center group hover:-translate-y-2 transition-all duration-500">
            <div className="w-16 h-16 bg-[#F8F5EE] rounded-2xl flex items-center justify-center mx-auto mb-8 text-[#e68d15] group-hover:bg-[#e68d15] group-hover:text-white transition-all duration-500">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#3fad28]/40 mb-3">Email</h3>
            <p className="text-xl font-serif text-[#1a1a1a]">contact@danynaturalconcept.org</p>
          </div>

          <div className="bg-white p-12 rounded-[3rem] shadow-xl shadow-black/5 border border-[#3fad28]/5 text-center group hover:-translate-y-2 transition-all duration-500">
            <div className="w-16 h-16 bg-[#F8F5EE] rounded-2xl flex items-center justify-center mx-auto mb-8 text-[#e68d15] group-hover:bg-[#e68d15] group-hover:text-white transition-all duration-500">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#3fad28]/40 mb-3">Téléphone</h3>
            <p className="text-xl font-serif text-[#1a1a1a]">+33 6 XX XX XX XX</p>
          </div>

          <div className="bg-white p-12 rounded-[3rem] shadow-xl shadow-black/5 border border-[#3fad28]/5 text-center group hover:-translate-y-2 transition-all duration-500">
            <div className="w-16 h-16 bg-[#F8F5EE] rounded-2xl flex items-center justify-center mx-auto mb-8 text-[#e68d15] group-hover:bg-[#e68d15] group-hover:text-white transition-all duration-500">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#3fad28]/40 mb-3">Localisation</h3>
            <p className="text-xl font-serif text-[#1a1a1a]">Valenciennes, France</p>
          </div>
        </div>

        {/* Form & Sidebar */}
        <div className="bg-white rounded-[4rem] overflow-hidden shadow-2xl shadow-black/5 border border-[#3fad28]/5 flex flex-col lg:flex-row">
          <div className="lg:w-2/3 p-12 md:p-20">
            <h2 className="text-4xl font-serif text-[#1a1a1a] mb-12">Envoyez-nous un message</h2>
            <form className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 ml-6">Votre Nom</label>
                  <input type="text" className="w-full px-8 py-5 bg-[#F8F5EE] border-none rounded-full focus:ring-2 focus:ring-[#3fad28] outline-none text-sm font-light transition-all" placeholder="Daniella Adabra" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 ml-6">Votre Email</label>
                  <input type="email" className="w-full px-8 py-5 bg-[#F8F5EE] border-none rounded-full focus:ring-2 focus:ring-[#3fad28] outline-none text-sm font-light transition-all" placeholder="votre@email.com" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 ml-6">Sujet de la demande</label>
                <select className="w-full px-8 py-5 bg-[#F8F5EE] border-none rounded-full focus:ring-2 focus:ring-[#3fad28] outline-none text-sm font-light transition-all appearance-none cursor-pointer">
                  <option>Conseil sur un soin</option>
                  <option>Demande de rendez-vous</option>
                  <option>Suivi de ma commande</option>
                  <option>Autre demande</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 ml-6">Message</label>
                <textarea rows={6} className="w-full px-8 py-6 bg-[#F8F5EE] border-none rounded-[2.5rem] focus:ring-2 focus:ring-[#3fad28] outline-none text-sm font-light transition-all resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>

              <button className="btn-primary px-12 py-5 group">
                Envoyer le message <Send className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          <div className="lg:w-1/3 bg-[#3fad28] p-16 md:p-20 text-white relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 noise-bg pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-serif mb-12 flex items-center gap-4">
                <Clock className="w-8 h-8 text-[#e68d15]" /> Horaires
              </h3>
              <div className="space-y-8">
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Lun - Mer</span>
                  <span className="text-sm font-light">10:00 — 19:00</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Jeu - Ven</span>
                  <span className="text-sm font-light">09:00 — 17:00</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Samedi</span>
                  <span className="text-sm font-light">14:00 — 19:00</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#e68d15]">Dimanche</span>
                  <span className="text-sm font-bold text-[#e68d15]">Fermé</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-20">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-8">Réseaux Sociaux</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#e68d15] hover:border-[#e68d15] transition-all duration-500">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#e68d15] hover:border-[#e68d15] transition-all duration-500">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
