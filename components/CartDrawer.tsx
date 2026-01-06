
import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (name: string) => void;
  onUpdateQty: (name: string, delta: number) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, onUpdateQty, onCheckout }) => {
  const subtotal = items.reduce((acc, item) => acc + (item.numericPrice * item.quantity), 0);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-dark-900 z-[70] transform transition-transform duration-500 ease-in-out border-l border-white/10 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 border-b border-white/5 flex justify-between items-center">
          <h2 className="font-display text-2xl text-white">Seu Carrinho</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gold transition-colors text-2xl">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <i className="fa-solid fa-cart-plus text-5xl text-gray-800"></i>
              <p className="text-gray-500 font-light">Seu carrinho está vazio.<br/>Escolha algo delicioso!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.name} className="flex gap-4 group">
                  <div className="flex-1">
                    <h4 className="text-white font-medium text-lg leading-tight mb-1">{item.name}</h4>
                    <span className="text-gold font-black block mb-3">{item.price}</span>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-white/10 rounded-lg overflow-hidden">
                        <button onClick={() => onUpdateQty(item.name, -1)} className="px-3 py-1 text-gray-400 hover:bg-white/5">-</button>
                        <span className="px-4 text-white text-sm font-bold">{item.quantity}</span>
                        <button onClick={() => onUpdateQty(item.name, 1)} className="px-3 py-1 text-gray-400 hover:bg-white/5">+</button>
                      </div>
                      <button onClick={() => onRemove(item.name)} className="text-[10px] text-red-600 font-bold uppercase tracking-widest hover:underline">Remover</button>
                    </div>
                  </div>
                  <div className="text-right text-white font-black">
                    {(item.numericPrice * item.quantity).toLocaleString()} Kz
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 border-t border-white/5 space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 uppercase tracking-widest text-xs font-bold">Subtotal</span>
              <span className="text-2xl text-white font-black">{subtotal.toLocaleString()} Kz</span>
            </div>
            <button 
              onClick={onCheckout}
              className="w-full bg-gold text-black py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] transition-all hover:bg-white hover:text-gold shadow-2xl"
            >
              Finalizar Pedido
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
