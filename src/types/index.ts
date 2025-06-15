export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  author: string;
  authorAvatar?: string;
  authorRole?: string;
  authorBio?: string;
  publishedAt: string;
  updatedAt?: string;
  coverImage: string;
  thumbnail?: string;
  tags?: string[];
  readingTime: number;
  comments?: Comment[];
  hide?: boolean;
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