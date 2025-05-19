import { ReactNode, useEffect } from "react";

import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate()
  const validateToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      // token not found, redirect to login
      navigate("/login");
      return;
    }
    await fetch(import.meta.env.VITE_SERVER_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (!res.ok) {
        // token is invalid, redirect to login
        localStorage.removeItem("token");
        localStorage.removeItem("shareCode")
        navigate("/login");
        toast.error(
          "you are not authorized to access this page , please login"
        );
      }
    });
    return;
  };
  useEffect(() => {
    validateToken();
  }, []);

  // If authenticated, render the children
  return <>{children}</>;
};
