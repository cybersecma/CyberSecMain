import { Users, Target, BookOpen, Heart, Shield, Network, Code, Lock } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center px-4 py-2 rounded-md bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 transition-all duration-300 transform hover:scale-105">
              <Shield className="h-5 w-5 text-red-500 mr-2 animate-pulse" />
              <span className="text-sm font-medium text-red-500">About Our Community</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in" style={{ animationDuration: '1s', animationFillMode: 'both' }}>
            Securing Morocco's Digital Future
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed animate-fade-in" style={{ animationDuration: '1s', animationDelay: '0.2s', animationFillMode: 'both' }}>
            We're building Morocco's premier cybersecurity ecosystem through education, collaboration, and cutting-edge innovation.
              </p>
            </div>

        {/* Mission/Vision Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {[
            {
              icon: <Target className="h-8 w-8 text-red-500 transform transition-transform group-hover:rotate-12" />,
              title: "Our Mission",
              description: "To cultivate Morocco's cybersecurity talent through knowledge sharing, hands-on training, and community building. We empower professionals and enthusiasts to secure our nation's digital infrastructure."
            },
            {
              icon: <BookOpen className="h-8 w-8 text-red-500 transform transition-transform group-hover:scale-110" />,
              title: "Our Vision",
              description: "To establish Morocco as a regional cybersecurity leader by 2030, with a self-sustaining ecosystem of skilled professionals, innovative startups, and world-class research."
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
              <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-300">{item.description}</p>
            </div>
          ))}
        </div>

        {/* What We Do Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What We Do</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Our initiatives span across multiple domains of cybersecurity
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Education",
                description: "Workshops, training sessions, and certification programs"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Community",
                description: "Regular meetups, networking events, and knowledge sharing"
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Research",
                description: "Cutting-edge cybersecurity research and development"
              },
              {
                icon: <Lock className="h-8 w-8" />,
                title: "Consulting",
                description: "Expert security consulting and advisory services"
              }
            ].map((item, index) => (
              <div key={index} className="group p-6 rounded-md border border-gray-800 hover:border-red-500/50 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-red-500/10 rounded-md text-red-500 group-hover:bg-red-500/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-black p-8 rounded-md border border-gray-800 max-w-6xl mx-auto hover:border-red-500/30 transition-all duration-300">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-1 text-white">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These principles guide everything we do as a community
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Heart className="h-8 w-8 text-red-500 transform transition-transform group-hover:scale-110" />, title: "Integrity", description: "Uncompromising ethical standards in all our activities" },
              { icon: <BookOpen className="h-8 w-8 text-red-500 transform transition-transform group-hover:rotate-6" />, title: "Knowledge", description: "Continuous learning and sharing expertise" },
              { icon: <Users className="h-8 w-8 text-red-500 transform transition-transform group-hover:-rotate-6" />, title: "Inclusion", description: "Welcoming all backgrounds and skill levels" },
              { icon: <Target className="h-8 w-8 text-red-500 transform transition-transform group-hover:rotate-12" />, title: "Impact", description: "Driving real change in Morocco's security posture" }
            ].map((item, index) => (
              <div key={index} className="group text-center transform transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center p-4 bg-gray-900 rounded-md mb-4 transition-colors duration-300 group-hover:bg-red-500/10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-red-500 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 
