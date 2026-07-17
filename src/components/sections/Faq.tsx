"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUpBig, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const FAQ_ITEMS = [
  {
    q: "How do you structure engagements?",
    a: "Most projects start with a short discovery phase to scope the build, followed by fixed-scope sprints or a dedicated team model for longer partnerships — whichever fits how you like to work.",
  },
  {
    q: "Do you work with clients outside your time zone?",
    a: "Yes — most of our clients are international. We overlap working hours where it matters and run async for everything else, with clear weekly checkpoints.",
  },
  {
    q: "Who owns the code and IP?",
    a: "You do. Every line we write is delivered under your ownership, with full source access from day one.",
  },
  {
    q: "What happens after launch?",
    a: "We offer ongoing support and maintenance retainers, and design systems so your own team can pick up the codebase without friction if you choose to bring development in-house.",
  },
  {
    q: "What technology stacks do you use?",
    a: "We choose the stack that fits the problem rather than a fixed toolkit — commonly TypeScript, Node, React, and modern cloud platforms, but we adapt to your existing systems.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div
      id="faq"
      data-swipe-section
      className="bg-black text-white px-5 sm:px-8 md:px-12 py-24 min-h-screen box-border flex flex-col justify-center snap-start snap-always"
    >
      <motion.h2
        variants={fadeUpBig}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="font-display uppercase leading-[0.92] tracking-[-0.03em] text-[clamp(2rem,5vw,3.4rem)] m-0 mx-auto mb-12 max-w-[760px]"
      >
        Questions, answered.
      </motion.h2>
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="max-w-[760px] mx-auto"
      >
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={item.q}
              variants={fadeUp}
              className="border-t border-white/20 transition-colors duration-200"
              style={{ background: isOpen ? "rgba(255,255,255,0.05)" : "transparent" }}
            >
              <div
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex justify-between items-center gap-4 py-6 px-1.5 cursor-pointer"
              >
                <span className="font-mono-brand text-[15px] uppercase tracking-[-0.02em]">
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="font-display text-xl text-orange shrink-0"
                >
                  +
                </motion.span>
              </div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="m-0 px-1.5 pb-6 text-[14.5px] leading-[1.65] opacity-75 max-w-[640px]">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
