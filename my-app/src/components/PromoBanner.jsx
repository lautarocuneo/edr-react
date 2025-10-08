import React from "react";

const PromoBanner = () => {
  return (
    <section className="bg-[#0B0B0C] text-white py-14">
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        {/* 🏷️ Título principal */}
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6 leading-tight">
          Todos los equipos a{" "}
          <span className="text-[#2A86E2]">50% OFF</span> todo el mes de
          noviembre
        </h2>

        {/* 🖼️ Imagen tipo banner (proporción 21:4 = muy panorámica y baja) */}
        <div className="w-full overflow-hidden rounded-xl shadow-lg border border-[#1c1c1c]">
          <img
            src="/images/mockup-banner-dark.jpg" // imagen temporal
            alt="Banner promoción equipos"
            className="w-full h-auto object-cover aspect-[21/4] transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
