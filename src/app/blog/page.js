
// filepath: /Users/user/cybersec-morocco-linktree/src/app/blog/page.js
"use client";

import styles from '../page.module.css';

const blogPostsData = [
  {
    title: "The Future of Cybersecurity in AI Era",
    date: "May 14, 2025",
    excerpt: "As AI continues to evolve, so do the cybersecurity challenges it presents. In this post, we explore the emerging threats and solutions...",
    url: "#" // Replace with actual blog post URL
  },
  {
    title: "Cloud Security Best Practices",
    date: "April 28, 2025",
    excerpt: "With more organizations migrating to the cloud, implementing robust security measures has never been more crucial...",
    url: "#" // Replace with actual blog post URL
  },
  {
    title: "Network Security Fundamentals",
    date: "April 15, 2025",
    excerpt: "A comprehensive guide to securing your network infrastructure against modern threats...",
    url: "#" // Replace with actual blog post URL
  }
];

export default function BlogPage() {
  return (
    <section className={styles.section}> {/* Removed id="blog" */}
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionTitle}>Latest Blog Posts</h2>
        <div className={styles.blogPosts}>
          {blogPostsData.map((post, index) => (
            <div key={index} className={styles.blogPost}>
              <h3 className={styles.blogPostTitle}>{post.title}</h3>
              <p className={styles.blogPostDate}>{post.date}</p>
              <p className={styles.blogPostExcerpt}>{post.excerpt}</p>
              <a href={post.url} className={styles.readMore}>Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
