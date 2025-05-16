import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface SharebleData {
  type: string;
  title: string;
  link?: string;
  tags?: string[];
  content?: string;
  date?: Date;
}

const useGetSharebleData = () => {
  const [data, setData] = useState<SharebleData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPublic, setIsPublic] = useState(null);

  const ToggleShare = async () => {
    try {
      setLoading(true);
      const response = await axios.put(
        "http://localhost:5000/api/v1/share/toggle",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = response.data;

      setIsPublic(data.user?.isPublic);
      
    } catch (error) {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data.message
        : "An unexpected error occurred";
      toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch shareable data
  const getSharebleData = async (shareCode: string) => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:5000/api/v1/content/share/" + shareCode
      );
      const data = response.data;
      if (data) {
        setData(data);
      }
    } catch (error) {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data.message
        : "An unexpected error occurred";
      toast.error(errorMessage);
      setError(errorMessage);
      setData([]);
      console.log(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, getSharebleData, ToggleShare, isPublic };
};

export default useGetSharebleData;
