
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="relative py-32 overflow-hidden border-t border-gray-900">
      {/* Immersive Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/80 to-dark-900"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1598214817158-54278794838b?auto=format&fit=crop&w=1000&q=80" 
                alt="Cooking Art" 
                className="w-full h-[600px] object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-gold/20 rounded-2xl -z-10"></div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Legado & Paixão</span>
            <h2 className="font-display text-5xl md:text-6xl mb-8 text-white leading-tight">
              A Nobreza em Cada <span className="text-gold">Grelhado.</span>
            </h2>
            <div className="w-20 h-1 bg-gold mb-10"></div>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
              Desde 2010, a Churrasqueira Reis dos Frangos redefine o conceito de churrasco em Luanda. Não somos apenas um restaurante; somos os guardiões de um tempero que atravessa gerações.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4 p-8 bg-dark-800/80 backdrop-blur-md rounded-2xl border border-gray-800 hover:border-gold/30 transition-all">
                <i className="fa-solid fa-crown text-gold text-2xl"></i>
                <h4 className="font-bold text-white text-xl">Qualidade Real</h4>
                <p className="text-gray-500 text-sm font-light">Cortes selecionados diariamente para garantir a máxima suculência.</p>
              </div>
              <div className="space-y-4 p-8 bg-dark-800/80 backdrop-blur-md rounded-2xl border border-gray-800 hover:border-gold/30 transition-all">
                <i className="fa-solid fa-fire-burner text-gold text-2xl"></i>
                <h4 className="font-bold text-white text-xl">Brasa Perfeita</h4>
                <p className="text-gray-500 text-sm font-light">Carvão vegetal selecionado para o aroma defumado autêntico.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
