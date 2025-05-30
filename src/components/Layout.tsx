import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Layout = () => {
  useEffect(() => {
    // Update document title
    document.title = 'CyberSec.ma | Moroccan Cybersecurity Community';
    
    // Update favicon
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = '/favicon.svg';
    }
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>CyberSec.ma | Moroccan Cyber Security Community</title>
        <meta name="description" content="Join Morocco's leading cybersecurity community for the latest insights, news, and techniques from our expert network. Empowering Morocco's cybersecurity landscape through collaboration, education, and innovation." />
        <meta property="og:title" content="CyberSec.ma | Moroccan Cyber Security Community" />
        <meta property="og:description" content="Join Morocco's leading cybersecurity community for the latest insights, news, and techniques from our expert network." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cybersec.ma" />
        <meta property="og:image" content="https://cybersec.ma/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CyberSec.ma | Moroccan Cyber Security Community" />
        <meta name="twitter:description" content="Join Morocco's leading cybersecurity community for the latest insights, news, and techniques from our expert network." />
        <meta name="twitter:image" content="https://cybersec.ma/og-image.png" />
        <link rel="canonical" href="https://cybersec.ma" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Layout;
