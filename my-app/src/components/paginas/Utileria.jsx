import React, { useEffect, useMemo, useRef } from "react";
import SlideCarousel from "../ui/SlideCarousel";
import NavBarUtileria from "../NavBarUtileria";
import FooterUtileria from "../FooterUtileria";

const NAV_HEIGHT = 80;           // h-20 del navbar
const ACCENT = "#b45309";        // óxido
const MEDIA = (p) => `${process.env.PUBLIC_URL}${p}`;

// SECCIONES PRINCIPALES
const SECTIONS = [
  {
    id: "television",
    bg: MEDIA("/utileria/hero-poster.jpg"),
    overlay:
      "radial-gradient(60% 60% at 50% 40%, rgba(0,0,0,.35) 0%, rgba(0,0,0,.65) 60%, rgba(0,0,0,.8) 100%)",
    slides: [
      { type: "title", title: "TELEVISIÓN" },
      {
        title: "Estudios, móviles y señal al aire",
        text:
          "Cámaras de estudio broadcast, cámaras portátiles de hombro de todas las épocas, camcorders, estuches profesionales de todo tipo, color y época, monitores, aparatología de televisión, mixers, editoras, trípodes y cabezales de cada época, pedestales con contrapeso e hidráulica, pedestales neumáticos, cables para cámaras de todas las épocas, etc.",
        cta: { label: "Ver equipamiento", href: "/catalogo?cat=utileria" },
      },
    ],
  },
  {
    id: "cine",
    bg: MEDIA("/utileria/antiguos-foto.jpg"),
    overlay:
      "linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.6) 70%, rgba(0,0,0,.85) 100%)",
    slides: [
      { type: "title", title: "CINE" },
      {
        title: "Del origen del celuloide a lo contemporáneo",
        text:
          "Cámaras de cine de todas las épocas, del origen del cine a la actualidad; lentes, trípodes y cabezales; instrumentos de cine antiguos (moviola), accesorios de set y cables para cámaras de todas las épocas.",
        cta: { label: "Ver catálogo de cine", href: "/catalogo?cat=utileria" },
      },
    ],
  },
  {
    id: "fotografia",
    bg: MEDIA("/utileria/antiguos-foto.jpg"),
    overlay:
      "linear-gradient(180deg, rgba(0,0,0,.2) 0%, rgba(0,0,0,.6) 65%, rgba(0,0,0,.85) 100%)",
    slides: [
      { type: "title", title: "FOTOGRAFÍA" },
      {
        title: "Cámaras, ópticas y flashes de época",
        text:
          "Cámaras antiguas de todas las épocas, lentes de todas las épocas y flashes de todas las épocas, listas para cuadro en cualquier década.",
        cta: { label: "Ver fotografía", href: "/catalogo?cat=utileria" },
      },
    ],
  },
  {
    id: "ciencia",
    bg: MEDIA("/utileria/antiguos-ciencia.jpg"),
    overlay:
      "linear-gradient(180deg, rgba(0,0,0,.2) 0%, rgba(0,0,0,.6) 65%, rgba(0,0,0,.85) 100%)",
    slides: [
      { type: "title", title: "ARTEFACTOS CIENTÍFICOS" },
      {
        title: "Laboratorio, medición y óptica clásica",
        text:
          "Microscopios, instrumental y medidores vintage; aparatos de laboratorio, ópticas científicas en latón y cobre, kits armados por continuidad para ciencia, medicina, industria y universidades.",
        cta: { label: "Ver ciencia", href: "/catalogo?cat=utileria" },
      },
    ],
  },
];

/** 100vh real en móviles */
function useMobileVh() {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    window.addEventListener("orientationchange", setVh);
    return () => {
      window.removeEventListener("resize", setVh);
      window.removeEventListener("orientationchange", setVh);
    };
  }, []);
}

/** Fullpage vertical jump en DESKTOP.
 *  - Usa un contenedor scroller (no la ventana) para evitar conflictos.
 *  - El footer se trata como una "página" extra para poder llegar con un salto.
 */
function useFullpageDesktop(scrollerRef, pageRefs) {
  const animRef = useRef(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const isDesktop = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
    if (!isDesktop) return; // en mobile/tablet usamos scroll-snap nativo

    const pageTops = () =>
      pageRefs.map((r) => (r.current ? r.current.offsetTop : 0));

    const nearestIndex = () => {
      const tops = pageTops();
      const y = scroller.scrollTop;
      let best = 0;
      let bestDist = Math.abs(tops[0] - y);
      for (let i = 1; i < tops.length; i++) {
        const d = Math.abs(tops[i] - y);
        if (d < bestDist) {
          best = i;
          bestDist = d;
        }
      }
      return best;
    };

    const jumpTo = (i) => {
      const tops = pageTops();
      const clamped = Math.max(0, Math.min(tops.length - 1, i));
      animRef.current = true;
      scroller.scrollTo({ top: tops[clamped], behavior: "smooth" });
      setTimeout(() => (animRef.current = false), 700);
    };

    const onWheel = (e) => {
      if (animRef.current) {
        e.preventDefault();
        return;
      }
      const idx = nearestIndex();
      const last = pageRefs.length - 1;
      const dir = e.deltaY > 0 ? 1 : -1;

      if (dir > 0 && idx < last) {
        e.preventDefault();
        jumpTo(idx + 1);
      } else if (dir < 0 && idx > 0) {
        e.preventDefault();
        jumpTo(idx - 1);
      } else {
        // extremos: scroll nativo
      }
    };

    const onKey = (e) => {
      if (animRef.current) return;
      if (["ArrowDown", "PageDown"].includes(e.key)) {
        e.preventDefault();
        const idx = nearestIndex();
        if (idx < pageRefs.length - 1) jumpTo(idx + 1);
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        const idx = nearestIndex();
        if (idx > 0) jumpTo(idx - 1);
      }
    };

    scroller.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey, { passive: false });

    return () => {
      scroller.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
  }, [scrollerRef, pageRefs]);
}

