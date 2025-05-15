import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight } from 'lucide-react';
import { Post } from '../types';
import { formatDate } from '../utils/formatters';

interface FeaturedPostProps {
  post: Post;
  hideLabel?: boolean;
}

const FeaturedPost = ({ post, hideLabel }: FeaturedPostProps) => {
  return (
    <section className="relative py-6 overflow-hidden group">
      <div className="px-0">
        {!hideLabel && (
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-cyber-red-500 font-mono text-sm tracking-wide animate-fade-in">FEATURED ARTICLE</span>
          </div>
        )}
        <div className="relative flex flex-col lg:flex-row bg-dark-gray rounded-lg overflow-hidden border border-gray-800 shadow-red-glow-sm transition-all duration-300 hover:shadow-red-glow-md hover:border-red-500/30 transform hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-0 transition-opacity duration-300 group-hover:opacity-80"></div>
          <div className="relative z-10 lg:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 transition-colors duration-300 group-hover:text-red-500">{post.title}</h2>
            <p className="text-gray-300 mb-4 line-clamp-3 transition-colors duration-300 group-hover:text-gray-200">{post.excerpt}</p>
            <div className="flex items-center text-sm text-gray-400 space-x-4 mb-4">
              <div className="flex items-center transition-colors duration-300 group-hover:text-gray-300">
                <User className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center transition-colors duration-300 group-hover:text-gray-300">
                <Clock className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
            </div>
            <Link 
              to={`/post/${post.slug}`} 
              className="btn btn-primary inline-flex self-start transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Read Article
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="lg:w-1/2 h-48 lg:h-64 relative overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;