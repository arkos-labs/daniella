import React from 'react';
import Link from 'next/link';
import { Leaf, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A18] text-white pt-32 pb-12 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2D4A1E]/20 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-8 group">
              <img 
                src="/logo-dnc.png" 
                alt="Dany Natural Concept" 
                className="h-48 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/50 text-xl font-light leading-relaxed mb-10 max-w-md">
              Une expertise rare en <span className="text-white font-medium italic">naturopathie</span> et cosmétique artisanale pour magnifier votre nature profonde au cœur de Valenciennes.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/danynaturalconcept/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#C9A96E] hover:border-[#C9A96E] transition-all duration-500">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/soinsnaturelsDNC" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#C9A96E] hover:border-[#C9A96E] transition-all duration-500">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="mailto:naturalconcept.france@yahoo.fr" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#C9A96E] hover:border-[#C9A96E] transition-all duration-500">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-[#C9A96E]">Navigation</h4>
            <ul className="space-y-6">
              <li><Link href="/" className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Accueil</Link></li>
              <li><Link href="/collection" className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Collection</Link></li>
              <li><Link href="/blog" className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Blog</Link></li>
              <li><Link href="/consultations" className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Consultations</Link></li>
              <li><Link href="/faq" className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">FAQ</Link></li>
              <li><Link href="/a-propos" className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">À Propos</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-[#C9A96E]">Légal</h4>
            <ul className="space-y-6">
              <li><Link href="/cgu" className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Conditions</Link></li>
              <li><Link href="/mentions-legales" className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Mentions</Link></li>
              <li><Link href="/cookies" className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Cookies</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-[#C9A96E]">Le Cabinet</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-[#C9A96E] shrink-0" />
                <p className="text-white/60 text-sm leading-relaxed">
                  Valenciennes, France<br />
                  Sur rendez-vous uniquement
                </p>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-[#C9A96E] shrink-0" />
                <p className="text-white/60 text-sm">+33 6 XX XX XX XX</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.25em] text-white/20">
          <p>&copy; {new Date().getFullYear()} Dany Natural Concept. Excellence et Nature.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Confidentialité</span>
            <span className="w-1 h-1 rounded-full bg-[#C9A96E]"></span>
            <span className="hover:text-white transition-colors cursor-pointer">Accessibilité</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
