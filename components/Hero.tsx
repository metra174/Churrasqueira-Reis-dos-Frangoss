
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="h-screen relative flex items-center justify-center overflow-hidden bg-black">
      {/* Imagem de Fundo Premium - Sem distorções ou elementos fantasmas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1594221708779-9482d5938146?q=80&w=1920&auto=format&fit=crop" 
          alt="Frango Grelhado Suculento"
          className="w-full h-full object-cover brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        {/* Banner de Entrega Glassmorphism */}
        <div className="mb-10 animate-fade-in-up">
           <div className="inline-flex items-center gap-3 px-6 py-2 border border-white/10 rounded-full bg-black/40 backdrop-blur-xl shadow-2xl">
             <span className="text-[10px] text-white/90 font-bold tracking-[0.2em] uppercase">
               🚚 Entrega Maianga: <span className="text-gold font-black">{CONTACT_INFO.delivery.maianga}</span>
             </span>
           </div>
        </div>

        <span className="text-gold font-bold tracking-[0.6em] uppercase text-[10px] mb-6 block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          O Melhor Sabor da Brasa em Luanda
        </span>
        
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white mb-8 leading-tight animate-fade-in-up drop-shadow-2xl" style={{ animationDelay: '0.2s' }}>
          Reis dos <br />
          <span className="text-gold">Frangos</span>
        </h1>

        <div className="menu-underline !w-20 mb-10 animate-fade-in-up shadow-[0_0_30px_rgba(212,175,55,0.4)]" style={{ animationDelay: '0.4s' }}></div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#cardapio" 
            className="bg-gold text-black px-12 py-4 font-black uppercase text-sm tracking-widest transition-all hover:bg-white hover:text-gold hover:scale-105 shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
          >
            Ver Cardápio
          </a>
          <a 
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 border-b border-gold/50 pb-1 font-bold uppercase text-xs tracking-widest hover:text-gold transition-all"
          >
            Fazer Pedido Agora
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gold/40 z-10">
        <i className="fa-solid fa-chevron-down text-xl"></i>
      </div>
    </section>
  );
};

export default Hero;
