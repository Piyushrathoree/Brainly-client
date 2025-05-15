import React from 'react';
import { Outlet } from 'react-router-dom';
// import { motion } from 'framer-motion';
import Navbar from './components/Navbar';



// This would typically come from your auth context/state management
const useAuth = () => {
  // Replace this with your actual auth logic
  return { isAuthenticated: false };
};

const Layout: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar isAuthenticated={isAuthenticated} />

      {/* Main Content - Critical for LCP */}
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          {isAuthenticated ? (
            <Outlet />
          ) : (
            <div className="max-w-7xl mx-auto">
              <Outlet />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Layout;
