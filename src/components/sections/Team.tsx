"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeUpBig, fromLeft, fromRight, viewportOnce } from "@/lib/motion";

export default function Team() {
  return (
    <div id="team" className="bg-black text-white px-5 sm:px-8 md:px-12 py-24">
      <motion.h2
        variants={fadeUpBig}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="font-display uppercase leading-[0.92] tracking-[-0.03em] text-[clamp(2rem,5vw,3.4rem)] m-0 mb-4 max-w-[900px]"
      >
        Hundreds of vetted engineers. Ready when you are.
      </motion.h2>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        transition={{ delay: 0.1 }}
        className="text-[17px] leading-[1.6] max-w-[560px] mb-12 opacity-75"
      >
        Bring us your idea and a quotation. Once we land on the exact stack, a
        developer is already waiting to start — then you choose how you want
        to work.
      </motion.p>
      <div className="relative flex flex-wrap gap-0.5 bg-orange border-2 border-orange">
        <motion.div
          variants={fromLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          whileHover={{ backgroundColor: "#0a0a0a" }}
          className="flex-1 basis-[300px] bg-black px-6 sm:px-8 py-10"
        >
          <div className="font-mono-brand text-xs font-bold tracking-[-0.02em] uppercase mb-3.5 text-orange">
            Direct
          </div>
          <h3 className="font-display uppercase text-[22px] tracking-[-0.02em] m-0 mb-3">
            Work directly with your developer
          </h3>
          <p className="text-[15px] leading-[1.6] m-0 opacity-75">
            Once the stack is set, we hand you straight to the engineer. No
            middleman, no relay — you talk to the person writing the code.
          </p>
        </motion.div>
        <motion.div
          variants={fromRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          whileHover={{ backgroundColor: "#0a0a0a" }}
          className="flex-1 basis-[300px] bg-black px-6 sm:px-8 py-10"
        >
          <div className="font-mono-brand text-xs font-bold tracking-[-0.02em] uppercase mb-3.5 text-orange">
            Managed
          </div>
          <h3 className="font-display uppercase text-[22px] tracking-[-0.02em] m-0 mb-3">
            Or let Devora orchestrate
          </h3>
          <p className="text-[15px] leading-[1.6] m-0 opacity-75">
            Prefer one point of contact? We sit in between, run the developer,
            and stay accountable for scope, quality, and delivery.
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          viewport={viewportOnce}
          transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.3 }}
          whileHover={{ scale: 1.15, rotate: 12 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-orange border-2 border-black flex items-center justify-center font-display text-[13px] text-black z-[2]"
        >
          OR
        </motion.div>
      </div>
    </div>
  );
}
