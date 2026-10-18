const rawProjects = [
  {
    id: 1,
    title: 'Project Alpha',
    date: '2023-11',
    category: 'software',
    rank: 'champion',
    summary: 'A high-performance software project.',
    description: 'This is a detailed description of Project Alpha. It uses cutting edge technologies and achieves high performance.',
    tags: ['React', 'Next.js', 'TypeScript'],
    liveDemoUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/alpha',
    media: '/favicon.ico'
  },
  {
    id: 2,
    title: 'AI Agent Beta',
    date: '2024-01',
    category: 'ai',
    rank: 'diamond',
    summary: 'An advanced AI agent for scheduling.',
    description: 'AI Agent Beta helps users schedule their tasks automatically based on priority and deadlines.',
    tags: ['Python', 'OpenAI', 'FastAPI'],
    liveDemoUrl: 'https://example.com/beta',
    githubUrl: 'https://github.com/example/beta',
    media: '/favicon.ico'
  },
  {
    id: 3,
    title: '3D Printed Vase',
    date: '2023-05',
    category: '3d-printing',
    rank: 'gold',
    summary: 'A custom designed 3D printed vase.',
    description: 'A beautiful vase designed in Blender and printed using PLA on an Ender 3.',
    tags: ['Blender', 'PLA', '3D Printing'],
    liveDemoUrl: '',
    githubUrl: '',
    media: '/favicon.ico'
  },
  {
    id: 4,
    title: 'Synthwave Track',
    date: '2022-10',
    category: 'music',
    rank: 'silver',
    summary: 'An original synthwave track.',
    description: 'Composed and produced a retro synthwave track using FL Studio.',
    tags: ['FL Studio', 'Synthwave', 'Music Production'],
    liveDemoUrl: 'https://soundcloud.com/example',
    githubUrl: '',
    media: '/favicon.ico'
  },
  {
    id: 5,
    title: 'Old Software Project',
    date: '2021-02',
    category: 'software',
    rank: 'bronze',
    summary: 'My very first software project.',
    description: 'A simple calculator app built with vanilla JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveDemoUrl: 'https://example.com/old',
    githubUrl: 'https://github.com/example/old',
    media: '/favicon.ico'
  }
];

// Sort projects by date in reverse-chronological order (newest first)
export const projects = [...rawProjects].sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});
