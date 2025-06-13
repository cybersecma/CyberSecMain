import { useState } from 'react';
import PostCard from './PostCard';
import { Post } from '../types';

interface PostListProps {
  posts: Post[];
  title?: string;
  description?: string;
}

const PostList = ({ posts, title, description }: PostListProps) => {
  const [visiblePosts, setVisiblePosts] = useState(6); // Show 6 posts initially

  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 6); // Load 6 more posts each time
  };

  const hasMorePosts = visiblePosts < posts.length;

  if (posts.length === 0) {
    return (
      <div className="py-20 text-center">
        <h3 className="text-xl mb-4">No posts found</h3>
        <p className="text-gray-400">Try searching with different keywords.</p>
      </div>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {title && <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>}
        {description && <p className="text-gray-400 mb-10">{description}</p>}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, visiblePosts).map((post, index) => (
            <div 
              key={post.id}
              className="animate-fade-in"
              style={{ 
                animationDuration: '1s', 
                animationDelay: `${0.3 + (index * 0.1)}s`, 
                animationFillMode: 'both' 
              }}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>

        {hasMorePosts && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMorePosts}
              className="inline-flex items-center px-6 py-3 bg-red-500 text-white text-lg font-medium rounded-md hover:bg-red-600 transition-all duration-200 hover:shadow-lg hover:shadow-red-500/20"
            >
              Load More Posts
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PostList;