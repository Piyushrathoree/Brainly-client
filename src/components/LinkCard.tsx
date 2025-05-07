import React from "react";
import { IconLink, IconShare, IconDots } from "@tabler/icons-react";

interface LinkCardProps {
  title?: string;
  url: string;
  tags: string[];
  date: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, url, tags, date }) => {
  return (
    <div className="bg-black/80 border border-gray-800 rounded-xl p-6 shadow-lg flex flex-col gap-3 relative min-h-[180px] max-h-[320px]">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <IconLink className="w-5 h-5 text-purple-400" />
          <span className="text-lg font-bold text-white truncate">
            {title || url}
          </span>
        </div>
        <div className="flex gap-2">
          <button className="text-gray-500 hover:text-purple-400">
            <IconShare className="w-4 h-4" />
          </button>
          <button className="text-gray-500 hover:text-red-400">
            <IconDots className="w-4 h-4" />
          </button>
        </div>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 underline text-sm truncate mb-2"
      >
        {url}
      </a>
      <div className="absolute bottom-6 left-6">
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-xs text-gray-500">Added on {date}</span>
      </div>
    </div>
  );
};

export default LinkCard;
