import React from 'react';
import { Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Impacto del Voluntariado en la Comunidad de Angol',
    excerpt: 'Descubre cómo nuestros voluntarios están transformando la ciudad...',
    author: 'María González',
    date: '2024-03-15',
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Comunidad'
  },
  {
    id: 2,
    title: 'Guía para Nuevos Voluntarios',
    excerpt: 'Todo lo que necesitas saber para comenzar tu journey como voluntario...',
    author: 'Juan Pérez',
    date: '2024-03-10',
    imageUrl: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Guías'
  },
  {
    id: 3,
    title: 'Historias de Éxito: Reforestación Nahuelbuta',
    excerpt: 'Conoce los resultados de nuestro último proyecto de reforestación...',
    author: 'Carlos Silva',
    date: '2024-03-05',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Proyectos'
  }
];

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-lg text-gray-600">
          Noticias, historias y actualizaciones de nuestra comunidad
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">
                  {post.category}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
              <button className="w-full mt-4 text-emerald-600 font-medium hover:text-emerald-700">
                Leer más →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}