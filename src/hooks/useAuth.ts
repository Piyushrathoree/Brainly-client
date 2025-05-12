import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

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
        navigate("/dashboard");
      } else {
        // Handle error
        console.error("Signup failed:", response.data);
      }
    } catch (error) {
      console.error("Signup error:", error);
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
        navigate("/dashboard");
      } else {
        // Handle error
        console.error("Login failed:", response.data);
      }
    } catch (error) {
      console.error("Signup error:", error);
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
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { registerUser, LoginUser, VerifyCode, isLoading };
};