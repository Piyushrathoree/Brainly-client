import React from "react";
import { Trash2 } from "lucide-react";

interface VideoCardProps {
  title: string;
  link: string;
  tags: string[];
  date: Date;
  content?: string;
}

const getYouTubeId = (url: string) => {
  const match = url.match(
    /(?:youtu.be\/|youtube.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
  );
  return match ? match[1] : "";
};

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  link,
  tags,
  date,
  content,
}) => {
  const videoId = getYouTubeId(link);
  return (
    <div className="bg-black/80 border border-gray-800 rounded-xl p-6 shadow-lg flex flex-col gap-3 relative min-h-[180px] max-h-[320px]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-bold text-white truncate">{title}</span>
        <div className="flex gap-2">
          <button className="text-gray-500 hover:text-red-400">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
      {videoId ? (
        <div
          className="rounded-lg overflow-hidden w-full"
          style={{ minHeight: 120, height: 180, width: "100%" }}
        >
          <iframe
            title="Embedded YouTube Video"
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="text-gray-300 text-base mb-2">
          {" "}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 underline text-sm truncate mb-2"
          >
            {link}
          </a>
          <div className="mb-2">{content}</div>
        </div>
      )}
      <div className="flex flex-wrap gap-2 ">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-purple-900/40 text-purple-300 px-2 py-1 rounded text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="text-xs text-gray-500">
        Added on {date.toLocaleDateString()}
      </span>
    </div>
  );
};

export default VideoCard;
