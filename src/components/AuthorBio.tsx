import { useState } from 'react';

interface AuthorBioProps {
  name: string;
  avatar?: string;
  role?: string;
  description?: string;
}

const AuthorBio = ({ name, avatar, role, description }: AuthorBioProps) => {
  const [imageError, setImageError] = useState(false);
  const defaultAvatar = "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100";

  const handleImageError = () => {
    setImageError(true);
  };

  const getAvatarSrc = () => {
    if (imageError || !avatar) {
      return defaultAvatar;
    }
    // Handle relative paths
    if (avatar.startsWith('/')) {
      return avatar;
    }
    return avatar;
  };
  return (
    <div className="mb-12 bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border border-gray-800 hover:border-red-500/30 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 mr-4 overflow-hidden ring-2 ring-red-500/20">
          <img
            src={getAvatarSrc()}
            alt={name}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        </div>
        <div>
          <h3 className="font-bold text-lg text-white">{name}</h3>
          {role && <p className="text-gray-400 text-sm">{role}</p>}
        </div>
      </div>
      {description && (
        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default AuthorBio; 