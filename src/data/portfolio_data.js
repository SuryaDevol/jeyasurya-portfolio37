/**
 * ============================================================================
 * PORTFOLIO SINGLE SOURCE OF TRUTH — JEYASURYA G
 * ============================================================================
 * 
 * Future-proof configuration file for Jeyasurya G's cinematic portfolio.
 * To update your portfolio in the future (add projects, update contact info,
 * add milestone years), simply edit this file!
 */

// ----------------------------------------------------------------------------
// 1. PERSONAL INFORMATION & CONTACT
// ----------------------------------------------------------------------------
export const PERSONAL_INFO = {
  name: 'Jeyasurya G',
  title: 'Computer Science Engineer · AI & Computer Vision Developer',
  email: 'suryacloudcamp@gmail.com',
  phone: '+91 6379491821',
  location: 'Tamil Nadu, India',
  education: {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Jai Shriram Engineering College',
    timeline: '2023 – 2027',
  },
  socials: {
    github: 'https://github.com/SuryaDevol',
    linkedin: 'https://linkedin.com/in/jeyasurya-g',
    liveSite: 'https://jeyasurya.surge.sh'
  }
};

// ----------------------------------------------------------------------------
// 2. TIMELINE MILESTONES (SCENE 03 — CHRONO)
// ----------------------------------------------------------------------------
// Each entry maps to a milestone year on the 3D rotating time rail.
export const TIMELINE_MILESTONES = [
  {
    year: 2021,
    key: 'Foundations',
    lines: ['SSLC Completed', 'SDA Matriculation', 'Analytical Curiosity'],
  },
  {
    year: 2023,
    key: 'HSC & B.E. CSE',
    lines: ['HSC: 80% Scored', 'Jai Shriram Engg', 'CS Degree Begins'],
  },
  {
    year: 2024,
    key: 'Research & AI',
    lines: ['Neural Link Paper', 'NETRIX Presentation', 'Python & DSA Mastery'],
  },
  {
    year: 2025,
    key: 'Awards & Industry',
    lines: ['NOVA 2K25 1st Place', 'Best Project Award', 'Flutter & Python Intern'],
  },
  {
    year: 2026,
    key: 'AI & Systems',
    lines: ['CCTV Object Detection', 'LegalScanAI Platform', 'Unity 2D Runner Game'],
  },
  {
    year: 2027,
    key: 'Graduation & Vision',
    lines: ['B.E. CSE Graduate', 'AI & Computer Vision', 'Engineering The Future'],
  },
];

