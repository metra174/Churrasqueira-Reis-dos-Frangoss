
import React, { useState, useEffect } from 'react';
import { MENU_DATA } from '../constants';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/10 shadow-2xl' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="font-display font-black text-2xl text-gold tracking-widest leading-none">REIS DOS FRANGOS</span>
          <span className="text-[9px] text-gray-500 tracking-[0.4em] font-medium uppercase mt-1">Sabor de Realeza</span>
        </div>

        <nav className="hidden xl:flex items-center gap-6 overflow-x-auto no-scrollbar max-w-[60%]">
          <a href="#inicio" className="text-[10px] font-bold uppercase tracking-widest text-white hover:text-gold transition-colors whitespace-nowrap">Início</a>
          {MENU_DATA.map(cat => (
            <a key={cat.id} href={`#${cat.id}`} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-gold transition-colors whitespace-nowrap">
              {cat.title}
            </a>
          ))}
          <a href="#contato" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-gold transition-colors whitespace-nowrap">Contato</a>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenCart}
            className="relative flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-gold hover:text-gold transition-all bg-black/20 backdrop-blur-md"
          >
            <i className="fa-solid fa-cart-shopping text-lg"></i>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold text-black text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
          <button className="lg:hidden text-gold">
            <i className="fa-solid fa-bars-staggered text-2xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
