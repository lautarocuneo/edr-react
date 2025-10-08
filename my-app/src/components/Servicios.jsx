// src/components/Servicios.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiVideo, FiCamera, FiZap, FiBox } from 'react-icons/fi';

const servicios = [
  {
    icon: <FiVideo className="h-8 w-8 text-blue-400" />,
    title: 'Cámaras de Cine',
    description: 'Equipos de última generación de marcas como ARRI, RED y Sony.'
  },
  {
    icon: <FiCamera className="h-8 w-8 text-blue-400" />,
    title: 'Lentes y Ópticas',
    description: 'Amplia variedad de lentes de cine, anamórficos y prime.'
  },
  {
    icon: <FiZap className="h-8 w-8 text-blue-400" />,
    title: 'Iluminación Profesional',
    description: 'Luces LED, tungsteno y HMI para cualquier tipo de rodaje.'
  },
  {
    icon: <FiBox className="h-8 w-8 text-blue-400" />,
    title: 'Utilería y Props',
    description: 'Desde objetos cotidianos hasta antigüedades únicas.'
  }
];

const Servicios = () => {
  return (
    <div className="bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Nuestros Servicios</h2>
          <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Todo lo que necesitás para tu producción
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map((servicio, index) => (
            <motion.div
              key={servicio.title}
              className="pt-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flow-root bg-gray-700 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      {servicio.icon}
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-white tracking-tight">{servicio.title}</h3>
                  <p className="mt-5 text-base text-gray-400">
                    {servicio.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicios;