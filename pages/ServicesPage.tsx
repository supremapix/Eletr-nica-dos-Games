import React from 'react';
import { SERVICES, PHONE_NUMBER } from '../constants';
import SEO from '../components/SEO';
import { 
  Gamepad2, Cpu, CircuitBoard, Laptop, Smartphone, Wrench, 
  HelpCircle, MessageCircle, CheckCircle2 
} from 'lucide-react';

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  Gamepad2,
  Cpu,
  CircuitBoard,
  Laptop,
  Smartphone,
  Wrench
};

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Nossos Serviços de Assistência Técnica | Eletrônica dos Games"
        description="Confira todos os serviços de manutenção para consoles, PCs, notebooks e smartphones. Orçamento rápido e garantia de qualidade."
        canonical="https://www.eletronicadosgames.com.br/servicos"
      />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Soluções completas em assistência técnica especializada. 
            Do diagnóstico ao reparo, cuidamos do seu equipamento com profissionalismo.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const IconComponent = iconMap[service.iconName] || HelpCircle;
              const whatsappMessage = `Olá, gostaria de um orçamento para o serviço: ${service.title}`;
              
              return (
                <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
                  <div className="p-8 flex-grow">
                    <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110">
                      <IconComponent size={36} strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle2 size={16} className="text-green-500" /> Diagnóstico Preciso
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle2 size={16} className="text-green-500" /> Peças de Qualidade
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle2 size={16} className="text-green-500" /> Garantia de 90 Dias
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
                    <a 
                      href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-whatsapp hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={20} />
                      Solicitar Orçamento
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-6">Não encontrou o que procura?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Entre em contato conosco diretamente. Realizamos diversos tipos de reparos em eletrônicos e podemos analisar o seu caso específico.
          </p>
          <a 
            href={`https://wa.me/${PHONE_NUMBER}`}
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform hover:-translate-y-1"
          >
            Fale com um Técnico
          </a>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;