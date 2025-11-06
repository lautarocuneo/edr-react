// src/components/paginas/Utileria.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Tv,
  Film,
  Microscope,
  FlaskConical,
  ChevronRight,
  BadgeInfo,
  Boxes,
  LayoutGrid,
} from "lucide-react";

// ✅ Tus componentes
import ProductCarousel from "../ProductCarousel";
import CustomCarousel from "../CustomCarousel";

/* ============================================================
   🔧 EDITABLE: CONFIGURACIÓN RÁPIDA (cambiá todo acá)
   ------------------------------------------------------------
   - TELEFONO/WhatsApp
   - Colores de acento
   - Rutas de VIDEO/POSTER y de todas las IMÁGENES
   - Slides del CustomCarousel
   - Items destacados (grid)
   - Galería/Moodboard
============================================================ */

const WHATSAPP_NUMBER = "5491162983716"; // 🔧 EDITABLE: tu número con país y sin '+'

// Paleta de acento
const ACCENT = {
  main: "#b45309", // cálido cobrizo
  dark: "#92400e",
  light: "#fbbf24",
};

// Media centralizada — poné tus archivos en /public/utileria/...
const MEDIA = {
  // 🔧 EDITABLE: reemplazá por tu video e imagen de póster
  HERO_VIDEO: `${process.env.PUBLIC_URL}/utileria/hero.mp4`,
  HERO_POSTER: `${process.env.PUBLIC_URL}/utileria/hero-poster.jpg`,

  // 🔧 EDITABLE: imágenes de la sección "Destacados"
  DESTACADOS: {
    foto: `${process.env.PUBLIC_URL}/utileria/antiguos-foto.jpg`,
    video: `${process.env.PUBLIC_URL}/utileria/antiguos-video.jpg`,
    crt: `${process.env.PUBLIC_URL}/utileria/antiguos-crt.jpg`,
    moviola: `${process.env.PUBLIC_URL}/utileria/antiguos-moviola.jpg`,
    bronce: `${process.env.PUBLIC_URL}/utileria/antiguos-bronce.jpg`,
    ciencia: `${process.env.PUBLIC_URL}/utileria/antiguos-ciencia.jpg`,
  },

  // 🔧 EDITABLE: imagen del caption banner
  CAPTION: `${process.env.PUBLIC_URL}/utileria/caption-antiguos.jpg`,

  // 🔧 EDITABLE: tiras del CustomCarousel (CRT/TV curado)
  CAROUSEL_CRT: [
    {
      image: `${process.env.PUBLIC_URL}/utileria/carousel-crt-1.jpg`,
      alt: "Monitor CRT de estudio",
      link: "/catalogo?cat=utileria",
    },
    {
      image: `${process.env.PUBLIC_URL}/utileria/carousel-crt-2.jpg`,
      alt: "Televisor tubo 20”",
      link: "/catalogo?cat=utileria",
    },
    {
      image: `${process.env.PUBLIC_URL}/utileria/carousel-crt-3.jpg`,
      alt: "VHS/VCR y distribución compuesta",
      link: "/catalogo?cat=utileria",
    },
    {
      image: `${process.env.PUBLIC_URL}/utileria/carousel-crt-4.jpg`,
      alt: "TV retro con perillas",
      link: "/catalogo?cat=utileria",
    },
  ],

  // 🔧 EDITABLE: imágenes del moodboard/galería
  MOODBOARD: [
    `${process.env.PUBLIC_URL}/utileria/mood-1.jpg`,
    `${process.env.PUBLIC_URL}/utileria/mood-2.jpg`,
    `${process.env.PUBLIC_URL}/utileria/mood-3.jpg`,
    `${process.env.PUBLIC_URL}/utileria/mood-4.jpg`,
    `${process.env.PUBLIC_URL}/utileria/mood-5.jpg`,
    `${process.env.PUBLIC_URL}/utileria/mood-6.jpg`,
  ],
};

/* ============================================================
   Animaciones
============================================================ */
const pageVariants = {
  initial: { opacity: 0, x: "100%" },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.2, 0.7, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    x: "-100%",
    transition: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 14, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 0.65, 0.3, 1] },
  },
};

