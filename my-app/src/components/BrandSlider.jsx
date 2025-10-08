import React from "react";

/**
 * BrandSlider — Slider infinito de logos “Marcas que trabajaron con nosotros”
 * - Fondo negro uniforme
 * - Logos blancos (idealmente PNG/SVG ya blancos)
 * - Scroll horizontal continuo (infinite loop)
 * - Respetando estética EDR
 *
 * Props:
 * - showTitle (boolean): si es true muestra el título; si es false, solo el carrusel
 */

const brands = [
  { img: "/brands/rapsodia.png", alt: "Rapsodia" },
  { img: "/brands/glaciar.png", alt: "Glaciar" },
  { img: "/brands/cvs.png", alt: "CVS Pharmacy" },
  { img: "/brands/icbc.png", alt: "ICBC" },
  { img: "/brands/vw.png", alt: "Volkswagen" },
  { img: "/brands/flow.png", alt: "Flow" },
  { img: "/brands/netflix.png", alt: "Netflix" },
  { img: "/brands/twitch.png", alt: "Twitch" },
  { img: "/brands/mercadolibre.png", alt: "Mercado Libre" },
];

const BrandSlider = ({ showTitle = true }) => {
  return (
    <section className="bg-[#0B0B0C] py-0 overflow-hidden pb-14">
      {/* 🔵 Título opcional */}
      {showTitle && (
        <div className="max-w-[1440px] mx-auto text-center mb-10 px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-white py-2">
            <span className="text-[#2A86E2]">Trabajaron</span> con nosotros
          </h2>
        </div>
      )}

      {/* 🔁 Carrusel infinito */}
      <div className="relative w-full overflow-hidden py-10">
        <div className="flex animate-slide-slow whitespace-nowrap">
          {[...Array(2)].map((_, setIndex) => (
            <div
              key={setIndex}
              className="flex items-center gap-16 md:gap-28 px-10"
            >
              {brands.map((brand, i) => (
                <img
                  key={`${setIndex}-${i}`}
                  src={brand.img}
                  alt={brand.alt}
                  className="h-10 md:h-12 opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                  draggable={false}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;
