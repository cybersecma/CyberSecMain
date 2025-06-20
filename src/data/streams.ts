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
    date: '2025-06-21T19:00:00Z',
    duration: '1.5 hours',
    host: 'Mouhcine STITI',
    tags: ['trends', 'threats', 'Security Consultant', 'cybersecurity', 'Cyber governance', 'security-trends'],
    type: 'upcoming'
  },
  
  
]; 
