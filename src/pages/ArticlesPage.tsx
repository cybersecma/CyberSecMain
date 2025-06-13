import { useEffect } from 'react';
import { usePosts } from '../context/PostContext';
import PostList from '../components/PostList';
import { BookOpen } from 'lucide-react';

const ArticlesPage = () => {
  const { posts, loading, error, fetchPosts } = usePosts();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="loader">
          <div className="loader-text">LOADING ARTICLES</div>
          <div className="loader-bar"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <h2 className="text-2xl text-red-500 mb-4">Error Loading Articles</h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <button 
            onClick={() => fetchPosts()}
            className="inline-flex items-center px-6 py-3 bg-red-500 text-white text-lg font-medium rounded-md hover:bg-red-600 transition-all duration-200 hover:shadow-lg hover:shadow-red-500/20"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center px-4 py-2 rounded-md bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 transition-all duration-300 transform hover:scale-105">
              <BookOpen className="h-5 w-5 text-red-500 mr-2 animate-pulse" />
              <span className="text-sm font-medium text-red-500">Knowledge Base</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in" style={{ animationDuration: '1s' }}>
            Latest Articles
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed animate-fade-in max-w-2xl mx-auto" style={{ animationDuration: '1s', animationDelay: '0.2s', animationFillMode: 'both' }}>
            Explore cybersecurity insights, tutorials, and best practices from Morocco's leading security experts.
          </p>
        </div>
        
        <div className="mt-12">
          <PostList posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage; 