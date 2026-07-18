"use client";

import { motion } from "framer-motion";
import { EASE_OUT, viewportOnce } from "@/lib/motion";

export default function Marquee() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, ease: EASE_OUT }}
      className="-skew-y-2 bg-black overflow-hidden -mb-5 origin-center"
    >
      <div className="skew-y-2 py-7">
        <div className="flex w-max animate-marquee">
          <span className="font-display uppercase leading-none text-[10vw] tracking-[-0.03em] text-orange whitespace-nowrap pr-12">
            Custom Software &nbsp; AI-Native &nbsp; Production-Ready &nbsp; Custom Software
            &nbsp; AI-Native &nbsp; Production-Ready &nbsp;
          </span>
          <span className="font-display uppercase leading-none text-[10vw] tracking-[-0.03em] text-orange whitespace-nowrap pr-12">
            Custom Software &nbsp; AI-Native &nbsp; Production-Ready &nbsp; Custom Software
            &nbsp; AI-Native &nbsp; Production-Ready &nbsp;
          </span>
        </div>
        <div className="hidden md:flex w-max animate-marquee-rev mt-2">
          <span className="font-display uppercase leading-none text-[10vw] tracking-[-0.03em] text-white/80 whitespace-nowrap pr-12">
            Global Team &nbsp; Zero Shortcuts &nbsp; Since Day One &nbsp; Global Team &nbsp;
            Zero Shortcuts &nbsp; Since Day One &nbsp;
          </span>
          <span className="font-display uppercase leading-none text-[10vw] tracking-[-0.03em] text-white/80 whitespace-nowrap pr-12">
            Global Team &nbsp; Zero Shortcuts &nbsp; Since Day One &nbsp; Global Team &nbsp;
            Zero Shortcuts &nbsp; Since Day One &nbsp;
          </span>
        </div>
      </div>
    </motion.div>
  );
}
