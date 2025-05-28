import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/auth';

const RedirectPage = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAndRedirect = async () => {
      if (!code) return;

      try {
        const { data: url, error } = await supabase
          .rpc('record_url_access', { code });

        if (error) throw error;
        if (!url) {
          navigate('/404');
          return;
        }

        // Redirect to the original URL
        window.location.href = url;
      } catch (error: any) {
        console.error('Error fetching URL:', error);
        setError(error.message || 'Failed to redirect. Please check if the URL is valid.');
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