# 🛠 How to Update Your Portfolio in the Future

This portfolio is built with a **Single Source of Truth** architecture. You do not need to touch complex WebGL shaders or internal code to update your projects, milestones, or contact details.

All your content is cleanly organized in:
📁 **[`src/data/portfolio_data.js`](src/data/portfolio_data.js)**

---

## 1. How to Add a New Project

1. Open [`src/data/portfolio_data.js`](src/data/portfolio_data.js).
2. Scroll to `export const PROJECTS_DATA = [ ... ]`.
3. Add a new project object to the array:

```javascript
{
  id: 'my-new-project',                      // Unique identifier (lowercase, no spaces)
  category: 'ai',                            // 'ai' | 'games_mobile' | 'research_awards'
  badge: 'AI & Robotics',                   // Category or award label
  status: 'In Production',                  // Status badge (e.g. 'Operational', 'Live App')
  title: 'Autonomous Drone Navigation',     // Full project name
  desc: 'A computer vision and SLAM pipeline for obstacle avoidance.',
  bullets: [
    'Engineered real-time depth mapping using stereo cameras.',
    'Implemented Kalman filtering for trajectory tracking.',
    'Achieved 98% accuracy in perimeter obstacle detection.'
  ],
  stack: ['Python', 'OpenCV', 'ROS', 'PyTorch'],
  architecture: 'Input: Camera Feed → Preprocessing → YOLOv8 Inference → Path Planner → Motor Control.',
  github: 'https://github.com/SuryaDevol/my-drone-project'
},
```
4. Save the file. The new project card and its interactive Technical Specs modal will automatically appear on both desktop and mobile!

---

## 2. How to Add or Edit Timeline Milestones (Scene 03 — Chrono)

1. Open [`src/data/portfolio_data.js`](src/data/portfolio_data.js).
2. Look for `export const TIMELINE_MILESTONES = [ ... ]`.
3. You can edit the existing 2021–2027 milestones or add a new year:

```javascript
{
  year: 2027,
  key: 'Graduation & Career',
  lines: ['B.E. CSE Graduate', 'AI Engineer Role', 'Next-Gen Research'],
},
```

---

## 3. How to Update Contact Details & Links

In [`src/data/portfolio_data.js`](src/data/portfolio_data.js), update the `PERSONAL_INFO` object:

```javascript
export const PERSONAL_INFO = {
  name: 'Jeyasurya G',
  email: 'suryacloudcamp@gmail.com',
  phone: '+91 6379491821',
  socials: {
    github: 'https://github.com/SuryaDevol',
    linkedin: 'https://linkedin.com/in/jeyasurya-g',
    liveSite: 'https://jeyasurya.surge.sh'
  }
};
```

---

## 4. How to Publish Your Changes Live Online

Whenever you make updates, run these 2 commands in your terminal:

### Step 1: Deploy Live to the Web
```bash
npx surge . jeyasurya.surge.sh
```
Your live site at **https://jeyasurya.surge.sh** will update globally in seconds!

### Step 2: Push to GitHub
```bash
git add .
git commit -m "feat: update projects and portfolio content"
git push origin main
```
This keeps your GitHub repository at [SuryaDevol/jeyasurya-portfolio37](https://github.com/SuryaDevol/jeyasurya-portfolio37) completely up to date.

---

## 📱 Mobile & Desktop Compatibility

The website is fully optimized for all form factors:
- **Desktop**: Mouse parallax, hover glow, fluid typography, interactive 3D timeline raycast.
- **Mobile (iOS & Android)**:
  - Touch swipe across the Chrono timeline (swipe left/right to change years).
  - Touch parallax on the monolithic hero text.
  - Large thumb-friendly buttons (44px min touch targets).
  - Fluid single-column responsive layout for project cards.
  - Scroll lock on modals to prevent awkward background jitter.
