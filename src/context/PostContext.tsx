import { createContext, useContext, useState, useCallback, ReactNode, startTransition } from 'react';
import { Post } from '../types';
import { getAllPosts } from '../utils/markdown';

interface PostContextType {
  posts: Post[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
  getPostBySlug: (slug: string) => Post | undefined;
}

const PostContext = createContext<PostContextType>({
  posts: [],
  loading: false,
  error: null,
  fetchPosts: async () => {},
  getPostBySlug: () => undefined,
});

export const usePosts = () => useContext(PostContext);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const fetchedPosts = await getAllPosts();
      // Use startTransition for state updates
      startTransition(() => {
        setPosts(fetchedPosts.map(post => ({
          ...post,
          author: "Moroccan Cyber Security Community"
        })));
      });
    } catch (err) {
      setError('Failed to load posts. Please try again later.');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const getPostBySlug = useCallback(
    (slug: string) => posts.find(post => post.slug === slug),
    [posts]
  );

  return (
    <PostContext.Provider value={{ posts, loading, error, fetchPosts, getPostBySlug }}>
      {children}
    </PostContext.Provider>
  );
};