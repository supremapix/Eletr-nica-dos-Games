import React from 'react';
import SEO from '../components/SEO';
import { SERVICES, TESTIMONIALS, PHONE_NUMBER, WHATSAPP_DEFAULT_MESSAGE } from '../constants';
import { 
  Gamepad2, Cpu, CircuitBoard, Laptop, Smartphone, Wrench, 
  HelpCircle, ChevronRight, MessageCircle, Check, Quote, Star, MapPin 
} from 'lucide-react';
import ComparisonTable from '../components/ComparisonTable';
import ContactForm from '../components/ContactForm';
import LocationsGrid from '../components/LocationsGrid';
import FAQ from '../components/FAQ';

// Explicit mapping for dynamic icons to ensure safety and proper bundling
const iconMap: Record<string, React.ElementType> = {
  Gamepad2,
  Cpu,
  CircuitBoard,
  Laptop,
  Smartphone,
  Wrench
};

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Assistência Técnica Games Fazendinha Curitiba | Eletrônica dos Games"
        description="Assistência técnica especializada em consoles, PCs, notebooks e smartphones no Fazendinha. 15 anos de experiência. Orçamento grátis (41) 3245-9051"
        canonical="https://www.eletronicadosgames.com.br/"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-animated text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Background Tech" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="bg-primary px-3 py-1 rounded text-sm font-bold uppercase tracking-wider mb-4 inline-block animate-pulse-slow">15+ Anos de Experiência</span>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-in-left">
                Eletrônica dos Games <br /><span className="text-blue-400">Fazendinha</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in">
                Assistência técnica especializada em PlayStation, Xbox, Nintendo, PCs Gamers e Notebooks. Seu equipamento em mãos de quem entende.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`}
                  className="bg-whatsapp hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Orçamento via WhatsApp
                </a>
                <a 
                  href="#services"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-lg transition-all flex items-center justify-center"
                >
                  Ver Serviços
                </a>
              </div>
            </div>
            <div className="hidden lg:block relative animate-float">
              <div className="absolute -inset-4 bg-blue-500 rounded-lg opacity-20 blur-xl"></div>
              <img
                src="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Reparo de Games"
                className="relative rounded-lg shadow-2xl border-4 border-blue-400 rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-4">Nossos Serviços Especializados</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const IconComponent = iconMap[service.iconName] || HelpCircle;
              
              return (
                <div key={service.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-primary group hover-lift animate-scale-in">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <IconComponent size={32} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <a href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`} className="text-primary font-semibold hover:underline flex items-center gap-1">
                    Saiba mais <ChevronRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
               <img src="https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Laboratório 1" className="rounded-lg shadow-lg w-full h-full object-cover hover-lift" />
               <img src="https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Laboratório 2" className="rounded-lg shadow-lg w-full h-full object-cover mt-8 hover-lift" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Por Que Escolher a Eletrônica dos Games?</h2>
              <ul className="space-y-6">
                {[
                  { title: 'Técnicos Certificados', desc: 'Equipe em constante atualização com as novas tecnologias.' },
                  { title: 'Laboratório Próprio', desc: 'Equipamentos de ponta para solda BGA e microeletrônica.' },
                  { title: 'Garantia de 90 Dias', desc: 'Segurança total em todas as peças e serviços realizados.' },
                  { title: 'Orçamento Transparente', desc: 'Sem surpresas. Você aprova o valor antes do serviço.' }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <Check className="text-green-600" size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Testimonials */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O Que Nossos Clientes Dizem</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-blue-800 p-6 rounded-lg relative">
                <Quote className="absolute top-4 right-4 text-blue-600 opacity-50" size={40} />
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-200 mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-blue-300">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <LocationsGrid />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-4">Entre em Contato</h2>
              <p className="text-gray-600 mb-8">
                Traga seu equipamento para uma avaliação gratuita ou solicite um pré-orçamento online.
                Nossa equipe está pronta para te atender.
              </p>
              
              <div className="space-y-6 mb-8">
                 <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                   <div className="bg-primary text-white p-3 rounded-full"><Smartphone /></div>
                   <div>
                     <p className="text-sm text-gray-500">Ligue Agora</p>
                     <p className="font-bold text-lg">{PHONE_NUMBER}</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                   <div className="bg-whatsapp text-white p-3 rounded-full"><MessageCircle /></div>
                   <div>
                     <p className="text-sm text-gray-500">WhatsApp</p>
                     <p className="font-bold text-lg">{PHONE_NUMBER}</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                   <div className="bg-gray-800 text-white p-3 rounded-full"><MapPin /></div>
                   <div>
                     <p className="text-sm text-gray-500">Localização</p>
                     <p className="font-bold text-lg">R. João Dembinski, 1447</p>
                     <p className="text-sm text-gray-600">Fazendinha, Curitiba - PR</p>
                   </div>
                 </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;