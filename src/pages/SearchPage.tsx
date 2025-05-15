import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { usePosts } from '../context/PostContext';
import PostList from '../components/PostList';
import SearchBar from '../components/SearchBar';
import { Post } from '../types';
import { Search as SearchIcon, ArrowLeft } from 'lucide-react';

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q') || '';
  const tagQuery = queryParams.get('tag') || '';
  
  const { posts, loading, error, fetchPosts } = usePosts();
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  
  useEffect(() => {
    if (posts.length === 0) {
      fetchPosts();
    } else {
      let results: Post[] = [];
      
      if (query) {
        results = posts.filter(post => 
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          (post.content && post.content.toLowerCase().includes(query.toLowerCase()))
        );
      } else if (tagQuery) {
        results = posts.filter(post => 
          post.tags && post.tags.some(tag => tag.toLowerCase() === tagQuery.toLowerCase())
        );
      }
      
      setSearchResults(results);
    }
  }, [query, tagQuery, posts, fetchPosts]);
  
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
        
        <div className="mb-12">
          <div className="flex items-center mb-8">
            <SearchIcon className="h-8 w-8 text-cyber-red-500 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">
              {query ? `Search Results: "${query}"` : tagQuery ? `Articles tagged: "${tagQuery}"` : 'Search Articles'}
            </h1>
          </div>
          
          <SearchBar initialQuery={query} className="max-w-2xl mb-8" />
          
          {(query || tagQuery) && (
            <p className="text-gray-300">
              Found {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'}
            </p>
          )}
        </div>
        
        {(query || tagQuery) ? (
          searchResults.length > 0 ? (
            <PostList posts={searchResults} />
          ) : (
            <div className="py-20 text-center">
              <h3 className="text-xl mb-4">No posts found</h3>
              <p className="text-gray-400 mb-8">Try searching with different keywords.</p>
              <Link to="/" className="btn btn-primary">
                Back to Home
              </Link>
            </div>
          )
        ) : (
          <div className="py-20 text-center">
            <h3 className="text-xl mb-4">Enter a search term to find articles</h3>
            <p className="text-gray-400">Search by keyword, title, or content</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;