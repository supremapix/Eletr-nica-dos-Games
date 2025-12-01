import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Gamepad2, MapPin, Phone, Instagram, Facebook, Heart } from 'lucide-react';
import FloatingButtons from './FloatingButtons';
import { PHONE_DISPLAY, PHONE_NUMBER, ADDRESS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-90 transition-opacity">
              <Gamepad2 size={36} />
              <div className="leading-tight">
                <h1 className="text-xl font-bold tracking-tight">ELETRÔNICA</h1>
                <span className="text-sm font-semibold tracking-wider text-black">DOS GAMES</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
              <Link to="/" className="hover:text-primary transition-colors">Início</Link>
              <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
              <a href="#locations" className="hover:text-primary transition-colors">Regiões</a>
              <a href="#comparison" className="hover:text-primary transition-colors">Preços</a>
              <a href="#contact" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors">
                Contato
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4 absolute w-full shadow-xl">
            <div className="container mx-auto px-4 flex flex-col gap-4">
              <Link to="/" className="block py-2 text-gray-700" onClick={() => setIsMenuOpen(false)}>Início</Link>
              <a href="#services" className="block py-2 text-gray-700" onClick={() => setIsMenuOpen(false)}>Serviços</a>
              <a href="#locations" className="block py-2 text-gray-700" onClick={() => setIsMenuOpen(false)}>Cidades e Bairros</a>
              <a href="#comparison" className="block py-2 text-gray-700" onClick={() => setIsMenuOpen(false)}>Comparar Modelos</a>
              <a href="#contact" className="block py-2 text-primary font-bold" onClick={() => setIsMenuOpen(false)}>Fale Conosco</a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4 text-blue-400">
                <Gamepad2 size={32} />
                <span className="text-xl font-bold">ELETRÔNICA DOS GAMES</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Há mais de 15 anos oferecendo assistência técnica especializada em Curitiba. 
                Sua melhor opção para conserto de consoles, PCs e eletrônicos no Fazendinha.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Facebook size={24} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Contato</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                  <span>{ADDRESS}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-blue-400 flex-shrink-0" size={18} />
                  <a href={`tel:${PHONE_NUMBER}`} className="hover:text-blue-400 transition-colors">{PHONE_DISPLAY}</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Horário de Atendimento</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex justify-between"><span>Segunda a Sexta</span> <span>09:00 - 18:00</span></li>
                <li className="flex justify-between"><span>Sábado</span> <span>09:00 - 13:00</span></li>
                <li className="flex justify-between text-gray-500"><span>Domingo</span> <span>Fechado</span></li>
              </ul>
            </div>
          </div>

          <div className="mb-8 rounded-lg overflow-hidden h-64 border border-gray-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.167098486968!2d-49.33458892359546!3d-25.46608563436814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce30612143093%3A0x690e14a1a673c241!2sR.%20Jo%C3%A3o%20Dembinski%2C%201447%20-%20Fazendinha%2C%20Curitiba%20-%20PR%2C%2081270-330!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da Localização"
            ></iframe>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-xs flex flex-col gap-3 items-center">
            <p>&copy; {new Date().getFullYear()} Eletrônica dos Games Fazendinha. Todos os direitos reservados.</p>
            <p className="flex items-center justify-center gap-1.5 text-xs">
              Desenvolvido 
              <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> 
              por 
              <a 
                href="https://supremasite.com.br" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold hover:text-white transition-colors"
              >
                Suprema Sites Express
              </a>
            </p>
          </div>
        </div>
      </footer>
      <FloatingButtons />
    </div>
  );
};

export default Layout;