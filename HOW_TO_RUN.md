# 🚀 How to Run Your Portfolio

## ✅ The Issue
You have the correct Sanity project ID (`1tmex7u3`) but it's in the wrong location.

## 🎯 Solution: Run from the Correct Folders

### Terminal 1 - Portfolio (Frontend)
```bash
npm run dev
```
✅ Opens at: http://localhost:5173

### Terminal 2 - Sanity Studio (CMS)
```bash
cd studio/ajay-portfolio
npm run dev
```
✅ Opens at: http://localhost:3333

---

## 📝 What Happened?

When you ran `npm create sanity@latest`, it created a NEW studio inside `studio/ajay-portfolio/` with your correct project ID (`1tmex7u3`).

The original `studio/` folder I created still has the placeholder `"YOUR_PROJECT_ID"`.

---

## ✅ Everything Should Work Now!

1. **Portfolio**: Already configured correctly with your project ID in `.env`
2. **Studio**: Use the one in `studio/ajay-portfolio/` folder

Once both are running:
- Go to http://localhost:3333 to add content
- Go to http://localhost:5173 to see your portfolio

---

## 🎨 Next Steps

1. **Add Content in Sanity Studio** (http://localhost:3333):
   - Log in with your Sanity account
   - You'll see the default schema
   - You need to add our custom schemas (projects, skills, experience, personal)

2. **Copy Our Schemas**:
   The schemas I created are in `studio/schemas/` but your active studio is in `studio/ajay-portfolio/`

   You need to copy the schemas to the correct location.

---

## 🔧 Want to Use Our Custom Schemas?

Run these commands to copy our schemas to your active studio:

```bash
# Copy our custom schemas
copy studio\schemas\project.ts studio\ajay-portfolio\schemaTypes\project.ts
copy studio\schemas\skill.ts studio\ajay-portfolio\schemaTypes\skill.ts
copy studio\schemas\experience.ts studio\ajay-portfolio\schemaTypes\experience.ts
copy studio\schemas\personal.ts studio\ajay-portfolio\schemaTypes\personal.ts
```

Then update `studio/ajay-portfolio/schemaTypes/index.ts`:

```typescript
import project from './project'
import skill from './skill'
import experience from './experience'
import personal from './personal'

export const schemaTypes = [project, skill, experience, personal]
```

Restart your studio and you'll see all the custom content types!

---

## 🎉 That's It!

Your portfolio should now work perfectly!
