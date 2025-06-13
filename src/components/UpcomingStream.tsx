import { Calendar, Clock, User } from 'lucide-react';
import { Stream } from '../data/streams';
import EmbeddedVideo from './EmbeddedVideo';

interface UpcomingStreamProps {
  stream: Stream;
}

const UpcomingStream = ({ stream }: UpcomingStreamProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  return (
    <div className="group bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-6 hover:border-red-500/30 transition-all duration-300">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Stream Info */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors duration-300 mb-2">
            {stream.title}
          </h3>
          <p className="text-gray-400 mb-4">{stream.description}</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-red-500" />
              <span>{formatDate(stream.date)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-red-500" />
              <span>{stream.duration}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2 text-red-500" />
              <span>{stream.host}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {stream.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-red-500/10 text-red-500 rounded-full border border-red-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Video Preview */}
        <div className="w-full md:w-[400px]">
          <EmbeddedVideo videoId={stream.videoId} title={stream.title} />
        </div>
      </div>
    </div>
  );
};

export default UpcomingStream; 