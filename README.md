# Prashant Dwivedi — Developer Portfolio

Premium, cinematic portfolio built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lenis smooth scroll.

## Stack

- **React 19** + **Vite 8** + **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Framer Motion** — animations & transitions
- **Lenis** — smooth scrolling
- **Lucide React** — UI icons

## Structure

```
src/
├── components/     # Reusable UI, effects, layout
├── sections/       # Hero, About, Skills, Projects, etc.
├── hooks/          # scroll, mouse, counter, in-view
├── constants/      # Site data, projects, experience
├── utils/          # cn(), scroll helpers
└── assets/
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173/portfolio/](http://localhost:5173/portfolio/) (base path is `/portfolio/` for GitHub Pages).

## Build & Deploy

```bash
npm run build
npm run deploy   # publishes dist/ to gh-pages
```

## Customize

Edit `src/constants/data.ts` for:

- Contact email, GitHub, LinkedIn URLs
- Projects, experience, skills
- Stats and timeline content

Add your resume at `public/resume.pdf` for the **Download Resume** button.

## Features

- Cinematic hero with rotating titles & floating tech badges
- Timeline about section with animated stat counters
- Interactive skills orbit + category grid
- Featured projects with case-study modals
- Experience timeline with scroll reveals
- System design section with animated architecture flows
- Contact form with social links
- Cursor glow, scroll progress, loading screen, particle grid
- Lazy-loaded sections for performance
- Fully responsive layout
