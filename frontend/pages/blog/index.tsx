import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { MOCK_ARTICLES } from '../../lib/blogData';
import { ArrowRight, Calendar, User } from 'lucide-react';

export default function BlogList() {
  return (
    <main className="min-h-screen bg-[#F8F5EE]">
      <Head>
        <title>Le Blog Naturel | Dany Natural Concept</title>
        <meta name="description" content="Découvrez nos conseils de naturopathie, guides de soins naturels et secrets de beauté africains sur le blog DNC." />
      </Head>

      <Header />

      <section className="pt-44 pb-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="section-tag mb-6">L'Atelier des Savoirs</span>
            <h1 className="text-6xl md:text-7xl font-serif text-[#2C2C28] mb-8">Journal de la <span className="italic text-gradient">Beauté</span> Holistique</h1>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Plongez dans l'univers de la naturopathie et des soins ancestraux pour nourrir votre corps et votre esprit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {MOCK_ARTICLES.map((article, idx) => (
              <article key={article.slug} className="group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 animate-reveal-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <Link href={`/blog/${article.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                </Link>
                
                <div className="p-10">
                  <div className="flex items-center gap-6 mb-6">
                    <span className="flex items-center gap-2 text-[10px] font-bold text-[#C9A96E] uppercase tracking-widest">
                      <Calendar className="w-3.5 h-3.5" /> {article.date}
                    </span>
                    <span className="flex items-center gap-2 text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                      <User className="w-3.5 h-3.5" /> Par Daniella
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-serif text-[#2C2C28] mb-6 group-hover:text-[#2D4A1E] transition-colors leading-tight">
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  </h2>
                  
                  <p className="text-gray-400 font-light text-sm mb-10 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <Link href={`/blog/${article.slug}`} className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#2D4A1E] hover:text-[#C9A96E] transition-all">
                    Lire l'article <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
