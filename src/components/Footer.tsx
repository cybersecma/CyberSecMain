import { Link } from 'react-router-dom';
import { Shield, Twitter, Github, Linkedin, Mail, Users, BookOpen } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-gray border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-12 gap-y-10 justify-center items-start text-center">
              <div className="flex flex-col items-center">
                <Link to="/" className="flex items-center justify-center">
                  <Shield className="h-8 w-8 text-cyber-red-500 mr-2" />
                  <span className="text-xl font-bold tracking-tight">
                    <span className="text-white">cyber</span><span className="text-cyber-red-500">sec.ma</span>
                  </span>
                </Link>
                <p className="mt-4 text-gray-400 text-sm">
                  Join Morocco's leading cybersecurity community for the latest insights, news, and techniques from our expert network.
                </p>
                <div className="flex space-x-4 mt-6 justify-center">
                  <a href="#" className="text-gray-400 hover:text-cyber-red-500 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-cyber-red-500 transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-cyber-red-500 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-cyber-red-500 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-4 flex items-center justify-center"><BookOpen className="h-5 w-5 mr-2 text-cyber-red-500" />Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-cyber-red-500 transition-colors">Tools</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-cyber-red-500 transition-colors">Glossary</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-cyber-red-500 transition-colors">CVE Database</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-cyber-red-500 transition-colors">Learning Paths</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-cyber-red-500 transition-colors">Community Forum</a></li>
                </ul>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-4 flex items-center justify-center"><Users className="h-5 w-5 mr-2 text-cyber-red-500" />Get Involved</h3>
                <ul className="space-y-2">
                  <li><Link to="/community" className="text-gray-400 hover:text-cyber-red-500 transition-colors">Join the Community</Link></li>
                  <li><a href="#" className="text-gray-400 hover:text-cyber-red-500 transition-colors">Contribute an Article</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-cyber-red-500 transition-colors">Suggest a Topic</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-cyber-red-500 transition-colors">Report a Vulnerability</a></li>
                </ul>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-4 text-cyber-red-500">Join our Discord</h3>
                <p className="text-gray-400 text-sm mb-4">Connect with the community in real time, ask questions, and join discussions.</p>
                <a
                  href="https://discord.gg/your-invite-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cyber-red-500 text-white px-6 py-2 rounded-md hover:bg-cyber-red-600 transition-colors font-semibold shadow"
                >
                  Join Discord
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 w-full flex flex-col items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} cybersec.ma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;