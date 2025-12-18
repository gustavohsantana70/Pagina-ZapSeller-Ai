
import React from 'react';

export const Transparency: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto border-4 border-dashed border-orange-200 bg-orange-50 p-10 rounded-[2rem] flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
          <div className="text-5xl text-orange-400">
            <i className="fa-solid fa-triangle-exclamation"></i>
          </div>
          <div>
            <h3 className="text-2xl font-black text-orange-900 mb-2">Aviso importante de transparência</h3>
            <p className="text-orange-800 leading-relaxed font-medium">
              O ZapSeller AI está em <span className="font-bold underline">versão beta</span>. Algumas funcionalidades avançadas serão adicionadas gradualmente. Ao entrar agora, você garante acesso antecipado com valor promocional e ajuda a moldar a evolução do sistema.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
