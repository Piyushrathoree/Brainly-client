import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

export function OAuthCallback() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Extract any tokens or information from the URL if needed
        const queryParams = new URLSearchParams(location.search);
        const token = queryParams.get('token');
        
        if (token) {
          localStorage.setItem('token', token);
          toast.success('Authentication successful!');
          navigate('/dashboard');
        } else {
          // If token isn't in the URL, we might need to get it from the session
          // This depends on how your backend handles OAuth flows
          const response = await axios.get('https://api-brainly.onrender.com/oauth/session', {
            withCredentials: true
          });
          
          if (response.data && response.data.token) {
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard');
          } else {
            setError('Authentication failed. Please try again.');
            toast.error('Authentication failed.');
          }
        }
      } catch (err) {
        console.error('OAuth callback error:', err);
        setError('Authentication failed. Please try again.');
        toast.error('Authentication failed.');
      } finally {
        setLoading(false);
      }
    };

    handleCallback();
  }, [navigate, location]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-purple-500 rounded-full border-t-transparent animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-bold text-slate-200">Completing authentication...</h2>
          <p className="text-sm text-slate-400 mt-2">Please wait while we finish setting up your account.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="w-12 h-12 text-red-500 mx-auto mb-4">❌</div>
          <h2 className="text-xl font-bold text-slate-200">Authentication Failed</h2>
          <p className="text-sm text-slate-400 mt-2">{error}</p>
          <button 
            onClick={() => navigate('/login')}
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Return to Login
          </button>
        </div>
      </div>
    );
  }

  // This should rarely be seen as the user will be redirected
  return null;
} 