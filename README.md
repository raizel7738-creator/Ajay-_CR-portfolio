# Ajay CR — Portfolio

A modern, responsive developer portfolio built with **React**, **JavaScript (JSX)**, **Tailwind CSS**, and **Sanity CMS**. Features a glassmorphism UI, smooth scroll navigation, Framer Motion animations, and CMS-driven projects and experience sections.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Sanity](https://img.shields.io/badge/Sanity-CMS-F03E2F?logo=sanity&logoColor=white)](https://www.sanity.io/)

**Repository:** [github.com/raizel7738-creator/Ajay-_CR-portfolio](https://github.com/raizel7738-creator/Ajay-_CR-portfolio)

---

## Features

- **Hero** — Typewriter effect, availability badge, and call-to-action buttons
- **About** — Bio, education, location, and animated stat counters
- **Skills** — Filterable skill cards with proficiency bars
- **Projects** — Sanity CMS integration with local fallback data
- **Experience** — Timeline for work and education
- **Contact** — Mailto-based contact form and social links
- **Responsive** — Mobile-friendly layout with animated mobile navigation
- **Sanity Studio** — Manage portfolio content without touching code

---

## Tech Stack

| Layer | Technologies |
|-------|----------------|
| Frontend | React 19, JavaScript (JSX), Vite 8 |
| Styling | Tailwind CSS, clsx, tailwind-merge |
| Animation | Framer Motion, React Scroll |
| Icons | Lucide React |
| CMS | Sanity v3, `@sanity/client`, GROQ queries |
| Tooling | ESLint, PostCSS, Autoprefixer |

---

## Project Structure

```
ajay-portfolio/
├── public/                 # Static assets (favicon, resume, etc.)
├── src/
│   ├── components/         # Page sections & UI components
│   ├── data/               # Fallback content when CMS is empty
│   ├── hooks/              # useSanityData custom hook
│   ├── lib/                # Sanity client & GROQ queries
│   └── utils/              # Shared utilities (cn helper)
├── studio/                 # Sanity Studio (JavaScript schemas)
│   ├── schemas/            # project, skill, experience, personal
│   ├── sanity.config.js
│   └── sanity.json         # CLI project/dataset config
├── index.html
├── vite.config.js
└── tailwind.config.js
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (included with Node.js)
- A [Sanity](https://www.sanity.io/) account (optional — fallback data works offline)

### 1. Clone the repository

```bash
git clone https://github.com/raizel7738-creator/Ajay-_CR-portfolio.git
cd Ajay-_CR-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Copy the example env file and add your Sanity credentials:

```bash
cp .env.example .env
```

```env
VITE_SANITY_PROJECT_ID=your_sanity_project_id
VITE_SANITY_DATASET=production
```

> If you skip this step, the site still runs using built-in fallback data for projects, skills, and experience.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## Sanity Studio

Content is managed in the `studio/` folder (plain JavaScript, no TypeScript).

```bash
cd studio
npm install
npm run dev
```

Studio runs at [http://localhost:3333](http://localhost:3333).

| Document type | Purpose |
|---------------|---------|
| `project` | Portfolio projects (title, tech, GitHub, live URL) |
| `skill` | Skills with category and proficiency level |
| `experience` | Work history and education entries |
| `personal` | Name, bio, contact links, availability flag |

Deploy the studio:

```bash
cd studio
npm run deploy
```

---

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Set the **root directory** to the repo root (where `package.json` lives).
4. Add environment variables:
   - `VITE_SANITY_PROJECT_ID`
   - `VITE_SANITY_DATASET`
5. Build command: `npm run build` · Output directory: `dist`

Production uses a Vercel serverless function at `/api/sanity` to load CMS data server-side (avoids browser CORS blocks from Sanity).

**Optional — Sanity CORS:** In [sanity.io/manage](https://www.sanity.io/manage) → your project → **API** → **CORS origins**, add your live URL (e.g. `https://your-site.vercel.app`) if you want direct browser requests instead of the proxy.

---

## Customization

- **Colors & theme** — `tailwind.config.js` and `src/index.css`
- **Fallback content** — `src/data/fallback.js`
- **Sections** — `src/components/`
- **CMS schemas** — `studio/schemas/`

---

## License

MIT — feel free to use this project as a template for your own portfolio.

---

## Author

**Ajay CR** — MERN Stack Developer

- GitHub: [@raizel7738-creator](https://github.com/raizel7738-creator)
- Email: [ajaycr2005@gmail.com](mailto:ajaycr2005@gmail.com)
- Location: Kerala, India

---

If this project helped you, consider giving it a star on GitHub.
