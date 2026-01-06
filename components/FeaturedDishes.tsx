
import React from 'react';
import { FEATURED_DISHES, CONTACT_INFO } from '../constants';

const FeaturedDishes: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden border-t border-gray-900 bg-black">
      {/* Cinematic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-15 pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Sugestões do Rei</span>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-6">Pratos de Ouro</h2>
          <div className="menu-underline"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {FEATURED_DISHES.map((dish, index) => (
            <div key={index} className="group bg-dark-800/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-800 hover:border-gold transition-all duration-500 shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 to-transparent"></div>
                <span className="absolute top-4 left-4 bg-gold text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded">
                  {dish.tag}
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-white font-display text-2xl mb-4 group-hover:text-gold transition-colors">{dish.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-bold text-xl">{dish.price}</span>
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    className="w-10 h-10 bg-white/5 border border-gray-700 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
