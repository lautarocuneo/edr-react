// src/components/Nosotros.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Nosotros = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Quiénes Somos</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Tu partner de confianza en producción audiovisual
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Más de 20 años de experiencia en la industria.
          </p>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              className="rounded-lg shadow-lg" 
              src={`${process.env.PUBLIC_URL}/foto.jpg`}
              alt="Equipo de rodaje antiguo" 
            />
          </motion.div>
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 mb-4">
              En <strong>Equipos de Rodaje</strong>, nos dedicamos a proveer equipamiento de filmación de alta gama para todo tipo de producciones audiovisuales.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              Nuestra misión es facilitar el trabajo de directores, productores y técnicos, ofreciendo no solo equipos de última generación, sino también un servicio de asesoramiento y soporte técnico inigualable.
            </p>
            <p className="text-lg text-gray-300">
              Contamos con un extenso catálogo de cámaras, lentes, luces, y todo tipo de utilería para que puedas materializar tu visión creativa sin limitaciones.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;