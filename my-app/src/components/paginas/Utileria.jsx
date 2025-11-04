// src/components/paginas/Utileria.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

/** Landing UTILERÍA (ARS MACHINA)
 *  - Mantiene la estructura anterior (navbar + hero + secciones + grid + KPIs + FAQ + CTA + footer)
 *  - Cambios pedidos:
 *    • Título: ARS MACHINA
 *    • Subtítulo: Alquiler de props y utilería
 *    • Hero con VIDEO de fondo
 *    • Navbar propio (en este archivo) con botón “Volver a EDR”
 *    • Textos concisos (sin copy “de paleta”)
 *    • CTA a /catalogo?cat=utileria
 */

const ACCENT = {
  main: "#b45309", // cálido
  dark: "#92400e",
  light: "#fbbf24",
};

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

// ——— Navbar local (incluye "Volver a EDR")
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
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/catalogo?cat=utileria"
              className="text-sm hover:opacity-90 transition-opacity"
            >
              Catálogo
            </Link>
            <button
              onClick={goEDR}
              className="text-sm px-3 py-1.5 rounded-md border border-white/20 hover:bg-white/5 transition-colors"
            >
              Volver a EDR
            </button>
            <a
              href="https://wa.me/5491162983716"
              target="_blank"
              rel="noreferrer"
              className="text-sm px-3 py-1.5 rounded-md"
              style={{ color: ACCENT.light }}
            >
              WhatsApp
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
              Catálogo
            </Link>
            <button
              onClick={() => {
                setOpen(false);
                goEDR();
              }}
              className="w-full text-left px-2 py-2 rounded hover:bg-white/5"
            >
              Volver a EDR
            </button>
            <a
              href="https://wa.me/5491139457426"
              target="_blank"
              rel="noreferrer"
              className="block px-2 py-2 rounded hover:bg-white/5"
              onClick={() => setOpen(false)}
              style={{ color: ACCENT.light }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

const Utileria = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const destacados = [
    {
      title: "Valijas vintage",
      desc: "Rígidas y blandas para escena.",
      tag: "Época / Viajes",
      image: `${process.env.PUBLIC_URL}/utileria/valijas.jpg`,
      link: "/catalogo?cat=utileria",
    },
    {
      title: "Papelería de escena",
      desc: "Carpetas, sellos, formularios.",
      tag: "Oficina / Legal",
      image: `${process.env.PUBLIC_URL}/utileria/papeleria.jpg`,
      link: "/catalogo?cat=utileria",
    },
    {
      title: "Señalética",
      desc: "Tránsito, obra y seguridad.",
      tag: "Urbano / Seguridad",
      image: `${process.env.PUBLIC_URL}/utileria/senaletica.jpg`,
      link: "/catalogo?cat=utileria",
    },
    {
      title: "Celulares maqueta",
      desc: "Dummies realistas para cámara.",
      tag: "Tecnología / Props",
      image: `${process.env.PUBLIC_URL}/utileria/celulares.jpg`,
      link: "/catalogo?cat=utileria",
    },
    {
      title: "Maletines & cases",
      desc: "Metálicos, ploteados y con espuma.",
      tag: "Business / Transporte",
      image: `${process.env.PUBLIC_URL}/utileria/maletines.jpg`,
      link: "/catalogo?cat=utileria",
    },
    {
      title: "Herramientas escena",
      desc: "Props seguros de primer plano.",
      tag: "Taller / Obra",
      image: `${process.env.PUBLIC_URL}/utileria/herramientas.jpg`,
      link: "/catalogo?cat=utileria",
    },
  ];

  const faqs = [
    {
      q: "¿Qué incluyen?",
      a: "Props listos para rodaje: papelería, señalética, valijas, maletines, dummies, oficina, etc.",
    },
    {
      q: "¿Personalizan props?",
      a: "Sí, ploteos/rotulados y kits por guion o requerimiento de arte.",
    },
    {
      q: "¿Cómo es la logística?",
      a: "Retiro en depósito o envío a set. Checklists y continuidad.",
    },
    {
      q: "¿Coordinan con arte?",
      a: "Sí, trabajamos con dirección de arte/utileros.",
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
      {/* Compensación por navbar fijo */}
      <div className="h-16" />

      {/* HERO con VIDEO de fondo */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src={`${process.env.PUBLIC_URL}/utileria/hero.mp4`}
            poster={`${process.env.PUBLIC_URL}/utileria/hero-poster.jpg`}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-8">
          <div className="min-h-[calc(100vh-4rem)] flex flex-col items-start justify-center">
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
                ARS MACHINA
              </h1>
              <p className="mt-3 text-base sm:text-lg text-white/90">
                Alquiler de props y utilería
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
                  <svg width="16" height="16" fill="currentColor" className="-mr-1">
                    <path d="M9.293 3.293a1 1 0 011.414 0l3.999 3.999a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L11.586 9H2a1 1 0 110-2h9.586L9.293 4.707a1 1 0 010-1.414z"/>
                  </svg>
                </Link>

                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-wide border border-white/20 hover:bg-white/5 transition-colors"
                >
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

      {/* MARCAS / TEXTURA */}
      <section className="py-10 sm:py-12 bg-[#0E0F10]">
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center opacity-90"
          >
            {["prop-1","prop-2","prop-3","prop-4","prop-5","prop-6"].map((k) => (
              <div
                key={k}
                className="h-12 rounded bg-gradient-to-br from-[#1a1a1b] to-[#0b0b0c] border border-[#1f1f20] flex items-center justify-center"
              >
                <span className="text-xs text-white/40">LOGO</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CAPTION BANNER (conciso) */}
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
                  Utilería lista para rodaje
                </h2>
                <p className="mt-3 text-white/80">
                  Props listos para cámara. Personalización rápida y kits por guion.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-white/75">
                  <li>• Kits por escena (oficina, taller, viaje, obra)</li>
                  <li>• Rotulados/ploteos</li>
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
                    Ver utilería disponible
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div
                  className="aspect-[16/10] rounded-xl bg-center bg-cover border border-[#1f1f20]"
                  style={{
                    backgroundImage: `url('${process.env.PUBLIC_URL}/utileria/caption.jpg')`,
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

      {/* GRID DESTACADOS */}
      <section className="py-10 sm:py-14">
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.h3
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-2xl sm:text-3xl font-extrabold mb-6"
          >
            Destacados de utilería
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
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L12 6.414V16a1 1 0 11-2 0V6.414L5.707 9.707A1 1 0 114.293 8.293l5-5z"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* KPIs */}
      <section
        className="py-10 sm:py-12 border-y border-[#1c1c1d]"
        style={{ background: `linear-gradient(180deg, #0b0b0c, #0f0f10)` }}
      >
        <div className="max-w-[1440px] mx-auto px-6 grid sm:grid-cols-3 gap-6 text-center">
          {[
            { k: "+250", l: "Sets por año" },
            { k: "24/7", l: "Soporte a producción" },
            { k: "~90min", l: "Turnaround custom" },
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

      {/* FAQ */}
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

      {/* CTA FINAL */}
      <section className="py-16 relative">
        <div className="absolute inset-0 -z-10"
             style={{ background: `radial-gradient(60% 60% at 50% 80%, ${ACCENT.dark}22 0%, transparent 70%)` }} />
        <div className="max-w-[960px] mx-auto px-6 text-center">
          <h3 className="text-3xl sm:text-4xl font-extrabold">¿Necesitás props?</h3>
          <p className="mt-3 text-white/80">Armamos el kit ideal para tu producción.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              to="/catalogo?cat=utileria"
              className="rounded-full px-6 py-3 font-semibold uppercase tracking-wide"
              style={{ background: `linear-gradient(90deg, ${ACCENT.main}, ${ACCENT.dark})` }}
            >
              Ver catálogo
            </Link>
            <a
              href="https://wa.me/5491139457426"
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-6 py-3 font-semibold uppercase tracking-wide border"
              style={{ borderColor: ACCENT.light, color: ACCENT.light }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER mínimo */}
      <footer className="bg-black border-t border-[#121212]">
        <div className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} ARS MACHINA • Utilería
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
