import React from "react";

/**
 * HeroVideo — sección hero con video en loop tipo TuTucaRental
 * Props:
 * - src: string (link de YouTube, MP4 o video local en /public/videos/)
 * - height: opcional, altura en vh (default 85vh)
 */

const HeroVideo = ({ src, height = "85vh" }) => {
  const isYouTube = src.includes("youtube.com") || src.includes("youtu.be");

  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{ height }}
    >
      {/* 🎥 Video o YouTube embebido */}
      {isYouTube ? (
        <iframe
          src={`${src}?autoplay=1&mute=1&loop=1&playlist=${src
            .split("v=")[1]
            ?.split("&")[0]}`}
          title="Video de fondo"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></iframe>
      ) : (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}

      {/* 🩶 Overlay oscuro sutil */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* 🧩 Texto principal + subtítulo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold tracking-wide drop-shadow-lg mb-4">
          <span className="text-[#2A86E2]">EQUIPOS</span> DE RODAJE
        </h1>
        <h2 className="text-white text-base sm:text-lg md:text-2xl font-light tracking-wide drop-shadow-md">
          Rental de equipos, utilería y dirección cinematográfica
        </h2>
      </div>
    </section>
  );
};

export default HeroVideo;
