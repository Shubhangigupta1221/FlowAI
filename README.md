# FlowAI — Landing Page

A modern landing page for FlowAI, an AI-powered analytics platform that turns business data into clear, actionable insights.

Built with React, Vite, and Tailwind CSS.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

---

## Live Demo

> **Deployed URL:** _[Add your deployed link here]_

---

## Features

| Section | Description |
|---------|-------------|
| **Navbar** | Sticky navigation with mobile hamburger menu and smooth scroll links |
| **Hero** | Headline, CTAs, and an interactive dashboard preview mockup |
| **Features** | Asymmetric bento grid showcasing AI Insights, Live Analytics, Automated Reports, and Smart Recommendations |
| **How It Works** | Three-step visual flow — Connect, Analyze, Act — with connecting lines |
| **Product Demo** | Tabbed interactive dashboard (Overview / Analytics / AI Insights) with a working "Ask AI" demo prompt |
| **Call to Action** | Clean CTA section with primary and secondary buttons |
| **Footer** | Navigation columns, social links, and copyright |
| **Easter Egg** | 🤫 Type a secret sequence on your keyboard to find it |

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 19](https://react.dev) | UI component framework |
| [Vite 8](https://vite.dev) | Build tool and dev server |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first CSS |
| [Framer Motion](https://www.framer.com/motion/) | Animations and transitions |
| [Lucide React](https://lucide.dev) | Icon library |
| [Inter](https://rsms.me/inter/) | Primary typeface (Google Fonts) |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Sticky header with mobile menu
│   ├── Hero.jsx             # Hero section with headline + CTAs
│   ├── DashboardPreview.jsx # Dashboard mockup (used in Hero)
│   ├── Features.jsx         # Bento grid feature cards
│   ├── HowItWorks.jsx       # Three-step process section
│   ├── ProductDemo.jsx      # Interactive tabbed dashboard demo
│   ├── CallToAction.jsx     # Final CTA section
│   ├── Footer.jsx           # Footer with nav columns + socials
│   └── EasterEgg.jsx        # Hidden keyboard Easter egg
├── App.jsx                  # Root layout
├── main.jsx                 # Entry point
└── index.css                # Global styles and design tokens
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Shubhangigupta1221/FlowAI.git
cd FlowAI

# Install dependencies
npm install

# Start development server
npm run dev
```

The app runs at **http://localhost:5173**

### Build for Production

```bash
npm run build
npm run preview
```

---

## Design Decisions

- **Dark theme** with a charcoal background (`#0d0f12`) and emerald accent (`#10b981`)
- **Single font** (Inter) with a clear size hierarchy for headings, body, and metadata
- **Minimal animations** — only where they add meaning (tab transitions, scroll reveals, button hovers)
- **Realistic demo data** — all numbers, charts, and AI responses use plausible business data without making false claims
- **No external images** — all visuals are built with SVG and CSS to keep the bundle self-contained

For more on technical trade-offs, see [DECISIONS.md](./DECISIONS.md).

---

## Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| `390px` | Mobile (iPhone-sized) |
| `768px` | Tablet |
| `1024px` | Small desktop |
| `1440px` | Large desktop |

All sections stack vertically on mobile with adjusted padding and font sizes. No horizontal scrolling at any viewport width.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run OxLint for code quality checks |

---

## License

This project was built as part of the Acodyn assignment.

---

Made by [Shubhangi Gupta](https://github.com/Shubhangigupta1221)
