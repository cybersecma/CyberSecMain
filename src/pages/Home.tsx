import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedPost from '../components/FeaturedPost';
import { usePosts } from '../context/PostContext';

const Home = () => {
  const { posts, loading, error, fetchPosts } = usePosts();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Get the top 3 posts (pinned first)
  const featuredPosts = posts.slice(0, 3);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader">
          <div className="loader-text">LOADING SECURE CONTENT</div>
          <div className="loader-bar"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <h2 className="text-2xl text-cyber-red-500 mb-4">Error Loading Content</h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <button 
            onClick={() => fetchPosts()}
            className="btn btn-primary transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <HeroSection />
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 transition-colors duration-300 hover:text-red-500">Featured Articles</h2>
            <div className="flex flex-col gap-6">
              {featuredPosts.map((post, index) => (
                <div 
                  key={post.id} 
                  className="animate-fade-in" 
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <FeaturedPost post={post} hideLabel />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;