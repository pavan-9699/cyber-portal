import { CyberTerm } from '../types';

export const cyberTerms: CyberTerm[] = [
  {
    id: 'phishing',
    title: 'Phishing',
    definition: 'A cybercrime where attackers impersonate legitimate organizations to steal sensitive information.',
    description: 'Phishing is a type of social engineering attack often used to steal user data, including login credentials and credit card numbers. It occurs when an attacker, masquerading as a trusted entity, dupes a victim into opening an email, instant message, or text message.',
    examples: [
      'Fake emails claiming to be from your bank asking for account details',
      'Suspicious links in text messages claiming urgent account verification',
      'Fake websites that look identical to legitimate login pages',
      'Social media messages from fake profiles asking for personal information'
    ],
    prevention: [
      'Always verify the sender\'s email address and look for suspicious domains',
      'Never click on links in suspicious emails - type URLs directly',
      'Enable two-factor authentication on all important accounts',
      'Keep software and browsers updated with latest security patches',
      'Use email filters and anti-phishing tools',
      'Be cautious of urgent or threatening language in messages'
    ],
    category: 'Social Engineering'
  },
  {
    id: 'malware',
    title: 'Malware',
    definition: 'Malicious software designed to damage, disrupt, or gain unauthorized access to computer systems.',
    description: 'Malware is a broad category of malicious software that includes viruses, worms, trojans, ransomware, spyware, and adware. It\'s designed to infiltrate and damage computers without the user\'s consent.',
    examples: [
      'Computer viruses that replicate and spread to other files',
      'Ransomware that encrypts files and demands payment',
      'Spyware that secretly monitors user activities',
      'Adware that displays unwanted advertisements',
      'Trojans disguised as legitimate software'
    ],
    prevention: [
      'Install and maintain updated antivirus software',
      'Keep operating system and software updated',
      'Avoid downloading software from untrusted sources',
      'Be cautious with email attachments and downloads',
      'Use firewalls to block unauthorized network access',
      'Regular system backups to recover from attacks'
    ],
    category: 'Malicious Software'
  },
  {
    id: 'social-engineering',
    title: 'Social Engineering',
    definition: 'The use of psychological manipulation to trick people into divulging confidential information.',
    description: 'Social engineering is the art of manipulating people so they give up confidential information. The types of information these criminals are seeking can vary, but when individuals are targeted the criminals are usually trying to trick you into giving them your passwords or bank information.',
    examples: [
      'Pretexting: Creating fake scenarios to extract information',
      'Baiting: Offering something enticing to spark curiosity',
      'Quid pro quo: Offering a service in exchange for information',
      'Tailgating: Following someone into a restricted area',
      'Phone calls pretending to be IT support asking for passwords'
    ],
    prevention: [
      'Be skeptical of unsolicited contact from unknown individuals',
      'Verify the identity of people requesting information',
      'Never give out sensitive information over the phone or email',
      'Follow company security policies and procedures',
      'Report suspicious activities to security personnel',
      'Educate yourself and others about common tactics'
    ],
    category: 'Social Engineering'
  },
  {
    id: 'ransomware',
    title: 'Ransomware',
    definition: 'Malicious software that encrypts files and demands payment for the decryption key.',
    description: 'Ransomware is a type of malware that threatens to publish the victim\'s data or perpetually block access to it unless a ransom is paid. It has become one of the most dangerous cybersecurity threats facing organizations today.',
    examples: [
      'WannaCry: Global ransomware attack that affected hundreds of thousands of computers',
      'CryptoLocker: Early ransomware that encrypted user files',
      'Petya: Ransomware that encrypts entire hard drives',
      'Locky: Ransomware spread through email attachments',
      'Bad Rabbit: Ransomware that spreads through fake software updates'
    ],
    prevention: [
      'Regular backups stored offline or in immutable storage',
      'Keep systems and software updated with security patches',
      'Use endpoint protection with anti-ransomware capabilities',
      'Implement network segmentation to limit spread',
      'Employee training on email security and safe browsing',
      'Incident response plan for ransomware attacks'
    ],
    category: 'Malicious Software'
  },
  {
    id: 'password-attacks',
    title: 'Password Attacks',
    definition: 'Various methods used to obtain user passwords or authentication credentials.',
    description: 'Password attacks are attempts to obtain user passwords through various means including brute force, dictionary attacks, credential stuffing, and password spraying. These attacks exploit weak password practices.',
    examples: [
      'Brute force: Systematically trying all possible passwords',
      'Dictionary attack: Using common passwords from a list',
      'Credential stuffing: Using leaked password databases',
      'Password spraying: Using common passwords against many accounts',
      'Keyloggers that record keystrokes to capture passwords'
    ],
    prevention: [
      'Use strong, unique passwords for each account',
      'Enable multi-factor authentication (MFA)',
      'Use password managers to generate and store passwords',
      'Implement account lockout policies after failed attempts',
      'Regular password changes for sensitive accounts',
      'Monitor for compromised credentials on the dark web'
    ],
    category: 'Authentication'
  },
  {
    id: 'ddos',
    title: 'DDoS (Distributed Denial of Service)',
    definition: 'An attack that floods a network or service with traffic to make it unavailable.',
    description: 'A Distributed Denial of Service attack uses multiple compromised systems to flood the bandwidth or resources of a targeted system, usually web servers, causing denial of service to legitimate users.',
    examples: [
      'Volumetric attacks: Overwhelming bandwidth with massive traffic',
      'Protocol attacks: Exploiting weaknesses in network protocols',
      'Application layer attacks: Targeting web applications with requests',
      'IoT botnets used to generate attack traffic',
      'Reflection attacks using DNS or NTP servers'
    ],
    prevention: [
      'Use DDoS protection services and content delivery networks',
      'Implement rate limiting and traffic filtering',
      'Have sufficient bandwidth and server capacity',
      'Use load balancers to distribute traffic',
      'Monitor network traffic for unusual patterns',
      'Have an incident response plan for DDoS attacks'
    ],
    category: 'Network Attacks'
  },
  {
    id: 'sql-injection',
    title: 'SQL Injection',
    definition: 'A code injection technique that exploits vulnerabilities in database queries.',
    description: 'SQL injection is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database. It can allow attackers to view, modify, or delete data.',
    examples: [
      'Login bypasses using \' OR \'1\'=\'1',
      'Union-based attacks to extract data from other tables',
      'Blind SQL injection using true/false conditions',
      'Time-based attacks using database delay functions',
      'Second-order injection through stored user input'
    ],
    prevention: [
      'Use parameterized queries and prepared statements',
      'Validate and sanitize all user input',
      'Apply principle of least privilege to database accounts',
      'Use stored procedures with proper input validation',
      'Implement web application firewalls (WAF)',
      'Regular security testing and code reviews'
    ],
    category: 'Web Security'
  },
  {
    id: 'man-in-the-middle',
    title: 'Man-in-the-Middle (MITM)',
    definition: 'An attack where the attacker secretly intercepts and relays communications.',
    description: 'A man-in-the-middle attack occurs when a malicious actor inserts themselves into a conversation between two parties, impersonates both parties and gains access to information that the two parties were trying to send to each other.',
    examples: [
      'Evil twin Wi-Fi networks mimicking legitimate hotspots',
      'ARP spoofing to intercept local network traffic',
      'DNS spoofing to redirect users to malicious websites',
      'SSL/TLS certificate attacks using rogue certificates',
      'Email interception through compromised mail servers'
    ],
    prevention: [
      'Use HTTPS and verify SSL certificates',
      'Avoid public Wi-Fi for sensitive activities',
      'Use VPN services for encrypted connections',
      'Enable certificate pinning in applications',
      'Monitor for unusual network activity',
      'Keep network equipment firmware updated'
    ],
    category: 'Network Attacks'
  }
];