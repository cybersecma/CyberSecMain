import { Shield, Database, Lock } from 'lucide-react';
import ShaiHulud from '../components/ShaiHulud';

const PublicIntelligencePage = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-4 py-2 rounded-md bg-blue-500/10 border border-blue-500/30">
              <Shield className="h-5 w-5 text-blue-500 mr-2" />
              <span className="text-sm font-medium text-blue-500">Public Intelligence Division</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Open Source <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Intelligence</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Access our public database of compromised accounts and security incidents. 
            Check if your organization or personal accounts have been exposed.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid gap-8 max-w-5xl mx-auto">
          {/* Shai Hulud Tool */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-500 blur"></div>
            <div className="relative bg-black border border-gray-800 rounded-2xl p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    <Database className="h-8 w-8 text-red-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Shai Hulud 2.0</h2>
                    <p className="text-gray-500">GitHub & Organization Leak Checker</p>
                  </div>
                </div>
                <div className="hidden md:flex items-center text-xs text-gray-500 font-mono border border-gray-800 rounded-md px-3 py-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                  DATABASE ONLINE
                </div>
              </div>

              <ShaiHulud />
              
              <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-500 flex items-center justify-between">
                <div className="flex items-center">
                  <Lock className="h-4 w-4 mr-2" />
                  <span>Secure Client-Side Hashing</span>
                </div>
                <p>Your queries never leave your browser</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicIntelligencePage;

