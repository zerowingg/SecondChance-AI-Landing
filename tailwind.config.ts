import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8C766",
          deep: "#96762A",
          soft: "#F1DFA6",
        },
        ink: {
          DEFAULT: "#0A0A0A",
          soft: "#151512",
          surface: "#1C1B17",
        },
        cream: {
          DEFAULT: "#FBF8F2",
          deep: "#F3ECDD",
          line: "#E6DCC4",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      boxShadow: {
        gold: "0 8px 30px -8px rgba(212, 175, 55, 0.45)",
        "gold-lg": "0 20px 60px -12px rgba(212, 175, 55, 0.35)",
        premium: "0 30px 80px -20px rgba(10, 10, 10, 0.25)",
        glass: "0 8px 32px 0 rgba(10, 10, 10, 0.10)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E8C766 0%, #D4AF37 45%, #96762A 100%)",
        "gold-gradient-soft": "linear-gradient(135deg, #F1DFA6 0%, #D4AF37 100%)",
        "ink-gradient": "linear-gradient(180deg, #0A0A0A 0%, #1C1B17 100%)",
        "cream-gradient": "linear-gradient(180deg, #FBF8F2 0%, #F3ECDD 100%)",
        "radial-fade": "radial-gradient(60% 60% at 50% 40%, rgba(212,175,55,0.14) 0%, rgba(212,175,55,0) 70%)",
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      maxWidth: {
        content: "1240px",
      },
    },
  },
  plugins: [],
};
export default config;
