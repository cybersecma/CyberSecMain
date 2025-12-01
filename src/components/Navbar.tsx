import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-white">cyber</span><span className="text-cyber-red-500">sec.ma</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className={`flex items-center space-x-8 transition-all duration-300 ease-in-out ${
              isSearchOpen ? 'translate-x-[-100px] opacity-0' : 'translate-x-0 opacity-100'
            }`}>
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-cyber-red-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>
              <Link 
                to="/articles" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/articles') ? 'text-cyber-red-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                Articles
              </Link>
              <Link 
                to="/public-intelligence" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/public-intelligence') ? 'text-cyber-red-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                Intelligence
              </Link>
              <Link 
                to="/streams" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/streams') ? 'text-cyber-red-500' : 'text-gray-300 hover:text-white'
                }`}
              >
              Streams
            </Link>
              <Link 
                to="/community" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/community') ? 'text-cyber-red-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                About Us
              </Link>
            </div>
            <div className={`transition-all duration-300 ease-in-out ${
              isSearchOpen ? 'w-[600px] opacity-100' : 'w-0 opacity-0'
            } overflow-hidden`}>
              <SearchBar className="w-full" onSearch={() => setIsSearchOpen(false)} />
            </div>
            <button
              onClick={toggleSearch}
              className="text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
              aria-label={isSearchOpen ? 'Close search' : 'Open search'}
            >
              {isSearchOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Search className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleSearch}
              className="text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
              aria-label={isSearchOpen ? 'Close search' : 'Open search'}
            >
              {isSearchOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Search className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        {isSearchOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 animate-fade-in">
            <SearchBar className="max-w-2xl mx-auto" />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-cyber-red-500' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/articles" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/articles') ? 'text-cyber-red-500' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Articles
              </Link>
              <Link 
                to="/public-intelligence" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/public-intelligence') ? 'text-cyber-red-500' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Intelligence
              </Link>
              <Link 
                to="/streams" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/streams') ? 'text-cyber-red-500' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Streams
              </Link>
              <Link 
                to="/community" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/community') ? 'text-cyber-red-500' : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;