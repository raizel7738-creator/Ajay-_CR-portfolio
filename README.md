# 🚀 Ajay CR - Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Sanity CMS.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)

## ✨ Features

- 🎨 Modern glassmorphism UI design
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 📝 Content management with Sanity CMS
- 🌙 Dark theme optimized
- ♿ WCAG accessibility compliant

## 🛠️ Tech Stack

**Frontend:**
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Scroll
- Lucide Icons

**Backend/CMS:**
- Sanity CMS
- Sanity Image URL Builder

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/raizel7738-creator/ajay-portfolio.git
cd ajay-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file
```bash
cp .env.example .env
```

4. Add your Sanity credentials to `.env`
```env
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

5. Run development server
```bash
npm run dev
```

Visit `http://localhost:5173` to view the portfolio.

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Sanity Studio

The portfolio uses Sanity CMS for content management. To run the Sanity Studio:

```bash
cd studio
npm install
npm run dev
```

Visit `http://localhost:3333` to access the CMS.

## 📝 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_SANITY_PROJECT_ID` | Your Sanity project ID |
| `VITE_SANITY_DATASET` | Sanity dataset (usually "production") |

## 🌐 Deployment

This portfolio is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 👤 Author

**Ajay CR**
- GitHub: [@raizel7738-creator](https://github.com/raizel7738-creator)
- Email: raizel7738@gmail.com

---

⭐ Star this repo if you found it helpful!
