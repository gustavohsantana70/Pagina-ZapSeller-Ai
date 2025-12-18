
import React from 'react';

const painPoints = [
  {
    icon: "fa-money-bill-transfer",
    text: "Não sabe o que responder quando o cliente pergunta preço"
  },
  {
    icon: "fa-user-shield",
    text: "Fica inseguro na hora de fechar a venda"
  },
  {
    icon: "fa-hourglass-half",
    text: "Perde clientes porque demora ou responde errado"
  },
  {
    icon: "fa-shuffle",
    text: "Cada conversa vira um improviso cansativo"
  }
];

export const Problem: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-green-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Se você vende pelo WhatsApp, provavelmente já passou por isso:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <div key={index} className="p-8 rounded-3xl glass-effect flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <i className={`fa-solid ${point.icon} text-green-400 text-2xl`}></i>
              </div>
              <p className="text-lg text-gray-300 font-medium">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-green-400 font-bold italic mb-4">
            O problema não é o seu produto.
          </p>
          <h3 className="text-3xl md:text-4xl font-black">
            É não ter um sistema de atendimento.
          </h3>
        </div>
      </div>
    </section>
  );
};