/* ============================================================
   Icono WhatsApp
============================================================ */
const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 32 32" width="18" height="18" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M19.11 17.47c-.28-.14-1.63-.8-1.88-.89-.25-.09-.43-.14-.62.14-.19.28-.71.89-.87 1.07-.16.19-.32.21-.6.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.46h-.53c-.19 0-.49.07-.74.35-.25.28-.97.95-.97 2.32 0 1.37 1 2.7 1.14 2.89.14.19 1.97 3.01 4.77 4.22.67.29 1.19.46 1.59.59.67.21 1.28.18 1.76.11.54-.08 1.63-.66 1.86-1.3.23-.65.23-1.2.16-1.32-.06-.12-.25-.19-.53-.33zM16.02 3.2c-7.09 0-12.83 5.75-12.83 12.84 0 2.26.59 4.39 1.62 6.23L3.2 28.8l6.72-1.76a12.73 12.73 0 0 0 6.1 1.56c7.09 0 12.83-5.75 12.83-12.84 0-7.09-5.74-12.76-12.83-12.76zm7.51 20.35c-.32.91-1.85 1.74-2.58 1.86-.69.11-1.58.16-2.56-.16-1.58-.52-3.1-1.12-5.4-3.21-2-1.79-3.34-4.01-3.74-4.69-.39-.69-.8-1.83-.8-2.93 0-1.09.52-2.59 1.2-3.34.69-.85 1.52-1.12 2.05-1.12.5 0 .99.01 1.42.03.46.02 1.07-.17 1.66 1.27.59 1.43 1.01 2.35 1.09 2.52.09.16.14.35.03.56-.11.21-.17.35-.34.54-.19.23-.35.4-.5.64-.16.23-.33.48-.14.85.19.35.84 1.39 1.8 2.26 1.24 1.1 2.28 1.45 2.65 1.63.35.17.69.15.95-.09.26-.23 1.09-1.28 1.39-1.72.3-.43.61-.36 1.02-.21.43.16 2.71 1.28 3.18 1.51.47.23.78.35.9.54.11.19.11 1.09-.21 2z"
    />
  </svg>
);

