"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let dismissed = false;

    const dismiss = () => {
      if (!dismissed) {
        dismissed = true;
        setVisible(false);
      }
    };

    // Minimum display time so the logo animation looks intentional
    const minTime = new Promise((resolve) => setTimeout(resolve, 1800));

    // Wait for the background video to be ready to play
    const videoReady = new Promise((resolve) => {
      const check = () => {
        const video = document.querySelector("video");
        if (video) {
          if (video.readyState >= 3) {
            resolve();
          } else {
            video.addEventListener("canplay", resolve, { once: true });
            // Fallback: if video never fires canplay (e.g. blocked), resolve after 4s
            setTimeout(resolve, 4000);
          }
        } else {
          // Video not in DOM yet, try again shortly
          setTimeout(check, 100);
        }
      };
      setTimeout(check, 100);
    });

    Promise.all([minTime, videoReady]).then(dismiss);

    // If already dismissed (e.g. page re-mount after navigation), fire immediately
    if (typeof window !== "undefined" && window.__heroReady) {
      setVisible(false);
    }

    return () => {
      dismissed = true;
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={() => { window.__heroReady = true; window.dispatchEvent(new CustomEvent("heroReady")); }}>
      {visible && (
        <motion.div
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background: "#0d0d0d",
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        >
          {/* Subtle red glow */}
          <div
            className="absolute w-64 h-32 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(220,38,38,0.12) 0%, transparent 70%)",
              filter: "blur(24px)",
            }}
          />

          {/* Logo + tagline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative flex flex-col items-center gap-4"
          >
            {/* Logo */}
            <img
              src="/logo.png.png"
              alt="Pushable"
              className="h-10 w-auto object-contain"
            />

            {/* Tagline */}
            <div className="flex flex-col items-center gap-2 w-full">
              <p
                className="text-[10px] font-semibold tracking-[0.3em] uppercase"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Automate the Routine
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                className="h-px w-full origin-left"
                style={{ background: "rgba(220,38,38,0.7)" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
