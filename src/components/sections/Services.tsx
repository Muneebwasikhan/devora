"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const SERVICES = [
  { n: "01", title: "Custom Web & Cloud Apps", tags: ["Web", "Cloud", "Product"] },
  {
    n: "02",
    title: "Enterprise Software Engineering",
    tags: ["Legacy", "Modernization", "Internal Tools"],
  },
  { n: "03", title: "API & Systems Integration", tags: ["CRM", "Payments", "Data"] },
  { n: "04", title: "DevOps & Cloud Architecture", tags: ["CI/CD", "Infra", "Scale"] },
];

export default function Services() {
  const [hovered, setHovered] = useState(-1);

  return (
    <motion.div
      id="services"
      className="bg-black text-white px-5 sm:px-8 md:px-12 py-24 min-h-screen box-border flex flex-col justify-center"
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {SERVICES.map((item, i) => {
        const isHovered = hovered === i;
        return (
          <motion.div
            key={item.n}
            variants={fadeUp}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(-1)}
            className="border-t border-white/20 py-9 px-1 flex items-center gap-8 flex-wrap transition-colors duration-200"
            style={{ background: isHovered ? "rgba(255,255,255,0.05)" : "transparent" }}
          >
            <span className="font-mono-brand text-[15px] font-bold text-orange shrink-0 w-9">
              {item.n}
            </span>
            <motion.div
              className="flex-1 min-w-[240px]"
              animate={{ x: isHovered ? 16 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <h3 className="font-display uppercase leading-[0.95] tracking-[-0.03em] text-[7vw] md:text-[3.2vw] m-0 mb-3.5">
                {item.title}
              </h3>
              <div className="hidden md:flex gap-2 flex-wrap">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-brand text-[11px] uppercase border border-white/35 rounded-full px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.span
              className="hidden md:inline font-display text-[32px] text-orange shrink-0"
              animate={{
                opacity: isHovered ? 1 : 0,
                rotate: isHovered ? 45 : 0,
                scale: isHovered ? 1.15 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              →
            </motion.span>
          </motion.div>
        );
      })}
      <div className="border-t border-white/20" />
    </motion.div>
  );
}
