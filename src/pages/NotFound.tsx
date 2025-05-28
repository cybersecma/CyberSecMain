import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-6">
          <div className="inline-block relative">
            <div className="text-8xl font-bold text-cyber-red-500">404</div>
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-cyber-red-500 rounded-full opacity-50 animate-ping"></div>
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Access Denied</h1>
        <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
          The resource you're trying to access does not exist or you don't have sufficient permissions.
        </p>
        
        <div className="inline-flex space-x-4">
          <Link to="/" className="btn btn-primary">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <Link to="/articles" className="btn btn-secondary">
            Search Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="mt-12 mx-auto max-w-md">
          <div className="terminal">
            {'>'} ACCESS_DENIED: Location not found on server
            <br />
            {'>'} SYSTEM: Redirecting to secure area...
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;