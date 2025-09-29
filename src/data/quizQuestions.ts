import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // Phishing Questions
  {
    id: 'q1',
    question: 'You receive an email from your bank asking you to click a link to verify your account due to suspicious activity. What should you do?',
    options: [
      'Click the link immediately to secure your account',
      'Ignore the email completely',
      'Log into your bank account directly through their official website to check',
      'Forward the email to all your contacts as a warning'
    ],
    correctAnswer: 2,
    category: 'Phishing',
    difficulty: 'easy',
    explanation: 'Always verify suspicious emails by logging into accounts through official websites, never through links in emails. Banks will never ask for sensitive information via email.'
  },
  {
    id: 'q2',
    question: 'Which of these is a common characteristic of phishing emails?',
    options: [
      'Perfect grammar and spelling',
      'Generic greetings like "Dear Customer"',
      'Official company letterhead',
      'Detailed personal information about you'
    ],
    correctAnswer: 1,
    category: 'Phishing',
    difficulty: 'easy',
    explanation: 'Phishing emails often use generic greetings because attackers don\'t have specific information about recipients. Legitimate companies usually address you by name.'
  },
  {
    id: 'q3',
    question: 'What is the most effective way to identify a phishing website?',
    options: [
      'Check if it looks identical to the real website',
      'Verify the URL and look for HTTPS',
      'See if it asks for personal information',
      'Check if it loads quickly'
    ],
    correctAnswer: 1,
    category: 'Phishing',
    difficulty: 'medium',
    explanation: 'Always verify the URL carefully. Phishing sites often use similar but incorrect domains. HTTPS presence is also important but not sufficient alone.'
  },

  // Malware Questions
  {
    id: 'q4',
    question: 'Your computer suddenly becomes very slow and pop-up ads appear frequently. What might be the cause?',
    options: [
      'Normal computer aging',
      'Too many programs running',
      'Possible malware infection',
      'Internet connection issues'
    ],
    correctAnswer: 2,
    category: 'Malware',
    difficulty: 'easy',
    explanation: 'Sudden performance issues combined with pop-up ads are classic signs of malware infection, particularly adware or potentially unwanted programs.'
  },
  {
    id: 'q5',
    question: 'What is the primary difference between a virus and a worm?',
    options: [
      'Viruses are more dangerous than worms',
      'Worms can spread without human interaction, viruses cannot',
      'Viruses affect files, worms affect networks',
      'There is no difference'
    ],
    correctAnswer: 1,
    category: 'Malware',
    difficulty: 'medium',
    explanation: 'Worms can automatically replicate and spread across networks without human intervention, while viruses typically need user action to spread.'
  },
  {
    id: 'q6',
    question: 'Which of these is the best practice for protecting against malware?',
    options: [
      'Only download software from official app stores or websites',
      'Disable antivirus software to improve performance',
      'Open all email attachments to stay informed',
      'Use the same password for all accounts'
    ],
    correctAnswer: 0,
    category: 'Malware',
    difficulty: 'easy',
    explanation: 'Downloading software only from trusted, official sources significantly reduces the risk of malware infection.'
  },

  // Social Engineering Questions
  {
    id: 'q7',
    question: 'Someone calls claiming to be from IT support and asks for your password to fix a system issue. What should you do?',
    options: [
      'Give them the password since they\'re from IT',
      'Hang up and verify their identity through official channels',
      'Give them a fake password to test them',
      'Ask them to call back later'
    ],
    correctAnswer: 1,
    category: 'Social Engineering',
    difficulty: 'easy',
    explanation: 'Legitimate IT support will never ask for passwords over the phone. Always verify identity through official company channels.'
  },
  {
    id: 'q8',
    question: 'What is "pretexting" in the context of social engineering?',
    options: [
      'Sending fake text messages',
      'Creating a fabricated scenario to engage victims',
      'Using technology to steal information',
      'Following someone into a secure area'
    ],
    correctAnswer: 1,
    category: 'Social Engineering',
    difficulty: 'medium',
    explanation: 'Pretexting involves creating a false scenario or identity to build trust and extract information from victims.'
  },
  {
    id: 'q9',
    question: 'You find a USB drive in the parking lot. What should you do?',
    options: [
      'Plug it into your work computer to find the owner',
      'Take it home and check what\'s on it',
      'Turn it in to security without plugging it in anywhere',
      'Throw it away immediately'
    ],
    correctAnswer: 2,
    category: 'Social Engineering',
    difficulty: 'medium',
    explanation: 'USB baiting is a common social engineering tactic. Never plug in unknown USB devices as they may contain malware.'
  },

  // Ransomware Questions
  {
    id: 'q10',
    question: 'Your files are suddenly encrypted and you see a message demanding payment for decryption. What should you do first?',
    options: [
      'Pay the ransom immediately',
      'Disconnect from the network and report the incident',
      'Try to decrypt the files yourself',
      'Restart your computer'
    ],
    correctAnswer: 1,
    category: 'Ransomware',
    difficulty: 'easy',
    explanation: 'Immediately disconnect to prevent spread and report to authorities. Never pay ransoms as it encourages attackers and doesn\'t guarantee file recovery.'
  },
  {
    id: 'q11',
    question: 'What is the most effective defense against ransomware?',
    options: [
      'Paying ransoms quickly',
      'Regular offline backups',
      'Using multiple antivirus programs',
      'Avoiding the internet completely'
    ],
    correctAnswer: 1,
    category: 'Ransomware',
    difficulty: 'easy',
    explanation: 'Regular offline backups allow you to restore your data without paying ransoms. This is the most effective defense strategy.'
  },

  // Password Security Questions
  {
    id: 'q12',
    question: 'Which password is the strongest?',
    options: [
      'Password123!',
      'MyBirthday1990',
      'Tr0ub4dor&3',
      'correct horse battery staple'
    ],
    correctAnswer: 3,
    category: 'Password Security',
    difficulty: 'medium',
    explanation: 'Long passphrases with random words are typically stronger than complex but shorter passwords, as demonstrated by security research.'
  },
  {
    id: 'q13',
    question: 'What is two-factor authentication (2FA)?',
    options: [
      'Using two different passwords',
      'Logging in twice',
      'Using something you know and something you have',
      'Having two user accounts'
    ],
    correctAnswer: 2,
    category: 'Password Security',
    difficulty: 'easy',
    explanation: '2FA combines something you know (password) with something you have (phone, token) for additional security.'
  },

  // Network Security Questions
  {
    id: 'q14',
    question: 'You\'re at a coffee shop and see an open Wi-Fi network called "Free WiFi". What should you consider?',
    options: [
      'Connect immediately to save mobile data',
      'It could be a malicious hotspot used to steal information',
      'It\'s perfectly safe since it\'s in a public place',
      'Only the coffee shop can provide internet'
    ],
    correctAnswer: 1,
    category: 'Network Security',
    difficulty: 'easy',
    explanation: 'Open Wi-Fi networks, especially ones with generic names, could be "evil twin" attacks designed to steal information.'
  },
  {
    id: 'q15',
    question: 'What does HTTPS indicate about a website?',
    options: [
      'The website is completely safe from all attacks',
      'Data transmission between you and the website is encrypted',
      'The website loads faster',
      'The website is government approved'
    ],
    correctAnswer: 1,
    category: 'Network Security',
    difficulty: 'easy',
    explanation: 'HTTPS encrypts data in transit between your browser and the website, but doesn\'t guarantee the site is legitimate or safe from all threats.'
  },

  // Advanced Questions
  {
    id: 'q16',
    question: 'What is SQL injection primarily used to attack?',
    options: [
      'Email servers',
      'Database-driven web applications',
      'Social media accounts',
      'Mobile phones'
    ],
    correctAnswer: 1,
    category: 'Web Security',
    difficulty: 'medium',
    explanation: 'SQL injection targets database-driven web applications by inserting malicious SQL code through user input fields.'
  },
  {
    id: 'q17',
    question: 'In a DDoS attack, what is the primary goal?',
    options: [
      'Steal sensitive data',
      'Install malware on systems',
      'Make services unavailable to legitimate users',
      'Gain administrative access'
    ],
    correctAnswer: 2,
    category: 'Network Security',
    difficulty: 'medium',
    explanation: 'DDoS attacks aim to overwhelm services with traffic, making them unavailable to legitimate users rather than stealing data.'
  },
  {
    id: 'q18',
    question: 'You receive a friend request on social media from someone you don\'t know, but they have mutual friends. What should you do?',
    options: [
      'Accept since you have mutual friends',
      'Ignore the request',
      'Verify with mutual friends if they actually know this person',
      'Report the profile immediately'
    ],
    correctAnswer: 2,
    category: 'Social Engineering',
    difficulty: 'medium',
    explanation: 'Attackers often create fake profiles with stolen photos and add real people\'s friends to appear legitimate. Always verify unknown contacts.'
  },
  {
    id: 'q19',
    question: 'Which of these is a sign that your computer might be part of a botnet?',
    options: [
      'Faster internet speeds',
      'Unusual network activity when you\'re not using the computer',
      'Better battery life',
      'Fewer pop-up ads'
    ],
    correctAnswer: 1,
    category: 'Malware',
    difficulty: 'hard',
    explanation: 'Computers in botnets often show unusual network activity as they communicate with command servers or participate in attacks.'
  },
  {
    id: 'q20',
    question: 'What is the principle of least privilege?',
    options: [
      'Users should have the minimum access necessary to do their job',
      'Passwords should be as short as possible',
      'Software should have the fewest features',
      'Networks should have minimal encryption'
    ],
    correctAnswer: 0,
    category: 'Security Principles',
    difficulty: 'medium',
    explanation: 'The principle of least privilege means granting users only the minimum access rights needed to perform their functions, reducing security risks.'
  }
];