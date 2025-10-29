import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaVideo,
  FaLightbulb,
  FaCogs,
  FaQuestionCircle,
} from "react-icons/fa";

/**
 * FAQ — sección de preguntas frecuentes
 * --------------------------------------
 * - Totalmente responsive (Tailwind)
 * - Animaciones suaves (Framer Motion)
 * - Íconos distintos por pregunta
 * - Paleta de colores coherente con Equipos de Rodaje (#2A86E2, fondo oscuro)
 */

const FAQ_ITEMS = [
  {
    id: 1,
    icon: <FaVideo className="text-[#2A86E2] text-xl sm:text-2xl" />,
    question: "¿Qué tipo de equipos se pueden alquilar?",
    answer:
      "Podés alquilar cámaras, ópticas, iluminación, generadores, gripería y props de la industria cinematográfica. Trabajamos con equipos de cine, publicidad y streaming.",
  },
  {
    id: 2,
    icon: <FaLightbulb className="text-[#2A86E2] text-xl sm:text-2xl" />,
    question: "¿Los equipos se retiran o se entregan en locación?",
    answer:
      "Los equipos deben retirarse al principio de la jornada en nuestro galpón ubicado en Chorroarin 486, CABA.",
  },
  {
    id: 3,
    icon: <FaCogs className="text-[#2A86E2] text-xl sm:text-2xl" />,
    question: "¿Se requiere seguro o garantía?",
    answer:
      "Sí, solicitamos que todos los equipos sean asegurados. En caso de no poder asegurarlos pediremos una garantía.",
  },
  {
    id: 4,
    icon: <FaQuestionCircle className="text-[#2A86E2] text-xl sm:text-2xl" />,
    question: "¿Cómo puedo solicitar un presupuesto personalizado?",
    answer:
      "Podés hacerlo desde el formulario de contacto o por WhatsApp. Respondemos dentro del mismo día con disponibilidad, precios, combos y opciones de entrega.",
  },
];

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="bg-[#0B0B0C] text-gray-200 py-16 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-[900px] mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-white tracking-wide">
          Preguntas <span className="text-[#2A86E2]">Frecuentes</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Todo lo que necesitás saber antes de alquilar con nosotros.
        </p>
      </div>

      <div className="space-y-4 max-w-[900px] mx-auto">
        {FAQ_ITEMS.map((item) => (
          <div
            key={item.id}
            className="bg-[#111]/90 border border-[#2A86E2]/20 rounded-2xl overflow-hidden shadow-sm transition-all duration-200 hover:border-[#2A86E2]/40"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex justify-between items-center text-left px-5 sm:px-8 py-4 sm:py-6 focus:outline-none"
            >
              <div className="flex items-center gap-4">
                {item.icon}
                <span className="text-base sm:text-lg font-medium text-white">
                  {item.question}
                </span>
              </div>
              <span
                className={`text-[#2A86E2] text-xl sm:text-2xl transform transition-transform duration-300 ${
                  openId === item.id ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openId === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 sm:px-10 pb-5 sm:pb-6 text-gray-400 text-sm sm:text-base leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
