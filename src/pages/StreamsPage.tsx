import { Video, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import EmbeddedVideo from '../components/EmbeddedVideo';
import UpcomingStream from '../components/UpcomingStream';
import { streams } from '../data/streams';

const StreamsPage = () => {
  const [visiblePastStreams, setVisiblePastStreams] = useState(4);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q') || '';

  const [filteredStreams, setFilteredStreams] = useState(streams);

  useEffect(() => {
    if (searchQuery) {
      const filtered = streams.filter(stream =>
        stream.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stream.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stream.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredStreams(filtered);
    } else {
      setFilteredStreams(streams);
    }
  }, [searchQuery]);

  const pastStreams = filteredStreams.filter(stream => stream.type === 'past');
  const upcomingStreams = filteredStreams.filter(stream => stream.type === 'upcoming');

  const loadMoreStreams = () => {
    setVisiblePastStreams(prev => prev + 4);
  };

  const hasMoreStreams = visiblePastStreams < pastStreams.length;

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center px-4 py-2 rounded-md bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 transition-all duration-300 transform hover:scale-105">
              <Video className="h-5 w-5 text-red-500 mr-2 animate-pulse" />
              <span className="text-sm font-medium text-red-500">Live Sessions</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in" style={{ animationDuration: '1s', animationFillMode: 'both' }}>
            {searchQuery ? `Search Results: "${searchQuery}"` : 'Learn from Live Security Sessions'}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed animate-fade-in" style={{ animationDuration: '1s', animationDelay: '0.2s', animationFillMode: 'both' }}>
            {searchQuery 
              ? `Found ${filteredStreams.length} streams matching your search`
              : 'Join our interactive live streams and workshops led by Morocco\'s top cybersecurity experts. Engage, learn, and grow with our community.'}
          </p>
        </div>

        {/* Upcoming Streams Section */}
        {upcomingStreams.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Upcoming Streams</h2>
              <div className="px-4 py-2 rounded-md bg-red-500/10 border border-red-500/30">
                <span className="text-red-500">{upcomingStreams.length} upcoming</span>
              </div>
            </div>
            <div className="grid gap-6">
              {upcomingStreams.map((stream) => (
                <UpcomingStream key={stream.id} stream={stream} />
              ))}
            </div>
          </section>
        )}

        {/* Past Streams Section */}
        {pastStreams.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Past Streams</h2>
              <div className="px-4 py-2 rounded-md bg-red-500/10 border border-red-500/30">
                <span className="text-red-500">{pastStreams.length} recorded</span>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {pastStreams.slice(0, visiblePastStreams).map((stream, index) => (
                <div 
                  key={stream.id} 
                  className="animate-fade-in" 
                  style={{ 
                    animationDuration: '1s', 
                    animationDelay: `${0.3 + (index * 0.1)}s`, 
                    animationFillMode: 'both' 
                  }}
                >
                  <EmbeddedVideo videoId={stream.videoId || ''} title={stream.title} />
                </div>
              ))}
            </div>
            
            {hasMoreStreams && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={loadMoreStreams}
                  className="inline-flex items-center px-6 py-3 bg-red-500 text-white text-lg font-medium rounded-md hover:bg-red-600 transition-all duration-200 hover:shadow-lg hover:shadow-red-500/20"
                >
                  Load More Streams
                </button>
              </div>
            )}
          </section>
        )}

        {filteredStreams.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl mb-4">No streams found</h3>
            <p className="text-gray-400">Try searching with different keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StreamsPage; 