# CLAUDE.md — Manuel Estrada Portfolio

## Project Overview

Personal developer portfolio website for **Manuel Estrada**, a Full Stack Developer & Sistemas Analyst.
The goal is to showcase his technical profile, experience, and projects to potential employers and collaborators.

## Owner Profile

**Name:** Manuel Estrada
**Role:** Full Stack Developer / Analista de Sistemas
**Email:** estradamanuel15@yahoo.com
**Phone:** +54 11 30441967
**Education:** Analista de Sistemas — ORT Argentina (Marzo 2022 – Julio 2025), GPA 8/10
**English:** B1 level

## Skills

- **Frontend:** React, Vue, HTML5, CSS3, JavaScript (ES6+)
- **Backend:** Node.js, Firebase Cloud Functions v2
- **Mobile:** Flutter & Dart
- **Databases:** SQL Server, Firebase (Firestore)
- **APIs:** Mercado Pago Checkout Pro
- **Tools:** Git, GitHub, Scrum, Cloudflare, Firebase Hosting & Storage

## Experience

### Full Stack Developer — Genesis Airsoft (Septiembre 2025 – Presente)
- Built a full-stack e-commerce platform with React and Firebase
- Contributed to a 35% increase in sales through UX improvements
- Integrated Mercado Pago Checkout Pro, increasing orders by 15%
- Built email notifications system with MailSender, expanding wholesale client reach by 30%
- Deployed with Firebase Hosting, Firestore, Storage and Cloud Functions v2 (serverless architecture)
- Implemented shipping logic with ViaCargo, reducing logistics cost by 20%
- Developed order creation system validated via Cloud Functions to ensure order integrity

### Full Stack Developer — Nutrabit (Marzo 2025 – Julio 2025)
- Developed key features of a mobile app with Flutter & Dart for nutritional management
- Integrated Firebase (Firestore, Storage, Authentication) for data, auth, and file storage
- Implemented appointment management, calendar, and profile customization features
- Built a system for PDF and multimedia document upload/storage for nutritionists to share with patients

## Portfolio Site Requirements

### Tech Stack
- **Preferred:** React + Vite (or Next.js), deployed on Vercel
- Use Tailwind CSS or CSS Modules for styling
- Keep it a Single Page Application (SPA) with smooth scroll sections

### Sections to Include

1. **Hero** — Name, title ("Full Stack Developer"), short tagline, CTA buttons (contact + GitHub)
2. **About** — Brief professional bio, education, current focus
3. **Skills** — Visual display of tech stack grouped by category (Frontend, Backend, Mobile, DB, Tools)
4. **Experience** — Timeline or card layout for Genesis Airsoft and Nutrabit
5. **Projects** — Cards for each project with description, tech used, and links (GitHub / live)
6. **Contact** — Email link, LinkedIn, GitHub icons/links

### Design Guidelines
- Clean, minimal, professional aesthetic
- Dark mode preferred (dark background, light text, accent color — e.g. cyan or indigo)
- Mobile-first, fully responsive
- Smooth scroll navigation with sticky navbar
- Subtle animations (fade-in on scroll, hover effects on cards)
- Reference site: https://fjanza.vercel.app/ (colleague's portfolio — use as style/layout inspiration)

### Tone & Copy
- Spanish or English — default to **Spanish** for copy unless otherwise specified
- Professional but approachable tone
- Metrics-driven bullet points (use the % improvements from the CV)

## Deployment

- Host on **Vercel**
- Custom domain if available, otherwise use `mestrada.vercel.app` or similar

## File Structure (suggested)

```
MEstrada/
├── CLAUDE.md
├── public/
│   └── favicon.ico / profile photo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Notes for Claude

- Do not add placeholder lorem ipsum — all copy should come from the real CV data above
- Keep components small and focused — one section per file
- Do not over-engineer; no state management library needed (useState/useEffect is enough)
- Prioritize performance and Lighthouse score (lazy load images, minimal dependencies)
- When adding project cards, link to GitHub repos if available; otherwise mark as "Repositorio privado"
