
import React from 'react';

export const Hero: React.FC = () => {
  const checkoutUrl = "https://pay.kiwify.com.br/Q0UNNyQ";

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-bold mb-6 border border-green-100 uppercase tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Versão Beta Limitada
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8 max-w-5xl mx-auto">
          Transforme seu atendimento no WhatsApp em um <span className="text-green-600">processo inteligente</span> de vendas
        </h1>

        <p className="text-lg md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Crie mensagens prontas, organizadas por etapa da conversa, e conduza seus clientes até o fechamento — mesmo sendo iniciante.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a 
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-10 py-5 rounded-2xl whatsapp-green text-white text-lg font-bold shadow-xl shadow-green-200 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
          >
            👉 Quero acesso ao ZapSeller AI (Beta)
          </a>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <i className="fa-solid fa-lock"></i> Pagamento 100% Seguro
          </p>
        </div>

        {/* Mockup Preview */}
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <img 
            src="https://picsum.photos/id/7/1200/600" 
            alt="Dashboard Preview" 
            className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <i className="fa-solid fa-play text-white text-4xl ml-2"></i>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
