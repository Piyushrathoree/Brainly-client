import React from 'react';
import { Outlet } from 'react-router-dom';
// import { motion } from 'framer-motion';
import { IconBrain } from '@tabler/icons-react';
import Navbar from './components/Navbar';
import DeferredLoad from './components/DeferredLoad';


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

      {/* Footer - Deferred loading as it's not critical for LCP */}
      <DeferredLoad>
        <footer className="bg-black/95 border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <IconBrain className="w-6 h-6 text-purple-500" />
                <span className="text-lg font-semibold">Brainly</span>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div className="mt-6 text-center text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Brainly. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </DeferredLoad>
    </div>
  );
};

export default Layout;
