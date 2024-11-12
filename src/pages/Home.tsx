import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Juntos Hacemos la Diferencia
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad de voluntarios y ayuda a construir un mejor Angol
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/proyectos"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
            >
              Ver Proyectos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900"
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Voluntarios Activos</div>
            </div>
            <div className="p-6">
              <Heart className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Proyectos Completados</div>
            </div>
            <div className="p-6">
              <Calendar className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600">Horas de Voluntariado</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}