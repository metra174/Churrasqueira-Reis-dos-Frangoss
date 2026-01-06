
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

  // CÁLCULOS DO BACKEND (SIMULADOS NO FRONTEND) - ALTERADO PARA 5%
  const subtotal = cart.reduce((acc, item) => acc + (item.numericPrice * item.quantity), 0);
  const discount = formData.followedInstagram ? Math.round(subtotal * 0.05) : 0;
  const total = subtotal - discount;

  const handleFinish = () => {
    if (!formData.location || !formData.phone) {
      alert("📍 Por favor, informe sua localização e telefone para o Rei entregar!");
      return;
    }

    // FORMATAÇÃO DA MENSAGEM COM DESCONTO DE 5%
    const itemLines = cart.map(i => `- ${i.quantity}x ${i.name} (${(i.numericPrice * i.quantity).toLocaleString()} Kz)`).join('\n');
    
    const message = `
🍗 *PEDIDO – REIS DOS FRANGOS*

📍 Localização:
${formData.location}
${formData.reference ? `Ref: ${formData.reference}` : ''}

📞 Telefone:
${formData.phone}

🧾 Pedido:
${itemLines}

💰 Subtotal: ${subtotal.toLocaleString()} Kz
🎁 Desconto Instagram (5%): -${discount.toLocaleString()} Kz
✅ Total: ${total.toLocaleString()} Kz

Obrigado!
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodedMessage}`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose}></div>
      
      <div className="relative bg-[#0a0a0a] border border-white/5 w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(212,175,55,0.15)] animate-fade-in-up">
        <div className="p-8 md:p-12">
          <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-gold transition-colors">
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>

          <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Fluxo de Pedido Real</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-8">Dados do Cliente</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Formulário */}
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2">Bairro / Rua</label>
                <input 
                  type="text" 
                  placeholder="Ex: Maianga, Rua da Missão..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-gold outline-none transition-all placeholder:text-white/10"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2">Referência (Opcional)</label>
                <input 
                  type="text" 
                  placeholder="Próximo ao colégio..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-gold outline-none transition-all placeholder:text-white/10"
                  value={formData.reference}
                  onChange={(e) => setFormData({...formData, reference: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2">Telefone de Contato</label>
                <input 
                  type="tel" 
                  placeholder="9XX XXX XXX"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-gold outline-none transition-all placeholder:text-white/10"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            {/* Resumo e Lógica de Desconto */}
            <div className="bg-white/[0.02] p-8 rounded-3xl border border-white/5 flex flex-col">
              <div className="mb-8">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-b border-white/5 pb-4">Desconto Especial</h4>
                
                {/* Botão para visitar o Instagram */}
                <a 
                  href={CONTACT_INFO.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full mb-4 bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all text-xs font-bold text-white uppercase tracking-widest"
                >
                  <i className="fa-brands fa-instagram text-gold text-lg"></i>
                  Visitar Instagram
                </a>

                <button 
                  onClick={() => setFormData({...formData, followedInstagram: !formData.followedInstagram})}
                  className={`w-full p-4 rounded-2xl border transition-all flex items-center gap-4 text-left ${
                    formData.followedInstagram 
                    ? 'bg-gold border-gold text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]' 
                    : 'bg-white/5 border-white/10 text-white hover:border-gold/50'
                  }`}
                >
                  <div className={`w-5 h-5 rounded border flex items-center justify-center ${formData.followedInstagram ? 'border-black' : 'border-gray-500'}`}>
                    {formData.followedInstagram && <i className="fa-solid fa-check text-[10px]"></i>}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-tighter leading-none">Já sigo o Rei</p>
                    <p className="text-[11px] font-bold opacity-80">Ativar Desconto de 5%</p>
                  </div>
                </button>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Subtotal:</span>
                  <span>{subtotal.toLocaleString()} Kz</span>
                </div>
                {formData.followedInstagram && (
                  <div className="flex justify-between text-xs text-gold font-bold">
                    <span>Desconto (5%):</span>
                    <span>-{discount.toLocaleString()} Kz</span>
                  </div>
                )}
                <div className="flex justify-between text-xl font-black text-white pt-4 border-t border-white/5">
                  <span>Total:</span>
                  <span className="text-gold">{total.toLocaleString()} Kz</span>
                </div>
              </div>

              <button 
                onClick={handleFinish}
                className="mt-auto w-full bg-gold text-black py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-white hover:scale-[1.03] transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                Confirmar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
