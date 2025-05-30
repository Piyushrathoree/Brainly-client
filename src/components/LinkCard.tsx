import React from "react";
import { IconLink } from "@tabler/icons-react";
import { Trash2 } from "lucide-react";

interface LinkCardProps {
  id: string;
  title?: string;
  link: string;
  date: Date;
  content?: string;
  onDelete: (id: string) => void;
}

const LinkCard: React.FC<LinkCardProps> = ({
  id,
  title,
  link,
  date,
  content,
  onDelete,
}) => {
 
  return (
    <div className="bg-black/80 border border-gray-800 rounded-xl p-6 shadow-lg flex flex-col gap-3 relative min-h-[180px] max-h-[320px]">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <IconLink className="w-5 h-5 text-purple-400" />
          <span className="text-lg font-bold text-white truncate font-sans">
            {title || link}
          </span>
        </div>
        <div className="flex gap-4 ">
          <button
            className="text-gray-500 hover:text-red-400"
            onClick={() => onDelete(id)}
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 underline text-sm truncate mb-2"
      >
        {link}
      </a>
      <div
        className="text-gray-300 text-base scroll-smooth  overflow-x-hidden text-ellipsis scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 mb-7 "
        style={{
          overflowY: content && content.length > 250 ? "auto" : "hidden",
        }}
      >
        {content}
      </div>{" "}
      <div className="absolute bottom-3  flex items-center gap-5 left-4">
        <span className="text-xs text-gray-500 border border-slate-600 py-1 px-3 rounded-xl">
          Added on {date.toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default LinkCard;
