import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag, Copy, Check } from 'lucide-react';
import { Post } from '../types';
import { usePosts } from '../context/PostContext';
import { formatDate } from '../utils/formatters';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { Components } from 'react-markdown';
import AuthorBio from '../components/AuthorBio';
import YouTubeEmbed from '../components/YouTubeEmbed';

interface CodeBlockProps {
  language: string;
  children: string;
}

const CodeBlock = ({ language, children }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button 
        className="code-copy-button"
        onClick={handleCopy}
        aria-label="Copy code"
      >
        {copied ? (
          <>
            <Check className="w-3 h-3 mr-1 inline" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-3 h-3 mr-1 inline" />
            Copy
          </>
        )}
      </button>
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={language}
        PreTag="div"
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  );
};

// Add custom link component
const MarkdownLink: Components['a'] = ({ href, children }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:underline underline-offset-4 decoration-blue-500 transition-colors"
    >
      {children}
    </a>
  );
};

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
    <>
      {/* Hero Image Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        {post?.coverImage && (
          <>
            {post.coverImage.endsWith('.mp4') || post.coverImage.endsWith('.webm') || post.coverImage.endsWith('.mov') ? (
              <video
                src={post.coverImage}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <img
                src={post.coverImage}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20" />
        
        <div className="relative z-30 container mx-auto px-4 h-full flex flex-col justify-center items-center pt-20">
          <div className="max-w-4xl lg:max-w-5xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{post?.title}</h1>
            <div className="flex flex-wrap items-center justify-center text-sm text-gray-300 gap-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post?.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post && formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post?.readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl lg:max-w-5xl mx-auto">
            <div className="mb-8">
              <Link 
                to="/articles" 
                className="text-gray-400 hover:text-red-500 inline-flex items-center transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Articles
              </Link>
            </div>
          
          {/* Post Content */}
            <div className="prose prose-invert prose-red [&_.highlight-red]:!text-[#FF3333] [&_span.highlight-red]:!text-[#FF3333] max-w-none mb-12 prose-lg">
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
              components={{
                  code: ({ className, children, ...props }: any) => {
                    const match = /language-(\w+)/.exec(className || '');
                    const lang = match ? match[1] : '';
                    const isInline = !lang;
                    
                    if (!isInline) {
                      return (
                        <CodeBlock language={lang}>
                      {String(children).replace(/\n$/, '')}
                        </CodeBlock>
                      );
                    }
                    
                    return (
                    <code className={className} {...props}>
                      {children}
                    </code>
                    );
                  },
                  p: ({ node, children }) => {
                    const childNode = node?.children[0];
                    
                    if (
                      childNode?.type === 'text' &&
                      typeof childNode.value === 'string'
                    ) {
                      if (childNode.value.startsWith('youtube:')) {
                        const videoId = childNode.value.split('youtube:')[1].trim();
                        return <YouTubeEmbed videoId={videoId} />;
                      }
                      
                      if (childNode.value.startsWith('author:')) {
                        try {
                          const authorData = JSON.parse(childNode.value.split('author:')[1].trim());
                          return (
                            <AuthorBio
                              name={authorData.name || post?.author || ''}
                              avatar={authorData.avatar}
                              role={authorData.role}
                              description={authorData.description}
                            />
                          );
                        } catch (e) {
                          console.error('Failed to parse author data:', e);
                          return (
                            <AuthorBio name={post?.author || ''} />
                          );
                        }
                      }
                    }
                    
                    return <p>{children}</p>;
                  },
                  a: MarkdownLink
                }}
              >
                {post?.content || ''}
            </ReactMarkdown>
          </div>
          
          {/* Author Bio Section */}
          {post?.author && (
            <div className="mb-12">
              <AuthorBio
                name={post.author}
                avatar={post.authorAvatar}
                role="Cybersecurity Expert"
                description={`${post.author} is a cybersecurity professional sharing knowledge and expertise in the field.`}
              />
            </div>
          )}
          
          {/* Tags */}
            {post?.tags && post.tags.length > 0 && (
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPage;