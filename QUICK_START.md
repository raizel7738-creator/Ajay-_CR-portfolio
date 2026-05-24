# 🚀 Quick Start Guide

## ⚡ Get Started in 5 Minutes

### Step 1: Create Sanity Project (2 min)

1. Visit: https://sanity.io/manage
2. Click "Create Project"
3. Name: `ajay-portfolio`
4. Copy your **Project ID** (looks like: `abc123xyz`)

### Step 2: Configure Project (1 min)

**Update `.env` file:**
```env
VITE_SANITY_PROJECT_ID=abc123xyz  # ← Paste your Project ID here
VITE_SANITY_DATASET=production
```

**Update `studio/sanity.config.ts` (line 8):**
```typescript
projectId: "abc123xyz",  // ← Paste your Project ID here
```

### Step 3: Install Studio Dependencies (1 min)

```bash
cd studio
npm install
cd ..
```

### Step 4: Run the Project (1 min)

**Open 2 terminals:**

**Terminal 1 - Portfolio:**
```bash
npm run dev
```
✅ Opens at: http://localhost:5173

**Terminal 2 - Sanity Studio:**
```bash
cd studio
npm run dev
```
✅ Opens at: http://localhost:3333

### Step 5: Add Content (Optional)

1. Go to http://localhost:3333
2. Log in with Google/GitHub
3. Add your projects, skills, and experience
4. Click "Publish"
5. See changes live at http://localhost:5173

---

## 📝 What You Get

✅ Modern portfolio with glassmorphism design  
✅ Typewriter effect on hero section  
✅ Animated skill bars with filtering  
✅ Project showcase with CMS  
✅ Experience timeline  
✅ Contact form  
✅ Fully responsive  
✅ Production-ready build  

---

## 🎨 Quick Customization

### Change Brand Color
Edit `tailwind.config.js` line 15:
```javascript
DEFAULT: "#6366f1",  // Change to your color
```

### Add Your Resume
Place your PDF at: `public/resume.pdf`

### Update Social Links
Edit:
- `src/components/Hero.tsx` (line 70)
- `src/components/Navbar.tsx` (line 30)
- `src/components/Contact.tsx` (line 18)

---

## 🚀 Deploy

### Deploy Portfolio (Vercel)
```bash
npm install -g vercel
vercel
```

Add environment variables in Vercel:
- `VITE_SANITY_PROJECT_ID` = your_project_id
- `VITE_SANITY_DATASET` = production

### Deploy Studio
```bash
cd studio
npx sanity deploy
```

---

## 📚 Full Documentation

- **README.md** - Complete documentation
- **SETUP_GUIDE.md** - Detailed setup instructions
- **PROJECT_SUMMARY.md** - Project overview

---

## 🆘 Need Help?

**Portfolio not showing data?**
- Check Project ID in `.env` and `studio/sanity.config.ts`
- Make sure you published content in Sanity Studio

**Build errors?**
- Run `npm install` in root folder
- Run `npm install` in studio folder

**Studio won't start?**
- Check Project ID is correct
- Make sure you're logged into Sanity

---

**That's it! You're ready to go! 🎉**

Built with React + TypeScript + Tailwind CSS + Sanity CMS
