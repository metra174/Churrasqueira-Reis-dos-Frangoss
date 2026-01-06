
import React from 'react';
import { FEATURED_DISHES, CONTACT_INFO } from '../constants';

const FeaturedDishes: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#111]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=80')" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">As Estrelas da Casa</span>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-6">Sugestões do Rei</h2>
          <div className="menu-underline"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURED_DISHES.map((dish, index) => (
            <div key={index} className="group bg-white/[0.02] backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-gold/40 transition-all duration-500 shadow-3xl">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <span className="absolute top-6 left-6 bg-gold text-black text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  {dish.tag}
                </span>
              </div>
              <div className="p-10">
                <h3 className="text-white font-display text-2xl mb-2 group-hover:text-gold transition-colors">{dish.name}</h3>
                <div className="flex items-center justify-between mt-8">
                  <span className="text-gold font-black text-2xl">{dish.price}</span>
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all shadow-xl"
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
