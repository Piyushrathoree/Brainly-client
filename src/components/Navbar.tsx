import { IconBrain, IconLogout } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";

interface NavbarProps {
  isAuthenticated?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  isAuthenticated: propIsAuthenticated,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(propIsAuthenticated);

  // Check for authentication token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token || propIsAuthenticated);
  }, [propIsAuthenticated, location.pathname]);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
            onClick={() => navigate("/")}
          >
            <IconBrain className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent max-sm:hidden ">
              Brainly
            </span>
          </motion.button>

          <div className="flex items-center space-x-4">
            {isAuthenticated && (
              <>
                {location.pathname === "/" && (
                  <button
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => navigate("/dashboard")}
                  >
                    Dashboard
                  </button>
                )}
                {location.pathname === "/dashboard" && (
                  <>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search for content..."
                        className="w-64 px-4 py-2 pl-3 border border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>

                    <button
                      className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                      onClick={() => navigate("/profile")}
                    >
                      <User className="text-white" />
                    </button>
                    <button
                      className="p-2 hover:bg-gray-800 rounded-lg transition-colors flex items-center space-x-2"
                      onClick={handleLogout}
                    >
                      <IconLogout className="w-5 h-5 text-white" />
                      <span className="text-white max-md:hidden">Logout</span>
                    </button>
                  </>
                )}
              </>
            )}
            {!isAuthenticated && (
              <>
                <button
                  className="px-4 py-2 rounded-lg text-white bg-gradient-to-br from-purple-500 to-blue-500 font-normal hover:scale-110 duration-300"
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </button>
                <button
                  className="px-4 py-2 rounded-lg text-white bg-gradient-to-br from-purple-500 to-blue-500 font-normal hover:scale-110 duration-300"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
