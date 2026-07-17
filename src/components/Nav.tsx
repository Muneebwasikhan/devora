"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { EASE_OUT } from "@/lib/motion";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Clients", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
      className="fixed top-5 left-0 right-0 z-50 flex items-center justify-between gap-4 px-5 sm:px-8 md:px-12"
    >
      <Link href="/" aria-label="Devora home" className="flex items-center gap-[9px] cursor-pointer">
        <motion.span
          className="inline-flex"
          whileHover={{ rotate: 180, scale: 1.15 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
        >
          <Logo />
        </motion.span>
      </Link>

      <div className="hidden md:flex items-center gap-0.5 bg-black rounded-full p-2 flex-wrap justify-center">
        {links.map((l, i) => (
          <motion.div
            key={l.label}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.05, ease: EASE_OUT }}
          >
            <Link
              href={l.href}
              className="font-mono-brand text-xs tracking-[-0.02em] uppercase text-white no-underline px-4 py-2 rounded-full transition-colors duration-150 hover:bg-white hover:text-black inline-block"
            >
              {l.label}
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.a
        href="mailto:muneebwasikhandevora@gmail.com"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="font-mono-brand text-xs font-bold tracking-[-0.02em] uppercase text-white bg-black px-[22px] py-3 rounded-full no-underline whitespace-nowrap"
      >
        Email us
      </motion.a>
    </motion.div>
  );
}
