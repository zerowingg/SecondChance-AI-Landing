# SecondChance AI

**Because Everyone Deserves A Second Chance.**

An AI-powered relationship recovery and meaningful connection platform —
helping people heal emotionally, rebuild confidence, and create genuine
relationships through intelligent AI guidance. Built for the AMD AI
Hackathon.

## Tech Stack

- **Next.js 14** (App Router) — react framework & routing
- **TypeScript** — type-safe application code
- **Tailwind CSS** — design system & styling
- **Framer Motion** — motion & micro-interactions
- **lucide-react** — icon system

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
secondchance-ai/
├── app/
│   ├── layout.tsx        # Root layout, fonts, SEO metadata
│   ├── page.tsx           # Landing page composition
│   ├── globals.css        # Design tokens & global styles
│   └── sitemap.ts         # Dynamic sitemap
├── components/
│   ├── ui/
│   │   ├── MendRing.tsx        # Signature gold "mending ring" motif
│   │   └── SectionHeading.tsx  # Reusable section heading
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Features.tsx        # AI Coach, Smart Matching, AI Compatibility, Chat, Privacy & Security
│   ├── Gallery.tsx          # Screenshot showcase
│   ├── TechStack.tsx
│   ├── Roadmap.tsx
│   ├── Founder.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts             # Centralized site content
└── public/
    └── screenshots/         # App screenshots (replace with real captures)
```

## Design System

| Token        | Value                          |
| ------------ | ------------------------------- |
| Gold         | `#D4AF37`                       |
| Gold Light   | `#E8C766`                       |
| Gold Deep    | `#96762A`                       |
| Ink (Black)  | `#0A0A0A`                       |
| Cream        | `#FBF8F2`                       |
| Display Font | Playfair Display                |
| Body Font    | Inter                            |

The **mending ring** — a broken gold circle that animates closed — is the
page's signature visual motif, representing the brand's core idea: healing
into wholeness. It appears in the hero, navbar, founder card, and contact
section.

## Replacing Screenshots

Placeholder screenshots live in `public/screenshots/`. Replace each file
(keeping the same filename) with your real app captures:

- `Welcome.jpg`
- `Signup.jpg`
- `AI Onboarding.jpg`
- `Discover.jpg`
- `Matches.jpg`
- `Chat.jpg`
- `AI Coach.jpg`
- `Profile.jpg`
- `Contact Support.jpg`

## Build

```bash
npm run build
npm run start
```
