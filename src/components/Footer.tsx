import { Link } from 'react-router-dom';
import { Shield, Book, Users, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
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
              Join Morocco's leading cybersecurity community for the latest insights, news, and techniques from our expert network.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contact@cybersec.ma" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Book className="w-5 h-5 mr-2 text-red-500" />
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/tools" className="text-gray-400 hover:text-white transition-colors">Tools</Link>
              </li>
              <li>
                <Link to="/glossary" className="text-gray-400 hover:text-white transition-colors">Glossary</Link>
              </li>
              <li>
                <Link to="/cve" className="text-gray-400 hover:text-white transition-colors">CVE Database</Link>
              </li>
              <li>
                <Link to="/learning" className="text-gray-400 hover:text-white transition-colors">Learning Paths</Link>
              </li>
              <li>
                <Link to="/forum" className="text-gray-400 hover:text-white transition-colors">Community Forum</Link>
              </li>
            </ul>
          </div>

          {/* Get Involved Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-red-500" />
              Get Involved
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/join" className="text-gray-400 hover:text-white transition-colors">Join the Community</Link>
              </li>
              <li>
                <Link to="/contribute" className="text-gray-400 hover:text-white transition-colors">Contribute an Article</Link>
              </li>
              <li>
                <Link to="/suggest" className="text-gray-400 hover:text-white transition-colors">Suggest a Topic</Link>
              </li>
              <li>
                <Link to="/report" className="text-gray-400 hover:text-white transition-colors">Report a Vulnerability</Link>
              </li>
            </ul>
          </div>

          {/* Discord Section */}
          <div>
            <h3 className="text-red-500 font-semibold mb-4">Join our Discord</h3>
            <p className="text-gray-400 text-sm mb-4">
              Connect with the community in real time, ask questions, and join discussions.
            </p>
            <a
              href="https://discord.gg/your-invite"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Join Discord
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} cybersec.ma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;