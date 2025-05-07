import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./layout";
import LandingPage from "./components/LandingPage";
import MainSection from "./components/MainSection";

// Placeholder components - you can create these later
const Questions = () => <div className="text-center">Questions Page</div>;
const Profile = () => <div className="text-center">Profile Page</div>;

// This would typically come from your auth context/state management
const useAuth = () => {
  // Replace this with your actual auth logic
  return { isAuthenticated: true };
};

// Protected Route component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <MainSection />
              </ProtectedRoute>
            }
          />
          <Route path="questions" element={<Questions />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
