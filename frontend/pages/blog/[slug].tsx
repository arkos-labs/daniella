import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { MOCK_ARTICLES } from '../../lib/blogData';
import { ArrowLeft, Share2, Clock, Calendar, CheckCircle2 } from 'lucide-react';

export default function BlogArticle() {
  const router = useRouter();
  const { slug } = router.query;
  const article = MOCK_ARTICLES.find(a => a.slug === slug);

  if (!article) return null;

  return (
    <main className="min-h-screen bg-white">
      <Head>
        <title>{article.title} | Blog DNC</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={article.keywords.join(', ')} />
      </Head>

      <Header />

      <article className="pt-44 pb-32">
        {/* Article Header */}
        <div className="container mx-auto px-6 max-w-4xl mb-20 text-center">
          <button onClick={() => router.push('/blog')} className="group flex items-center gap-3 text-gray-400 hover:text-[#2D4A1E] transition-colors mb-16 uppercase text-[10px] font-bold tracking-widest mx-auto">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour au blog
          </button>
          
          <div className="flex items-center justify-center gap-8 mb-10 text-[10px] font-bold uppercase tracking-widest text-[#C9A96E]">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {article.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 8 min de lecture</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif text-[#2C2C28] mb-12 leading-tight">
            {article.h1}
          </h1>

          <div className="flex items-center justify-center gap-4">
            <img src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1887&auto=format&fit=crop" alt="Daniella Adabra" className="w-12 h-12 rounded-full object-cover border-2 border-[#C9A96E]/20" />
            <div className="text-left">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-[#2D4A1E]">Daniella Adabra</span>
              <span className="block text-[10px] text-gray-400 uppercase tracking-widest">Fondatrice & Naturopathe</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="container mx-auto px-6 max-w-6xl mb-24">
          <div className="aspect-[21/9] rounded-[4rem] overflow-hidden shadow-2xl">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-6 max-w-3xl">
          <div 
            className="prose prose-xl prose-stone max-w-none prose-headings:font-serif prose-headings:text-[#2C2C28] prose-p:text-gray-500 prose-p:font-light prose-p:leading-relaxed blog-content-custom"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Subscription Box */}
          <div className="mt-32 p-12 bg-[#F8F5EE] rounded-[4rem] relative overflow-hidden border border-[#2D4A1E]/5">
            <div className="relative z-10">
              <h3 className="text-3xl font-serif text-[#2C2C28] mb-6">Cet article vous a plu ?</h3>
              <p className="text-gray-500 font-light mb-10 max-w-md">Inscrivez-vous à notre newsletter pour recevoir nos prochains rituels et conseils exclusifs.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input type="email" placeholder="Votre email" className="flex-1 px-8 py-5 rounded-full bg-white border-none focus:ring-2 focus:ring-[#2D4A1E]/10 outline-none text-sm" />
                <button className="btn-gold px-10 whitespace-nowrap">S'abonner</button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
