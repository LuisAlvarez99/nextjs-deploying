export interface Project {
  id: string;
  title: string;
  date: string; // YYYY-MM format
  category: 'software' | 'ai' | '3d-printing' | 'music';
  rank: 'champion' | 'diamond' | 'gold' | 'silver' | 'bronze';
  summary: string;
  description: string;
  tags: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  image?: string;
}

const rawProjects: Project[] = [
  {
    id: 'nextjs-deploying',
    title: 'Professional Next.js Portfolio',
    date: '2024-10',
    category: 'software',
    rank: 'champion',
    summary: 'High-performance interactive developer portfolio with horizontal timeline, Rocket League ranks, and modal pop-outs.',
    description:
      'Engineered with Next.js 14 App Router, TypeScript, and Tailwind CSS. Features dynamic client-side category filtering, Rocket League rank glow effects, keyboard-accessible modals, and continuous horizontal timeline spine navigation. Deployed continuously via Vercel edge infrastructure.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    liveDemoUrl: 'https://nextjs-deploying.vercel.app',
    githubUrl: 'https://github.com/LuisAlvarez99/nextjs-deploying',
    image: '/vercel.png',
  },
  {
    id: 'ai-agent-rag',
    title: 'Autonomous AI Agent & RAG Workbench',
    date: '2024-08',
    category: 'ai',
    rank: 'champion',
    summary: 'Autonomous LLM agent system integrating Model Context Protocol (MCP), RAG vector retrieval, and tool orchestration.',
    description:
      'Architected during advanced Machine Learning & Scalable Systems studies at Interview Kickstart. Implements reasoning loops (ReAct framework), vector embeddings for semantic document search, memory stores, and MCP tools allowing language models to execute API operations safely.',
    tags: ['Python', 'LLMs', 'RAG', 'MCP', 'Vector DB', 'LangChain'],
    githubUrl: 'https://github.com/LuisAlvarez99/EndAugust2025_InterviewKickstart',
    image: '/vercel.png',
  },
  {
    id: 'git-timeline',
    title: 'GitTimeline - Repo Contribution Visualizer',
    date: '2024-07',
    category: 'software',
    rank: 'diamond',
    summary: 'Web-based timeline application rendering interactive chronological graph nodes and commit inspectors for public GitHub repositories.',
    description:
      'Full-stack TypeScript and React application providing visual git timeline inspection. Parses repository histories, renders interactive node networks, contribution activity graphs, and modular inspection dialogs for deep code exploration.',
    tags: ['TypeScript', 'React', 'GitHub API', 'Node.js', 'Data Visualization'],
    githubUrl: 'https://github.com/LuisAlvarez99/GitTimeline',
    image: '/vercel.png',
  },
  {
    id: 'ansible-working',
    title: 'Ansible Infrastructure Automation Platform',
    date: '2024-04',
    category: 'software',
    rank: 'diamond',
    summary: 'Automated orchestration, provisioning, and configuration management playbooks for scalable cloud infrastructure.',
    description:
      'Comprehensive automation testbed using Red Hat Ansible Automation Platform. Automates multi-node Linux provisioning, Jinja2 template rendering, idempotent configuration management, and role-based execution across distributed environments.',
    tags: ['Ansible', 'Jinja2', 'DevOps', 'Linux', 'Infrastructure as Code'],
    githubUrl: 'https://github.com/LuisAlvarez99/ansible_working',
    image: '/vercel.png',
  },
  {
    id: 'print-hub',
    title: 'PrintHub & Custom 3D Mechanical Mod',
    date: '2023-11',
    category: '3d-printing',
    rank: 'gold',
    summary: 'Additive manufacturing repository and custom 3D-printed modular robotic components designed in CAD.',
    description:
      'CAD modeling and functional 3D printing of structural brackets, planetary gearboxes, and compliant grippers. Engineered in Fusion 360 with dimensional tolerance optimization for high-stress PETG and PLA+ mechanical parts.',
    tags: ['Fusion 360', '3D Printing', 'CAD', 'PETG', 'Mechanical Engineering'],
    githubUrl: 'https://github.com/LuisAlvarez99/print-hub',
    image: '/vercel.png',
  },
  {
    id: 'parking-finder',
    title: 'ParkingFinder Mobile & Web',
    date: '2023-08',
    category: 'software',
    rank: 'gold',
    summary: 'Geospatial web application connecting drivers with available municipal and commercial parking spots in real time.',
    description:
      'Full-stack parking locator application with map-based radius queries, geolocation tracking, and availability filters. Integrates mapping APIs and state management for streamlined urban parking navigation.',
    tags: ['React', 'JavaScript', 'Google Maps API', 'Mobile Web'],
    githubUrl: 'https://github.com/LuisAlvarez99/ParkingFinderApp',
    image: '/vercel.png',
  },
  {
    id: 'synthwave-audio',
    title: 'Retro-Futuristic Synthwave Audio Suite',
    date: '2023-06',
    category: 'music',
    rank: 'silver',
    summary: 'Electronic music production leveraging analog synthesizer emulation, FM synthesis, and dynamic mastering.',
    description:
      'Music production project exploring retro-futuristic sound design in Ableton Live. Combines subtractive and FM synthesizer patches, vintage compressor modeling, and audio signal chain processing for video game and media soundtracks.',
    tags: ['Ableton Live', 'Sound Design', 'FM Synthesis', 'Audio Engineering'],
    liveDemoUrl: 'https://soundcloud.com/example/synthwave-ep',
    image: '/vercel.png',
  },
  {
    id: 'building-blocks',
    title: 'buildingBlocks Interactive Animation',
    date: '2023-02',
    category: 'software',
    rank: 'bronze',
    summary: 'Interactive CSS keyframe physics and responsive animation engine designed with modular visual blocks.',
    description:
      'Creative frontend UI project demonstrating complex CSS transforms, transitions, and keyframe choreographies. Features hardware-accelerated rendering and playful interactive dynamics.',
    tags: ['CSS3', 'Keyframe Animations', 'JavaScript', 'UI Design'],
    githubUrl: 'https://github.com/LuisAlvarez99/buildingBlocks',
    image: '/vercel.png',
  },
  {
    id: 'amazon-scrape',
    title: 'Amazon E-Commerce Data Scraper',
    date: '2020-10',
    category: 'software',
    rank: 'silver',
    summary: 'Python automated scraping pipeline for product pricing telemetry and historical trend analysis.',
    description:
      'Automated web scraping bot written in Python utilizing BeautifulSoup and HTTP session handling. Extracts price updates, product ratings, and metadata across catalog pages and exports structured datasets for analytics.',
    tags: ['Python', 'BeautifulSoup', 'Web Scraping', 'Data Pipelines'],
    githubUrl: 'https://github.com/LuisAlvarez99/AmazonScrape',
    image: '/vercel.png',
  },
];

// Automatically sort all entries by date in reverse-chronological order (newest first)
export const projects: Project[] = [...rawProjects].sort((a, b) =>
  b.date.localeCompare(a.date)
);
