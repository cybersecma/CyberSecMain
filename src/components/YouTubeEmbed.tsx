import { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
}

const YouTubeEmbed = ({ videoId }: YouTubeEmbedProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="my-8 w-full max-w-[800px] mx-auto">
      <div className="relative pt-[56.25%] bg-gray-900 rounded-lg overflow-hidden">
        {!isPlaying ? (
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 w-full h-full flex items-center justify-center group"
            aria-label="Play video"
          >
            <img
              src={thumbnailUrl}
              alt="Video thumbnail"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                // Fallback to medium quality thumbnail if HD is not available
                e.currentTarget.src = `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;
              }}
            />
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
            <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-red-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-700">
              <Play className="w-8 h-8 text-white fill-white" />
            </div>
          </button>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          />
        )}
      </div>
    </div>
  );
};

export default YouTubeEmbed; 