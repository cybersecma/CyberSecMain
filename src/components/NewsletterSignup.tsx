import { useState } from 'react';
import { Mail, Send, CheckCircle, Loader } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../utils/firebase';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      await addDoc(collection(db, 'newsletter_subscriptions'), {
        email,
        subscribedAt: serverTimestamp(),
        source: 'public_intelligence_page'
      });
      
      setStatus('success');
      setMessage('Thank you! You have successfully subscribed to our intelligence feeds.');
      setEmail('');
    } catch (error) {
      console.error('Error adding document: ', error);
      setStatus('error');
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-10 backdrop-blur-sm mt-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
              <Mail className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">Other Intelligence Services</h3>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            Join our intelligence feeds to stay alert of the latest breaches, cyber attacks, and critical community information. Get curated alerts delivered directly to your inbox.
          </p>
          
          {status === 'success' ? (
            <div className="flex items-center space-x-2 text-green-500 bg-green-500/10 p-4 rounded-lg border border-green-500/20 animate-fade-in">
              <CheckCircle className="h-5 w-5" />
              <span>{message}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="block w-full pl-12 pr-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <Loader className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    Subscribe
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}
          {status === 'error' && (
            <p className="text-red-400 mt-2 text-sm">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;

