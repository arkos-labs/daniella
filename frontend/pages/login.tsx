import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Mail, Lock, ArrowRight, ArrowLeft, Sparkles, Quote } from 'lucide-react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('dnc_auth_token', 'mock_token_123');
      localStorage.setItem('user_role', email.includes('admin') ? 'admin' : 'client');
      window.dispatchEvent(new Event('storage')); // Notify other components
      router.push(email.includes('admin') ? '/admin' : '/client');
    }, 1500);
  };

  const handleQuickLogin = (role: 'admin' | 'client') => {
    localStorage.setItem('dnc_auth_token', 'mock_token_123');
    localStorage.setItem('user_role', role);
    window.dispatchEvent(new Event('storage'));
    router.push(`/${role}`);
  };

  return (
    <main className="min-h-screen bg-[#F8F5EE] flex items-center justify-center pt-44 pb-32 px-6 relative overflow-hidden">
      <Head>
        <title>Connexion | Dany Natural Concept</title>
      </Head>

      {/* Decorative Blur */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#3D6228]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#e68d15]/10 rounded-full blur-[80px]"></div>

      <div className="w-full max-w-6xl bg-white rounded-[4rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-[#3fad28]/5 relative z-10 min-h-[700px]">
        
        {/* Left Side: Brand Narrative */}
        <div className="md:w-1/2 bg-[#29a52d] p-16 md:p-24 text-white flex flex-col justify-between relative overflow-hidden hidden md:flex">
          <div className="absolute inset-0 opacity-10 noise-bg pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10">
            <Link href="/" className="inline-block mb-16">
              <span className="text-3xl font-serif text-white tracking-tight">
                Dany<span className="italic text-[#e68d15] font-light">Natural</span>
              </span>
            </Link>
            <h2 className="text-5xl md:text-6xl font-serif mb-10 leading-[1.1]">
              Votre univers <br /> <span className="italic text-[#e68d15]">Holistique.</span>
            </h2>
            <p className="text-white/90 text-xl font-light leading-relaxed max-w-sm">
              Accédez à vos rituels personnalisés, suivez vos commandes et gérez vos prochaines séances avec Daniella.
            </p>
          </div>

          <div className="relative z-10">
            <div className="p-10 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10">
              <Quote className="w-8 h-8 text-[#e68d15]/40 mb-4" />
              <p className="italic text-white/80 font-serif text-lg leading-relaxed">
                "La nature possède toutes les réponses, il suffit de savoir l'écouter en conscience."
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Auth Form */}
        <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-white relative">
          <Link href="/" className="absolute top-12 left-12 flex items-center gap-3 text-gray-400 hover:text-[#3fad28] transition-colors group uppercase text-xs font-bold tracking-widest">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour à l'accueil
          </Link>

          <div className="max-w-md w-full mx-auto">
            <div className="mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#e68d15] mb-4 block">Espace Membre</span>
              <h1 className="text-4xl font-serif text-[#1a1a1a] mb-4">Se Connecter</h1>
              <p className="text-gray-400 font-light leading-relaxed">
                Ravis de vous revoir parmi nous. Connectez-vous pour continuer votre voyage.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 ml-6" htmlFor="email">Adresse Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-14 pr-8 py-5 bg-[#F8F5EE] border-none rounded-full focus:ring-2 focus:ring-[#3fad28] outline-none text-sm font-light transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between mb-1 px-6">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400" htmlFor="password">Mot de passe</label>
                  <a href="#" className="text-xs font-bold text-[#e68d15] uppercase tracking-widest hover:underline">Oublié ?</a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-14 pr-8 py-5 bg-[#F8F5EE] border-none rounded-full focus:ring-2 focus:ring-[#3fad28] outline-none text-sm font-light transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full py-5 group mt-4 shadow-xl shadow-[#3fad28]/20"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Se connecter <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
            </form>

            <div className="mt-12 text-center">
              <p className="text-sm font-light text-gray-400 mb-8">
                Pas encore de compte ?{' '}
                <a href="#" className="font-bold text-[#3fad28] hover:underline uppercase tracking-widest text-[10px] ml-2">S'inscrire</a>
              </p>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-gray-100 flex-1"></div>
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-gray-300">Test Modes</span>
                <div className="h-px bg-gray-100 flex-1"></div>
              </div>

              <div className="flex gap-4 justify-center">
                <button onClick={() => handleQuickLogin('admin')} className="text-xs font-bold uppercase tracking-widest border border-gray-100 text-gray-400 hover:border-[#3fad28] hover:text-[#3fad28] px-6 py-3 rounded-full transition-all">
                  Admin
                </button>
                <button onClick={() => handleQuickLogin('client')} className="text-xs font-bold uppercase tracking-widest border border-gray-100 text-gray-400 hover:border-[#3fad28] hover:text-[#3fad28] px-6 py-3 rounded-full transition-all">
                  Client
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
