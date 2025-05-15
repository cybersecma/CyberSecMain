import { Users, Calendar, MessageSquare, Award } from 'lucide-react';

const CommunityPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Join Our Community</h1>
            <p className="text-gray-300 text-lg">
              Connect with cybersecurity professionals, share knowledge, and grow together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <Users className="h-12 w-12 text-cyber-red-500 mb-4" />
              <h2 className="text-xl font-bold mb-3">Community Benefits</h2>
              <ul className="text-gray-300 space-y-2">
                <li>• Access to exclusive cybersecurity resources</li>
                <li>• Networking with industry professionals</li>
                <li>• Participation in workshops and events</li>
                <li>• Knowledge sharing and collaboration</li>
                <li>• Career development opportunities</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <Calendar className="h-12 w-12 text-cyber-red-500 mb-4" />
              <h2 className="text-xl font-bold mb-3">Upcoming Events</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-cyber-red-500 pl-4">
                  <h3 className="font-semibold">Web Security Workshop</h3>
                  <p className="text-sm text-gray-400">March 25, 2024</p>
                </div>
                <div className="border-l-2 border-cyber-red-500 pl-4">
                  <h3 className="font-semibold">CTF Competition</h3>
                  <p className="text-sm text-gray-400">April 10, 2024</p>
                </div>
                <div className="border-l-2 border-cyber-red-500 pl-4">
                  <h3 className="font-semibold">Career Fair</h3>
                  <p className="text-sm text-gray-400">May 5, 2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 mb-16">
            <MessageSquare className="h-12 w-12 text-cyber-red-500 mb-4" />
            <h2 className="text-2xl font-bold mb-6">Get Involved</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Discord Community</h3>
                <p className="text-gray-300 mb-4">
                  Join our Discord server to connect with other members, participate in discussions,
                  and stay updated with the latest events and opportunities.
                </p>
                <a
                  href="#"
                  className="inline-block bg-cyber-red-500 text-white px-6 py-2 rounded-md hover:bg-cyber-red-600 transition-colors"
                >
                  Join Discord
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
            <Award className="h-12 w-12 text-cyber-red-500 mb-4" />
            <h2 className="text-2xl font-bold mb-6">Community Guidelines</h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                To maintain a positive and productive environment, we ask all members to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Respect all community members and their opinions</li>
                <li>Share knowledge and experiences constructively</li>
                <li>Maintain professional conduct in all interactions</li>
                <li>Follow ethical guidelines in cybersecurity discussions</li>
                <li>Contribute positively to the community's growth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage; 