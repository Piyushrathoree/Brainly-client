import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface Tag {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}
const useGetTags = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(false);

  const getTags = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/tags/All`,
        { withCredentials: false }
      );
      setTags(response.data);
    } catch (error) {
      console.error("Error fetching tags:", error);
      const errorMessage =
        axios.isAxiosError(error) && error.response?.data?.message
          ? error.response.data.message
          : "Something went wrong. Please refresh the page";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  
  return { getTags, tags, loading };
};

export default useGetTags;
