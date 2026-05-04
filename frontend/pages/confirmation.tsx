import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function Confirmation() {
  return (
    <div className="min-h-screen pt-40 pb-20 text-center">
      <Head><title>Commande Confirmée | Dany Natural Concept</title></Head>
      <div className="container mx-auto px-4 max-w-xl">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="text-green-600 w-12 h-12" />
        </div>
        <h1 className="text-4xl mb-6">Merci pour votre commande !</h1>
        <p className="text-gray-600 text-lg mb-12">
          Votre commande a été enregistrée avec succès. Vous recevrez un e-mail de confirmation d'ici quelques minutes.
        </p>
        <div className="bg-cream p-8 rounded-2xl mb-12 text-left space-y-4">
          <p><strong>Numéro de commande :</strong> #DNC-2026-458</p>
          <p><strong>Statut :</strong> En attente de traitement</p>
          <p><strong>Délai estimé :</strong> 3-5 jours ouvrés</p>
        </div>
        <Link href="/" className="btn-primary">Retour à l'accueil</Link>
      </div>
    </div>
  );
}
