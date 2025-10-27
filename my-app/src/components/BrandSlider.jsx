import React from "react";

/**
 * BrandSlider — Slider infinito de logos “Marcas que trabajaron con nosotros”
 * - Mantiene clases originales
 * - Scroll continuo sin cortes
 * - Logos más grandes y con proporción uniforme
 */

const brands = Array.from({ length: 10 }, (_, i) => ({
  img: `/brands-logos/${i + 1}.svg`,
  alt: `Brand logo ${i + 1}`,
}));

const BrandSlider = ({ showTitle = true }) => {
  return (
    <section className="bg-[#0B0B0C] overflow-hidden pb-0">
      {/* 🔵 Título opcional */}
      {showTitle && (
        <div className="max-w-[1440px] mx-auto text-center mb-10 px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-white py-2">
            <span className="text-[#2A86E2]">Trabajaron</span> con nosotros
          </h2>
        </div>
      )}

      {/* 🔁 Carrusel infinito */}
      <div className="relative w-full overflow-hidden py-4 group">
        <div className="flex animate-slide-slow whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="px-14 flex-shrink-0">
              <img
                src={brand.img}
                alt={brand.alt}
                className="h-20 sm:h-24 md:h-28 max-h-[120px] w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;
