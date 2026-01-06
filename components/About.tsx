
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="relative py-32 overflow-hidden border-t border-gray-900 bg-[#151515]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30 pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-transparent to-[#111]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-gray-800">
              {/* Imagem Atualizada para evitar erro de carregamento */}
              <img 
                src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=1000&auto=format&fit=crop" 
                alt="A Arte do Churrasco" 
                className="w-full h-[600px] object-cover transition-all duration-700 brightness-90 hover:brightness-110"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-gold/30 rounded-2xl -z-10 blur-sm"></div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Legado & Paixão</span>
            <h2 className="font-display text-5xl md:text-6xl mb-8 text-white leading-tight">
              A Nobreza em Cada <span className="text-gold">Grelhado.</span>
            </h2>
            <div className="w-20 h-1 bg-gold mb-10 shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>
            <p className="text-gray-200 text-lg mb-10 leading-relaxed font-light drop-shadow-md">
              Desde 2010, a Churrasqueira Reis dos Frangos redefine o conceito de churrasco em Luanda. Não somos apenas um restaurante; somos os guardiões de um tempero que atravessa gerações.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4 p-8 bg-zinc-900/90 backdrop-blur-md rounded-2xl border border-gold/10 hover:border-gold/40 transition-all shadow-xl">
                <i className="fa-solid fa-crown text-gold text-2xl"></i>
                <h4 className="font-bold text-white text-xl">Qualidade Real</h4>
                <p className="text-gray-400 text-sm font-light">Cortes selecionados diariamente para garantir a máxima suculência.</p>
              </div>
              <div className="space-y-4 p-8 bg-zinc-900/90 backdrop-blur-md rounded-2xl border border-gold/10 hover:border-gold/40 transition-all shadow-xl">
                <i className="fa-solid fa-fire-burner text-gold text-2xl"></i>
                <h4 className="font-bold text-white text-xl">Brasa Perfeita</h4>
                <p className="text-gray-400 text-sm font-light">Carvão vegetal selecionado para o aroma defumado autêntico.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
