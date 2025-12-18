
import React from 'react';

export const CTASection: React.FC = () => {
  const checkoutUrl = "https://pay.kiwify.com.br/Q0UNNyQ";

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-50 rounded-full -z-10 blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
            Garanta agora seu acesso antecipado ao ZapSeller AI
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Não deixe mais vendas escaparem pelos seus dedos. Profissionalize seu WhatsApp hoje mesmo.
          </p>

          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100 mb-12 inline-block">
             <div className="mb-6">
                <span className="text-gray-400 line-through text-2xl mr-4">R$ 97</span>
                <span className="text-green-600 text-6xl font-black">R$ 19,90</span>
                <p className="text-sm font-bold text-gray-400 mt-2 uppercase tracking-tighter">Única parcela / Acesso Vitalício (Beta)</p>
             </div>
             
             <a 
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-4 whatsapp-green text-white text-2xl font-black px-12 py-7 rounded-3xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-green-200 mb-8"
            >
              👉 Quero acesso (Beta)
            </a>

            <div className="flex flex-wrap justify-center gap-4 text-gray-400">
               <span className="flex items-center gap-1 text-xs font-bold uppercase"><i className="fa-solid fa-check-circle"></i> Acesso Imediato</span>
               <span className="flex items-center gap-1 text-xs font-bold uppercase"><i className="fa-solid fa-shield-halved"></i> 7 Dias de Garantia</span>
               <span className="flex items-center gap-1 text-xs font-bold uppercase"><i className="fa-solid fa-clock"></i> Oferta de Lançamento</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-3xl mx-auto mt-12 bg-gray-50 p-8 rounded-3xl">
             <div className="w-24 h-24 flex-shrink-0">
               <img src="https://picsum.photos/id/160/200/200" alt="Garantia" className="w-full h-full object-contain filter grayscale invert brightness-50 contrast-125" />
             </div>
             <div className="text-left">
               <h4 className="text-xl font-bold text-gray-900 mb-2">Garantia Incondicional de 7 Dias</h4>
               <p className="text-gray-600 leading-relaxed">
                 Se dentro de 7 dias você sentir que o ZapSeller AI não é para você, basta solicitar o reembolso integral. Sem perguntas, sem letras miúdas. Seu risco é zero.
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
