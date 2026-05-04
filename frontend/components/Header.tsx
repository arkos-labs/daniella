import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCart } from '../hooks/useCart';
import { ShoppingBag, Menu, X, Leaf, User } from 'lucide-react';

export default function Header() {
  const { items } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Boutique', path: '/boutique' },
    { name: 'Réservations', path: '/reservations' },
    { name: 'À Propos', path: '/apropos' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm py-3 transition-all duration-300">
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img 
            src="/logo.png" 
            alt="Dany Natural Concept Logo" 
            className="h-14 transition-all duration-300" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => {
            const isActive = router.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                href={link.path}
                className={`text-sm font-bold uppercase tracking-wider transition-all duration-200 relative
                  ${isActive ? 'text-[#39B54A]' : 'text-gray-500 hover:text-[#2C2C2C]'}
                `}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#39B54A]"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Cart, Login & Mobile Toggle */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/login" className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#39B54A] transition-colors mr-2 group">
            <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-[#FAFAF8] text-[#2C2C2C] group-hover:bg-[#39B54A] group-hover:text-white">
              <User className="w-5 h-5" />
            </div>
            <span className="hidden lg:block uppercase tracking-wider">Connexion</span>
          </Link>

          <Link href="/panier" className="relative group">
            <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-[#FAFAF8] text-[#2C2C2C] group-hover:bg-[#39B54A] group-hover:text-white">
              <ShoppingBag className="w-5 h-5" />
            </div>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#F2A900] text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-md">
                {cartCount}
              </span>
            )}
          </Link>

          <button 
            className="lg:hidden w-12 h-12 rounded-full flex items-center justify-center transition-colors bg-[#FAFAF8] text-[#2C2C2C]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`p-4 rounded-xl text-lg font-bold text-center ${router.pathname === link.path ? 'bg-cream text-primary' : 'text-charcoal hover:bg-gray-50'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-gray-100 my-2"></div>
          <Link 
            href="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 p-4 rounded-xl text-lg font-bold text-center bg-[#39B54A] text-white hover:bg-[#278E35]"
          >
            <User className="w-5 h-5" />
            Espace Client / Admin
          </Link>
        </div>
      )}
    </header>
  );
}
