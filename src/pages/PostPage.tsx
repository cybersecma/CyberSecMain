import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { Post } from '../types';
import { usePosts } from '../context/PostContext';
import { formatDate } from '../utils/formatters';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts, loading, error, fetchPosts } = usePosts();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (posts.length === 0) {
      fetchPosts();
    } else {
      const currentPost = posts.find(p => p.slug === slug);
      setPost(currentPost || null);
    }
  }, [slug, posts, fetchPosts]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader">
          <div className="loader-text">DECRYPTING ARTICLE</div>
          <div className="loader-bar"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h2 className="text-2xl text-cyber-red-500 mb-4">Error Loading Article</h2>
        <p className="text-gray-300 mb-6">{error}</p>
        <button 
          onClick={() => fetchPosts()}
          className="btn btn-primary"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h2 className="text-2xl text-cyber-red-500 mb-4">Article Not Found</h2>
        <p className="text-gray-300 mb-6">The article you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link to="/" className="text-gray-400 hover:text-cyber-red-500 inline-flex items-center transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>
          </div>
          
          {/* Post Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center text-sm text-gray-400 mb-6">
              <div className="flex items-center mr-6 mb-2">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </header>
          
          {/* Post Content */}
          <div className="prose prose-invert prose-red max-w-none mb-12">
            <ReactMarkdown
              components={{
                code({node, inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      language={match[1]}
                      style={vscDarkPlus}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                }
              }}
            >
              {post.content || ''}
            </ReactMarkdown>
          </div>
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mb-12">
              <div className="flex items-start">
                <Tag className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                <div className="flex flex-wrap">
                  {post.tags.map((tag, index) => (
                    <Link
                      key={index}
                      to={`/search?tag=${encodeURIComponent(tag)}`}
                      className="text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-1 rounded-full mr-2 mb-2 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Author Bio */}
          <div className="mb-12 bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-cyber-red-500 mr-4 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Author"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{post.author}</h3>
                <p className="text-gray-400 text-sm">Cybersecurity experts sharing knowledge and best practices.</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              The Moroccan Cyber Security Community is a collective of cybersecurity professionals and enthusiasts dedicated to advancing security awareness, education, and collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;