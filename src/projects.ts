interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A modern web application built with cutting-edge technologies. Features include real-time updates, responsive design, and intuitive user interface.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/project-one',
    liveUrl: 'https://project-one.example.com',
  },
  {
    title: 'Project Two',
    description: 'An innovative solution that solves complex problems with elegant code. Built with performance and scalability in mind.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/project-two',
    liveUrl: 'https://project-two.example.com',
  },
  {
    title: 'Project Three',
    description: 'A beautiful mobile-first application that provides an exceptional user experience across all devices.',
    technologies: ['Vue.js', 'TypeScript', 'Vite'],
    githubUrl: 'https://github.com/yourusername/project-three',
  },
];

function createProjectCard(project: Project): string {
  const technologies = project.technologies.map(tech => 
    `<span class="px-4 py-2 bg-blue-dark/50 border border-blue-dark rounded-lg text-sm font-medium text-blue-light">${tech.toUpperCase()}</span>`
  ).join('');

  const links = [];
  if (project.githubUrl) {
    links.push(`<a href="${project.githubUrl}" target="_blank" class="px-6 py-2 bg-blue-medium hover:bg-blue-light text-white font-semibold rounded-lg transition-all duration-300 shadow-glow hover:shadow-glow-lg">
      GITHUB →
    </a>`);
  }
  if (project.liveUrl) {
    links.push(`<a href="${project.liveUrl}" target="_blank" class="px-6 py-2 border-2 border-blue-medium hover:bg-blue-medium/10 text-blue-light hover:text-blue-accent font-semibold rounded-lg transition-all duration-300">
      LIVE →
    </a>`);
  }

  return `
    <div class="card group">
      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
        <h3 class="text-4xl md:text-5xl font-black tracking-tight text-white group-hover:text-blue-accent transition-colors">
          ${project.title.toUpperCase()}
        </h3>
        <div class="flex flex-wrap gap-2">
          ${technologies}
        </div>
      </div>
      <p class="text-xl md:text-2xl mb-8 font-light text-blue-light leading-relaxed">
        ${project.description}
      </p>
      <div class="flex gap-4">
        ${links.join('')}
      </div>
    </div>
  `;
}

export function initProjects(): void {
  const projectsContainer = document.getElementById('projects-container');
  
  if (projectsContainer) {
    projectsContainer.innerHTML = projects.map(project => createProjectCard(project)).join('');
  }
}

// Export projects array so it can be easily modified
export { projects };
