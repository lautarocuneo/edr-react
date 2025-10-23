import React from "react";
import { motion } from "framer-motion";
import NavBar from "../NavBar";
import Footer from "../Footer";
import WhatsAppButton from "../WhatsAppIcon";

// ===================== DATA =====================
const PROJECTS = {
  Cine: [
    { title: "El Eternauta", subtitle: "Alquiler de utilería", img: "https://images.unsplash.com/photo-1517602302552-471fe67acf66" },
    { title: "Argentina, 1985", subtitle: "Rental de cámaras y luces", img: "https://images.unsplash.com/photo-1602526432604-b24fef89c246" },
    { title: "El secreto de sus ojos", subtitle: "Soporte de cámara", img: "https://images.unsplash.com/photo-1582719478181-b5f49c8c3c95" },
    { title: "La Odisea de los Giles", subtitle: "Producción técnica", img: "https://images.unsplash.com/photo-1615397349754-452dc83a66ef" },
  ],
  Videoclips: [
    { title: "Feel Me?? – Trueno", subtitle: "Producción y cámara", img: "https://images.unsplash.com/photo-1558365918-43d8291d3cc5" },
    { title: "Quiénes Son – Lali Espósito", subtitle: "Asistencia de rodaje", img: "https://images.unsplash.com/photo-1619454563733-ef6a78c6b8f2" },
    { title: "Flow – Duki", subtitle: "Dirección de arte", img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769" },
  ],
  Series: [
    { title: "El Reino", subtitle: "Grip y soporte de cámara", img: "https://images.unsplash.com/photo-1579547621706-1a9c79d5c1c6" },
    { title: "División Palermo", subtitle: "Alquiler de luces y video assist", img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
    { title: "Monzón", subtitle: "Montaje y utilería", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c" },
  ],
  Junkets: [
    { title: "Netflix – Stranger Things", subtitle: "Montaje y cámara", img: "https://images.unsplash.com/photo-1602526432604-b24fef89c246" },
    { title: "Disney+ – Loki", subtitle: "Producción técnica completa", img: "https://images.unsplash.com/photo-1603791452906-bb7b1a4cebb3" },
    { title: "HBO – Euphoria", subtitle: "Dirección de fotografía", img: "https://images.unsplash.com/photo-1532635241-17e820acc59b" },
  ],
};

// ===================== TIRA INFINITA =====================
const InfiniteStrip = ({ projects, reverse = false, speed = 40 }) => {
  const imgs = [...projects, ...projects];

  return (
    <div className="overflow-hidden relative w-full">
      <motion.div
        className="flex gap-3"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      >
        {imgs.map((p, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 rounded-xl overflow-hidden aspect-[16/9] w-[320px] sm:w-[420px] lg:w-[480px]"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3">
              <h3 className="text-base sm:text-lg font-semibold">{p.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm">{p.subtitle}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// ===================== PÁGINA =====================
const ProyectosPage = () => {
  return (
    <div className="bg-[#0B0B0C] min-h-screen text-white">
      <WhatsAppButton />
      <NavBar />
      <div className="h-20" />

      <main className="max-w-[1400px] mx-auto px-6 pt-12 pb-20 space-y-24">
        {Object.entries(PROJECTS).map(([category, projects], idx) => (
          <section key={category}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold uppercase tracking-wide text-[#2A86E2] mb-2">
                {category}
              </h2>
              <div className="mx-auto w-20 h-[3px] bg-[#2A86E2]/60 rounded" />
            </div>
            <InfiniteStrip
              projects={projects}
              reverse={idx % 2 === 1}
              speed={idx % 2 === 0 ? 45 : 35}
            />
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
