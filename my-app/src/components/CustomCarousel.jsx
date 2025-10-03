import React, { useEffect, useState, useRef } from "react";

/**
 * Carrusel 16:9 con transición FADE (sin Flowbite).
 * - Flechas e indicadores blancos.
 * - Auto-advance cada 5s (configurable).
 * - Desktop: botón CTA arriba-izquierda.
 * - Mobile: botón CTA abajo-derecha.
 */
const AUTO_INTERVAL = 5000;

const CustomCarousel = ({ slides = [] }) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const total = slides.length;

  // Autoplay
  useEffect(() => {
    if (total <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [total]);

  // Controles
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);
  const goTo = (i) => setIndex(i);

  if (total === 0) return null;

  return (
    <div className="relative z-0 w-full">
      {/* 16:9 */}
      <div className="relative w-full aspect-video bg-black overflow-hidden">
        {/* Slides apilados con FADE */}
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
              className="w-full h-full object-contain"
              draggable={false}
            />

            {/* CTA por slide */}
            {slide.link && (
              <div
                className="
                  absolute 
                  bottom-6 right-6           /* 📱 mobile: abajo a la derecha */
                  md:top-16 md:left-40       /* 💻 desktop: arriba a la izquierda */
                  md:bottom-auto md:right-auto
                "
              >
                <a
                  href={slide.link}
                  className="
                    px-3 py-1 text-[10px]    /* 📱 compacto */
                    md:px-6 md:py-3 md:text-base /* 💻 más grande */
                    border border-white text-white font-medium rounded-full 
                    bg-transparent 
                    hover:bg-white hover:text-black
                    transition-all duration-300
                    shadow-md
                  "
                >
                  Ver {slide.alt || "Producto"}
                </a>
              </div>
            )}
          </div>
        ))}

        {/* Flechas (blancas) */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 hover:bg-black/50 focus:outline-none"
              aria-label="Anterior"
            >
              <span className="text-white text-xl leading-none select-none">‹</span>
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/30 hover:bg-black/50 focus:outline-none"
              aria-label="Siguiente"
            >
              <span className="text-white text-xl leading-none select-none">›</span>
            </button>
          </>
        )}

        {/* Indicadores (blancos) */}
        {total > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir al slide ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === i ? "bg-white" : "bg-white/40 hover:bg-white/70"
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
