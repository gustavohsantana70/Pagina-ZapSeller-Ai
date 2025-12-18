
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 whatsapp-green rounded flex items-center justify-center text-white font-black italic text-xs">ZS</div>
            <span className="text-lg font-extrabold tracking-tight text-gray-900 uppercase">ZAPSELLER <span className="text-green-600">AI</span></span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-gray-500">
             <a href="#" className="hover:text-green-600 transition-colors">Termos de Uso</a>
             <a href="#" className="hover:text-green-600 transition-colors">Privacidade</a>
             <a href="#" className="hover:text-green-600 transition-colors">Suporte</a>
          </div>

          <div className="text-sm text-gray-400 italic">
            &copy; 2024 ZapSeller AI. Todos os direitos reservados.
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-[10px] text-gray-300 max-w-4xl mx-auto">
            AVISO LEGAL: Este produto não garante resultados financeiros. O sucesso nas vendas depende da dedicação, aplicação consistente da ferramenta e qualidade do seu produto/serviço. Não temos vínculo direto com a Meta/WhatsApp Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};
