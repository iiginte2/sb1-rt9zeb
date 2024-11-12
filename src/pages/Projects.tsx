import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { Search, Filter, MapPin } from 'lucide-react';
import type { Project } from '../types';

const categories = ['Todos', 'Medio Ambiente', 'Educación', 'Social', 'Cultura', 'Deporte'];
const locations = ['Todas', 'Angol Centro', 'Angol Rural', 'Huequén', 'Nahuelbuta'];

const projects: Project[] = [
  {
    id: '1',
    title: 'Reforestación Parque Nacional Nahuelbuta',
    description: 'Únete a nuestro proyecto de reforestación para restaurar áreas degradadas del parque.',
    category: 'Medio Ambiente',
    location: 'Angol, Malleco',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    organizerId: 'org1',
    requiredSkills: ['Trabajo en equipo', 'Resistencia física'],
    startDate: '2024-04-01',
    endDate: '2024-04-30',
    spots: 15
  },
  {
    id: '2',
    title: 'Apoyo Educativo Escuela Rural',
    description: 'Brinda apoyo académico a estudiantes de zonas rurales en matemáticas y ciencias.',
    category: 'Educación',
    location: 'Angol Rural',
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    organizerId: 'org2',
    requiredSkills: ['Pedagogía', 'Paciencia'],
    startDate: '2024-04-15',
    endDate: '2024-07-15',
    spots: 8
  },
  {
    id: '3',
    title: 'Banco de Alimentos Angol',
    description: 'Ayuda en la recolección y distribución de alimentos para familias necesitadas.',
    category: 'Social',
    location: 'Centro Angol',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    organizerId: 'org3',
    requiredSkills: ['Organización', 'Trabajo en equipo'],
    startDate: '2024-04-10',
    endDate: '2024-05-10',
    spots: 12
  },
  {
    id: '4',
    title: 'Taller de Arte para Niños',
    description: 'Organiza y dirige talleres de arte para niños de la comunidad.',
    category: 'Cultura',
    location: 'Huequén',
    imageUrl: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    organizerId: 'org4',
    requiredSkills: ['Creatividad', 'Trabajo con niños'],
    startDate: '2024-04-05',
    endDate: '2024-05-31',
    spots: 6
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedLocation, setSelectedLocation] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'Todos' || project.category === selectedCategory;
    const matchesLocation = selectedLocation === 'Todas' || project.location.includes(selectedLocation);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesLocation && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Proyectos de Voluntariado</h1>
        <p className="text-lg text-gray-600">
          Encuentra el proyecto perfecto para ti y comienza a hacer la diferencia
        </p>
      </div>

      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Buscar proyectos..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              className="border-0 focus:ring-0"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow">
            <MapPin className="h-5 w-5 text-gray-400" />
            <select
              className="border-0 focus:ring-0"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No se encontraron proyectos que coincidan con tu búsqueda.</p>
        </div>
      )}
    </div>
  );
}