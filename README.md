# Muhammad Asad — Personal Portfolio & AI Showcase

An ultra-modern, responsive, and high-performance portfolio website built with pure semantic HTML5, CSS3 Glassmorphism, and Vanilla JavaScript (ES6+). Designed specifically for zero-build, instant hosting on **GitHub Pages**.

---

## 🌟 Features

- **Cyber Glassmorphism Design System**: Sleek dark mode by default with real-time Light/Dark mode switcher, subtle starfield canvas particles, and glowing gradients.
- **Dynamic Typewriter & Live Status**: Highlights your roles as a BS AI student at Emerson University Multan, developer at TriTechTeal, and AI builder at AZ25 Lab.
- **Filterable Project Showcase**: Categorized by `AI & Automation`, `Enterprise & Client Web`, and `Mobile & Web Apps` with interactive detail modals.
- **Interactive Experience Timeline**: Showcases your promotion from Intern to Part-time Developer at TriTechTeal, AI research at AZ25 Lab, and academic milestones.
- **Categorized Skills Matrix**: Visual animated proficiency bars across AI Agents, Web Engineering, Python, Swift iOS, and Developer Tooling.
- **Direct Contact & Copy Toast**: Instant copy-to-clipboard email notification, pre-filled mailto dispatch form, and WhatsApp direct chat.
- **Zero Build Friction**: No `npm install`, Node.js, or complex bundlers required. Works 100% out of the box.

---

## 🚀 How to Host on GitHub Pages (Step-by-Step)

### Option 1: Using the Terminal (Recommended)

1. Open your terminal in this folder:
   ```bash
   cd "/Users/Apple/Documents/my portfolio"
   ```

2. Initialize Git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of Muhammad Asad portfolio"
   ```

3. Create a new public repository on GitHub named `portfolio` under your account (`https://github.com/M-Asad-git/portfolio`).

4. Link the remote and push your code:
   ```bash
   git branch -M main
   git remote add origin https://github.com/M-Asad-git/portfolio.git
   git push -u origin main
   ```

5. **Enable GitHub Pages**:
   - Go to your repository on GitHub: `https://github.com/M-Asad-git/portfolio`
   - Click **Settings** ➔ **Pages** (in the left sidebar).
   - Under **Source**, select `Deploy from a branch`.
   - Choose `main` branch and `/ (root)` folder, then click **Save**.
   - Your website will be live in ~60 seconds at `https://m-asad-git.github.io/portfolio/`!

---

### Option 2: Using GitHub Desktop

1. Open **GitHub Desktop**.
2. Click **File** ➔ **Add Local Repository...** and select `/Users/Apple/Documents/my portfolio`.
3. Click **Publish repository** to GitHub (make sure it's public).
4. Head to your repository's **Settings** ➔ **Pages** and set branch to `main`.

---

## 🛠️ File Structure

```
my portfolio/
├── index.html              # Main webpage with semantic markup & SEO tags
├── css/
│   └── style.css           # Glassmorphism, animations, responsive grid & theme variables
├── js/
│   ├── data.js             # Projects, skills, timeline, and profile configuration
│   └── main.js             # Interactive scripts (canvas, filter, modal, typewriter, toast)
├── assets/
│   ├── favicon.svg         # Glowing SVG brand icon
│   └── images/             # Vector illustrations for all 9 projects and avatar
└── README.md               # Deployment and customization guide
```

---

## ✏️ Customizing Your Data

To update any project details, links, or experience in the future, simply edit `js/data.js`. The webpage will automatically update all cards, modals, and stats!
