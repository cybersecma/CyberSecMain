// --- src/components/LinkTree.js (FIXED) ---
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaLinkedinIn, FaDiscord, FaWhatsapp } from 'react-icons/fa';
import styles from './LinkTree.css';

export default function LinkTree({ 
  profileImage, 
  title, 
  description, 
  links, 
  expertiseTags 
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'linkedin': return <FaLinkedinIn color="#cc0000" />;
      case 'discord': return <FaDiscord color="#cc0000" />;
      case 'whatsapp': return <FaWhatsapp color="#cc0000" />;
      default: return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.subtleAccent}></div>
      
      <div className={styles.profile}>
        <div className={styles.imageContainer}>
          <Image
            src={profileImage}
            alt={title}
            width={90}
            height={90}
            className={styles.profileImage}
          />
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        
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
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              backgroundColor: hoveredIndex === index ? 'var(--card-hover)' : 'var(--card-background)',
              borderColor: hoveredIndex === index ? 'var(--accent-light)' : 'var(--border-light)',
              transform: hoveredIndex === index ? 'translateY(-2px)' : 'translateY(0)',
            }}
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
  );
}