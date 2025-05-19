import axios from "axios";
import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface Content {
    _id: string;
    link: string;
    title: string;
    type: string;
    userId: string;
    tags: string[];
    content?: string;
    createdAt: string;
    updatedAt: string;
}

interface ContentData {
    document: Content[];
    videos: Content[];
    links: Content[];
    tweets: Content[];
    notes: Content[];
}

const useGetData = () => {
    const [loading, setLoading] = useState(false);
    const [contentData, setContentData] = useState<ContentData>({
        document: [],
        videos: [],
        links: [],
        tweets: [],
        notes: []
    });
    const navigate = useNavigate()

    const [data, setData] = useState(null)
    const getData = useCallback(async () => {

        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get(
                `${import.meta.env.VITE_SERVER_URL}/api/v1/content/all-content`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            const contentArray = response.data.content

            const newContentData = {
                document: contentArray.filter((item: Content) => item.type === 'document'),
                videos: contentArray.filter((item: Content) => item.type === 'video'),
                links: contentArray.filter((item: Content) => item.type === 'link'),
                tweets: contentArray.filter((item: Content) => item.type === 'tweet'),
                notes: contentArray.filter((item: Content) => item.type === 'note')
            };

            setContentData(newContentData);

            toast.success("Content fetched successfully");
            return newContentData;
        } catch (error) {
            console.error(error);
            const errorMessage = axios.isAxiosError(error) && error.response?.data?.message
                ? error.response.data.message
                : "Something went wrong. Please try again later.";
            localStorage.removeItem("token");
            localStorage.removeItem("shareCode");
            navigate("/login");
            toast.error(`${errorMessage} , please login again `);

            return contentData;
        } finally {
            setLoading(false);
        }
    }, [contentData, navigate]);



    const getProfileData = async () => {
        setLoading(true)
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("you're not authorized")
                navigate("/")
                return
            }
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/profile`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            const data = response.data
            setData(data)
            return data
        } catch (error) {
            const errorMessage = axios.isAxiosError(error) && error.response?.data?.message
                ? error.response.data.message
                : "Something went wrong. Please try again later.";
            toast.error(errorMessage);
            return data;
        }
        finally {
            setLoading(false);
        }

    }
    return {
        getData,
        loading,
        contentData,
        refreshData: () => getData(),
        getProfileData
    };
};

export default useGetData;