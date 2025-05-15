import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function RedirectPage() {
  const router = useRouter();
  const { code } = router.query;

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
          router.push('/404');
          return;
        }

        // Redirect to the original URL
        window.location.href = data.original_url;
      } catch (error) {
        console.error('Error fetching URL:', error);
        router.push('/404');
      }
    };

    fetchAndRedirect();
  }, [code, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-white">
        Redirecting...
      </div>
    </div>
  );
} 