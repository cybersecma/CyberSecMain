import { Users, Shield, Target, Heart, CheckCircle, Linkedin, MessageSquareText, Bot } from 'lucide-react';

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-20">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center px-4 py-2 rounded-md bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 transition-all duration-300 transform hover:scale-105">
              <Users className="h-5 w-5 text-red-500 mr-2 animate-pulse" />
              <span className="text-sm font-medium text-red-500">Moroccan Cybersecurity Community</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in leading-tight">
            Building a Safer Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">Morocco</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed animate-fade-in max-w-2xl mx-auto mb-10">
            Join a non-profit ecosystem of researchers, professionals, and enthusiasts dedicated to elevating Morocco's national security posture.
          </p>
          
          {/* Social Links - Modern Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <a
              href="https://discord.com/invite/GhX2KzNqRZ"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-4 bg-[#5865F2]/10 border border-[#5865F2]/30 rounded-xl hover:bg-[#5865F2]/20 transition-all duration-300"
            >
              <Bot className="w-6 h-6 text-[#5865F2] mr-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-[#5865F2]">Discord Server</span>
            </a>
            <a 
              href="https://www.linkedin.com/groups/10081631/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-4 bg-[#0077b5]/10 border border-[#0077b5]/30 rounded-xl hover:bg-[#0077b5]/20 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-[#0077b5] mr-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-[#0077b5]">LinkedIn Group</span>
            </a>
            <a 
              href="https://chat.whatsapp.com/EXp857CsQSdL5m2ZauHKgh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center justify-center p-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl hover:bg-[#25D366]/20 transition-all duration-300"
            >
              <MessageSquareText className="w-6 h-6 text-[#25D366] mr-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-[#25D366]">WhatsApp Community</span>
            </a>
          </div>
        </section>

        {/* Non-Lucrative Mission Section */}
        <section className="mb-20">
          <div className="relative bg-gray-900/30 border border-gray-800 rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Heart className="h-6 w-6 text-red-500" />
                  <h2 className="text-3xl font-bold text-white">Our Mission & Commitment</h2>
                </div>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    CyberSec.ma is strictly a <span className="text-white font-semibold">non-lucrative initiative</span>. Our target is not financial gain, but national impact. We are driven by a singular purpose: to improve the cybersecurity level in Morocco.
                  </p>
                  <p>
                    We exist to bridge the gap between academic theory and practical reality. Through collaborative research, timely threat alerts, and open knowledge sharing, we aim to build a resilient digital defense for our country.
                  </p>
                  <p>
                    Every resource, tool, and guide we provide is free and open-source, contributed by volunteers who believe in securing our collective future.
                  </p>
                </div>
              </div>
              
              <div className="grid gap-4">
                {[
                  { title: "Research & Development", desc: "Conducting and publishing studies on local threat landscapes." },
                  { title: "Public Awareness", desc: "Demystifying security for businesses and citizens." },
                  { title: "Talent Growth", desc: "Mentoring the next generation of Moroccan ethical hackers." },
                  { title: "Threat Intelligence", desc: "Rapid dissemination of critical vulnerability alerts." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start p-4 bg-black/50 rounded-lg border border-gray-800">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Grid */}
        <section className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Community Guidelines</h2>
            <p className="text-gray-400">How we operate and collaborate</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="h-8 w-8 text-blue-500" />,
                title: "Ethical Conduct",
                desc: "We use our skills solely for defense and authorized testing. Illegal activities are strictly prohibited."
              },
              {
                icon: <Users className="h-8 w-8 text-purple-500" />,
                title: "Open Collaboration",
                desc: "Knowledge grows when shared. We encourage mentorship and constructive feedback."
              },
              {
                icon: <Target className="h-8 w-8 text-red-500" />,
                title: "National Impact",
                desc: "Our primary focus is the safety and resilience of Moroccan digital infrastructure."
              }
            ].map((item, index) => (
              <div key={index} className="bg-black p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors text-center">
                <div className="inline-flex p-3 rounded-lg bg-gray-900 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommunityPage;
