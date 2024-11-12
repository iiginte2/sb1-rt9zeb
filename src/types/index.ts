export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  imageUrl: string;
  organizerId: string;
  requiredSkills: string[];
  startDate: string;
  endDate: string;
  spots: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'volunteer' | 'organizer' | 'admin';
  skills: string[];
  joinedDate: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: string;
  category: string;
  likes: number;
  comments: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: User;
  coverImage: string;
  publishedAt: string;
  tags: string[];
  readTime: number;
}

export interface ForumThread {
  id: string;
  title: string;
  content: string;
  author: User;
  createdAt: string;
  category: string;
  replies: number;
  views: number;
  lastReply?: {
    author: User;
    createdAt: string;
  };
}