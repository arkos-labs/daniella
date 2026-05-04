import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MOCK_PRODUCTS } from '../lib/mockData';
import { useCart } from '../hooks/useCart';
import { ArrowRight, Leaf, ShieldCheck, Heart, Star, ShoppingCart, Wind, Apple, Droplets, Sun, Footprints } from 'lucide-react';

export default function Home() {
  const { addItem } = useCart();
  const featuredProducts = MOCK_PRODUCTS.slice(0, 4);

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <Head>
        <title>Accueil | Dany Natural Concept</title>
        <meta name="description" content="Découvrez nos soins naturels artisanaux et nos consultations en naturopathie à Valenciennes." />
      </Head>

      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-[#FAFAF8] min-h-[90vh] flex items-center">
        {/* Decorative organic background shapes */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -right-[5%] w-[50%] h-[70%] bg-[#eef4ef] rounded-full blur-[100px] opacity-70"></div>
          <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[50%] bg-[#f5f3ee] rounded-full blur-[80px] opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#39B54A]/10 text-[#39B54A] text-xs uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-8 font-bold border border-[#39B54A]/20">
                <Leaf className="w-3.5 h-3.5" aria-hidden="true" />
                Artisanat & Naturopathie
              </div>
              <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-[1.1] text-[#2C2C2C] tracking-tight">
                Révélez votre <br className="hidden md:block" /> 
                <span className="text-[#39B54A] italic pr-4">beauté originelle.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-xl leading-relaxed font-light">
                Des soins cosmétiques <strong className="text-[#39B54A] font-semibold">100% naturels</strong> formulés avec passion, et un accompagnement naturopathique sur-mesure pour votre bien-être.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/boutique" className="inline-flex items-center justify-center gap-2 bg-[#39B54A] text-white px-8 py-4 rounded-full font-bold hover:bg-[#278E35] transition-all hover:shadow-[0_8px_30px_rgb(57,181,74,0.3)] hover:-translate-y-1 text-lg focus-visible:ring-2 focus-visible:ring-[#39B54A] focus-visible:ring-offset-2 outline-none">
                  Découvrir nos soins
                </Link>
                <Link href="/reservations" className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-100 hover:border-[#39B54A] text-[#39B54A] px-8 py-4 rounded-full font-bold transition-all hover:shadow-sm text-lg focus-visible:ring-2 focus-visible:ring-[#39B54A] focus-visible:ring-offset-2 outline-none group">
                  Prendre rendez-vous <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </div>
            
            <div className="flex-1 w-full relative hidden lg:block">
              <div className="relative w-[90%] aspect-[4/5] ml-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#39B54A]/20 to-transparent rounded-[3rem] transform rotate-3 scale-105 transition-transform duration-700"></div>
                <img 
                  src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=2000&auto=format&fit=crop" 
                  alt="Produits cosmétiques naturels" 
                  className="absolute inset-0 w-full h-full object-cover rounded-[3rem] shadow-2xl"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce-slow">
                  <div className="w-12 h-12 bg-[#F5F3EE] rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-[#39B54A]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Certification</p>
                    <p className="text-lg font-bold text-[#2C2C2C]">100% Bio & Naturel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-[#F5F3EE] rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-[#39B54A]" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-3">100% Naturel</h3>
              <p className="text-gray-500 leading-relaxed">Des ingrédients purs, bruts et non raffinés, sélectionnés avec la plus grande exigence.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-[#F5F3EE] rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[#39B54A]" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-3">Fabrication Artisanale</h3>
              <p className="text-gray-500 leading-relaxed">Chaque produit est formulé et préparé à la main avec passion et savoir-faire.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-[#F5F3EE] rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-[#39B54A]" />
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-3">Expertise Naturopathique</h3>
              <p className="text-gray-500 leading-relaxed">Une approche holistique pour des soins qui respectent l'équilibre de votre peau.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rôle du Naturopathe Section */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-[#39B54A] font-bold tracking-widest uppercase text-sm mb-4 block">Naturopathie</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-10">Quel est le rôle d’un naturopathe ?</h2>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-left bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-gray-100">
            <p>
              Le naturopathe accompagne chaque personne dans l’amélioration de sa santé et de son bien-être en utilisant des méthodes naturelles comme l’alimentation, la phytothérapie, la gestion du stress, les soins corporels ou encore les soins capillaires. Il prend également en compte certaines problématiques spécifiques comme les troubles liés à la féminité (cycles menstruels irréguliers, fatigue hormonale, troubles de la ménopause, etc.).
            </p>
            <p>
              Il ne remplace pas un médecin, mais agit en complément pour prévenir les déséquilibres et renforcer les capacités d’auto-régulation du corps.
            </p>
            <p className="font-medium text-[#39B54A]">
              Son approche est globale : il prend en compte vos habitudes, votre rythme de vie, votre environnement et vos objectifs. L’objectif est de vous proposer un accompagnement sur mesure, pour agir à la source de vos troubles et vous aider à retrouver un équilibre durable.
            </p>
          </div>
        </div>
      </section>

      {/* Spécialités Section (Ultra Prominent) */}
      <section className="py-28 bg-[#39B54A] relative overflow-hidden">
        {/* Abstract decorative shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
              Expertise
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">Mes Spécialités</h2>
            <p className="text-2xl text-white/90 max-w-2xl mx-auto font-light">
              Des méthodes naturelles sur-mesure pour rééquilibrer votre corps et votre esprit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-10">
            {/* Relaxation */}
            <div className="md:col-span-2 lg:col-span-2 bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl hover:-translate-y-3 transition-all duration-500 group flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#FAFAF8] rounded-3xl flex items-center justify-center mb-8 group-hover:bg-[#39B54A] group-hover:text-white transition-colors duration-500">
                <Wind className="w-10 h-10 text-[#39B54A] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-5">Relaxation & Stress</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Décontraction musculaire, respiration, massothérapie et méditation aux huiles essentielles pour retrouver calme et sérénité au quotidien.
              </p>
            </div>

            {/* Alimentation */}
            <div className="md:col-span-2 lg:col-span-2 bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl hover:-translate-y-3 transition-all duration-500 group flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#FAFAF8] rounded-3xl flex items-center justify-center mb-8 group-hover:bg-[#39B54A] group-hover:text-white transition-colors duration-500">
                <Apple className="w-10 h-10 text-[#39B54A] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-5">Rééquilibrage Alimentaire</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Mieux manger et perdre du poids sans frustration. Conseils simples et utilisation de l'hydrologie pour soutenir le processus.
              </p>
            </div>

            {/* Capillaire */}
            <div className="md:col-span-2 lg:col-span-2 bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl hover:-translate-y-3 transition-all duration-500 group flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#FAFAF8] rounded-3xl flex items-center justify-center mb-8 group-hover:bg-[#39B54A] group-hover:text-white transition-colors duration-500">
                <Droplets className="w-10 h-10 text-[#39B54A] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-5">Santé Capillaire</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Comprendre les causes profondes pour une chevelure saine. Diagnostic, routine et soins aux poudres de plantes.
              </p>
            </div>

            {/* Peau */}
            <div className="md:col-span-2 lg:col-span-2 lg:col-start-2 bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl hover:-translate-y-3 transition-all duration-500 group flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#FAFAF8] rounded-3xl flex items-center justify-center mb-8 group-hover:bg-[#39B54A] group-hover:text-white transition-colors duration-500">
                <Sun className="w-10 h-10 text-[#39B54A] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-5">Diagnostic de Peau</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Boutons, sécheresse, perte d’éclat... Des conseils ciblés et une approche naturelle pour révéler l’éclat de votre visage.
              </p>
            </div>

            {/* Réflexologie */}
            <div className="md:col-span-2 lg:col-span-2 md:col-start-2 lg:col-start-auto bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl hover:-translate-y-3 transition-all duration-500 group flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#FAFAF8] rounded-3xl flex items-center justify-center mb-8 group-hover:bg-[#39B54A] group-hover:text-white transition-colors duration-500">
                <Footprints className="w-10 h-10 text-[#39B54A] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-5">Réflexologie</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Stimulation des zones réflexes pour relancer l’énergie, apaiser les tensions et harmoniser le corps. Un vrai moment de relâchement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[#39B54A] font-bold tracking-widest uppercase text-sm mb-2 block">Nos Soins</span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C]">Favoris de la boutique</h2>
            </div>
            <Link href="/boutique" className="hidden md:flex items-center gap-2 text-[#39B54A] font-bold hover:underline">
              Voir tout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Link href={`/produit/${product.id}`}>
                  <div className="relative h-64 bg-[#F5F3EE] overflow-hidden cursor-pointer">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e: any) => { e.target.src = 'https://via.placeholder.com/400x400/F5F3EE/4A5C3A?text=DNC'; }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-[#39B54A] text-xs font-bold px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-2" aria-label="5 étoiles sur 5">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" aria-hidden="true" />)}
                    </div>
                    <Link href={`/produit/${product.id}`} className="focus-visible:ring-2 focus-visible:ring-[#39B54A] outline-none rounded-md">
                      <h3 className="font-bold text-[#2C2C2C] mb-2 leading-tight hover:text-[#39B54A] transition-colors cursor-pointer text-sm line-clamp-2 min-h-[2.5rem]">
                        {product.name}
                      </h3>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-[#39B54A]">{product.price.toFixed(2)} €</span>
                    <button
                      onClick={() => {
                        addItem({ productId: product.id, name: product.name, price: product.price, quantity: 1, imageUrl: product.imageUrl });
                        alert('Ajouté au panier\u00A0!');
                      }}
                      className="w-10 h-10 bg-[#FAFAF8] border border-gray-200 rounded-full flex items-center justify-center text-[#39B54A] hover:bg-[#39B54A] hover:text-white hover:border-[#39B54A] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#39B54A] outline-none"
                      title="Ajouter au panier"
                      aria-label={`Ajouter ${product.name} au panier`}
                    >
                      <ShoppingCart className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/boutique" className="inline-flex items-center gap-2 text-[#4A5C3A] font-bold hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4A5C3A] outline-none rounded-md">
              Voir toute la boutique <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4A5C3A] text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Voir un naturopathe à Valenciennes</h2>
          <p className="text-xl text-white/80 mb-10">
            Vous tombez souvent malade ou attrapez facilement des infections saisonnières ? Des solutions naturelles peuvent soutenir vos défenses.
          </p>
          <Link href="/reservations" className="inline-flex items-center justify-center gap-2 bg-white text-[#4A5C3A] px-10 py-4 rounded-xl font-bold hover:bg-[#F5F3EE] transition-all hover:shadow-lg text-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4A5C3A] outline-none">
            Réserver une consultation
          </Link>
        </div>
      </section>

    </main>
  );
}
