import Link from 'next/link';
import styles from '../app/page.module.css'; // Using existing styles

export default function Navigation() {
  return (
    <nav className={styles.navHeader}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link href="/" className={styles.navLink}>Home</Link></li>
        <li className={styles.navItem}><Link href="/us" className={styles.navLink}>Us</Link></li>
        <li className={styles.navItem}><Link href="/links" className={styles.navLink}>Links</Link></li>
        <li className={styles.navItem}><Link href="/blog" className={styles.navLink}>Blog</Link></li>
      </ul>
    </nav>
  );
}
