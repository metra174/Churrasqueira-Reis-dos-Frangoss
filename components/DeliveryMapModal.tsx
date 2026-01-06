
import React, { useState } from 'react';

interface Zone {
  id: string;
  name: string;
  price: string;
  description: string;
  path: string; // SVG Path data
}

const DELIVERY_ZONES: Zone[] = [
  { id: 'maianga', name: 'Maianga', price: '500 - 1.000 Kz', description: 'Zona Central e arredores da Maianga.', path: "M 100 150 Q 150 100 200 150 T 300 150 L 300 250 L 100 250 Z" },
  { id: 'alvalade', name: 'Alvalade', price: '700 Kz', description: 'Bairro nobre e residencial.', path: "M 300 150 L 450 150 L 450 250 L 300 250 Z" },
  { id: 'talatona', name: 'Talatona', price: '1.500 Kz', description: 'Zona sul, condomínios e centros comerciais.', path: "M 100 250 L 300 250 L 300 400 L 100 400 Z" },
  { id: 'kilamba', name: 'Kilamba', price: '2.500 Kz', description: 'Centralidade do Kilamba e arredores.', path: "M 300 250 L 450 250 L 450 400 L 300 400 Z" },
  { id: 'viana', name: 'Viana', price: '2.000 Kz', description: 'Zona industrial e residencial leste.', path: "M 450 150 L 600 150 L 600 400 L 450 400 Z" },
];

const DeliveryMapModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-dark-800 border border-gray-800 w-full max-w-4xl rounded-[2rem] overflow-hidden shadow-2xl animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gold transition-colors z-10"
        >
          <i className="fa-solid fa-xmark text-2xl"></i>
        </button>

        <div className="grid lg:grid-cols-2">
          <div className="p-8 lg:p-12 border-r border-gray-800">
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Logística Real</span>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">Mapa de Entrega</h2>
            <p className="text-gray-500 text-sm mb-10">
              Selecione uma área no mapa para verificar a taxa de entrega e o tempo estimado.
            </p>

            <div className="space-y-4">
              {DELIVERY_ZONES.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone)}
                  className={`w-full p-4 rounded-xl border text-left transition-all ${
                    selectedZone?.id === zone.id 
                      ? 'bg-gold border-gold text-black' 
                      : 'bg-dark-900 border-gray-800 text-gray-400 hover:border-gold/50'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold uppercase tracking-widest text-xs">{zone.name}</span>
                    <span className={`font-black ${selectedZone?.id === zone.id ? 'text-black' : 'text-gold'}`}>
                      {zone.price}
                    </span>
                  </div>
                </button>
              ))}
              <div className="p-4 rounded-xl bg-white/5 border border-dashed border-gray-700 text-center">
                <span className="text-xs text-gray-500 italic">Outros pontos: Valor sob consulta</span>
              </div>
            </div>
          </div>

          <div className="bg-black p-8 flex flex-col items-center justify-center relative min-h-[400px]">
            {/* Stylized Map SVG */}
            <svg 
              viewBox="0 0 700 500" 
              className="w-full h-auto drop-shadow-[0_0_30px_rgba(212,175,55,0.1)]"
            >
              {DELIVERY_ZONES.map((zone) => (
                <path
                  key={zone.id}
                  d={zone.path}
                  onClick={() => setSelectedZone(zone)}
                  className={`cursor-pointer transition-all duration-300 stroke-2 ${
                    selectedZone?.id === zone.id 
                      ? 'fill-gold stroke-white' 
                      : 'fill-gold/10 stroke-gold/30 hover:fill-gold/30'
                  }`}
                />
              ))}
            </svg>

            {selectedZone && (
              <div className="absolute bottom-10 left-10 right-10 bg-dark-900/90 backdrop-blur-sm p-6 rounded-2xl border border-gold/50 animate-fade-in-up">
                <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-2">{selectedZone.name}</h4>
                <p className="text-white text-sm font-light mb-4">{selectedZone.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                  <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Taxa de Entrega</span>
                  <span className="text-gold font-black">{selectedZone.price}</span>
                </div>
              </div>
            )}
            
            {!selectedZone && (
              <div className="text-center text-gray-600">
                <i className="fa-solid fa-location-crosshairs text-3xl mb-4 opacity-20"></i>
                <p className="text-xs uppercase tracking-widest font-bold">Interativo</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryMapModal;
