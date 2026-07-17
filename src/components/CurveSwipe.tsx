"use client";

import { useEffect, useRef } from "react";
import { animate } from "framer-motion";
import { usePathname } from "next/navigation";

const buildD = (y: number) =>
  `M 0 ${y} C 25 ${y - 10} 75 ${y - 10} 100 ${y} L 100 ${y + 130} C 75 ${y + 140} 25 ${y + 140} 0 ${y + 130} Z`;

export default function CurveSwipe() {
  const pathRef = useRef<SVGPathElement>(null);
  const lastElRef = useRef<Element | null>(null);
  const animatingRef = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    path.setAttribute("d", buildD(115));
    lastElRef.current = null;

    const sections = document.querySelectorAll("[data-swipe-section]");
    if (!sections.length) return;

    const playSwipe = () => {
      if (animatingRef.current) return;
      animatingRef.current = true;
      animate(115, -20, {
        duration: 0.5,
        ease: [0.5, 0, 1, 1],
        onUpdate: (v) => path.setAttribute("d", buildD(v)),
        onComplete: () => {
          animate(-20, -145, {
            duration: 0.55,
            ease: [0, 0, 0.2, 1],
            onUpdate: (v) => path.setAttribute("d", buildD(v)),
            onComplete: () => {
              animatingRef.current = false;
            },
          });
        },
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target !== lastElRef.current) {
            const isFirst = lastElRef.current === null;
            lastElRef.current = entry.target;
            if (!isFirst) playSwipe();
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <svg
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        pointerEvents: "none",
      }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path ref={pathRef} fill="#000000" />
    </svg>
  );
}
