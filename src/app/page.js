"use client";

import styles from './page.module.css';

export default function HomePage() {
  return (
    <section className={styles.section}> {/* Removed id="home" */}
      <div className={styles.sectionContent}>
        <h1 className={styles.mainTitle}>CYBERSEC MOROCCO</h1>
        <p className={styles.mainDescription}>Community of Cybersecurity Professionals</p>
      </div>
    </section>
  );
}
