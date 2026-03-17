import skills from './skills.json';

function initSkills(): void {
  const skillsContainer = document.getElementById('skills-container');
  
  if (skillsContainer) {
    skillsContainer.innerHTML = skills.map(skill => 
      `<div class="skill-badge">${skill.name}</div>`
    ).join('');
  }
}

export { initSkills, skills };
