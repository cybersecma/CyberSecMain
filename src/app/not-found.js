"use client";

import Link from 'next/link';
import styles from './page.module.css';

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <h1 className={styles.title}>404 - Page Not Found</h1>
          <p className={styles.description}>The page you are looking for does not exist.</p>
          <div className={styles.links}>
            <Link href="/" className={styles.link}>
              <span className={styles.linkText}>Go back to home</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
