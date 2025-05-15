export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  author: string;
  authorAvatar?: string;
  publishedAt: string;
  updatedAt?: string;
  coverImage: string;
  tags?: string[];
  readingTime: number;
  comments?: Comment[];
}

export interface Comment {
  id: string;
  author: string;
  authorAvatar?: string;
  content: string;
  createdAt: string;
  likes?: number;
  isAuthor?: boolean;
  replies?: Comment[];
}