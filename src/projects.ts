import projects from './projects.json';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

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

export { projects };
