import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Mail, Lock, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login request
    setTimeout(() => {
      setIsLoading(false);
      // Fake redirect to a dashboard (could be /admin or /compte based on user role later)
      alert("Connexion réussie ! (Simulation)");
      router.push('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center p-4">
      <Head>
        <title>Connexion | Dany Natural Concept</title>
      </Head>

      <div className="w-full max-w-5xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100 min-h-[600px]">
        
        {/* Left Side: Branding / Image */}
        <div className="md:w-5/12 bg-gradient-to-br from-[#39B54A] to-[#278E35] p-12 text-white flex flex-col justify-between relative overflow-hidden hidden md:flex">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
          
          <div className="relative z-10">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
              <img src="/logo.png" alt="DNC Logo" className="h-16 mb-8 drop-shadow-md brightness-0 invert" />
            </Link>
            <h2 className="text-4xl font-serif mb-6 leading-tight">
              Bienvenue dans <br /> votre espace.
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Gérez vos commandes, suivez vos réservations naturopathiques et accédez à vos conseils personnalisés.
            </p>
          </div>

          <div className="relative z-10 mt-12">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <p className="italic text-white/90">
                "La nature possède toutes les réponses, il suffit de savoir l'écouter."
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="md:w-7/12 p-8 md:p-16 flex flex-col justify-center bg-white relative">
          <button onClick={() => router.push('/')} className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-[#39B54A] transition-colors md:hidden">
            <ArrowLeft className="w-4 h-4" /> Retour
          </button>

          <div className="max-w-md w-full mx-auto">
            <div className="text-center md:text-left mb-10 mt-8 md:mt-0">
              <h1 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-2">Se connecter</h1>
              <p className="text-gray-500">Accédez à votre tableau de bord client ou administrateur.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="email">Adresse Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-11 pr-4 py-4 bg-[#FAFAF8] border border-gray-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-[#39B54A] focus:border-transparent transition-all outline-none"
                    placeholder="vous@exemple.com"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-bold text-gray-700" htmlFor="password">Mot de passe</label>
                  <a href="#" className="text-sm font-bold text-[#39B54A] hover:underline">Oublié ?</a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-11 pr-4 py-4 bg-[#FAFAF8] border border-gray-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-[#39B54A] focus:border-transparent transition-all outline-none"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-[#39B54A] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#278E35] hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Se connecter <ArrowRight className="w-5 h-5" /></>
                )}
              </button>
            </form>

            <div className="mt-10 text-center">
              <p className="text-gray-500 mb-6">
                Nouveau sur Dany Natural Concept ?{' '}
                <a href="#" className="font-bold text-[#39B54A] hover:underline">Créer un compte</a>
              </p>
              
              {/* Test Buttons for Dev */}
              <div className="pt-6 border-t border-gray-100 flex gap-4 justify-center">
                <button onClick={() => router.push('/admin')} className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-lg font-bold transition-colors">
                  🔧 Test Admin
                </button>
                <button onClick={() => router.push('/client')} className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-lg font-bold transition-colors">
                  👤 Test Client
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
