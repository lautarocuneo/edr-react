import React, { useEffect, useState, useRef } from "react";

const AUTO_INTERVAL = 5000;

const CustomCarousel = ({ slides = [] }) => {
  // MOBILE: SIEMPRE 5–8 desde /public/fotos-carusel/
  const mobileSlides = [
    { image: "/fotos-carusel/5.png", alt: "Slide 5" },
    { image: "/fotos-carusel/6.png", alt: "Slide 6" },
    { image: "/fotos-carusel/7.png", alt: "Slide 7" },
    { image: "/fotos-carusel/8.png", alt: "Slide 8" },
  ];

  // DESKTOP: usa props si vienen; si no, también 5–8
  const desktopSlides = slides.length ? slides : mobileSlides;

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const totalMobile = mobileSlides.length;
  const totalDesktop = desktopSlides.length;

  // Autoplay
  useEffect(() => {
    if (totalMobile <= 1 && totalDesktop <= 1) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIndex((i) => i + 1), AUTO_INTERVAL);
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [totalMobile, totalDesktop]);

  const idxMobile = index % totalMobile;
  const idxDesktop = index % totalDesktop;

  return (
    <div className="relative z-0 w-full">
      {/* ===== MOBILE (default) — relación 28/18, imágenes 5–8 ===== */}
      <div className="relative w-full aspect-[28/18] bg-black overflow-hidden md:hidden">
        {mobileSlides.map((slide, i) => (
          <div
            key={`m-${i}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === idxMobile ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== idxMobile}
          >
            <img
              src={slide.image}
              alt={slide.alt || `Slide ${i + 1}`}
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>
        ))}

        {totalMobile > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {mobileSlides.map((_, i) => (
              <button
                key={`m-dot-${i}`}
                onClick={() => setIndex(i)}
                aria-label={`Ir al slide ${i + 1}`}
                className={`h-4 w-4 rounded-full transition-all duration-300 ${
                  idxMobile === i
                    ? "bg-[#2A86E2] scale-110 shadow-[0_0_8px_#2A86E2]"
                    : "bg-[#2A86E2]/40 hover:bg-[#2A86E2]/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ===== DESKTOP (≥768px) — relación 28/9 ===== */}
      <div className="relative hidden md:block w-full aspect-[28/9] bg-black overflow-hidden">
        {desktopSlides.map((slide, i) => (
          <div
            key={`d-${i}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === idxDesktop ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== idxDesktop}
          >
            <img
              src={slide.image}
              alt={slide.alt || `Slide ${i + 1}`}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}

        {totalDesktop > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {desktopSlides.map((_, i) => (
              <button
                key={`d-dot-${i}`}
                onClick={() => setIndex(i)}
                aria-label={`Ir al slide ${i + 1}`}
                className={`h-4 w-4 rounded-full transition-all duration-300 ${
                  idxDesktop === i
                    ? "bg-[#2A86E2] scale-110 shadow-[0_0_8px_#2A86E2]"
                    : "bg-[#2A86E2]/40 hover:bg-[#2A86E2]/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomCarousel;
