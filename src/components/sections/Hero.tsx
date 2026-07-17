"use client";

import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

export default function Hero() {
  return (
    <div
      data-swipe-section
      className="min-h-screen box-border flex flex-col justify-center px-5 sm:px-8 md:px-12 pt-[140px] snap-start snap-always"
    >
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className="font-mono-brand text-sm tracking-[0.1em] uppercase text-center mb-5"
      >
        Custom Software Studio
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 80, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.1 }}
        className="font-display uppercase text-center leading-[0.85] tracking-[-0.04em] text-[clamp(3.2rem,18vw,14rem)] m-0 mb-6 whitespace-nowrap"
      >
        Devora
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.4 }}
        className="text-center text-[clamp(15px,1.8vw,19px)] leading-[1.6] max-w-[560px] mx-auto mb-10"
      >
        Devora designs and ships bespoke web, cloud, and enterprise applications
        for companies scaling across borders.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="hidden md:flex border-t-2 border-black items-center justify-between gap-5 py-7 px-1 flex-wrap"
      >
        <div className="font-mono-brand text-[13px] tracking-[-0.02em] uppercase flex-1 min-w-[180px]">
          Based in
          <br />
          London, UK
        </div>
        <div className="shrink-0">
          <svg width="120" height="120" viewBox="0 0 144 144">
            <defs>
              <path
                id="scrollCircle"
                d="M 72,72 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
            </defs>
            <g className="animate-spin-slow" style={{ transformOrigin: "72px 72px" }}>
              <text
                fontFamily="'Space Mono',monospace"
                fontSize="9"
                fontWeight={700}
                letterSpacing="1"
                fill="#000000"
              >
                <textPath href="#scrollCircle" startOffset="0%">
                  SCROLL DOWN &#8226; SCROLL DOWN &#8226; SCROLL DOWN &#8226; SCROLL DOWN &#8226;
                </textPath>
              </text>
            </g>
            <path
              d="M72 54 L72 90 M60 78 L72 90 L84 78"
              stroke="#000000"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="font-mono-brand text-[13px] tracking-[-0.02em] uppercase text-right flex-1 min-w-[180px]">
          Custom
          <br />
          Software
          <br />
          Studio
        </div>
      </motion.div>

      <div className="md:hidden border-t-2 border-black pt-5 px-1 text-center">
        <div className="font-mono-brand text-xs tracking-[-0.02em] uppercase">
          Based in London, UK
        </div>
      </div>
    </div>
  );
}
