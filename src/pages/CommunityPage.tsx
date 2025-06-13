// Import icons from Lucide and React Icons libraries
import { Users, Calendar, MessageSquare, Award, ChevronRight, Linkedin, Shield, Target, BookOpen } from 'lucide-react';
import { FaDiscord, FaWhatsapp } from 'react-icons/fa';

// Sample events data
const events = [
  //{
    //title: "Hangout: Databreaches in Morocco",
    //date: "9pm Morocco time, June 05, 2025", 
    //description: "Learn about modern web security practices"
  //},
  
  
  // Add more events as needed
];

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="max-w-3xl mx-auto text-center mb-20">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center px-4 py-2 rounded-md bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 transition-all duration-300 transform hover:scale-105">
              <Shield className="h-5 w-5 text-red-500 mr-2 animate-pulse" />
              <span className="text-sm font-medium text-red-500">Join Our Community</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in" style={{ animationDuration: '1s', animationFillMode: 'both' }}>
            Connect with Morocco's Security Experts
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed animate-fade-in max-w-2xl mx-auto mb-8" style={{ animationDuration: '1s', animationDelay: '0.2s', animationFillMode: 'both' }}>
            Join a thriving community of 500+ cybersecurity professionals. Share knowledge, collaborate on projects, and advance your career.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://lnkd.in/dJqfZ3bE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-red-500 text-white text-lg font-medium rounded-md hover:bg-purple-600 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/20"
            >
              Join Discord
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <div className="flex items-center space-x-4">
              <a 
                href="https://lnkd.in/dN4tDExq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#25D366] transition-colors duration-300"
              >
                <FaWhatsapp className="w-6 h-6" />
                <span className="sr-only">Join us on WhatsApp</span>
              </a>
              <a 
                href="https://lnkd.in/dhUV2euP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">Follow us on LinkedIn</span>
              </a>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="mb-20">
          <div className="bg-black-800/50 p-6 rounded-lg border border-gray-700 hover:border-red-500">
            <div className="justify-center">
              <div className="flex items-center justify-center mb-4">
                <div className="p-2 bg-black-900 rounded-md mr-4 transition-colors duration-300 group-hover:bg-red-500/10">
                  <Calendar className="h-12 w-12 text-cyber-red-500 mb-4" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-red-500 transition-colors duration-300">
                  <p className="text-xl font-bold mb-3">Upcoming Events</p>
                </h3>
              </div>
              
              {/* Events Grid Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Conditional rendering based on events */}
                {events.length > 0 ? (
                  events.map((event, index) => (
                    <div key={index} className="border-l-2 border-cyber-red-500 pl-4 hover:bg-gray-900/50 p-2 rounded transition-colors duration-200">
                      <h3 className="font-semibold">{event.title}</h3>
                      <p className="text-sm text-gray-400">{event.date}</p>
                      {event.description && (
                        <p className="text-sm text-gray-500 mt-1">{event.description}</p>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-6">
                    <p className="text-gray-500 italic">No upcoming events scheduled. Check back later!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Community Benefits Section */}
        <div className="grid md:grid-cols-1 gap-6 mb-20">
          {[
            {
              icon: <Shield className="h-8 w-8 text-red-500 transform transition-transform group-hover:rotate-12" />,
              title: "Community Benefits",
              description: "• Access to exclusive cybersecurity resources\n• Networking with industry professionals\n• Participation in workshops and events\n• Knowledge sharing and collaboration\n• Career development opportunities\n"
            },
          ].map((item, index) => (
            <div key={index} 
              className="group bg-black p-6 rounded-md border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 transform hover:-translate-y-1">
              <div className="flex items-center justify-center mb-4">
                <div className="p-2 bg-gray-900 rounded-md mr-4 transition-colors duration-300 group-hover:bg-red-500/10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-red-500 transition-colors duration-300">{item.title}</h3>
              </div>
              <div className="text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-300">
                {item.description.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Community Guidelines Section */}
        <div className="grid md:grid-cols-1 gap-6 mb-20">
          {[
            {
              icon: <Shield className="h-8 w-8 text-red-500 transform transition-transform group-hover:rotate-12" />,
              title: "Community guidelines",
              description: "Respect all community members and their opinions\nShare knowledge and experiences constructively\nMaintain professional conduct in all interactions\nFollow ethical guidelines in cybersecurity discussions\nContribute positively to the community's growth"
            },
          ].map((item, index) => (
            <div key={index} 
              className="group bg-black p-6 rounded-md border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 transform hover:-translate-y-1">
              <div className="flex items-center justify-center mb-4">
                <div className="p-2 bg-gray-900 rounded-md mr-4 transition-colors duration-300 group-hover:bg-red-500/10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-red-500 transition-colors duration-300">{item.title}</h3>
              </div>
              <div className="text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-300">
                {item.description.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;