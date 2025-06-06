import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import { usePosts } from '../context/PostContext';
import PostList from '../components/PostList';
import EmbeddedVideo from '../components/EmbeddedVideo';

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

      {/* Streams & Videos Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Streams & Videos</h2>
          <p className="text-gray-400 mb-10">Watch our latest hangouts, tutorials, and live sessions.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <EmbeddedVideo videoId="XMi8ZSESJA4" title="Ask Me Anything" />
            <EmbeddedVideo videoId="VJkhcd5B-qc" title="CyberSec Hangout" />
          </div>
        </div>
      </section>

      {featuredPosts.length > 0 && (
        <PostList 
          posts={featuredPosts}
          title="Featured Articles"
          description="Hand-picked articles from our team, covering the latest in cybersecurity."
        />
      )}
    </div>
  );
};

export default Home;