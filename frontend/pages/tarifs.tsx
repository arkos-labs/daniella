import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Check, Info, ShieldCheck, CreditCard } from 'lucide-react';

export default function Tarifs() {
  const tarifs = [
    {
      name: "Bilan Naturopathique",
      price: "50.00€",
      duration: "1 heure",
      description: "Un diagnostic complet de votre hygiène de vie, alimentation et vitalité.",
      features: ["Analyse holistique", "Plan d'action personnalisé", "Recommandations nutritionnelles"]
    },
    {
      name: "Diagnostic Capillaire",
      price: "60.00€",
      duration: "45 minutes",
      description: "Analyse de la fibre et du cuir chevelu pour une routine sur-mesure.",
      features: ["Examen visuel approfondi", "Routine capillaire naturelle", "Conseils d'entretien"],
      highlight: true
    },
    {
      name: "Diagnostic de Peau",
      price: "85.00€",
      duration: "45 minutes",
      description: "Identifier les besoins réels de votre peau et les soins adaptés.",
      features: ["Bilan cutané", "Sélection d'ingrédients actifs", "Accompagnement transition"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8F5EE]">
      <Head>
        <title>Tarifs Consultation Naturopathe | Dany Natural Concept</title>
        <meta name="description" content="Découvrez nos tarifs pour les consultations naturopathes : 60€ diagnostic peau, 85€ diagnostic capillaire, 50€ bilan naturopathique complet." />
      </Head>

      <Header />

      <section className="pt-44 pb-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="section-tag mb-6">Transparence & Accompagnement</span>
            <h1 className="text-6xl md:text-7xl font-serif text-[#2C2C28] mb-8">Consultation Naturopathe <span className="italic text-gradient">Prix</span></h1>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Investissez dans votre bien-être durable avec nos séances de naturopathie holistique personnalisées.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {tarifs.map((t, idx) => (
              <div key={idx} className={`relative p-12 rounded-[3rem] transition-all duration-500 hover:shadow-2xl animate-reveal-up ${t.highlight ? 'bg-[#2D4A1E] text-white scale-105 z-10' : 'bg-white text-[#2C2C28]'}`} style={{ animationDelay: `${idx * 0.1}s` }}>
                {t.highlight && <span className="absolute top-8 right-12 text-[8px] font-bold uppercase tracking-widest bg-[#C9A96E] px-3 py-1 rounded-full text-white">Populaire</span>}
                
                <h3 className="text-2xl font-serif mb-4">{t.name}</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-serif">{t.price}</span>
                  <span className={`text-xs uppercase tracking-widest ${t.highlight ? 'text-white/40' : 'text-gray-400'}`}>/ {t.duration}</span>
                </div>
                
                <p className={`text-sm font-light mb-10 leading-relaxed ${t.highlight ? 'text-white/60' : 'text-gray-400'}`}>
                  {t.description}
                </p>
                
                <ul className="space-y-4 mb-12">
                  {t.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm font-light">
                      <Check className={`w-4 h-4 ${t.highlight ? 'text-[#C9A96E]' : 'text-[#2D4A1E]'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                
                <Link href="/" className={`block w-full py-5 rounded-full text-center text-xs font-bold uppercase tracking-widest transition-all ${t.highlight ? 'bg-[#C9A96E] text-white hover:bg-white hover:text-[#2D4A1E]' : 'bg-[#2D4A1E] text-white hover:bg-[#C9A96E]'}`}>
                  Réserver maintenant
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ Preview Section (SEO Boost) */}
          <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-sm border border-[#2D4A1E]/5 max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif text-[#2C2C28] mb-12 text-center">Questions Fréquentes sur les <span className="italic text-gradient">Tarifs</span></h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-lg font-serif mb-4 text-[#2D4A1E]">Combien coûte une consultation naturopathe ?</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">Nos consultations naturopathiques holistiques commencent à 50€ pour un bilan complet. Nous proposons également des forfaits personnalisés.</p>
              </div>
              <div>
                <h4 className="text-lg font-serif mb-4 text-[#2D4A1E]">Quel est le prix du diagnostic capillaire ?</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">Le diagnostic capillaire approfondi de 45 minutes est proposé au tarif de 60€, incluant votre routine personnalisée.</p>
              </div>
              <div>
                <h4 className="text-lg font-serif mb-4 text-[#2D4A1E]">Puis-je payer en plusieurs fois ?</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">Pour les accompagnements sur plusieurs séances, des facilités de paiement peuvent être discutées lors de notre premier rendez-vous.</p>
              </div>
              <div>
                <h4 className="text-lg font-serif mb-4 text-[#2D4A1E]">Modes de paiement acceptés</h4>
                <div className="flex gap-4 mt-4">
                   <div className="px-4 py-2 bg-[#F8F5EE] rounded-lg text-[10px] font-bold text-gray-400">STRIPE</div>
                   <div className="px-4 py-2 bg-[#F8F5EE] rounded-lg text-[10px] font-bold text-gray-400">PAYPAL</div>
                   <div className="px-4 py-2 bg-[#F8F5EE] rounded-lg text-[10px] font-bold text-gray-400">CARTE BANCAIRE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
