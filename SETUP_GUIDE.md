# 🚀 Quick Setup Guide for Ajay CR Portfolio

## Step 1: Create Sanity Project

1. Visit [sanity.io/manage](https://sanity.io/manage)
2. Click "Create Project"
3. Name it: **ajay-portfolio**
4. Copy the **Project ID** (looks like: `abc123xyz`)

## Step 2: Configure Environment

1. Open `.env` file in the root directory
2. Replace `your_project_id_here` with your actual Project ID:
   ```env
   VITE_SANITY_PROJECT_ID=abc123xyz
   VITE_SANITY_DATASET=production
   ```

3. Open `studio/sanity.config.ts`
4. Replace `YOUR_PROJECT_ID` with your actual Project ID:
   ```typescript
   projectId: "abc123xyz",
   ```

## Step 3: Run the Portfolio

Open **Terminal 1** and run:
```bash
npm run dev
```
✅ Portfolio opens at: http://localhost:5173

## Step 4: Run Sanity Studio

Open **Terminal 2** and run:
```bash
cd studio
npm run dev
```
✅ Admin panel opens at: http://localhost:3333

## Step 5: Add Your Content

1. Go to http://localhost:3333
2. Log in with your Sanity account (Google/GitHub)
3. Add your content:

### Add Projects
- Click "Project" → "Create new"
- Fill in:
  - Title: "YouTube Clone"
  - Description: Short summary
  - Points: Key features (bullet points)
  - Tech: ["React.js", "Node.js", "MongoDB"]
  - GitHub URL: Your repo link
  - Order: 1 (for first project)
- Click "Publish"

### Add Skills
- Click "Skill" → "Create new"
- Fill in:
  - Name: "React.js"
  - Category: Frontend
  - Level: 85 (0-100)
- Click "Publish"

### Add Experience
- Click "Experience / Education" → "Create new"
- Fill in your work experience or education
- Click "Publish"

### Add Personal Info
- Click "Personal Info" → "Create new"
- Fill in:
  - Name: Ajay CR
  - Title: MERN Stack Developer
  - Bio: Your bio paragraph
  - Email, Phone, GitHub, etc.
  - Available: ✓ (shows green badge)
- Click "Publish"

## Step 6: View Your Portfolio

Go back to http://localhost:5173 and see your content live! 🎉

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  accent: {
    DEFAULT: "#6366f1",  // Change this to your brand color
  }
}
```

### Add Your Resume
1. Place your resume PDF in `public/resume.pdf`
2. The "Download Resume" button will work automatically

### Update Social Links
Edit the links in:
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

## 🚀 Deploy to Production

### Deploy Portfolio (Vercel - Free)
```bash
npm install -g vercel
vercel
```

In Vercel dashboard, add environment variables:
- `VITE_SANITY_PROJECT_ID` = your_project_id
- `VITE_SANITY_DATASET` = production

### Deploy Sanity Studio (Free)
```bash
cd studio
npx sanity deploy
```

Choose a studio hostname (e.g., `ajay-portfolio`)
Your admin panel will be at: `https://ajay-portfolio.sanity.studio`

## 🆘 Troubleshooting

### Portfolio shows fallback data
- Make sure you've added content in Sanity Studio
- Check that your Project ID is correct in `.env`
- Verify you clicked "Publish" in Sanity Studio

### Sanity Studio won't start
- Make sure you ran `npm install` in the `studio` folder
- Check that `studio/sanity.config.ts` has your correct Project ID

### Build errors
- Delete `node_modules` and run `npm install` again
- Make sure all dependencies are installed

## 📞 Need Help?

- Sanity Docs: https://www.sanity.io/docs
- React Docs: https://react.dev
- Tailwind Docs: https://tailwindcss.com

---

**You're all set! 🎉 Start building your amazing portfolio!**
