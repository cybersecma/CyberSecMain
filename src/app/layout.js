// --- src/app/layout.js ---
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}