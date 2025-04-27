// --- src/app/page.js ---
"use client";

import Image from 'next/image';
import styles from './page.module.css';
import { FaLinkedinIn, FaDiscord, FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  const links = [
    {
      title: 'LinkedIn Professional Network',
      url: 'https://www.linkedin.com/groups/10081631/', // Replace with actual URL
      icon: 'linkedin'
    },
    {
      title: 'Discord Community',
      url: 'https://discord.gg/5TT3TKxmWY', // Replace with actual URL
      icon: 'discord'
    },
    {
      title: 'WhatsApp Group',
      url: 'https://chat.whatsapp.com/LbM0CTfFDbS8hjHo2NBuml', // Replace with actual URL
      icon: 'whatsapp'
    }
  ];

  const expertiseTags = [
    'Threat Intelligence',
    'Security Architecture',
    'Digital Forensics'
  ];

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'linkedin': return <FaLinkedinIn color="#cc0000" />;
      case 'discord': return <FaDiscord color="#cc0000" />;
      case 'whatsapp': return <FaWhatsapp color="#cc0000" />;
      default: return null;
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Removed the subtle accent div */}
        
        <div className={styles.profile}>
          <div className={styles.imageContainer}>
            <Image
              src="/logo.png"
              alt="CYBERSEC MOROCCO"
              width={80}
              height={90}
              className={styles.profileImage}
            />
          </div>
          <h1 className={styles.title}>CYBERSEC MOROCCO</h1>
          <p className={styles.description}>Community of Cybersecurity Professionals</p>
          
          <div className={styles.expertise}>
            {expertiseTags.map((tag, index) => (
              <span key={index} className={styles.expertiseTag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className={styles.links}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.linkIcon}>
                {getIcon(link.icon)}
              </div>
              <span className={styles.linkText}>{link.title}</span>
            </a>
          ))}
        </div>
        
        <div className={styles.footer}>
          <p>© {new Date().getFullYear()} CYBERSEC MOROCCO</p>
        </div>
      </div>
    </main>
  );
}
