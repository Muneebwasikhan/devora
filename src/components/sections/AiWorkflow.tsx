"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeUpBig, staggerContainer, viewportOnce } from "@/lib/motion";

const CARDS = [
  {
    title: "Weeks, Not Quarters",
    body: "AI compresses the build — a working site in a week, a full platform in a month — without skipping the parts that make software last.",
  },
  {
    title: "Model-Agnostic",
    body: "New models ship constantly. We track what's actually production-ready and pick the right one for the job, not whichever is trending.",
  },
  {
    title: "Built For Production",
    body: "Anyone can prompt an app into existence. We know the workarounds — the security gaps, the edge cases, the scaling traps — and close them before launch, not after.",
  },
];

const TAGS = [
  "Logo & brand",
  "UI/UX design",
  "Backend & APIs",
  "DevOps & deployment",
  "Repo & ops management",
];

export default function AiWorkflow() {
  return (
    <div
      id="ai-workflow"
      data-swipe-section
      className="px-5 sm:px-8 md:px-12 py-24 min-h-screen box-border flex flex-col justify-center snap-start snap-always"
    >
      <motion.h2
        variants={fadeUpBig}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="font-display uppercase leading-[0.92] tracking-[-0.03em] text-[clamp(2rem,5vw,3.4rem)] m-0 mb-5 max-w-[900px]"
      >
        A week for a site. A month for a platform.
      </motion.h2>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        transition={{ delay: 0.1 }}
        className="text-[17px] leading-[1.6] max-w-[560px] mb-12"
      >
        AI is built into how we work — not as a shortcut, but as leverage. Every
        model, every generation, every line still passes through an
        engineer&apos;s eye before it ships.
      </motion.p>
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-t-2 border-l-2 border-black"
      >
        {CARDS.map((c) => (
          <motion.div
            key={c.title}
            variants={fadeUp}
            whileHover={{ y: -6, backgroundColor: "rgba(0,0,0,0.04)" }}
            className="p-7 border-r-2 border-b-2 border-black"
          >
            <div className="font-mono-brand text-xs font-bold tracking-[-0.02em] uppercase mb-3">
              {c.title}
            </div>
            <p className="text-[14.5px] leading-[1.6] m-0">{c.body}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
        className="mt-8 bg-black text-white rounded-2xl px-6 sm:px-8 py-[26px] flex items-center gap-5 flex-wrap justify-between"
      >
        <p className="font-display uppercase text-base tracking-[-0.02em] m-0 max-w-[240px] leading-[1.2]">
          One team, start to finish.
        </p>
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex gap-2 flex-wrap flex-1"
        >
          {TAGS.map((tag) => (
            <motion.span
              key={tag}
              variants={{ hidden: { opacity: 0, scale: 0.6 }, show: { opacity: 1, scale: 1 } }}
              whileHover={{ scale: 1.08, backgroundColor: "#FF4D00", color: "#000" }}
              className="font-mono-brand text-[11.5px] text-orange border border-orange rounded-full px-3.5 py-[7px]"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
