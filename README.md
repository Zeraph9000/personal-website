# Personal Website

A modern, responsive personal website built with HTML, Tailwind CSS, and TypeScript.

## Features

- 🌙 Dark mode design
- 📱 Fully responsive
- ⚡ Fast and lightweight
- 🎨 Modern UI with smooth animations
- 🔧 Easy to customize

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This will start a development server, typically at `http://localhost:5173`

### Build

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Name and Title**: Edit `index.html` and update:
   - Navigation brand name
   - Hero section name and title
   - Footer copyright

2. **About Section**: Update the about text in `index.html`

3. **Projects**: Edit the `projects` array in `src/projects.ts`:
   ```typescript
   const projects: Project[] = [
     {
       title: 'Your Project Name',
       description: 'Project description',
       technologies: ['Tech1', 'Tech2'],
       githubUrl: 'https://github.com/...',
       liveUrl: 'https://...',
     },
     // Add more projects...
   ];
   ```

4. **Contact Links**: Update the contact section in `index.html` with your:
   - Email address
   - GitHub username
   - LinkedIn profile

## Tech Stack

- **HTML5** - Structure
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety and modern JavaScript
- **Vite** - Build tool and dev server

## License

MIT
