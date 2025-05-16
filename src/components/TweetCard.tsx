import React from "react";
import { IconBrandTwitter } from "@tabler/icons-react";
import { Trash2 } from "lucide-react";
import { MessageLoading } from "./ui/message-loading";

interface TweetCardProps {
  title: string;
  link: string;
  tags: string[];
  date: Date;
}

const getTweetId = (url: string) => {
  // Extract the tweet ID from the URL
  const match = url.match(/status\/(\d+)/);
  return match ? match[1] : "";
};

const TweetCard: React.FC<TweetCardProps> = ({ title, link, tags, date }) => {
  const tweetId = getTweetId(link);
  return (
    <div className="bg-black/80 border border-gray-800 rounded-xl p-6 shadow-lg flex flex-col gap-3  h-96 relative ">
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-bold text-white truncate flex items-center gap-2">
          <span>
            <IconBrandTwitter className="text-purple-500 size-5" />
          </span>
          {title}
        </span>
        <div className="flex gap-2">
          <button className="text-gray-500 hover:text-red-400">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
      {tweetId ? (
        <div
          className="rounded-md  w-full h-[90%] mb-7"
          style={{
            overflow: "scroll",
            overflowX: "hidden",
            position: "relative",
          }}
        >
          <blockquote className="twitter-tweet">
            <a
              href={link.replace("x.com", "twitter.com")}
              className="text-gray-300 flex gap-2 items-center justify-center h-[300px]"
            >
              {" "}
              <MessageLoading />
            </a>
          </blockquote>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </div>
      ) : (
        <div className="text-gray-400">Invalid tweet link</div>
      )}
      <div className="absolute bottom-5  flex items-center gap-5">
        <span className="text-xs text-gray-500 border border-slate-600 py-1 px-3 rounded-xl">
          Added on {date.toLocaleDateString()}
        </span>
        <div className="flex  gap-3  text-sm items-center font-raleway ">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-purple-900/40 text-purple-300  text-xs font-medium border border-slate-600 py-0.5 px-3 rounded-2xl"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
