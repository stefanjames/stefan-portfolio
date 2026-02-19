# stefanjames.io

Personal portfolio site for **Stefan James** — Security Consultant & Cloud Security Engineer.

**Live:** [stefanjames.io](https://stefanjames.io)

## Built with Claude Code

This entire site was designed, developed, and deployed in a single session using [Claude Code](https://claude.com/claude-code) (Anthropic's CLI for Claude). From scaffolding to production deployment — every component, style, animation, and configuration was generated through conversational prompts.

### What Claude Code handled:
- Project scaffolding and dependency installation
- Full component architecture (9 components)
- Dark glassmorphic design system matching an existing reference site
- Content extraction from the previous portfolio (Vite SPA)
- Typewriter animation with syntax-highlighted YAML
- Icon audit and enhancement across all sections
- SVG favicon generation
- Git repo creation, commit, and push
- Vercel deployment and DNS configuration walkthrough

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Fonts** | Inter, Outfit, Space Grotesk, JetBrains Mono (via `next/font/google`) |
| **Hosting** | Vercel |
| **DNS** | Netlify DNS |

## Design System

- **Theme:** Dark mode with glassmorphism (`color-mix(in oklab, ...)` for translucent surfaces)
- **Colors:** Cyan primary (`hsl(190 100% 50%)`), Purple secondary (`hsl(265 89% 66%)`)
- **Effects:** Animated gradient text, glow buttons, blurred decorative orbs, noise texture overlay
- **Typography:** 4-font system — Inter (body), Outfit (headings), Space Grotesk (tech/labels), JetBrains Mono (code)

## Sections

- **Hero** — Greeting, subtitle, CTAs, typewriter YAML profile card
- **About** — Photo, bio, capability cards
- **Projects** — GitHub project showcase (AWS security, DevSecOps, Web3)
- **Skills** — 6 categorized tool groups + 17 certifications
- **Experience** — 8-role career timeline (2007–present)
- **Contact** — Email CTA, social links, mission statement

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

## Deployment

Deployed to [Vercel](https://vercel.com) with automatic deployments on push to `main`. Custom domain configured via A record and CNAME pointing from Netlify DNS to Vercel.

---

Built with [Claude Code](https://claude.com/claude-code)
