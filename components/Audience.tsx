
import React from 'react';

export const Audience: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* For Whom */}
          <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
            <h3 className="text-3xl font-black text-green-600 mb-8 flex items-center gap-3">
              <i className="fa-solid fa-thumbs-up"></i>
              Esse sistema é para você que:
            </h3>
            <ul className="space-y-6">
              {[
                "Vende pelo WhatsApp",
                "Trabalha com produtos físicos ou digitais",
                "Quer mais segurança para responder clientes",
                "Quer organizar seu atendimento e vender mais"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-lg font-medium text-gray-700">
                  <i className="fa-solid fa-circle-check text-green-500 mt-1"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not For Whom */}
          <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 opacity-60 hover:opacity-100 transition-opacity">
            <h3 className="text-3xl font-black text-red-500 mb-8 flex items-center gap-3">
              <i className="fa-solid fa-thumbs-down"></i>
              Não é para quem:
            </h3>
            <ul className="space-y-6">
              {[
                "Procura robô que responde sozinho",
                "Busca atalhos ou 'dinheiro automático'",
                "Não está disposto a aplicar o que o sistema gera",
                "Prefere continuar improvisando no atendimento"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-lg font-medium text-gray-500">
                  <i className="fa-solid fa-circle-xmark text-red-400 mt-1"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
