import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./layout";
import { Toaster } from 'react-hot-toast';
import { ProtectedRoute } from "./components/ProtectedRoute";
import ShareData from "./pages/ShareData";

// Lazy load components for better performance
const LandingPage = lazy(() => import("./components/LandingPage"));
const Signup = lazy(() => import("./pages/auth/Signup").then(module => ({ default: module.Signup })));
const Login = lazy(() => import("./pages/auth/Login").then(module => ({ default: module.Login })));
const Verify = lazy(() => import("./pages/auth/Verify").then(module => ({ default: module.Verify })));
const Dashboard = lazy(() => import("./components/Dashboard"));
const OAuthCallback = lazy(() => import("./pages/auth/OAuthCallback").then(module => ({ default: module.OAuthCallback })));
// const Profile = lazy(() => import("./pages/Profile"));
const Questions = lazy(() => import("./pages/Questions"));

// Loading fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen bg-black">
    <div className="w-12 h-12 border-4 border-purple-500 rounded-full border-t-transparent animate-spin"></div>
  </div>
);

// This would typically come from your auth context/state management
// const useAuth = () => {
//   // Replace this with your actual auth logic
//   return { isAuthenticated: true };
// };

// Protected Route component
// const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
// };

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check system preference and update state
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);
    
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (  
    <Router>
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          style: {
            background: isDarkMode ? 'hsl(240, 10%, 3.9%)' : 'white',
            color: isDarkMode ? 'hsl(0, 0%, 98%)' : 'hsl(240, 10%, 3.9%)',
            border: isDarkMode ? '1px solid hsl(240, 3.7%, 15.9%)' : '1px solid hsl(240, 5.9%, 90%)',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: isDarkMode ? 'hsl(240, 10%, 3.9%)' : 'white',
            }
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: isDarkMode ? 'hsl(240, 10%, 3.9%)' : 'white',
            }
          }
        }}
      />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify" element={<Verify />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="questions" element={
              <ProtectedRoute>
                <Questions />
              </ProtectedRoute>
            } />
            {/* <Route path="profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } /> */}
            {
              <Route path="/share/:shareCode" element={<ShareData />} />
            }
          </Route>
          {/* Auth callback routes outside of Layout */}
          <Route path="/auth/callback" element={<OAuthCallback />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
