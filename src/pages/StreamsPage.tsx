import EmbeddedVideo from '../components/EmbeddedVideo';

const StreamsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-white">Streams & Hangouts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <EmbeddedVideo videoId="XMi8ZSESJA4" title="Ask Me Anything" />
        <EmbeddedVideo videoId="VJkhcd5B-qc" title="CyberSec Hangout" />
      </div>
    </div>
  );
};

export default StreamsPage; 