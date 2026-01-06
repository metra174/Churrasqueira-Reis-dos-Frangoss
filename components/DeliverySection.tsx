
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

interface Zone {
  id: string;
  name: string;
  price: string;
  description: string;
  path: string;
}

const DELIVERY_ZONES: Zone[] = [
  { id: 'maianga', name: 'Maianga', price: '500 - 1.000 Kz', description: 'Nossa base. Entrega rápida e garantida.', path: "M 100 150 Q 150 100 200 150 T 300 150 L 300 250 L 100 250 Z" },
  { id: 'alvalade', name: 'Alvalade', price: 'Valor a combinar', description: 'Entregamos em todo o bairro com rapidez.', path: "M 300 150 L 450 150 L 450 250 L 300 250 Z" },
  { id: 'outros', name: 'Outros Pontos', price: 'Negociável', description: 'Atendemos Luanda sob consulta prévia.', path: "M 450 150 L 600 150 L 600 400 L 450 400 Z" },
];

const DeliverySection: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);

  return (
    <section id="entrega" className="relative py-32 overflow-hidden bg-[#080808] min-h-screen flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto solid-panel rounded-[3rem] overflow-hidden shadow-3xl">
          <div className="grid lg:grid-cols-2">
            {/* Lado do Conteúdo */}
            <div className="p-8 md:p-16 border-r border-white/5 bg-black">
              <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Logística Real</span>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-8">Onde o Rei <br/><span className="text-gold">Entrega.</span></h2>
              <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
                Garantimos que o sabor da brasa chegue intacto à sua mesa. Confira nossas zonas de entrega e taxas.
              </p>

              <div className="space-y-4">
                {DELIVERY_ZONES.map((zone) => (
                  <button
                    key={zone.id}
                    onClick={() => setSelectedZone(zone)}
                    className={`w-full p-6 rounded-2xl border text-left transition-all duration-300 ${
                      selectedZone?.id === zone.id 
                        ? 'bg-gold/10 border-gold shadow-[0_0_20px_rgba(212,175,55,0.1)]' 
                        : 'bg-dark-800 border-white/5 text-gray-400 hover:border-gold/30'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className={`font-bold uppercase tracking-widest text-xs mb-1 ${selectedZone?.id === zone.id ? 'text-white' : ''}`}>{zone.name}</span>
                        {selectedZone?.id === zone.id && <span className="text-[10px] text-gold font-medium italic">{zone.description}</span>}
                      </div>
                      <span className={`font-black text-lg ${selectedZone?.id === zone.id ? 'text-gold' : 'text-gray-600'}`}>
                        {zone.price}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-gold/5 rounded-2xl border border-gold/10">
                <p className="text-xs text-gray-400 font-medium italic">
                  * 🚚 Taxa Maianga: <span className="text-gold">{CONTACT_INFO.delivery.maianga}</span> | Outros: <span className="text-gold">{CONTACT_INFO.delivery.others}</span>
                </p>
              </div>
            </div>

            {/* Mapa Interativo */}
            <div className="bg-[#050505] p-12 flex flex-col items-center justify-center relative min-h-[500px]">
              <div className="text-center mb-12">
                <i className="fa-solid fa-map-location-dot text-gold text-4xl mb-4 opacity-50"></i>
                <h3 className="text-gray-400 uppercase tracking-widest text-xs font-bold">Zonas de Atendimento</h3>
              </div>

              <svg 
                viewBox="0 0 700 500" 
                className="w-full h-auto drop-shadow-[0_0_40px_rgba(212,175,55,0.05)]"
              >
                {DELIVERY_ZONES.map((zone) => (
                  <path
                    key={zone.id}
                    d={zone.path}
                    onClick={() => setSelectedZone(zone)}
                    className={`cursor-pointer transition-all duration-500 stroke-2 ${
                      selectedZone?.id === zone.id 
                        ? 'fill-gold/30 stroke-gold scale-105 origin-center' 
                        : 'fill-white/5 stroke-white/10 hover:fill-gold/10 hover:stroke-gold/30'
                    }`}
                  />
                ))}
              </svg>

              {selectedZone && (
                <div className="absolute bottom-10 left-10 right-10 solid-panel p-6 rounded-2xl border-gold/30 animate-fade-in-up text-center shadow-xl">
                  <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-2">{selectedZone.name}</h4>
                  <p className="text-gray-300 text-xs font-light">{selectedZone.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
