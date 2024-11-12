import React from 'react';
import { MessageSquare, Eye, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ForumThread } from '../types';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface ForumThreadCardProps {
  thread: ForumThread;
}

export default function ForumThreadCard({ thread }: ForumThreadCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <Link to={`/foro/${thread.id}`} className="block">
            <h3 className="text-lg font-semibold text-gray-900 hover:text-emerald-600 mb-2">
              {thread.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-4 line-clamp-2">{thread.content}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>{thread.replies} respuestas</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{thread.views} vistas</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{format(new Date(thread.createdAt), "d MMM yyyy", { locale: es })}</span>
            </div>
          </div>
        </div>
        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800">
          {thread.category}
        </span>
      </div>
      {thread.lastReply && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Última respuesta por <span className="font-medium">{thread.lastReply.author.name}</span>
            {' · '}
            {format(new Date(thread.lastReply.createdAt), "d MMM yyyy", { locale: es })}
          </p>
        </div>
      )}
    </div>
  );
}