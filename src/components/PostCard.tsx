import { Link } from 'react-router-dom';
import { Clock, User, Tag, ArrowRight } from 'lucide-react';
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
    <article 
      className={`
        group relative overflow-hidden rounded-xl border border-gray-800 
        transition-all duration-300 hover:border-red-500/30
        ${featured ? 'lg:col-span-2 row-span-2 bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-gray-900 to-black'}
      `}
    >
      <Link 
        to={`/post/${post.slug}`}
        className="block h-full focus:outline-none focus:ring-2 focus:ring-red-500"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div className={`relative ${featured ? 'h-72' : 'h-56'}`}>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
          <img 
            src={imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={e => (e.currentTarget.src = FALLBACK_IMAGE)}
          />
        </div>
        
        <div className="relative z-20 p-6 -mt-20">
          <h3 className={`
            font-bold text-white group-hover:text-red-500 transition-colors duration-300
            ${featured ? 'text-2xl mb-4' : 'text-xl mb-3'}
          `}>
            {post.title}
          </h3>
          
          <p className="text-gray-300 mb-4 line-clamp-2">
            {post.excerpt || 'No summary available.'}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            </div>
            
            <ArrowRight className="h-5 w-5 text-red-500 transform transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;