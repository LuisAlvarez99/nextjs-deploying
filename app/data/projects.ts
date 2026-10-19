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
  inDevelopment?: boolean; // Repeatable flag for active/WIP projects
}

// Curated metadata enhancements for flagship projects
const CURATED_METADATA: Record<string, Partial<Project>> = {
  'nextjs-deploying': {
    title: 'Professional Next.js Portfolio',
    rank: 'champion',
    category: 'software',
    inDevelopment: true,
    summary: 'High-performance interactive developer portfolio with horizontal timeline, Rocket League wave glow, and modal pop-outs.',
    description:
      'Engineered with Next.js 14 App Router, TypeScript, and Tailwind CSS. Features dynamic client-side category filtering, Rocket League wave glow effects, drag-to-scroll timeline navigation, and keyboard-accessible modals.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    image: '/vercel.png',
  },
  'EndAugust2025_InterviewKickstart': {
    title: 'Autonomous AI Agent & RAG Workbench',
    rank: 'champion',
    category: 'ai',
    inDevelopment: true,
    summary: 'Autonomous LLM agent system integrating Model Context Protocol (MCP), RAG vector retrieval, and tool orchestration.',
    description:
      'Architected during advanced Machine Learning & Scalable Systems studies at Interview Kickstart. Implements reasoning loops (ReAct framework), vector embeddings for semantic document search, memory stores, and MCP tools allowing language models to execute API operations safely.',
    tags: ['Python', 'LLMs', 'RAG', 'MCP', 'Vector DB', 'LangChain'],
    githubUrl: 'https://github.com/LuisAlvarez99/EndAugust2025_InterviewKickstart',
    image: '/vercel.png',
  },
  'GitTimeline': {
    title: 'GitTimeline - Repo Contribution Visualizer',
    rank: 'diamond',
    category: 'software',
    inDevelopment: false,
    summary: 'Web-based timeline application rendering interactive chronological graph nodes and commit inspectors for public GitHub repositories.',
    description:
      'Full-stack TypeScript and React application providing visual git timeline inspection. Parses repository histories, renders interactive node networks, contribution activity graphs, and modular inspection dialogs for deep code exploration.',
    tags: ['TypeScript', 'React', 'GitHub API', 'Node.js', 'Data Visualization'],
    githubUrl: 'https://github.com/LuisAlvarez99/GitTimeline',
    image: '/vercel.png',
  },
  'ansible_working': {
    title: 'Ansible Infrastructure Automation Platform',
    rank: 'diamond',
    category: 'software',
    inDevelopment: false,
    summary: 'Automated orchestration, provisioning, and configuration management playbooks for scalable cloud infrastructure.',
    description:
      'Comprehensive automation testbed using Red Hat Ansible Automation Platform. Automates multi-node Linux provisioning, Jinja2 template rendering, idempotent configuration management, and role-based execution across distributed environments.',
    tags: ['Ansible', 'Jinja2', 'DevOps', 'Linux', 'Infrastructure as Code'],
    githubUrl: 'https://github.com/LuisAlvarez99/ansible_working',
    image: '/vercel.png',
  },
  'print-hub': {
    title: 'PrintHub & Custom 3D Mechanical Mod',
    rank: 'gold',
    category: '3d-printing',
    inDevelopment: false,
    summary: 'Additive manufacturing repository and custom 3D-printed modular robotic components designed in CAD.',
    description:
      'CAD modeling and functional 3D printing of structural brackets, planetary gearboxes, and compliant grippers. Engineered in Fusion 360 with dimensional tolerance optimization for high-stress PETG and PLA+ mechanical parts.',
    tags: ['Fusion 360', '3D Printing', 'CAD', 'PETG', 'Mechanical Engineering'],
    githubUrl: 'https://github.com/LuisAlvarez99/print-hub',
    image: '/vercel.png',
  },
  'ParkingFinderApp': {
    title: 'ParkingFinder Mobile & Web',
    rank: 'gold',
    category: 'software',
    inDevelopment: false,
    summary: 'Geospatial web application connecting drivers with available municipal and commercial parking spots in real time.',
    description:
      'Full-stack parking locator application with map-based radius queries, geolocation tracking, and availability filters. Integrates mapping APIs and state management for streamlined urban parking navigation.',
    tags: ['React', 'JavaScript', 'Google Maps API', 'Mobile Web'],
    githubUrl: 'https://github.com/LuisAlvarez99/ParkingFinderApp',
    image: '/vercel.png',
  },
  'synthwave-audio': {
    title: 'Retro-Futuristic Synthwave Audio Suite',
    rank: 'silver',
    category: 'music',
    inDevelopment: false,
    summary: 'Electronic music production leveraging analog synthesizer emulation, FM synthesis, and dynamic mastering.',
    description:
      'Music production project exploring retro-futuristic sound design in Ableton Live. Combines subtractive and FM synthesizer patches, vintage compressor modeling, and audio signal chain processing for video game and media soundtracks.',
    tags: ['Ableton Live', 'Sound Design', 'FM Synthesis', 'Audio Engineering'],
    liveDemoUrl: 'https://soundcloud.com/example/synthwave-ep',
    image: '/vercel.png',
  },
  'buildingBlocks': {
    title: 'buildingBlocks Interactive Animation',
    rank: 'bronze',
    category: 'software',
    inDevelopment: false,
    summary: 'Interactive CSS keyframe physics and responsive animation engine designed with modular visual blocks.',
    description:
      'Creative frontend UI project demonstrating complex CSS transforms, transitions, and keyframe choreographies. Features hardware-accelerated rendering and playful interactive dynamics.',
    tags: ['CSS3', 'Keyframe Animations', 'JavaScript', 'UI Design'],
    githubUrl: 'https://github.com/LuisAlvarez99/buildingBlocks',
    image: '/vercel.png',
  },
  'AmazonScrape': {
    title: 'Amazon E-Commerce Data Scraper',
    rank: 'silver',
    category: 'software',
    inDevelopment: false,
    summary: 'Python automated scraping pipeline for product pricing telemetry and historical trend analysis.',
    description:
      'Automated web scraping bot written in Python utilizing BeautifulSoup and HTTP session handling. Extracts price updates, product ratings, and metadata across catalog pages and exports structured datasets for analytics.',
    tags: ['Python', 'BeautifulSoup', 'Web Scraping', 'Data Pipelines'],
    githubUrl: 'https://github.com/LuisAlvarez99/AmazonScrape',
    image: '/vercel.png',
  },
  'React-Insta-Clone': {
    title: 'React Instagram Platform Clone',
    rank: 'silver',
    category: 'software',
    inDevelopment: false,
    summary: 'Full-featured social feed web application with responsive UI, story trays, and post interactions.',
    description: 'Component-driven social platform clone built with React. Implements state management for likes, feed filtering, and responsive mobile-first layouts.',
    tags: ['React', 'JavaScript', 'CSS Modules'],
    githubUrl: 'https://github.com/LuisAlvarez99/React-Insta-Clone',
    image: '/vercel.png',
  },
  'Pokedex': {
    title: 'Responsive Pokédex Explorer',
    rank: 'bronze',
    category: 'software',
    inDevelopment: false,
    summary: 'Fast web application querying Pokémon REST APIs for real-time stats, moves, and evolution trees.',
    description: 'Interactive Pokédex with live searching, type filtering, and animated stats meters built with JavaScript and CSS.',
    tags: ['JavaScript', 'REST API', 'CSS3'],
    githubUrl: 'https://github.com/LuisAlvarez99/Pokedex',
    image: '/vercel.png',
  },
  'windows-portfolio-lisander': {
    title: 'Windows OS Interactive Portfolio',
    rank: 'silver',
    category: 'software',
    inDevelopment: false,
    summary: 'Desktop operating system simulation portfolio featuring draggable windows, start menu, and taskbar.',
    description: 'Novel portfolio experience recreating the Windows desktop paradigm in the browser with draggable windows, file explorer, and app launchers.',
    tags: ['JavaScript', 'HTML5', 'CSS'],
    githubUrl: 'https://github.com/LuisAlvarez99/windows-portfolio-lisander',
    image: '/vercel.png',
  },
  'EXCALL_Gym': {
    title: 'EXCALL Fitness & Gym Tracker',
    rank: 'bronze',
    category: 'software',
    inDevelopment: false,
    summary: 'Workout routine planner and exercise logging web interface.',
    description: 'Frontend gym workout logger designed for personal routine tracking, exercise history, and workout progression.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/LuisAlvarez99/EXCALL_Gym',
    image: '/vercel.png',
  },
  'PaperCompany': {
    title: 'Dunder Mifflin Paper Portal',
    rank: 'bronze',
    category: 'software',
    inDevelopment: false,
    summary: 'The Office themed corporate website and catalog showcase.',
    description: 'Thematic corporate landing page built with HTML and styled with custom responsive CSS layouts.',
    tags: ['HTML5', 'CSS3'],
    githubUrl: 'https://github.com/LuisAlvarez99/PaperCompany',
    image: '/vercel.png',
  },
  'simple-calc': {
    title: 'Python CLI Calculator Engine',
    rank: 'bronze',
    category: 'software',
    inDevelopment: false,
    summary: 'Command-line mathematical parser and arithmetic evaluator in Python.',
    description: 'Python utility script parsing arithmetic expressions, supporting arithmetic operations, precedence, and interactive REPL mode.',
    tags: ['Python', 'CLI'],
    githubUrl: 'https://github.com/LuisAlvarez99/simple-calc',
    image: '/vercel.png',
  },
};

