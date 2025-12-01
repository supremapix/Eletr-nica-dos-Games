import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <>
      <SEO 
        title="Página Não Encontrada | Eletrônica dos Games"
        description="A página que você está procurando não existe ou foi movida."
      />
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-lg">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-6 rounded-full">
              <AlertTriangle size={64} className="text-red-500" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Página Não Encontrada</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Desculpe, a página que você está procurando não existe, foi movida ou o link está incorreto.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg"
          >
            <Home size={20} />
            Voltar para o Início
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;