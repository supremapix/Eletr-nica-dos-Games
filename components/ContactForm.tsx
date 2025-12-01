import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    model: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Novo Contato via Site*%0A%0A*Nome:* ${formData.name}%0A*Telefone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Serviço:* ${formData.serviceType}%0A*Modelo:* ${formData.model}%0A*Problema:* ${formData.description}`;
    
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg border border-gray-200" id="contact-form">
      <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
        <Send className="w-6 h-6" /> Fale Conosco Agora
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Serviço</label>
            <select
              id="serviceType"
              name="serviceType"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white"
              value={formData.serviceType}
              onChange={handleChange}
            >
              <option value="">Selecione...</option>
              <option value="Console (Videogame)">Console (Videogame)</option>
              <option value="PC Gamer / Computador">PC Gamer / Computador</option>
              <option value="Notebook">Notebook</option>
              <option value="Placa de Vídeo">Placa de Vídeo</option>
              <option value="Smartphone">Smartphone</option>
              <option value="Outros">Outros</option>
            </select>
          </div>
          <div>
            <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">Modelo do Equipamento</label>
            <input
              type="text"
              id="model"
              name="model"
              placeholder="Ex: PS5, iPhone 11, Dell G3"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              value={formData.model}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Descrição do Problema</label>
          <textarea
            id="description"
            name="description"
            rows={3}
            required
            placeholder="Descreva brevemente o defeito..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-whatsapp hover:bg-green-600 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg"
        >
          <Send size={20} />
          Enviar para WhatsApp
        </button>
      </form>
    </div>
  );
};

export default ContactForm;