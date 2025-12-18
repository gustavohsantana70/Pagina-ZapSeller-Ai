
import React from 'react';

export const Solution: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-bold mb-6">
              A SOLUÇÃO DEFINITIVA
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              O ZapSeller AI é o seu Sistema de Atendimento Inteligente
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Criado para ajudar vendedores a responder com clareza, lógica e foco em fechamento. Não perca mais tempo tentando adivinhar o que falar.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-red-100 flex-shrink-0 flex items-center justify-center">
                  <i className="fa-solid fa-robot text-red-500"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">Ele não envia mensagens sozinho.</h4>
                  <p className="text-gray-500">Esqueça robôs travados que afastam os clientes.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
                  <i className="fa-solid fa-brain text-green-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl">Ele te orienta o que dizer.</h4>
                  <p className="text-gray-500">Siga um roteiro lógico e humano que gera confiança e venda.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-green-100 rounded-3xl blur-2xl opacity-50 -z-10 rotate-3"></div>
            <div className="bg-gray-100 rounded-3xl p-6 shadow-inner border border-gray-200">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-4 space-y-4">
                 {/* WhatsApp Style Mockup */}
                 <div className="flex flex-col space-y-3">
                   <div className="self-start max-w-[80%] bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none text-sm shadow-sm">
                      Quanto custa o seu serviço?
                   </div>
                   <div className="self-end max-w-[80%] whatsapp-green text-white p-3 rounded-2xl rounded-tr-none text-sm shadow-md animate-pulse">
                      Oi! Entendo que o preço seja importante pra você... [ZapSeller AI gerando resposta estratégica]
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
