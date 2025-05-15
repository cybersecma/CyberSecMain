import { Users, Target, BookOpen, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About the Moroccan Cyber Security Community</h1>
            <p className="text-gray-300 text-lg">
              Empowering Morocco's cybersecurity landscape through collaboration, education, and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 justify-center items-center">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 flex flex-col items-center text-center">
              <Target className="h-12 w-12 text-cyber-red-500 mb-4" />
              <h2 className="text-xl font-bold mb-3">Our Mission</h2>
              <p className="text-gray-300">
                To foster a vibrant, inclusive, and skilled cybersecurity community in Morocco by sharing knowledge, supporting professional growth, and promoting best practices.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 flex flex-col items-center text-center">
              <BookOpen className="h-12 w-12 text-cyber-red-500 mb-4" />
              <h2 className="text-xl font-bold mb-3">Our Vision</h2>
              <p className="text-gray-300">
                To be the leading hub for cybersecurity expertise, innovation, and collaboration in Morocco and beyond.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 mb-16 flex flex-col items-center text-center">
            <Users className="h-12 w-12 text-cyber-red-500 mb-4" />
            <h2 className="text-2xl font-bold mb-6">What We Do</h2>
            <ul className="text-gray-300 space-y-2 max-w-xl mx-auto">
              <li>• Organize workshops, webinars, and CTF competitions</li>
              <li>• Share the latest research, news, and best practices</li>
              <li>• Support career development and mentorship</li>
              <li>• Foster a collaborative and inclusive environment</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 flex flex-col items-center text-center">
            <Heart className="h-12 w-12 text-cyber-red-500 mb-4" />
            <h2 className="text-2xl font-bold mb-6">Our Values</h2>
            <ul className="text-gray-300 space-y-2 max-w-xl mx-auto">
              <li>• Integrity and ethical conduct</li>
              <li>• Continuous learning and improvement</li>
              <li>• Diversity, inclusion, and respect</li>
              <li>• Community-driven collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 