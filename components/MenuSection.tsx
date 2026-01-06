
import React from 'react';
import { MENU_DATA } from '../constants';
import { MenuItem, MenuCategory } from '../types';

const CATEGORY_IMAGES: Record<string, string> = {
  entradas_frangos: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1920&auto=format&fit=crop',
  compostos: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1920&auto=format&fit=crop',
  peixes: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1920&auto=format&fit=crop',
  hamburgueres: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1920&auto=format&fit=crop',
  guarnicoes: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1920&auto=format&fit=crop',
  sopas: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1920&auto=format&fit=crop',
};

const MenuItemRow: React.FC<{ item: MenuItem, onAdd: (item: MenuItem) => void }> = ({ item, onAdd }) => (
  <div className="flex justify-between items-center py-6 border-b border-white/5 hover:bg-white/5 px-6 transition-all duration-300 group rounded-xl">
    <div className="flex flex-col flex-1 mr-4">
      <div className="flex items-center gap-3">
        <span className="text-white font-medium text-lg lg:text-2xl tracking-tight group-hover:text-gold transition-colors">
          {item.name}
        </span>
        {item.popular && (
          <span className="text-[8px] bg-gold text-black px-2 py-0.5 rounded-sm font-black uppercase tracking-widest">
            REI
          </span>
        )}
      </div>
      {item.description && (
        <span className="text-gray-400 text-[11px] mt-1 font-light italic max-w-lg leading-relaxed">
          {item.description}
        </span>
      )}
    </div>
    <div className="flex items-center gap-6">
      <span className="text-gold font-black text-xl lg:text-2xl tabular-nums">
        {item.price}
      </span>
      <button 
        onClick={() => onAdd(item)}
        className="w-10 h-10 bg-gold/10 text-gold border border-gold/30 rounded-full flex items-center justify-center hover:bg-gold hover:text-black hover:scale-110 transition-all shadow-xl active:scale-90"
      >
        <i className="fa-solid fa-plus text-xs"></i>
      </button>
    </div>
  </div>
);

const CategoryBlock: React.FC<{ category: MenuCategory, onAddToCart: (item: MenuItem) => void }> = ({ category, onAddToCart }) => (
  <section id={category.id} className="relative min-h-screen flex flex-col items-center justify-center py-32 overflow-hidden bg-black">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-1000 scale-100"
      style={{ 
        backgroundImage: `url('${CATEGORY_IMAGES[category.id] || CATEGORY_IMAGES.entradas_frangos}')`,
        filter: 'brightness(0.3) contrast(1.1)'
      }}
    ></div>
    
    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

    <div className="container mx-auto px-6 max-w-5xl relative z-10">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="font-display text-4xl md:text-7xl text-white mb-6 uppercase tracking-tight">
          {category.title}
        </h2>
        <div className="menu-underline !w-16 shadow-[0_0_20px_rgba(212,175,55,0.7)]"></div>
        <p className="text-gray-300 text-sm md:text-lg font-medium leading-relaxed max-w-2xl mx-auto mt-6 drop-shadow-xl">
          {category.description}
        </p>
      </div>

      {/* Caixa Glassmorphism Ultra Transparente */}
      <div className="relative p-2 md:p-8 rounded-[3rem] overflow-hidden bg-white/[0.03] backdrop-blur-3xl border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
        <div className="grid gap-1">
          {category.items.map((item, idx) => (
            <MenuItemRow key={idx} item={item} onAdd={onAddToCart} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const MenuSection: React.FC<{ onAddToCart: (item: MenuItem) => void }> = ({ onAddToCart }) => {
  return (
    <div id="cardapio" className="bg-black">
      {MENU_DATA.map((category) => (
        <CategoryBlock key={category.id} category={category} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default MenuSection;
