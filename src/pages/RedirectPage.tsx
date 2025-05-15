import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with proper headers
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

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

export default function RedirectPage() {
  const { code } = useParams();
  const navigate = useNavigate();

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
        navigate('/404');
      }
    };

    fetchAndRedirect();
  }, [code, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-white">
        Redirecting...
      </div>
    </div>
  );
} 