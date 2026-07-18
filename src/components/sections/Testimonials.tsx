"use client";

import { motion } from "framer-motion";
import { fadeUpBig, scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";

const TESTIMONIALS = [
  {
    quote:
      "Devora rebuilt our platform from the ground up in under three months, without a single day of downtime for our customers.",
    name: "Priya Nandan",
    role: "Head of Product, Marlow Freight",
  },
  {
    quote:
      "They write software like they're going to be the ones maintaining it in five years. That discipline shows in every release.",
    name: "Tomas Reyes",
    role: "CTO, Solari Health",
  },
  {
    quote:
      "Different time zone, same standards. Devora felt like an in-house team from week one.",
    name: "Amara Chen",
    role: "Founder, Vantage Retail Group",
  },
];

export default function Testimonials() {
  return (
    <div
      id="testimonials"
      className="bg-black text-white px-5 sm:px-8 md:px-12 py-24 min-h-screen box-border flex flex-col justify-center"
    >
      <motion.h2
        variants={fadeUpBig}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="font-display uppercase leading-[0.92] tracking-[-0.03em] text-[clamp(2rem,5vw,3.4rem)] m-0 mb-12 max-w-[900px]"
      >
        Trusted by teams building across borders.
      </motion.h2>
      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {TESTIMONIALS.map((t) => (
          <motion.div
            key={t.name}
            variants={scaleIn}
            whileHover={{ y: -10, scale: 1.02, borderColor: "#FF4D00" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white/[0.04] border-2 border-white/20 p-8"
          >
            <div className="font-display text-[40px] text-orange leading-none mb-1.5">
              &#8220;
            </div>
            <p className="text-[15.5px] leading-[1.65] m-0 mb-5">{t.quote}</p>
            <div className="font-mono-brand font-bold text-[13px] uppercase">{t.name}</div>
            <div className="font-mono-brand text-xs opacity-70">{t.role}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