// Complete baseline dataset featuring all repositories and creative projects
const baseProjects: Project[] = [
  {
    id: 'nextjs-deploying',
    title: 'Professional Next.js Portfolio',
    date: '2024-10',
    category: 'software',
    rank: 'champion',
    inDevelopment: true,
    summary: 'High-performance interactive developer portfolio with horizontal timeline, Rocket League wave glow, and modal pop-outs.',
    description:
      'Engineered with Next.js 14 App Router, TypeScript, and Tailwind CSS. Features dynamic client-side category filtering, Rocket League wave glow effects, drag-to-scroll timeline navigation, and keyboard-accessible modals.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/LuisAlvarez99/nextjs-deploying',
    image: '/vercel.png',
  },
  {
    id: 'EndAugust2025_InterviewKickstart',
    title: 'Autonomous AI Agent & RAG Workbench',
    date: '2024-08',
    category: 'ai',
    rank: 'champion',
    inDevelopment: true,
    summary: 'Autonomous LLM agent system integrating Model Context Protocol (MCP), RAG vector retrieval, and tool orchestration.',
    description:
      'Architected during advanced Machine Learning & Scalable Systems studies at Interview Kickstart. Implements reasoning loops (ReAct framework), vector embeddings for semantic document search, memory stores, and MCP tools allowing language models to execute API operations safely.',
    tags: ['Python', 'LLMs', 'RAG', 'MCP', 'Vector DB', 'LangChain'],
    githubUrl: 'https://github.com/LuisAlvarez99/EndAugust2025_InterviewKickstart',
    image: '/vercel.png',
  },
  {
    id: 'GitTimeline',
    title: 'GitTimeline - Repo Contribution Visualizer',
    date: '2024-07',
    category: 'software',
    rank: 'diamond',
    inDevelopment: false,
    summary: 'Web-based timeline application rendering interactive chronological graph nodes and commit inspectors for public GitHub repositories.',
    description:
      'Full-stack TypeScript and React application providing visual git timeline inspection. Parses repository histories, renders interactive node networks, contribution activity graphs, and modular inspection dialogs for deep code exploration.',
    tags: ['TypeScript', 'React', 'GitHub API', 'Node.js', 'Data Visualization'],
    githubUrl: 'https://github.com/LuisAlvarez99/GitTimeline',
    image: '/vercel.png',
  },
  {
    id: 'ansible_working',
    title: 'Ansible Infrastructure Automation Platform',
    date: '2024-04',
    category: 'software',
    rank: 'diamond',
    inDevelopment: false,
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
    inDevelopment: false,
    summary: 'Additive manufacturing repository and custom 3D-printed modular robotic components designed in CAD.',
    description:
      'CAD modeling and functional 3D printing of structural brackets, planetary gearboxes, and compliant grippers. Engineered in Fusion 360 with dimensional tolerance optimization for high-stress PETG and PLA+ mechanical parts.',
    tags: ['Fusion 360', '3D Printing', 'CAD', 'PETG', 'Mechanical Engineering'],
    githubUrl: 'https://github.com/LuisAlvarez99/print-hub',
    image: '/vercel.png',
  },
  {
    id: 'ParkingFinderApp',
    title: 'ParkingFinder Mobile & Web',
    date: '2023-08',
    category: 'software',
    rank: 'gold',
    inDevelopment: false,
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
    inDevelopment: false,
    summary: 'Electronic music production leveraging analog synthesizer emulation, FM synthesis, and dynamic mastering.',
    description:
      'Music production project exploring retro-futuristic sound design in Ableton Live. Combines subtractive and FM synthesizer patches, vintage compressor modeling, and audio signal chain processing for video game and media soundtracks.',
    tags: ['Ableton Live', 'Sound Design', 'FM Synthesis', 'Audio Engineering'],
    liveDemoUrl: 'https://soundcloud.com/example/synthwave-ep',
    image: '/vercel.png',
  },
  {
    id: 'buildingBlocks',
    title: 'buildingBlocks Interactive Animation',
    date: '2023-02',
    category: 'software',
    rank: 'bronze',
    inDevelopment: false,
    summary: 'Interactive CSS keyframe physics and responsive animation engine designed with modular visual blocks.',
    description:
      'Creative frontend UI project demonstrating complex CSS transforms, transitions, and keyframe choreographies. Features hardware-accelerated rendering and playful interactive dynamics.',
    tags: ['CSS3', 'Keyframe Animations', 'JavaScript', 'UI Design'],
    githubUrl: 'https://github.com/LuisAlvarez99/buildingBlocks',
    image: '/vercel.png',
  },
  {
    id: 'React-Insta-Clone',
    title: 'React Instagram Platform Clone',
    date: '2023-05',
    category: 'software',
    rank: 'silver',
    inDevelopment: false,
    summary: 'Full-featured social feed web application with responsive UI, story trays, and post interactions.',
    description: 'Component-driven social platform clone built with React. Implements state management for likes, feed filtering, and responsive mobile-first layouts.',
    tags: ['React', 'JavaScript', 'CSS Modules'],
    githubUrl: 'https://github.com/LuisAlvarez99/React-Insta-Clone',
    image: '/vercel.png',
  },
  {
    id: 'AmazonScrape',
    title: 'Amazon E-Commerce Data Scraper',
    date: '2020-10',
    category: 'software',
    rank: 'silver',
    inDevelopment: false,
    summary: 'Python automated scraping pipeline for product pricing telemetry and historical trend analysis.',
    description:
      'Automated web scraping bot written in Python utilizing BeautifulSoup and HTTP session handling. Extracts price updates, product ratings, and metadata across catalog pages and exports structured datasets for analytics.',
    tags: ['Python', 'BeautifulSoup', 'Web Scraping', 'Data Pipelines'],
    githubUrl: 'https://github.com/LuisAlvarez99/AmazonScrape',
    image: '/vercel.png',
  },
  {
    id: 'Pokedex',
    title: 'Responsive Pokédex Explorer',
    date: '2019-11',
    category: 'software',
    rank: 'bronze',
    inDevelopment: false,
    summary: 'Fast web application querying Pokémon REST APIs for real-time stats, moves, and evolution trees.',
    description: 'Interactive Pokédex with live searching, type filtering, and animated stats meters built with JavaScript and CSS.',
    tags: ['JavaScript', 'REST API', 'CSS3'],
    githubUrl: 'https://github.com/LuisAlvarez99/Pokedex',
    image: '/vercel.png',
  },
  {
    id: 'windows-portfolio-lisander',
    title: 'Windows OS Interactive Portfolio',
    date: '2023-05',
    category: 'software',
    rank: 'silver',
    inDevelopment: false,
    summary: 'Desktop operating system simulation portfolio featuring draggable windows, start menu, and taskbar.',
    description: 'Novel portfolio experience recreating the Windows desktop paradigm in the browser with draggable windows, file explorer, and app launchers.',
    tags: ['JavaScript', 'HTML5', 'CSS'],
    githubUrl: 'https://github.com/LuisAlvarez99/windows-portfolio-lisander',
    image: '/vercel.png',
  },
  {
    id: 'EXCALL_Gym',
    title: 'EXCALL Fitness & Gym Tracker',
    date: '2019-12',
    category: 'software',
    rank: 'bronze',
    inDevelopment: false,
    summary: 'Workout routine planner and exercise logging web interface.',
    description: 'Frontend gym workout logger designed for personal routine tracking, exercise history, and workout progression.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/LuisAlvarez99/EXCALL_Gym',
    image: '/vercel.png',
  },
  {
    id: 'PaperCompany',
    title: 'Dunder Mifflin Paper Portal',
    date: '2019-11',
    category: 'software',
    rank: 'bronze',
    inDevelopment: false,
    summary: 'The Office themed corporate website and catalog showcase.',
    description: 'Thematic corporate landing page built with HTML and styled with custom responsive CSS layouts.',
    tags: ['HTML5', 'CSS3'],
    githubUrl: 'https://github.com/LuisAlvarez99/PaperCompany',
    image: '/vercel.png',
  },
  {
    id: 'simple-calc',
    title: 'Python CLI Calculator Engine',
    date: '2020-01',
    category: 'software',
    rank: 'bronze',
    inDevelopment: false,
    summary: 'Command-line mathematical parser and arithmetic evaluator in Python.',
    description: 'Python utility script parsing arithmetic expressions, supporting arithmetic operations, precedence, and interactive REPL mode.',
    tags: ['Python', 'CLI'],
    githubUrl: 'https://github.com/LuisAlvarez99/simple-calc',
    image: '/vercel.png',
  },
];

