// --- src/app/layout.js ---
import './globals.css';

export const metadata = {
  title: 'CYBERSEC MOROCCO',
  description: 'Community of Cybersecurity Professionals in Morocco',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}