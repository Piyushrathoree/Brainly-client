import React from 'react';
import { IconShare, IconDots } from '@tabler/icons-react';

interface NoteCardProps {
  title: string;
  category?: string;
  content: React.ReactNode;
  tags: string[];
  date: string;
}

const NoteCard: React.FC<NoteCardProps> = ({ title, category, content, tags, date }) => {
  return (
    <div className="bg-black/80 border border-gray-800 rounded-xl p-6 shadow-lg h-[47%] flex flex-col gap-3 relative">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-400 text-sm font-medium">{category}</span>
        <div className="flex gap-2">
          <button className="text-gray-500 hover:text-purple-400">
            <IconShare className="w-4 h-4" />
          </button>
          <button className="text-gray-500 hover:text-red-400">
            <IconDots className="w-4 h-4" />
          </button>
        </div>
      </div>
      <h2 className="text-xl font-bold text-white mb-1">{title}</h2>
      <div className="text-gray-300 text-base mb-2">{content}</div>
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

export default NoteCard; 