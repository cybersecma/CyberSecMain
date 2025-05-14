import Link from 'next/link';
import styles from '../page.module.css';
import { getSortedPostsData } from '../../lib/posts'; // Import the new function

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <section className={styles.section}>
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionTitle}>Latest Blog Posts</h2>
        <div className={styles.blogPosts}>
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <div key={id} className={styles.blogPost}>
              <h3 className={styles.blogPostTitle}>{title}</h3>
              <p className={styles.blogPostDate}>{date}</p>
              <p className={styles.blogPostExcerpt}>{excerpt}</p>
              <Link href={`/blog/${id}`} className={styles.readMore}>Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
