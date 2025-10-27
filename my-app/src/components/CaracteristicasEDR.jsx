import React from "react";
import {
  FaLightbulb,
  FaCogs,
  FaCamera,
  FaCameraRetro,
  FaTools,
  FaUserTie,
} from "react-icons/fa";

const CaracteristicasEDR = () => {
  return (
    <section className="bg-[#0B0B0C] text-gray-200 py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        {/* 🔹 Título principal */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-12 sm:mb-16 md:mb-20 tracking-tight text-left">
          SERVICIOS
        </h2>

        {/* 🔹 Grid de secciones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 sm:gap-y-20 gap-x-10 sm:gap-x-16 md:gap-x-28 text-left">
          {/* 🔵 LUCES */}
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-6">
              <FaLightbulb className="text-[#2A86E2] text-xl sm:text-3xl shrink-0" />
              <h3 className="text-lg sm:text-2xl font-bold uppercase tracking-wide text-white">
                Luces
              </h3>
            </div>
            <ul className="space-y-1 text-gray-400 font-light text-[12px] sm:text-[14px] md:text-[15px] leading-snug">
              <li>Set completo Aputure, Nanlite y Arri.</li>
              <li>Fresneles LED, tubos RGB y softs regulables.</li>
              <li>Parrillas con dimmers DMX y extensiones incluidas.</li>
              <li>Accesorios: banderas, grids, gelatinas y difusores.</li>
            </ul>
          </div>

          {/* 🔵 GRIP */}
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-6">
              <FaCogs className="text-[#2A86E2] text-xl sm:text-3xl shrink-0" />
              <h3 className="text-lg sm:text-2xl font-bold uppercase tracking-wide text-white">
                Grip
              </h3>
            </div>
            <ul className="space-y-1 text-gray-400 font-light text-[12px] sm:text-[14px] md:text-[15px] leading-snug">
              <li>Trípodes pesados, brazos mágicos y super clamps.</li>
              <li>Rails, sliders y sistemas de dolly profesionales.</li>
              <li>Stands C y combo con bases de acero y ruedas.</li>
              <li>Todo el soporte necesario para cámaras y luces.</li>
            </ul>
          </div>

          {/* 🔵 CÁMARA */}
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-6">
              <FaCamera className="text-[#2A86E2] text-xl sm:text-3xl shrink-0" />
              <h3 className="text-lg sm:text-2xl font-bold uppercase tracking-wide text-white">
                Cámara
              </h3>
            </div>
            <ul className="space-y-1 text-gray-400 font-light text-[12px] sm:text-[14px] md:text-[15px] leading-snug">
              <li>RED Komodo-X, Blackmagic y Sony FX6 disponibles.</li>
              <li>Grabación en RAW, ProRes y 4K HDR.</li>
              <li>Monitores externos SmallHD y Atomos Ninja.</li>
              <li>Set completo de rigs, cages y follow focus.</li>
            </ul>
          </div>

          {/* 🔵 ÓPTICAS */}
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-6 mt-8 md:mt-0">
              <FaCameraRetro className="text-[#2A86E2] text-xl sm:text-3xl shrink-0" />
              <h3 className="text-lg sm:text-2xl font-bold uppercase tracking-wide text-white">
                Ópticas
              </h3>
            </div>
            <ul className="space-y-1 text-gray-400 font-light text-[12px] sm:text-[14px] md:text-[15px] leading-snug">
              <li>Set completo Zeiss CP.3 y Sigma Cine.</li>
              <li>Monturas PL, EF y RF disponibles.</li>
              <li>Filtros ND, polarizadores y difusión Tiffen.</li>
              <li>Servicio de calibración y limpieza óptica.</li>
            </ul>
          </div>

          {/* 🔵 UTILERÍA */}
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-6">
              <FaTools className="text-[#2A86E2] text-xl sm:text-3xl shrink-0" />
              <h3 className="text-lg sm:text-2xl font-bold uppercase tracking-wide text-white">
                Utilería
              </h3>
            </div>
            <ul className="space-y-1 text-gray-400 font-light text-[12px] sm:text-[14px] md:text-[15px] leading-snug">
              <li>Props realistas para escenografía y ambientación.</li>
              <li>Soportes, mesas, estructuras y elementos decorativos.</li>
              <li>Transporte y armado incluidos dentro de CABA.</li>
              <li>Gestión personalizada de pedidos especiales.</li>
            </ul>
          </div>

          {/* 🔵 DIRECCIÓN DE FOTOGRAFÍA */}
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-6">
              <FaUserTie className="text-[#2A86E2] text-xl sm:text-3xl shrink-0" />
              <h3 className="text-lg sm:text-2xl font-bold uppercase tracking-wide text-white">
                Dirección de Fotografía
              </h3>
            </div>
            <ul className="space-y-1 text-gray-400 font-light text-[12px] sm:text-[14px] md:text-[15px] leading-snug">
              <li>Servicio de DOP y gaffer disponibles por jornada.</li>
              <li>Diseño de esquema lumínico adaptado a cada set.</li>
              <li>Supervisión técnica completa de rodaje.</li>
              <li>Presupuesto integral por paquete de producción.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaracteristicasEDR;
