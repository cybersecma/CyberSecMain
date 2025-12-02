import { useEffect } from 'react';
import { Video, BookOpen, AlertTriangle, Database } from 'lucide-react';
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

  // Find Shai-Hulud article
  const shaiHuludArticle = posts.find(post => post.slug === 'shai-hulud-analysis');

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

      {/* Latest News Section */}
      {shaiHuludArticle && (
        <section className="py-12 bg-black border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-3">
                <div className="inline-flex items-center px-5 py-2.5 rounded-md bg-red-500/20 border-2 border-red-500/50 hover:bg-red-500/30 transition-all duration-300 transform hover:scale-105">
                  <AlertTriangle className="h-6 w-6 text-red-500 mr-2 animate-pulse" />
                  <span className="text-base font-bold text-red-500">LATEST NEWS</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mt-3 text-white">Shai-Hulud 2.0: Threat Intelligence & Analysis</h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mt-2 mb-6">
                Our research team has completed a deep analysis of the NPM worm attack and released free intelligence tools for the community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {/* Article Link */}
              <Link 
                to={`/post/${shaiHuludArticle.slug}`}
                className="group bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10"
              >
                <div className="flex items-center mb-3">
                  <BookOpen className="h-5 w-5 text-red-500 mr-2 group-hover:scale-110 transition-transform" />
                  <h3 className="text-base font-bold text-white group-hover:text-red-500 transition-colors">Full Analysis</h3>
                </div>
                <p className="text-gray-400 text-xs mb-3 line-clamp-2">{shaiHuludArticle.excerpt}</p>
                <span className="text-red-500 text-xs font-medium group-hover:underline">Read Article →</span>
              </Link>

              {/* Intelligence Tool Link */}
              <Link 
                to="/public-intelligence"
                className="group bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-center mb-3">
                  <Database className="h-5 w-5 text-blue-500 mr-2 group-hover:scale-110 transition-transform" />
                  <h3 className="text-base font-bold text-white group-hover:text-blue-500 transition-colors">Check Your Status</h3>
                </div>
                <p className="text-gray-400 text-xs mb-3 line-clamp-2">Use our free intelligence tool to verify if your GitHub account was compromised by Shai-Hulud 2.0.</p>
                <span className="text-blue-500 text-xs font-medium group-hover:underline">Check Now →</span>
              </Link>

              {/* Stream Link */}
              <Link 
                to="/streams"
                className="group bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="flex items-center mb-3">
                  <Video className="h-5 w-5 text-purple-500 mr-2 group-hover:scale-110 transition-transform" />
                  <h3 className="text-base font-bold text-white group-hover:text-purple-500 transition-colors">Watch Stream</h3>
                </div>
                <p className="text-gray-400 text-xs mb-3 line-clamp-2">Watch our detailed discussion and analysis of the Shai-Hulud attack in our community stream.</p>
                <span className="text-purple-500 text-xs font-medium group-hover:underline">View Streams →</span>
              </Link>
            </div>
          </div>
        </section>
      )}

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