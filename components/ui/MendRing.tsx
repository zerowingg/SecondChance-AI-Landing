"use client";

import { motion } from "framer-motion";

type MendRingProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
  animate?: boolean;
  gapDeg?: number;
};

/**
 * The signature visual for SecondChance AI: a gold ring with a gap that
 * closes into wholeness. Represents the brand's core idea — healing into
 * completeness — and recurs across the hero, section dividers and loaders.
 */
export default function MendRing({
  size = 120,
  strokeWidth = 2,
  className = "",
  animate = true,
  gapDeg = 46,
}: MendRingProps) {
  const r = size / 2 - strokeWidth * 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * r;
  const gapLength = (gapDeg / 360) * circumference;

  return (
    <div className={`mend-ring ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <linearGradient id="mendGoldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8C766" />
            <stop offset="55%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#96762A" />
          </linearGradient>
        </defs>
        <motion.circle
          cx={cx}
          cy={cy}
          r={r}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          transform={`rotate(-90 ${cx} ${cy})`}
          initial={animate ? { strokeDasharray: `0 ${circumference}` } : undefined}
          animate={
            animate
              ? {
                  strokeDasharray: `${circumference - gapLength} ${gapLength}`,
                }
              : { strokeDasharray: `${circumference - gapLength} ${gapLength}` }
          }
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        />
      </svg>
    </div>
  );
}
