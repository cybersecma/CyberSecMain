
interface AuthorBioProps {
  name: string;
  role?: string;
  description?: string;
}

const AuthorBio = ({ name, role, description }: AuthorBioProps) => {
  return (
    <div className="mb-12 bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border border-gray-800 hover:border-red-500/30 transition-all duration-300">
      <div className="mb-4">
        <h3 className="font-bold text-lg text-white">{name}</h3>
        {role && <p className="text-gray-400 text-sm">{role}</p>}
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