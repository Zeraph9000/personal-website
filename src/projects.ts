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
    `<span class="px-3 py-1 bg-dark-bg border border-border rounded text-xs font-medium text-text-muted">${tech}</span>`
  ).join('');

  const links = [];
  if (project.githubUrl) {
    links.push(`<a href="${project.githubUrl}" target="_blank" class="text-sm font-medium text-accent-cyan hover:text-accent-teal transition-colors">
      GitHub →
    </a>`);
  }
  if (project.liveUrl) {
    links.push(`<a href="${project.liveUrl}" target="_blank" class="text-sm font-medium text-accent-blue hover:text-accent-cyan transition-colors">
      Live Demo →
    </a>`);
  }

  return `
    <div class="card group">
      <h3 class="text-2xl font-bold mb-3 text-text-primary group-hover:text-accent-cyan transition-colors">
        ${project.title}
      </h3>
      <p class="text-base mb-4 text-text-muted leading-relaxed">
        ${project.description}
      </p>
      <div class="flex flex-wrap gap-2 mb-4">
        ${technologies}
      </div>
      <div class="flex gap-4 mt-6">
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
