import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import Layout from "./layout";

// Lazy load components for better performance
const LandingPage = lazy(() => import("./components/LandingPage"));
const Signup = lazy(() => import("./pages/auth/Signup").then(module => ({ default: module.Signup })));
const MainSection = lazy(() => import("./components/MainSection"));

// Placeholder components - you can create these later
const Questions = () => <div className="text-center">Questions Page</div>;
const Profile = () => <div className="text-center">Profile Page</div>;

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
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<MainSection />} />
            <Route path="questions" element={<Questions />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
