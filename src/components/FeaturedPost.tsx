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
    <section className="relative py-6">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-red-500/30 transition-all duration-300 group">
          <div className="flex flex-col lg:flex-row">
            <div className="relative z-10 lg:w-1/2 p-8 flex flex-col justify-center">
        {!hideLabel && (
          <div className="flex items-center space-x-2 mb-4">
                  <span className="text-yellow-400">👋</span>
                  <h3 className="text-xl font-bold">Welcome to the Moroccan Cyber</h3>
          </div>
        )}
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 group-hover:text-red-500 transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-gray-300 text-lg mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-400 space-x-6 mb-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
            </div>
            <Link 
              to={`/post/${post.slug}`} 
                className="btn btn-primary inline-flex items-center space-x-2 self-start"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <span>Read Article</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
            <div className="lg:w-1/2 h-64 lg:h-[400px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent lg:via-transparent lg:to-transparent z-10"></div>
            <img 
              src={post.coverImage} 
              alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;