interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'other';
}

const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', category: 'language' },
  { name: 'TypeScript', category: 'language' },
  { name: 'Python', category: 'language' },
  { name: 'Java', category: 'language' },
  { name: 'C++', category: 'language' },
  { name: 'HTML/CSS', category: 'language' },
  
  // Frameworks & Libraries
  { name: 'React', category: 'framework' },
  { name: 'Node.js', category: 'framework' },
  { name: 'Express', category: 'framework' },
  { name: 'Vue.js', category: 'framework' },
  { name: 'Next.js', category: 'framework' },
  { name: 'Tailwind CSS', category: 'framework' },
  
  // Tools & Technologies
  { name: 'Git', category: 'tool' },
  { name: 'Docker', category: 'tool' },
  { name: 'MongoDB', category: 'tool' },
  { name: 'PostgreSQL', category: 'tool' },
  { name: 'AWS', category: 'tool' },
  { name: 'Linux', category: 'tool' },
];

function initSkills(): void {
  const skillsContainer = document.getElementById('skills-container');
  
  if (skillsContainer) {
    skillsContainer.innerHTML = skills.map(skill => 
      `<div class="skill-badge">${skill.name}</div>`
    ).join('');
  }
}

export { initSkills, skills };
