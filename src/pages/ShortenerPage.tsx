import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with proper headers
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key:', supabaseAnonKey);

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false
  },
  global: {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Prefer': 'return=minimal'
    }
  }
});

const ShortenerPage: React.FC = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const validateUrl = (urlString: string) => {
    try {
      // Add https:// if no protocol is specified
      const urlWithProtocol = urlString.startsWith('http') ? urlString : `https://${urlString}`;
      new URL(urlWithProtocol);
      return urlWithProtocol;
    } catch (err) {
      return null;
    }
  };

  const generateShortCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const generateUniqueShortCode = async () => {
    let shortCode = generateShortCode();
    let attempts = 0;
    const maxAttempts = 3;

    while (attempts < maxAttempts) {
      const { data, error } = await supabase
        .from('urls')
        .select('short_code')
        .eq('short_code', shortCode)
        .single();

      if (error && error.code === 'PGRST116') {
        // No record found, code is unique
        return shortCode;
      }

      // If we found a record or got a different error, generate a new code
      shortCode = generateShortCode();
      attempts++;
    }

    throw new Error('Failed to generate unique short code');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    
    if (!url) {
      setError('Please enter a URL');
      return;
    }

    const validatedUrl = validateUrl(url);
    if (!validatedUrl) {
      setError('Please enter a valid URL');
      return;
    }

    try {
      // Generate a unique short code
      const shortCode = await generateUniqueShortCode();
      
      // Insert the URL into Supabase
      const { data, error: insertError } = await supabase
        .from('urls')
        .insert([
          { 
            original_url: validatedUrl,
            short_code: shortCode,
            created_at: new Date().toISOString()
          }
        ])
        .select()
        .single();

      if (insertError) throw insertError;

      const baseUrl = window.location.origin;
      const shortenedUrl = `${baseUrl}/${shortCode}`;
      
      setShortUrl(shortenedUrl);
      setMessage('URL shortened successfully!');
    } catch (error) {
      console.error('Error shortening URL:', error);
      setError(error instanceof Error ? error.message : 'Failed to shorten URL. Please try again.');
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setMessage('URL copied to clipboard!');
    } catch (err) {
      setError('Failed to copy URL');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-red-900 p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <h1 className="text-2xl font-bold mb-4 text-white text-center">URL Shortener</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL (e.g., google.com)"
            className="border p-2 w-full bg-gray-800 text-white rounded transition-all duration-300 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
          <button 
            type="submit" 
            className="bg-red-600 text-white p-2 mt-2 w-full rounded transition-all duration-300 hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-1"
          >
            Shorten
          </button>
        </form>
        {error && (
          <div className="text-red-400 mb-4 text-center animate-fade-in">
            {error}
          </div>
        )}
        {message && (
          <div className="text-green-400 mb-4 text-center animate-fade-in">
            {message}
          </div>
        )}
        {shortUrl && (
          <div className="text-white text-center">
            <p className="mb-2">Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors duration-300">{shortUrl}</a></p>
            <button 
              onClick={copyToClipboard}
              className="bg-gray-800 text-white p-2 w-full mt-2 rounded transition-all duration-300 hover:bg-gray-700 hover:shadow-lg transform hover:-translate-y-1"
            >
              Copy to Clipboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShortenerPage; 