
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="h-screen relative flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=80" 
          alt="Grelhado Premium"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-dark-900/80"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        {/* Banner de Entrega Flutuante */}
        <div className="mb-12 animate-fade-in-up">
           <div className="inline-flex items-center gap-3 px-6 py-2 border border-gold/30 rounded-full bg-black/60 backdrop-blur-md">
             <span className="text-[10px] text-white/80 font-bold tracking-widest uppercase">
               🚚 Taxa Maianga: <span className="text-gold">{CONTACT_INFO.delivery.maianga}</span> | Outros: <span className="text-gold">{CONTACT_INFO.delivery.others}</span>
             </span>
           </div>
        </div>

        <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs mb-6 block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          A Nobreza da Brasa em Luanda
        </span>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Sabor de <br />
          <span className="text-gold">Realeza</span>
        </h1>
        <div className="menu-underline !w-24 mb-10 animate-fade-in-up shadow-[0_0_20px_rgba(212,175,55,0.3)]" style={{ animationDelay: '0.4s' }}></div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#cardapio" 
            className="bg-gold text-black px-12 py-4 font-black uppercase text-sm tracking-widest transition-all hover:bg-white hover:text-gold hover:scale-105 active:scale-95 shadow-2xl"
          >
            Explorar Menu
          </a>
          <a 
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 border-b-2 border-gold pb-1 font-bold uppercase text-sm tracking-widest hover:text-gold transition-all"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-gold opacity-70">
        <i className="fa-solid fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;
