"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useScroll } from "framer-motion";

export default function CursorFollower() {
  const [visible, setVisible] = useState(false);
  const [moving, setMoving] = useState(false);

  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  /* Fast dot — snaps to cursor */
  const dotX = useSpring(rawX, { stiffness: 900, damping: 38, mass: 0.3 });
  const dotY = useSpring(rawY, { stiffness: 900, damping: 38, mass: 0.3 });

  /* Lazy ring — lags behind */
  const ringX = useSpring(rawX, { stiffness: 180, damping: 22, mass: 0.6 });
  const ringY = useSpring(rawY, { stiffness: 180, damping: 22, mass: 0.6 });

  /* Page scroll progress bar */
  const { scrollYProgress } = useScroll();
  const barScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    let timeout;
    const move = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setVisible(true);
      setMoving(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setMoving(false), 120);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      clearTimeout(timeout);
    };
  }, [rawX, rawY]);

  return (
    <>
      {/* ── Scroll progress bar at very top ── */}
      <motion.div
        style={{ scaleX: barScale }}
        className="fixed top-0 left-0 right-0 h-0.5 bg-red-600 z-9999 origin-left pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Lagging outer ring ── */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          opacity: visible ? (moving ? 0.55 : 0.18) : 0,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 z-9997 pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          animate={{ scale: moving ? 1.3 : 1 }}
          transition={{ duration: 0.2 }}
          className="w-8 h-8 rounded-full border border-red-500"
        />
      </motion.div>

      {/* ── Fast red dot ── */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          opacity: visible ? 1 : 0,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 z-9998 pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          animate={{
            scale: moving ? 1.5 : 1,
            boxShadow: moving
              ? "0 0 12px 4px rgba(220,38,38,0.7)"
              : "0 0 6px 2px rgba(220,38,38,0.4)",
          }}
          transition={{ duration: 0.15 }}
          className="w-3 h-3 rounded-full bg-red-600"
        />
      </motion.div>
    </>
  );
}
