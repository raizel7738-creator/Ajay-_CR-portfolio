# 📋 Deployment Checklist

## Pre-Deployment

### ✅ Content Ready
- [ ] All projects added to Sanity
- [ ] Skills updated with correct levels
- [ ] Experience/Education added
- [ ] Personal info completed
- [ ] Resume PDF added to `public/resume.pdf`
- [ ] All content published in Sanity Studio

### ✅ Configuration
- [ ] Sanity Project ID added to `.env`
- [ ] Sanity Project ID added to `studio/sanity.config.ts`
- [ ] Social links updated (GitHub, Email)
- [ ] Contact email updated
- [ ] Phone number updated
- [ ] Location updated

### ✅ Customization
- [ ] Brand colors customized (if needed)
- [ ] Fonts customized (if needed)
- [ ] Meta tags updated in `index.html`
- [ ] Favicon updated

### ✅ Testing
- [ ] Build succeeds: `npm run build`
- [ ] All pages load correctly
- [ ] Mobile responsive checked
- [ ] Contact form works
- [ ] All links work
- [ ] Resume downloads
- [ ] Smooth scroll works
- [ ] Animations work

---

## Deploy Portfolio

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Add Environment Variables in Vercel Dashboard:**
   - Go to: Project Settings → Environment Variables
   - Add:
     - `VITE_SANITY_PROJECT_ID` = `your_project_id`
     - `VITE_SANITY_DATASET` = `production`

4. **Redeploy:**
```bash
vercel --prod
```

✅ **Checklist:**
- [ ] Deployed to Vercel
- [ ] Environment variables added
- [ ] Custom domain connected (optional)
- [ ] SSL certificate active
- [ ] Site loads correctly

---

### Option 2: Netlify

1. **Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Build:**
```bash
npm run build
```

3. **Deploy:**
```bash
netlify deploy --prod --dir=dist
```

4. **Add Environment Variables:**
   - Go to: Site Settings → Environment Variables
   - Add same variables as Vercel

✅ **Checklist:**
- [ ] Deployed to Netlify
- [ ] Environment variables added
- [ ] Custom domain connected (optional)
- [ ] Site loads correctly

---

## Deploy Sanity Studio

1. **Navigate to studio:**
```bash
cd studio
```

2. **Deploy:**
```bash
npx sanity deploy
```

3. **Choose hostname:**
   - Example: `ajay-portfolio`
   - Your studio will be at: `https://ajay-portfolio.sanity.studio`

4. **Add CORS Origins:**
   - Go to: https://sanity.io/manage
   - Select your project
   - Go to: API → CORS Origins
   - Add your production URL (e.g., `https://your-site.vercel.app`)

✅ **Checklist:**
- [ ] Studio deployed
- [ ] Hostname chosen
- [ ] CORS origins added
- [ ] Can access studio online
- [ ] Can edit content from studio

---

## Post-Deployment

### ✅ Final Checks
- [ ] Portfolio loads on production URL
- [ ] All images load
- [ ] All links work
- [ ] Contact form works
- [ ] Resume downloads
- [ ] Mobile responsive
- [ ] Fast loading times
- [ ] No console errors

### ✅ SEO & Analytics (Optional)
- [ ] Google Analytics added
- [ ] Meta tags optimized
- [ ] Open Graph tags added
- [ ] Twitter Card tags added
- [ ] Sitemap generated
- [ ] robots.txt added
- [ ] Google Search Console verified

### ✅ Performance (Optional)
- [ ] Lighthouse score checked
- [ ] Images optimized
- [ ] Code splitting implemented
- [ ] Lazy loading added

---

## Maintenance

### Regular Updates
- [ ] Update projects in Sanity Studio
- [ ] Update skills as you learn
- [ ] Add new experience
- [ ] Update resume periodically
- [ ] Check for broken links monthly

### Dependencies
- [ ] Update npm packages quarterly
- [ ] Check for security vulnerabilities
- [ ] Test after updates

---

## 🎉 Launch Checklist

**Before announcing your portfolio:**

- [ ] All content is accurate and up-to-date
- [ ] No placeholder text remains
- [ ] All links tested
- [ ] Tested on multiple devices
- [ ] Tested on multiple browsers
- [ ] Loading speed is good
- [ ] No console errors
- [ ] Resume is current
- [ ] Contact info is correct
- [ ] Social links work

**Ready to share:**
- [ ] Share on LinkedIn
- [ ] Share on Twitter
- [ ] Add to GitHub profile
- [ ] Add to resume
- [ ] Share with network

---

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Sanity Docs**: https://www.sanity.io/docs
- **Vite Docs**: https://vite.dev
- **React Docs**: https://react.dev

---

## 🚀 You're Ready to Launch!

Once all checkboxes are complete, your portfolio is production-ready!

**Good luck! 🎉**
