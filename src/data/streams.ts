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
  
  
]; 