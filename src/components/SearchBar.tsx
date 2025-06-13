import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

interface SearchBarProps {
  initialQuery?: string;
  className?: string;
  onSearch?: () => void;
}

type SearchType = 'articles' | 'streams' | 'all';

const SearchBar = ({ initialQuery = '', className = '', onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery);
  const [searchType, setSearchType] = useState<SearchType>('all');
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const searchPath = searchType === 'all' 
        ? `/search?q=${encodeURIComponent(query.trim())}`
        : `/${searchType}?q=${encodeURIComponent(query.trim())}`;
      navigate(searchPath);
      onSearch?.();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onSearch?.();
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className={`relative flex items-center gap-2 ${className} animate-slide-in-right`}>
      <div className="relative flex-1 group">
        <input
          type="text"
          placeholder="Search security articles and streams..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-black border border-gray-800 px-4 py-2 pl-12 rounded-md text-white text-sm
                   placeholder:text-gray-500 
                   focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 
                   transition-all duration-300 ease-in-out
                   group-hover:border-red-500/30
                   animate-slide-in"
        />
        <Search 
          className="absolute left-4 top-2 h-5 w-5 text-gray-500 
                   group-hover:text-red-500 transition-colors duration-300
                   animate-fade-in" 
        />
      </div>
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value as SearchType)}
        className="bg-black border border-gray-800 px-3 py-2 rounded-md text-white text-sm
                 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50
                 transition-all duration-300 ease-in-out
                 hover:border-red-500/30
                 animate-fade-in"
      >
        <option value="all">All</option>
        <option value="articles">Articles</option>
        <option value="streams">Streams</option>
      </select>
        <button
          type="submit"
        className="bg-red-500/10 text-red-500 p-2.5 rounded-md 
                   hover:bg-red-500 hover:text-white
                 transition-all duration-300 ease-in-out transform hover:scale-105
                 border border-red-500/30
                 animate-fade-in"
        >
        <Search className="h-4 w-4 " />
        </button>
    </form>
  );
};

export default SearchBar;