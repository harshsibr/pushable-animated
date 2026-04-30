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
          src="https://www.pexels.com/download/video/9721786/"
          type="video/mp4"
        />
      </video>

      {/* Light overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.18)" }}
      />

      {/* Top vignette only */}
      <div
        className="absolute inset-x-0 top-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, transparent 100%)" }}
      />
    </div>
  );
}
