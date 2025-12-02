import React from 'react';
import { PRICING_DATA, PHONE_NUMBER } from '../constants';

const ComparisonTable: React.FC = () => {
  return (
    <section className="py-12 bg-white" id="comparison">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-secondary">
          Compare Preços e Prazos de Reparo
        </h2>
        
        <div className="overflow-x-auto shadow-xl rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-4 font-semibold">Equipamento</th>
                <th className="p-4 font-semibold">Problema Comum</th>
                <th className="p-4 font-semibold">Preço Médio</th>
                <th className="p-4 font-semibold">Prazo</th>
                <th className="p-4 font-semibold">Garantia</th>
                <th className="p-4 font-semibold">Ação</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {PRICING_DATA.map((item, index) => (
                <tr key={index} className="hover:bg-blue-50 transition-all hover-lift">
                  <td className="p-4 font-medium text-gray-900">{item.equipment}</td>
                  <td className="p-4 text-gray-600">{item.problem}</td>
                  <td className="p-4 text-primary font-bold">{item.price}</td>
                  <td className="p-4 text-gray-600">{item.time}</td>
                  <td className="p-4 text-green-600 font-medium">{item.warranty}</td>
                  <td className="p-4">
                    <a
                      href={`https://wa.me/${PHONE_NUMBER}?text=Olá, gostaria de um orçamento para ${item.equipment}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-whatsapp hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-bold transition-all inline-block hover:scale-105"
                    >
                      Orçamento
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <p className="text-center text-gray-500 mt-4 text-sm">
          * Preços e prazos são estimativas e podem variar conforme diagnóstico técnico detalhado. Orçamento sem compromisso no balcão.
        </p>
      </div>
    </section>
  );
};

export default ComparisonTable;