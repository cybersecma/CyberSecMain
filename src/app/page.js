// --- src/app/page.js ---
"use client";

import Image from 'next/image';
import styles from './page.module.css';
import { FaLinkedinIn, FaDiscord, FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  const links = [
    {
      title: 'LinkedIn Professional Network',
      url: 'https://www.linkedin.com/groups/10081631/',
      icon: 'linkedin'
    },
    {
      title: 'Discord Community',
      url: 'https://discord.gg/5TT3TKxmWY',
      icon: 'discord'
    },
    {
      title: 'WhatsApp Group',
      url: 'https://chat.whatsapp.com/LbM0CTfFDbS8hjHo2NBuml',
      icon: 'whatsapp'
    }
  ];

  const expertiseTags = [
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

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'linkedin':
        return <FaLinkedinIn color="#cc0000" />;
      case 'discord':
        return <FaDiscord color="#cc0000" />;
      case 'whatsapp':
        return <FaWhatsapp color="#cc0000" />;
      default:
        return null;
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
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