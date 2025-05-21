import useGetSharebleData from "@/hooks/useGetSharebleData";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const ShareData = () => {
    const {shareCode} = useParams();
    const {getSharebleData ,data} = useGetSharebleData();
    useEffect(() => {
      if (shareCode) {
        getSharebleData(shareCode);
      }
    }, [shareCode]);

    useEffect(() => {
      if (data) {
        console.log("Fetched data:", data);
      }
    }, [data]);

  return (
    <div>
        <h1 className="text-red-300 text-2xl font-bold">ShareData</h1>
        {/* {data.map((item) => (
            
           
        ))} */}
    </div>  
  )
}

export default ShareData