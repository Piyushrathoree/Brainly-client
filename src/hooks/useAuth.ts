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
        "http://localhost:5000/api/v1/register",
        formData,
        {
          withCredentials: true
        }
      );
      console.log(response.data);


      if (response.status === 200) {
        // Handle successful signup
        const data = response.data;
        console.log(data);
        localStorage.setItem("token", data.token);
        // document.cookie = `token=${data.token}; path=/; SameSite=None; Secure`;
        toast.success("Signup successfull ")
        navigate("/dashboard");
      } else {
        // Handle error
        console.error("Signup failed:", response.data);
        toast.error("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("An error occurred during signup.");
    } finally {
      setIsLoading(false);
    }
  };
  const LoginUser = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/login",
        formData,
        {
          withCredentials: true
        }
      );

      if (response.status === 200) {
        // Handle successful login
        const data = response.data;
        console.log(data);
        localStorage.setItem("token", data.token);
        // document.cookie = `token=${data.token}; path=/; SameSite=None; Secure`;
        toast.success("Login successfully ")
        navigate("/dashboard");
      } else {
        // Handle error
        toast.error(response.data?.message || "Login failed. Please try again.");
        console.error("Login failed:", response.data);
      }
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
        "http://localhost:5000/api/v1/verify",
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
    window.location.href = "http://localhost:5000/oauth/google";
  };

  const loginWithGithub = () => {
    setIsLoading(true);
    window.location.href = "http://localhost:5000/oauth/github";
  };

  // Logout function
  const logout = async () => {
    setIsLoading(true);
    try {
      // Clear local storage token
      localStorage.removeItem('token');
      
      // Call server logout endpoint to clear cookies/session if needed
      await axios.get('http://localhost:5000/oauth/logout', {
        withCredentials: true
      });
      
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