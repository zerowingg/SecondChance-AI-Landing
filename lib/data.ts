export const siteConfig = {
  name: "SecondChance AI",
  tagline: "Because Everyone Deserves A Second Chance.",
  description:
    "SecondChance AI is an AI-powered relationship recovery and meaningful connection platform helping users heal emotionally, rebuild confidence and create genuine relationships through intelligent AI guidance.",
  url: "https://secondchance.ai",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Gallery", href: "#gallery" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Founder", href: "#founder" },
  { label: "FAQ", href: "#faq" },
];

export type Feature = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  points: string[];
  screenshot: string;
};

export const features: Feature[] = [
  {
    id: "ai-coach",
    eyebrow: "Emotional Guidance",
    title: "AI Coach",
    description:
      "A patient, always-available guide that helps you process what happened, name what you're feeling, and take the next healthy step forward — one conversation at a time.",
    points: [
      "Reflects your emotions back with clarity, never judgment",
      "Suggests grounded exercises for confidence and self-worth",
      "Learns your patterns to offer guidance that actually fits you",
    ],
    screenshot: "/screenshots/AI Coach.jpg",
  },
  {
    id: "smart-matching",
    eyebrow: "Meaningful Connection",
    title: "Smart Matching",
    description:
      "We look past surface-level swiping. SecondChance AI studies values, communication style and emotional readiness to surface people worth actually meeting.",
    points: [
      "Matches weighted by shared values, not just shared interests",
      "Readiness signals prevent rushing into the wrong connection",
      "Fewer, better matches instead of an endless feed",
    ],
    screenshot: "/screenshots/Matches.jpg",
  },
  {
    id: "ai-compatibility",
    eyebrow: "Deeper Understanding",
    title: "AI Compatibility",
    description:
      "Every match comes with a compatibility breakdown — not a vague percentage, but real context on where you align and where you'll need to communicate with care.",
    points: [
      "Clear compatibility scoring across values, pace and intent",
      "Conversation starters shaped by what you both care about",
      "Honest flags when a pairing may need a slower start",
    ],
    screenshot: "/screenshots/Discover.jpg",
  },
  {
    id: "chat",
    eyebrow: "Genuine Conversation",
    title: "Chat",
    description:
      "A calm, distraction-free space to talk. Gentle AI-assisted prompts help conversations move past small talk without ever putting words in your mouth.",
    points: [
      "Icebreakers tuned to what you both value",
      "Tone check-ins so messages land the way you intend",
      "No pressure timers, no gamified streaks",
    ],
    screenshot: "/screenshots/Chat.jpg",
  },
  {
    id: "privacy-security",
    eyebrow: "Built On Trust",
    title: "Privacy & Security",
    description:
      "You're sharing your healing journey with us — we treat that with the seriousness it deserves. Your data stays encrypted, private, and entirely under your control.",
    points: [
      "End-to-end encryption on every conversation",
      "You choose exactly what's visible, and to whom",
      "Delete your data permanently, any time, in one tap",
    ],
    screenshot: "/screenshots/Profile.jpg",
  },
];

export type Screenshot = {
  file: string;
  label: string;
  caption: string;
};

export const screenshots: Screenshot[] = [
  { file: "Welcome.jpg", label: "Welcome", caption: "A calm first impression" },
  { file: "Signup.jpg", label: "Sign Up", caption: "Secure, simple onboarding" },
  { file: "AI Onboarding.jpg", label: "AI Onboarding", caption: "The AI learns what you need" },
  { file: "Discover.jpg", label: "Discover", caption: "Browse with intention" },
  { file: "Matches.jpg", label: "Matches", caption: "Fewer, better connections" },
  { file: "Chat.jpg", label: "Chat", caption: "Conversation, without pressure" },
  { file: "AI Coach.jpg", label: "AI Coach", caption: "Guidance whenever you need it" },
  { file: "Profile.jpg", label: "Profile", caption: "Your journey, your control" },
  { file: "Contact Support.jpg", label: "Contact Support", caption: "Real help, always close" },
];

export type TechItem = {
  name: string;
  role: string;
};

export const techStack: TechItem[] = [
  { name: "Next.js", role: "React framework & routing" },
  { name: "TypeScript", role: "Type-safe application code" },
  { name: "Tailwind CSS", role: "Design system & styling" },
  { name: "Framer Motion", role: "Motion & micro-interactions" },
  { name: "AMD AI", role: "On-device AI acceleration" },
];

export type RoadmapItem = {
  phase: string;
  title: string;
  detail: string;
  status: "shipped" | "in-progress" | "planned";
};

export const roadmap: RoadmapItem[] = [
  {
    phase: "Phase 01",
    title: "Foundation",
    detail: "Core onboarding, AI Coach conversations, and secure profile infrastructure.",
    status: "shipped",
  },
  {
    phase: "Phase 02",
    title: "Smart Matching Engine",
    detail: "Compatibility scoring, values-based discovery, and readiness signals.",
    status: "in-progress",
  },
  {
    phase: "Phase 03",
    title: "Guided Conversations",
    detail: "In-chat AI prompts, tone check-ins, and shared reflection tools.",
    status: "in-progress",
  },
  {
    phase: "Phase 04",
    title: "Community & Growth Circles",
    detail: "Small, moderated groups for shared healing journeys and accountability.",
    status: "planned",
  },
  {
    phase: "Phase 05",
    title: "Public Launch",
    detail: "Opening SecondChance AI beyond the hackathon, for everyone ready to begin again.",
    status: "planned",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "What exactly is SecondChance AI?",
    answer:
      "It's an AI-powered platform built for emotional recovery and meaningful connection. Instead of jumping straight into dating, we help you heal first — then thoughtfully connect you with people ready for something genuine.",
  },
  {
    question: "Is this a dating app?",
    answer:
      "It's more than that. Dating apps optimize for volume; SecondChance AI optimizes for readiness and fit. The AI Coach supports your emotional growth, and Smart Matching only introduces you to people once real compatibility is there.",
  },
  {
    question: "How does the AI Coach actually work?",
    answer:
      "You talk, it listens — and responds with grounded, judgment-free guidance shaped around your situation. It's built to support reflection and confidence-building, not to replace professional therapy.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. Every conversation is encrypted end-to-end, you control exactly what's shared on your profile, and you can permanently delete your data at any time from your settings.",
  },
  {
    question: "Who built SecondChance AI?",
    answer:
      "SecondChance AI was built by Ankit Anurag as a student developer project for the AMD AI Hackathon, driven by a belief that everyone deserves the chance to heal and connect again.",
  },
  {
    question: "When can I try it?",
    answer:
      "SecondChance AI is currently in active development following its hackathon debut. Join the waitlist below and you'll be among the first to know when early access opens.",
  },
];
