import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ProductCarousel.css";

const products = [
  {
    image: "fotos-product-carrousel/camaras.png",
    title: "Cámaras",
    cat: "camara", // debe coincidir con CatalogPage
  },
  {
    image: "fotos-product-carrousel/luces.png",
    title: "Luces",
    cat: "luces",
  },
  {
    image: "fotos-product-carrousel/grip.png",
    title: "Grip",
    cat: "griperia",
  },
  {
    image: "fotos-product-carrousel/tripodes.png",
    title: "Trípodes y cabezales",
    cat: "tripodes",
  },
  {
    image: "fotos-product-carrousel/opticas.png",
    title: "Ópticas",
    cat: "opticas",
  },
];

const ProductCarousel = () => {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const speed = 0.6; // px por frame

  // Posicionamos el scroll en el set del medio para loopear sin cortes
  useEffect(() => {
    const el = trackRef.current;
    const setStart = () => {
      if (!el) return;
      el.scrollLeft = el.scrollWidth / 3; // 3 sets concatenados
    };
    const onLoad = () => setTimeout(setStart, 0);
    setStart();
    window.addEventListener("load", onLoad);
    window.addEventListener("resize", setStart);
    return () => {
      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", setStart);
    };
  }, []);

  // Autoscroll infinito con corrección de bordes
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let rafId;

    const tick = () => {
      if (!paused) {
        el.scrollLeft += speed;
        const setW = el.scrollWidth / 3;
        if (el.scrollLeft >= setW * 2) el.scrollLeft -= setW;
        if (el.scrollLeft <= 0) el.scrollLeft += setW;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [paused]);

  // Flechas
  const scrollBy = (delta) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="bg-[#0B0B0C] py-4 pb-12">
      <div className="max-w-[1440px] mx-auto text-center mb-10 px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] pb-0 tracking-tight">
          EQUIPOS
        </h2>
      </div>

      <div
        className="pc-wrapper max-w-[1640px] mx-auto px-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Pista con 3 copias para loopear */}
        <div ref={trackRef} className="pc-track no-scrollbar">
          {[...products, ...products, ...products].map((item, i) => (
            <Link
              key={i}
              to={`/catalogo?cat=${encodeURIComponent(item.cat)}`}
              className="pc-item group"
              draggable="false"
              aria-label={`Ver ${item.title} en el catálogo`}
              onMouseDown={() => setPaused(true)} // mejora UX si el user arrastra
              onMouseUp={() => setPaused(false)}
            >
              <img src={item.image} alt={item.title} className="pc-img" />
              <div className="pc-overlay" />
              <div className="pc-text">
                <h3 className="text-white text-xl sm:text-2xl font-semibold uppercase tracking-wide">
                  {item.title}
                </h3>
              </div>
              <div className="pc-hover">
                <p className="text-[#2A86E2] text-sm sm:text-base font-medium">
                  Ver más →
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Flechas */}
        <button
          aria-label="Anterior"
          className="pc-arrow pc-left"
          onClick={() => scrollBy(-360)}
        >
          <FaChevronLeft size={18} />
        </button>

        <button
          aria-label="Siguiente"
          className="pc-arrow pc-right"
          onClick={() => scrollBy(360)}
        >
          <FaChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default ProductCarousel;
