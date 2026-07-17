"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const CTA_EMAIL = "muneebwasikhandevora@gmail.com";

export default function ContactFooter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project inquiry from ${name || "website"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? " (" + email + ")" : ""}`);
    window.location.href = `mailto:${CTA_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div
        id="contact"
        data-swipe-section
        className="px-5 sm:px-8 md:px-12 pt-16 md:pt-[140px] pb-24 text-center min-h-screen box-border flex flex-col justify-center snap-start snap-always"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.7, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={viewportOnce}
          transition={{ type: "spring", stiffness: 140, damping: 14 }}
          className="font-display uppercase leading-[0.85] tracking-[-0.04em] text-[14vw] m-0 mb-10"
        >
          Let&apos;s talk
        </motion.h2>
        <motion.a
          href={`mailto:${CTA_EMAIL}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="inline-block font-mono-brand text-[15px] font-bold uppercase tracking-[-0.02em] text-white bg-black px-11 py-[22px] rounded-full no-underline"
        >
          Email us
        </motion.a>

        <motion.form
          onSubmit={submit}
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="bg-black border-2 border-black rounded-2xl p-8 text-left max-w-[560px] mx-auto mt-14 flex flex-col gap-4"
        >
          <div className="flex gap-4 flex-wrap">
            <motion.input
              variants={fadeUp}
              type="text"
              placeholder="YOUR NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
              whileFocus={{ scale: 1.02, borderColor: "#FF4D00" }}
              className="flex-1 min-w-[200px] bg-transparent border-2 border-white/25 rounded-lg px-3.5 py-3 text-white text-[13px] font-mono-brand uppercase outline-none placeholder:text-white/40"
            />
            <motion.input
              variants={fadeUp}
              type="email"
              placeholder="YOUR EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              whileFocus={{ scale: 1.02, borderColor: "#FF4D00" }}
              className="flex-1 min-w-[200px] bg-transparent border-2 border-white/25 rounded-lg px-3.5 py-3 text-white text-[13px] font-mono-brand uppercase outline-none placeholder:text-white/40"
            />
          </div>
          <motion.textarea
            variants={fadeUp}
            placeholder="TELL US ABOUT YOUR PROJECT"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            whileFocus={{ scale: 1.02, borderColor: "#FF4D00" }}
            className="bg-transparent border-2 border-white/25 rounded-lg px-3.5 py-3 text-white text-[13px] font-mono-brand uppercase outline-none resize-y placeholder:text-white/40"
          />
          <motion.button
            variants={fadeUp}
            type="submit"
            whileHover={{ scale: 1.08, x: 4 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 350, damping: 16 }}
            className="self-start font-mono-brand text-[13px] font-bold uppercase text-black bg-orange border-none px-[30px] py-[15px] rounded-full cursor-pointer"
          >
            Send message
          </motion.button>
        </motion.form>
        <p className="mt-7 mb-0 font-mono-brand text-[13px] uppercase">
          Or email directly:{" "}
          <a href={`mailto:${CTA_EMAIL}`} className="text-black font-bold">
            {CTA_EMAIL}
          </a>
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6 }}
        className="border-t-2 border-black px-5 sm:px-8 md:px-12 py-7 flex justify-between items-center gap-4 flex-wrap"
      >
        <div className="font-mono-brand text-xs uppercase">
          © {new Date().getFullYear()} Devora Software Ltd. All rights reserved.
        </div>
        <div className="font-mono-brand text-xs uppercase text-right">
          128 City Road, London, EC1V 2NX, UK
        </div>
      </motion.div>
    </>
  );
}
