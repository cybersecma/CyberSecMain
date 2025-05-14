import styles from '../app/page.module.css'; // Using existing styles

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} CYBERSEC MOROCCO</p>
    </footer>
  );
}
