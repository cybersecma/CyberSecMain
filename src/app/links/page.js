
// filepath: /Users/user/cybersec-morocco-linktree/src/app/links/page.js
"use client";

import styles from '../page.module.css';
import { FaLinkedinIn, FaDiscord, FaWhatsapp } from 'react-icons/fa';

const linksData = [
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
    title: 'WhatsApp Community',
    url: 'https://chat.whatsapp.com/EXp857CsQSdL5m2ZauHKgh',
    icon: 'whatsapp'
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

export default function LinksPage() {
  return (
    <section className={styles.section}> {/* Removed id="links" */}
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionTitle}>Our Community Links</h2>
        <div className={styles.links}>
          {linksData.map((link, index) => (
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
      </div>
    </section>
  );
}
