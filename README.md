# Ajay CR — Portfolio with Sanity CMS

A modern, production-ready personal developer portfolio built with React, TypeScript, Tailwind CSS, Framer Motion, and Sanity CMS.

## 🚀 Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite
- **Stunning UI**: Tailwind CSS with custom animations and glassmorphism effects
- **Headless CMS**: Sanity.io for easy content management
- **Smooth Animations**: Framer Motion for fluid transitions
- **Fully Responsive**: Mobile-first design approach
- **Type-Safe**: Full TypeScript support
- **SEO Ready**: Optimized meta tags and semantic HTML

## 📦 Installation

1. **Install dependencies for the main portfolio:**
```bash
npm install
```

2. **Install dependencies for Sanity Studio:**
```bash
cd studio
npm install
```

## 🔧 Configuration

### 1. Set up Sanity Project

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Create a new project
3. Copy your Project ID

### 2. Update Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SANITY_PROJECT_ID=your_project_id_here
VITE_SANITY_DATASET=production
```

### 3. Update Sanity Config

Update `studio/sanity.config.ts` with your project ID:

```typescript
projectId: "your_project_id_here",
```

## 🎯 Running the Project

### Run Portfolio (Frontend)
```bash
npm run dev
```
Opens at: http://localhost:5173

### Run Sanity Studio (CMS Admin)
```bash
cd studio
npm run dev
```
Opens at: http://localhost:3333

## 📝 Using the CMS

1. Navigate to http://localhost:3333
2. Log in with your Sanity account
3. Manage your content:
   - **Projects**: Add/edit your portfolio projects
   - **Skills**: Update your technical skills
   - **Experience**: Add work experience and education
   - **Personal**: Update bio, contact info, and availability

4. Click "Publish" after making changes
5. Your portfolio updates automatically!

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
- `surface`: Background colors
- `accent`: Primary brand colors

### Fonts
Update Google Fonts in `index.html` and `tailwind.config.js`

### Content
All content is managed through Sanity CMS, but fallback data is available in `src/data/fallback.ts`

## 📁 Project Structure

```
ajay-portfolio/
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── lib/             # Sanity client & queries
│   ├── hooks/           # Custom React hooks
│   ├── types/           # TypeScript types
│   ├── utils/           # Utility functions
│   └── data/            # Fallback data
├── studio/              # Sanity CMS admin
│   ├── schemas/         # Content schemas
│   └── sanity.config.ts
└── public/              # Static assets
```

## 🚀 Deployment

### Deploy Portfolio (Vercel)
```bash
npm install -g vercel
vercel
```

Set environment variables in Vercel dashboard:
- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`

### Deploy Sanity Studio
```bash
cd studio
npx sanity deploy
```

Your studio will be available at: `https://your-project.sanity.studio`

## 🛠️ Built With

- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vite.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Sanity.io](https://www.sanity.io/) - Headless CMS
- [Lucide React](https://lucide.dev/) - Icons

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 👤 Author

**Ajay CR**
- GitHub: [@raizel7738-creator](https://github.com/raizel7738-creator)
- Email: ajaycr2005@gmail.com

---

Built with ❤️ using React + TypeScript + Tailwind CSS + Sanity CMS
