export interface Project {
  id: string;
  title: string;
  date: string;
  category: 'software' | 'ai' | '3d-printing' | 'music';
  rank: 'champion' | 'diamond' | 'gold' | 'silver' | 'bronze';
  summary: string;
  description: string;
  tags: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Code Assistant',
    date: '2024-03',
    category: 'ai',
    rank: 'champion',
    summary: 'An advanced AI code assistant for developers.',
    description: 'This AI Code Assistant integrates deeply into the IDE, providing real-time suggestions, refactoring tips, and bug fixes using large language models. Built with advanced transformer architectures and deployed on scalable cloud infrastructure, it revolutionizes the way developers write and review code.',
    tags: ['Python', 'PyTorch', 'TypeScript', 'LLM'],
    githubUrl: 'https://github.com/example/ai-code-assistant'
  },
  {
    id: '2',
    title: 'E-commerce Platform',
    date: '2024-01',
    category: 'software',
    rank: 'diamond',
    summary: 'A highly scalable e-commerce backend and frontend.',
    description: 'A complete e-commerce solution with a robust microservices backend and a blazing fast frontend. It features seamless payment integrations, inventory management, and personalized user recommendations, ensuring a smooth shopping experience.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveDemoUrl: 'https://example-ecommerce.com'
  },
  {
    id: '3',
    title: 'Robotic Arm Mod',
    date: '2023-11',
    category: '3d-printing',
    rank: 'gold',
    summary: 'Custom 3D printed components for an open-source robotic arm.',
    description: 'Designed and 3D printed modular enhancements for a desktop robotic arm. The modifications improve precision and expand the range of motion, making it suitable for delicate assembly tasks.',
    tags: ['Fusion 360', 'PLA', 'Robotics']
  },
  {
    id: '4',
    title: 'Synthwave EP',
    date: '2023-08',
    category: 'music',
    rank: 'silver',
    summary: 'A 5-track synthwave EP inspired by the 80s.',
    description: 'Produced and mixed a fully synthesized EP featuring vintage drum machines and classic analog synthesizers. The tracks blend nostalgic melodies with modern electronic production techniques.',
    tags: ['Ableton Live', 'Synthesizers', 'Mixing'],
    liveDemoUrl: 'https://soundcloud.com/example/synthwave-ep'
  },
  {
    id: '5',
    title: 'Portfolio Website',
    date: '2023-05',
    category: 'software',
    rank: 'bronze',
    summary: 'My personal portfolio and blog.',
    description: 'A statically generated portfolio website built to showcase my projects and technical writing. Designed with a clean, responsive interface that highlights my skills and experience.',
    tags: ['React', 'Tailwind CSS', 'Static Site Generation'],
    githubUrl: 'https://github.com/example/portfolio'
  }
];
