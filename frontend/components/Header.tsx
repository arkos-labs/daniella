import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCart } from '../hooks/useCart';
import { ShoppingBag, Menu, X, Leaf, User, LogOut } from 'lucide-react';

function Header() {
  const { items } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'admin' | 'client' | null>(null);
  const router = useRouter();
  const isDashboard = router.pathname?.startsWith('/admin') || router.pathname?.startsWith('/client');

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Check if user is logged in (mock)
    const checkAuth = () => {
      const token = localStorage.getItem('dnc_auth_token');
      const role = localStorage.getItem('user_role') as 'admin' | 'client';
      setIsLoggedIn(!!token);
      setUserRole(role || 'client');
    };

    window.addEventListener('scroll', handleScroll);
    checkAuth();
    
    // Listen for storage changes to sync across tabs
    window.addEventListener('storage', checkAuth);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('dnc_auth_token');
    localStorage.removeItem('user_role');
    setIsLoggedIn(false);
    router.push('/');
  };

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Boutique', path: '/boutique' },
    { name: 'Réservations', path: '/reservations' },
    { name: 'À Propos', path: '/apropos' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-md h-20 md:h-[121.1px]' 
        : 'bg-white/60 backdrop-blur-md border-b border-white/10 h-20 md:h-[121.1px]'
    }`}>
      <div className="w-full h-full px-2 md:px-6 flex items-center justify-between">
        
        {/* Logo - Taille adaptée pour mobile, XXL pour desktop */}
        <div className="relative z-10 w-32 md:w-48 h-full flex items-center">
          <Link href="/" className="absolute top-1 md:top-[-19px] left-0 group">
            <img 
              src="/logo-dnc.png" 
              alt="Dany Natural Concept" 
              className="h-16 md:h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks
            .filter(link => !isLoggedIn || ['Boutique', 'Réservations', 'Contact'].includes(link.name))
            .map(link => {
              const isActive = router.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  href={link.path}
                  className={`text-lg font-bold uppercase tracking-[0.1em] transition-all duration-300 relative group
                    ${isActive ? 'text-[#2D4A1E]' : 'text-[#2D4A1E]/60 hover:text-[#2D4A1E]'}
                  `}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#C9A96E] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <Link href="/login" className="hidden md:flex items-center justify-center w-14 h-14 rounded-full border border-[#2D4A1E]/10 text-[#2D4A1E] hover:bg-[#2D4A1E] hover:text-white transition-all duration-300">
              <User className="w-6 h-6" />
            </Link>
          ) : (
            <div className="flex items-center gap-3">
              <Link 
                href={userRole === 'admin' ? '/admin' : '/client'} 
                className="w-14 h-14 rounded-full border border-[#2D4A1E]/10 text-[#2D4A1E] flex items-center justify-center hover:bg-[#2D4A1E] hover:text-white transition-all duration-300"
              >
                <User className="w-6 h-6" />
              </Link>
              <button 
                onClick={handleLogout}
                className="w-14 h-14 rounded-full border border-red-100 text-red-300 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          )}

          <Link href="/panier" className="relative w-14 h-14 rounded-full bg-[#2D4A1E] text-white flex items-center justify-center shadow-lg hover:bg-[#1A1A18] transition-all duration-300 hover:-translate-y-0.5">
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-6 h-6 bg-[#C9A96E] text-white text-[11px] font-bold flex items-center justify-center rounded-full shadow-md animate-pulse">
                {cartCount}
              </span>
            )}
          </Link>
          
          {!isDashboard && (
            <button 
              className="lg:hidden w-14 h-14 rounded-full border border-[#2D4A1E]/10 text-[#2D4A1E] flex items-center justify-center mr-3"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl shadow-2xl border-t border-gray-100 py-10 px-6 flex flex-col gap-6 animate-reveal-up">
          {navLinks
            .filter(link => !isLoggedIn || ['Boutique', 'Réservations', 'Contact'].includes(link.name))
            .map(link => (
              <Link 
                key={link.name} 
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-serif text-center ${router.pathname === link.path ? 'text-[#2D4A1E]' : 'text-gray-400'}`}
              >
                {link.name}
              </Link>
            ))}
          <div className="h-px bg-gray-100 my-4"></div>
          <Link 
            href="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary w-full"
          >
            Espace Client
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