export default function Utileria() {
  useMobileVh();

  // scroller con altura = viewport - navbar
  const scrollerRef = useRef(null);

  // refs de secciones + intro + footer (footerPageRef)
  const sectionRefs = useMemo(() => SECTIONS.map(() => React.createRef()), []);
  const introRef = useRef(null);     // nueva "página" de introducción
  const footerPageRef = useRef(null); // wrapper del footer que actúa como "página"
  const pageRefs = [introRef, ...sectionRefs, footerPageRef];

  useFullpageDesktop(scrollerRef, pageRefs);

  // seteo CSS var para altura de cada "pantalla" del scroller
  useEffect(() => {
    const setSh = () => {
      const sh = window.innerHeight - NAV_HEIGHT;
      if (scrollerRef.current) {
        scrollerRef.current.style.setProperty("--sh", `${sh}px`);
      }
    };
    setSh();
    window.addEventListener("resize", setSh);
    window.addEventListener("orientationchange", setSh);
    return () => {
      window.removeEventListener("resize", setSh);
      window.removeEventListener("orientationchange", setSh);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  // handler para flecha "Pasar al catálogo"
  const goToCatalog = () => {
    const first = sectionRefs[0]?.current;
    if (first && scrollerRef.current) {
      scrollerRef.current.scrollTo({ top: first.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen" style={{ overflowX: "hidden" }}>
      {/* NAV fijo */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBarUtileria />
      </div>

      {/* separador navbar */}
      <div style={{ height: NAV_HEIGHT }} aria-hidden="true" />

      {/* línea superior óxido */}
      <div
        className="w-full"
        style={{
          height: 2,
          background: `linear-gradient(90deg, ${ACCENT} 0%, rgba(180,83,9,.2) 100%)`,
        }}
      />

      {/* SCROLLER: acá vive TODO (intro + secciones + footer) */}
      <div
        ref={scrollerRef}
        className="
          relative w-full
          overflow-y-auto
          md:snap-none
          snap-y snap-mandatory
        "
        style={{
          height: "calc((var(--vh, 1vh) * 100) - 80px)", // 100vh real - navbar
          scrollBehavior: "smooth",
        }}
      >
        <main className="relative">
          {/* INTRO / BANNER */}
          <section
            id="intro"
            ref={introRef}
            className="relative w-full overflow-hidden snap-start"
            style={{ height: "var(--sh)" }}
          >
            {/* fondo/overlay con más tonos cobre */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                background: `
                  radial-gradient(
                    80% 60% at 50% 0%,
                    rgba(180, 83, 9, 0.38) 0%,
                    rgba(120, 53, 15, 0.75) 35%,
                    transparent 70%
                  ),
                  linear-gradient(
                    180deg,
                    rgba(0,0,0,0.85) 0%,
                    rgba(15,7,0,0.96) 65%,
                    rgba(0,0,0,1) 100%
                  )
                `,
              }}
            />

            {/* contenido centrado */}
            <div className="h-full w-full flex items-center justify-center px-6">
              <div className="max-w-3xl text-center">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
                  <span>ARS </span>
                  <span style={{ color: ACCENT }}>MACHINA</span>
                </h1>
                <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-neutral-300 font-light">
                  ARS MACHINA es un proyecto dedicado al alquiler de tecnología histórica: fotografía, cine, televisión y artefactos científicos. Con piezas donde la estética clásica en ópticas, latón y cobre es protagonista.
                </p>

                {/* CTA flecha */}
                <div className="mt-8 flex flex-col items-center gap-2">
                  <button
                    onClick={goToCatalog}
                    className="uppercase tracking-wider text-sm sm:text-base inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                    style={{ borderColor: `${ACCENT}66`, color: `${ACCENT}` }}
                    aria-label="Pasar al catálogo"
                  >
                    Pasar al catálogo
                  </button>

                  {/* flecha animada extra (rebote) */}
                  <div
                    className="mt-2 animate-bounce cursor-pointer"
                    onClick={goToCatalog}
                    aria-hidden="true"
                  >
                    <svg
                      className="w-6 h-6 opacity-80"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* línea superior de la intro */}
            <div
              className="absolute top-0 inset-x-0"
              style={{
                height: 1,
                background: `linear-gradient(90deg, ${ACCENT}88, transparent)`,
              }}
            />
          </section>

          {/* SECCIONES */}
          {SECTIONS.map((s, i) => (
            <section
              key={s.id}
              id={s.id}
              ref={sectionRefs[i]}
              className="relative w-full overflow-hidden snap-start"
              style={{ height: "var(--sh)" }} // cada sección = una pantalla del scroller
            >
              {/* fondo */}
              <div
                className="absolute inset-0 -z-10 bg-center bg-cover"
                style={{ backgroundImage: `url('${s.bg}')` }}
              />
              <div className="absolute inset-0 -z-10" style={{ background: s.overlay }} />

              {/* glow inferior óxido */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 -z-10"
                style={{
                  background: `radial-gradient(60% 50% at 50% 100%, ${ACCENT}22 0%, transparent 70%)`,
                }}
              />

              {/* carrusel */}
              <div className="h-full flex items-center">
                <div className="w-full">
                  <SlideCarousel slides={s.slides} accent={ACCENT} />
                </div>
              </div>

              {/* badge */}
              <div className="absolute bottom-5 left-5">
                <span
                  className="text-[10px] sm:text-xs tracking-widest uppercase px-3 py-1 rounded-full border"
                  style={{ borderColor: `${ACCENT}66`, color: `${ACCENT}` }}
                >
                  Ars Machina • Argentina
                </span>
              </div>

              {/* línea superior de sección */}
              <div
                className="absolute top-0 inset-x-0"
                style={{ height: 1, background: `linear-gradient(90deg, ${ACCENT}88, transparent)` }}
              />
            </section>
          ))}

          {/* línea inferior óxido */}
          <div
            className="w-full"
            style={{
              height: 2,
              background: `linear-gradient(90deg, rgba(180,83,9,.2) 0%, ${ACCENT} 100%)`,
            }}
          />

          {/* FOOTER como "página" final del scroller */}
          <div ref={footerPageRef} className="snap-start">
            <FooterUtileria />
          </div>
        </main>
      </div>
    </div>
  );
}
