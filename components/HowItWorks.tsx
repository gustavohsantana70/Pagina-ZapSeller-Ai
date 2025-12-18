
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Informe seus dados",
    desc: "Você nos conta o que vende e quais os principais benefícios do seu produto."
  },
  {
    number: "02",
    title: "Escolha o Modo",
    desc: "Selecione: Atendimento Inicial, Quebra de Objeções, Recuperação de Vendas ou Fechamento."
  },
  {
    number: "03",
    title: "Copie e Venda",
    desc: "O sistema gera mensagens prontas, no estilo WhatsApp. É só copiar, colar e converter."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Como funciona?</h2>
          <p className="text-xl text-gray-600">Um processo simples de 3 passos para profissionalizar suas vendas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="text-8xl font-black text-gray-200 absolute -top-10 -left-6 z-0 group-hover:text-green-100 transition-colors">
                {step.number}
              </div>
              <div className="relative z-10 bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
