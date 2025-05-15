import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import toast from "react-hot-toast";

interface FormData {
  name?: string;
  email?: string;
  password?: string;
  code?: string;
}

export const useAuth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/register`,
        formData,
        {
          withCredentials: true
        }
      );
      console.log(response.data);


      // Handle successful signup
      const data = response.data;
      console.log(data);
      localStorage.setItem("token", data.token);
      toast.success("Signup successfull ")
      navigate("/dashboard");

    } catch (error) {
      console.error("Signup error:", error);
      const errorMessage =
        axios.isAxiosError(error) && error.response?.data?.message
          ? error.response.data.message
          : "Signup failed. Please check your credentials and try again."
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const LoginUser = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/login`,
        formData,
        {
          withCredentials: true
        }
      );

      
        // Handle successful login
        const data = response.data;
        console.log(data);
        localStorage.setItem("token", data.token);
        toast.success(response?.data?.message)
        navigate("/dashboard");
      
      
    } catch (error: unknown) {
      console.error("Login error:", error);
      // Display error message from API if available, otherwise show a generic message
      const errorMessage =
        axios.isAxiosError(error) && error.response?.data?.message
          ? error.response.data.message
          : "Login failed. Please check your credentials and try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  const VerifyCode = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/verify`,
        { verificationCode: formData.code },
        {

          withCredentials: true
        }
      );

      if (response.status === 201) {
        toast.success("you're verified now ")
        navigate("/dashboard");
      } else {
        toast.error("Verification failed. Please check your code and try again.");
      }
    } catch (error: unknown) {
      console.log(error);
      // Display error message from API if available, otherwise show a generic message
      const errorMessage =
        axios.isAxiosError(error) && error.response?.data?.message
          ? error.response.data.message
          : "Verification failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  // OAuth login methods
  const loginWithGoogle = () => {
    setIsLoading(true);
    window.location.href = `${import.meta.env.VITE_SERVER_URL}/oauth/google`
  };

  const loginWithGithub = () => {
    setIsLoading(true);
    window.location.href = `${import.meta.env.VITE_SERVER_URL}/oauth/github`;
  };

  // Logout function
  const logout = async () => {
    setIsLoading(true);
    try {
      // Clear local storage token
      localStorage.removeItem('token');

      // Call server logout endpoint to clear cookies/session if needed
      const isOauth = !!localStorage.getItem('oauth'); // Assume you store a flag when logging in via OAuth
      if (isOauth) {
        await axios.get(`${import.meta.env.VITE_SERVER_URL}/logout`, {
          withCredentials: true
        });
        localStorage.removeItem('oauth');
      } else {
        await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/logout`, {
          withCredentials: true
        });
      }

      toast.success('Logged out successfully');
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      // Even if server logout fails, we still remove the token and redirect
      toast.success('Logged out successfully');
      navigate('/login');
    } finally {
      setIsLoading(false);
    }
  };


  return { registerUser, LoginUser, VerifyCode, loginWithGoogle, loginWithGithub, logout, isLoading };
};