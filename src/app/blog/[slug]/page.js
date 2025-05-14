import styles from '../../../app/page.module.css';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import { notFound } from 'next/navigation'; // Import notFound

export async function generateStaticParams() {
  // Get all valid post slugs
  const paths = getAllPostIds();
  const params = paths.map(({ params }) => params);
  
  // Remove debug log in production
  console.log('Generated paths:', JSON.stringify(params, null, 2));
  
  return params;
}

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.slug);
  if (!postData) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: postData.title,
  };
}

export default async function BlogPostPage({ params }) { // Made component async
  const postData = await getPostData(params.slug); // Fetch post data

  // If post doesn't exist, trigger 404 page
  if (!postData) {
    notFound(); // This will trigger the not-found.js page
  }

  return (
    <section className={styles.section}>
      <div className={styles.sectionContent}>
        <h1 className={styles.articleTitle}>{postData.title}</h1>
        <p className={styles.blogPostDate}>{postData.date}</p>
        <div 
          className={styles.blogPostFullContent} 
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} // Use contentHtml
        />
        <div className={styles.articleMeta}>
          <p>Written by: {postData.author || 'Cybersecurity Morocco Community'}</p>
          <p>Published on: {postData.date}</p>
        </div>
      </div>
    </section>
  );
}
