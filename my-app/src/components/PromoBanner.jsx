import React from "react";
import { Link } from "react-router-dom";

const PromoBanner = () => {
  return (
    <section className="bg-[#0B0B0C] text-white pt-14">
      <div className="max-w-[1440px] mx-auto px-6 py-0 text-center">
        <div className="w-full relative overflow-hidden rounded-xl shadow-lg border border-[#1c1c1c]">
          {/* 🖼 Imagen del banner (mobile y desktop) */}
          <picture>
            {/* Mobile */}
            <source
              media="(max-width: 767px)"
              srcSet={`${process.env.PUBLIC_URL}/hot-sale/hot-sale-mobile.png`}
            />
            {/* Desktop */}
            <img
              src={`${process.env.PUBLIC_URL}/hot-sale/hot-sale.png`}
              alt="Banner Hot Sale"
              className="w-full object-cover aspect-[2100/900] md:aspect-[21/4]"
              draggable={false}
            />
          </picture>

          {/* 🔘 Botón elegante -> apunta a 50% OFF */}
          <div className="absolute left-1/2 bottom-[34%] sm:bottom-[28%] -translate-x-1/2">
            <Link
              to="/catalogo?discount=50"
              aria-label="Ver 50% OFF"
              className="
                relative group select-none uppercase tracking-widest text-white/95 
                text-[10px] sm:text-sm md:text-base 
                px-4 sm:px-7 md:px-8 py-1.5 sm:py-2.5 md:py-3 
                rounded-full bg-transparent cursor-pointer 
                transition-[filter] duration-300 hover:brightness-110 focus:outline-none
                inline-block
              "
            >
              <span className="relative z-10">Ver más</span>

              {/* ⚪ Borde animado */}
              <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-0 bg-white/90 
                               rounded-full transition-all duration-300 ease-out 
                               group-hover:w-full"></span>
              <span className="pointer-events-none absolute top-0 right-0 w-[2px] h-0 bg-white/90 
                               transition-all duration-300 ease-out delay-100 
                               group-hover:h-full"></span>
              <span className="pointer-events-none absolute right-0 bottom-0 h-[2px] w-0 bg-white/90 
                               rounded-full transition-all duration-300 ease-out delay-200 
                               group-hover:w-full"></span>
              <span className="pointer-events-none absolute bottom-0 left-0 w-[2px] h-0 bg-white/90 
                               transition-all duration-300 ease-out delay-300 
                               group-hover:h-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
