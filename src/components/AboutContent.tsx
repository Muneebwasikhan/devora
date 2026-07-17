"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeUpBig, popIn, staggerContainer, viewportOnce, EASE_OUT } from "@/lib/motion";

const THINK_CARDS = [
  {
    title: "Engineering-first",
    body: "We treat code quality as a product feature, not an afterthought. Clean architecture now is faster delivery later.",
  },
  {
    title: "Radically transparent",
    body: "Weekly demos, open repos, and direct access to the engineers on your project — no account-manager layer in between.",
  },
  {
    title: "Built for scale",
    body: "We design for the business you're becoming, not just the one you are today.",
  },
  {
    title: "Global by default",
    body: "Distributed team, async-first workflows, and coverage across time zones so your project never really stops.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Discover",
    body: "We map your business logic, constraints, and goals before writing a line of code.",
  },
  {
    n: "02",
    title: "Design",
    body: "Architecture and interface decisions get made together with your team, not handed down.",
  },
  {
    n: "03",
    title: "Build",
    body: "Short, visible sprints with working software you can test every step of the way.",
  },
  {
    n: "04",
    title: "Ship & Support",
    body: "We launch, then stay — monitoring, iterating, and supporting the system long-term.",
  },
];

export default function AboutContent() {
  return (
    <div data-screen-label="About">
      <div
        data-swipe-section
        className="px-5 sm:px-8 md:px-12 pt-[140px] pb-24 min-h-screen box-border flex flex-col justify-center snap-start snap-always"
      >
        <motion.h1
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
          className="font-display uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(2.6rem,9vw,7rem)] m-0 mb-7 max-w-[900px]"
        >
          Software built to last
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.35 }}
          className="text-lg leading-[1.7] max-w-[640px] m-0"
        >
          Devora is a custom software studio for businesses that have outgrown
          off-the-shelf tools. We partner with founders, enterprise teams, and
          everyone in between to design, build, and support the applications
          their business runs on — wherever in the world they operate.
        </motion.p>
      </div>

      <div
        data-swipe-section
        className="px-5 sm:px-8 md:px-12 py-24 min-h-screen box-border flex flex-col justify-center snap-start snap-always"
      >
        <motion.h2
          variants={fadeUpBig}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="font-display uppercase text-[clamp(1.6rem,3.4vw,2.4rem)] tracking-[-0.02em] m-0 mb-8"
        >
          How we think about the work
        </motion.h2>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 bg-black border-2 border-black"
        >
          {THINK_CARDS.map((c) => (
            <motion.div
              key={c.title}
              variants={popIn}
              whileHover={{ scale: 1.03, rotate: -1 }}
              className="bg-orange p-7"
            >
              <h3 className="font-display uppercase text-base m-0 mb-2.5">{c.title}</h3>
              <p className="text-[14.5px] leading-[1.6] m-0">{c.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div
        data-swipe-section
        className="bg-black text-white px-5 sm:px-8 md:px-12 py-24 min-h-screen box-border flex flex-col justify-center snap-start snap-always"
      >
        <motion.h2
          variants={fadeUpBig}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="font-display uppercase text-[clamp(1.6rem,3.4vw,2.4rem)] tracking-[-0.02em] m-0 mb-10"
        >
          How we work
        </motion.h2>
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7"
        >
          {STEPS.map((s) => (
            <motion.div key={s.n} variants={fadeUp}>
              <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce}
                transition={{ type: "spring", stiffness: 260, damping: 14 }}
                className="font-display text-[52px] text-orange mb-2.5 leading-none"
              >
                {s.n}
              </motion.div>
              <h3 className="font-mono-brand text-[15px] uppercase m-0 mb-2">{s.title}</h3>
              <p className="text-sm leading-[1.6] opacity-75 m-0">{s.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
