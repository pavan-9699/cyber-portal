import { VideoContent } from '../types';

export const videoContent: VideoContent[] = [
  {
    id: 'phishing-basics',
    title: 'Understanding Phishing Attacks',
    description: 'Learn to identify and protect yourself from phishing attempts that steal personal information.',
    video_url: 'https://www.youtube.com/embed/Y31RDa8IEnQ',
    category: 'Phishing',
    duration: '8:45',
    summary: 'This comprehensive video covers the fundamentals of phishing attacks, including how attackers create convincing fake emails and websites to steal credentials. You\'ll learn about different types of phishing, red flags to watch for, and practical steps to protect yourself.',
    key_points: [
      'How to identify suspicious emails and websites',
      'Common phishing techniques and their warning signs',
      'Best practices for verifying legitimate communications',
      'Steps to take if you fall victim to a phishing attack',
      'Using technology tools to enhance protection'
    ]
  },
  {
    id: 'malware-protection',
    title: 'Malware Defense Strategies',
    description: 'Comprehensive guide to protecting your devices from viruses, trojans, and other malicious software.',
    video_url: 'https://www.youtube.com/embed/j2VHAd9SkJg',
    category: 'Malware',
    duration: '12:30',
    summary: 'Explore the world of malware and learn effective defense strategies. This video covers different types of malicious software, how they spread, and proven methods to protect your devices and data.',
    key_points: [
      'Types of malware: viruses, worms, trojans, ransomware',
      'How malware spreads through various infection vectors',
      'Essential security software and configuration tips',
      'Safe browsing and download practices',
      'What to do if your system gets infected'
    ]
  },
  {
    id: 'social-engineering-awareness',
    title: 'Social Engineering Tactics and Defense',
    description: 'Understand psychological manipulation techniques used by cybercriminals and how to resist them.',
    video_url: 'https://www.youtube.com/embed/lc7scxvKQOo',
    category: 'Social Engineering',
    duration: '15:20',
    summary: 'Social engineering attacks target human psychology rather than technical vulnerabilities. Learn about common tactics like pretexting, baiting, and quid pro quo, and develop skills to recognize and resist manipulation attempts.',
    key_points: [
      'Psychology behind social engineering attacks',
      'Common tactics: pretexting, baiting, tailgating',
      'How to verify identities and suspicious requests',
      'Creating a security-conscious organizational culture',
      'Reporting and responding to social engineering attempts'
    ]
  },
  {
    id: 'password-security',
    title: 'Creating Strong Passwords and Using MFA',
    description: 'Master password security with strong password creation and multi-factor authentication setup.',
    video_url: 'https://www.youtube.com/embed/aEmF3Iylvr4',
    category: 'Authentication',
    duration: '10:15',
    summary: 'Passwords remain a critical security component despite being a common weak point. Learn to create strong, memorable passwords and implement multi-factor authentication for robust account protection.',
    key_points: [
      'Characteristics of strong passwords and passphrases',
      'Password manager benefits and setup',
      'Multi-factor authentication types and implementation',
      'Common password mistakes to avoid',
      'Managing passwords across multiple accounts'
    ]
  },
  {
    id: 'ransomware-prevention',
    title: 'Ransomware Prevention and Response',
    description: 'Protect yourself from ransomware attacks and learn proper response procedures if infected.',
    video_url: 'https://www.youtube.com/embed/KWMl-CZsUE0',
    category: 'Ransomware',
    duration: '11:45',
    summary: 'Ransomware has become one of the most dangerous cyber threats. This video provides practical guidance on preventing ransomware infections and proper response procedures to minimize damage.',
    key_points: [
      'How ransomware spreads and infects systems',
      'Backup strategies that protect against ransomware',
      'Network segmentation and access controls',
      'Incident response plan for ransomware attacks',
      'Why paying ransoms is not recommended'
    ]
  },
  {
    id: 'network-security-basics',
    title: 'Network Security Fundamentals',
    description: 'Learn about network threats like man-in-the-middle attacks and how to secure your connections.',
    video_url: 'https://www.youtube.com/embed/bBC-nXj3Ng4',
    category: 'Network Security',
    duration: '13:10',
    summary: 'Network security is essential in our connected world. Understand common network threats, secure connection protocols, and best practices for protecting your data in transit.',
    key_points: [
      'Common network attacks and their methods',
      'Understanding HTTPS and encrypted connections',
      'WiFi security and public network risks',
      'VPN benefits and proper usage',
      'Network monitoring and threat detection'
    ]
  },
  {
    id: 'web-security-essentials',
    title: 'Web Application Security',
    description: 'Understand web-based threats like SQL injection and cross-site scripting.',
    video_url: 'https://www.youtube.com/embed/WgrCHEn8g54',
    category: 'Web Security',
    duration: '14:30',
    summary: 'Web applications face numerous security challenges. Learn about common vulnerabilities like SQL injection and XSS attacks, and understand how to interact safely with web applications.',
    key_points: [
      'Common web application vulnerabilities',
      'SQL injection and input validation',
      'Cross-site scripting (XSS) attacks',
      'Safe web browsing practices',
      'Understanding web application security controls'
    ]
  },
  {
    id: 'mobile-device-security',
    title: 'Mobile Device Security Best Practices',
    description: 'Secure your smartphones and tablets against modern mobile threats.',
    video_url: 'https://www.youtube.com/embed/QydVrZ2hVuk',
    category: 'Mobile Security',
    duration: '9:20',
    summary: 'Mobile devices contain vast amounts of personal data and face unique security challenges. Learn to secure your smartphones and tablets against malicious apps, data theft, and device compromise.',
    key_points: [
      'Mobile-specific security threats and risks',
      'App store safety and permission management',
      'Device encryption and lock screen security',
      'Public WiFi risks on mobile devices',
      'Mobile device management best practices'
    ]
  }
];