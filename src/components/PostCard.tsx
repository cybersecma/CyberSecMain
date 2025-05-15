import { Link } from 'react-router-dom';
import { Clock, User, Tag } from 'lucide-react';
import { Post } from '../types';
import { formatDate } from '../utils/formatters';

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80';

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

const PostCard = ({ post, featured = false }: PostCardProps) => {
  const imageUrl = post.coverImage || FALLBACK_IMAGE;
  return (
    <article className={`bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden transition-all duration-300 hover:border-cyber-red-500/50 hover:shadow-lg hover:shadow-cyber-red-500/10 ${featured ? 'lg:col-span-2 row-span-2' : ''}`}>
      <Link to={`/post/${post.slug}`} className="block h-full focus:outline-none focus:ring-2 focus:ring-cyber-red-500">
        <div className={`relative overflow-hidden ${featured ? 'h-64 md:h-80' : 'h-48'}`}>
          <img 
            src={imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 bg-gray-900"
            onError={e => (e.currentTarget.src = FALLBACK_IMAGE)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        <div className="p-6 flex flex-col justify-between min-h-[160px]">
          <div>
            <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold mb-2 text-white group-hover:text-cyber-red-500 transition-colors`}>{post.title}</h3>
            <p className="text-gray-300 mb-4 line-clamp-3 min-h-[60px]">{post.excerpt || 'No summary available.'}</p>
          </div>
          <div className="flex flex-wrap items-center text-xs text-gray-400 gap-4 mt-auto">
            <div className="flex items-center">
              <User className="h-3 w-3 mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-3 w-3 mr-1" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;