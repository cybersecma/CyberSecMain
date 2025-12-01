import { Link } from 'react-router-dom';
import { Shield, Book, Users, MessageSquareText, Linkedin, Bot } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-6 justify-center center-items">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 justify-items-center">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-red-500" />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-white">cyber</span>
                <span className="text-red-500">sec.ma</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
            Morocco's leading cybersecurity community.            </p>
            {/* Social Buttons */}
            <div className="flex space-x-3 pt-2">
              <a 
                href="https://www.linkedin.com/groups/10081631/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-linkedin"
                aria-label="Join our LinkedIn group"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://chat.whatsapp.com/EXp857CsQSdL5m2ZauHKgh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-whatsapp"
                aria-label="Join our WhatsApp group"
              >
                <MessageSquareText className="h-5 w-5" />
              </a>
              <a 
                href="https://discord.com/invite/GhX2KzNqRZ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-discord"
                aria-label="Join our Discord server"
              >
                <Bot className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Book className="w-5 h-5 mr-2 text-red-500" />
              Content
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/articles" className="text-gray-400 hover:text-white transition-colors">Articles</Link>
              </li>
              <li>
                <Link to="/streams" className="text-gray-400 hover:text-white transition-colors">Streams</Link>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-red-500" />
              Community
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/community" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-5 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} cybersec.ma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;