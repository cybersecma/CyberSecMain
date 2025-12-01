import { useEffect } from 'react';
import { Shield, Video, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { usePosts } from '../context/PostContext';
import PostList from '../components/PostList';
import EmbeddedVideo from '../components/EmbeddedVideo';
import { streams } from '../data/streams';

const Home = () => {
  const { posts, loading, error, fetchPosts } = usePosts();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Get the top 3 posts (pinned first)
  const featuredPosts = posts.slice(0, 3);

  // Get the specific featured streams
  const featuredVideoIds = ['ZwcZbqi9ZE8', '5rgn8-6Qe9w'];
  const latestPastStreams = streams
    .filter(stream => featuredVideoIds.includes(stream.videoId))
    .sort((a, b) => featuredVideoIds.indexOf(a.videoId) - featuredVideoIds.indexOf(b.videoId));

  // Fallback to latest if specific ones aren't found
  if (latestPastStreams.length === 0) {
    const fallbackStreams = streams
      .filter(stream => stream.type === 'past')
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 2);
    latestPastStreams.push(...fallbackStreams);
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="loader">
          <div className="loader-text">LOADING SECURE CONTENT</div>
          <div className="loader-bar"></div>
        </div>
      </div>
    );
  }

  if (error) { 
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <h2 className="text-2xl text-red-500 mb-4">Error Loading Content</h2>
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
    <div className="animate-fade-in">
      <HeroSection />

      {/* Streams & Videos Section */}
          <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex justify-center">
                <div className="inline-flex items-center px-4 py-2 rounded-md bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 transition-all duration-300 transform hover:scale-105">
                  <BookOpen className="h-5 w-5 text-red-500 mr-2 animate-pulse" />
                  <span className="text-sm font-medium text-red-500">Latest Sessions</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 text-white">Featured Streams</h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mt-2 mb-8">
              Watch our latest hangouts, tutorials, and live sessions with Morocco's top security experts.             
              </p>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {latestPastStreams.map((stream, index) => (
              <div 
                key={stream.id}
                className="animate-fade-in" 
                style={{ 
                  animationDuration: '1s', 
                  animationDelay: `${0.3 + index * 0.1}s`, 
                  animationFillMode: 'both' 
                }}
              >
                <EmbeddedVideo videoId={stream.videoId} title={stream.title} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
             <Link 
               to="/streams" 
               className="inline-flex items-center px-8 py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 rounded-md text-lg font-semibold group"
             >
               See More Streams
               <Video className="ml-2 h-5 w-5 group-hover:animate-pulse" />
             </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4 font-bold mt-4 text-white">Featured Articles</h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mt-2 mb-4">
                Hand-picked articles from our team, covering the latest in cybersecurity.
              </p>
            </div>
            <PostList posts={featuredPosts} />
            <div className="mt-12 text-center">
               <Link 
                 to="/articles" 
                 className="inline-flex items-center px-8 py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 rounded-md text-lg font-semibold group"
               >
                 See More Articles
                 <BookOpen className="ml-2 h-5 w-5 group-hover:animate-pulse" />
               </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;