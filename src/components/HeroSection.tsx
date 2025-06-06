import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Linkedin, MessageSquareText, Bot } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-20">
      {/* Animated background element */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-cyber-red-500 rounded-full filter blur-[150px] opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-[120px] opacity-10 animate-pulse-slow"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="w-5 h-5 text-cyber-red-500" />
              <span className="text-cyber-red-500 font-mono text-sm tracking-wide">MOROCCAN CYBERSECURITY COMMUNITY</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco's Premier <span className="text-cyber-red-500">Cybersecurity</span> Hub
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg">
              Join Morocco's leading community of security professionals sharing insights, techniques, and the latest developments in cyber defense and offensive security.
            </p>

            {/* "Join Us" Text */}
            <div className="mb-4">
              <p className="font-mono text-gray-400">Join us on:</p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/groups/10081631/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-linkedin"
                aria-label="Join our LinkedIn group"
              >
                <Linkedin className="h-7 w-7" />
              </a>
              <a 
                href="https://chat.whatsapp.com/EXp857CsQSdL5m2ZauHKgh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-whatsapp"
                aria-label="Join our WhatsApp group"
              >
                <MessageSquareText className="h-7 w-7" />
              </a>
              <a 
                href="https://discord.com/invite/GhX2KzNqRZ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-discord"
                aria-label="Join our Discord server"
              >
                <Bot className="h-7 w-7" />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Terminal-inspired graphic */}
              <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 transform rotate-2 shadow-red-glow">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <div className="ml-2 text-xs text-gray-400 font-mono">cybersec_terminal</div>
                </div>
                <div className="font-mono text-sm text-gray-200 leading-relaxed">
                  <p className="mb-2">
                    <span className="text-green-400">user@cybersec:</span>
                    <span className="text-blue-400">~$</span> 
                    <span className="text-gray-400"> nmap -sV --script vuln target.com</span>
                  </p>
                  <p className="text-cyber-red-500 font-bold mb-2">
                    # VULNERABILITY SCAN INITIATED
                  </p>
                  <p className="mb-1 text-xs">
                    <span className="text-gray-500">[+]</span> Scanning for open ports...
                  </p>
                  <p className="mb-1 text-xs">
                    <span className="text-gray-500">[+]</span> Detecting service versions...
                  </p>
                  <p className="mb-1 text-xs animate-pulse">
                    <span className="text-cyber-red-500">[!]</span> Critical vulnerability found: CVE-2023-1337
                  </p>
                  <p className="mb-1 text-xs">
                    <span className="text-gray-500">[+]</span> Check our latest article on mitigation.
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-cyber-red-500/10 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyber-red-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;