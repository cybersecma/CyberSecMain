import PostCard from './PostCard';
import { Post } from '../types';

interface PostListProps {
  posts: Post[];
  title?: string;
  description?: string;
}

const PostList = ({ posts, title, description }: PostListProps) => {
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
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostList;