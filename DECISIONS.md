# Decisions

## 1. Why this approach over the alternative I rejected?

I chose **Vite + React with Tailwind CSS** as a single-page application over a static HTML/CSS site or a heavier framework like Next.js.

**Rejected alternative: plain HTML/CSS.** A static page would have been faster to scaffold, but I needed component reuse (the dashboard preview appears in both the Hero and Product Demo sections with different configurations), interactive state (tabbed dashboard views, the AI query demo), and clean separation between sections. React components gave me that without overengineering.

**Rejected alternative: Next.js.** Server-side rendering and file-based routing add complexity that a single landing page doesn't need. No SEO-critical dynamic content, no API routes, no multi-page navigation — so the Next.js overhead wasn't justified. Vite gives me fast HMR and a clean build with less configuration.

For styling, Tailwind was chosen over vanilla CSS because the utility-first approach keeps styles co-located with markup, which made iterating on the design significantly faster under a time constraint.

---

## 2. One trade-off I made, and what I'd do with more time

**Trade-off: The dashboard previews use hardcoded SVG charts instead of a real charting library.**

The revenue charts, trend lines, and analytics visuals are hand-drawn SVG paths with static data. This keeps the bundle small (no Chart.js or Recharts dependency) and loads instantly, but the data isn't dynamic and the charts aren't interactive beyond tab switching.

**With a full week**, I would:
- Integrate Recharts or Visx for real interactive charts with tooltips and hover states
- Add actual scroll-triggered animations using Intersection Observer (currently minimal)
- Build a proper responsive testing pipeline across devices
- Add accessibility audits (ARIA labels, keyboard navigation testing, color contrast checks)
- Set up deployment with Vercel and configure a custom domain

---

## 3. Where I used AI tools, and what I verified

I used **AI coding assistants** for generating the initial boilerplate of each section component (Navbar, Hero, Features, How It Works, Product Demo, CTA, Footer) and for writing the Tailwind class combinations.

**What I personally verified and changed:**
- **Design direction**: I guided every design decision — color palette, spacing, typography hierarchy, and the shift away from the "AI-generated look" (removing excessive gradients, glassmorphism, and glowing effects) toward a cleaner developer-built aesthetic
- **Content and copy**: All marketing copy, feature descriptions, and demo data were reviewed to ensure they sound natural and don't use generic AI phrases
- **Responsiveness**: I tested layouts at 390px, 768px, 1024px, and 1440px breakpoints and adjusted spacing and stacking behavior
- **Code review**: I reviewed all component logic, ensured proper React patterns (cleanup on unmount, correct state management in the Product Demo tabs and Easter egg), and verified the production build compiles with zero errors
- **Git workflow**: I managed the repository setup, commit history, and deployment myself
