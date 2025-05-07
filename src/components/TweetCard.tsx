import React from 'react';
import { IconShare, IconDots } from '@tabler/icons-react';

interface TweetCardProps {
  title?: string;
  tweetUrl: string;
  tags: string[];
  date: string;
}

const getTweetId = (url: string) => {
  // Extract the tweet ID from the URL
  const match = url.match(/status\/(\d+)/);
  return match ? match[1] : '';
};

const TweetCard: React.FC<TweetCardProps> = ({ title, tweetUrl, tags, date }) => {
  const tweetId = getTweetId(tweetUrl);
  return (
    <div className="bg-black/80 border border-gray-800 rounded-xl p-6 shadow-lg flex flex-col gap-3 relative min-h-[180px] max-h-[320px]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-bold text-white truncate">{title}</span>
        <div className="flex gap-2">
          <button className="text-gray-500 hover:text-purple-400"><IconShare className="w-4 h-4" /></button>
          <button className="text-gray-500 hover:text-red-400"><IconDots className="w-4 h-4" /></button>
        </div>
      </div>
      {tweetId ? (
        <div className="rounded-lg overflow-hidden w-full" style={{ minHeight: 120, height: 180 }}>
          <iframe
            title="Embedded Tweet"
            className="w-full h-full"
            style={{ border: 'none', overflow: 'hidden', minHeight: 120, height: 180 }}
            src={`https://twitframe.com/show?url=${encodeURIComponent(tweetUrl)}`}
            allowFullScreen
          />
        </div>
      ) : (
        <div className="text-gray-400">Invalid tweet link</div>
      )}
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, idx) => (
          <span key={idx} className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs font-medium">{tag}</span>
        ))}
      </div>
      <span className="text-xs text-gray-500">Added on {date}</span>
    </div>
  );
};

export default TweetCard; 