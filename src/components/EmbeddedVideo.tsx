import React, { useEffect, useState } from 'react';
import { Play } from 'lucide-react';

interface EmbeddedVideoProps {
  videoId: string;
  title: string;
}

const THUMBNAIL_VARIANTS = ['maxresdefault', 'sddefault', 'hqdefault', 'mqdefault'] as const;

const EmbeddedVideo: React.FC<EmbeddedVideoProps> = ({ videoId, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailVariantIndex, setThumbnailVariantIndex] = useState(0);

  useEffect(() => {
    setThumbnailVariantIndex(0);
  }, [videoId]);

  const currentThumbnailVariant = THUMBNAIL_VARIANTS[thumbnailVariantIndex];
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/${currentThumbnailVariant}.jpg`;
  const tryNextThumbnailVariant = () => {
    setThumbnailVariantIndex((currentIndex) =>
      currentIndex < THUMBNAIL_VARIANTS.length - 1 ? currentIndex + 1 : currentIndex
    );
  };

  return (
    <div className="group bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-4 hover:border-red-500/30 transition-all duration-300 shadow-lg overflow-hidden">
      <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
        {!isPlaying ? (
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 w-full h-full flex items-center justify-center group cursor-pointer"
            aria-label="Play video"
          >
            <img
              src={thumbnailUrl}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onLoad={(e) => {
                const isYouTubePlaceholder =
                  currentThumbnailVariant === 'maxresdefault' &&
                  e.currentTarget.naturalWidth <= 120 &&
                  e.currentTarget.naturalHeight <= 90;

                if (isYouTubePlaceholder) {
                  tryNextThumbnailVariant();
                }
              }}
              onError={() => {
                tryNextThumbnailVariant();
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
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg"
          />
        )}
      </div>
      <h3 className="text-lg font-bold mt-4 text-white group-hover:text-red-500 transition-colors duration-300">{title}</h3>
    </div>
  );
};

export default EmbeddedVideo; 
