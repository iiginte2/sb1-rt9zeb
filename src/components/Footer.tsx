import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-emerald-500" />
              <span className="font-bold text-xl">Voluntariado Angol</span>
            </Link>
            <p className="text-gray-400">
              Construyendo una comunidad más fuerte a través del voluntariado y la acción social.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/proyectos" className="text-gray-400 hover:text-white">Proyectos</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/foro" className="text-gray-400 hover:text-white">Foro</Link></li>
              <li><Link to="/contacto" className="text-gray-400 hover:text-white">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Calle Principal 123</li>
              <li>Angol, Chile</li>
              <li>contacto@voluntariadoangol.cl</li>
              <li>+56 9 1234 5678</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Voluntariado Angol. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}