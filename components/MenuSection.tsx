
import React from 'react';
import { MENU_DATA } from '../constants';
import { MenuItem, MenuCategory } from '../types';

const CATEGORY_IMAGES: Record<string, string> = {
  entradas_frangos: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1920&q=80',
  compostos: 'https://images.unsplash.com/photo-1606728035253-49df5915eaef?auto=format&fit=crop&w=1920&q=80',
  peixes: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1920&q=80',
  hamburgueres: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1920&q=80',
  guarnicoes: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1920&q=80',
  sopas: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1920&q=80',
};

const MenuItemRow: React.FC<{ item: MenuItem, onAdd: (item: MenuItem) => void }> = ({ item, onAdd }) => (
  <div className="flex justify-between items-center py-5 border-b border-white/10 hover:bg-white/5 px-6 transition-all duration-300 group rounded-xl">
    <div className="flex flex-col flex-1 mr-4">
      <div className="flex items-center gap-3">
        <span className="text-white font-medium text-lg lg:text-2xl tracking-tight group-hover:text-gold transition-colors">
          {item.name}
        </span>
        {item.popular && (
          <span className="text-[9px] bg-gold text-black px-2 py-0.5 rounded-sm font-black uppercase tracking-widest shadow-[0_0_10px_rgba(212,175,55,0.4)]">
            Popular
          </span>
        )}
      </div>
      {item.description && (
        <span className="text-gray-300 text-xs mt-1.5 font-light italic max-w-lg leading-relaxed">
          {item.description}
        </span>
      )}
    </div>
    <div className="flex items-center gap-6">
      <span className="text-gold font-black text-xl lg:text-2xl tabular-nums whitespace-nowrap">
        {item.price}
      </span>
      <button 
        onClick={() => onAdd(item)}
        className="w-12 h-12 bg-gold text-black rounded-full flex items-center justify-center hover:bg-white hover:text-gold hover:scale-110 transition-all shadow-xl active:scale-90"
        title="Adicionar ao Carrinho"
      >
        <i className="fa-solid fa-cart-plus"></i>
      </button>
    </div>
  </div>
);

const CategoryBlock: React.FC<{ category: MenuCategory, onAddToCart: (item: MenuItem) => void }> = ({ category, onAddToCart }) => (
  <section id={category.id} className="relative min-h-screen flex flex-col items-center justify-center py-32 overflow-hidden border-b border-white/5">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: `url('${CATEGORY_IMAGES[category.id] || CATEGORY_IMAGES.entradas_frangos}')`,
        filter: 'brightness(0.55) saturate(1.2)'
      }}
    ></div>
    
    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
    <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>

    <div className="container mx-auto px-6 max-w-5xl relative z-10">
      <div className="text-center mb-16 animate-fade-in-up">
        <span className="text-gold font-bold uppercase tracking-[0.5em] text-[10px] bg-black/70 px-6 py-2 rounded-full border border-white/10 mb-6 inline-block backdrop-blur-md">
          REIS NO SABOR
        </span>
        <h2 className="font-display text-5xl md:text-8xl text-white mb-6 drop-shadow-2xl">
          {category.title}
        </h2>
        <div className="menu-underline !w-24 !h-1.5 shadow-[0_0_20px_rgba(212,175,55,0.6)]"></div>
        <p className="text-white text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mt-8 drop-shadow-lg bg-black/20 p-4 rounded-xl backdrop-blur-sm">
          {category.description}
        </p>
      </div>

      <div className="solid-panel p-4 md:p-12 rounded-[3rem] shadow-3xl bg-black/80">
        <div className="grid gap-2">
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
