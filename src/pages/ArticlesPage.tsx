import { useEffect } from 'react';
import { usePosts } from '../context/PostContext';
import PostList from '../components/PostList';

const ArticlesPage = () => {
  const { posts, loading, error, fetchPosts } = usePosts();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader">
          <div className="loader-text">LOADING ARTICLES</div>
          <div className="loader-bar"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-cyber-red-500 mb-4">Error Loading Articles</h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <button 
            onClick={() => fetchPosts()}
            className="btn btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">All Articles</h1>
        <p className="text-gray-400 mb-10 max-w-2xl">Browse all cybersecurity articles, tutorials, and insights from the Moroccan Cyber Security Community.</p>
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default ArticlesPage; 