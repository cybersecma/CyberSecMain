export interface Stream {
  id: string;
  title: string;
  description: string;
  videoId: string; // YouTube video ID for all streams
  date: string; // ISO string format
  duration: string;
  host: string;
  tags: string[];
  type: 'upcoming' | 'past';
}

// Sample data
export const streams: Stream[] = [
  {
    id: '1',
    title: 'Ask Me Anything: Cybersecurity Careers',
    description: 'Join us for an interactive session where we discuss various career paths in cybersecurity, from penetration testing to security architecture.',
    videoId: 'XMi8ZSESJA4',
    date: '2024-03-15T15:00:00Z',
    duration: '1 hour',
    host: 'Abdessamad - Achraf',
    tags: ['career', 'education', 'AMA', 'cybersecurity', 'jobs', 'career-path'],
    type: 'past'
  },
  {
    id: '2',
    title: 'CyberSec Hangout: Recent Incidents',
    description: 'A deep dive into the latest cybersecurity trends and threats affecting organizations in 2024.',
    videoId: 'VJkhcd5B-qc',
    date: '2024-03-20T16:00:00Z',
    duration: '1.5 hours',
    host: 'Mohammed Khalil',
    tags: ['trends', 'threats', 'analysis', 'cybersecurity', '2024', 'security-trends'],
    type: 'past'
  },
  {
    id: '3',
    title: '5th CyberSec Hangout: Cyber governance & Security Consultant',
    description: 'Join CyberSec Morocco 4th Hangout with ssi Mouhcine STITI a Senior Cyber Security Consultant, with 17 years of experience in the field- He is also CISSP, CISA, ISO 27001 LI / LA, MS Cybersecurity & Azure Architect Expert',
    videoId: 'L9dZYoLYNfA',
    date: '2025-06-21T18:00:00Z',
    duration: '1.5 hours',
    host: 'Mouhcine STITI',
    tags: ['trends', 'threats', 'Security Consultant', 'cybersecurity', 'Cyber governance', 'security-trends'],
    type: 'past'
  },
  {
    id: '4',
    title: 'كيفاش تحمي راسك او عائلتك في العالم الرقمي',
    description: 'how to protect yourself and your family in digital world',
    videoId: 'raD2Z9CvGYw',
    date: '2025-07-05T18:00:00Z',
    duration: '1.9 hours',
    host: 'amine - anouar - saladin - mohamed amine rejmil',
    tags: ['CyberSecurity', 'OnlineSafety', 'DigitalWellness', 'FamilyOnlineSafety', 'DataPrivacy', 'InternetSecurity', 'ParentalControls'],
    type: 'past'
  },
  {
    id: '5',
    title: 'ماتبقاش تستعمل إيميلك الحقيقي! - قناع الإيميل',
    description: 'Tired of spam and worried about your online privacy? Using one email for all your accounts exposes you to tracking and security risk. In this video, Ill show you the ultimate life hack: how to get unlimited, unique email addresses for free. Learn the step-by-step method to create a different email for every website, giving you total control over your digital life. Stop spam before it starts and keep your real inbox safe forever',
    videoId: '8PtV7AeHZEc',
    date: '2025-06-21T18:00:00Z',
    duration: '10 mins',
    host: 'Mouhcine STITI',
    tags: ['trends', 'threats', 'Security Consultant', 'cybersecurity', 'Cyber governance', 'security-trends'],
    type: 'past'
  },
  
  
]; 
