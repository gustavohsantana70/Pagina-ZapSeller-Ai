
import React from 'react';

const benefits = [
  "Sistema de atendimento inteligente (versão beta)",
  "Scripts organizados por etapa da conversa",
  "Modos diferentes de atendimento (Inicial, Objeções, etc)",
  "Linguagem simples, persuasiva e humana",
  "Foco total em fechamento de vendas",
  "Histórico de atendimentos gerados",
  "Acesso antecipado às próximas atualizações"
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-green-50 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-20 hidden lg:block">
            <i className="fa-solid fa-gift text-9xl text-green-600 rotate-12"></i>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12">
            O que você recebe ao garantir o acesso:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-green-100">
                <div className="w-8 h-8 rounded-full whatsapp-green flex items-center justify-center text-white flex-shrink-0">
                  <i className="fa-solid fa-check text-sm"></i>
                </div>
                <span className="font-semibold text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
