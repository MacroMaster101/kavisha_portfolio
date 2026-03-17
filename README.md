# Kavisha Lakshan - Portfolio Website

A modern, single-page portfolio website featuring a dark glassmorphism design, smooth animations, and dynamic GitHub integration — built with vanilla HTML, CSS, and JavaScript.

## Live Demo

Visit the live site: [kavisha-portfolio](https://macromaster101.github.io/kavisha_portfolio)

## Features

- **Dark Glassmorphism UI** — Frosted-glass cards, gradient accents (blue/purple/pink), and subtle background grid
- **Animated Particles & Glow Orbs** — 40 floating particles and gradient orbs for a dynamic background
- **Typing Animation** — Cycles through roles: Full Stack Apps, AI Solutions, React Interfaces, RESTful APIs, ML Models, Scalable Systems
- **Scroll Reveal** — Staggered fade-in animations using Intersection Observer
- **Live GitHub Repos** — Fetches and displays public repositories from the GitHub API in real time
- **Fully Responsive** — Three breakpoints (1024px, 768px, 480px) with mobile hamburger menu
- **Accessible** — ARIA labels, keyboard navigation (Escape to close menu), semantic HTML

## Sections

| # | Section | Description |
|---|---------|-------------|
| — | **Navbar** | Fixed glassmorphism navbar with mobile slide-out drawer |
| — | **Hero** | Introduction, typing effect, CTA buttons, social links, decorative code window |
| 01 | **About** | Bio and info cards (Full Stack Dev, AI/ML, Databases, IEEE Member) |
| 02 | **Skills** | Tech stack grouped into Languages & Frameworks, Databases, AI/ML, Tools & Platforms |
| 03 | **Projects** | 2 featured projects, 2 noteworthy projects, and live GitHub repos |
| 04 | **Education** | Vertical timeline — SLIIT, St. Mary's National College, IEEE membership |
| 05 | **Contact** | Contact info cards and a contact form with client-side success animation |
| — | **Footer** | Navigation links, project links, social icons, and copyright |

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | CSS3 (Custom Properties, Grid, Flexbox, Animations) |
| Behavior | Vanilla JavaScript (ES6+) |
| Icons | [Font Awesome 6.5.1](https://fontawesome.com/) (CDN) |
| Fonts | [Inter](https://fonts.google.com/specimen/Inter) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Google Fonts) |

## Project Structure

```
kavisha_portfolio/
  index.html    — Single-page HTML with all sections (599 lines)
  style.css     — Complete styling with CSS custom properties (1562 lines)
  script.js     — All JavaScript functionality (287 lines)
  README.md     — Project documentation
```

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MacroMaster101/kavisha_portfolio.git
   cd kavisha_portfolio
   ```

2. **Run a local server:**
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve
   ```

3. **Open** `http://localhost:8000` in your browser.

## Deploy to GitHub Pages

1. Go to your repository **Settings**
2. Navigate to **Pages** in the sidebar
3. Under **Source**, select the **main** branch
4. Your site will be published at `https://<username>.github.io/kavisha_portfolio`

## Customization

### Colors

Edit the CSS custom properties in `style.css`:

```css
:root {
    --bg: #050505;
    --surface: rgba(255, 255, 255, 0.025);
    --glass: rgba(255, 255, 255, 0.04);
    --blue: #00c6ff;
    --purple: #7c3aed;
    --pink: #c026d3;
    --gradient: linear-gradient(135deg, #00c6ff 0%, #7c3aed 50%, #c026d3 100%);
}
```

### Personal Info

- Update name, bio, and contact details in `index.html`
- Replace project entries with your own work
- Update social links (GitHub, LinkedIn, Facebook, Email)

## Featured Projects

- **TravelGenie** — AI-driven travel planning platform (Node.js, Express, React, Vite, PostgreSQL)
- **Secure E-Voting System** — Web-based voting system (Java, Spring Boot, React, MS SQL Server)
- **DengueRisk** — AI dengue risk prediction model (Python, Pandas, NumPy, Scikit-learn)
- **Home Tutor Management System** — Tutor management platform (Java, CSS, JavaScript)

## Contact

- Email: lakshan.kavishatt@gmail.com
- GitHub: [@MacroMaster101](https://github.com/MacroMaster101)
- LinkedIn: [Kavisha Liyanage](https://linkedin.com/in/kavisha-liyanage04)

---

Made with passion by **Kavisha Liyanage**
