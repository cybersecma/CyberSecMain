import React from 'react';

interface AuthorBioProps {
  name: string;
  avatar?: string;
  role?: string;
  description?: string;
}

const AuthorBio = ({ name, avatar, role, description }: AuthorBioProps) => {
  const defaultAvatar = "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100";
  const defaultRole = "Cybersecurity experts sharing knowledge and best practices.";
  const defaultDescription = "The Moroccan Cyber Security Community is a collective of cybersecurity professionals and enthusiasts dedicated to advancing security awareness, education, and collaboration.";

  return (
    <div className="mb-12 bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border border-gray-800 hover:border-red-500/30 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 mr-4 overflow-hidden ring-2 ring-red-500/20">
          <img
            src={avatar || defaultAvatar}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = defaultAvatar;
            }}
          />
        </div>
        <div>
          <h3 className="font-bold text-lg text-white">{name}</h3>
          <p className="text-gray-400 text-sm">{role || defaultRole}</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">
        {description || defaultDescription}
      </p>
    </div>
  );
};

export default AuthorBio; 