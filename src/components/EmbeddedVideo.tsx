import React from 'react';

interface EmbeddedVideoProps {
  videoId: string;
  title: string;
}

const EmbeddedVideo: React.FC<EmbeddedVideoProps> = ({ videoId, title }) => {
  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 shadow-lg overflow-hidden">
      <div className="aspect-w-4 aspect-h-3">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <h3 className="text-lg font-bold mt-4 text-white">{title}</h3>
    </div>
  );
};

export default EmbeddedVideo; 