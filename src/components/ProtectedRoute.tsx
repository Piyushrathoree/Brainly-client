import { ReactNode, useEffect } from "react";

import { toast } from "react-hot-toast";


interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const validateToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      // token not found, redirect to login
      window.location.href = "/login";
      return;
    }
    await fetch(`http://localhost:5000/api/v1/protected`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (!res.ok) {
        // token is invalid, redirect to login
        localStorage.removeItem("token");

        window.location.href = "/login";
        toast.error(
          "you are not authorized to access this page , please login"
        );
      }
    });
    return ;
  };
  useEffect(() => {
    validateToken();
  }, []);

  // If authenticated, render the children
  return <>{children}</>;
};
