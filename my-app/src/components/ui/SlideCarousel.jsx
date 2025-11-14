import React, { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Carrusel horizontal con flechas, bullets y swipe en mobile.
 * NO intercepta la rueda vertical (solo lateral con flechas/bullets).
 */
const SlideCarousel = ({ slides = [], accent = "#b45309" }) => {
  const [idx, setIdx] = useState(0);
  const startX = useRef(null);
  const deltaX = useRef(0);

  // ---- Navegación básica ----
  const go = useCallback(
    (n) => setIdx((p) => Math.max(0, Math.min(slides.length - 1, n))),
    [slides.length]
  );

  const next = useCallback(() => go(idx + 1), [go, idx]);
  const prev = useCallback(() => go(idx - 1), [go, idx]);

  // ---- Teclas flecha izquierda/derecha ----
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // ---- Swipe táctil ----
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
  };

  const onTouchMove = (e) => {
    if (startX.current == null) return;
    deltaX.current = e.touches[0].clientX - startX.current;
  };

  const onTouchEnd = () => {
    if (Math.abs(deltaX.current) > 60) {
      if (deltaX.current < 0) next();
      else prev();
    }
    startX.current = null;
    deltaX.current = 0;
  };

  return (
    <div className="relative w-full h-full select-none">
      {/* --- Contenedor de slides --- */}
      <div
        className="h-full w-full overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-[cubic-bezier(.22,.65,.3,1)]"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={i} className="w-full h-full flex-shrink-0">
              {/* --- Slide tipo título grande --- */}
              {s.type === "title" ? (
                <div className="h-full w-full flex items-center justify-center text-center px-6">
                  <h2
                    className="font-black tracking-[0.15em] text-white"
                    style={{
                      textShadow: "0 8px 30px rgba(0,0,0,.5)",
                      fontSize: "clamp(28px, 5.5vw, 64px)",
                    }}
                  >
                    {s.title}
                  </h2>
                </div>
              ) : (
                // --- Slide con texto y botón ---
                <div className="h-full w-full flex items-center">
                  <div
                    className="
                      max-w-[1100px]
                      px-6 sm:px-10
                      sm:ml-20
                      text-center sm:text-left
                      flex flex-col
                      items-center sm:items-start
                    "
                  >
                    {/* Título */}
                    <h3
                      className="font-extrabold leading-tight text-white"
                      style={{ fontSize: "clamp(22px, 4vw, 48px)" }}
                    >
                      {s.title}
                    </h3>

                    {/* Texto */}
                    {s.text && (
                      <p
                        className="
                          mt-3
                          text-white/85
                          text-center sm:text-left
                        "
                        style={{ fontSize: "clamp(11px, 1.4vw, 15px)" }}
                      >
                        {s.text}
                      </p>
                    )}

                    {/* Botón */}
                    {s.cta && (
                      <Link
                        to={s.cta.href}
                        className="
                          mt-6
                          inline-flex items-center
                          rounded-full px-5 py-3
                          font-semibold uppercase tracking-wide
                          justify-center sm:justify-start
                        "
                        style={{
                          background: `linear-gradient(90deg, ${accent}, #7c3a07)`,
                          boxShadow: `0 10px 30px -12px ${accent}aa`,
                          fontSize: "clamp(12px, 1.8vw, 14px)",
                        }}
                      >
                        {s.cta.label}
                        <ChevronRight className="ml-2" size={16} />
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* --- Flechas --- */}
      {slides.length > 1 && (
        <>
          <button
            aria-label="Anterior"
            onClick={prev}
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
            style={{ color: "white" }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            aria-label="Siguiente"
            onClick={next}
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
            style={{ color: "white" }}
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* --- Bullets --- */}
      {slides.length > 1 && (
        <div
          className="
            absolute
            bottom-[-50px] sm:bottom-4
            left-1/2 -translate-x-1/2
            flex gap-2
          "
        >
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir al slide ${i + 1}`}
              onClick={() => setIdx(i)}
              className="w-2.5 h-2.5 rounded-full transition-all"
              style={{
                background: i === idx ? accent : "rgba(255,255,255,0.45)",
                transform: i === idx ? "scale(1.15)" : "scale(1)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SlideCarousel;
