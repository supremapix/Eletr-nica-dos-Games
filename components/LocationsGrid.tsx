import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CITIES, NEIGHBORHOODS } from '../constants';
import { MapPin } from 'lucide-react';

const LocationsGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cities' | 'neighborhoods'>('cities');

  const createSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-');
  };

  return (
    <section className="py-16 bg-gray-50" id="locations">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-secondary">
          Atendemos Toda a Região Metropolitana de Curitiba
        </h2>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg shadow-sm" role="group">
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium rounded-l-lg border ${
                activeTab === 'cities'
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('cities')}
            >
              Cidades
            </button>
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium rounded-r-lg border ${
                activeTab === 'neighborhoods'
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('neighborhoods')}
            >
              Bairros de Curitiba
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {activeTab === 'cities'
              ? CITIES.map((city) => (
                  <Link
                    key={city}
                    to={`/cidade/${createSlug(city)}`}
                    className="flex items-center gap-2 p-3 rounded border border-gray-200 hover:border-primary hover:text-primary transition-all text-sm text-gray-700 group"
                  >
                    <MapPin size={16} className="text-gray-400 group-hover:text-primary" />
                    {city}
                  </Link>
                ))
              : NEIGHBORHOODS.map((neighborhood) => (
                  <Link
                    key={neighborhood}
                    to={`/bairro/${createSlug(neighborhood)}`}
                    className="flex items-center gap-2 p-3 rounded border border-gray-200 hover:border-primary hover:text-primary transition-all text-sm text-gray-700 group"
                  >
                    <MapPin size={16} className="text-gray-400 group-hover:text-primary" />
                    {neighborhood}
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsGrid;