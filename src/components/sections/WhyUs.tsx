"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeUpBig, staggerContainer, viewportOnce } from "@/lib/motion";

const CARDS = [
  {
    title: "Take it and go",
    body: "Once your product is complete, it's yours outright — code, contract, and all. Walk away with everything you need to run it yourself.",
  },
  {
    title: "Or keep us on",
    body: "Ask us to stay on maintenance — we keep an eye on everything, monthly, for a small fee, with the same developers who built it ready to keep going.",
  },
];

export default function WhyUs() {
  return (
    <div
      id="why-us"
      data-swipe-section
      className="px-5 sm:px-8 md:px-12 py-24 min-h-screen box-border flex flex-col justify-center snap-start snap-always"
    >
      <motion.h2
        variants={fadeUpBig}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="font-display uppercase leading-[0.92] tracking-[-0.03em] text-[clamp(2rem,5vw,3.4rem)] m-0 mb-4 max-w-[900px]"
      >
        We don&apos;t outsource excellence. We grow it with you.
      </motion.h2>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        transition={{ delay: 0.1 }}
        className="text-[17px] leading-[1.6] max-w-[560px] mb-10"
      >
        Our developers are vetted professionals, not a rotating bench. We want
        your product live and earning — as a startup finding its feet, or a
        mature product that needs to keep moving.
      </motion.p>
      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-2 border-t-2 border-l-2 border-black"
      >
        {CARDS.map((c) => (
          <motion.div
            key={c.title}
            variants={fadeUp}
            whileHover={{ y: -6, backgroundColor: "rgba(0,0,0,0.04)" }}
            className="p-7 border-r-2 border-b-2 border-black"
          >
            <h3 className="font-display uppercase text-[19px] tracking-[-0.02em] m-0 mb-2.5">
              {c.title}
            </h3>
            <p className="text-[15px] leading-[1.6] m-0">{c.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
