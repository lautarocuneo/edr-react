import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import NavBar from "../NavBar";
import Footer from "../Footer";
import WhatsAppButton from "../WhatsAppIcon";

// ===================== DATA =====================
const PROJECTS = {
  Cine: [
    {
      id: 1,
      title: "El Eternauta",
      subtitle: "Alquiler de utilería",
      images: ["/proyectos/eternauta1.jpg", "/proyectos/eternauta2.jpg"],
    },
    {
      id: 2,
      title: "Argentina, 1985",
      subtitle: "Rental de cámaras y luces",
      images: ["/proyectos/arg1985a.jpg", "/proyectos/arg1985b.jpg"],
    },
    {
      id: 3,
      title: "El secreto de sus ojos",
      subtitle: "Rental de cámaras y luces",
      images: ["/proyectos/arg1985a.jpg", "/proyectos/arg1985b.jpg"],
    },
  ],
  Videoclips: [
    {
      id: 3,
      title: "Feel Me?? – Trueno",
      subtitle: "Producción y cámara",
      images: ["/proyectos/trueno1.jpg", "/proyectos/trueno2.jpg"],
    },
    {
      id: 4,
      title: "Quiénes Son – Lali Espósito",
      subtitle: "Asistencia de rodaje",
      images: ["/proyectos/lali1.jpg", "/proyectos/lali2.jpg"],
    },
  ],
  Series: [
    {
      id: 5,
      title: "El Reino",
      subtitle: "Grip y soporte de cámara",
      images: ["/proyectos/reino1.jpg", "/proyectos/reino2.jpg"],
    },
    {
      id: 6,
      title: "División Palermo",
      subtitle: "Alquiler de luces y video assist",
      images: ["/proyectos/palermo1.jpg", "/proyectos/palermo2.jpg"],
    },
  ],
  Junkets: [
    {
      id: 7,
      title: "Netflix – Stranger Things",
      subtitle: "Montaje y cámara",
      images: ["/proyectos/netflix1.jpg", "/proyectos/netflix2.jpg"],
    },
    {
      id: 8,
      title: "Disney+ – Loki",
      subtitle: "Producción técnica completa",
      images: ["/proyectos/loki1.jpg", "/proyectos/loki2.jpg"],
    },
  ],
};

// ===================== CARRUSEL =====================
const Carousel = ({ project }) => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % project.images.length);
  const prev = () => setIndex((i) => (i - 1 + project.images.length) % project.images.length);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 shadow-lg">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={project.images[index]}
            alt={project.title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Info */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-300 text-sm">{project.subtitle}</p>
      </div>

      {/* Controles */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full"
      >
        <ChevronLeftIcon className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full"
      >
        <ChevronRightIcon className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};

// ===================== COMPONENTE PRINCIPAL =====================
const ProyectosPage = () => {
  return (
    <div className="bg-[#0B0B0C] min-h-screen text-white">
      <WhatsAppButton />
      <NavBar />
      <div className="h-20" />

      <main className="max-w-[1400px] mx-auto px-6 pt-12 pb-20 space-y-24">
        {Object.entries(PROJECTS).map(([category, items]) => (
          <section key={category}>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-extrabold uppercase tracking-wide text-[#2A86E2] mb-2">
                {category}
              </h2>
              <div className="mx-auto w-20 h-[3px] bg-[#2A86E2]/60 rounded" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((p) => (
                <Carousel key={p.id} project={p} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="relative bg-black text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default ProyectosPage;
