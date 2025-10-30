// src/components/paginas/ProyectosPage.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
import WhatsAppButton from "../WhatsAppIcon";

// ===================== DATA =====================
const PROJECTS = {
  Cine: [
    { title: "Argentina, 1985", subtitle: "Alquiler de utilería", img: "/fotos-proyectos/argentina-1985.png" },
    { title: "Belen", subtitle: "Alquiler de utilería", img: "/fotos-proyectos/belen.png" },
    { title: "27 Noches", subtitle: "Alquiler de utilería", img: "/fotos-proyectos/27-noches.png" },
    { title: "El Vecino Alemán", subtitle: "Alquiler de utilería", img: "/fotos-proyectos/vecino-aleman.png" },
  ],
  Videoclips: [
    { title: "Change – Lit Killah", subtitle: "Alquiler de equipos y Direccion de Fotografía", img: "/fotos-proyectos/lit-killah.png" },
    { title: "YaMeFui – Bizarrap x Duki x Nicki Nicole", subtitle: "Alquiler de equipos", img: "/fotos-proyectos/nicki-duki.png" },
    { title: "Party en el barrio - Duki x Paulo Londra", subtitle: "Alquiler de utilería", img: "/fotos-proyectos/duki-atc.png" },
  ],
  Series: [
    { title: "El Eternauta", subtitle: "Alquiler de utilería", img: "/fotos-proyectos/eternauta.png" },
    { title: "Santa Evita", subtitle: "Alquiler de utilería", img: "/fotos-proyectos/evita.png" },
    { title: "Ayrton Senna", subtitle: "Alquiler de utilería", img: "/fotos-proyectos/ayrton-senna.png" },
    { title: "Maradona", subtitle: "Alquiler de utilería", img: "/fotos-proyectos/maradona.png" },
    { title: "Coppola", subtitle: "Alquiler de utilería", img: "/fotos-proyectos/copola.png" },
    { title: "Menem", subtitle: "Alquiler de utilería", img: "/fotos-proyectos/menem.png" },
  ],
  Junkets: [
    { title: "Homo Argentum", subtitle: "Alquiler de equipos y Direccion de Fotografía", img: "/fotos-proyectos/homo-argentum.png" },
    { title: "Fast and Furious X", subtitle: "Alquiler de equipos y Direccion de Fotografía", img: "/fotos-proyectos/fast-and-furious.png" },
    { title: "El Fin del Amor", subtitle: "Alquiler de equipos y Direccion de Fotografía", img: "/fotos-proyectos/lali.png" },
    { title: "Mazel Tov", subtitle: "Alquiler de equipos y Direccion de Fotografía", img: "/fotos-proyectos/mazel-tov.png" },
    { title: "Belen", subtitle: "Alquiler de equipos y Direccion de Fotografía", img: "/fotos-proyectos/belen-junket.png" },
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
  const location = useLocation();

  // Scroll a la categoría indicada (via state.scrollTo o hash) con offset por navbar fijo
  useEffect(() => {
    const target =
      location.state?.scrollTo ||
      (location.hash ? location.hash.replace("#", "") : null);

    if (!target) return;

    const scrollToAnchor = () => {
      const el = document.getElementById(target.toLowerCase());
      if (!el) return;
      const yOffset = -80; // navbar fijo (~h-20 = 80px)
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    };

    // Asegura layout listo (RAF) + fallback por imágenes
    requestAnimationFrame(scrollToAnchor);
    const t = setTimeout(scrollToAnchor, 300);
    return () => clearTimeout(t);
  }, [location]);

  return (
    <div className="bg-[#0B0B0C] min-h-screen text-white">
      <WhatsAppButton />
      <NavBar />
      <div className="h-20" />

      <main className="max-w-[1400px] mx-auto px-6 pt-12 pb-20 space-y-24">
        {Object.entries(PROJECTS).map(([category, projects], idx) => (
          <section key={category} id={category.toLowerCase()}>
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
