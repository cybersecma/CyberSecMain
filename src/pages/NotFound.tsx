import { Link } from 'react-router-dom';
import { Home, ArrowRight, Shield } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-md bg-red-500/10 border border-red-500/30">
            <Shield className="h-5 w-5 text-red-500 mr-2 animate-pulse" />
            <span className="text-sm font-medium text-red-500">Access Denied</span>
          </div>
        </div>

        <div className="mb-8">
          <div className="inline-block relative">
            <div className="text-8xl font-bold text-red-500 opacity-0 animate-fade-in">404</div>
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 rounded-full opacity-50 animate-ping"></div>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white opacity-0 animate-fade-in-delay">
          Location Not Found
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto opacity-0 animate-fade-in-delay-2">
          The resource you're trying to access does not exist or you don't have sufficient permissions.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-red-500 text-white text-lg font-medium rounded-md hover:bg-red-600 transition-all duration-200 hover:shadow-lg hover:shadow-red-500/20"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <Link 
            to="/articles" 
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white text-lg font-medium rounded-md border border-red-500/30 hover:bg-gray-700 transition-all duration-200"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Browse Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        
        <div className="mx-auto max-w-md">
          <div className="p-4 bg-black rounded-md border border-gray-800 font-mono text-sm">
            <div className="text-red-500">{'>'} ACCESS_DENIED: Location not found on server</div>
            <div className="text-gray-400">{'>'} SYSTEM: Redirecting to secure area...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;