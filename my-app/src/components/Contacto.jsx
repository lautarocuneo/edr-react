import React from 'react';
import Map from "./Map";
import { ContactUs } from "./ContactUs";

const Contacto = () => {
  return (
    // Fondo global unificado
    <div className="bg-[var(--color-bg-dark)] text-white py-16">
      {/* Encabezado */}
      <div className="flex flex-col items-center text-center mb-10">
        <p className="text-[#2A86E2] text-sm md:text-base font-semibold tracking-widest">
          CONTACTO
        </p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold mt-4">
          Hacenos tu pedido y lo presupuestamos
        </h1>
      </div>

      {/* Contenedor principal */}
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {/* Mapa */}
        <div className="flex flex-col items-center p-6 rounded-xl bg-[#111113] shadow-[0_0_20px_rgba(0,0,0,0.4)]">
          <div className="w-full rounded-lg overflow-hidden border border-[#1BB4B4]/10">
            <Map />
          </div>
          <p className="text-sm md:text-lg mt-4 text-gray-300">
            Chorroarín 486 – Agronomía – CABA
          </p>
        </div>

        {/* Formulario */}
        <div className="flex items-center justify-center p-6 bg-[#111113] rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.4)]">
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default Contacto;
