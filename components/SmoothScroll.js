"use client";

import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    let lenis;
    let rafId;

    async function initLenis() {
      const Lenis = (await import("lenis")).default;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false,
      });
      lenisRef.current = lenis;

      function raf(time) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    }

    initLenis();

    return () => {
      cancelAnimationFrame(rafId);
      if (lenisRef.current) lenisRef.current.destroy();
    };
  }, []);

  return <>{children}</>;
}
