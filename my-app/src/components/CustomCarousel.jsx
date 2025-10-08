import React, { useEffect, useState, useRef } from "react";

const AUTO_INTERVAL = 5000;

const CustomCarousel = ({ slides = [] }) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const total = slides.length;

  // ⏱️ Autoplay
  useEffect(() => {
    if (total <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [total]);

  const goTo = (i) => setIndex(i);

  if (total === 0) return null;

  return (
    <div className="relative z-0 w-full">
      {/* 🖥 Altura ajustada: relación 28:9 (panorámica cinematográfica) */}
      <div className="relative w-full aspect-[28/9] bg-black overflow-hidden">
        {/* 🎞️ Slides con transición FADE */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <img
              src={slide.image}
              alt={slide.alt || `Slide ${i + 1}`}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}

        {/* 🔵 Indicadores personalizados */}
        {total > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir al slide ${i + 1}`}
                className={`h-4 w-4 rounded-full transition-all duration-300 ${
                  index === i
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
