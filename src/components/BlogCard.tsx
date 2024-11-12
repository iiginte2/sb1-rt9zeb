import React from 'react';
import { Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={post.coverImage} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex gap-2 mb-3">
          {post.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          <Link to={`/blog/${post.id}`} className="hover:text-emerald-600">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{format(new Date(post.publishedAt), "d 'de' MMMM, yyyy", { locale: es })}</span>
          </div>
        </div>
      </div>
    </article>
  );
}