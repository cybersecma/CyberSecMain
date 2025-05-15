import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const RedirectPage = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAndRedirect = async () => {
      if (!code) return;

      try {
        const { data, error } = await supabase
          .from('urls')
          .select('original_url')
          .eq('short_code', code)
          .single();

        if (error) throw error;
        if (!data) {
          navigate('/404');
          return;
        }

        // Redirect to the original URL
        window.location.href = data.original_url;
      } catch (error) {
        console.error('Error fetching URL:', error);
        setError('Failed to redirect. Please check if the URL is valid.');
        setTimeout(() => navigate('/404'), 2000);
      }
    };

    fetchAndRedirect();
  }, [code, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-white text-center">
        {error ? (
          <div className="text-red-400">{error}</div>
        ) : (
          <div className="animate-pulse">Redirecting...</div>
        )}
      </div>
    </div>
  );
};

export default RedirectPage; 