import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { usePosts } from '../context/PostContext';
import PostList from '../components/PostList';
import SearchBar from '../components/SearchBar';
import { Post } from '../types';
import { Search as SearchIcon, ArrowLeft, Video, FileText } from 'lucide-react';
import { streams } from '../data/streams';
import EmbeddedVideo from '../components/EmbeddedVideo';

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q') || '';
  const tagQuery = queryParams.get('tag') || '';
  const type = queryParams.get('type') || 'all';
  
  const { posts, loading, error, fetchPosts } = usePosts();
  const [searchResults, setSearchResults] = useState<{
    posts: Post[];
    streams: typeof streams;
  }>({ posts: [], streams: [] });
  
  useEffect(() => {
    if (posts.length === 0) {
      fetchPosts();
    } else {
      let postResults: Post[] = [];
      let streamResults = streams;
      
      if (query) {
        // Search posts
        postResults = posts.filter(post => 
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          (post.content && post.content.toLowerCase().includes(query.toLowerCase()))
        );
        
        // Search streams
        streamResults = streams.filter(stream =>
          stream.title.toLowerCase().includes(query.toLowerCase()) ||
          stream.description.toLowerCase().includes(query.toLowerCase()) ||
          stream.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );
      } else if (tagQuery) {
        postResults = posts.filter(post => 
          post.tags && post.tags.some(tag => tag.toLowerCase() === tagQuery.toLowerCase())
        );
        streamResults = streams.filter(stream =>
          stream.tags.some(tag => tag.toLowerCase() === tagQuery.toLowerCase())
        );
      }
      
      // Filter based on type
      if (type !== 'all') {
        if (type === 'articles') {
          streamResults = [];
        } else if (type === 'streams') {
          postResults = [];
        }
      }
      
      setSearchResults({ posts: postResults, streams: streamResults });
    }
  }, [query, tagQuery, type, posts, fetchPosts]);
  
  const totalResults = searchResults.posts.length + searchResults.streams.length;
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader">
          <div className="loader-text">SCANNING DATABASE</div>
          <div className="loader-bar"></div>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h2 className="text-2xl text-cyber-red-500 mb-4">Error Loading Search Results</h2>
        <p className="text-gray-300 mb-6">{error}</p>
        <button 
          onClick={() => fetchPosts()}
          className="btn btn-primary"
        >
          Try Again
        </button>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/" className="text-gray-400 hover:text-cyber-red-500 inline-flex items-center transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
        
        <div className="mb-8">
          <div className="flex mb-4">
            <SearchIcon className="h-8 w-8 text-cyber-red-500 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {query ? `Search Results: "${query}"` : tagQuery ? `Content tagged: "${tagQuery}"` : 'Search Content'}
            </h1>
          </div>
          
          <SearchBar initialQuery={query} className="max-w-2xl mb-4" />
          
          {(query || tagQuery) && (
            <p className="text-gray-300">
              Found {totalResults} {totalResults === 1 ? 'result' : 'results'}
            </p>
          )}
        </div>
        
        {(query || tagQuery) ? (
          totalResults > 0 ? (
            <div className="space-y-12">
              {searchResults.posts.length > 0 && (
                <section>
                  <div className="flex items-center mb-6">
                    <FileText className="h-6 w-6 text-cyber-red-500 mr-2" />
                    <p className="text-2xl font-bold text-white">Articles</p>
                    <span className="ml-4 px-3 py-1  bg-red-500/10 border border-red-500/30 rounded-md text-red-500 text-sm">
                      {searchResults.posts.length} results
                    </span>
                  </div>
                  <PostList posts={searchResults.posts} />
                </section>
              )}
              
              {searchResults.streams.length > 0 && (
                <section>
                  <div className="flex items-center mb-6">
                    <Video className="h-6 w-6 text-cyber-red-500 mr-2" />
                    <p className="text-2xl font-bold text-white">Streams</p>
                    <span className="ml-4 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-md text-red-500 text-sm">
                      {searchResults.streams.length} results
                    </span>
                  </div>
                  <div className="grid gap-8 md:grid-cols-2">
                    {searchResults.streams.map((stream, index) => (
                      <div 
                        key={stream.id} 
                        className="animate-fade-in" 
                        style={{ 
                          animationDuration: '1s', 
                          animationDelay: `${0.3 + (index * 0.1)}s`, 
                          animationFillMode: 'both' 
                        }}
                      >
                        <EmbeddedVideo videoId={stream.videoId} title={stream.title} />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          ) : (
            <div className="py-20 text-center">
              <h3 className="text-xl mb-4">No results found</h3>
              <p className="text-gray-400 mb-8">Try searching with different keywords.</p>
              <Link to="/" className="btn btn-primary">
                Back to Home
              </Link>
            </div>
          )
        ) : (
          <div className="py-20 text-center">
            <h3 className="text-xl mb-4">Enter a search term to find content</h3>
            <p className="text-gray-400">Search by keyword, title, or content</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;