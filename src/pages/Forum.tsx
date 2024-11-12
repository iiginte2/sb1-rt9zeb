import React from 'react';
import { MessageSquare, ThumbsUp, User } from 'lucide-react';

const forumPosts = [
  {
    id: 1,
    title: '¿Cómo puedo unirme al proyecto de reforestación?',
    author: 'Ana Martínez',
    date: '2024-03-15',
    content: 'Hola a todos, me gustaría participar en el proyecto de reforestación...',
    likes: 12,
    comments: 5,
    category: 'Consultas'
  },
  {
    id: 2,
    title: 'Experiencia en el proyecto educativo rural',
    author: 'Pedro Soto',
    date: '2024-03-14',
    content: 'Quiero compartir mi experiencia como voluntario en la escuela rural...',
    likes: 24,
    comments: 8,
    category: 'Experiencias'
  },
  {
    id: 3,
    title: 'Propuesta: Taller de arte para niños',
    author: 'Laura Vega',
    date: '2024-03-13',
    content: 'Me gustaría proponer un nuevo proyecto para realizar talleres de arte...',
    likes: 18,
    comments: 12,
    category: 'Propuestas'
  }
];

export default function Forum() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Foro Comunitario</h1>
          <p className="text-lg text-gray-600">
            Comparte tus experiencias y conecta con otros voluntarios
          </p>
        </div>
        <button className="px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors">
          Nueva Publicación
        </button>
      </div>

      <div className="space-y-6">
        {forumPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString()}
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.content}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-500">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <button className="flex items-center gap-1 text-gray-500 hover:text-emerald-600">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-1 text-gray-500 hover:text-emerald-600">
                  <MessageSquare className="h-4 w-4" />
                  <span>{post.comments}</span>
                </button>
              </div>
              <button className="text-emerald-600 hover:text-emerald-700">
                Ver discusión →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}