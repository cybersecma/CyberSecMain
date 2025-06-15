import { Post } from '../types';

// Import all markdown files from the posts directory and its subdirectories
const posts = import.meta.glob('../posts/**/*.md', { as: 'raw' });

export const getPostSlugFromFilename = (filename: string): string => {
  return filename.replace(/\.md$/, '').split('/').pop() || '';
};

const parseFrontmatter = (content: string): { data: any; content: string } => {
  // Allow for optional whitespace before the first --- and support \r\n or \n
  const frontmatterRegex = /^\s*---[\r\n]+([\s\S]*?)[\r\n]+---[\r\n]+([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content };
  }

  const [, frontmatter, markdownContent] = match;
  const data: Record<string, any> = {};

  // Parse frontmatter
  frontmatter.split(/\r?\n/).forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim();
      try {
        // Try to parse as JSON for arrays and objects
        data[key.trim()] = JSON.parse(value);
      } catch {
        // If not JSON, use as string
        data[key.trim()] = value.replace(/^\"|\"$/g, '').replace(/^'|'$/g, '');
      }
    }
  });

  return { data, content: markdownContent };
};

export const getPostFromFile = async (filePath: string, content: string): Promise<Post & { pinned?: boolean }> => {
  try {
    const { data, content: markdownContent } = parseFrontmatter(content);
    const filename = filePath.split('/').pop() || '';
    
    // Ensure required fields have default values
    const post = {
      id: data.id || getPostSlugFromFilename(filename),
      title: data.title || 'Untitled',
      slug: data.slug || getPostSlugFromFilename(filename),
      excerpt: data.excerpt || '',
      content: markdownContent,
      author: data.author || 'Unknown Author',
      authorAvatar: data.authorAvatar,
      publishedAt: data.publishedAt || new Date().toISOString(),
      updatedAt: data.updatedAt,
      coverImage: data.coverImage || '',
      thumbnail: data.thumbnail,
      tags: data.tags || [],
      readingTime: data.readingTime || Math.ceil(markdownContent.split(/\s+/).length / 200),
      pinned: data.pinned === true || data.pinned === 'true',
    };
    
    return post;
  } catch (error) {
    console.error('Error processing file:', filePath, error);
    throw error;
  }
};

export const getAllPosts = async (): Promise<(Post & { pinned?: boolean })[]> => {
  const postPromises = Object.entries(posts).map(async ([filePath, getContent]) => {
    const content = await getContent();
    return getPostFromFile(filePath, content as string);
  });
  const fetchedPosts = await Promise.all(postPromises);
  // Sort: pinned first, then by publishedAt
  return fetchedPosts.sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}; 