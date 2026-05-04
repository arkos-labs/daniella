import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { HelpCircle, ChevronDown, MessageSquare, Info } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      category: "Cosmétiques Naturels",
      questions: [
        {
          q: "Cosmétiques naturels: qu'est-ce que c'est?",
          a: "Les cosmétiques naturels sont des soins formulés à partir d'ingrédients issus de la nature (végétaux, minéraux) et transformés de manière simple, sans produits chimiques de synthèse agressifs."
        },
        {
          q: "Quelle est la différence bio vs naturel?",
          a: "Un produit naturel utilise des ingrédients d'origine naturelle. Un produit certifié Bio garantit en plus qu'une grande partie de ces ingrédients est issue de l'agriculture biologique, sans pesticides ni OGM."
        },
        {
          q: "Comment choisir son soin naturel?",
          a: "Le choix dépend de votre type de peau et de cheveux. Nous recommandons de commencer par un diagnostic de peau ou capillaire pour identifier vos besoins réels."
        },
        {
          q: "Poudre de chébé: comment l'utiliser?",
          a: "La poudre de chébé s'utilise traditionnellement mélangée à une huile ou un beurre. Elle s'applique sur les longueurs (en évitant le cuir chevelu) pour fortifier et favoriser la croissance."
        }
      ]
    },
    {
      category: "Naturopathie",
      questions: [
        {
          q: "Qu'est-ce qu'une consultation naturopathe?",
          a: "C'est un rendez-on où nous analysons votre hygiène de vie, votre alimentation et votre état émotionnel pour proposer des solutions naturelles globales."
        },
        {
          q: "Naturopathie holistique: principes?",
          a: "L'approche holistique considère l'individu dans sa globalité : physique, mental et émotionnel. On ne traite pas un symptôme, on cherche la cause profonde du déséquilibre."
        },
        {
          q: "Consultation naturopathe prix?",
          a: "Nos tarifs sont : 60€ pour le diagnostic peau, 85€ pour le diagnostic capillaire, et 50€ pour un bilan naturopathique complet."
        },
        {
          q: "Combien de temps pour voir des résultats?",
          a: "En naturopathie, les résultats profonds se voient généralement sur un cycle de 3 mois, bien que certains bénéfices soient ressentis dès les premières semaines."
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8F5EE]">
      <Head>
        <title>FAQ - Cosmétiques Naturels & Consultation Naturopathe | Dany Natural Concept</title>
        <meta name="description" content="Découvrez notre FAQ sur les cosmétiques naturels, la poudre de chébé et nos consultations de naturopathie holistique. Trouvez toutes les réponses à vos questions." />
      </Head>

      <Header />

      <section className="pt-44 pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-24">
            <span className="section-tag mb-6">Aide & Support</span>
            <h1 className="text-6xl font-serif text-[#2C2C28] mb-8">FAQ - Vos <span className="italic text-gradient">Questions</span></h1>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Tout ce que vous devez savoir sur nos cosmétiques naturels et nos services de naturopathie.
            </p>
          </div>

          <div className="space-y-16">
            {faqs.map((cat, idx) => (
              <div key={idx} className="animate-reveal-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A96E] mb-10 flex items-center gap-4">
                  <div className="h-px bg-[#C9A96E]/20 flex-1"></div>
                  {cat.category}
                  <div className="h-px bg-[#C9A96E]/20 flex-1"></div>
                </h2>
                
                <div className="grid gap-6">
                  {cat.questions.map((item, qIdx) => (
                    <div key={qIdx} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-xl transition-all border border-[#2D4A1E]/5 group">
                      <h3 className="text-xl font-serif text-[#2C2C28] mb-4 flex items-center justify-between group-hover:text-[#2D4A1E] transition-colors">
                        {item.q}
                        <ChevronDown className="w-5 h-5 text-[#C9A96E] group-hover:rotate-180 transition-transform" />
                      </h3>
                      <p className="text-gray-500 font-light leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 bg-[#2D4A1E] rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10 noise-bg pointer-events-none"></div>
            <MessageSquare className="w-12 h-12 text-[#C9A96E] mx-auto mb-8" />
            <h3 className="text-3xl font-serif mb-6">Encore une question ?</h3>
            <p className="text-white/60 mb-10 font-light">
              Notre équipe est là pour vous accompagner dans votre transition vers le naturel.
            </p>
            <button className="btn-gold px-12">Contactez-nous</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
