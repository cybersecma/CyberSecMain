import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

interface SearchBarProps {
  initialQuery?: string;
  className?: string;
}

const SearchBar = ({ initialQuery = '', className = '' }: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search security articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 px-4 py-3 pl-12 rounded-md text-white focus:outline-none focus:border-cyber-red-500 focus:ring-1 focus:ring-cyber-red-500 transition-all"
        />
        <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        <button
          type="submit"
          className="absolute right-2 top-2 bg-cyber-red-500 text-white p-1.5 rounded-md hover:bg-cyber-red-600 transition-colors"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;