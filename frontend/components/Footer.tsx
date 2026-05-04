import React from 'react';
import Link from 'next/link';
import { Leaf, Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 pr-0 md:pr-12">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">Dany Natural Concept</span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Expertise en naturopathie et cosmétique naturelle artisanale. Révélez votre beauté originelle avec nos soins formulés avec passion au cœur de Valenciennes.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="mailto:contact@danynaturalconcept.org" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 font-serif">Découvrir</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-gold transition-colors">Accueil</Link></li>
              <li><Link href="/boutique" className="text-gray-400 hover:text-gold transition-colors">Boutique & Produits</Link></li>
              <li><Link href="/reservations" className="text-gray-400 hover:text-gold transition-colors">Prendre Rendez-vous</Link></li>
              <li><Link href="/apropos" className="text-gray-400 hover:text-gold transition-colors">Notre Philosophie</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-gold transition-colors">Nous Contacter</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 font-serif">Informations</h4>
            <ul className="space-y-4">
              <li><Link href="/cgu" className="text-gray-400 hover:text-gold transition-colors">Conditions Générales</Link></li>
              <li><Link href="/mentions-legales" className="text-gray-400 hover:text-gold transition-colors">Mentions Légales</Link></li>
              <li><Link href="/cookies" className="text-gray-400 hover:text-gold transition-colors">Politique de Cookies</Link></li>
              <li className="pt-4 mt-4 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  <strong className="text-white block mb-1">Cabinet Naturopathie</strong>
                  Valenciennes, France<br/>
                  Sur rendez-vous uniquement
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dany Natural Concept. Tous droits réservés.</p>
          <div className="flex items-center gap-2">
            <span>Fait avec passion et nature</span>
            <Leaf className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>
    </footer>
  );
}
