import React from "react";
import { IconFileText } from "@tabler/icons-react";
import { ArrowUpRightFromSquare, Trash2 } from "lucide-react";

interface DocumentCardProps {
  title: string;
  link: string;
  tags: string[];
  date: Date;
  content?: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({
  title,
  link,
  content,
  tags,
  date,
}) => {
  return (
    <div className="bg-black/80 border border-gray-800 rounded-xl p-6 shadow-lg flex flex-col gap-3 relative min-h-[250px] max-h-[350px]">
      <div className="flex items-center justify-between mb-2 relative">
        <div className="flex items-center gap-2">
          <IconFileText className="w-5 h-5 text-purple-400" />
          <span className="text-lg font-bold text-white font-sans capitalize">
            {title}
          </span>
        </div>
        <div className="flex gap-3">
          <a className="text-gray-500 hover:text-blue-400" href={link}>
            <ArrowUpRightFromSquare className="w-5 h-5" />
          </a>

          <button className="text-gray-500 hover:text-red-400">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        className="text-gray-300 text-base mb-8 overflow-x-hidden text-ellipsis scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 "
        style={{
          overflowY: content && content.length > 380 ? "auto" : "hidden",
        }}
      >
        {content}
      </div>
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

export default DocumentCard;