/* ============================================================
   Navbar
============================================================ */
function UtileriaNav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const goEDR = () => navigate("/");

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-black/55 border-b border-white/10">
        <div className="max-w-[1440px] h-16 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-white">
          {/* Brand */}
          <button
            onClick={() => navigate("/utileria")}
            className="flex items-center gap-3"
            aria-label="ARS MACHINA"
          >
            <div
              className="w-8 h-8 rounded-md"
              style={{ background: `linear-gradient(135deg, ${ACCENT.main}, ${ACCENT.dark})` }}
            />
            <span className="font-extrabold tracking-wide text-sm sm:text-base">
              ARS MACHINA
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-3">
            <Link
              to="/catalogo?cat=utileria"
              className="text-sm px-3 py-1.5 rounded-md hover:bg-white/5 transition-colors inline-flex items-center gap-2"
              title="Catálogo"
            >
              <Film size={16} /> Catálogo
            </Link>
            <Link
              to="/utileria#colecciones"
              className="text-sm px-3 py-1.5 rounded-md hover:bg-white/5 transition-colors inline-flex items-center gap-2"
              title="Colecciones"
            >
              <LayoutGrid size={16} /> Colecciones
            </Link>
            <button
              onClick={goEDR}
              className="text-sm px-3 py-1.5 rounded-md border border-white/20 hover:bg-white/5 transition-colors inline-flex items-center gap-2"
              title="Volver a EDR"
            >
              <ChevronRight size={16} className="-scale-x-100" /> Volver a EDR
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm px-3 py-1.5 rounded-md inline-flex items-center gap-2"
              style={{ color: ACCENT.light }}
              title="WhatsApp"
            >
              <WhatsAppIcon /> WhatsApp
            </a>
          </nav>

          {/* Mobile menu */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/15"
            aria-label="Abrir menú"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="1.6" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#0B0B0C]/95 backdrop-blur border-b border-white/10 z-40">
          <div className="px-4 py-3 space-y-2 text-white">
            <Link
              to="/catalogo?cat=utileria"
              className="block px-2 py-2 rounded hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              <span className="inline-flex items-center gap-2">
                <Film size={16} /> Catálogo
              </span>
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="block px-2 py-2 rounded hover:bg-white/5"
              onClick={() => setOpen(false)}
              style={{ color: ACCENT.light }}
            >
              <span className="inline-flex items-center gap-2">
                <WhatsAppIcon /> WhatsApp
              </span>
            </a>
            <button
              onClick={() => {
                setOpen(false);
                goEDR();
              }}
              className="w-full text-left px-2 py-2 rounded hover:bg-white/5"
            >
              <span className="inline-flex items-center gap-2">
                <ChevronRight size={16} className="-scale-x-100" /> Volver a EDR
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ============================================================
   Página
============================================================ */
const Utileria = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  // 🔧 EDITABLE: items destacados (grid)
  const destacados = [
    {
      title: "Cámaras analógicas",
      desc: "35mm, medio formato y polaroid para set.",
      tag: "Foto / Vintage",
      image: MEDIA.DESTACADOS.foto,
      link: "/catalogo?cat=utileria",
    },
    {
      title: "Cámaras de video & broadcast",
      desc: "ENG, handycam, betacam y accesorios de época.",
      tag: "Video / Broadcast",
      image: MEDIA.DESTACADOS.video,
      link: "/catalogo?cat=utileria",
    },
    {
      title: "Televisores & monitores CRT",
      desc: "TV a tubo, monitores estudio, VCR, señal compuesta.",
      tag: "Televisión / CRT",
      image: MEDIA.DESTACADOS.crt,
      link: "/catalogo?cat=utileria",
    },
    {
      title: "Moviolas & edición",
      desc: "Moviola, splicers, bobinas, latas y mesa de corte.",
      tag: "Cine / Edición",
      image: MEDIA.DESTACADOS.moviola,
      link: "/catalogo?cat=utileria",
    },
    {
      title: "Bronces & utilería de época",
      desc: "Teléfonos, lámparas, relojes y ornamentos.",
      tag: "Época / Bronce",
      image: MEDIA.DESTACADOS.bronce,
      link: "/catalogo?cat=utileria",
    },
    {
      title: "Piezas científicas",
      desc: "Microscopios, instrumentos y medidores vintage.",
      tag: "Ciencia / Laboratorio",
      image: MEDIA.DESTACADOS.ciencia,
      link: "/catalogo?cat=utileria",
    },
  ];

  const faqs = [
    {
      q: "¿Qué incluyen?",
      a: "Cámaras foto/vídeo, TV/CRT, moviolas, bronces y piezas científicas listas para cámara.",
    },
    {
      q: "¿Funciona todo?",
      a: "Curamos por estética y época. Algunas unidades son operativas y otras decorativas.",
    },
    {
      q: "¿Personalizan props?",
      a: "Sí, rotulados de época, cableado y kits armados por guion.",
    },
    {
      q: "¿Logística?",
      a: "Retiro en depósito o envío a set. Continuidad y checklists.",
    },
  ];

  return (
    <motion.main
      className="min-h-screen bg-black text-white"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* NAV */}
      <UtileriaNav />
      {/* compensación por navbar fijo */}
      <div className="h-16" />

      {/* ===================== HERO (VIDEO) ===================== */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* 🔧 EDITABLE: cambiá MEDIA.HERO_VIDEO y MEDIA.HERO_POSTER arriba */}
          <video
            className="w-full h-full object-cover"
            src={MEDIA.HERO_VIDEO}
            poster={MEDIA.HERO_POSTER}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-8">
          <div className="min-h-[calc(100vh-4rem)] flex flex-col items-start justify-center">
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
                ARS MACHINA
              </h1>
              <p className="mt-3 text-base sm:text-lg text-white/90">
                Antigüedades de cine, televisión y ciencia
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to="/catalogo?cat=utileria"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-wide"
                  style={{
                    background: `linear-gradient(90deg, ${ACCENT.main}, ${ACCENT.dark})`,
                    boxShadow: `0 10px 30px -10px ${ACCENT.dark}cc`,
                  }}
                >
                  Ver catálogo
                  <ChevronRight size={16} />
                </Link>

                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-wide border border-white/20 hover:bg-white/5 transition-colors"
                >
                  <ChevronRight size={16} className="-scale-x-100" />
                  Volver a EDR
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="h-[2px] w-full"
          style={{ background: `linear-gradient(90deg, ${ACCENT.dark}, ${ACCENT.light})` }}
        />
      </section>

      {/* ================= COLECCIONES (ÍCONOS) ================= */}
      <section id="colecciones" className="py-10 sm:py-12 bg-[#0E0F10]">
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {[
              { icon: Camera, label: "Cámaras foto" },
              { icon: Video, label: "Cámaras video" },
              { icon: Tv, label: "TV / CRT" },
              { icon: Film, label: "Moviola" },
              { icon: Microscope, label: "Laboratorio" },
              { icon: FlaskConical, label: "Instrumental" },
            ].map(({ icon: Icon, label }) => (
              <Link
                key={label}
                to="/catalogo?cat=utileria"
                className="group h-20 rounded-xl border border-[#1f1f20] bg-gradient-to-br from-[#141416] to-[#0b0b0c] flex flex-col items-center justify-center hover:border-[#2a2a2a] transition-colors"
                title={label}
              >
                <Icon size={20} className="mb-1.5 opacity-90" />
                <span className="text-xs text-white/80">{label}</span>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============= CAPTION (curaduría/servicio) ============= */}
      <section className="relative">
        <div className="max-w-[1440px] mx-auto px-6 py-12 sm:py-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-[#1c1c1d] overflow-hidden bg-[#0E0F10]"
          >
            <div className="p-6 sm:p-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                  Curaduría por época & estética
                </h2>
                <p className="mt-3 text-white/80">
                  Props vintage listos para cámara. Rotulados y kits por guion en 24–48 h.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-white/75">
                  <li>• Foto/vídeo, TV/CRT, moviola</li>
                  <li>• Bronces e instrumental científico</li>
                  <li>• Continuidad y checklists</li>
                </ul>
                <div className="mt-6">
                  <Link
                    to="/catalogo?cat=utileria"
                    className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold"
                    style={{
                      background: `linear-gradient(90deg, ${ACCENT.main} 0%, ${ACCENT.dark} 100%)`,
                    }}
                  >
                    Ver utilería disponible <ChevronRight className="ml-1" size={16} />
                  </Link>
                </div>
              </div>
              <div className="relative">
                {/* 🔧 EDITABLE: cambiá MEDIA.CAPTION arriba */}
                <div
                  className="aspect-[16/10] rounded-xl bg-center bg-cover border border-[#1f1f20]"
                  style={{
                    backgroundImage: `url('${MEDIA.CAPTION}')`,
                    boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.02)`,
                  }}
                />
                <div
                  className="absolute -inset-2 -z-10 rounded-3xl blur-2xl opacity-20"
                  style={{ background: `linear-gradient(90deg, ${ACCENT.dark}, ${ACCENT.light})` }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========== PRODUCTOS DESTACADOS (TU CAROUSEL) ========= */}
      <section className="py-10 sm:py-12 border-y border-[#1c1c1d] bg-[#0b0b0c]">
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.h3
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-2xl sm:text-3xl font-extrabold mb-6 flex items-center gap-2"
          >
            <Boxes size={22} /> Selección destacada
          </motion.h3>
          {/* 🔧 EDITABLE: si tu ProductCarousel acepta filtros/props, pasalos acá */}
          <ProductCarousel /* tag="antiguos" category="utileria-antigua" */ />
        </div>
      </section>

      {/* =============== CUSTOM CAROUSEL (CRT CURADO) ============ */}
      <section className="py-10 sm:py-12 bg-[#0E0F10]">
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.h3
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-2xl sm:text-3xl font-extrabold mb-4 flex items-center gap-2"
          >
            <Tv size={22} /> Colección: TV / CRT & VCR
          </motion.h3>
          {/* 🔧 EDITABLE: cambiá los slides en MEDIA.CAROUSEL_CRT arriba */}
          <CustomCarousel slides={MEDIA.CAROUSEL_CRT} />
        </div>
      </section>

      {/* =================== GRID DESTACADOS ===================== */}
      <section className="py-10 sm:py-14">
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.h3
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-2xl sm:text-3xl font-extrabold mb-6"
          >
            Piezas para cámara
          </motion.h3>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {destacados.map((it, idx) => (
              <Link
                to={it.link}
                key={idx}
                className="group rounded-2xl overflow-hidden border border-[#1c1c1d] bg-[#111213] hover:border-[#242424] transition-colors"
              >
                {/* 🔧 EDITABLE: cada card usa it.image (arriba) */}
                <div
                  className="aspect-[4/3] bg-center bg-cover"
                  style={{ backgroundImage: `url('${it.image}')` }}
                />
                <div className="p-4">
                  <div className="text-xs uppercase tracking-wider" style={{ color: ACCENT.light }}>
                    {it.tag}
                  </div>
                  <h4 className="mt-1 font-semibold text-lg">{it.title}</h4>
                  <p className="mt-1 text-sm text-white/80 line-clamp-2">{it.desc}</p>
                  <span
                    className="mt-3 inline-flex items-center gap-1 text-sm"
                    style={{ color: ACCENT.main }}
                  >
                    Ver más
                    <ChevronRight width={14} height={14} />
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =================== MOODBOARD / GALERÍA ================= */}
      <section className="py-10 sm:py-12 border-y border-[#1c1c1d]" style={{ background: `linear-gradient(180deg, #0b0b0c, #0f0f10)` }}>
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.h3
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-2xl sm:text-3xl font-extrabold mb-6 flex items-center gap-2"
          >
            <BadgeInfo size={22} /> Moodboard & detalles
          </motion.h3>

          {/* 🔧 EDITABLE: cambiá las imágenes en MEDIA.MOODBOARD arriba */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {MEDIA.MOODBOARD.map((src, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-center bg-cover border border-[#1f1f20]"
                style={{ backgroundImage: `url('${src}')` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================= KPIs ========================= */}
      <section className="py-10 sm:py-12 border-b border-[#1c1c1d]">
        <div className="max-w-[1440px] mx-auto px-6 grid sm:grid-cols-3 gap-6 text-center">
          {[
            { k: "+1200", l: "Piezas en catálogo" },
            { k: "24/7", l: "Soporte a producción" },
            { k: "48 h", l: "Turnaround custom" },
          ].map((stat) => (
            <div key={stat.l} className="rounded-xl p-6 bg-[#0E0F10] border border-[#1f1f20]">
              <div className="text-3xl font-extrabold" style={{ color: ACCENT.light }}>
                {stat.k}
              </div>
              <div className="text-sm text-white/80 mt-1">{stat.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================== FAQ ========================= */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[920px] mx-auto px-6">
          <motion.h3
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-2xl sm:text-3xl font-extrabold mb-6"
          >
            Preguntas frecuentes
          </motion.h3>

          <div className="divide-y divide-[#1d1d1e] rounded-2xl border border-[#1c1c1d] overflow-hidden">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-[#0f0f10] open:bg[#121315] transition-colors">
                <summary className="cursor-pointer list-none p-5 sm:p-6 flex items-start justify-between">
                  <div className="pr-6">
                    <h4 className="font-semibold">{f.q}</h4>
                    <p className="mt-1.5 text-sm text-white/80">{f.a}</p>
                  </div>
                  <span
                    className="mt-1 rounded-full w-8 h-8 flex items-center justify-center border text-xs shrink-0"
                    style={{ borderColor: ACCENT.main, color: ACCENT.main }}
                  >
                    +
                  </span>
                </summary>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================== CTA ======================== */}
      <section className="py-16 relative">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: `radial-gradient(60% 60% at 50% 80%, ${ACCENT.dark}22 0%, transparent 70%)` }}
        />
        <div className="max-w-[960px] mx-auto px-6 text-center">
          <h3 className="text-3xl sm:text-4xl font-extrabold">¿Buscás piezas vintage?</h3>
          <p className="mt-3 text-white/80">Armamos el kit ideal para tu escena.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              to="/catalogo?cat=utileria"
              className="rounded-full px-6 py-3 font-semibold uppercase tracking-wide inline-flex items-center gap-2"
              style={{ background: `linear-gradient(90deg, ${ACCENT.main}, ${ACCENT.dark})` }}
            >
              Ver catálogo <ChevronRight size={16} />
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-6 py-3 font-semibold uppercase tracking-wide border inline-flex items-center gap-2"
              style={{ borderColor: ACCENT.light, color: ACCENT.light }}
            >
              <WhatsAppIcon /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ========================= FOOTER ======================= */}
      <footer className="bg-black border-t border-[#121212]">
        <div className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} ARS MACHINA • Antigüedades de cine & ciencia
          </p>
          <div className="text-xs text-white/50 flex items-center gap-3 mt-3 sm:mt-0">
            <a href="/politicas" className="hover:text-white/80">Políticas</a>
            <span>•</span>
            <a href="/contacto" className="hover:text-white/80">Contacto</a>
          </div>
        </div>
      </footer>
    </motion.main>
  );
};

export default Utileria;
