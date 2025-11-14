import React, { useEffect, useMemo, useRef } from "react";
import SlideCarousel from "../ui/SlideCarousel";
import NavBarUtileria from "../NavBarUtileria";
import FooterUtileria from "../FooterUtileria";

const NAV_HEIGHT = 80;
const ACCENT = "#b45309";

// 100vh real
const PAGE_HEIGHT = `calc((var(--vh, 1vh) * 100) - ${NAV_HEIGHT}px)`;

// Hero BG
const INTRO_BG = "/utileria/hero-poster.png";

const INTRO_OVERLAY = `
  linear-gradient(
    180deg,
    rgba(0,0,0,0.25) 0%,
    rgba(0,0,0,0.35) 50%,
    rgba(0,0,0,0.45) 100%
  )
`;

const SECTIONS = [
  {
    id: "television",
    bg: "/utileria/hero-television.png",
    overlay: `
      linear-gradient(
        180deg,
        rgba(0,0,0,0.25) 0%,
        rgba(0,0,0,0.35) 55%,
        rgba(0,0,0,0.45) 100%
      )
    `,
    slides: [
      { type: "title", title: "TELEVISIÓN" },
      {
        title: "Estudios, móviles y señal al aire",
        text:
          "Cámaras de estudio broadcast, cámaras portátiles de hombro de todas las épocas, camcorders, estuches profesionales...",
        cta: { label: "Ver equipamiento", href: "/catalogo?cat=utileria" },
      },
    ],
  },
  {
    id: "cine",
    bg: "/utileria/hero-cine.png",
    overlay: `
      linear-gradient(
        180deg,
        rgba(0,0,0,0.20) 0%,
        rgba(0,0,0,0.40) 60%,
        rgba(0,0,0,0.55) 100%
      )
    `,
    slides: [
      { type: "title", title: "CINE" },
      {
        title: "Del origen del celuloide a lo contemporáneo",
        text:
          "Cámaras de cine de todas las épocas, lentes, trípodes, cabezales...",
        cta: { label: "Ver catálogo de cine", href: "/catalogo?cat=utileria" },
      },
    ],
  },
  {
    id: "fotografia",
    bg: "/utileria/hero-foto.png",
    overlay: `
      linear-gradient(
        180deg,
        rgba(0,0,0,0.18) 0%,
        rgba(0,0,0,0.35) 60%,
        rgba(0,0,0,0.50) 100%
      )
    `,
    slides: [
      { type: "title", title: "FOTOGRAFÍA" },
      {
        title: "Cámaras, ópticas y flashes de época",
        text: "Cámaras antiguas de todas las épocas, lentes, flashes...",
        cta: { label: "Ver fotografía", href: "/catalogo?cat=utileria" },
      },
    ],
  },
  {
    id: "ciencia",
    bg: "/utileria/hero-ciencia.png",
    overlay: `
      linear-gradient(
        180deg,
        rgba(0,0,0,0.18) 0%,
        rgba(0,0,0,0.35) 60%,
        rgba(0,0,0,0.50) 100%
      )
    `,
    slides: [
      { type: "title", title: "ARTEFACTOS CIENTÍFICOS" },
      {
        title: "Laboratorio, medición y óptica clásica",
        text: "Microscopios, instrumental y medidores vintage...",
        cta: { label: "Ver ciencia", href: "/catalogo?cat=utileria" },
      },
    ],
  },
];

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

function useFullpageDesktop(scrollerRef, pageRefs) {
  const animRef = useRef(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const isDesktop = window.matchMedia(
      "(pointer: fine) and (hover: hover)"
    ).matches;
    if (!isDesktop) return;

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
      animRef.current = true;
      scroller.scrollTo({ top: tops[i], behavior: "smooth" });
      setTimeout(() => (animRef.current = false), 700);
    };

    const onWheel = (e) => {
      if (animRef.current) {
        e.preventDefault();
        return;
      }
      const idx = nearestIndex();
      const dir = e.deltaY > 0 ? 1 : -1;
      if (dir > 0 && idx < pageRefs.length - 1) {
        e.preventDefault();
        jumpTo(idx + 1);
      } else if (dir < 0 && idx > 0) {
        e.preventDefault();
        jumpTo(idx - 1);
      }
    };

    scroller.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      scroller.removeEventListener("wheel", onWheel);
    };
  }, [scrollerRef, pageRefs]);
}

export default function Utileria() {
  useMobileVh();

  const scrollerRef = useRef(null);
  const introRef = useRef(null);
  const footerRef = useRef(null);
  const sectionRefs = useMemo(() => SECTIONS.map(() => React.createRef()), []);

  const pageRefs = [introRef, ...sectionRefs, footerRef];

  useFullpageDesktop(scrollerRef, pageRefs);

  const goToCatalog = () => {
    const first = sectionRefs[0]?.current;
    scrollerRef.current?.scrollTo({
      top: first.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black text-white min-h-screen" style={{ overflowX: "hidden" }}>
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBarUtileria />
      </div>

      <div style={{ height: NAV_HEIGHT }} />

      <div
        ref={scrollerRef}
        className="relative w-full overflow-y-auto snap-y snap-mandatory"
        style={{ height: PAGE_HEIGHT, scrollBehavior: "smooth" }}
      >
        <main className="relative">

          {/* HERO */}
         {/* HERO COMPLETO */}
          <section
            id="intro"
            ref={introRef}
            className="relative w-full overflow-hidden snap-start bg-center bg-cover"
            style={{
              height: PAGE_HEIGHT,
              backgroundImage: `url(${INTRO_BG})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0" style={{ background: INTRO_OVERLAY }} />

            {/* CONTENIDO */}
            <div className="relative h-full w-full flex items-center justify-center px-6">
              <div className="max-w-3xl text-center">

                {/* Título */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
                  <span>ARS </span>
                  <span style={{ color: ACCENT }}>MACHINA</span>
                </h1>

                {/* Subtítulo restaurado */}
                <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-neutral-300 font-light">
                  ARS MACHINA es un proyecto dedicado al alquiler de tecnología histórica:
                  fotografía, cine, televisión y artefactos científicos. Con piezas donde
                  la estética clásica en ópticas, latón y cobre es protagonista.
                </p>

                {/* Botón */}
                <div className="mt-8 flex flex-col items-center gap-2">
                  <button
                    onClick={goToCatalog}
                    className="uppercase tracking-wider text-sm sm:text-base inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                    style={{
                      borderColor: `${ACCENT}66`,
                      color: `${ACCENT}`,
                    }}
                  >
                    Pasar al catálogo
                  </button>

                  {/* Flechita animada */}
                  <div
                    className="mt-2 animate-bounce cursor-pointer"
                    onClick={goToCatalog}
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
          </section>


          {/* SECCIONES */}
          {SECTIONS.map((s, i) => (
            <section
              key={s.id}
              ref={sectionRefs[i]}
              className="relative w-full overflow-hidden snap-start bg-center bg-cover"
              style={{
                height: PAGE_HEIGHT,
                backgroundImage: `url(${s.bg})`,
              }}
            >
              <div className="absolute inset-0" style={{ background: s.overlay }} />

              <div className="h-full flex items-center">
                <SlideCarousel slides={s.slides} accent={ACCENT} />
              </div>
            </section>
          ))}

          {/* FOOTER */}
          <div ref={footerRef} className="snap-start">
            <FooterUtileria />
          </div>
        </main>
      </div>
    </div>
  );
}
