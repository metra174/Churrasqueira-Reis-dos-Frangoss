
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex flex-col">
              <span className="font-display font-black text-3xl text-gold tracking-widest">REIS DOS FRANGOS</span>
              <span className="text-[9px] text-gray-500 tracking-[0.4em] font-medium uppercase mt-1">Maianga • Luanda</span>
            </div>
            <p className="text-gray-500 leading-relaxed font-light">
              Tradição e sabor real em cada brasa. O churrasco mais amado da Maianga agora ao seu alcance.
            </p>
            <div className="flex gap-4">
              <a href={CONTACT_INFO.instagram} target="_blank" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <i className="fa-brands fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gold uppercase tracking-[0.3em] text-xs mb-8">Horários</h4>
            <ul className="space-y-4 font-light text-sm text-gray-500">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Segunda - Sexta</span>
                <span className="text-white">12:00 - 22:30</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Sábado - Domingo</span>
                <span className="text-white">11:00 - 23:30</span>
              </li>
            </ul>
            
            <div className="mt-12 p-6 solid-panel rounded-2xl bg-dark-800">
              <h4 className="font-bold text-gold uppercase tracking-[0.2em] text-[10px] mb-4 flex items-center gap-2">
                <i className="fa-solid fa-truck"></i> TAXA DE ENTREGA
              </h4>
              <div className="space-y-2 text-xs font-medium">
                <div className="flex justify-between">
                  <span className="text-gray-500">Maianga:</span>
                  <span className="text-white">{CONTACT_INFO.delivery.maianga}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Outros pontos:</span>
                  <span className="text-white">{CONTACT_INFO.delivery.others}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gold uppercase tracking-[0.3em] text-xs mb-8">Contacto Direto</h4>
            <ul className="space-y-6 font-light text-sm text-gray-500">
              <li className="flex items-start gap-4">
                <i className="fa-solid fa-location-dot text-gold mt-1"></i>
                <span>{CONTACT_INFO.address} - Angola</span>
              </li>
              <li className="flex items-center gap-4">
                <i className="fa-solid fa-phone text-gold"></i>
                <span>{CONTACT_INFO.phone}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Churrasqueira Reis dos Frangos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
