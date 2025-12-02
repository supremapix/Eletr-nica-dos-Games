import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { MapPin, ArrowRight, Star, Shield, Cpu, Clock } from 'lucide-react';
import { CITIES, NEIGHBORHOODS, PHONE_NUMBER, WHATSAPP_DEFAULT_MESSAGE } from '../constants';
import ComparisonTable from '../components/ComparisonTable';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';

type PageType = 'city' | 'neighborhood';

interface LocationPageProps {
  type: PageType;
}

const LocationPage: React.FC<LocationPageProps> = ({ type }) => {
  const { slug } = useParams<{ slug: string }>();

  // Utility to format slug back to Title Case
  const formatName = (slugStr: string | undefined) => {
    if (!slugStr) return '';
    return slugStr
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const name = formatName(slug);
  
  // Validation: Check if slug exists in constants (simplified logic for demo)
  if (!slug) return <Navigate to="/" />;

  const isCity = type === 'city';
  const locationLabel = isCity ? 'Cidade' : 'Bairro';
  const titleText = `Assistência Técnica ${isCity ? 'em' : 'no'} ${name} ${!isCity ? 'Curitiba' : ''} | Eletrônica dos Games`;
  const descText = `Procurando assistência técnica ${isCity ? 'em' : 'no'} ${name}? Conserto de PS4, PS5, Xbox, PC Gamer e Notebooks. Atendemos toda região com garantia.`;

  return (
    <>
      <SEO 
        title={titleText}
        description={descText}
        canonical={`https://www.eletronicadosgames.com.br/${type}/${slug}`}
      />

      {/* Location Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-primary px-3 py-1 rounded text-sm font-bold mb-4">
            Atendimento Especializado {isCity ? 'em' : 'no'}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{name}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            A Eletrônica dos Games oferece o melhor serviço de reparo e manutenção para os moradores do {locationLabel} {name}.
          </p>
          <div className="flex justify-center gap-4">
             <a href="#contact-local" className="bg-whatsapp hover:bg-green-600 px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all">
                Orçamento Grátis
             </a>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">
          
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Section 1: Intro */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Assistência Técnica {isCity ? 'em' : 'no'} {name} - Eletrônica dos Games
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Se você mora {isCity ? 'em' : 'no'} <strong>{name}</strong> e está enfrentando problemas com seu videogame, computador ou notebook, você encontrou a solução ideal. 
                  A Eletrônica dos Games - Unidade Fazendinha é referência em manutenção de eletrônicos em Curitiba e Região Metropolitana.
                </p>
                <p>
                  Com mais de 15 anos de experiência, nossa equipe técnica está preparada para atender a demanda de clientes da região de {name}, oferecendo diagnósticos precisos, peças de qualidade e garantia em todos os serviços. 
                  Sabemos o quanto é importante ter seu equipamento funcionando perfeitamente, seja para trabalho ou lazer.
                </p>
                <img src="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800" alt={`Reparo de eletrônicos para ${name}`} className="w-full rounded-lg shadow-md my-6" />
              </div>
            </div>

            {/* Section 2: Services */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Serviços Mais Solicitados {isCity ? 'em' : 'no'} {name}
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-3">
                   <div className="mt-1 text-primary"><Cpu size={20} /></div>
                   <div>
                     <h3 className="font-bold">Conserto de Consoles</h3>
                     <p className="text-sm text-gray-600">Reparo de placa e leitor para PlayStation e Xbox.</p>
                   </div>
                </div>
                <div className="flex gap-3">
                   <div className="mt-1 text-primary"><Shield size={20} /></div>
                   <div>
                     <h3 className="font-bold">PC Gamer</h3>
                     <p className="text-sm text-gray-600">Montagem, upgrade e limpeza completa.</p>
                   </div>
                </div>
                <div className="flex gap-3">
                   <div className="mt-1 text-primary"><Clock size={20} /></div>
                   <div>
                     <h3 className="font-bold">Reparo Rápido</h3>
                     <p className="text-sm text-gray-600">Troca de telas e baterias de smartphones.</p>
                   </div>
                </div>
                <div className="flex gap-3">
                   <div className="mt-1 text-primary"><Star size={20} /></div>
                   <div>
                     <h3 className="font-bold">Notebooks</h3>
                     <p className="text-sm text-gray-600">Formatação e reparo de hardware.</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Section 3: Access */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Como Chegar à Eletrônica dos Games saindo {isCity ? 'de' : 'do'} {name}
              </h2>
              <p className="text-gray-600 mb-4">
                Estamos localizados estrategicamente no bairro Fazendinha, com fácil acesso para quem vem {isCity ? 'de' : 'do'} {name}. 
                Nossa loja na <strong>Rua João Dembinski, 1447</strong> conta com estacionamento fácil e atendimento ágil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=Eletronica+dos+Games+Fazendinha&origin=${name}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-100 text-primary hover:bg-blue-200 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                >
                  <MapPin size={18} /> Ver Rota no Google Maps
                </a>
              </div>
            </div>

             {/* Section 4: Why Us */}
             <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Por Que Escolher a Eletrônica dos Games?
              </h2>
              <p className="text-gray-600 mb-6">
                Muitos clientes de {name} preferem trazer seus equipamentos até nossa unidade no Fazendinha pela confiança e transparência. 
                Aqui você acompanha o status do seu serviço e tem a certeza de que peças originais ou de primeira linha estão sendo utilizadas.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border p-4 rounded-lg shadow-sm">
                   <div className="flex items-center gap-2 mb-2">
                      <Star className="text-yellow-400 fill-current" size={20} />
                      <span className="font-bold">Alta Satisfação</span>
                   </div>
                   <p className="text-sm text-gray-500">Centenas de avaliações 5 estrelas no Google.</p>
                </div>
                <div className="bg-white border p-4 rounded-lg shadow-sm">
                   <div className="flex items-center gap-2 mb-2">
                      <Shield className="text-green-500" size={20} />
                      <span className="font-bold">Garantia Real</span>
                   </div>
                   <p className="text-sm text-gray-500">90 dias de garantia em todos os serviços.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
             <div className="sticky top-24 space-y-8">
                {/* Mini Contact Form */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200" id="contact-local">
                   <h3 className="font-bold text-xl mb-4 text-center">Solicite um Orçamento</h3>
                   <p className="text-sm text-gray-500 text-center mb-6">
                     Fale diretamente com o técnico pelo WhatsApp.
                   </p>
                   <a
                     href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`}
                     className="block w-full bg-whatsapp text-white text-center font-bold py-3 rounded-lg hover:bg-green-600 transition-colors mb-4"
                   >
                     Chamar no WhatsApp
                   </a>
                   <div className="text-center text-sm">
                     <span className="text-gray-500">ou ligue: </span>
                     <a href={`tel:${PHONE_NUMBER}`} className="font-bold text-gray-800 hover:underline">(41) 3245-9051</a>
                   </div>
                </div>

                {/* Nearby Locations */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-lg mb-4">Veja Também</h4>
                  <ul className="space-y-2">
                    {/* Show a mix of other locations */}
                    {(isCity ? CITIES : NEIGHBORHOODS).slice(0, 5).map(loc => (
                      <li key={loc}>
                        <Link 
                          to={`/${isCity ? 'cidade' : 'bairro'}/${loc.toLowerCase().replace(/\s+/g, '-')}`} 
                          className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors text-sm py-1 border-b border-gray-100 last:border-0"
                        >
                          {loc} <ArrowRight size={14} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 text-center">
                    <Link to="/" className="text-primary text-sm font-semibold hover:underline">Ver todas as regiões</Link>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      <FAQ />

      <ComparisonTable />

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
           <ContactForm />
        </div>
      </section>
    </>
  );
};

export default LocationPage;