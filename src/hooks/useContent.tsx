import axios from "axios";
import toast from "react-hot-toast";

interface Content {
  title: string;
  content?: string;
  link?: string;
  tags?: string[];
  type: string;
}
const useContent = () => {
  const addContent = async (details: Content) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/content/add`,
        {
          title: details.title,
          description: details.content,
          link: details.link,
          tags: details.tags,
          type: details.type,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 201) {
        toast.success(
          "Content added successfully , please refresh to render them"
        );

        return response.data;
      } else {
        throw new Error("Failed to add content");
      }
    } catch (error) {
      // Handle error
      if (error instanceof Error) {
        const errorMessage: string =
          axios.isAxiosError(error) && error.response
            ? `Error response: ${error.response.data}`
            : `Unexpected error: ${error}`;
        toast.error(errorMessage);

        throw error;
      }
    }
  };
  const deleteContent = async (id: string) => { 
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/content/delete/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data) {
        toast.success("Content removed successfully");
        return response.data;
      } else {
        throw new Error("Failed to remove content");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
        throw error;
      }
    }
  };
  return { addContent, deleteContent };
};

export default useContent;
