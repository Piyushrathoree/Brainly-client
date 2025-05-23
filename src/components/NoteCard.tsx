import React from "react";
import { NotebookText, Trash2 } from "lucide-react";

interface NoteCardProps {
  id: string;
  title: string;
  link: string;
  content?: string;
  date: Date;
  onDelete: (id: string) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({
  id,
  title,
  link,
  date,
  content,
  onDelete,
}) => {
  return (
    <div className="bg-black/80 border border-gray-800 rounded-xl p-6 shadow-lg h-80  flex flex-col gap-3 relative">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-bold text-white mb-1 font-sans capitalize flex items-center gap-2">
          <span>
            <NotebookText className="w-5 h-5 text-purple-500  " />
          </span>
          {title}
        </h2>
        <div className="flex gap-4">
          <button className="text-gray-500 hover:text-red-400" onClick={() => onDelete(id)}>
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <a className="text-gray-300 text-base mb-2" href={`https://${link}`}>
        {link}
      </a>
      <div className="text-gray-300 text-base mb-2">{content}</div>
      <div className="absolute bottom-6 left-6">
        <span className="text-xs text-gray-500">
          Added on {date.toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default NoteCard;
