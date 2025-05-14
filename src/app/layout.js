// --- src/app/layout.js ---
import './globals.css';
import Navigation from '../components/Navigation'; // Import Navigation
import Footer from '../components/Footer'; // Import Footer
import styles from './page.module.css'; // Import styles for main container

export const metadata = {
  title: 'CYBERSEC MOROCCO',
  description: 'Community of Cybersecurity Professionals in Morocco',
  metadataBase: new URL('https://cybersec.ma'),
  openGraph: {
    title: 'CYBERSEC MOROCCO',
    description: 'Community of Cybersecurity Professionals in Morocco',
    url: 'https://cybersec.ma',
    siteName: 'CYBERSEC MOROCCO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CYBERSEC MOROCCO',
    description: 'Community of Cybersecurity Professionals in Morocco',
  },
  alternates: {
    canonical: 'https://cybersec.ma',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://cybersec.ma" />
      </head>
      <body>
        <div className={styles.main}> {/* Added main wrapper from page.module.css */}
          <div className={styles.container}> {/* Added container from page.module.css */}
            <Navigation />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}