// Helper: Repeatable detection for "In Development" status
// Checks:
// 1. Repo topics contain: 'in-development', 'wip', 'active-dev', 'in-progress'
// 2. Repo description contains: '[WIP]', '[In Development]', '[Active]'
// 3. Or project was pushed in last 45 days (and not archived)
export function isRepoInDevelopment(repo: {
  topics?: string[];
  description?: string | null;
  pushed_at?: string;
  archived?: boolean;
}): boolean {
  if (repo.archived) return false;

  const topics = repo.topics || [];
  if (
    topics.some((t) =>
      ['in-development', 'wip', 'in-progress', 'active-dev'].includes(t.toLowerCase())
    )
  ) {
    return true;
  }

  const desc = (repo.description || '').toLowerCase();
  if (
    desc.includes('[wip]') ||
    desc.includes('[in development]') ||
    desc.includes('[active]')
  ) {
    return true;
  }

  if (repo.pushed_at) {
    const pushedDate = new Date(repo.pushed_at).getTime();
    const now = Date.now();
    const fortyFiveDays = 45 * 24 * 60 * 60 * 1000;
    if (now - pushedDate < fortyFiveDays) {
      return true;
    }
  }

  return false;
}

// Map any raw GitHub repo object into our Project interface
export function mapGitHubRepoToProject(repo: {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  created_at: string;
  pushed_at: string;
  language: string | null;
  topics?: string[];
  archived?: boolean;
}): Project {
  const curated = CURATED_METADATA[repo.name];
  const dateStr = (repo.pushed_at || repo.created_at || '2024-01').slice(0, 7);

  // Determine category automatically
  let category: Project['category'] = 'software';
  const lang = (repo.language || '').toLowerCase();
  const desc = (repo.description || '').toLowerCase();
  const name = repo.name.toLowerCase();

  if (
    lang === 'python' ||
    desc.includes('ai') ||
    desc.includes('llm') ||
    desc.includes('agent') ||
    desc.includes('machine learning') ||
    name.includes('ai')
  ) {
    category = 'ai';
  } else if (
    desc.includes('3d') ||
    desc.includes('print') ||
    desc.includes('cad') ||
    name.includes('print')
  ) {
    category = '3d-printing';
  } else if (
    desc.includes('music') ||
    desc.includes('synth') ||
    desc.includes('audio') ||
    name.includes('audio')
  ) {
    category = 'music';
  }

  // Determine Rocket League rank
  let rank: Project['rank'] = 'silver';
  if (curated?.rank) {
    rank = curated.rank;
  } else if (category === 'ai' || name.includes('nextjs')) {
    rank = 'champion';
  } else if (lang === 'typescript' || lang === 'jinja') {
    rank = 'diamond';
  } else if (category === '3d-printing' || name.includes('app')) {
    rank = 'gold';
  }

  const tags = curated?.tags || [
    repo.language || 'Code',
    ...(repo.topics || []).slice(0, 3),
  ];

  const inDev =
    curated?.inDevelopment !== undefined
      ? curated.inDevelopment
      : isRepoInDevelopment(repo);

  return {
    id: repo.name,
    title: curated?.title || repo.name.replace(/[-_]/g, ' '),
    date: dateStr,
    category: curated?.category || category,
    rank,
    summary:
      curated?.summary ||
      repo.description ||
      `Open source ${repo.language || 'software'} project by Luis Alvarez.`,
    description:
      curated?.description ||
      repo.description ||
      `Public repository ${repo.name} maintained by Luis Alvarez on GitHub.`,
    tags,
    githubUrl: repo.html_url,
    liveDemoUrl: curated?.liveDemoUrl || repo.homepage || undefined,
    image: curated?.image || '/vercel.png',
    inDevelopment: inDev,
  };
}

// Automatically sort all entries by date in reverse-chronological order (newest first)
export const projects: Project[] = [...baseProjects].sort((a, b) =>
  b.date.localeCompare(a.date)
);
