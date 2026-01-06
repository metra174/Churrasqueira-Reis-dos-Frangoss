
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import About from './components/About';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import FeaturedDishes from './components/FeaturedDishes';
import { CartItem, MenuItem } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === item.name);
      if (existing) {
        return prev.map(i => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    // Não abrimos mais o drawer automaticamente para permitir escolha contínua
  };

  const removeFromCart = (name: string) => {
    setCart(prev => prev.filter(i => i.name !== name));
  };

  const updateQuantity = (name: string, delta: number) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === name);
      if (!existing) return prev;
      
      const newQty = existing.quantity + delta;
      if (newQty <= 0) {
        return prev.filter(i => i.name !== name);
      }
      
      return prev.map(i => i.name === name ? { ...i, quantity: newQty } : i);
    });
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + (item.numericPrice * item.quantity), 0);

  return (
    <div className="relative min-h-screen bg-[#111] selection:bg-gold selection:text-black overflow-x-hidden pb-24 lg:pb-0">
      <Header cartCount={totalItems} onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        <FeaturedDishes />
        <About />
        <MenuSection 
          cart={cart}
          onUpdateQty={updateQuantity}
          onAddToCart={addToCart} 
        />
      </main>

      <Footer />

      {/* Barra Flutuante de Pedido - Finalização Expressa */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[40] w-[90%] max-w-lg animate-fade-in-up">
          <button 
            onClick={() => setIsCheckoutOpen(true)}
            className="w-full bg-gold text-black p-5 rounded-[2rem] flex items-center justify-between shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:scale-[1.02] active:scale-95 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center font-black">
                {totalItems}
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest leading-none">Finalizar Pedido</p>
                <p className="text-sm font-bold opacity-80">Reis dos Frangos</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-black text-xl">{totalPrice.toLocaleString()} Kz</span>
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </button>
        </div>
      )}

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onRemove={removeFromCart}
        onUpdateQty={updateQuantity}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        cart={cart}
      />
    </div>
  );
};

export default App;
