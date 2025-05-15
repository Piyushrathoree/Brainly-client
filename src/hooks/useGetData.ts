import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"

interface Content {
    _id: string;
    link: string;
    title: string;
    type: string;
    userId: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
    content?:string
}
interface ContentData {
    document: Content[];
    videos: Content[];
    links: Content[];
    tweets: Content[];
    notes: Content[];
}

const useGetData = () => {
    const [loading, setLoading] = useState(false)
    const [contentData, setContentData] = useState<ContentData>({
        document: [],
        videos: [],
        links: [],
        tweets: [],
        notes: []
    });
    console.log("contentData", contentData);
    

    const getData = async () => {
        setLoading(true)
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get(
                `http://localhost:5000/api/v1/content/all-content`,
                {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            
            // Organize data by type
            const contentArray = response.data.content;
            const document = contentArray.filter((item: Content) => item.type === 'document');
            const videos = contentArray.filter((item: Content) => item.type === 'video');
            const links = contentArray.filter((item: Content) => item.type === 'link');
            const tweets = contentArray.filter((item: Content) => item.type === 'tweet');
            const notes = contentArray.filter((item: Content) => item.type === 'note');

            setContentData({ document, videos, links, tweets, notes });
            return { document, videos, links, tweets, notes };
        } catch (error) {
            console.error(error);
            const errorMessage = axios.isAxiosError(error) && error.response?.data?.message
                ? error.response.data.message
                : "Something went wrong. Please try again later.";
            toast.error(errorMessage);
        } finally {
            setLoading(false)
        }
    }

    return {
        getData,
        loading,
        contentData
    }
}

export default useGetData