"use client";

export default function LandscapeBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Pexels aerial rocky landscape video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center center" }}
      >
        <source
          src="https://videos.pexels.com/video-files/33639741/14295865_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Lighter overlay — brighter, cleaner hero feel */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.38)" }}
      />

      {/* Top vignette */}
      <div
        className="absolute inset-x-0 top-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.32) 0%, transparent 100%)" }}
      />

      {/* Bottom vignette */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.32) 0%, transparent 100%)" }}
      />
    </div>
  );
}
