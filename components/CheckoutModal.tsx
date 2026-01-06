
import React, { useState } from 'react';
import { CartItem, OrderData } from '../types';
import { CONTACT_INFO } from '../constants';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, cart }) => {
  const [formData, setFormData] = useState<OrderData>({
    location: '',
    reference: '',
    phone: '',
    followedInstagram: false
  });

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + (item.numericPrice * item.quantity), 0);
  const discount = formData.followedInstagram ? subtotal * 0.10 : 0;
  
  const isMaianga = formData.location.toLowerCase().includes('maianga');
  const deliveryFee = isMaianga ? 1000 : 0;
  const total = subtotal - discount + deliveryFee;

  const handleFinish = () => {
    if (!formData.location || !formData.phone) {
      alert("Por favor, preencha a localização e o telefone.");
      return;
    }

    const itemLines = cart.map(i => `🍗 ${i.quantity}x ${i.name} (${(i.numericPrice * i.quantity).toLocaleString()} Kz)`).join('\n');
    const deliveryDisplay = isMaianga ? `${deliveryFee.toLocaleString()} Kz` : CONTACT_INFO.delivery.others;
    
    const message = `
🍗 *PEDIDO REAL – REIS DOS FRANGOS*

📍 *Localização:* ${formData.location}
🏠 *Referência:* ${formData.reference || 'N/A'}
📞 *Telefone:* ${formData.phone}

🧾 *Itens:*
${itemLines}

💰 *Subtotal:* ${subtotal.toLocaleString()} Kz
🎁 *Desconto Instagram (10%):* -${discount.toLocaleString()} Kz
🚚 *Taxa de Entrega:* ${deliveryDisplay}
✅ *TOTAL:* ${total.toLocaleString()} Kz ${!isMaianga ? '(+ taxa a combinar)' : ''}

_Obrigado pelo seu pedido!_
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodedMessage}`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose}></div>
      
      <div className="relative solid-panel w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-3xl animate-fade-in-up border-gold/10">
        <div className="p-8 md:p-12 bg-[#0a0a0a]">
          <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-gold transition-colors">
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>

          <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Finalizar Pedido</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-8">Dados de Entrega</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2">Localização (Bairro)</label>
                <input 
                  type="text" 
                  placeholder="Ex: Maianga, Alvalade..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2">Ponto de Referência</label>
                <input 
                  type="text" 
                  placeholder="Ex: Próximo à Escola..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all"
                  value={formData.reference}
                  onChange={(e) => setFormData({...formData, reference: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2">Número de Telefone</label>
                <input 
                  type="tel" 
                  placeholder="9XX XXX XXX"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-3xl border border-white/5 flex flex-col justify-between">
              <div>
                <label className="flex items-start gap-4 cursor-pointer group mb-6">
                  <div className="mt-1">
                    <input 
                      type="checkbox" 
                      className="hidden"
                      checked={formData.followedInstagram}
                      onChange={(e) => setFormData({...formData, followedInstagram: e.target.checked})}
                    />
                    <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${formData.followedInstagram ? 'bg-gold border-gold' : 'border-white/20'}`}>
                      {formData.followedInstagram && <i className="fa-solid fa-check text-black text-xs"></i>}
                    </div>
                  </div>
                  <div>
                    <span className="block text-white font-bold text-sm">Sigo o Instagram</span>
                    <span className="text-[10px] text-gold uppercase font-bold tracking-widest">Ganhar 10% Desconto</span>
                  </div>
                </label>

                <div className="space-y-3 pt-6 border-t border-white/5">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="text-white font-bold">{subtotal.toLocaleString()} Kz</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm text-green-500">
                      <span>Desconto (10%)</span>
                      <span>-{discount.toLocaleString()} Kz</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Taxa de Entrega</span>
                    <span className="text-white font-bold italic">
                      {isMaianga ? `+${deliveryFee.toLocaleString()} Kz` : CONTACT_INFO.delivery.others}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Total Final</span>
                  <div className="text-right">
                    <span className="text-3xl text-gold font-black block">{total.toLocaleString()} Kz</span>
                  </div>
                </div>
                <button 
                  onClick={handleFinish}
                  className="w-full bg-gold text-black py-4 rounded-xl font-black uppercase text-xs tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-3"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  Enviar WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