// ----------------------------------------------------------------------------
// 3. PROJECT DOSSIER & 3D GALLERY (SCENE 04)
// ----------------------------------------------------------------------------
// TO ADD A NEW PROJECT IN THE FUTURE:
// Simply copy one of the objects below, fill in your details, and save!
// Categories available: 'ai' | 'games_mobile' | 'research_awards'
export const PROJECTS_DATA = [
  {
    id: 'cctv',
    category: 'ai',
    badge: 'AI & Computer Vision',
    status: 'Operational',
    title: 'Object Detection CCTV Surveillance System',
    desc: 'An AI-powered video surveillance and facial analysis platform engineered to identify entities and monitor live streams with automated security alert dispatch.',
    bullets: [
      'Developed an AI-powered surveillance system capable of detecting objects and faces in real time.',
      'Implemented automated alert mechanisms for unidentified entity detection with sub-second response.',
      'Designed real-time monitoring and event notification features for security personnel.',
      'Improved surveillance accuracy and tracking coverage through intelligent object recognition algorithms.'
    ],
    stack: ['Python', 'OpenCV', 'Computer Vision', 'Haar Cascades / DNN', 'Real-Time Telemetry'],
    architecture: 'Input: Multi-RTSP Video Feed → Frame Pre-processing & Grayscale Normalization → OpenCV Deep Neural Net Inference → Object & Face Bounding-Box Detection → Heuristic Entity Classification → Automated Alert & SMS/Email Notification Dispatch.',
    github: 'https://github.com/SuryaDevol'
  },
  {
    id: 'legalscan',
    category: 'ai',
    badge: 'NLP & Automated QA',
    status: 'High Precision',
    title: 'LegalScanAI — Document Analysis Platform',
    desc: 'An AI-based platform designed for deep parsing, clause categorization, and risk auditing across multi-page legal documents and enterprise contracts.',
    bullets: [
      'Contributed to the core development of an AI-based legal document analysis and extraction platform.',
      'Performed rigorous end-to-end testing to ensure system accuracy, parsing reliability, and throughput under load.',
      'Identified, reported, and remediated critical edge-case bugs while collaborating in cross-functional agile sprints.',
      'Ensured high-quality delivery, compliance validation, and precision within tight project deadlines.'
    ],
    stack: ['Python', 'NLP', 'Software Testing', 'End-to-End QA', 'Document Parsing', 'Git & GitHub'],
    architecture: 'Input: PDF / DOCX Contracts → OCR & Text Tokenization Pipeline → Transformer-based Clause Classifier → Risk & Compliance Rule Engine → Automated QA Assertion Suite → Structured Analysis Dashboard.',
    github: 'https://github.com/SuryaDevol'
  },
  {
    id: 'runner',
    category: 'games_mobile',
    badge: 'Game Engine & Physics',
    status: 'Playable Build',
    title: '2D Endless Runner Game',
    desc: 'A responsive, physics-driven 2D endless runner built in Unity Engine featuring dynamic level generation, enemy AI behavior, and responsive particle animation.',
    bullets: [
      'Developed a high-framerate 2D endless runner game utilizing Unity Engine and C# scripting.',
      'Implemented fluid player movement mechanics, reactive enemy behavior, collectible items, and procedural obstacles.',
      'Integrated sound effects, particle animations, and custom game UI for an enhanced arcade experience.',
      'Optimized runtime game performance, object pooling, and responsive touch/keyboard input handling.'
    ],
    stack: ['Unity Engine', 'C#', '2D Physics', 'Object Pooling', 'Particle Systems', 'Game UI'],
    architecture: 'Input: Player Input Controller → Character Physics Motor (RigidBody2D) → Procedural Chunk Spawner (Object Pool) → Collision Detection & Score Evaluator → Dynamic Particle FX & Audio Mixer → Responsive HUD Display.',
    github: 'https://github.com/SuryaDevol'
  },
  {
    id: 'guardian',
    category: 'research_awards',
    badge: 'Award Winner · NOVA 2K25',
    status: 'Best Project Award',
    title: 'Guardian Union: Detect the Unseen',
    desc: 'Award-winning security and anomaly detection architecture designed for real-world threat discovery, low-visibility tracking, and intelligent perimeter defense.',
    bullets: [
      'Awarded First Place at the prestigious NOVA 2K25 Project Expo Event.',
      'Conferred the Best Project Award — recognized for technical execution, innovation, and real-world applicability.',
      'Engineered an edge-case visual recognition engine capable of detecting obscured or camouflaged threats.',
      'Coordinated multidisciplinary project execution and conducted live demonstrative trials.'
    ],
    stack: ['Python', 'Computer Vision', 'Real-Time Analytics', 'Hardware Integration', 'Project Expo Winner'],
    architecture: 'Input: Sensor Array / Multi-Spectral Cameras → Contrast Enhancement & Thermal Pre-filter → Multi-Feature Fusion Network → Threat Anomaly Scoring → Edge Security Dispatch.',
    github: 'https://github.com/SuryaDevol'
  },
  {
    id: 'neurallink',
    category: 'research_awards',
    badge: 'Academic Research Paper',
    status: 'Presented at NETRIX',
    title: 'Neural Link in Human Brain (Research Presentation)',
    desc: 'Research and technical symposium paper presentation on brain-computer interfacing (BCI), electrophysiological signal acquisition, and neural signal decoding.',
    bullets: [
      'Presented technical research paper on "Neural Link in Human Brain" at NETRIX 2024–2025, KPR Institute of Engineering & Technology.',
      'Explored neural telemetry, high-bandwidth bio-signal processing, and bio-compatible interface paradigms.',
      'Analyzed non-invasive vs. invasive electrode matrices, noise mitigation algorithms, and cognitive assistive technology.',
      'Received commendation for deep analytical research and presentation clarity.'
    ],
    stack: ['Brain-Computer Interface', 'Signal Processing', 'Neural Telemetry', 'Scientific Computing', 'Technical Presentation'],
    architecture: 'Pipeline: Bio-Electric Signal Capture (EEG/ECoG) → Artifact Filtering & Bandpass Decomposition → Feature Extraction (FFT / Wavelet) → Neural Pattern Decoding → Assistive Peripheral Interface.',
    github: 'https://github.com/SuryaDevol'
  },
  {
    id: 'flutter',
    category: 'games_mobile',
    badge: 'Mobile Engineering & Traineeship',
    status: 'Certified Trainee',
    title: 'Flutter Mobile App Development & Traineeship',
    desc: 'In-plant software traineeship at Atalya Solutions Pvt. Ltd., developing production-ready cross-platform mobile apps with responsive layouts and reactive state management.',
    bullets: [
      'Completed intensive in-plant training in Flutter framework at Atalya Solutions Pvt. Ltd.',
      'Developed native Android applications with responsive UIs, smooth navigation, and dark/light system adaptation.',
      'Acquired hands-on experience in frontend architecture, widget lifecycles, and REST API consumption.',
      'Earned Flutter UI Development Certification and Software Development Fundamentals Certification.'
    ],
    stack: ['Flutter', 'Dart', 'Android Studio', 'State Management', 'REST API Integration', 'Responsive UI'],
    architecture: 'Architecture: Presentation Layer (Stateless/Stateful Widgets) → Business Logic Component (BLoC / Provider) → Network Repository (HTTP/Dio) → Backend REST Services → Local Storage Cache.',
    github: 'https://github.com/SuryaDevol'
  }
];
