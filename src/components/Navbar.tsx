import { IconBrain } from "@tabler/icons-react";
import { motion } from "framer-motion";

interface NavbarProps {
  isAuthenticated?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated = false }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <IconBrain className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Brainly
            </span>
          </motion.div>

          <div className="flex items-center space-x-4">
            {isAuthenticated && (
              <>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search your knowledge base..."
                    className="w-64 px-4 py-2 pl-10 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                  <img
                    src="/avatar-placeholder.png"
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                </button>
              </>
            )}
              <>
                <button className="px-4 py-2 rounded-lg text-white bg-gradient-to-br from-purple-500 to-pink-500 font-normal hover:scale-110 duration-300">
                  Signup
                </button>
                <button className="px-4 py-2 rounded-lg text-white bg-gradient-to-br from-purple-500 to-pink-500 font-normal hover:scale-110 duration-300">
                  Login
                </button>
              </>
            
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
