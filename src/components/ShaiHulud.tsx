import { useState } from 'react';
import { Search, AlertTriangle, CheckCircle, Loader } from 'lucide-react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';

const ShaiHulud = () => {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'safe' | 'pawned' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const normalizeInput = (text: string): string => {
    let clean = text.trim().toLowerCase();
    
    // Handle GitHub URLs
    if (clean.includes('github.com/')) {
      const parts = clean.split('github.com/');
      // Remove trailing slashes or paths
      clean = parts[1].split('/')[0];
    }
    
    return clean;
  };

  const hashString = async (message: string) => {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  };

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;

    setStatus('loading');
    setErrorMsg(null);
    
    try {
      const normalized = normalizeInput(input);
      const hash = await hashString(normalized);
      // Also check for @ version for company names if user didn't type it
      const hashWithAt = normalized.startsWith('@') ? hash : await hashString('@' + normalized);

      // Use direct document lookup by ID instead of query
      // This is more efficient and less prone to index issues since we store the hash as the ID
      const docRef = doc(db, 'pawned_hashes', hash);
      const docSnap = await getDoc(docRef);

      let found = docSnap.exists();
      
      // If not found, try the @ version (for companies)
      if (!found && hash !== hashWithAt) {
          const docRefAt = doc(db, 'pawned_hashes', hashWithAt);
          const docSnapAt = await getDoc(docRefAt);
          found = docSnapAt.exists();
      }

      if (found) {
        setStatus('pawned');
      } else {
        setStatus('safe');
      }
    } catch (err: any) {
      console.error("Error checking database:", err);
      
      // Detailed error handling for common Firebase issues
      let message = "Failed to connect to the intelligence database.";
      
      if (err.code === 'permission-denied' || err.message.includes('Missing or insufficient permissions')) {
        message = "Access denied. Please check your Firestore security rules.";
        console.error("Firestore Security Rules Error: Ensure public read access is allowed for 'pawned_hashes' collection.");
      } else if (err.code === 'unavailable') {
        message = "Network unavailable. Please check your connection.";
      }
      
      setStatus('error');
      setErrorMsg(message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 backdrop-blur-sm">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 font-mono">SHAI HULUD 2.0</h2>
          <p className="text-gray-400">
            Enter a GitHub username to check against our intelligence database.
          </p>
        </div>

        <form onSubmit={handleCheck} className="relative mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., username"
              className="block w-full pl-12 pr-4 py-4 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-lg"
            />
            <button
              type="submit"
              disabled={status === 'loading' || !input}
              className="absolute inset-y-2 right-2 px-6 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {status === 'loading' ? <Loader className="animate-spin h-5 w-5" /> : 'SCAN'}
            </button>
          </div>
        </form>

        {status === 'error' && (
          <div className="bg-yellow-500/10 border border-yellow-500/50 rounded-lg p-6 text-center animate-fade-in mb-4">
             <p className="text-yellow-500 font-medium">{errorMsg}</p>
             <p className="text-xs text-gray-400 mt-2">Check the browser console (F12) for detailed debug logs.</p>
          </div>
        )}

        {status === 'pawned' && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-6 flex items-start animate-fade-in">
            <AlertTriangle className="h-8 w-8 text-red-500 mt-1 flex-shrink-0 mr-4" />
            <div>
              <h3 className="text-xl font-bold text-red-500 mb-2">User COMPROMISED!!</h3>
              <p className="text-gray-300">
                The developer <span className="font-mono text-white bg-red-500/20 px-2 py-0.5 rounded">{input}</span> has bee COMPROMISED by Shai Hulud (v1/2) !! Your systems/data might be leaked or compromied.
              </p>
            </div>
          </div>
        )}

        {status === 'safe' && (
          <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-6 flex flex-col animate-fade-in">
            <div className="flex items-start mb-4">
                <CheckCircle className="h-8 w-8 text-green-500 mt-1 flex-shrink-0 mr-4" />
                <div>
                <h3 className="text-xl font-bold text-green-500 mb-2">NO MATCH FOUND</h3>
                <p className="text-gray-300">
                    The identifier <span className="font-mono text-white bg-green-500/20 px-2 py-0.5 rounded">{input}</span> does not appear in our current records.
                </p>
                </div>
            </div>
            
            <div className="mt-2 pt-4 border-t border-green-500/30 text-sm text-gray-400">
                <p className="leading-relaxed">
                    <span className="text-green-400 font-semibold">Important:</span> If your GitHub user is not in our list, it doesn't necessarily mean it's not compromised. Care is necessary to keep an eye on other metadata and maintain standard security measures. If you need help, feel free to reach out, we will try to help.
                </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShaiHulud;
