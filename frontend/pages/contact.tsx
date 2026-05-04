import React from 'react';
import Head from 'next/head';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <Head>
        <title>Contact | Dany Natural Concept</title>
      </Head>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-4">Contactez-nous</h1>
          <p className="text-gray-600 text-xl">Une question ? Un conseil ? Nous sommes à votre écoute.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-600">contact@danynaturalconcept.org</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Téléphone</h3>
            <p className="text-gray-600">+33 6 XX XX XX XX</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Localisation</h3>
            <p className="text-gray-600">Valenciennes, France</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 md:p-20">
            <h2 className="text-3xl mb-8">Envoyez-nous un message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Nom</label>
                  <input type="text" className="w-full p-4 bg-cream border-none rounded-xl focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <input type="email" className="w-full p-4 bg-cream border-none rounded-xl focus:ring-2 focus:ring-primary" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Sujet</label>
                <select className="w-full p-4 bg-cream border-none rounded-xl focus:ring-2 focus:ring-primary">
                  <option>Question sur un produit</option>
                  <option>Demande de rendez-vous</option>
                  <option>Suivi de commande</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Message</label>
                <textarea rows={5} className="w-full p-4 bg-cream border-none rounded-xl focus:ring-2 focus:ring-primary"></textarea>
              </div>
              <button className="btn-primary w-full">Envoyer le message</button>
            </form>
          </div>
          <div className="md:w-1/2 bg-primary p-20 text-white flex flex-col justify-center">
            <h3 className="text-2xl mb-6 font-serif">Horaires du cabinet</h3>
            <div className="space-y-4 opacity-90">
              <p>Lundi - Mercredi : 10h00 - 19h00</p>
              <p>Jeudi - Vendredi : 09h00 - 17h00</p>
              <p>Samedi : 14h00 - 19h00</p>
              <p className="text-gold font-bold">Dimanche : Fermé</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
