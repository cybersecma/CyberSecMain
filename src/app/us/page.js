
// filepath: /Users/user/cybersec-morocco-linktree/src/app/us/page.js
"use client";

import styles from '../page.module.css';

const expertiseTagsData = [
  {
    name: 'Cloud Security',
    url: 'https://discord.com/channels/1362390767317946388/1362390767917863109'
  },
  {
    name: 'AI Security',
    url: 'https://discord.com/channels/1362390767317946388/1362665836237688932'
  },
  {
    name: 'Network Security',
    url: 'https://discord.com/channels/1362390767317946388/1362390767917863109'
  }
];

export default function UsPage() {
  return (
    <section className={styles.section}> {/* Removed id="us" */}
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionTitle}>About Us</h2>
        <p className={styles.mainDescription}>
          CYBERSEC MOROCCO is a vibrant community dedicated to advancing cybersecurity knowledge and practices within Morocco and beyond. We focus on collaboration, learning, and sharing expertise across various domains of cybersecurity.
        </p>
        <div className={styles.expertise}>
          {expertiseTagsData.map((tag, index) => (
            <a
              key={index}
              href={tag.url}
              className={styles.expertiseTag}
              target="_blank"
              rel="noopener noreferrer"
            >
              {tag.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
